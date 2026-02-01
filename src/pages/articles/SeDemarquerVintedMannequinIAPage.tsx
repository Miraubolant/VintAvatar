import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Eye, TrendingUp, Users, Camera, Sparkles, Target, CheckCircle, XCircle, ArrowRight, Zap, Star } from 'lucide-react';

export default function SeDemarquerVintedMannequinIAPage() {
  useSEO({
    title: "Se Demarquer sur Vinted : Le Mannequin IA pour Booster vos Ventes | VintDress",
    description: "Decouvrez comment le mannequin IA VintDress vous aide a vous demarquer parmi des milliers d'annonces Vinted et a vendre 3x plus vite.",
    keywords: "se demarquer vinted, visibilite vinted, mannequin ia vinted, photos vinted professionnelles, booster ventes vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
          alt="Se demarquer sur Vinted avec le mannequin IA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Guide
            </span>
            <span className="font-space-grotesk">1 Fevrier 2026</span>
            <span className="font-space-grotesk">10 min de lecture</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Se Demarquer sur Vinted : Comment le Mannequin IA Booste vos Ventes
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Tu as des dizaines d'articles en vente sur Vinted, mais ils restent invisibles parmi les millions d'annonces ? Tu n'es pas seul. Le vrai probleme, ce n'est pas tes vetements, c'est comment tu les presentes.
          </p>

          {/* Le Probleme */}
          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              Le Probleme : L'Invisibilite sur Vinted
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">Les chiffres qui font mal :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>+50 millions</strong> d'articles en ligne sur Vinted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>80%</strong> des annonces ont des photos similaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>3 secondes</strong> pour capter l'attention d'un acheteur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>70%</strong> des ventes se font grace a la 1ere photo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">Ce que tu vis probablement :</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Tes annonces stagnent a quelques vues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Peu de favoris et encore moins de messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Tes concurrents vendent les memes articles plus vite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Tu passes des heures sur des photos "moyennes"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pourquoi les photos classiques ne suffisent plus */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Pourquoi les Photos Classiques ne Suffisent Plus
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              En 2026, les acheteurs Vinted sont devenus exigeants. Ils scrollent des centaines d'annonces par jour et leur cerveau filtre automatiquement les photos "amateurs".
            </p>

            <div className="bg-cream border-4 border-black p-6 mb-6">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">Les 3 types de photos qui ne convertissent pas :</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <h4 className="font-bold mb-2">Photo a plat</h4>
                  <p className="text-sm text-gray-600">L'acheteur ne peut pas visualiser le tombé</p>
                </div>
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="text-4xl mb-2">🪞</div>
                  <h4 className="font-bold mb-2">Photo miroir floue</h4>
                  <p className="text-sm text-gray-600">Qualite mediocre, manque de confiance</p>
                </div>
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="text-4xl mb-2">👕</div>
                  <h4 className="font-bold mb-2">Photo sur cintre</h4>
                  <p className="text-sm text-gray-600">Impossible de voir la coupe reelle</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6">
              <p className="text-lg font-semibold">
                <strong>Le constat :</strong> Les vendeurs qui utilisent des photos portees sur mannequin obtiennent en moyenne <span className="text-vinted font-bold">3x plus de vues</span> et vendent <span className="text-vinted font-bold">2x plus vite</span>.
              </p>
            </div>
          </div>

          {/* La Solution VintDress */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              La Solution : Le Mannequin IA VintDress
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              VintDress resout ce probleme en generant des visuels de qualite professionnelle grace a son mannequin IA. En quelques secondes, ta photo de vetement "basique" devient une photo de catalogue.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                Comment ca marche ?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">1</div>
                  <h4 className="font-bold mb-2">Upload</h4>
                  <p className="text-sm text-gray-600">Telecharge ta photo ou colle un lien Vinted</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">2</div>
                  <h4 className="font-bold mb-2">Configure</h4>
                  <p className="text-sm text-gray-600">Choisis le type de mannequin et le decor</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">3</div>
                  <h4 className="font-bold mb-2">Genere</h4>
                  <p className="text-sm text-gray-600">L'IA cree ta photo en 30 secondes</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">4</div>
                  <h4 className="font-bold mb-2">Publie</h4>
                  <p className="text-sm text-gray-600">Telecharge et mets a jour ton annonce</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-mint border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Avantages VintDress
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Photos de qualite professionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Generation en 30 secondes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Mannequins personnalisables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Augmente la visibilite de tes annonces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">Resultats constates :</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Vues moyennes</span>
                    <span className="font-bold text-vinted">+300%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Taux de favoris</span>
                    <span className="font-bold text-vinted">+150%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Messages recus</span>
                    <span className="font-bold text-vinted">+200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delai de vente</span>
                    <span className="font-bold text-vinted">-50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cas Pratique */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Cas Pratique : De l'Invisible au Best-Seller
            </h2>

            <div className="bg-cream border-4 border-black p-8">
              <h3 className="text-xl font-space-grotesk font-bold mb-4">
                L'histoire de Julie, vendeuse sur Vinted
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border-3 border-red-300 p-4">
                  <h4 className="font-bold mb-2">Avant VintDress :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Robe Zara en vente depuis 2 mois</li>
                    <li>• 8 vues par semaine</li>
                    <li>• 0 message recu</li>
                    <li>• Photo a plat sur lit blanc</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-3 border-green-300 p-4">
                  <h4 className="font-bold mb-2">Apres VintDress :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Meme robe, nouvelle photo IA</li>
                    <li>• 67 vues en 48h</li>
                    <li>• 12 messages d'acheteurs</li>
                    <li>• Vendue au prix demande</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg font-semibold text-center">
                "La seule difference ? La photo. Le vetement etait le meme."
              </p>
            </div>
          </div>

          {/* Comment Maximiser ses Resultats */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              5 Conseils pour Maximiser tes Resultats
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6 flex gap-4">
                <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Utilise des photos source de qualite</h3>
                  <p className="text-gray-700">Meme si l'IA fait des miracles, une bonne photo de base donne de meilleurs resultats. Eclairage naturel + fond neutre = combo gagnant.</p>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6 flex gap-4">
                <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Choisis le bon type de mannequin</h3>
                  <p className="text-gray-700">Adapte le mannequin a ton vetement. Une robe de soiree sur un mannequin elegant, un sweat sur un mannequin decontracte.</p>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6 flex gap-4">
                <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Mets la photo IA en premiere position</h3>
                  <p className="text-gray-700">C'est la premiere image que voient les acheteurs. Elle doit etre impactante.</p>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6 flex gap-4">
                <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Garde les photos de details</h3>
                  <p className="text-gray-700">La photo IA attire, mais les acheteurs veulent aussi voir les etiquettes, la matiere, l'etat reel.</p>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6 flex gap-4">
                <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black font-bold">5</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Renouvelle tes anciennes annonces</h3>
                  <p className="text-gray-700">Tu as des articles qui stagnent depuis des mois ? Refais leurs photos avec VintDress et republies-les.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Pret a te Demarquer ?
            </h2>
            <p className="text-white text-lg mb-6">
              Rejoins les milliers de vendeurs qui ont deja booste leurs ventes avec VintDress.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Essayer VintDress Maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Questions Frequentes
            </h2>

            <div className="space-y-4">
              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Est-ce que les acheteurs voient que c'est une photo IA ?</h3>
                <p className="text-gray-700">Non, les photos generees sont tres realistes. La plupart des acheteurs pensent que c'est une vraie photo de mannequin professionnel.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Combien coute VintDress ?</h3>
                <p className="text-gray-700">VintDress propose des packs a partir de 3,99€ pour 10 generations. Un investissement rapidement rentabilise avec une seule vente.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Ca marche avec tous les types de vetements ?</h3>
                <p className="text-gray-700">Oui ! Robes, t-shirts, pantalons, vestes, pulls... VintDress gere tous les types de vetements avec differentes options de mannequins.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Combien de temps pour generer une photo ?</h3>
                <p className="text-gray-700">En moyenne 30 secondes. Le temps de prendre un cafe et ta photo est prete !</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Sur Vinted, la competition est feroce. Des millions d'annonces se battent pour l'attention des acheteurs. La difference entre un article qui stagne et un article qui se vend ? Souvent, c'est juste la photo.
            </p>
            <p className="text-lg text-gray-700">
              Avec VintDress, tu as un avantage competitif immediat. Des photos professionnelles qui attirent l'oeil, generent des clics et convertissent en ventes. Le tout en quelques secondes et pour quelques centimes par photo.
            </p>
          </div>

          {/* Articles connexes */}
          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Articles Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/articles/mannequin-ia-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Mannequin IA pour Vinted : Comment ca Marche ?</h3>
                <p className="text-gray-600 text-sm">Tout savoir sur la technologie derriere les mannequins virtuels.</p>
              </Link>
              <Link to="/articles/algorithme-vinted-visibilite" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Algorithme Vinted : Maximisez Votre Visibilite</h3>
                <p className="text-gray-600 text-sm">Comprendre l'algorithme pour booster vos ventes.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
