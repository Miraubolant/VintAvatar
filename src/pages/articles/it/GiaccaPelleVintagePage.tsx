import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Star, Shield, Heart, Sparkles, CheckCircle, X, Tag, History, Award, Package } from 'lucide-react';

export default function GiaccaPelleVintagePage() {
  useSEO({
    title: "Giacca Pelle Vintage: Guida Completa per Trovare il Pezzo Perfetto | VintDress",
    description: "Scopri le giacche di pelle vintage più ricercate: perfecto, bomber, aviator. Guida esperta per autenticare, scegliere e prendersi cura della tua giacca di pelle.",
    keywords: "giacca pelle vintage, perfecto vintage, bomber pelle, giacca aviator vintage, giacca pelle schott, giacca pelle uomo vintage, giacca pelle donna vintage",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=400&fit=crop"
          alt="Giacca di pelle vintage - perfecto e bomber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Giacca Pelle Vintage
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Guida Completa per il Pezzo Perfetto
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
              Guida
            </span>
            <span className="text-black">13 Gennaio 2026</span>
            <span className="text-black">•</span>
            <span className="text-black">18 min di lettura</span>
            <span className="text-black">•</span>
            <span className="text-black">Di VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Pelle', 'Vintage', 'Perfecto', 'Bomber', 'Schott'].map((tag) => (
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
            La <strong>giacca di pelle vintage</strong> è molto più di un semplice capo di abbigliamento: è un pezzo di storia, un simbolo di ribellione e stile che attraversa le generazioni. Che tu sia un collezionista esperto o un neofita del vintage, questa guida ti aiuterà a navigare nell'affascinante universo delle giacche di pelle d'epoca.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Tag className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Un Pezzo di Storia</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <p className="text-lg">
                  Dalle iconiche <strong>Perfecto</strong> indossate da Marlon Brando ai <strong>bomber</strong> degli aviatori della Seconda Guerra Mondiale, ogni giacca di pelle vintage racconta una storia unica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stili Iconici */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <Star className="w-8 h-8 text-vinted" />
            Gli Stili Iconici delle Giacche di Pelle
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-3">La Perfecto (Biker)</h3>
              <p className="mb-4">
                La regina indiscussa delle giacche di pelle. Riconoscibile per la chiusura asimmetrica, i risvolti con zip e la cintura in vita.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Chiusura a cerniera diagonale
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Risvolti con revers a punta
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Cintura in vita regolabile
                </li>
              </ul>
            </div>

            <div className="bg-mint/30 border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-3">Il Bomber (Flight Jacket)</h3>
              <p className="mb-4">
                Nato per i piloti militari, il bomber si distingue per la sua linea arrotondata, i polsini e l'orlo elasticizzati.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Colletto a costine o pelo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Polsini e orlo elasticizzati
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Zip centrale dritta
                </li>
              </ul>
            </div>

            <div className="bg-vinted/20 border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-3">L'Aviator (Shearling)</h3>
              <p className="mb-4">
                L'aviator foderata in montone è il modello più caldo e lussuoso. Indossata dai piloti degli anni '30-'40.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Fodera in montone naturale
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Colletto ampio rovesciabile
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Pelle spessa e resistente
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-3">Il Blazer in Pelle</h3>
              <p className="mb-4">
                Più elegante e strutturato, il blazer in pelle è perfetto per chi cerca uno stile raffinato.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Taglio sartoriale classico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Chiusura con bottoni
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Revers a lancia o sciallato
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Storia della Perfecto */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <History className="w-8 h-8 text-vinted" />
            La Storia della Perfecto
          </h2>

          <div className="bg-black text-white p-6 border-4 border-black mb-6">
            <h3 className="font-display font-bold text-2xl mb-3">Schott NYC: I Creatori della Leggenda</h3>
            <p className="text-gray-300 mb-4">
              Nel 1928, Irving Schott, figlio di immigrati russi a New York, creò la prima giacca di pelle con cerniera della storia. La chiamò <strong className="text-white">Perfecto</strong>, dal nome del suo sigaro preferito.
            </p>
            <p className="text-gray-300">
              Venduta originariamente a 5,50 dollari nei negozi Harley-Davidson, la Perfecto divenne l'uniforme non ufficiale dei motociclisti americani.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-pink-pastel/20 border-2 border-black p-4">
              <span className="bg-vinted text-white font-bold px-3 py-1 border-2 border-black">1953</span>
              <div>
                <strong>Il Selvaggio con Marlon Brando</strong> - Brando indossa la Schott Perfecto, trasformando la giacca in un simbolo di ribellione giovanile.
              </div>
            </div>
            <div className="flex items-start gap-4 bg-mint/20 border-2 border-black p-4">
              <span className="bg-vinted text-white font-bold px-3 py-1 border-2 border-black">1955</span>
              <div>
                <strong>James Dean e la Ribellione</strong> - Dean porta la giacca rossa in "Gioventù bruciata", consolidando l'associazione tra pelle e contestazione.
              </div>
            </div>
            <div className="flex items-start gap-4 bg-vinted/20 border-2 border-black p-4">
              <span className="bg-vinted text-white font-bold px-3 py-1 border-2 border-black">1970s</span>
              <div>
                <strong>L'Era Punk</strong> - I Ramones adottano la Perfecto come uniforme ufficiale, aggiungendo spille e patch.
              </div>
            </div>
          </div>
        </div>

        {/* Marchi Ricercati */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-vinted" />
            I Marchi Più Ricercati
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-vinted text-white">
                  <th className="border-2 border-black p-3 text-left font-display">Marchio</th>
                  <th className="border-2 border-black p-3 text-left font-display">Paese</th>
                  <th className="border-2 border-black p-3 text-left font-display">Specialità</th>
                  <th className="border-2 border-black p-3 text-left font-display">Prezzo Vintage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-black p-3 font-bold">Schott NYC</td>
                  <td className="border-2 border-black p-3">USA</td>
                  <td className="border-2 border-black p-3">Perfecto, A-2</td>
                  <td className="border-2 border-black p-3">200€ - 800€</td>
                </tr>
                <tr className="bg-cream">
                  <td className="border-2 border-black p-3 font-bold">Lewis Leathers</td>
                  <td className="border-2 border-black p-3">UK</td>
                  <td className="border-2 border-black p-3">Biker, Café Racer</td>
                  <td className="border-2 border-black p-3">400€ - 1.500€</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-black p-3 font-bold">Vanson Leathers</td>
                  <td className="border-2 border-black p-3">USA</td>
                  <td className="border-2 border-black p-3">Moto, Custom</td>
                  <td className="border-2 border-black p-3">300€ - 1.000€</td>
                </tr>
                <tr className="bg-cream">
                  <td className="border-2 border-black p-3 font-bold">Belstaff</td>
                  <td className="border-2 border-black p-3">UK</td>
                  <td className="border-2 border-black p-3">Moto, Aviator</td>
                  <td className="border-2 border-black p-3">250€ - 900€</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-black p-3 font-bold">Chevignon</td>
                  <td className="border-2 border-black p-3">Francia</td>
                  <td className="border-2 border-black p-3">Bomber, Flight</td>
                  <td className="border-2 border-black p-3">100€ - 400€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Come Autenticare */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-vinted" />
            Come Autenticare una Giacca Vintage
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-4">Le Etichette</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>Le etichette vintage sono spesso in tessuto tessuto, non stampate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Cerca etichette sindacali o "Made in USA" per i pezzi americani</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>L'usura naturale dell'etichetta indica un pezzo autentico</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl mb-4">Le Cerniere</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-vinted text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span><strong>Talon</strong> e <strong>Crown</strong> sono le cerniere vintage più ricercate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-vinted text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Le cerniere in ottone massiccio indicano alta qualità</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-vinted text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>Diffida delle YKK su giacche supposte degli anni '40-'50</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-3 border-black p-4">
            <h4 className="font-display font-bold text-lg mb-2 text-red-800">Segnali d'Allarme</h4>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Pelle perfettamente uniforme senza variazioni naturali
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Cuciture in poliestere su un capo suppostamente degli anni '60
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Prezzo troppo basso per essere vero
              </li>
            </ul>
          </div>
        </div>

        {/* Qualità della Pelle */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <Heart className="w-8 h-8 text-vinted" />
            Riconoscere la Qualità della Pelle
          </h2>

          <div className="space-y-4">
            <div className="bg-green-100 border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">A - Pieno Fiore (Full Grain)</h3>
              <p className="mb-2">La migliore qualità. La pelle conserva la sua superficie naturale con tutte le imperfezioni che la rendono unica.</p>
              <p className="text-sm text-green-700 font-medium">Riconoscerla: Superficie irregolare, pori visibili, odore ricco</p>
            </div>

            <div className="bg-yellow-100 border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">B - Fiore Rettificato (Top Grain)</h3>
              <p className="mb-2">Pelle di buona qualità la cui superficie è stata leggermente levigata per uniformarla.</p>
              <p className="text-sm text-yellow-700 font-medium">Riconoscerla: Superficie regolare, meno difetti visibili</p>
            </div>

            <div className="bg-orange-100 border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">C - Crosta (Split Leather)</h3>
              <p className="mb-2">Strato inferiore della pelle, meno resistente e di qualità inferiore.</p>
              <p className="text-sm text-orange-700 font-medium">Riconoscerla: Aspetto plasticoso, odore chimico</p>
            </div>

            <div className="bg-red-100 border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">D - Finta Pelle (PU/PVC)</h3>
              <p className="mb-2">Materiale sintetico che imita la pelle. Non sviluppa patina.</p>
              <p className="text-sm text-red-700 font-medium">Riconoscerla: Odore di plastica, superficie troppo uniforme</p>
            </div>
          </div>
        </div>

        {/* Cura e Conservazione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-vinted" />
            Cura e Conservazione
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-4">Manutenzione Regolare</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Pulisci regolarmente con un panno umido
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Applica un latte idratante 2-3 volte l'anno
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Mai usare prodotti aggressivi o solventi
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Lascia asciugare naturalmente se bagnata
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl mb-4">Conservazione</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Appendi su una gruccia larga e sagomata
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Conserva lontano dalla luce diretta
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Usa una custodia in cotone traspirante
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Evita di piegare per non segnare la pelle
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dove Comprare */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
            <Package className="w-8 h-8 text-vinted" />
            Dove Comprare
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Piattaforme Online</h3>
              <ul className="space-y-2">
                <li><strong>Vinted</strong> - Ampia scelta, prezzi accessibili</li>
                <li><strong>eBay</strong> - Per pezzi rari e collezione</li>
                <li><strong>Vestiaire Collective</strong> - Lusso garantito</li>
                <li><strong>Etsy</strong> - Venditori specializzati vintage</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Negozi Fisici</h3>
              <ul className="space-y-2">
                <li><strong>Mercatini dell'usato</strong> - Occasioni inaspettate</li>
                <li><strong>Negozi vintage</strong> - Selezione curata</li>
                <li><strong>Aste</strong> - Per pezzi da collezione</li>
                <li><strong>Mercatini biker</strong> - L'ideale per le Perfecto</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA VintDress */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-4">
            Vendi la tua giacca vintage su Vinted?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Con VintDress, crea foto professionali della tua giacca di pelle in pochi secondi. La nostra IA genera immagini indossate che aumentano le tue vendite fino al 300%.
          </p>
          <a
            href="/it"
            className="inline-block bg-white text-black font-display font-bold px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Prova VintDress Gratis
          </a>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-3xl mb-6">Domande Frequenti</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-4 group">
              <summary className="font-display font-bold cursor-pointer list-none flex justify-between items-center">
                Come distinguere una vera Schott vintage da una recente?
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Le Schott vintage hanno etichette diverse a seconda dell'epoca (cerca le etichette 'Schott Bros' o 'Schott NYC'), cerniere Talon, e una costruzione generalmente più robusta. I numeri di modello e lo stile dell'etichetta permettono di datare precisamente il capo.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-4 group">
              <summary className="font-display font-bold cursor-pointer list-none flex justify-between items-center">
                Quanto costa una giacca di pelle vintage autentica?
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                I prezzi variano enormemente: da 100€ per un bomber anni '80 in buone condizioni a oltre 2.000€ per una Perfecto anni '50 o una giacca da volo della Seconda Guerra Mondiale.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-4 group">
              <summary className="font-display font-bold cursor-pointer list-none flex justify-between items-center">
                Come far ammorbidire una giacca di pelle vintage rigida?
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Usa un latte idratante di qualità in diverse applicazioni. Indossa la giacca regolarmente per permettere alla pelle di modellarsi al tuo corpo. Evita i metodi brutali come l'acqua calda.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-4 group">
              <summary className="font-display font-bold cursor-pointer list-none flex justify-between items-center">
                Le giacche di pelle vintage sono adatte a tutte le morfologie?
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Sì, a condizione di scegliere lo stile giusto. Le Perfecto stanno bene ai fisici slanciati, i bomber sono più indulgenti, e i blazer si adattano a tutte le silhouette. Le taglie vintage tendono a essere più piccole.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-4 group">
              <summary className="font-display font-bold cursor-pointer list-none flex justify-between items-center">
                È possibile far riparare una giacca di pelle vintage?
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Sì, i pellettieri qualificati possono riparare strappi, sostituire cerniere e fodera, e ricondizionare la pelle. Per i pezzi di valore, è meglio investire in una riparazione professionale.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
