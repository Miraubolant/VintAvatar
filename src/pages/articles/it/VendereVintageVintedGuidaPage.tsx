import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Gem, Search, Camera, DollarSign, FileText, TrendingUp, Clock, Award, Star, CheckCircle, X } from 'lucide-react';

export default function VendereVintageVintedGuidaPage() {
  useSEO({
    title: "Vendere Vintage su Vinted: La Guida Completa 2025 | VintDress",
    description: "Guida completa per vendere vintage su Vinted nel 2025. Autenticazione, foto IA, prezzi, descrizioni. Trasforma i tuoi capi retrò in oro!",
    keywords: "vendere vintage vinted, abbigliamento vintage, moda retrò vinted, prezzi vintage, autenticità vintage",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Vendere Vintage su Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Vendere Vintage su Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              La Guida Completa 2025
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
            <span className="text-black">6 Dicembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min di lettura</span>
            <span className="text-black">•</span>
            <span className="text-black">Di Sophie Martin</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Vintage', 'Guida', 'Vinted', 'Moda Retrò', 'Vendite'].map((tag) => (
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
            Il vintage è in pieno boom! Con la moda sostenibile e il ritorno delle tendenze retrò,
            vendere abbigliamento vintage su Vinted può diventare molto redditizio. Ecco tutto ciò che devi sapere.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Gem className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Perché il Vintage Spopola nel 2025</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">I numeri parlano:</h3>
                <ul className="space-y-1">
                  <li>• +45% di ricerche "vintage" su Vinted nel 2024</li>
                  <li>• Prezzi medi 3 volte più alti del fast-fashion</li>
                  <li>• Acquirenti disposti a pagare per l'autenticità</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Cosa fa impazzire gli acquirenti:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Pezzi unici e originali',
                'Qualità di fabbricazione superiore',
                'Stile senza tempo e duraturo',
                'Storia e carattere dei capi'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Come Identificare un Vero Pezzo Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Come Identificare un Vero Pezzo Vintage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Etichette rivelatrici:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>"Made in France/Italy/USA" (prima della delocalizzazione)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Tipografia e loghi d'epoca</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Numeri di lotto o codici antichi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Materiali nobili menzionati</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Dettagli di fabbricazione:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Cuciture rinforzate e regolari</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Bottoni in madreperla, metallo o legno</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Fodere complete</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Cerniere metalliche</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Datare un Pezzo Vintage:</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Anni '70:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Motivi psichedelici</li>
                  <li>• Colli larghi e appuntiti</li>
                  <li>• Tessuti sintetici lucidi</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Anni '80:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Spalline pronunciate</li>
                  <li>• Colori fluo</li>
                  <li>• Loghi visibili</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Anni '90:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Minimalismo</li>
                  <li>• Denim slavato</li>
                  <li>• Tagli oversize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fotografare il Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Fotografare il Vintage: I Segreti Pro</h2>
          </div>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="text-white text-lg mb-4">
              Il vintage ha una sfida unica: gli acquirenti non possono toccare il tessuto né vedere i dettagli.
              Le tue foto devono compensare.
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La soluzione IA:</h3>
              <p className="mb-3">Il nostro generatore di foto indossate è perfetto per il vintage perché:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Valorizza il taglio unico</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Mostra come cade il capo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Dà vita a pezzi che possono sembrare "morti" su gruccia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>Aumenta le vendite del +350% sul vintage!</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Foto Obbligatorie per il Vintage:</h3>

            <div className="space-y-3">
              {[
                { num: '1', title: 'Foto indossata IA', desc: 'L\'aggancio definitivo' },
                { num: '2', title: 'Etichetta/marca', desc: 'Prova di autenticità' },
                { num: '3', title: 'Dettagli del tessuto', desc: 'Texture e qualità' },
                { num: '4', title: 'Cuciture e finiture', desc: 'Maestria artigianale' },
                { num: '5', title: 'Eventuali difetti', desc: 'Trasparenza totale' },
              ].map((photo) => (
                <div key={photo.num} className="flex items-center gap-3 bg-white border-2 border-black p-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {photo.num}
                  </span>
                  <div>
                    <p className="font-semibold">{photo.title}</p>
                    <p className="text-sm text-gray-600">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stabilire il Prezzo del Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Stabilire il Prezzo del Vintage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-semibold text-lg">Identificare la marca</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Marche di lusso vintage: prezzo x5 a x10</li>
                <li>• Marche di qualità (Cacharel, Kenzo vintage): x3</li>
                <li>• Senza marca ma qualità: x2</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-semibold text-lg">Valutare le condizioni</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Perfetto/Nuovo: Prezzo massimo</li>
                <li>• Ottime condizioni: -10 al 15%</li>
                <li>• Buone condizioni con difetti minori: -20 al 30%</li>
                <li>• Da restaurare: -50% ma nicchia specifica</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-semibold text-lg">Verificare la tendenza</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Pezzo di tendenza attuale: prezzo premium</li>
                <li>• Classico senza tempo: prezzo stabile</li>
                <li>• Fuori tendenza temporanea: pazienza o svendita</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-semibold text-lg">Studiare il mercato</h3>
              </div>
              <p className="text-sm ml-10">
                Cerca articoli simili <strong>venduti</strong> (non in vendita!)
              </p>
            </div>
          </div>
        </div>

        {/* Descrizioni che Vendono */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Descrizioni che Vendono</h2>
          </div>

          <div className="bg-cream border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Il Template Perfetto per il Vintage:</h3>

            <div className="bg-white border-2 border-black p-4 font-mono text-sm">
              <p className="mb-2">[DECENNIO] [MARCA] - [TIPO DI CAPO]</p>
              <p className="mb-2">Storia:</p>
              <p className="mb-2 ml-4">[Contesto del pezzo, epoca, stile]</p>
              <p className="mb-2">Dettagli:</p>
              <ul className="ml-4 mb-2">
                <li>- Marca: [nome]</li>
                <li>- Epoca: [stima]</li>
                <li>- Taglia etichetta: [X] (corrisponde a [Y] attuale)</li>
                <li>- Materiale: [composizione]</li>
                <li>- Colore: [descrizione precisa]</li>
              </ul>
              <p className="mb-2">Misure:</p>
              <p className="mb-2 ml-4">[Tutte le misure importanti]</p>
              <p className="mb-2">Condizioni:</p>
              <p className="mb-2 ml-4">[Descrizione onesta con difetti]</p>
              <p className="mb-2">Autenticità:</p>
              <p className="ml-4">[Elementi che provano l'autenticità]</p>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Parole Chiave che Potenziano:</h3>
            <div className="flex flex-wrap gap-2">
              {['Vintage 90s', 'Retrò', 'True vintage', 'Collector', 'Raro', 'Made in France'].map((keyword) => (
                <span key={keyword} className="bg-mint border-2 border-black px-3 py-1 text-sm font-semibold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Nicchie Vintage più Redditizie */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Nicchie Vintage più Redditizie</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Denim vintage Levi\'s', desc: 'Valore sicuro, forte domanda' },
              { num: '2', title: 'Sportswear anni \'90', desc: 'Nike, Adidas vintage molto ricercati' },
              { num: '3', title: 'Lusso vintage', desc: 'Chanel, Hermès, YSL = jackpot' },
              { num: '4', title: 'Bohémien anni \'70', desc: 'Vestiti lunghi, motivi floreali' },
              { num: '5', title: 'Preppy anni \'80', desc: 'Ralph Lauren, Lacoste vintage' },
            ].map((niche) => (
              <div key={niche.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {niche.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{niche.title}</p>
                    <p className="text-sm text-gray-600">{niche.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Da Evitare:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Capi molto macchiati o bucati (salvo indicazione "per pezzi")</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Contraffazioni vintage (sì, esistono!)</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Pezzi senza alcun appeal stilistico</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Strategia di Vendita Avanzata */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Strategia di Vendita Avanzata</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Creare il tuo Negozio Vintage:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Foto coerenti grazie alla nostra IA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Descrizione stilistica unificata</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Specializzazione per epoca o stile</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Fidelizzare la clientela:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Lotti tematici</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Anteprime ai clienti fedeli</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Consigli di stile personalizzati</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-vinted" />
              <h3 className="font-display font-bold text-xl">Tempistica Ottimale:</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Gennaio</p>
                <p className="text-sm">Buoni propositi moda sostenibile</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Aprile</p>
                <p className="text-sm">Transizione primavera, ricerca pezzi leggeri</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Settembre</p>
                <p className="text-sm">Rientro, nuovi look</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Ottobre</p>
                <p className="text-sm">Pezzi autunnali vintage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Caso Pratico */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Caso Pratico: Da 5€ a 150€</h2>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">La Storia di Questa Giacca:</h3>

            <div className="space-y-4">
              <div className="bg-pink-pastel/30 border-2 border-black p-4">
                <p className="font-semibold mb-2">Acquisto:</p>
                <p>Giacca in velluto trovata a <strong>5€</strong></p>
              </div>

              <div className="bg-vinted/10 border-2 border-black p-4">
                <p className="font-semibold mb-2">Analisi:</p>
                <ul className="space-y-1">
                  <li>• Etichetta "Made in France"</li>
                  <li>• Marca di confezione parigina</li>
                  <li>• Bottoni in corno</li>
                  <li>• Fodera in seta</li>
                </ul>
              </div>

              <div className="bg-mint/50 border-2 border-black p-4">
                <p className="font-semibold mb-2">Messa in vendita:</p>
                <ul className="space-y-1">
                  <li>• Foto indossata IA sublime</li>
                  <li>• Descrizione dettagliata con storia</li>
                  <li>• Prezzo stabilito: <strong>150€</strong></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-2xl text-vinted">
                  Risultato: Venduta in 48h!
                </p>
                <p className="text-sm mt-2">A un'acquirente che cercava esattamente questo stile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusione</h2>
          <p className="text-lg mb-6">
            Il vintage su Vinted è una miniera d'oro per chi sa come muoversi. Le chiavi del successo:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { num: '1', text: 'Autenticare correttamente i tuoi pezzi' },
              { num: '2', text: 'Fotografare con la nostra IA per foto indossate perfette' },
              { num: '3', text: 'Descrivere con passione e precisione' },
              { num: '4', text: 'Prezzare intelligentemente' },
              { num: '5', text: 'Mirare alle nicchie giuste' },
            ].map((cle) => (
              <div key={cle.num} className="bg-cream border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {cle.num}
                </span>
                <p className="font-semibold pt-1">{cle.text}</p>
              </div>
            ))}
          </div>

          <a
            href="/it"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Prova VintDress Ora
          </a>
        </div>

        {/* Articoli Correlati */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articoli Correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/it/articles/tendenze-moda-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Tendenze Moda 2025 →</p>
            </a>
            <a
              href="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guida Foto 2025 →</p>
            </a>
            <a
              href="/it/articles/strategia-vendita-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Strategia di Vendita 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
