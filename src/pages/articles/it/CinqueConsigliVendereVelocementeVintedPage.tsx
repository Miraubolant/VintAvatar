import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, FileText, DollarSign, Clock, MessageCircle, CheckCircle2, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const CinqueConsigliVendereVelocementeVintedPage: React.FC = () => {
  useSEO({
    title: "5 Consigli per Vendere Più Velocemente su Vinted | VintDress",
    description: "Scopri 5 consigli essenziali per aumentare le tue vendite su Vinted. Foto IA, prezzo ottimale, timing perfetto - tutti i nostri segreti svelati!",
    keywords: "vendite vinted, consigli vinted, foto vinted, vendere più velocemente, foto IA",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="5 Consigli per Vendere su Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              5 CONSIGLI VINTED
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Vendere Più Velocemente e a Prezzi Migliori
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
              CONSIGLI
            </span>
            <span className="font-body text-sm text-gray-600">Dal Team VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">28 novembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min di lettura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            5 Consigli per Vendere Più Velocemente su Vinted
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Scopri i segreti per massimizzare le tue vendite con foto perfette generate dall'IA.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Vinted", "Consigli", "Vendite", "Foto", "IA"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            Vinted è diventata LA piattaforma essenziale per vendere abbigliamento di seconda mano. Ma con milioni di utenti, come fare per far risaltare i tuoi annunci?
          </p>
        </div>

        {/* Consiglio 1: Foto */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">1</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Foto che Fanno la Differenza
                  </h2>
                </div>
                <p className="font-display font-bold text-lg text-vinted mb-4">
                  Segreto N°1: La qualità delle tue foto
                </p>
                <p className="font-body text-gray-700 mb-4">
                  Gli acquirenti su Vinted giudicano prima di tutto con gli occhi. Una foto di scarsa qualità può far scappare un potenziale acquirente, anche se il tuo articolo è fantastico.
                </p>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">
                I Nostri Consigli
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Usa la luce naturale (vicino a una finestra)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Evita le foto sfocate o troppo scure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Mostra l'articolo da più angolazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Soluzione rivoluzionaria:</strong> Usa la nostra IA per creare foto indossate ultra-realistiche in 30 secondi!</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consiglio 2: Titolo e Descrizione */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">2</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Titolo Accattivante e Descrizione Dettagliata
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Titolo perfetto */}
              <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Il Titolo Perfetto in 3 Passi
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">1.</span>
                    <span className="font-body text-sm text-gray-700">Marca + Modello (se conosciuto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">2.</span>
                    <span className="font-body text-sm text-gray-700">Taglia chiara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">3.</span>
                    <span className="font-body text-sm text-gray-700">Condizione precisa</span>
                  </li>
                </ol>
                <div className="bg-white border-2 border-black p-3 mt-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Esempio:</p>
                  <p className="font-display font-bold text-sm text-black">
                    "ZARA Vestito nero S - Ottime condizioni - Indossato 2x"
                  </p>
                </div>
              </div>

              {/* Descrizione */}
              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Per la Descrizione
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Materiale del tessuto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Misure esatte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Storia dell'articolo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Eventuali difetti (trasparenza = fiducia)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consiglio 3: Prezzo */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-mint border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">3</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Prezzo Strategico
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                La Regola d'Oro
              </h3>
              <p className="font-body text-white">
                Inizia con un prezzo leggermente superiore a quello che vuoi realmente ottenere. Questo ti dà margine di trattativa.
              </p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Trucco Psicologico
              </h3>
              <p className="font-body text-gray-700">
                Usa prezzi che terminano con <strong>9</strong> (19€ invece di 20€) - funziona davvero!
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Meno attraente</p>
                  <p className="font-display font-bold text-2xl text-gray-500 line-through">20€</p>
                </div>
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Più attraente</p>
                  <p className="font-display font-bold text-2xl text-vinted">19€</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consiglio 4: Timing */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">4</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Momento Ottimale di Pubblicazione
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                I Migliori Momenti
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">1</span>
                    </div>
                    <p className="font-display font-bold text-black">Domenica sera (18-20)</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Preparazione della settimana</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">2</span>
                    </div>
                    <p className="font-display font-bold text-black">Mercoledì sera</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Metà settimana, motivazione shopping</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">3</span>
                    </div>
                    <p className="font-display font-bold text-black">Venerdì pomeriggio</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Preparazione del weekend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consiglio 5: Reattività */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">5</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Reattività e Servizio Clienti
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  Rispondi Rapidamente
                </h3>
                <p className="font-body text-white text-sm">
                  Gli acquirenti Vinted sono impazienti. Una risposta entro un'ora può fare la differenza.
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Sii Flessibile
                </h3>
                <p className="font-body text-gray-700 text-sm">
                  Prezzo, spedizione raggruppata, tempi... La trattativa fa parte del gioco!
                </p>
              </div>
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
              Con questi 5 consigli, dovresti vedere le tue vendite decollare! E non dimenticare: le foto di qualità professionale possono aumentare le tue vendite del <strong>+300%</strong>.
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-vinted text-center text-lg">
                È qui che entra in gioco la nostra IA...
              </p>
            </div>
          </div>
        </section>

        {/* Riepilogo visivo */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Riepilogo dei 5 Consigli
          </h2>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Foto IA</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Titolo + Descrizione</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Prezzo in 9</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Buon Timing</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Reattività</p>
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
                <span>Qual è il momento migliore per pubblicare su Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  I migliori orari sono domenica sera (18-20), mercoledì sera e venerdì pomeriggio.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Come fissare il prezzo giusto su Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Analizza 5 articoli simili venduti, posizionati 10-20% sotto la media e usa prezzi psicologici (19€ invece di 20€).
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Le foto IA aumentano davvero le vendite?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sì, i nostri utenti registrano +300% visualizzazioni e vendite da 3 a 5 volte più veloci con le foto generate dall'IA.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto a Trasformare le Tue Vendite?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Prova il nostro generatore IA ora e aumenta le tue vendite del +300%!
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROVA L'IA ORA
              <Zap className="w-5 h-5" />
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
              to="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guida Completa Foto Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Tutte le tecniche per foto che vendono.</p>
            </Link>
            <Link
              to="/it/articles/strategia-vendita-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Strategia di Vendita Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">La strategia completa per dominare Vinted.</p>
            </Link>
            <Link
              to="/it/articles/algoritmo-vinted-visibilita-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Algoritmo Vinted Visibilità</h3>
              <p className="font-body text-sm text-gray-600">Comprendi l'algoritmo per massimizzare la tua visibilità.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CinqueConsigliVendereVelocementeVintedPage;
