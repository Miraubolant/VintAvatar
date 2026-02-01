import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';
import { ArticleNavigation } from '../../components/ArticleNavigation';
import { FileText, Sparkles, MessageSquare, CheckCircle, XCircle, ArrowRight, Zap, Target, TrendingUp, Clock, AlertTriangle, Lightbulb } from 'lucide-react';

export default function DescriptionVintedOptimiseeIAPage() {
  useSEO({
    title: "Description Vinted Optimisee avec l'IA : Vendez Plus Vite | VintDress",
    description: "Transformez vos descriptions Vinted basiques en textes optimises qui rassurent l'acheteur et accelerent vos ventes grace a l'intelligence artificielle.",
    keywords: "description vinted, optimiser description vinted, ia description vinted, texte annonce vinted, vendre plus vite vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop"
          alt="Description Vinted optimisee avec l'IA"
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
            <span className="bg-mint px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Conseils
            </span>
            <span className="font-space-grotesk">1 Fevrier 2026</span>
            <span className="font-space-grotesk">12 min de lecture</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Description Vinted : Comment l'IA Transforme tes Textes en Machines a Vendre
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Tu passes des heures a prendre de belles photos pour Vinted, mais tu negliges completement la description ? Grosse erreur. Je l'ai apprise a mes depens.
          </p>

          {/* L'erreur classique */}
          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              L'Erreur que 90% des Vendeurs Font
            </h2>

            <p className="text-lg mb-6">
              Pendant mes 3 premiers mois sur Vinted, je mettais juste "Bon etat" et j'attendais que ca se vende.
            </p>

            <div className="bg-white border-3 border-black p-6 mb-4">
              <h3 className="font-bold mb-2">Resultat ?</h3>
              <p className="text-gray-700">Des dizaines de messages posant les memes questions :</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Quelle est la matiere ?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "C'est quelle taille exactement ?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Il y a des defauts ?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Ca taille grand ou petit ?"
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-3 border-black p-4">
              <p className="font-semibold">
                <Lightbulb className="w-5 h-5 inline mr-2 text-yellow-600" />
                J'ai compris un truc : une description complete et bien redigee reduit les questions de <span className="text-vinted font-bold">70%</span> et multiplie par <span className="text-vinted font-bold">2</span> tes chances de vendre rapidement.
              </p>
            </div>
          </div>

          {/* Pourquoi la description compte */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Pourquoi la Description Compte Autant que la Photo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cream border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Description faible =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Acheteur qui doute</li>
                  <li>• Questions en cascade</li>
                  <li>• Negociation du prix</li>
                  <li>• Abandon du panier</li>
                  <li>• Concurrence qui gagne</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Description optimisee =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Acheteur en confiance</li>
                  <li>• Achat impulsif</li>
                  <li>• Prix accepte</li>
                  <li>• Moins de retours</li>
                  <li>• Meilleures evaluations</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-4 border-black p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="text-sm">des acheteurs lisent la description avant d'acheter</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">-50%</div>
                  <div className="text-sm">de questions avec une description complete</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2x</div>
                  <div className="text-sm">plus de chances de vente rapide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Anatomie d'une bonne description */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Anatomie d'une Description qui Vend
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Une bonne description Vinted repond a TOUTES les questions que l'acheteur pourrait se poser. Voici la structure ideale :
            </p>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Accroche emotionnelle</h3>
                    <p className="text-gray-700 mb-2">Commence par une phrase qui fait rever :</p>
                    <div className="bg-cream p-3 border-2 border-black text-sm italic">
                      "Cette petite robe noire deviendra votre alliee pour toutes les occasions !"
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Informations essentielles</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• <strong>Marque :</strong> Zara, H&M, etc.</li>
                      <li>• <strong>Taille :</strong> S / 36 (+ mensurations si possible)</li>
                      <li>• <strong>Matiere :</strong> 100% coton, polyester, etc.</li>
                      <li>• <strong>Couleur :</strong> Noir profond, bleu marine, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Details du produit</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Coupe et style (cintre, ample, ajuste)</li>
                      <li>• Longueur (mini, midi, maxi)</li>
                      <li>• Fermeture (zip, boutons, elastique)</li>
                      <li>• Details (poches, doublure, motifs)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Etat et transparence</h3>
                    <p className="text-gray-700 mb-2">Sois honnete sur l'etat :</p>
                    <div className="bg-cream p-3 border-2 border-black text-sm italic">
                      "Porte 2-3 fois, excellent etat. Legere trace d'usure sur l'etiquette interieure (voir photo 4)."
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Call-to-action</h3>
                    <p className="text-gray-700 mb-2">Termine par une invitation :</p>
                    <div className="bg-cream p-3 border-2 border-black text-sm italic">
                      "N'hesite pas a me poser des questions ou a faire une offre !"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Avant/Apres */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Avant / Apres : La Transformation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-4 border-red-300 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-700">
                  <XCircle className="w-5 h-5" />
                  AVANT (Description basique)
                </h3>
                <div className="bg-white p-4 border-2 border-red-200 text-gray-700">
                  <p>"Robe noire Zara taille S. Bon etat. Prix neuf 39€."</p>
                </div>
                <div className="mt-4 text-sm text-red-700">
                  <p><strong>Problemes :</strong></p>
                  <ul className="mt-1 space-y-1">
                    <li>• Aucune emotion</li>
                    <li>• Informations manquantes</li>
                    <li>• Pas de details</li>
                    <li>• L'acheteur va poser 10 questions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-4 border-green-300 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  APRES (Description optimisee IA)
                </h3>
                <div className="bg-white p-4 border-2 border-green-200 text-gray-700 text-sm">
                  <p>"Cette petite robe noire Zara sera votre alliee pour toutes les occasions !</p>
                  <p className="mt-2"><strong>Details :</strong><br/>
                  - Marque : Zara<br/>
                  - Taille : S (convient 34-36)<br/>
                  - Matiere : 95% polyester, 5% elasthanne<br/>
                  - Couleur : Noir profond</p>
                  <p className="mt-2"><strong>Caracteristiques :</strong><br/>
                  - Coupe ajustee et flatteuse<br/>
                  - Longueur midi (au genou)<br/>
                  - Fermeture zip invisible au dos<br/>
                  - Tissu stretch tres confortable</p>
                  <p className="mt-2"><strong>Etat :</strong> Excellent, porte 2 fois pour des soirees. Aucun defaut visible.</p>
                  <p className="mt-2">N'hesite pas a me contacter pour plus d'infos !"</p>
                </div>
              </div>
            </div>
          </div>

          {/* L'IA a la rescousse */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              L'IA a la Rescousse : Genere tes Descriptions en Secondes
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Ecrire une description complete prend du temps. En 2026, l'IA peut le faire pour toi en quelques secondes.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                Comment l'IA optimise tes descriptions ?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <Target className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Analyse</h4>
                  <p className="text-sm text-gray-600">L'IA analyse ta photo et les infos de ton article Vinted</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Genere</h4>
                  <p className="text-sm text-gray-600">Elle redige une description complete et persuasive</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Optimise</h4>
                  <p className="text-sm text-gray-600">Mots-cles SEO Vinted pour plus de visibilite</p>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6">
              <h3 className="font-bold text-xl mb-4">Avantages de l'IA pour tes descriptions :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Gain de temps</h4>
                    <p className="text-sm text-gray-600">5 secondes au lieu de 10 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Completude</h4>
                    <p className="text-sm text-gray-600">Ne rate jamais une info importante</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Persuasion</h4>
                    <p className="text-sm text-gray-600">Formulations qui declenchent l'achat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">SEO Vinted</h4>
                    <p className="text-sm text-gray-600">Mots-cles pour etre mieux reference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Les mots qui vendent */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Les Mots Magiques qui Declenchent l'Achat
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Certains mots ont un pouvoir psychologique sur les acheteurs. Utilise-les dans tes descriptions :
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-yellow-100 border-3 border-black p-4">
                <h3 className="font-bold mb-3 text-center">Urgence</h3>
                <ul className="text-sm space-y-1">
                  <li>• "Derniere piece"</li>
                  <li>• "Prix exceptionnel"</li>
                  <li>• "Rarete"</li>
                  <li>• "Edition limitee"</li>
                </ul>
              </div>
              <div className="bg-pink-100 border-3 border-black p-4">
                <h3 className="font-bold mb-3 text-center">Qualite</h3>
                <ul className="text-sm space-y-1">
                  <li>• "Comme neuf"</li>
                  <li>• "Excellent etat"</li>
                  <li>• "Qualite premium"</li>
                  <li>• "Tissu haut de gamme"</li>
                </ul>
              </div>
              <div className="bg-blue-100 border-3 border-black p-4">
                <h3 className="font-bold mb-3 text-center">Emotion</h3>
                <ul className="text-sm space-y-1">
                  <li>• "Coup de coeur"</li>
                  <li>• "Incontournable"</li>
                  <li>• "Sublime"</li>
                  <li>• "Flatteuse"</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-300 p-4">
              <h3 className="font-bold mb-2 text-red-700">Mots a eviter :</h3>
              <p className="text-sm text-gray-700">"Vieux", "use", "debarrasse", "urgent", "negociable" (ca invite trop a la negociation), "jamais porte avec etiquette" si c'est faux.</p>
            </div>
          </div>

          {/* Checklist */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Checklist : Ta Description est-elle Complete ?
            </h2>

            <div className="bg-white border-4 border-black p-6">
              <div className="space-y-3">
                {[
                  "Accroche emotionnelle en premiere ligne",
                  "Marque mentionnee",
                  "Taille precise (+ mensurations si possible)",
                  "Matiere / composition",
                  "Couleur exacte",
                  "Coupe et style decrits",
                  "Details specifiques (poches, fermeture, etc.)",
                  "Etat honnete et precis",
                  "Defauts mentionnes (si existants)",
                  "Invitation a contacter / faire une offre"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-cream rounded">
                    <div className="w-6 h-6 border-2 border-black flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-vinted" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Combine Photo IA + Description Optimisee
            </h2>
            <p className="text-white text-lg mb-6">
              Avec VintDress, obtiens des photos professionnelles ET des descriptions qui vendent.
              Le combo gagnant pour booster tes ventes Vinted.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Decouvrir VintDress
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
                <h3 className="font-bold text-lg mb-2">Quelle longueur ideale pour une description Vinted ?</h3>
                <p className="text-gray-700">Entre 100 et 200 mots. Assez pour etre complet, mais pas trop pour ne pas perdre le lecteur. L'essentiel est que toutes les infos importantes soient presentes.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Dois-je mentionner le prix d'achat original ?</h3>
                <p className="text-gray-700">Oui, ca aide l'acheteur a evaluer la bonne affaire. "Prix boutique : 89€" donne une reference et justifie ton prix de vente.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Comment decrire un defaut sans faire fuir l'acheteur ?</h3>
                <p className="text-gray-700">Sois honnete mais positif : "Legere trace d'usure sur le col, quasi invisible une fois porte" plutot que "Tache sur le col". La transparence rassure.</p>
              </div>

              <div className="border-3 border-black p-6 bg-cream">
                <h3 className="font-bold text-lg mb-2">Faut-il utiliser des emojis dans les descriptions ?</h3>
                <p className="text-gray-700">Avec moderation. 2-3 emojis peuvent rendre ta description plus attractive, mais trop d'emojis font amateur. Evite les emojis dans le titre.</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Une belle photo attire l'oeil, mais c'est la description qui convertit. Les vendeurs qui reussissent sur Vinted l'ont compris : chaque mot compte.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              En 2026, tu n'as plus d'excuse pour avoir des descriptions baclees. L'IA peut te generer des textes optimises en quelques secondes. Combine ca avec des photos de mannequin IA, et tu as la formule gagnante.
            </p>
            <p className="text-lg font-semibold">
              Photo professionnelle + Description complete = Vente rapide au bon prix.
            </p>
          </div>

          {/* Articles connexes */}
          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Articles Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/articles/se-demarquer-vinted-mannequin-ia" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Se Demarquer sur Vinted avec le Mannequin IA</h3>
                <p className="text-gray-600 text-sm">Comment booster ta visibilite parmi des milliers d'annonces.</p>
              </Link>
              <Link to="/articles/5-astuces-pour-vendre-plus-vite-sur-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">5 Astuces pour Vendre Plus Vite sur Vinted</h3>
                <p className="text-gray-600 text-sm">Techniques eprouvees pour accelerer tes ventes.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
