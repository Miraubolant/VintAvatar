import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function AbitoVintageDonnaPage() {
  useSEO({
    title: "Abito Vintage Donna: Guida Completa per Trovare il Capo Perfetto",
    description: "Scopri gli abiti vintage donna più ricercati: anni 50, 60, 70, bohémien, pin-up. Guida completa per scegliere, autenticare e indossare un abito vintage.",
    keywords: "abito vintage donna, vestito retrò, abito anni 50, vestito bohemien vintage, abito pin-up, moda vintage donna",
    canonicalUrl: "https://vintdress.com/it/articles/abito-vintage-donna",
    ogImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=630&fit=crop"
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
                Moda Vintage
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Abiti
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Abito Vintage Donna: Guida Completa per Trovare il{' '}
              <span className="text-vinted">Capo Perfetto</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Dagli anni 50 agli anni 90, gli abiti vintage incarnano l'eleganza senza tempo.
              Scopri come trovare l'abito perfetto, autenticarlo e indossarlo con stile.
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
                <span>14 min di lettura</span>
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
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=600&fit=crop"
              alt="Abito vintage donna - Eleganza senza tempo"
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
              <Crown className="w-6 h-6 text-vinted" />
              L'eleganza senza tempo degli abiti vintage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'<strong>abito vintage donna</strong> è molto più di un semplice indumento: è un
              viaggio nel tempo, un capo unico che racconta una storia. Che tu stia cercando
              un abito swing degli anni 50, un mini abito psichedelico dei sixties o un vestito
              bohémien dei seventies, il vintage offre tesori incomparabili.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Questa guida completa ti accompagna nella ricerca dell'abito vintage perfetto, nella
              comprensione delle diverse epoche e stili, e nel portare questi capi d'eccezione con sicurezza.
            </p>
          </div>

          {/* Sommario */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Sommario</h2>
            <nav className="space-y-2">
              <a href="#stili-epoche" className="block text-vinted hover:underline font-medium">1. Gli stili per epoca</a>
              <a href="#anni-50" className="block text-vinted hover:underline font-medium">2. Abiti anni 50: l'eleganza pin-up</a>
              <a href="#anni-60-70" className="block text-vinted hover:underline font-medium">3. Anni 60-70: dal mod al bohémien</a>
              <a href="#anni-80-90" className="block text-vinted hover:underline font-medium">4. Anni 80-90: glamour e minimalismo</a>
              <a href="#autenticare" className="block text-vinted hover:underline font-medium">5. Come autenticare un abito vintage</a>
              <a href="#scegliere-taglia" className="block text-vinted hover:underline font-medium">6. Scegliere la taglia giusta</a>
              <a href="#dove-comprare" className="block text-vinted hover:underline font-medium">7. Dove acquistare abiti vintage</a>
              <a href="#cura" className="block text-vinted hover:underline font-medium">8. Cura e conservazione</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Sezione 1: Stili per epoca */}
          <section id="stili-epoche" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Gli stili di abiti per epoca</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ogni decennio ha portato la sua dose di innovazioni e stili iconici nell'universo
                degli abiti. Comprendere queste diverse epoche ti aiuterà a identificare
                i capi autentici e a scegliere lo stile che ti rappresenta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Anni 40-50</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Vita stretta e gonna ampia</li>
                  <li>Stampe floreali e pois</li>
                  <li>Tessuti di qualità (cotone, seta)</li>
                  <li>Dettagli curati (bottoni, colletti)</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Anni 60</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Taglio dritto o a trapezio</li>
                  <li>Motivi geometrici e pop</li>
                  <li>Minigonne rivoluzionarie</li>
                  <li>Materiali sintetici innovativi</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Anni 70</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Stile bohémien e fluido</li>
                  <li>Maxi abiti e stampe etniche</li>
                  <li>Maniche a campana (bell sleeves)</li>
                  <li>Tessuti naturali e uncinetto</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Anni 80-90</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Spalle marcate e power dressing</li>
                  <li>Abiti aderenti e stretch</li>
                  <li>Minimalismo e slip dress</li>
                  <li>Paillettes e glamour</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 2: Anni 50 */}
          <section id="anni-50" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Abiti anni 50: l'eleganza pin-up</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Il New Look di Dior</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gli anni 50 sono segnati dal <strong>New Look</strong> di Christian Dior:
                  vita molto marcata, gonne ampie e spalle morbide. Questa silhouette ultra-femminile
                  resta una delle più ricercate nel vintage.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Abito swing</strong> - Gonna circolare ideale per ballare</li>
                  <li><strong>Abito a tubino</strong> - Taglio aderente ed elegante</li>
                  <li><strong>Abito chemisier</strong> - Stile casual chic</li>
                  <li><strong>Abito da cocktail</strong> - Per le occasioni speciali</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marchi e stilisti da cercare</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Alta moda</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Christian Dior</li>
                      <li>Balenciaga</li>
                      <li>Givenchy</li>
                      <li>Jacques Fath</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Prêt-à-porter</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Jonathan Logan</li>
                      <li>Gay Gibson</li>
                      <li>Lanz</li>
                      <li>Toni Todd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione 3: Anni 60-70 */}
          <section id="anni-60-70" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Anni 60-70: dal mod al bohémien</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Stile Mod (anni 60)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La rivoluzione dei sixties porta tagli geometrici, colori vivaci
                  e la rivoluzionaria minigonna di Mary Quant.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Abito a trapezio</strong> - Taglio a A svasato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Mini abito</strong> - Sopra il ginocchio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Shift dress</strong> - Dritto e senza cintura</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Stile Bohémien (anni 70)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I seventies celebrano la libertà con abiti fluidi, stampe
                  etniche e un ritorno ai materiali naturali.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Maxi abito</strong> - Lungo e fluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Abito contadino</strong> - Ricami e volant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Abito caftano</strong> - Ampio ed esotico</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 4: Anni 80-90 */}
          <section id="anni-80-90" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Anni 80-90: glamour e minimalismo</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Power dressing degli anni 80</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gli anni 80 incarnano l'eccesso e il potere femminile con spalle
                  strutturate, colori vivaci e materiali brillanti.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Stili chiave</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Abito con spalline</li>
                      <li>Abito bustier</li>
                      <li>Abito con paillettes</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Marchi</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Thierry Mugler</li>
                      <li>Claude Montana</li>
                      <li>Azzedine Alaïa</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Materiali</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Lamé e lurex</li>
                      <li>Velluto</li>
                      <li>Lycra stretch</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Minimalismo degli anni 90</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In reazione agli eccessi degli eighties, gli anni 90 propongono un minimalismo
                  elegante con linee pulite e colori neutri.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Slip dress</strong> - L'iconico abito sottoveste</li>
                  <li><strong>Abito a colonna</strong> - Lungo e dritto</li>
                  <li><strong>Little black dress</strong> - Minimalista e chic</li>
                  <li><strong>Abito grunge</strong> - Stampe floreali e sovrapposizioni</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 5: Autenticare */}
          <section id="autenticare" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Come autenticare un abito vintage</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Gli indizi di autenticità</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Etichette e marchi</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Etichetta in tessuto cucita (non stampata)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Menzione "Union Made" o sindacato (USA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Assenza di codici a barre (prima del 1980)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Paese d'origine (prima della globalizzazione)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Finiture e costruzione</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Cerniere in metallo (prima del 1970)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Cuciture a mano o impunture curate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Fodera completa in seta o acetato</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Bottoni coordinati o in madreperla</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Punti di attenzione</h3>
                <p className="text-gray-700">
                  Diffida delle riproduzioni moderne in stile "vintage". I veri capi
                  vintage hanno una patina naturale, tessuti di qualità superiore e
                  finiture che non si trovano più nella confezione attuale.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 6: Taglia */}
          <section id="scegliere-taglia" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Scegliere la taglia vintage giusta</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Attenzione:</strong> Le taglie vintage non corrispondono alle taglie
                attuali! Una taglia 12 degli anni 50 equivale spesso a una 38-40 moderna.
                Affidati sempre alle misure reali piuttosto che all'etichetta.
              </p>

              <h3 className="text-lg font-bold mb-4">Misure essenziali da verificare</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Circonferenza petto</h4>
                  <p className="text-sm text-gray-600">Misurata sotto le ascelle</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Circonferenza vita</h4>
                  <p className="text-sm text-gray-600">Nel punto più stretto</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Circonferenza fianchi</h4>
                  <p className="text-sm text-gray-600">Nel punto più largo</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Lunghezza</h4>
                  <p className="text-sm text-gray-600">Dalla spalla all'orlo</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Consiglio VintDress:</strong> Chiedi sempre le misure da steso al venditore
                  e confrontale con un capo che già possiedi e che ti sta bene.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 7: Dove comprare */}
          <section id="dove-comprare" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Dove acquistare abiti vintage</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Piattaforme online</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Ampia scelta, prezzi accessibili</li>
                  <li><strong>Vestiaire Collective</strong> - Lusso e autenticazione</li>
                  <li><strong>Etsy</strong> - Venditori specializzati in vintage</li>
                  <li><strong>eBay</strong> - Aste e affari</li>
                  <li><strong>Depop</strong> - Tendenza e moda vintage</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Nei negozi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Negozi dell'usato</strong> - Scoperte a piccolo prezzo</li>
                  <li><strong>Boutique vintage</strong> - Capi selezionati</li>
                  <li><strong>Conto vendita</strong> - Marchi di qualità</li>
                  <li><strong>Mercatini delle pulci</strong> - Tesori nascosti</li>
                  <li><strong>Aste</strong> - Capi da collezione</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 8: Cura */}
          <section id="cura" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Cura e conservazione</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Lavaggio e pulizia</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Preferire il lavaggio a secco per i capi delicati</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lavaggio a mano con acqua fredda per il cotone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Usare detergenti delicati senza agenti sbiancanti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Asciugare in piano, mai in asciugatrice</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Conservazione</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Grucce imbottite per evitare segni</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Copriabiti in cotone traspirante (non plastica)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lontano dalla luce diretta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Antitarme naturali (lavanda, cedro)</span>
                    </li>
                  </ul>
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
                  <h2 className="text-2xl font-bold mb-2">Vendi i tuoi abiti vintage con VintDress</h2>
                  <p className="text-white/90">
                    Hai abiti vintage da vendere su Vinted? Valorizzali con le nostre
                    foto indossate generate dall'IA! Gli acquirenti adorano vedere come un abito
                    cade su un manichino virtuale.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Prova VintDress gratuitamente
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
                <h3 className="text-lg font-bold mb-3">Come sapere se un abito è veramente vintage?</h3>
                <p className="text-gray-700">
                  Verifica le etichette (materiale, provenienza), le cerniere (metallo prima del 1970),
                  la qualità delle cuciture e la presenza di una fodera. I veri capi vintage
                  hanno generalmente finiture superiori rispetto alle riproduzioni moderne.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Quale budget per un abito vintage di qualità?</h3>
                <p className="text-gray-700">
                  I prezzi variano enormemente in base all'epoca, al marchio e allo stato. Prevedi 30-80€
                  per un abito vintage in un negozio dell'usato, 100-300€ per un capo di stilista e
                  diverse centinaia di euro per alta moda o capi rari.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Si può far modificare un abito vintage?</h3>
                <p className="text-gray-700">
                  Sì, ma affida i tuoi capi a un sarto esperto che rispetterà l'integrità
                  del capo. Le modifiche comuni includono l'aggiustamento della vita, l'accorciamento
                  dell'orlo e la sostituzione delle chiusure difettose.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Come indossare un abito vintage tutti i giorni?</h3>
                <p className="text-gray-700">
                  Abbina il tuo abito vintage con accessori moderni per evitare l'effetto costume.
                  Un abito anni 50 può essere indossato con sneakers bianche, un abito anni 70 con una
                  giacca di pelle contemporanea. L'equilibrio tra vintage e moderno è la chiave.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Gli abiti vintage sono ecologici?</h3>
                <p className="text-gray-700">
                  Assolutamente! Acquistare vintage è uno dei gesti moda più sostenibili. Dai
                  una seconda vita a un capo esistente, eviti la produzione di nuovi
                  capi e spesso approfitti di una qualità superiore che durerà ancora decenni.
                </p>
              </div>
            </div>
          </section>

          {/* Articoli correlati */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articoli correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/it/articles/abbigliamento-vintage-anni-90"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Abbigliamento Vintage Anni 90</h3>
                <p className="text-gray-600 text-sm">
                  Scopri le tendenze iconiche degli anni 90: grunge, streetwear e minimalismo.
                </p>
              </Link>
              <Link
                to="/it/articles/negozio-usato-online"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Negozio dell'Usato Online: Guida Completa</h3>
                <p className="text-gray-600 text-sm">
                  Le migliori piattaforme per acquistare abbigliamento vintage online.
                </p>
              </Link>
            </div>
          </section>

          {/* Navigazione tra articoli */}
          <ArticleNavigation currentPath="/it/articles/abito-vintage-donna" />
        </div>
      </article>
    </main>
  );
}
