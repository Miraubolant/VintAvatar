import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingDown, AlertTriangle, DollarSign, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const IAFotoVintedGratisVsPagamentoPage: React.FC = () => {
  useSEO({
    title: "Foto IA Vinted: Perché il Gratuito Non Basta | VintDress",
    description: "Foto IA Vinted gratis vs a pagamento: scopri perché gli strumenti gratuiti non bastano e come VintDress può davvero aumentare le tue vendite.",
    keywords: "foto ia vinted gratis, foto ia vinted, generatore foto vinted, vinted ia gratis, foto vinted ia, strumento foto vinted, migliorare foto vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop"
          alt="Foto IA Vinted Gratis vs A Pagamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              FOTO IA VINTED
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Perché il Gratuito Non Basta
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
              GUIDA
            </span>
            <span className="font-body text-sm text-gray-600">Di VintDress Team</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">18 dicembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">7 min di lettura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Foto IA Vinted: Perché il Gratuito Non Basta
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Cerchi un'IA gratuita per le tue foto Vinted? Scopri perché gli strumenti a pagamento fanno davvero la differenza per vendere più velocemente.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Foto IA", "Vinted", "Gratuito", "Confronto", "Foto Vinted"].map((tag) => (
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
        <div className="bg-pink-pastel border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-black text-lg">
            Hai cercato "foto IA Vinted gratis" su Google? Non sei solo. Migliaia di venditori Vinted cercano soluzioni gratuite per migliorare le loro foto. Ma ecco la verità che nessuno ti dice: il gratuito ha un costo nascosto.
          </p>
        </div>

        {/* The Promise of Free AI */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            La Promessa dell'IA Gratuita
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              Promettono miracoli: trasforma le tue foto in immagini professionali gratis! Ma dietro queste promesse si nasconde una realtà molto diversa.
            </p>
          </div>
        </section>

        {/* What You Really Get */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            Cosa Ottieni Davvero con il Gratuito
          </h3>

          <div className="space-y-4">
            {/* Image Quality */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Qualità Immagine Scarsa
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Bassa risoluzione (spesso 512x512 pixel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Dettagli sfocati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Colori che non corrispondono all'originale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Texture distorte</span>
                </li>
              </ul>
            </div>

            {/* Usage Limitations */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Limitazioni d'Uso
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Code di attesa di ore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Limite di 1-2 immagini al giorno</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Pubblicità invasive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Registrazione obbligatoria con raccolta dati</span>
                </li>
              </ul>
            </div>

            {/* Disappointing Results */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Risultati Deludenti
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Manichini con proporzioni irrealistiche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Vestiti che non sembrano più l'originale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Sfondi di scarsa qualità</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Immagini inutilizzabili per Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Real Cost of Free */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Il Vero Costo del "Gratuito"
          </h2>
          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-black text-lg mb-4">
              Quando qualcosa è gratuito, il prodotto sei tu.
            </p>
            <p className="font-body text-gray-700">
              Ecco cosa ti costa davvero il gratuito:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* 1. Your Time */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Il Tuo Tempo</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-3">
                Quante ore passi a testare diversi strumenti, aspettare in coda, rifare generazioni fallite?
              </p>
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-display font-bold text-black text-sm">
                  2h del tuo tempo = €20 di valore
                </p>
                <p className="font-body text-xs text-gray-700 mt-1">
                  Un pack VintDress a €3,99 ti fa risparmiare ore.
                </p>
              </div>
            </div>

            {/* 2. Lost Sales */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Vendite Perse</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-3">
                Una foto di scarsa qualità su Vinted significa:
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Meno clic</span></li>
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Meno vendite</span></li>
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Articoli che ristagnano</span></li>
              </ul>
            </div>

            {/* 3. Your Reputation */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">La Tua Reputazione</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Foto sfocate o distorte danno un'immagine poco professionale. Gli acquirenti Vinted si fidano dei venditori che presentano bene i loro articoli.
              </p>
            </div>
          </div>
        </section>

        {/* Why Quality Has a Price */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Perché la Qualità Ha un Prezzo
          </h2>
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              L'intelligenza artificiale di qualità professionale richiede:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Server GPU potenti</p>
                  <p className="font-body text-xs text-gray-600">Che costano migliaia di euro al mese</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Modelli IA avanzati</p>
                  <p className="font-body text-xs text-gray-600">Sviluppati in anni di lavoro</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Infrastruttura affidabile</p>
                  <p className="font-body text-xs text-gray-600">Nessun tempo di attesa</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Supporto tecnico</p>
                  <p className="font-body text-xs text-gray-600">In caso di problemi</p>
                </div>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black text-center">
                È impossibile offrire tutto questo gratuitamente in modo sostenibile.
              </p>
            </div>
          </div>
        </section>

        {/* VintDress: The Profitable Investment */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress: L'Investimento Redditizio
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-white text-lg">
              Siamo chiari: VintDress è un servizio a pagamento. Non pretendiamo di essere gratuiti, ed ecco perché è meglio per te.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Caratteristica</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Gratuito</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Risoluzione</td>
                    <td className="p-4 text-center border-r-3 border-black">512px</td>
                    <td className="p-4 text-center bg-mint font-semibold">Alta risoluzione</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Tempo di attesa</td>
                    <td className="p-4 text-center border-r-3 border-black">1-2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 secondi</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Qualità manichino</td>
                    <td className="p-4 text-center border-r-3 border-black">Variabile</td>
                    <td className="p-4 text-center bg-mint font-semibold">Realistico</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Personalizzazione</td>
                    <td className="p-4 text-center border-r-3 border-black">Limitata</td>
                    <td className="p-4 text-center bg-mint font-semibold">Completa</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Limite giornaliero</td>
                    <td className="p-4 text-center border-r-3 border-black">1-2</td>
                    <td className="p-4 text-center bg-mint font-semibold">In base al tuo pack</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing */}
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            I Nostri Prezzi Trasparenti
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">€3,99</div>
              <p className="font-display font-bold text-black mb-1">10 generazioni</p>
              <p className="font-body text-xs text-gray-600">€0,40 per immagine</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">€7,99</div>
              <p className="font-display font-bold text-black mb-1">25 generazioni</p>
              <p className="font-body text-xs text-gray-600">€0,32 per immagine</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">€12,99</div>
              <p className="font-display font-bold text-black mb-1">40 generazioni/mese</p>
              <p className="font-body text-xs text-gray-600">€0,32 per immagine</p>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-vinted" />
              Ritorno sull'Investimento
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Facciamo i conti:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Il tuo articolo è in vendita a <strong>€15</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Con una foto base, ristagna per <strong>30 giorni</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Con una foto VintDress, si vende in <strong>3 giorni</strong></span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Una sola vendita accelerata ripaga 4× il tuo investimento.
              </p>
            </div>
          </div>
        </section>

        {/* Honest Comparison */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Confronto Onesto: Alternative sul Mercato
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Strumenti Gratuiti
              </h3>
              <div className="mb-4">
                <p className="font-display font-bold text-sm text-green-600 mb-2">PRO:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">È gratuito (apparentemente)</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">CONTRO:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Qualità insufficiente per Vinted</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tempo considerevole sprecato</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Risultati casuali</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Nessun supporto</span></li>
                </ul>
              </div>
            </div>

            {/* VintDress */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                VintDress
              </h3>
              <div className="mb-4">
                <p className="font-display font-bold text-sm text-green-600 mb-2">PRO:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Qualità professionale garantita</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Generazione in 30 secondi</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Manichino personalizzabile</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Supporto reattivo</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Progettato specificamente per Vinted</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-orange-600 mb-2">CONTRO:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Servizio a pagamento (da €3,99)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonianze di Venditori Convertiti
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Ho passato ore sugli strumenti gratuiti. I €3,99 per VintDress mi hanno fatto risparmiare un sacco di tempo e le mie vendite sono decollate."
              </p>
              <p className="font-display font-bold text-black text-sm">— Sara</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Sbagliavo i calcoli: perdevo più in tempo e vendite mancate che pagando uno strumento professionale."
              </p>
              <p className="font-display font-bold text-black text-sm">— Marco</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Il gratuito mi dava immagini inutilizzabili. VintDress funziona davvero."
              </p>
              <p className="font-display font-bold text-black text-sm">— Giulia</p>
            </div>
          </div>
        </section>

        {/* Honest Advice */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Il Nostro Consiglio Onesto
            </h3>
            <p className="font-body text-white mb-3">
              Se vendi 1-2 articoli all'anno, gli strumenti gratuiti possono bastare nonostante i loro difetti.
            </p>
            <p className="font-body text-white mb-4">
              Ma se vendi regolarmente su Vinted e vuoi foto che convertono, risparmiare tempo e ottenere risultati garantiti:
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Allora uno strumento professionale come VintDress è un investimento, non una spesa.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              Conclusione
            </h2>
            <p className="font-body text-gray-700 mb-4">
              Cercare "foto IA Vinted gratis" è legittimo. Tutti vogliono risparmiare. Ma il vero risparmio è <strong>vendere più velocemente con meno sforzo</strong>.
            </p>
            <p className="font-body text-gray-700 mb-4">
              Gli strumenti gratuiti hanno il loro posto per testare o togliersi dai guai. Per vendere seriamente su Vinted, la qualità professionale fa tutta la differenza.
            </p>
            <div className="bg-white border-2 border-black p-4">
              <p className="font-display font-bold text-vinted text-center">
                VintDress è a pagamento perché la qualità ha un prezzo. E quel prezzo è ridicolo rispetto ai risultati.
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
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Esiste un'IA foto Vinted davvero gratuita e di qualità?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Gli strumenti gratuiti esistono ma generalmente producono risultati di qualità insufficiente per Vinted: bassa risoluzione, distorsioni, lunghi tempi di attesa.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Perché VintDress non è gratuito?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La tecnologia IA professionale richiede server potenti e modelli avanzati che hanno un costo reale. VintDress offre tariffe accessibili da €3,99 per garantire una qualità ottimale.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Vale davvero la pena pagare per Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sì, se vendi regolarmente. Una sola vendita accelerata da una foto migliore ripaga più volte il costo dello strumento.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quanto costa VintDress?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  VintDress offre pack a partire da €3,99 per 10 generazioni, cioè €0,40 per foto professionale.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto a Investire nelle Tue Vendite?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Scopri VintDress ora e trasforma le tue foto Vinted in veri strumenti di vendita.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              INIZIA ORA
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
            <Link
              to="/it/articles/5-consigli-vendere-piu-veloce-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Consigli per Vendere Più Veloce</h3>
              <p className="font-body text-sm text-gray-600">Ottimizza le tue vendite con strategie comprovate.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IAFotoVintedGratisVsPagamentoPage;
