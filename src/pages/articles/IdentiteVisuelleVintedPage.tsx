import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { Palette, Image, FileText, Users, TrendingUp, Calendar, Lightbulb, Award, CheckCircle, X, Star } from 'lucide-react';

export default function IdentiteVisuelleVintedPage() {
  useSEO({
    title: "Créer une Identité Visuelle qui Cartonne sur Vinted | Guide Complet",
    description: "Apprends à créer une identité visuelle forte sur Vinted pour te démarquer. Photos cohérentes, descriptions, branding. Guide complet !",
    keywords: "identite visuelle vinted, branding vinted, boutique vinted professionnelle, se demarquer vinted, photos coherentes vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="relative -mt-1 mx-4 sm:mx-6 lg:mx-8 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop"
          alt="Créer une Identité Visuelle sur Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Créer une Identité Visuelle qui Cartonne
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Guide Complet Vinted
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-vinted border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
              Stratégie
            </span>
            <span className="text-black">1 Décembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min de lecture</span>
            <span className="text-black">•</span>
            <span className="text-black">Par Julie Renard</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Identité Visuelle', 'Branding', 'Vinted', 'Marketing', 'Stratégie'].map((tag) => (
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
            Sur Vinted, des milliers de vendeurs proposent des articles similaires. Comment sortir du lot ?
            La réponse : une identité visuelle forte et cohérente qui transforme ton profil en véritable marque.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">Pourquoi l'Identité Visuelle Change Tout</h2>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Impact mesuré :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Profils cohérents', value: '+180% de followers' },
                  { label: 'Confiance acheteur', value: '+65%' },
                  { label: 'Prix acceptés plus élevés', value: '+25%' },
                  { label: 'Taux de retour client', value: 'x3' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-cream border-2 border-black p-3">
                    <span className="font-semibold">{stat.label}</span>
                    <span className="text-vinted font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold text-lg">
              "Je préfère acheter chez quelqu'un qui a des photos pros, ça inspire confiance"
            </p>
            <p className="text-sm mt-2">— Étude comportement Vinted 2024</p>
          </div>
        </div>

        {/* Les 3 Piliers */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Les Piliers d'une Identité Visuelle Forte</h2>

          {/* Pilier 1 : Cohérence Photographique */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-vinted border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl">1. Cohérence Photographique</h3>
            </div>

            <p className="mb-4">
              <strong>Le secret des top vendeurs :</strong> Toutes leurs photos ont le même "look".
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h4 className="font-semibold mb-3">Solution simple avec notre IA :</h4>
              <ul className="space-y-2">
                {[
                  'Même style de mannequin pour tous tes articles',
                  'Éclairage identique (notre IA garantit la cohérence)',
                  'Poses similaires et professionnelles',
                  'Arrière-plans uniformes'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-mint border-2 border-black p-4 mt-4">
                <p className="font-semibold">
                  Résultat : Une grille d'articles visuellement harmonieuse qui donne envie de scroller !
                </p>
              </div>
            </div>
          </div>

          {/* Pilier 2 : Palette de Couleurs */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-pastel border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl">2. Palette de Couleurs</h3>
            </div>

            <p className="mb-4"><strong>Choisis 2-3 couleurs maximum :</strong></p>
            <ul className="space-y-1 ml-4 mb-6">
              <li>• Une couleur principale (ton "signature")</li>
              <li>• Une couleur secondaire (complément)</li>
              <li>• Une couleur neutre (blanc, beige, gris)</li>
            </ul>

            <h4 className="font-semibold mb-3">Exemples de palettes qui marchent :</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { name: 'Minimaliste', colors: 'Blanc, noir, gris clair' },
                { name: 'Bohème', colors: 'Beige, terracotta, crème' },
                { name: 'Moderne', colors: 'Blanc, rose pâle, doré' },
                { name: 'Edgy', colors: 'Noir, argent, bordeaux' }
              ].map((palette) => (
                <div key={palette.name} className="bg-white border-2 border-black p-3">
                  <p className="font-semibold">{palette.name}</p>
                  <p className="text-sm text-gray-600">{palette.colors}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pilier 3 : Style d'Écriture */}
          <div className="bg-mint/50 border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-mint border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl">3. Style d'Écriture</h3>
            </div>

            <p className="mb-3"><strong>Adopte un ton reconnaissable :</strong></p>
            <div className="grid md:grid-cols-2 gap-2 mb-4">
              <span>• Formel et expert</span>
              <span>• Décontracté et amical</span>
              <span>• Enthousiaste et descriptif</span>
              <span>• Minimaliste et factuel</span>
            </div>

            <div className="bg-white border-2 border-black p-4">
              <p className="font-semibold">Reste cohérent dans toutes tes annonces !</p>
            </div>
          </div>
        </div>

        {/* Guide Pratique */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Guide Pratique : Créer ta Marque Vinted</h2>
          </div>

          <div className="space-y-6">
            {/* Étape 1 */}
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">1</span>
                <h3 className="font-display font-bold text-xl">Définis ton Positionnement</h3>
              </div>

              <p className="font-semibold mb-3">Questions à te poser :</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• Quel type de vêtements je vends majoritairement ?</li>
                <li>• Quelle est ma cible (âge, style, budget) ?</li>
                <li>• Qu'est-ce qui me différencie ?</li>
                <li>• Quelle ambiance je veux transmettre ?</li>
              </ul>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-semibold mb-2">Exemples de positionnements :</p>
                <ul className="space-y-1 text-sm">
                  <li>• "La boutique preppy chic pour étudiantes"</li>
                  <li>• "Vintage de qualité pour trentenaires"</li>
                  <li>• "Mode responsable et accessible"</li>
                  <li>• "Luxe d'occasion authentifié"</li>
                </ul>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">2</span>
                <h3 className="font-display font-bold text-xl">Crée ton Template Photo</h3>
              </div>

              <p className="font-semibold mb-3">Utilise notre IA pour :</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Définir un style de mannequin cohérent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Choisir une pose signature</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Sélectionner ton type d'arrière-plan</span>
                </li>
              </ul>

              <div className="bg-mint border-2 border-black p-4">
                <p className="font-semibold">Pro tip :</p>
                <p className="text-sm">Génère plusieurs photos test et choisis celles qui représentent le mieux ton style.</p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">3</span>
                <h3 className="font-display font-bold text-xl">Uniformise tes Descriptions</h3>
              </div>

              <p className="font-semibold mb-3">Crée un template fixe :</p>
              <div className="bg-white border-2 border-black p-4 font-mono text-sm">
                <p>[Emoji signature] [TITRE ACCROCHEUR]</p>
                <p className="mt-2">[Description enthousiaste 2 lignes]</p>
                <p className="mt-2">Caractéristiques :</p>
                <p>[Format liste toujours identique]</p>
                <p className="mt-2">[Phrase de clôture signature]</p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">4</span>
                <h3 className="font-display font-bold text-xl">Soigne ton Profil</h3>
              </div>

              <p className="font-semibold mb-3">Éléments clés :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Photo de profil professionnelle</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Bio courte mais impactante</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Mise en avant de ta spécialité</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreurs à Éviter */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Erreurs à Éviter</h2>

          <div className="space-y-4 mb-6">
            {[
              { error: 'Mélanger les styles photo', desc: 'Certaines sur cintre, d\'autres portées, certaines flat lay' },
              { error: 'Descriptions incohérentes', desc: 'Tantôt formelles, tantôt familières' },
              { error: 'Photos de qualité variable', desc: 'Excellentes puis médiocres' },
              { error: 'Arrière-plans différents', desc: 'Du blanc, du parquet, du carrelage...' }
            ].map((item, idx) => (
              <div key={idx} className="bg-pink-pastel/30 border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{item.error}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="font-semibold mb-2">Problème :</p>
              <p className="mb-3">Photos incohérentes</p>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold text-sm">Solution :</p>
                <p className="text-sm">Utilise notre IA pour régénérer toutes tes photos avec le même style</p>
              </div>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <p className="font-semibold mb-2">Problème :</p>
              <p className="mb-3">Pas de template description</p>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold text-sm">Solution :</p>
                <p className="text-sm">Crée-en un et copie-colle la structure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cas Concrets de Réussite */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Cas Concrets de Réussite</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cas 1 */}
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-4">Profil "La Mode Parisienne"</h3>

              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Avant :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Photos variées, qualité inégale</li>
                    <li>• Descriptions aléatoires</li>
                    <li>• 50 ventes/mois</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Après :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Photos IA mannequin élégant</li>
                    <li>• Template "chic parisien"</li>
                    <li>• Palette noir/blanc/rose poudre</li>
                  </ul>
                </div>

                <div className="bg-mint border-2 border-black p-3 text-center">
                  <p className="font-display font-bold text-lg">180 ventes/mois</p>
                  <p className="text-sm">Prix moyens +30%</p>
                </div>
              </div>
            </div>

            {/* Cas 2 */}
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-4">Profil "Vintage Corner"</h3>

              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Stratégie :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Photos IA mannequin style rétro</li>
                    <li>• Descriptions "storytelling"</li>
                    <li>• Palette beige/marron/crème</li>
                  </ul>
                </div>

                <div className="bg-mint border-2 border-black p-3 text-center">
                  <p className="font-display font-bold text-lg">2000 followers fidèles</p>
                  <p className="text-sm">Communauté engagée</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan d'Action 7 Jours */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Plan d'Action en 7 Jours</h2>
          </div>

          <div className="space-y-3">
            {[
              { jours: 'Jour 1-2', action: 'Définis ton positionnement et ta cible' },
              { jours: 'Jour 3', action: 'Choisis ta palette et ton style' },
              { jours: 'Jour 4-5', action: 'Crée tes templates (photo IA + description)' },
              { jours: 'Jour 6', action: 'Mets à jour ton profil' },
              { jours: 'Jour 7', action: 'Commence à appliquer sur tes articles' }
            ].map((etape, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4 flex items-center gap-4">
                <span className="bg-vinted text-white font-display font-bold px-4 py-2 border-2 border-black">
                  {etape.jours}
                </span>
                <p className="font-semibold">{etape.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Conclusion</h2>
          <p className="text-white text-lg mb-6">
            Une identité visuelle forte sur Vinted, c'est :
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Photos cohérentes grâce à notre IA',
              'Descriptions templateées',
              'Palette de couleurs définie',
              'Ton de communication constant',
              'Profil optimisé'
            ].map((point, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {idx + 1}
                </span>
                <p className="font-semibold pt-1">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-center">
              Plus de confiance, plus de followers, plus de ventes, meilleurs prix.
            </p>
          </div>

          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Créer Mon Identité Avec VintDress
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articles Liés</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/articles/strategie-vente-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Stratégie de Vente 2025 →</p>
            </a>
            <a
              href="/articles/guide-complet-photos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guide Photos 2025 →</p>
            </a>
            <a
              href="/articles/vendre-vintage-vinted-guide"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vendre du Vintage →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
