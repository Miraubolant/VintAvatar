import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Sparkles, Sun, Image as ImageIcon, Camera, CheckSquare, Settings, XCircle, Zap, Calendar } from 'lucide-react';

export default function ComoTomarBuenasFotosVintedPage() {
  useSEO({
    title: "Cómo Tomar Buenas Fotos para Vinted: Guía Principiantes 2025 | VintDress",
    description: "Guía completa para principiantes: cómo tomar buenas fotos para Vinted. Iluminación, fondo, técnicas, consejos pro. ¡Vende más rápido!",
    keywords: "como tomar fotos vinted, foto vinted principiante, buenas fotos vinted, tutorial foto vinted, vender vinted principiante",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="Cómo tomar buenas fotos para Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Cómo Tomar Buenas Fotos para Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Guía Principiantes 2025
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-pink-pastel border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Guía Principiantes
            </span>
            <span className="text-black">5 de diciembre de 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min de lectura</span>
            <span className="text-black">•</span>
            <span className="text-black">Por Equipo VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Principiante', 'Fotos', 'Vinted', 'Guía', 'Tutorial'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            ¿Acabas de empezar en Vinted y te preguntas por qué tus artículos no se venden?
            En el 90% de los casos, el problema son las fotos. Esta guía completa te lo explica todo, paso a paso.
          </p>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">La realidad en números:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Los compradores deciden en <strong>3 segundos</strong> si les interesa tu artículo</span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Una buena foto = <strong>5x más visitas</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Fotos profesionales = <strong>precio de venta +25%</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold">
              "Si el vendedor no cuida sus fotos, ¿cuidará mi paquete?"
            </p>
            <p className="text-sm mt-2">— Lo que piensan los compradores</p>
          </div>
        </div>

        {/* Paso 1: Preparar la Prenda */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Paso 1: Preparar Tu Prenda</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-3">Planchar o Vaporizar</h3>
              <p className="mb-3">
                <strong>Por qué es crucial:</strong> Una prenda arrugada da impresión de descuido o mala calidad.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Plancha la prenda antes de la foto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>O usa un vaporizador de ropa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Alternativa: cuélgala en el baño durante una ducha caliente</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Lista de verificación antes de la foto:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Quita los pelos de mascotas (rodillo adhesivo)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Revisa manchas y bolitas</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Elimina hilos sueltos</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Verifica que todos los botones estén presentes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paso 2: Iluminación */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sun className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Paso 2: Elegir la Iluminación Correcta</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Luz Natural (El Secreto N°1)</h3>
              <p className="mb-4"><strong>Por qué es la mejor opción:</strong></p>
              <ul className="space-y-2 mb-4 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Gratis y disponible en todas partes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Muestra los colores reales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Da un aspecto profesional</span>
                </li>
              </ul>
              <p className="font-semibold mb-2">Cómo usarla:</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Colócate cerca de una ventana grande</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Evita la luz solar directa (crea sombras duras)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Prefiere cielos ligeramente nublados</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Fotografía entre las 10h y las 16h</span>
                </li>
              </ol>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Errores de Iluminación a Evitar</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Flash del teléfono</strong>: Aplana la imagen, colores falsos</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Luz amarilla de bombillas</strong>: Distorsiona los colores</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Contraluz</strong>: Prenda demasiado oscura</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Sombras marcadas</strong>: Oculta los detalles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paso 3: El Fondo */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Paso 3: Elegir el Fondo Correcto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Top 3 Fondos:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <div>
                    <p className="font-semibold">Pared blanca</p>
                    <p className="text-sm">Clásico, realza todos los colores</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <div>
                    <p className="font-semibold">Pared beige/crema</p>
                    <p className="text-sm">Cálido, tendencia actual</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <div>
                    <p className="font-semibold">Suelo de madera clara</p>
                    <p className="text-sm">Perfecto para flat lay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Fondos a evitar:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cama deshecha o sábanas arrugadas</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Azulejos del baño</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Fondo desordenado (juguetes, cosas...)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Suelo con manchas o suciedad visible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paso 4: Las 3 Técnicas Foto */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Paso 4: Las 3 Técnicas de Foto</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">1. Flat Lay (Plano)</h3>
              <p className="text-sm text-gray-600 mb-3">Ideal para: Camisetas, camisas, accesorios</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Coloca la prenda bien plana</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Arregla las mangas simétricamente</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Fotografía desde arriba, teléfono paralelo al suelo</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Deja un poco de espacio alrededor</span>
                </li>
              </ol>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">2. En Percha</h3>
              <p className="text-sm text-gray-600 mb-3">Ideal para: Vestidos, chaquetas, abrigos</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Usa una percha de madera (más profesional)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Cuelga en una barra o manija de puerta</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Retrocede lo suficiente para capturar toda la prenda</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Evita perchas de plástico de colores</span>
                </li>
              </ol>
            </div>

            <div className="bg-vinted border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2 text-white">3. Foto Puesta (¡Cambio de Juego!)</h3>
              <p className="text-white/90 mb-3">
                <strong>Por qué es LA técnica que vende:</strong>
              </p>
              <ul className="space-y-2 mb-4 text-white">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>El comprador visualiza el aspecto real</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Muestra el corte y la caída</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Crea conexión emocional</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>¡+300% de visitas en promedio!</strong></span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black p-4 mb-3">
                <p className="text-black"><strong>El problema:</strong> Difícil de hacer solo, necesitas un modelo...</p>
              </div>
              <div className="bg-mint border-2 border-black p-4">
                <p className="text-black"><strong>La solución:</strong> ¡VintDress genera fotos puestas con IA en 30 segundos!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paso 5: Las 5 Fotos Obligatorias */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Las 5 Fotos Esenciales para Cada Anuncio</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-display font-bold text-lg">Foto Principal</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Vista frontal completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Iluminación perfecta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Fondo neutro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span><strong>¡Es la que hace que hagan clic!</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-display font-bold text-lg">Foto Puesta</h3>
              </div>
              <p className="mb-3">
                <strong>Por qué convierte:</strong> Muestra el aspecto real, tranquiliza al comprador, destaca en el feed.
              </p>
              <p className="bg-mint border-2 border-black p-3 font-semibold text-sm">
                Consejo: Usa la IA de VintDress para crearla fácilmente
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-display font-bold text-lg">Detalles</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Textura del tejido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Estampados de cerca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Acabados (costuras, botones)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Posibles defectos</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-display font-bold text-lg">Etiqueta</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Marca visible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Talla legible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Composición si es posible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prueba autenticidad</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">5</span>
                <h3 className="font-display font-bold text-lg">Vista Trasera</h3>
              </div>
              <p>
                Algunas prendas son diferentes delante/detrás. Muestra el corte completo y tranquiliza sobre el estado general.
              </p>
            </div>
          </div>
        </div>

        {/* Configuración del Teléfono */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Settings className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Configuración de Tu Teléfono</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Ajustes Óptimos:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Modo HDR activado</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Cuadrícula de composición activada</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Ratio 4:5 (formato Vinted ideal)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Flash desactivado</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Enfoque en la prenda</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Consejos Pro:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Limpia el objetivo (huellas = desenfoque)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Estabiliza tu teléfono (apóyalo contra una pared)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Toca la pantalla para enfocar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Toma varias fotos y quédate con la mejor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Los 7 Errores Fatales */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <XCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Los 7 Errores Fatales a Evitar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Fotos borrosas</p>
                  <p className="text-sm">-80% de probabilidad de venta</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Mala iluminación</p>
                  <p className="text-sm">Colores distorsionados = devoluciones</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Fondo desordenado</p>
                  <p className="text-sm">Distrae la atención</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold">Solo una foto</p>
                  <p className="text-sm">Desconfianza del comprador</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold">Prenda arrugada</p>
                  <p className="text-sm">Impresión de descuido</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
                <div>
                  <p className="font-semibold">Fotos en el espejo</p>
                  <p className="text-sm">Amateur y poco favorecedor</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">7</span>
                <div>
                  <p className="font-semibold">Filtros de Instagram</p>
                  <p className="text-sm">Distorsiona el producto real</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* La Alternativa IA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">La Alternativa Revolucionaria: La IA</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Ventajas de VintDress:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Foto puesta en 30 segundos</p>
                  <p className="text-sm">Ahorro de tiempo masivo</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Calidad profesional garantizada</p>
                  <p className="text-sm">Resultado impecable cada vez</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Sin necesidad de modelo</p>
                  <p className="text-sm">La IA hace todo el trabajo</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Personalización completa</p>
                  <p className="text-sm">Tipo de cuerpo, pose, fondo...</p>
                </div>
              </div>
            </div>
            <div className="bg-mint border-3 border-black p-4 mt-6 text-center">
              <p className="font-display font-bold text-2xl">Resultados: ¡+300% de visitas!</p>
            </div>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Cómo Funciona:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">1</div>
                <p className="font-semibold">Sube tu foto</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">2</div>
                <p className="font-semibold">Configura el maniquí</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">3</div>
                <p className="font-semibold">Genera en 30s</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">4</div>
                <p className="font-semibold">Publica en Vinted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan de Acción */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Plan de Acción para Principiantes</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Semana 1: Las Bases</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Encuentra tu "rincón de fotos" con buena luz</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Practica con 5 prendas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prueba diferentes fondos</span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Semana 2: Optimización</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Compara tus nuevas fotos con las antiguas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Analiza qué fotos tienen más visitas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prueba la IA de VintDress en tus mejores piezas</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Semana 3: Rutina</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Crea una rutina de fotos eficiente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prepara un "kit de fotos" (percha, fondo, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Fotografía por lotes para ahorrar tiempo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Preguntas Frecuentes</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Cuántas fotos poner en un anuncio de Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Mínimo 5 fotos: vista frontal, foto puesta, detalles/textura, etiqueta y vista trasera.
                Cuantas más fotos de calidad tengas, más confianza inspiras.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Cuál es el mejor momento para tomar fotos?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Entre las 10h y las 16h cerca de una ventana orientada al norte. Evita la luz solar directa que crea sombras duras.
                Un cielo ligeramente nublado es ideal.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Debo usar el flash del teléfono?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                ¡No, nunca! El flash aplana la imagen y distorsiona los colores. Siempre prefiere la luz natural o un aro de luz.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Cómo hacer una foto puesta sin modelo?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                ¡Usa VintDress! Nuestra IA genera fotos puestas profesionales en 30 segundos,
                sin necesidad de modelo.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusión + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusión</h2>
          <p className="text-white text-lg mb-6">
            La calidad de tus fotos marca <strong>toda</strong> la diferencia en Vinted.
            Con esta guía, tienes todas las claves para transformar tus anuncios y ¡por fin vender!
          </p>
          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-semibold text-lg mb-2">El secreto de los top vendedores:</p>
            <p>Combinan buenas bases fotográficas con IA para resultados profesionales sin esfuerzo.</p>
          </div>
          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Probar VintDress Ahora
          </a>
        </div>

        {/* Artículos Relacionados */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/es/articles/5-consejos-vender-rapido-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Consejos para Vender Más Rápido →</p>
            </a>
            <a
              href="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía Completa Fotos 2025 →</p>
            </a>
            <a
              href="/es/articles/errores-ventas-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Errores a Evitar →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
