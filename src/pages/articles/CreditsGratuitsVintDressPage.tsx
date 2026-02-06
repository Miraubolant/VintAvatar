import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Gift, Users, Share2, CreditCard, Star, CheckCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';

export const CreditsGratuitsVintDressPage: React.FC = () => {
  useSEO({
    title: "Credits Gratuits VintDress : Comment Utiliser l'IA Vinted Gratuitement | VintDress",
    description: "Decouvrez comment obtenir des credits gratuits sur VintDress : parrainage et partage en galerie. Utilisez l'IA mannequin Vinted sans payer.",
    keywords: "ia vinted gratuit, mannequin ia gratuit vinted, credits gratuits vintdress, parrainage vinted ia, photos vinted gratuites",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
          alt="Credits gratuits VintDress - IA Vinted gratuit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        <ArticleNavigation />

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-vinted text-white border-3 border-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            ASTUCE
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Credits Gratuits VintDress : 2 Methodes pour Utiliser l'IA Vinted sans Payer
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipe VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>6 Fevrier 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["ia vinted gratuit", "credits gratuits", "parrainage", "galerie photos", "VintDress"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            VintDress te permet de generer des <strong className="text-vinted">photos mannequin IA</strong> pour tes annonces Vinted en 30 secondes. Normalement, chaque generation coute des credits. Mais bonne nouvelle : il existe <strong>2 methodes 100% gratuites</strong> pour obtenir des credits sans payer. Dans cet article, tu vas decouvrir comment utiliser l'IA Vinted gratuitement grace au parrainage et au partage en galerie.
          </p>
        </div>

        {/* Section 1 - Methode 1 Parrainage */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Methode 1 : Le Parrainage (+1 credit gratuit)
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Gift className="w-6 h-6 text-vinted" />
              Comment fonctionne le parrainage VintDress
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Le systeme de parrainage VintDress est ultra-simple : tu partages ton lien de parrainage unique, et des que quelqu'un fait son <strong>premier achat</strong>, vous recevez tous les deux <strong>+1 credit gratuit</strong>. C'est une situation gagnant-gagnant !
            </p>
            <div className="bg-white border-3 border-black p-5 mt-6">
              <p className="font-display font-bold text-black mb-3">Comment ca marche :</p>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">1.</span>
                  <span><strong>Recupere ton lien</strong> : Connecte-toi a ton compte VintDress, va dans l'onglet "Mon Compte", puis "Affiliation"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">2.</span>
                  <span><strong>Partage ton lien</strong> : Envoie-le par WhatsApp, Instagram, TikTok, ou a tes amis vendeurs Vinted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">3.</span>
                  <span><strong>Ton ami s'inscrit</strong> : Il cree son compte VintDress via ton lien</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">4.</span>
                  <span><strong>Il fait son 1er achat</strong> : Des qu'il achete son premier pack de credits, vous recevez tous les deux +1 credit gratuit</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-vinted" />
              Strategie pour maximiser tes parrainages
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Voici comment obtenir un maximum de credits gratuits via le parrainage :
            </p>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Communautes Vinted</strong> : Partage ton lien dans les groupes Facebook/Discord de vendeurs Vinted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Stories Instagram</strong> : Publie avant/apres de tes photos IA avec ton lien de parrainage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Bouche-a-oreille</strong> : Recommande VintDress aux vendeurs que tu connais IRL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Commentaires YouTube</strong> : Partage ton experience et ton lien sous les tutos Vinted</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-mint border-3 border-black">
              <p className="font-display font-bold text-sm text-black flex items-center gap-2">
                <Star className="w-4 h-4 text-vinted" />
                Astuce pro : Plus tu parraines, plus tu obtiens de credits gratuits (illimite) !
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Methode 2 Galerie */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Methode 2 : Partage en Galerie (+1 credit, max 2)
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Share2 className="w-6 h-6 text-vinted" />
              Partager tes photos pour obtenir des credits
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Apres avoir genere une photo mannequin IA avec VintDress, tu peux la <strong>partager dans la galerie publique</strong>. En echange, tu recois <strong>+1 credit gratuit instantanement</strong>. Tu peux faire ca jusqu'a <strong>2 fois maximum</strong>, ce qui te donne 2 credits gratuits.
            </p>
            <div className="bg-white border-3 border-black p-5 mt-6">
              <p className="font-display font-bold text-black mb-3">Etapes pour partager en galerie :</p>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">1.</span>
                  <span><strong>Genere ta photo</strong> : Telecharge une photo de ton vetement et genere un avatar IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">2.</span>
                  <span><strong>Page resultat</strong> : Une fois la generation terminee, tu arrives sur la page de resultat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">3.</span>
                  <span><strong>Clique "Partager"</strong> : Appuie sur le bouton "Partager dans la galerie publique"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">4.</span>
                  <span><strong>Credit instantane</strong> : Ta photo apparait dans la galerie et tu recois +1 credit immediatement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-vinted" />
                Avantages du partage
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Credit gratuit instantane</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Inspire la communaute Vinted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Montre tes belles creations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Aide les autres vendeurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-vinted" />
                Ce qu'on voit dans la galerie
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Ta photo avant/apres</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Titre que tu as choisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Type de vetement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Date de creation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recap Table */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Recap des Methodes Gratuites
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <thead>
                <tr className="bg-vinted text-white border-b-3 border-black">
                  <th className="p-4 text-left font-display font-bold border-r-3 border-black">Methode</th>
                  <th className="p-4 text-left font-display font-bold border-r-3 border-black">Credits</th>
                  <th className="p-4 text-left font-display font-bold border-r-3 border-black">Limite</th>
                  <th className="p-4 text-left font-display font-bold">Temps requis</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr className="border-b-3 border-black">
                  <td className="p-4 border-r-3 border-black">
                    <div className="flex items-center gap-2">
                      <Gift className="w-5 h-5 text-vinted" />
                      <strong>Parrainage</strong>
                    </div>
                  </td>
                  <td className="p-4 border-r-3 border-black">+1 credit par ami</td>
                  <td className="p-4 border-r-3 border-black">
                    <span className="text-vinted font-bold">Illimite</span>
                  </td>
                  <td className="p-4">2-5 min par partage</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-3 border-black">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-vinted" />
                      <strong>Galerie publique</strong>
                    </div>
                  </td>
                  <td className="p-4 border-r-3 border-black">+1 credit par partage</td>
                  <td className="p-4 border-r-3 border-black">
                    <span className="text-black">Max 2 partages</span>
                  </td>
                  <td className="p-4">30 secondes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-black leading-relaxed">
              <strong className="text-vinted">Astuce combinee :</strong> Commence par partager 2 photos en galerie pour obtenir 2 credits gratuits instantanement, puis partage ton lien de parrainage pour gagner des credits illimites au fur et a mesure. Tu peux facilement obtenir <strong>5-10 credits gratuits</strong> en quelques jours !
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Commence a Utiliser l'IA Vinted Gratuitement
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Decouvre la Galerie
              </h3>
              <p className="font-body text-white mb-6">
                Explore les photos mannequin IA creees par la communaute VintDress et inspire-toi pour tes propres creations.
              </p>
              <Link
                to="/galerie"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                VOIR LA GALERIE
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CreditCard className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Decouvre Nos Tarifs
              </h3>
              <p className="font-body text-black mb-6">
                Envie de generer plus de photos ? Decouvre nos packs de credits a partir de 3,99 euros seulement.
              </p>
              <Link
                to="/tarifs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-vinted text-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                VOIR LES TARIFS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Questions Frequentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                VintDress est-il vraiment gratuit avec ces methodes ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Oui ! Le parrainage te donne des credits illimites (1 credit par ami parraine), et le partage en galerie te donne 2 credits gratuits. Tu peux donc utiliser l'IA mannequin Vinted sans payer.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Combien de credits puis-je obtenir gratuitement ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Via le partage en galerie : 2 credits maximum. Via le parrainage : illimite ! Plus tu parraines d'amis qui achetent, plus tu obtiens de credits gratuits (1 credit par ami).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Ou trouver mon lien de parrainage VintDress ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Connecte-toi a ton compte VintDress, clique sur "Mon Compte" dans le menu, puis va dans l'onglet "Affiliation". Tu y trouveras ton lien de parrainage unique a partager.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Mes photos partagees dans la galerie sont-elles publiques ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Oui, les photos que tu partages apparaissent dans la galerie publique VintDress. Seules les photos mannequin IA sont visibles, pas tes photos originales. Tu peux choisir un titre pour chaque photo partagee.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quand est-ce que je recois mon credit de parrainage ?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Le credit de parrainage est attribue instantanement des que ton ami effectue son premier achat sur VintDress. Vous recevez tous les deux 1 credit en meme temps.
              </div>
            </details>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Pret a Obtenir tes Credits Gratuits ?
          </h3>
          <p className="font-body text-white mb-6">
            Commence des maintenant a utiliser l'IA mannequin pour Vinted sans payer !
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            GENERER MES PHOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articles lies
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "mannequin-ia-vinted", title: "Mannequin IA pour Vinted" },
              { slug: "ia-photo-vinted-gratuit-vs-payant", title: "IA Vinted Gratuit vs Payant" },
              { slug: "comment-vendre-sur-vinted", title: "Comment Vendre sur Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="block bg-mint border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mb-2 text-vinted" />
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default CreditsGratuitsVintDressPage;
