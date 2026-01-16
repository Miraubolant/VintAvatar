import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Music, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function AbbigliamentoVintageAnni90Page() {
  useSEO({
    title: "Abbigliamento Vintage Anni 90: Guida Completa alle Tendenze Iconiche",
    description: "Scopri i capi vintage anni 90 più ricercati: jeans baggy, crop top, giacche di jeans, sneakers retrò. Guida completa per un look 90s autentico.",
    keywords: "abbigliamento vintage anni 90, moda 90s, stile anni 90, look vintage 90, tendenze 90s, moda novanta",
    canonicalUrl: "https://vintdress.com/it/articles/abbigliamento-vintage-anni-90",
    ogImage: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=630&fit=crop"
  });

  return (
    <main className="min-h-screen bg-grain">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-pastel/30 via-cream to-mint/30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-vinted/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-pastel/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/it/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vinted transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna agli articoli
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-vinted text-white text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Tendenze
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Stile 90s
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Abbigliamento Vintage Anni 90: Guida Completa alle{' '}
              <span className="text-vinted">Tendenze Iconiche</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Gli anni 90 sono tornati alla grande! Scopri i capi vintage più ricercati,
              dai jeans baggy ai crop top, e impara a creare un look 90s autentico e di tendenza.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">VintDress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>13 gennaio 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Clock className="w-4 h-4" />
                </div>
                <span>15 min di lettura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immagine principale */}
      <section className="container mx-auto px-4 -mt-8 mb-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=600&fit=crop"
              alt="Abbigliamento vintage anni 90 - Moda retrò iconica"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contenuto principale */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Introduzione */}
          <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Music className="w-6 h-6 text-vinted" />
              Il grande ritorno degli anni 90
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'<strong>abbigliamento vintage anni 90</strong> è al centro della moda attuale.
              Questo decennio, segnato dal grunge, dall'hip-hop e dalla cultura pop, ha prodotto
              capi iconici che oggi deliziano gli appassionati di moda second hand. Dai jeans a
              vita alta alle giacche oversize, lo stile 90s è diventato un riferimento imprescindibile.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Che tu sia nostalgico di quell'epoca o stia scoprendo queste tendenze, questa guida
              completa ti accompagnerà per trovare i migliori capi e creare un look 90s autentico.
            </p>
          </div>

          {/* Indice */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Indice</h2>
            <nav className="space-y-2">
              <a href="#capi-iconici" className="block text-vinted hover:underline font-medium">1. I capi iconici degli anni 90</a>
              <a href="#tendenze-grunge" className="block text-vinted hover:underline font-medium">2. Lo stile grunge: lo spirito Seattle</a>
              <a href="#streetwear-90s" className="block text-vinted hover:underline font-medium">3. Streetwear 90s: l'influenza hip-hop</a>
              <a href="#minimalismo" className="block text-vinted hover:underline font-medium">4. Il minimalismo sofisticato</a>
              <a href="#accessori" className="block text-vinted hover:underline font-medium">5. Accessori emblematici</a>
              <a href="#dove-trovare" className="block text-vinted hover:underline font-medium">6. Dove trovare abbigliamento 90s autentico</a>
              <a href="#come-indossare" className="block text-vinted hover:underline font-medium">7. Come indossare il vintage 90s oggi</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">8. FAQ</a>
            </nav>
          </div>

          {/* Sezione 1: Capi iconici */}
          <section id="capi-iconici" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">I capi iconici degli anni 90</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">I jeans baggy e a vita alta</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Il <strong>jeans baggy</strong> è il capo principale del guardaroba 90s. Largo, comodo,
                  spesso indossato con una cintura visibile, incarna lo spirito rilassato dell'epoca.
                  I tagli mom jeans e le vita alte sono anche molto ricercati.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Levi's 501</strong> e <strong>550</strong> - I classici indiscussi</li>
                  <li><strong>JNCO</strong> - I jeans extra larghi dello skatewear</li>
                  <li><strong>Guess</strong> - Il denim premium degli anni 90</li>
                  <li><strong>Calvin Klein</strong> - L'eleganza minimalista</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Il crop top e il body</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Il <strong>crop top</strong> degli anni 90 si distingue per il suo taglio corto e i
                  materiali variegati: velluto, cotone, mesh o metallizzato. Indossato con jeans a vita
                  alta, crea la silhouette emblematica del decennio.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Anche il <strong>body</strong> sta vivendo un grande ritorno, specialmente i modelli
                  a collo alto o con spalline sottili, perfetti per un look minimalista.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">La giacca di jeans oversize</h3>
                <p className="text-gray-700 leading-relaxed">
                  La <strong>giacca di jeans oversize</strong> è un must-have degli anni 90. Che sia
                  blu slavato classico, personalizzata con patch o ricamata, aggiunge un tocco retrò
                  a qualsiasi outfit. I modelli vintage Levi's e Wrangler sono particolarmente ambiti.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">L'abito slip dress</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ispirato alla lingerie, lo <strong>slip dress</strong> (abito sottoveste) è diventato
                  un simbolo dello stile minimalista 90s. Indossato da solo per un look sofisticato o
                  sovrapposto a una t-shirt per uno stile più casual, rimane un capo versatile molto ricercato.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 2: Stile grunge */}
          <section id="tendenze-grunge" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Lo stile grunge: lo spirito Seattle</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nato nei club di Seattle con band come Nirvana e Pearl Jam, lo
                <strong> stile grunge</strong> ha rivoluzionato la moda degli anni 90. Anticonformista
                e noncurante, privilegia il comfort e l'autenticità.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Capi essenziali grunge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Camicia di flanella a quadri</strong> - Indossata aperta su t-shirt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>T-shirt di band</strong> - Nirvana, Pearl Jam, Soundgarden...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Jeans strappati</strong> - Look usurato e rilassato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Doc Martens</strong> - Gli stivali iconici</span>
                  </li>
                </ul>
              </div>

              <div className="bg-mint/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Consigli di stile grunge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Sovrapponi i capi in modo disinvolto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Opta per taglie oversize</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Prediligi i colori scuri: nero, bordeaux, kaki</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Aggiungi accessori in argento o pelle</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 3: Streetwear 90s */}
          <section id="streetwear-90s" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Streetwear 90s: l'influenza hip-hop</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Lo <strong>streetwear degli anni 90</strong> è inseparabile dalla cultura hip-hop.
                Artisti come Tupac, Notorious B.I.G. e TLC hanno reso popolare uno stile urbano
                riconoscibile ovunque: vestiti ampi, loghi visibili e sneakers da collezione.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Marchi cult</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Tommy Hilfiger</li>
                  <li>FUBU</li>
                  <li>Karl Kani</li>
                  <li>Cross Colours</li>
                  <li>Starter</li>
                  <li>Champion</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Capi di punta</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Felpa con cappuccio oversize</li>
                  <li>Tuta completa</li>
                  <li>Cappello snapback</li>
                  <li>Bomber jacket</li>
                  <li>Pantaloni cargo</li>
                  <li>Maglia da basket</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Sneakers 90s</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Nike Air Max 95</li>
                  <li>Air Jordan 1-12</li>
                  <li>Reebok Classic</li>
                  <li>Fila Disruptor</li>
                  <li>Adidas Superstar</li>
                  <li>New Balance 990</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 4: Minimalismo */}
          <section id="minimalismo" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Il minimalismo sofisticato</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                In contrasto con il grunge, il <strong>minimalismo degli anni 90</strong> è stato
                portato avanti da designer come Calvin Klein, Helmut Lang e Jil Sander. Questo
                stile essenziale privilegia i tagli puliti, i colori neutri e i materiali pregiati.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Caratteristiche dello stile minimalista 90s</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Palette neutra</strong>: nero, bianco, beige, grigio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Tagli puliti</strong> e linee dritte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Materiali pregiati</strong>: seta, cashmere, pelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Assenza di loghi</strong> visibili</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Capi minimalisti da cercare</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Slip dress in raso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Blazer boyfriend nero</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pantaloni sartoriali fluidi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Dolcevita sottile in maglia</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 5: Accessori */}
          <section id="accessori" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Accessori emblematici degli anni 90</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Gioielli e accessori</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Choker</strong> - Girocollo in velluto o stile tatuaggio</li>
                  <li><strong>Catene</strong> - Grandi catene dorate stile hip-hop</li>
                  <li><strong>Clip farfalla</strong> - Colorati e brillanti</li>
                  <li><strong>Mini borse</strong> - Le borsette tornano di moda</li>
                  <li><strong>Marsupio</strong> - Il borsello pratico e stiloso</li>
                  <li><strong>Occhiali ovali</strong> - Stile Matrix o hippie</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Calzature cult</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Doc Martens</strong> - Stivali, derby e sandali</li>
                  <li><strong>Platform shoes</strong> - Zeppe stile Spice Girls</li>
                  <li><strong>Buffalo</strong> - Le platform massicce</li>
                  <li><strong>Converse All-Star</strong> - Basse o alte</li>
                  <li><strong>Vans Old Skool</strong> - Lo stile skate</li>
                  <li><strong>Sandali sportivi</strong> - Teva e Birkenstock</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 6: Dove trovare */}
          <section id="dove-trovare" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Dove trovare abbigliamento 90s autentico</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <h3 className="text-xl font-bold mb-4 text-vinted">Piattaforme online</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>piattaforme di second hand</strong> sono il posto migliore per trovare
                capi vintage anni 90 a prezzi accessibili. Vinted, Vestiaire Collective e Depop
                sono piene di tesori di quell'epoca.
              </p>
              <div className="bg-vinted/10 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Consiglio VintDress:</strong> Usa parole chiave precise come "vintage 90s",
                  "Y2K", "grunge" o i nomi dei marchi emblematici per affinare le tue ricerche.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Negozi dell'usato</h3>
                <p className="text-gray-700 text-sm">
                  I negozi vintage e dell'usato locali offrono spesso capi autentici
                  a prezzi imbattibili. Prenditi il tempo per cercare!
                </p>
              </div>

              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Mercatini delle pulci</h3>
                <p className="text-gray-700 text-sm">
                  I mercatini possono rivelare tesori vintage dimenticati.
                  Ideale per contrattare sui prezzi.
                </p>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Boutique specializzate</h3>
                <p className="text-gray-700 text-sm">
                  Alcune boutique si specializzano nel vintage 90s e offrono capi
                  già selezionati e autenticati.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 7: Come indossare */}
          <section id="come-indossare" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Come indossare il vintage 90s oggi</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Mixare vintage e contemporaneo</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La chiave di un look 90s riuscito è <strong>mescolare i capi vintage con
                  basici moderni</strong>. Abbina dei jeans baggy vintage con un crop top attuale,
                  o indossa una giacca di jeans 90s sopra un vestito minimalista contemporaneo.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Evita il look totale 90s che può sembrare un costume</li>
                  <li>Scegli 1-2 capi vintage forti per outfit</li>
                  <li>Bilancia i volumi: capo oversize + capo aderente</li>
                  <li>Gioca con gli accessori per accentuare il lato retrò</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Idee di look 90s</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look casual grunge</h4>
                    <p className="text-sm text-gray-700">
                      Mom jeans + t-shirt di band vintage + camicia di flanella annodata in vita + Doc Martens
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look minimalista chic</h4>
                    <p className="text-sm text-gray-700">
                      Slip dress in raso + blazer oversize + sandali con tacco + borsa baguette
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look streetwear</h4>
                    <p className="text-sm text-gray-700">
                      Jeans baggy + felpa vintage + sneakers retrò + cappellino
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look estivo 90s</h4>
                    <p className="text-sm text-gray-700">
                      Short di jeans a vita alta + crop top + sandali platform + occhiali ovali
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA VintDress */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-vinted to-vinted/80 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Vendi i tuoi capi vintage con VintDress</h2>
                  <p className="text-white/90">
                    Hai abbigliamento vintage anni 90 da vendere su Vinted? Aumenta le tue vendite con
                    le nostre foto indossate generate dall'IA! Gli acquirenti adorano vedere i vestiti
                    su un manichino virtuale.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Prova VintDress gratis
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Tag className="w-8 h-8 text-vinted" />
              Domande frequenti
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Cosa definisce la moda degli anni 90?</h3>
                <p className="text-gray-700">
                  La moda degli anni 90 si caratterizza per la sua diversità: dal grunge rilassato al
                  minimalismo sofisticato, passando per lo streetwear hip-hop. I tagli oversize,
                  il denim, i crop top e le sneakers sono i capi emblematici di quel decennio.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Come riconoscere un vero capo vintage anni 90?</h3>
                <p className="text-gray-700">
                  Controlla le etichette (composizione, paese di produzione), la qualità delle
                  cuciture e delle finiture. I capi degli anni 90 autentici hanno spesso cuciture
                  più robuste e materiali più spessi. Cerca anche i loghi e i design d'epoca
                  specifici dei marchi.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Quali marchi degli anni 90 sono i più ricercati?</h3>
                <p className="text-gray-700">
                  I marchi più ambiti includono Levi's, Tommy Hilfiger, Calvin Klein,
                  Champion, FUBU, Starter e Nike vintage. I capi con loghi visibili o
                  design iconici dell'epoca sono particolarmente valutati.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Lo stile anni 90 è adatto a tutte le età?</h3>
                <p className="text-gray-700">
                  Assolutamente! Lo stile anni 90 è molto versatile. Opta per il minimalismo
                  sofisticato se preferisci un look più maturo, oppure osa con il grunge e lo
                  streetwear per uno stile più audace. L'importante è adattare i capi al tuo
                  fisico e alla tua personalità.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Quale budget per un guardaroba vintage anni 90?</h3>
                <p className="text-gray-700">
                  I prezzi variano in base alle piattaforme e alle condizioni dei capi. Su Vinted o
                  nei negozi dell'usato, conta 10-30€ per una t-shirt vintage, 25-60€ per dei jeans
                  Levi's, 30-80€ per una giacca di jeans. I capi rari o di marchi premium possono
                  raggiungere prezzi più elevati.
                </p>
              </div>
            </div>
          </section>

          {/* Articoli correlati */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articoli correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/it/articles/negozio-vintage-online"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Negozio Vintage Online: Guida Completa 2026</h3>
                <p className="text-gray-600 text-sm">
                  Scopri le migliori piattaforme per comprare abbigliamento vintage online.
                </p>
              </Link>
              <Link
                to="/it/articles/jeans-levis-vintage"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Jeans Levi's Vintage: Guida all'Acquisto</h3>
                <p className="text-gray-600 text-sm">
                  Come riconoscere e acquistare un autentico jeans Levi's vintage.
                </p>
              </Link>
            </div>
          </section>

          {/* Navigazione tra articoli */}
          <ArticleNavigation currentPath="/it/articles/abbigliamento-vintage-anni-90" />
        </div>
      </article>
    </main>
  );
}
