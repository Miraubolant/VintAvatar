import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Star, AlertTriangle, Lightbulb, Calendar, MessageCircle } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const AlgoritmoVintedVisibilitaPage: React.FC = () => {
  useSEO({
    title: "Algoritmo Vinted: Come Massimizzare la tua Visibilità nel 2025 | VintDress",
    description: "Comprendi l'algoritmo Vinted e massimizza la tua visibilità. Scopri le strategie 2025 per apparire in cima alle ricerche e vendere più velocemente.",
    keywords: "algoritmo vinted, visibilità vinted, vinted algoritmo, apparire primo vinted, boost annuncio vinted, ranking vinted, seo vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop"
          alt="Algoritmo Vinted Visibilità"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              ALGORITMO VINTED
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Massimizza la tua Visibilità nel 2025
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              STRATEGIA
            </span>
            <span className="font-body text-sm text-gray-600">Di VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">18 dicembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">8 min di lettura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Algoritmo Vinted: Come Massimizzare la tua Visibilità nel 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Comprendi il funzionamento dell'algoritmo Vinted e scopri le strategie per apparire in cima alle ricerche e vendere più velocemente.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Algoritmo", "Vinted", "Visibilità", "SEO Vinted", "Strategia"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction Card */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            L'algoritmo Vinted determina quali annunci appaiono per primi nelle ricerche. Comprendere il suo funzionamento è la chiave per vendere più velocemente.
          </p>
        </div>

        {/* I 5 Fattori Chiave */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            I 5 Fattori Chiave del Ranking
          </h2>

          <div className="space-y-4">
            {/* Fattore 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Qualità delle Foto
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    È il fattore N°1. L'algoritmo favorisce gli annunci con:
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Foto nitide e ben illuminate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Diverse angolazioni del capo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Immagini ad alta risoluzione</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700"><strong>Foto indossate (il criterio più impattante)</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fattore 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    L'Engagement dell'Annuncio
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    Più interazioni genera il tuo annuncio, più sale nel ranking:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Numero di visualizzazioni</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Aggiunte ai preferiti</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Messaggi ricevuti</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Condivisioni</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fattore 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Freschezza dell'Annuncio
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    I nuovi annunci e quelli recentemente aggiornati ricevono un boost temporaneo.
                  </p>
                </div>
              </div>
            </div>

            {/* Fattore 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Reputazione del Venditore
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Numero di recensioni positive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Tasso di risposta ai messaggi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Storico delle vendite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Anzianità dell'account</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fattore 5 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Pertinenza delle Parole Chiave
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    Il titolo e la descrizione devono corrispondere a ciò che cercano gli acquirenti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategia 1: Foto */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Strategia 1: Ottimizzare le Foto per l'Algoritmo
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Cosa piace all'algoritmo */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Cosa Piace all'Algoritmo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Foto indossate su manichino o persona</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Sfondo neutro e pulito</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Buona illuminazione</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Più foto (4-5 minimo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Alta risoluzione</span>
                </li>
              </ul>
            </div>

            {/* Cosa penalizza l'algoritmo */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Cosa Penalizza l'Algoritmo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Foto sfocate o scure</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Una sola foto</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Foto con watermark o testo</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Immagini troppo compresse</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Soluzione VintDress */}
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Soluzione: I Manichini IA
            </h3>
            <p className="font-body text-white mb-4">
              Le foto indossate sono il segnale più forte per l'algoritmo. Problema: non tutti hanno qualcuno per posare.
            </p>
            <p className="font-body text-white mb-4">
              È qui che entra VintDress. La nostra IA genera foto di manichini ultra realistiche che:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Mostrano il capo indossato (segnale forte)</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Sono in alta risoluzione</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Presentano pose professionali</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Aumentano drasticamente l'engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategia 2: Timing */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Strategia 2: Padroneggiare il Momento della Pubblicazione
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              L'algoritmo potenzia i nuovi annunci per 24-48 ore. Approfittane!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Giorni ottimali */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-vinted" />
                  Giorni Ottimali
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Domenica</strong>: preparazione della settimana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Mercoledì</strong>: metà settimana, voglia di shopping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Venerdì</strong>: inizio del weekend</span>
                  </li>
                </ul>
              </div>

              {/* Ore ottimali */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-vinted" />
                  Ore Ottimali
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>12h-14h</strong>: pausa pranzo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>18h-21h</strong>: uscita dal lavoro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>21h-23h</strong>: navigazione rilassata</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tecnica del Bump */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Tecnica del Bump
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Rinfresca i tuoi annunci regolarmente:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Modifica leggermente il prezzo</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Aggiungi o cambia una foto</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Aggiorna la descrizione</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-3 mt-4">
              <p className="font-display font-bold text-black text-sm">
                L'algoritmo lo considera un annuncio "nuovo".
              </p>
            </div>
          </div>
        </section>

        {/* Strategia 3: Titoli e Descrizioni */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Strategia 3: Ottimizzare Titoli e Descrizioni
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              La Struttura del Titolo Perfetto
            </h3>
            <div className="bg-cream border-2 border-black p-4 mb-4">
              <code className="font-body text-sm text-black">
                [MARCA] [Tipo di capo] [Taglia] - [Condizione] [Colore]
              </code>
            </div>
            <h4 className="font-display font-bold text-sm text-black mb-2">Esempi:</h4>
            <ul className="space-y-2">
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"ZARA Vestito midi M - Nuovo con etichetta Nero"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"NIKE Air Force 1 42 - Ottime condizioni Bianco"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"H&M Maglione oversize L - Come nuovo Beige"</span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Parole Chiave Strategiche
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Includi nella descrizione:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La marca (più volte naturalmente)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">Il tipo di capo esatto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La stagione (estate, inverno...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">L'occasione (sera, casual, ufficio...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">I materiali (cotone, lino, lana...)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tabella Comparativa Impatto VintDress */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Impatto delle Foto IA sull'Algoritmo
          </h2>

          <div className="overflow-x-auto mb-6">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Metrica</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Senza VintDress</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">Con VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Visualizzazioni per annuncio</td>
                    <td className="p-4 text-center border-r-3 border-black">50-100</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">200-400</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Aggiunte ai preferiti</td>
                    <td className="p-4 text-center border-r-3 border-black">2-5</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">10-20</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Tempo di vendita</td>
                    <td className="p-4 text-center border-r-3 border-black">2-4 settimane</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">3-7 giorni</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Posizione media</td>
                    <td className="p-4 text-center border-r-3 border-black">Pagina 2-3</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">Pagina 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-vinted border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-3">
              Perché?
            </h3>
            <p className="font-body text-white mb-3">
              Perché le foto indossate professionali:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Attirano più clic (segnale positivo)</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Generano più preferiti (segnale positivo)</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Provocano più messaggi (segnale positivo)</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black">
                L'algoritmo interpreta tutti questi segnali come "questo annuncio interessa agli acquirenti" e lo fa salire.
              </p>
            </div>
          </div>
        </section>

        {/* Errori da Evitare */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            5 Errori da Evitare con l'Algoritmo
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">1. Spammare Annunci</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Pubblicare troppi annunci in una volta può essere considerato spam.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">2. Copiare-Incollare Descrizioni</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Ogni annuncio deve avere una descrizione unica.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">3. Prezzi Irrealistici</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                I prezzi troppo bassi o troppo alti vengono penalizzati.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">4. Ignorare i Messaggi</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Un basso tasso di risposta impatta il tuo ranking.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">5. Foto di Scarsa Qualità</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                È IL fattore più negativamente impattante.
              </p>
            </div>
          </div>
        </section>

        {/* Piano d'Azione */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Piano d'Azione Immediato
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Questa Settimana */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Questa Settimana
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Verifica le tue foto</strong>: sostituisci le foto sfocate o mal illuminate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Crea foto indossate</strong> con VintDress per i tuoi migliori articoli</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Ottimizza 5 titoli</strong> con la struttura marca + tipo + taglia + condizione</span>
                </li>
              </ul>
            </div>

            {/* Questo Mese */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Questo Mese
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Stabilisci un calendario</strong> di pubblicazione (3-4 annunci/settimana nei momenti giusti)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Rispondi a tutti i messaggi</strong> entro un'ora</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Aggiorna i tuoi vecchi annunci</strong> per fare "bump"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusione */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Conclusione
            </h2>
            <p className="font-body text-white mb-4">
              L'algoritmo Vinted non è un mistero. Premia:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Le foto di qualità (specialmente indossate)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">L'engagement generato</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">La freschezza degli annunci</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">La reputazione del venditore</span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-center">
                Combinando queste strategie con foto professionali VintDress, massimizzi le possibilità di apparire in cima alle ricerche e vendere rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Domande Frequenti
          </h2>
          <div className="space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Come funziona l'algoritmo Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  L'algoritmo Vinted classifica gli annunci in base alla qualità delle foto, all'engagement generato, alla freschezza dell'annuncio, alla reputazione del venditore e alla pertinenza delle parole chiave.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Qual è il fattore più importante per l'algoritmo Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La qualità delle foto è il fattore N°1. Le foto indossate professionali generano significativamente più visualizzazioni e engagement, segnali positivi per l'algoritmo.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Come salire nelle ricerche Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Pubblica nei momenti giusti (domenica sera, mercoledì sera), usa foto indossate di qualità, rispondi velocemente ai messaggi e aggiorna regolarmente i tuoi annunci.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Le foto IA aiutano davvero con l'algoritmo?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sì, le foto indossate professionali generate dall'IA come VintDress aumentano le visualizzazioni e l'engagement da 3 a 4 volte, migliorando direttamente il posizionamento algoritmico.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto/a a Dominare l'Algoritmo Vinted?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Inizia dalle tue foto con VintDress e massimizza la tua visibilità da oggi.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              OTTIMIZZA LE MIE FOTO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Articoli Correlati
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/it/articles/5-consigli-vendere-piu-veloce-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Consigli per Vendere Più Veloce</h3>
              <p className="font-body text-sm text-gray-600">Ottimizza le tue vendite con strategie comprovate.</p>
            </Link>
            <Link
              to="/it/articles/manichino-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Manichino IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Scopri come un manichino IA può trasformare le tue foto.</p>
            </Link>
            <Link
              to="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guida Completa Foto Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Tutte le tecniche per foto che vendono.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AlgoritmoVintedVisibilitaPage;
