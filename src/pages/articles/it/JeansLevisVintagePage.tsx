import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Calendar, Clock, User, Tag, Star, Search, CheckCircle, TrendingUp, ShoppingBag, Award, AlertTriangle, Sparkles } from 'lucide-react';

export default function JeansLevisVintagePage() {
  useSEO({
    title: "Jeans Levi's Vintage: Guida all'Acquisto e Autenticazione 2026 | VintDress",
    description: "Guida completa ai jeans Levi's vintage: come autenticare un 501, identificare modelli rari, dove comprare e guida ai prezzi. Consigli esperti per collezionisti.",
    keywords: "jeans levis vintage, levi's 501 vintage, autenticare levis, denim vintage, levis collezionista, vinted levis",
    canonicalUrl: "https://vintdress.com/it/articles/jeans-levis-vintage",
    ogType: "article"
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-gray-600 hover:text-vinted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-vinted transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-vinted font-medium">Jeans Levi's Vintage</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-vinted text-white text-sm font-medium border-2 border-black">
              Guida Esperta
            </span>
            <span className="px-3 py-1 bg-mint text-black text-sm font-medium border-2 border-black">
              Vintage
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Jeans Levi's Vintage: La Guida Completa per Autenticare e Acquistare nel 2026
          </h1>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Impara a identificare autentici jeans Levi's vintage, riconoscere i modelli più ricercati
            e trovare i migliori pezzi su Vinted e nei negozi dell'usato online.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-01-13">13 gennaio 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>14 min di lettura</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>VintDress</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&h=600&fit=crop"
            alt="Jeans Levi's vintage autentici - Guida all'acquisto e collezione"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-vinted" />
            Indice
          </h2>
          <nav>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">1.</span>
                <a href="#storia">La storia leggendaria di Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">2.</span>
                <a href="#autenticazione">Come autenticare un Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">3.</span>
                <a href="#modelli">I modelli emblematici e il loro valore</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">4.</span>
                <a href="#comprare">Dove comprare Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">5.</span>
                <a href="#prezzi">Guida ai prezzi 2026</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">6.</span>
                <a href="#vendere">Consigli per vendere Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">7.</span>
                <a href="#faq">FAQ</a>
              </li>
            </ol>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className="bg-mint/30 border-4 border-black p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg leading-relaxed m-0">
              I <strong>jeans Levi's vintage</strong> sono diventati veri e propri oggetti da collezione.
              Un 501 degli anni '50 può essere venduto per migliaia di euro, mentre i modelli degli anni 80-90
              rimangono accessibili e molto ricercati dagli amanti della moda vintage. Questa guida ti insegna
              a riconoscere pezzi autentici e trovare le migliori offerte.
            </p>
          </div>

          {/* Section 1 */}
          <section id="storia" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-vinted" />
              La Storia Leggendaria di Levi's
            </h2>

            <p>
              Fondata nel 1853 da Levi Strauss, il marchio ha rivoluzionato il mondo dell'abbigliamento con l'invenzione
              dei blue jeans nel 1873. Il <strong>brevetto dei rivetti</strong> depositato con Jacob Davis ha dato vita
              al jeans moderno. Questa ricca storia rende i Levi's vintage un patrimonio culturale americano.
            </p>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Le Grandi Epoche Levi's</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1873-1936</div>
                  <p className="m-0">Era "XX" - Primi jeans con rivetti, molto rari e pregiati (+10.000€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1936-1971</div>
                  <p className="m-0">Era "Big E" - La E maiuscola sull'etichetta rossa, molto ricercati (500-5.000€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1971-1983</div>
                  <p className="m-0">Transizione "small e" - Ancora Made in USA, ottima qualità (150-500€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1983-1999</div>
                  <p className="m-0">Era vintage moderna - Produzione varia, accessibili (50-200€)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="autenticazione" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-vinted" />
              Come Autenticare un Levi's Vintage
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  L'Etichetta Rossa (Red Tab)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>"Big E" LEVI'S</strong>: prima del 1971</li>
                  <li><strong>"small e" Levi's</strong>: dopo il 1971</li>
                  <li><strong>Tab bianco</strong>: anni 80-90</li>
                  <li><strong>Verifica</strong> la cucitura e l'allineamento</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  La Patch in Pelle
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Vera pelle</strong>: vintage autentico</li>
                  <li><strong>Cartone</strong>: dagli anni 90 in poi</li>
                  <li><strong>"Two Horse"</strong>: logo iconico</li>
                  <li><strong>Usura naturale</strong>: segno di autenticità</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Rivetti e Bottoni
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Rivetti nascosti</strong>: dopo il 1966</li>
                  <li><strong>"LS&CO SF"</strong>: incisione autentica</li>
                  <li><strong>Patina ramata</strong>: usura naturale</li>
                  <li><strong>Bottone superiore</strong>: numerazione fabbrica</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  L'Etichetta Interna
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Etichetta "CARE"</strong>: indica l'anno</li>
                  <li><strong>Made in USA</strong>: molto apprezzato</li>
                  <li><strong>Numero di lotto</strong>: identifica il modello</li>
                  <li><strong>Taglia e vestibilità</strong>: codifica vintage</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Attenzione ai Falsi
              </h3>
              <ul className="space-y-2">
                <li>I falsi vintage sono comuni - diffida dei prezzi troppo bassi</li>
                <li>Verifica la coerenza tra tutti gli elementi (tab, patch, rivetti)</li>
                <li>Il denim vintage ha una texture e un odore particolari</li>
                <li>Chiedi foto dettagliate dell'etichetta care tag</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="modelli" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-vinted" />
              I Modelli Emblematici e il Loro Valore
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 501</h3>
                  <span className="px-3 py-1 bg-vinted text-white text-sm font-bold border-2 border-black">
                    Il Più Iconico
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Il jeans originale dal 1890. Taglio dritto, patta con bottoni, vita alta.
                  I 501 "Big E" e "selvedge" sono i più quotati.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valore vintage 80s-90s:</span>
                  <span className="text-vinted font-bold">80€ - 250€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 505</h3>
                  <span className="px-3 py-1 bg-mint text-black text-sm font-bold border-2 border-black">
                    Molto Ricercato
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Creato nel 1967 con patta con zip. Taglio regular leggermente più aderente
                  del 501. Popolare negli anni 70-80.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valore vintage:</span>
                  <span className="text-vinted font-bold">60€ - 180€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 517</h3>
                  <span className="px-3 py-1 bg-pink-pastel text-black text-sm font-bold border-2 border-black">
                    Bootcut Cult
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Il bootcut iconico degli anni 70. Torna alla ribalta con il ritorno della moda retro.
                  Le versioni "Orange Tab" sono particolarmente ricercate.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valore vintage:</span>
                  <span className="text-vinted font-bold">70€ - 200€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 550 / 560</h3>
                  <span className="px-3 py-1 bg-gray-200 text-black text-sm font-bold border-2 border-black">
                    Nostalgia 90s
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  I tagli relaxed e loose degli anni 90, molto di tendenza oggi.
                  Perfetti per lo stile baggy vintage.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valore vintage:</span>
                  <span className="text-vinted font-bold">40€ - 120€</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="comprare" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-vinted" />
              Dove Comprare Levi's Vintage
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-4 border-black">
                <thead className="bg-vinted text-white">
                  <tr>
                    <th className="p-3 text-left font-display border-b-4 border-black">Piattaforma</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Vantaggi</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Prezzi Medi</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Vinted</td>
                    <td className="p-3">Ampia scelta, prezzi trattabili, protezione acquirente</td>
                    <td className="p-3 text-vinted font-bold">30€ - 150€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">eBay Vintage</td>
                    <td className="p-3">Pezzi rari, venditori esperti, aste</td>
                    <td className="p-3 text-vinted font-bold">50€ - 500€+</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Negozi specializzati</td>
                    <td className="p-3">Selezione curata, autenticità garantita</td>
                    <td className="p-3 text-vinted font-bold">80€ - 300€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">Mercatini</td>
                    <td className="p-3">Possibili affari, trattativa</td>
                    <td className="p-3 text-vinted font-bold">20€ - 100€</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Depop / Vestiaire</td>
                    <td className="p-3">Ampia varietà, diverse condizioni</td>
                    <td className="p-3 text-vinted font-bold">40€ - 200€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section id="prezzi" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-vinted" />
              Guida ai Prezzi 2026
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-green-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Entry Level (40-100€)
                </h3>
                <ul className="space-y-2">
                  <li>501/505 anni 90 buone condizioni</li>
                  <li>550/560 vintage completo</li>
                  <li>Modelli Made in Mexico/Asia</li>
                  <li>Usura visibile ma indossabile</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-blue-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Fascia Media (100-250€)
                </h3>
                <ul className="space-y-2">
                  <li>501 Made in USA anni 80</li>
                  <li>Orange Tab vintage ottime condizioni</li>
                  <li>Selvedge primi anni 80</li>
                  <li>Lavaggio originale ricercato</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-yellow-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Fascia Alta (250-800€)
                </h3>
                <ul className="space-y-2">
                  <li>Big E anni 60-70</li>
                  <li>Selvedge condizioni perfette</li>
                  <li>Modelli rari (Type III, ecc.)</li>
                  <li>Dead stock (mai indossato)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-red-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Collezione (800€+)
                </h3>
                <ul className="space-y-2">
                  <li>501 XX pre-1950s</li>
                  <li>Pezzi con storia documentata</li>
                  <li>Edizioni limitate vintage</li>
                  <li>Condizioni museo / Dead stock antico</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="vendere" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              Consigli per Vendere Levi's Vintage
            </h2>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Checklist del Venditore Pro</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Identifica con precisione</strong> il modello, l'anno e l'origine</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Misura tutto</strong>: vita, fianchi, cavallo, lunghezza totale</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Fotografa i dettagli</strong>: tab, patch, rivetti, etichette, cuciture</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Descrivi le condizioni</strong> onestamente: usura, strappi, riparazioni</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Usa le parole chiave giuste</strong>: "501 vintage USA", "Big E selvedge"</span>
                </div>
              </div>
            </div>

            <div className="bg-mint/30 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3">Aumenta le Tue Vendite con VintDress</h3>
              <p className="mb-4">
                Le foto professionali fanno la differenza quando vendi jeans vintage.
                Con <Link to="/" className="text-vinted font-bold hover:underline">VintDress</Link>,
                crea visual realistici indossati in pochi clic usando l'IA.
              </p>
              <Link
                to="/"
                className="inline-block bg-vinted text-white px-6 py-3 font-display font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Prova VintDress Gratis
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6">
              Domande Frequenti sui Levi's Vintage
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Come faccio a sapere se i miei Levi's sono vintage?
                </h3>
                <p className="p-4">
                  Verifica l'etichetta rossa (Big E = prima del 1971), la patch in pelle (non cartone),
                  le etichette interne "Made in USA" e la presenza di selvedge sulla cucitura interna.
                  Un'etichetta care tag con codice può datare con precisione i jeans.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  Qual è la differenza tra 501 e 505?
                </h3>
                <p className="p-4">
                  Il 501 ha la patta con bottoni e taglio dritto classico dal 1890.
                  Il 505 (creato nel 1967) ha la patta con zip e un taglio leggermente più aderente
                  sulle cosce. Entrambi sono molto ricercati nel vintage.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  I Levi's vintage vestono come quelli di oggi?
                </h3>
                <p className="p-4">
                  No, le taglie vintage sono generalmente più piccole. Una 32 vintage corrisponde
                  spesso a una 30-31 attuale. Chiedi sempre le misure reali in centimetri
                  prima di comprare: vita, fianchi e cavallo.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  I Levi's vintage sono un buon investimento?
                </h3>
                <p className="p-4">
                  I pezzi rari (Big E, selvedge, Made in USA) aumentano di valore nel tempo.
                  Un 501 Big E comprato a 200€ 10 anni fa può valere 500€+ oggi.
                  Privilegia modelli in ottime condizioni con tutte le etichette originali.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(9,177,186,1)]">
              <h2 className="font-display text-2xl font-bold mb-4">
                Conclusione: L'Arte dei Jeans Levi's Vintage
              </h2>
              <p className="text-gray-300 mb-4">
                I jeans Levi's vintage sono molto più di semplici capi di abbigliamento: sono un pezzo di storia
                della moda americana. Che tu sia un collezionista appassionato o un amante della moda sostenibile,
                imparare a riconoscere e apprezzare questi pezzi ti apre un mondo affascinante.
              </p>
              <p className="text-gray-300">
                Su Vinted e nei negozi dell'usato online, le opportunità abbondano per chi sa cosa cercare.
                Armato di questa guida, sei pronto a trovare il tuo prossimo tesoro vintage!
              </p>
            </div>
          </section>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Levi\'s Vintage', '501', 'Autenticazione', 'Vinted', 'Moda Vintage', 'Denim', 'Collezione'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm border-2 border-black hover:bg-vinted hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article Navigation */}
        <ArticleNavigation currentArticleId="jean-levis-vintage" />
      </article>
    </div>
  );
}
