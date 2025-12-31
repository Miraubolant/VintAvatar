import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { Sparkles, TrendingUp, Heart, Leaf, Users, Zap, Calendar, DollarSign, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function TendenzeModa2025Page() {
  useSEO({
    title: "Tendenze Moda 2025: Cosa Vendere su Vinted | Guida Completa",
    description: "Tendenze moda 2025: Y2K 3.0, Indie Sleaze, Cottagecore. Scopri cosa vendere su Vinted per far esplodere le tue vendite!",
    keywords: "tendenze moda 2025, moda vinted 2025, y2k 2025, cottagecore, vendere moda vinted, tendenze vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop"
          alt="Tendenze Moda 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Tendenze Moda 2025
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Cosa Vendere Su Vinted
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
              Tendenza
            </span>
            <span className="text-black">10 novembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">18 min di lettura</span>
            <span className="text-black">•</span>
            <span className="text-black">Dal Team VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Tendenze', 'Moda', '2025', 'Y2K', 'Cottagecore', 'Vinted'].map((tag) => (
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
            Il 2025 si preannuncia rivoluzionario per la moda! Tra nostalgia, sostenibilità e innovazione,
            scopri le tendenze che faranno esplodere le tue vendite su Vinted.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">L'Anno di Tutti i Contrasti</h2>
            <p className="text-white mb-4">
              Quest'anno mescola tutto: il vintage incontra il futuristico, il minimalismo si scontra con l'eccesso,
              e la sostenibilità si unisce all'innovazione tecnologica.
            </p>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-3">Perché è una MINIERA D'ORO per Vinted:</h3>
            <ul className="space-y-2">
              {[
                'Diversità = più opportunità',
                'Cicli di moda accelerati',
                'Forte domanda per il second hand',
                'Consumo più consapevole'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <Sparkles className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tendenza #1 : Y2K 3.0 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENZA #1</span>
              <h2 className="font-display font-bold text-3xl mt-2">Y2K 3.0 - Il Ritorno Deciso</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Basta con l'Y2K timido: il 2025 porta il concetto all'estremo!</h3>

            <h4 className="font-semibold mb-3">Cosa va alla grande:</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Metallizzati ovunque</p>
                <p className="text-sm">Argento, cromo, olografico</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Trasparenza totale</p>
                <p className="text-sm">PVC, organza, plexiglass</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Tech-wear integrato</p>
                <p className="text-sm">Tasche cargo, dettagli LED</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Loghi XXL</p>
                <p className="text-sm">Più è grande, meglio è</p>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Pezzi da scovare:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Gonne in vinile o PVC</li>
              <li>• Top in maglia metallica</li>
              <li>• Accessori cromati</li>
              <li>• Occhiali da sole tintati futuristici</li>
            </ul>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-2">Dove Trovare?</h4>
            <p className="text-sm">Marchi degli anni 2000 (Diesel, Miss Sixty), Fast fashion 2019-2020, Designer indipendenti, Mercatini specializzati</p>
          </div>
        </div>

        {/* Tendenza #2 : Indie Sleaze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENZA #2</span>
              <h2 className="font-display font-bold text-3xl mt-2">Rinascita Indie Sleaze</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Lo Stile della Spensieratezza</h3>
            <p className="mb-4"><strong>L'anti-Instagram:</strong> Addio alla perfezione, viva il caos controllato!</p>

            <h4 className="font-semibold mb-3">Codici vestimentari:</h4>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Layering caotico:</strong> Sovrapposizione decisa</li>
              <li>• <strong>Texture in contrasto:</strong> Paillettes + denim + pelle</li>
              <li>• <strong>Stampe che si scontrano:</strong> Leopardo + righe + fiori</li>
              <li>• <strong>Accessori eccessivi:</strong> Gioielli sovrapposti</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Articoli d'oro:</h4>
              <ul className="space-y-1">
                <li>• Blazer oversize vintage</li>
                <li>• Minigonne in pelle colorata</li>
                <li>• Collant fantasia</li>
                <li>• Cerchietti e fermagli</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Prezzi Tendenza:</h4>
              <ul className="space-y-1">
                <li>• Blazer vintage: <strong>25-45€</strong></li>
                <li>• Minigonna statement: <strong>15-35€</strong></li>
                <li>• Accessori capelli: <strong>5-15€</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendenza #3 : Cottagecore */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENZA #3</span>
              <h2 className="font-display font-bold text-3xl mt-2">Cottagecore Elevato</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Il Romanticismo Sofisticato</h3>
            <p className="mb-4"><strong>Più di una tendenza:</strong> Un vero e proprio stile di vita!</p>

            <h4 className="font-semibold mb-3">Evoluzione 2025:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Materiali più nobili</span>
              <span>• Tagli più strutturati</span>
              <span>• Dettagli artigianali</span>
              <span>• Colori complessi</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Must-have da vendere:</h4>
              <ul className="space-y-1">
                <li>• Abiti midi in lino ricamato</li>
                <li>• Cardigan in lana merino</li>
                <li>• Gonne lunghe con smock</li>
                <li>• Camicette con collo alla coreana premium</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Marchi che funzionano:</h4>
              <p><strong>Fascia alta:</strong> Sézane, Maje</p>
              <p className="mt-2"><strong>Accessibile:</strong> Zara, & Other Stories</p>
            </div>
          </div>
        </div>

        {/* Tendenza #4 : Sustainable Luxury */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENZA #4</span>
              <h2 className="font-display font-bold text-3xl mt-2">Lusso Sostenibile</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Il Lusso Responsabile</h3>
            <p className="mb-4"><strong>La nuova nobiltà:</strong> Qualità + sostenibilità + stile!</p>

            <h4 className="font-semibold mb-3">Criteri 2025:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Materiali eco-friendly certificati</span>
              <span>• Produzione etica provata</span>
              <span>• Design senza tempo</span>
              <span>• Made in Europe priorità</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Esempi redditizi:</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Cappotto lana vintage Burberry</span>
                <span className="font-bold text-vinted">200-400€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Borsa pelle artigianale</span>
                <span className="font-bold text-vinted">80-150€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sneakers eco-design</span>
                <span className="font-bold text-vinted">60-120€</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tendenza #5 : Gender-Fluid */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENZA #5</span>
              <h2 className="font-display font-bold text-3xl mt-2">Moda Gender-Fluid</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">La Moda Senza Confini</h3>
            <p className="mb-4"><strong>Rivoluzione silenziosa:</strong> I generi scompaiono nel guardaroba!</p>

            <h4 className="font-semibold mb-3">Pezzi universali che vendono:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Camicie oversize neutre</span>
              <span>• Sneakers unisex</span>
              <span>• Gioielli minimalisti</span>
              <span>• Profumi senza genere</span>
            </div>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Strategia Vinted:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Tagga i tuoi articoli "unisex"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Foto su modelli vari</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Descrizioni inclusive</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tendenza #6 : Tech-Wear */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENZA #6</span>
              <h2 className="font-display font-bold text-3xl mt-2">Tech-Wear Urbano</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">La Moda del Futuro</h3>
            <p className="mb-4"><strong>Performance meets style:</strong> Abbigliamento intelligente e funzionale!</p>

            <h4 className="font-semibold mb-3">Caratteristiche:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Tessuti tecnici (Gore-Tex, Coolmax)</span>
              <span>• Multifunzionalità</span>
              <span>• Estetica cyberpunk</span>
              <span>• Integrazione tecnologica</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Articoli ricercati:</h4>
            <ul className="space-y-1">
              <li>• Giacche con tasche modulari</li>
              <li>• Pantaloni cargo tecnici</li>
              <li>• Sneakers connesse</li>
              <li>• Accessori tattici</li>
            </ul>
          </div>
        </div>

        {/* Calendario delle Tendenze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Calendario delle Tendenze 2025</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q1 - Gennaio a Marzo</h3>
              <p className="text-sm italic mb-3">"New Year, New Me" Energy</p>
              <ul className="space-y-1 text-sm">
                <li>• Basic premium</li>
                <li>• Detox vestimentale</li>
                <li>• Sport-lusso</li>
                <li>• Colori neutri sofisticati</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q2 - Aprile a Giugno</h3>
              <p className="text-sm italic mb-3">Rinascita Primaverile</p>
              <ul className="space-y-1 text-sm">
                <li>• Esplosione Y2K 3.0</li>
                <li>• Cottagecore elevato</li>
                <li>• Pastelli complessi</li>
                <li>• Trasparenze raffinate</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q3 - Luglio a Settembre</h3>
              <p className="text-sm italic mb-3">Festival & Vacation Mode</p>
              <ul className="space-y-1 text-sm">
                <li>• Indie sleaze festival</li>
                <li>• Beachwear sostenibile</li>
                <li>• Gender-fluid summer</li>
                <li>• Metallizzati vacation</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q4 - Ottobre a Dicembre</h3>
              <p className="text-sm italic mb-3">Sofisticazione Invernale</p>
              <ul className="space-y-1 text-sm">
                <li>• Tech-wear protezione</li>
                <li>• Lusso responsabile</li>
                <li>• Layering masterclass</li>
                <li>• Holiday glamour</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Strategy */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Strategia di Prezzo 2025</h2>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-3 border-black">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Tendenza</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Entry Price</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Mid-Range</th>
                  <th className="p-3 text-center font-display font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tendenza: 'Y2K 3.0', entry: '20-35€', mid: '35-65€', premium: '65-120€' },
                  { tendenza: 'Indie Sleaze', entry: '15-30€', mid: '30-50€', premium: '50-90€' },
                  { tendenza: 'Cottagecore', entry: '25-40€', mid: '40-75€', premium: '75-150€' },
                  { tendenza: 'Lusso Sostenibile', entry: '50-100€', mid: '100-200€', premium: '200-400€' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.tendenza}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.entry}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.mid}</td>
                    <td className="p-3 text-center font-bold text-vinted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Fattori Moltiplicatori:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• <strong>Autenticità provata:</strong> +30%</span>
              <span>• <strong>Stato perfetto:</strong> +25%</span>
              <span>• <strong>Edizione limitata:</strong> +50%</span>
              <span>• <strong>Influencer worn:</strong> +100%</span>
            </div>
          </div>
        </div>

        {/* Marketing delle Tendenze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Marketing delle Tendenze</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Y2K 3.0:</h4>
              <p className="font-display text-lg">"🚀 FUTURISTICO! Top Metallizzato Edizione Y2K 2025"</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Indie Sleaze:</h4>
              <p className="font-display text-lg">"✨ CAOS CHIC! Blazer Vintage Party Ready"</p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Cottagecore:</h4>
              <p className="font-display text-lg">"🌸 ROMANTICO! Abito Lino Ricamato a Mano Stile Francese"</p>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Hashtag Potenti 2025:</h3>
            <div className="flex flex-wrap gap-2">
              {['#Y2K2025', '#MetallicMagic', '#TechFashion', '#IndieSleaze', '#ChaosChic', '#PartyReady', '#Cottagecore2025', '#RomanticStyle', '#HandCrafted', '#SustainableLux', '#EthicalFashion', '#GreenStyle'].map((tag) => (
                <span key={tag} className="bg-mint border-2 border-black px-2 py-1 text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Errori da Evitare */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Errori da Evitare Assolutamente</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-display font-bold text-xl">Red Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Seguire ciecamente:</strong> Adatta al tuo mercato locale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Stock eccessivo:</strong> Testa prima con pochi pezzi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Ignorare la stagionalità:</strong> Il timing è tutto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Prezzi fantasiosi:</strong> Resta coerente con il mercato</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-display font-bold text-xl">Green Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Test & Learn:</strong> Sperimenta piccolo, scala grande</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Quality over Quantity:</strong> Meglio 10 pezzi perfetti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Story telling:</strong> Racconta la storia di ogni tendenza</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Community building:</strong> Crea la tua tribù moda</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Piano d'Azione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Il Tuo Piano d'Azione Tendenze 2025</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { week: 'Settimana 1', action: 'Analizza il tuo stock attuale vs tendenze' },
              { week: 'Settimana 2', action: 'Sourcing mirato su max 2 tendenze' },
              { week: 'Settimana 3', action: 'Test pricing e presentazione' },
              { week: 'Settimana 4', action: 'Scala i successi, riorienta i fallimenti' },
            ].map((step, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4">
                <div className="bg-vinted text-white font-display font-bold px-3 py-1 mb-3 text-center border-2 border-black">
                  {step.week}
                </div>
                <p className="text-sm text-center">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Previsioni */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Previsioni Esclusive</h2>
          <p className="text-white text-lg mb-4">Cosa Esploderà a Fine 2025:</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Nostalgia vintage anni 2010', desc: 'Preparati adesso!' },
              { title: 'Moda progettata con AI', desc: 'Collaborazione umano-macchina' },
              { title: 'Abbigliamento adattabile al clima', desc: 'Vestiti che si adattano' },
              { title: 'Crossover moda virtuale', desc: 'Dal digitale al fisico' },
            ].map((pred, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4">
                <p className="font-semibold">{pred.title}</p>
                <p className="text-sm text-gray-600">{pred.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusione + CTA */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-4">Conclusione: Cavalca l'Onda</h2>
          <p className="text-lg mb-4">
            Le tendenze 2025 sono un'opportunità d'oro! Ma attenzione: il segreto non è seguire tutto,
            ma scegliere ciò che risuona con il tuo pubblico e la tua esperienza.
          </p>
          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-white text-center">
              Passione + Timing + Qualità = Success story Vinted!
            </p>
          </div>
          <a
            href="/it"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Ottimizza le Tue Foto Con VintDress
          </a>
        </div>

        {/* Articoli Correlati */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articoli Correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/it/articles/strategia-vendita-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Strategia di Vendita 2025 →</p>
            </a>
            <a
              href="/it/articles/5-consigli-vendere-piu-veloce-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Consigli Vendere Più Veloce →</p>
            </a>
            <a
              href="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guida Foto 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
