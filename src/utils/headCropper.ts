// Dynamic import de face-api.js pour réduire le bundle initial
// Le package (~3MB) ne sera chargé que quand l'utilisateur clique sur "Couper la tête"

let faceapi: typeof import('face-api.js') | null = null;
let modelsLoaded = false;

const loadFaceApi = async () => {
  if (!faceapi) {
    faceapi = await import('face-api.js');
  }
  return faceapi;
};

export const loadFaceApiModels = async (): Promise<void> => {
  if (modelsLoaded) return;

  try {
    const api = await loadFaceApi();

    // Charger les modèles depuis le CDN
    const MODEL_URL = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights';

    await Promise.all([
      api.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      api.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    ]);

    modelsLoaded = true;
  } catch (error) {
    throw new Error('Impossible de charger les modèles de détection de visage');
  }
};

export const cropHead = async (imageUrl: string): Promise<string> => {
  try {
    // S'assurer que les modèles sont chargés (et face-api.js importé dynamiquement)
    await loadFaceApiModels();
    const api = await loadFaceApi();

    // Créer une image
    const img = new Image();
    img.crossOrigin = 'anonymous';

    return new Promise((resolve, reject) => {
      img.onload = async () => {
        try {
          // Détecter le visage et les points de repère
          const detections = await api
            .detectSingleFace(img, new api.TinyFaceDetectorOptions())
            .withFaceLandmarks();

          if (!detections) {
            // Si aucun visage détecté, couper approximativement
            const croppedImage = await cropImageApproximate(img);
            resolve(croppedImage);
            return;
          }

          // Obtenir les points de repère du visage
          const landmarks = detections.landmarks;
          const jawOutline = landmarks.getJawOutline();

          // Trouver le point le plus bas du menton
          const chinPoint = jawOutline.reduce((lowest, point) =>
            point.y > lowest.y ? point : lowest
          );

          // Ajouter une marge de sécurité (20px) sous le menton
          const cropY = chinPoint.y + 20;

          // Créer le canvas pour le crop
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            throw new Error('Impossible de créer le contexte Canvas');
          }

          // Définir les dimensions du crop (garder seulement le corps)
          canvas.width = img.width;
          canvas.height = img.height - cropY;

          // Dessiner seulement la partie sous la tête
          ctx.drawImage(
            img,
            0, cropY,                    // source x, y (commencer après la tête)
            img.width, img.height - cropY, // source width, height
            0, 0,                        // destination x, y
            canvas.width, canvas.height  // destination width, height
          );

          // Convertir en data URL
          const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
          resolve(croppedDataUrl);

        } catch (error) {
          // Fallback vers crop approximatif
          const croppedImage = await cropImageApproximate(img);
          resolve(croppedImage);
        }
      };

      img.onerror = () => {
        reject(new Error('Impossible de charger l\'image'));
      };

      img.src = imageUrl;
    });

  } catch (error) {
    throw new Error('Erreur lors du crop de la tête');
  }
};

// Fonction de crop approximatif si la détection de visage échoue
const cropImageApproximate = (img: HTMLImageElement): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      resolve(img.src); // Retourner l'image originale si échec
      return;
    }

    // Couper approximativement 35% du haut (zone tête/cou typique)
    const cropY = Math.floor(img.height * 0.35);

    canvas.width = img.width;
    canvas.height = img.height - cropY;

    ctx.drawImage(
      img,
      0, cropY,
      img.width, img.height - cropY,
      0, 0,
      canvas.width, canvas.height
    );

    const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
    resolve(croppedDataUrl);
  });
};
