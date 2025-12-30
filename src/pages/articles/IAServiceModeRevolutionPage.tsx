import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Upload, Cpu, Sparkles, TrendingUp, Clock, DollarSign, Users, Zap, Eye, Target, Shield, CheckCircle2 } from 'lucide-react';

export default function IAServiceModeRevolutionPage() {
  useSEO({
    title: "L'IA au Service de la Mode : Notre Révolution | VintDress",
    description: "Découvre comment l'IA révolutionne la vente de mode en ligne. VintDress transforme tes photos avec une technologie de pointe.",
    keywords: "IA mode, photos IA, technologie vinted, innovation mode, intelligence artificielle",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
          alt="Intelligence Artificielle et Mode"
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
              Technologie
            </span>
            <span className="font-space-grotesk">22 Novembre 2025</span>
            <span className="font-space-grotesk">7 min de lecture</span>
            <span className="font-space-grotesk font-semibold">Par Tech Team</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            L'Intelligence Artificielle au Service de la Mode : La Révolution VintDress
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            L'industrie de la mode de seconde main connaît une révolution silencieuse. Derrière chaque photo parfaite que tu vois sur Vinted, il y a désormais une technologie qui change la donne : l'Intelligence Artificielle.
          </p>

          {/* La Genèse */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              La Genèse d'une Innovation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Le Problème
                </h3>
                <p className="mb-3">
                  Combien de fois as-tu renoncé à vendre un vêtement parce que tu ne savais pas comment le photographier ?
                </p>
                <p className="text-sm text-gray-700">
                  Ou pire, combien d'articles sont restés invendus à cause de photos peu attrayantes ?
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Notre Solution
                </h3>
                <p className="font-semibold">
                  Une IA révolutionnaire qui génère des photos portées ultra-réalistes de tes vêtements en moins de 30 secondes.
                </p>
              </div>
            </div>
          </div>

          {/* Comment Ça Marche */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8" />
              Comment Ça Marche ?
            </h2>

            <div className="space-y-6">
              {/* Étape 1 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-pink-pastel border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Upload className="w-7 h-7" />
                    Upload & Analyse
                  </h3>
                  <p className="mb-3">Notre IA analyse ton vêtement :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Type d'article (robe, pantalon, t-shirt...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Couleurs et motifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Coupe et style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Matière (déduite visuellement)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-mint border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Cpu className="w-7 h-7" />
                    Génération de Modèle
                  </h3>
                  <p className="mb-3">L'IA sélectionne automatiquement :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Le type de mannequin le plus adapté</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>La pose parfaite pour mettre en valeur l'article</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>L'éclairage optimal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>L'arrière-plan qui sublimera l'ensemble</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-yellow-200 border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Sparkles className="w-7 h-7" />
                    Rendu Final
                  </h3>
                  <p className="text-lg font-semibold text-vinted">
                    En quelques secondes, tu obtiens une photo portée professionnelle, comme si un photographe professionnel avait travaillé avec un top model !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Les Chiffres qui Parlent */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Les Chiffres qui Parlent
            </h2>

            <p className="text-lg mb-6">Depuis le lancement de VintDress :</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted text-white border-4 border-black p-6">
                <Eye className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +280%
                </div>
                <p className="text-sm">
                  de vues en moyenne - Les annonces avec photos IA génèrent 2,8x plus de vues que les photos traditionnelles.
                </p>
              </div>

              <div className="bg-mint border-4 border-black p-6">
                <Clock className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  30s
                </div>
                <p className="text-sm">
                  de génération - Le temps moyen pour obtenir une photo parfaite.
                </p>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6">
                <DollarSign className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +300%
                </div>
                <p className="text-sm">
                  de ventes - Certains utilisateurs ont triplé leurs ventes en utilisant nos photos IA.
                </p>
              </div>

              <div className="bg-yellow-200 border-4 border-black p-6">
                <Users className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  24,000+
                </div>
                <p className="text-sm">
                  utilisateurs conquis - Et ce n'est que le début !
                </p>
              </div>
            </div>
          </div>

          {/* L'Impact sur le E-Commerce */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              L'Impact sur le E-Commerce Mode
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Pour les Vendeurs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Gain de temps</p>
                      <p className="text-sm text-gray-600">Fini les séances photo improvisées</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Qualité pro</p>
                      <p className="text-sm text-gray-600">Chaque photo semble sortir d'un studio</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Conversion maximale</p>
                      <p className="text-sm text-gray-600">Plus de vues = plus de ventes</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Pour l'Écosystème Vinted
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Standards élevés</p>
                      <p className="text-sm text-gray-600">La qualité générale des annonces s'améliore</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Expérience acheteur</p>
                      <p className="text-sm text-gray-600">Plus facile de se projeter avec le vêtement</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Confiance renforcée</p>
                      <p className="text-sm text-gray-600">Des photos pro rassurent sur la qualité</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* L'Avenir de la Mode avec l'IA */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              L'Avenir de la Mode avec l'IA
            </h2>

            <p className="text-lg mb-6">Nous ne sommes qu'au début de cette révolution. Bientôt :</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <div className="text-3xl mb-2">🔮</div>
                <h3 className="font-space-grotesk font-bold mb-2">IA Prédictive</h3>
                <p className="text-sm">Savoir quels articles se vendront le mieux</p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-space-grotesk font-bold mb-2">Styles Personnalisés</h3>
                <p className="text-sm">Adapter le style photo à ton audience</p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-space-grotesk font-bold mb-2">Intégration Native</h3>
                <p className="text-sm">Directement dans l'app Vinted</p>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-space-grotesk font-bold mb-2">Expansion Internationale</h3>
                <p className="text-sm">Adapter aux codes de chaque pays</p>
              </div>
            </div>
          </div>

          {/* Éthique et Transparence */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Éthique et Transparence
            </h2>

            <div className="bg-green-50 border-4 border-green-500 p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-6">
                Nos Engagements :
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Photos clairement identifiées comme générées par IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Respect de la réalité du produit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Pas de tromperie sur l'état ou les couleurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Protection des données utilisateurs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Conclusion
            </h2>
            <p className="text-white text-lg mb-6">
              L'IA n'est pas là pour remplacer la créativité humaine, mais pour la démocratiser. Aujourd'hui, chaque vendeur Vinted peut avoir accès à des photos de qualité studio.
            </p>
            <p className="text-white text-xl font-semibold mb-8">
              La mode de seconde main devient plus attractive, plus accessible, et plus professionnelle.
            </p>
            <p className="text-white text-lg mb-6">
              Et toi, es-tu prêt(e) à rejoindre cette révolution ?
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Teste VintDress Maintenant !
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["IA", "Technologie", "Innovation", "Mode", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Articles Connexes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/blog/success-story-marie-2025"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Success Story : Marie Gagne 3000€/Mois
              </h3>
              <p className="text-sm text-gray-600">
                Comment Marie a transformé sa vie grâce aux photos IA
              </p>
            </Link>
            <Link
              to="/blog/comment-prendre-bonnes-photos-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Comment Prendre de Bonnes Photos pour Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Guide complet pour des photos qui vendent
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
