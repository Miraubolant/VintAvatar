import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, User, ArrowLeft, ChevronRight, Star, Shield, Heart, Sparkles } from 'lucide-react';
import ArticleNavigation from '../../../components/ArticleNavigation';

export default function GiaccaPelleVintagePage() {
  return (
    <>
      <Helmet>
        <title>Giacca Pelle Vintage: Guida Completa per Trovare il Pezzo Perfetto</title>
        <meta name="description" content="Scopri le giacche di pelle vintage più ricercate: perfecto, bomber, aviator. Guida esperta per autenticare, scegliere e prendersi cura della tua giacca di pelle." />
        <meta name="keywords" content="giacca pelle vintage, perfecto vintage, bomber pelle, giacca aviator vintage, giacca pelle schott, giacca pelle uomo vintage, giacca pelle donna vintage" />
        <link rel="canonical" href="https://vintdress.com/it/articles/giacca-pelle-vintage" />
        <meta property="og:title" content="Giacca Pelle Vintage: Guida Completa per Trovare il Pezzo Perfetto" />
        <meta property="og:description" content="Scopri le giacche di pelle vintage più ricercate: perfecto, bomber, aviator. Guida esperta per autenticare e scegliere." />
        <meta property="og:url" content="https://vintdress.com/it/articles/giacca-pelle-vintage" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="it_IT" />
        <link rel="alternate" hrefLang="fr" href="https://vintdress.com/articles/veste-cuir-vintage" />
        <link rel="alternate" hrefLang="en" href="https://vintdress.com/en/articles/vintage-leather-jacket" />
        <link rel="alternate" hrefLang="es" href="https://vintdress.com/es/articles/chaqueta-cuero-vintage" />
        <link rel="alternate" hrefLang="it" href="https://vintdress.com/it/articles/giacca-pelle-vintage" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Giacca Pelle Vintage: Guida Completa per Trovare il Pezzo Perfetto",
            "description": "Scopri le giacche di pelle vintage più ricercate: perfecto, bomber, aviator. Guida esperta per autenticare, scegliere e prendersi cura della tua giacca di pelle.",
            "author": {
              "@type": "Organization",
              "name": "VintDress"
            },
            "publisher": {
              "@type": "Organization",
              "name": "VintDress",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vintdress.com/logo.png"
              }
            },
            "datePublished": "2025-01-13",
            "dateModified": "2025-01-13",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vintdress.com/it/articles/giacca-pelle-vintage"
            }
          })}
        </script>
      </Helmet>

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to="/it"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla home
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3" />
                Guida Completa
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                <Star className="w-3 h-3" />
                Moda Vintage
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Giacca Pelle Vintage: Guida Completa per Trovare il Pezzo Perfetto
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dalla leggendaria Perfecto ai bomber aviator, scopri come trovare, autenticare e prenderti cura delle giacche di pelle vintage più ricercate dai collezionisti.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                13 gennaio 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                18 min di lettura
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Team VintDress
              </span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 py-8 border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sommario</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {[
                { href: "#stili-iconici", text: "Gli Stili Iconici" },
                { href: "#storia-perfecto", text: "La Storia della Perfecto" },
                { href: "#giacche-volo", text: "Le Giacche da Volo" },
                { href: "#marchi-ricercati", text: "I Marchi Più Ricercati" },
                { href: "#autenticare", text: "Come Autenticare" },
                { href: "#riconoscere-qualita", text: "Riconoscere la Qualità" },
                { href: "#cura-conservazione", text: "Cura e Conservazione" },
                { href: "#dove-comprare", text: "Dove Comprare" },
                { href: "#faq", text: "FAQ" }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-700 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-4xl py-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              La <strong>giacca di pelle vintage</strong> è molto più di un semplice capo di abbigliamento: è un pezzo di storia, un simbolo di ribellione e stile che attraversa le generazioni. Che tu sia un collezionista esperto o un neofita del vintage, questa guida ti aiuterà a navigare nell'affascinante universo delle giacche di pelle d'epoca.
            </p>
            <p className="text-gray-600">
              Dalle iconiche <em>Perfecto</em> indossate da Marlon Brando ai <em>bomber</em> degli aviatori della Seconda Guerra Mondiale, ogni giacca di pelle vintage racconta una storia unica. In questo articolo, ti guideremo attraverso tutti gli aspetti essenziali per trovare il pezzo perfetto.
            </p>
          </section>

          {/* Stili Iconici */}
          <section id="stili-iconici" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Gli Stili Iconici delle Giacche di Pelle Vintage
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">La Perfecto (Biker)</h3>
                <p className="text-gray-600 mb-4">
                  La regina indiscussa delle giacche di pelle. Riconoscibile per la chiusura asimmetrica, i risvolti con zip e la cintura in vita. Creata nel 1928, rimane il simbolo definitivo dello stile ribelle.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>- Chiusura a cerniera diagonale</li>
                  <li>- Risvolti con revers a punta</li>
                  <li>- Cintura in vita regolabile</li>
                  <li>- Spallacci con bottoni</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Il Bomber (Flight Jacket)</h3>
                <p className="text-gray-600 mb-4">
                  Nato per i piloti militari, il bomber si distingue per la sua linea arrotondata, i polsini e l'orlo elasticizzati. Caldo, resistente e incredibilmente versatile.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>- Colletto a costine o pelo</li>
                  <li>- Polsini e orlo elasticizzati</li>
                  <li>- Zip centrale dritta</li>
                  <li>- Tasche oblique o a toppa</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">L'Aviator (Shearling)</h3>
                <p className="text-gray-600 mb-4">
                  L'aviator foderata in montone è il modello più caldo e lussuoso. Indossata dai piloti degli anni '30-'40, combina pelle all'esterno e lana di pecora all'interno.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>- Fodera in montone naturale</li>
                  <li>- Colletto ampio rovesciabile</li>
                  <li>- Cinturini ai polsi</li>
                  <li>- Pelle spessa e resistente</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Il Blazer in Pelle</h3>
                <p className="text-gray-600 mb-4">
                  Più elegante e strutturato, il blazer in pelle è perfetto per chi cerca uno stile raffinato. Popolare negli anni '80 e '90, torna oggi di grande tendenza.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>- Taglio sartoriale classico</li>
                  <li>- Chiusura con bottoni</li>
                  <li>- Revers a lancia o sciallato</li>
                  <li>- Tasche a filetto o a toppa</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Storia Perfecto */}
          <section id="storia-perfecto" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              La Storia della Perfecto: Una Leggenda Americana
            </h2>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-4">Schott NYC: I Creatori della Leggenda</h3>
              <p className="text-gray-300 mb-4">
                Nel 1928, Irving Schott, figlio di immigrati russi a New York, creò la prima giacca di pelle con cerniera della storia. La chiamò <strong>Perfecto</strong>, dal nome del suo sigaro preferito.
              </p>
              <p className="text-gray-300">
                Venduta originariamente a 5,50 dollari nei negozi Harley-Davidson di Long Island, la Perfecto divenne rapidamente l'uniforme non ufficiale dei motociclisti americani.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 h-24 bg-amber-100 rounded-xl flex items-center justify-center border-4 border-black">
                  <span className="text-2xl font-bold text-amber-800">1953</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Il Selvaggio con Marlon Brando</h4>
                  <p className="text-gray-600">
                    Marlon Brando indossa la Schott Perfecto nel film "Il Selvaggio", trasformando la giacca di pelle in un simbolo di ribellione giovanile che scandalizza l'America benpensante.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 h-24 bg-orange-100 rounded-xl flex items-center justify-center border-4 border-black">
                  <span className="text-2xl font-bold text-orange-800">1955</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">James Dean e la Ribellione</h4>
                  <p className="text-gray-600">
                    James Dean porta la giacca rossa in "Gioventù bruciata", consolidando l'associazione tra pelle e contestazione. La giacca viene temporaneamente vietata in alcune scuole americane.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 rounded-xl flex items-center justify-center border-4 border-black">
                  <span className="text-2xl font-bold text-yellow-800">1970s</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">L'Era Punk</h4>
                  <p className="text-gray-600">
                    I Ramones adottano la Perfecto come uniforme ufficiale, aggiungendo spille e patch. La giacca diventa simbolo del movimento punk a New York e Londra.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Giacche da Volo */}
          <section id="giacche-volo" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Le Giacche da Volo: L'Eredità dell'Aviazione
            </h2>

            <p className="text-gray-600 mb-8">
              Le giacche da volo rappresentano una categoria speciale nel mondo del vintage. Create per proteggere i piloti nelle cabine aperte degli aerei della Prima e Seconda Guerra Mondiale, questi capi sono diventati icone di stile intramontabili.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">A-2: La Classica Americana</h3>
                    <p className="text-gray-600 mb-3">
                      Introdotta nel 1931 dall'Army Air Corps, la A-2 è riconoscibile per il colletto a camicia, le tasche a toppa e i polsini elasticizzati. Prodotta fino al 1943, le versioni originali sono estremamente ricercate.
                    </p>
                    <p className="text-sm text-amber-700 font-medium">
                      Prezzo vintage originale: 800€ - 3.000€+
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">B-3 Shearling: L'Aviator per Eccellenza</h3>
                    <p className="text-gray-600 mb-3">
                      La B-3, con la sua fodera in montone, era progettata per i bombardieri che volavano a oltre 7.000 metri dove le temperature scendevano a -50°C. Pesante, calda e incredibilmente resistente.
                    </p>
                    <p className="text-sm text-amber-700 font-medium">
                      Prezzo vintage originale: 1.500€ - 5.000€+
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">G-1 Navy: Lo Stile Top Gun</h3>
                    <p className="text-gray-600 mb-3">
                      La giacca della Marina americana, resa celebre da Tom Cruise in "Top Gun". Si distingue per il colletto in pelo, la fodera arancione e le patch decorative.
                    </p>
                    <p className="text-sm text-amber-700 font-medium">
                      Prezzo vintage originale: 600€ - 2.000€+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marchi Ricercati */}
          <section id="marchi-ricercati" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              I Marchi Più Ricercati dai Collezionisti
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-4 border-black">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border-2 border-black p-3 text-left">Marchio</th>
                    <th className="border-2 border-black p-3 text-left">Paese</th>
                    <th className="border-2 border-black p-3 text-left">Specialità</th>
                    <th className="border-2 border-black p-3 text-left">Prezzo Vintage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border-2 border-black p-3 font-bold">Schott NYC</td>
                    <td className="border-2 border-black p-3">USA</td>
                    <td className="border-2 border-black p-3">Perfecto, A-2</td>
                    <td className="border-2 border-black p-3">200€ - 800€</td>
                  </tr>
                  <tr className="bg-gray-50">
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
                  <tr className="bg-gray-50">
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
                  <tr className="bg-gray-50">
                    <td className="border-2 border-black p-3 font-bold">Aero Leather</td>
                    <td className="border-2 border-black p-3">UK</td>
                    <td className="border-2 border-black p-3">Repliche Militari</td>
                    <td className="border-2 border-black p-3">400€ - 1.200€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
              <p className="text-amber-800 text-sm">
                <strong>Nota:</strong> I prezzi indicati sono per pezzi vintage in buone condizioni. I modelli rari, le edizioni speciali o i pezzi con patina d'epoca eccezionale possono raggiungere prezzi molto più elevati.
              </p>
            </div>
          </section>

          {/* Come Autenticare */}
          <section id="autenticare" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Come Autenticare una Giacca di Pelle Vintage
            </h2>

            <p className="text-gray-600 mb-8">
              Con l'aumento della domanda, il mercato è invaso da falsi e repliche. Ecco i punti chiave per autenticare una vera giacca vintage.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Le Etichette</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-600">Le etichette vintage sono spesso in tessuto tessuto, non stampate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-600">Cerca etichette sindacali o "Made in USA" per i pezzi americani</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-600">L'usura naturale dell'etichetta indica un pezzo autentico</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Le Cerniere</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-600"><strong>Talon</strong> e <strong>Crown</strong> sono le cerniere vintage più ricercate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-600">Le cerniere in ottone massiccio indicano alta qualità</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-600">Diffida delle YKK su giacche supposte degli anni '40-'50</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-xl border-2 border-red-200">
              <h4 className="font-bold text-red-900 mb-3">Segnali d'Allarme</h4>
              <ul className="text-red-800 space-y-2">
                <li>- Pelle perfettamente uniforme senza variazioni naturali</li>
                <li>- Cuciture in poliestere su un capo suppostamente degli anni '60</li>
                <li>- Etichette "Made in China" su giacche spacciate per Schott vintage</li>
                <li>- Prezzo troppo basso per essere vero (una Schott vintage non costa 50€)</li>
              </ul>
            </div>
          </section>

          {/* Riconoscere la Qualità */}
          <section id="riconoscere-qualita" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Riconoscere la Qualità della Pelle
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">A</span>
                  Pieno Fiore (Full Grain)
                </h3>
                <p className="text-gray-600 mb-3">
                  La migliore qualità. La pelle conserva la sua superficie naturale con tutte le imperfezioni che la rendono unica. Sviluppa una patina magnifica con gli anni.
                </p>
                <p className="text-sm text-green-700 font-medium">Riconoscerla: Superficie irregolare, pori visibili, odore ricco</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">B</span>
                  Fiore Rettificato (Top Grain)
                </h3>
                <p className="text-gray-600 mb-3">
                  Pelle di buona qualità la cui superficie è stata leggermente levigata per uniformarla. Meno carattere ma più omogenea.
                </p>
                <p className="text-sm text-amber-700 font-medium">Riconoscerla: Superficie regolare, meno difetti visibili</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">C</span>
                  Crosta (Split Leather)
                </h3>
                <p className="text-gray-600 mb-3">
                  Strato inferiore della pelle, meno resistente e di qualità inferiore. Spesso rivestito con poliuretano per imitare il pieno fiore.
                </p>
                <p className="text-sm text-orange-700 font-medium">Riconoscerla: Aspetto plasticoso, odore chimico, si sfalda con il tempo</p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">D</span>
                  Finta Pelle (PU/PVC)
                </h3>
                <p className="text-gray-600 mb-3">
                  Materiale sintetico che imita la pelle. Non sviluppa patina, si deteriora rapidamente e non ha lo stesso comfort.
                </p>
                <p className="text-sm text-red-700 font-medium">Riconoscerla: Odore di plastica, superficie troppo uniforme, interno sintetico</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">Il Trucco del Test dell'Acqua</h4>
              <p className="text-blue-800">
                Una goccia d'acqua sulla vera pelle viene assorbita lentamente. Sulla finta pelle, resta in superficie come una perla. Attenzione: funziona solo sulla pelle non trattata o leggermente oleata.
              </p>
            </div>
          </section>

          {/* Cura e Conservazione */}
          <section id="cura-conservazione" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Cura e Conservazione della tua Giacca
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Manutenzione Regolare</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Pulisci regolarmente con un panno umido per rimuovere la polvere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Applica un latte idratante specifico per pelle 2-3 volte l'anno</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Mai usare prodotti aggressivi o solventi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Lascia asciugare naturalmente se bagnata (mai vicino a una fonte di calore)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conservazione</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Appendi sempre su una gruccia larga e sagomata</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Conserva in un luogo fresco e asciutto, lontano dalla luce diretta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Usa una custodia in cotone traspirante, non in plastica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Evita di piegare per non segnare la pelle</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3">Prodotti Consigliati</h4>
              <ul className="text-amber-800 space-y-2">
                <li>- <strong>Lexol Leather Conditioner</strong>: idratante delicato e efficace</li>
                <li>- <strong>Saddle Soap</strong>: per pulizie profonde (usa con parsimonia)</li>
                <li>- <strong>Olio di visone</strong>: per nutrire le pelli molto secche</li>
                <li>- <strong>Saphir Renovateur</strong>: prodotto premium per pelli di alta gamma</li>
              </ul>
            </div>
          </section>

          {/* Dove Comprare */}
          <section id="dove-comprare" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Dove Trovare Giacche di Pelle Vintage
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Piattaforme Online</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Vinted</strong> - Ampia scelta, prezzi accessibili</li>
                  <li><strong>eBay</strong> - Per pezzi rari e collezione</li>
                  <li><strong>Vestiaire Collective</strong> - Lusso garantito</li>
                  <li><strong>Etsy</strong> - Venditori specializzati vintage</li>
                  <li><strong>Grailed</strong> - Abbigliamento maschile di qualità</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Negozi Fisici</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Mercatini dell'usato</strong> - Occasioni inaspettate</li>
                  <li><strong>Negozi vintage specializzati</strong> - Selezione curata</li>
                  <li><strong>Aste</strong> - Per pezzi da collezione</li>
                  <li><strong>Mercatini biker</strong> - L'ideale per le Perfecto</li>
                </ul>
              </div>
            </div>

            {/* CTA VintDress */}
            <div className="mt-10 p-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Vendi la tua giacca vintage su Vinted?
                </h3>
                <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                  Con VintDress, crea foto professionali della tua giacca di pelle in pochi secondi. La nostra IA genera immagini indossate che aumentano le tue vendite fino al 300%.
                </p>
                <Link
                  to="/it"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
                >
                  Prova VintDress Gratis
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-200">
              Domande Frequenti
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Come distinguere una vera Schott vintage da una recente?",
                  a: "Le Schott vintage hanno etichette diverse a seconda dell'epoca (cerca le etichette 'Schott Bros' o 'Schott NYC'), cerniere Talon, e una costruzione generalmente più robusta. I numeri di modello e lo stile dell'etichetta permettono di datare precisamente il capo."
                },
                {
                  q: "Quanto costa una giacca di pelle vintage autentica?",
                  a: "I prezzi variano enormemente: da 100€ per un bomber anni '80 in buone condizioni a oltre 2.000€ per una Perfecto anni '50 o una giacca da volo della Seconda Guerra Mondiale. Il marchio, l'epoca e le condizioni influenzano molto il prezzo."
                },
                {
                  q: "Come far ammorbidire una giacca di pelle vintage rigida?",
                  a: "Usa un latte idratante di qualità in diverse applicazioni. Indossa la giacca regolarmente per permettere alla pelle di modellarsi al tuo corpo. Evita i metodi brutali come l'acqua calda o il riscaldamento che danneggerebbero la pelle."
                },
                {
                  q: "Le giacche di pelle vintage sono adatte a tutte le morfologie?",
                  a: "Sì, a condizione di scegliere lo stile giusto. Le Perfecto stanno bene ai fisici slanciati, i bomber sono più indulgenti, e i blazer in pelle si adattano a tutte le silhouette. Le taglie vintage tendono a essere più piccole, tienilo a mente."
                },
                {
                  q: "È possibile far riparare una giacca di pelle vintage danneggiata?",
                  a: "Sì, i pellettieri e i sellai qualificati possono riparare strappi, sostituire cerniere e fodera, e ricondizionare la pelle. Per i pezzi di valore, è meglio investire in una riparazione professionale piuttosto che rischiare di rovinare l'originale."
                }
              ].map((item, index) => (
                <details key={index} className="group bg-white rounded-xl border-4 border-black overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                    <span className="font-semibold text-gray-900">{item.q}</span>
                    <ChevronRight className="w-5 h-5 text-gray-500 transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* FAQ Schema */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Come distinguere una vera Schott vintage da una recente?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le Schott vintage hanno etichette diverse a seconda dell'epoca, cerniere Talon, e una costruzione generalmente più robusta. I numeri di modello e lo stile dell'etichetta permettono di datare precisamente il capo."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto costa una giacca di pelle vintage autentica?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "I prezzi variano da 100€ per un bomber anni '80 a oltre 2.000€ per una Perfecto anni '50 o una giacca da volo della Seconda Guerra Mondiale."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Come far ammorbidire una giacca di pelle vintage rigida?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Usa un latte idratante di qualità in diverse applicazioni e indossa la giacca regolarmente per permettere alla pelle di modellarsi al tuo corpo."
                    }
                  }
                ]
              })}
            </script>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-4">Conclusione</h2>
              <p className="text-gray-300 mb-4">
                La giacca di pelle vintage è un investimento che attraversa il tempo. Che tu scelga una leggendaria Perfecto, un bomber da aviatore o un elegante blazer, ogni pezzo porta con sé una storia e un'anima uniche.
              </p>
              <p className="text-gray-300 mb-4">
                Prenditi il tempo di cercare il pezzo perfetto, impara ad autenticare i tuoi acquisti e prenditi cura delle tue giacche: ti accompagneranno per decenni e, come il buon vino, miglioreranno con l'età.
              </p>
              <p className="text-amber-400 font-semibold">
                E per vendere le tue giacche vintage su Vinted, non dimenticare che VintDress può trasformare le tue semplici foto in immagini professionali indossate, moltiplicando le tue possibilità di vendita!
              </p>
            </div>
          </section>

          {/* Navigation */}
          <ArticleNavigation currentArticleId="veste-cuir-vintage" lang="it" />
        </div>
      </article>
    </>
  );
}
