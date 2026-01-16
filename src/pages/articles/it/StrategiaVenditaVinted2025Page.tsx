import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Target, DollarSign, FileText, Users, BarChart, Calendar, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const StrategiaVenditaVinted2025Page: React.FC = () => {
  useSEO({
    title: "Strategia di Vendita Vinted: Domina nel 2025 | VintDress",
    description: "Strategie di vendita Vinted 2025: prezzi, titoli, tempistiche. I segreti dei top seller per far esplodere le tue vendite!",
    keywords: "strategia vendita vinted 2025, vendere di più vinted, prezzi vinted, ottimizzare vendite vinted, business vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="Strategia di Vendita Vinted 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              STRATEGIA VINTED 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Domina il Mercato Quest'Anno
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
            <span className="font-body text-sm text-gray-600">Dal Team VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 novembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 min di lettura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Strategia di Vendita Vinted: Domina nel 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Le strategie segrete dei top seller per far esplodere le tue vendite su Vinted quest'anno!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Strategia", "Vendite", "Vinted", "2025", "Business", "E-commerce"].map((tag) => (
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
          <p className="font-display font-bold text-white text-lg mb-4">
            Il mercato Vinted non è mai stato così competitivo. Per avere successo nel 2025, hai bisogno di più di una bella foto: hai bisogno di una vera strategia!
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">65 milioni di utenti attivi</p>
            </div>
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">97% degli acquisti da smartphone</p>
            </div>
          </div>
        </div>

        {/* Chapter 1: Know Your Market */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Target className="w-8 h-8 text-vinted" />
            Capitolo 1: Conosci il Tuo Mercato
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Analyze competition */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Analizza la Concorrenza
              </h3>
              <p className="font-body text-sm text-gray-700 mb-3">
                Tecnica di Benchmarking dei Prezzi:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Cerca 10 articoli simili</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Annota prezzi, condizioni e presentazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Posizionati strategicamente</span>
                </li>
              </ul>
            </div>

            {/* Perfect timing */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Fasce Orarie Vincenti 2025
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Domenica 19:00-21:00</p>
                  <p className="font-body text-xs text-gray-600">Picco di visualizzazioni (+340%)</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Mercoledì 12:00-14:00</p>
                  <p className="font-body text-xs text-gray-600">Shopping in pausa pranzo</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Venerdì 17:00-20:00</p>
                  <p className="font-body text-xs text-gray-600">Preparazione al weekend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Title Optimization */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <FileText className="w-8 h-8 text-vinted" />
            Capitolo 2: Ottimizzazione dei Titoli
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Formula Magica
            </h3>
            <div className="bg-white border-3 border-black p-4 mb-4">
              <code className="font-display font-bold text-black">
                MARCA + TIPO + DETTAGLIO UNICO + TAGLIA + CONDIZIONE
              </code>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">Esempio sbagliato</p>
                <p className="font-body text-sm text-gray-700 line-through">"Vestito nero M"</p>
              </div>
              <div className="bg-mint border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">Esempio corretto</p>
                <p className="font-body text-sm text-black font-semibold">"ZARA Vestito Blazer Nero Bottoni Oro Taglia M Condizioni Perfette"</p>
              </div>
            </div>
          </div>

          {/* Top 10 keywords */}
          <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Top 10 Parole Che Vendono
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["NUOVO / MAI INDOSSATO", "EDIZIONE LIMITATA", "VINTAGE AUTENTICO", "TENDENZA 2025", "CONDIZIONI PERFETTE",
                "PEZZO RARO", "COLLEZIONE PRIVATA", "PREZZO AFFARE", "VENDITA URGENTE", "ULTIMO DISPONIBILE"].map((word, i) => (
                <div key={i} className="bg-mint border-2 border-black p-2 text-center">
                  <span className="font-display font-bold text-xs text-black">{i + 1}. {word}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 3: Pricing Strategy */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-vinted" />
            Capitolo 3: Strategia dei Prezzi
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Psicologia dei Prezzi
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Termina con <strong>9</strong> o <strong>5</strong>: €19, €25, €35</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Prezzo iniziale alto poi "sconto"</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Offerte bundle per aumentare il carrello</span></li>
            </ul>
          </div>

          {/* Pricing table */}
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <h3 className="font-display font-bold text-xl text-black p-4 border-b-3 border-black bg-cream">
                Guida ai Prezzi 2025
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Categoria</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Nuovo</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Ottimo</th>
                    <th className="p-4 text-center font-display font-bold text-black">Buono</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Fast Fashion</td>
                    <td className="p-4 text-center border-r-3 border-black">40-60%</td>
                    <td className="p-4 text-center border-r-3 border-black">30-40%</td>
                    <td className="p-4 text-center">20-30%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Brand Premium</td>
                    <td className="p-4 text-center border-r-3 border-black">50-70%</td>
                    <td className="p-4 text-center border-r-3 border-black">40-50%</td>
                    <td className="p-4 text-center">30-40%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Lusso/Designer</td>
                    <td className="p-4 text-center border-r-3 border-black">60-80%</td>
                    <td className="p-4 text-center border-r-3 border-black">50-60%</td>
                    <td className="p-4 text-center">40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapter 4: Description */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 4: Descrizioni Che Convertono
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Template */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Template Vincente
              </h3>
              <div className="space-y-3">
                <div className="bg-vinted border-2 border-black p-3">
                  <p className="font-display font-bold text-white text-sm">GANCIO EMOZIONALE</p>
                </div>
                <div className="bg-mint border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">DETTAGLI</p>
                  <p className="font-body text-xs text-gray-700">Marca, taglia, materiali, condizione</p>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">INFO PRATICHE</p>
                  <p className="font-body text-xs text-gray-700">Spedizione, packaging, domande</p>
                </div>
              </div>
            </div>

            {/* Storytelling */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Storytelling Potente
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Basico</p>
                  <p className="font-body text-sm text-gray-700">"Jeans Levi's 501 taglia 28, buone condizioni"</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Trasformato</p>
                  <p className="font-body text-sm text-black">"Questi Levi's 501 vintage hanno un'anima! Trovati in un mercatino parigino, hanno quel qualcosa di speciale."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5: Stock Management */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 5: Gestione dello Stock
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Strategia dei 30 Giorni
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Giorno 1-10</p>
                <p className="font-body text-sm text-gray-700">Prezzo standard</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Giorno 11-20</p>
                <p className="font-body text-sm text-gray-700">-10% + boost</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Giorno 21-30</p>
                <p className="font-body text-sm text-gray-700">-20% + repost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6: Customer Relations */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Capitolo 6: Relazioni con i Clienti 2025
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Servizio Clienti Eccezionale
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Risposta in meno di 2 ore</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Foto aggiuntive su richiesta</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Flessibilità nelle trattative</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Programma VIP Personale
              </h3>
              <div className="space-y-2">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">5% di sconto al 2° acquisto</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">10% di sconto al 3° acquisto</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Accesso prioritario ai nuovi arrivi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 7: Analytics */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <BarChart className="w-8 h-8 text-vinted" />
            Capitolo 7: Analytics e Ottimizzazione
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                KPI da Monitorare
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tasso di visualizzazione per articolo</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tempo medio di vendita</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tasso di negoziazione</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Soddisfazione clienti (recensioni)</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                A/B Testing Costante
              </h3>
              <div className="space-y-2">
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Titoli diversi</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Prezzi accattivanti</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Orari di pubblicazione</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Stili fotografici</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 8: Trends */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Calendar className="w-8 h-8 text-vinted" />
            Capitolo 8: Tendenze Moda 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Top Tendenze 2025
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Revival Y2K intensificato", "Moda sostenibile", "Cottagecore romantico", "Tech wear urbano", "Ritorno indie sleaze"].map((trend) => (
                <div key={trend} className="bg-white border-2 border-black p-3">
                  <p className="font-body text-sm text-black">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30-Day Action Plan */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Piano d'Azione 30 Giorni
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">1</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Settimana 1</p>
              <p className="font-body text-xs text-gray-700">Audit completo degli annunci</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">2</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Settimana 2</p>
              <p className="font-body text-xs text-gray-700">Ottimizzazione titoli/descrizioni</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">3</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Settimana 3</p>
              <p className="font-body text-xs text-gray-700">Test prezzi e foto</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">4</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Settimana 4</p>
              <p className="font-body text-xs text-gray-700">Analisi e aggiustamenti</p>
            </div>
          </div>
        </section>

        {/* Guaranteed Results */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Risultati Garantiti
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+400%</p>
                <p className="font-body text-sm text-gray-700">Visualizzazioni medie</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">÷2</p>
                <p className="font-body text-sm text-gray-700">Tempo di vendita</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+60%</p>
                <p className="font-body text-sm text-gray-700">Carrello medio</p>
              </div>
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
                <span>Qual è la migliore strategia di prezzo su Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Usa prezzi psicologici (che terminano in 9 o 5), offri bundle e adatta in base alla condizione e al brand.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Come emergere tra 65 milioni di utenti?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Foto professionali con IA, titoli ottimizzati con parole chiave potenti, descrizioni con storytelling e servizio clienti reattivo.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Qual è il miglior titolo per un annuncio Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La formula vincente: MARCA + TIPO + DETTAGLIO UNICO + TAGLIA + CONDIZIONE. Es: "ZARA Vestito Blazer Nero Bottoni Oro Taglia M Condizioni Perfette"
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto a Dominare Vinted nel 2025?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Applica queste strategie ora e trasforma Vinted nella tua macchina da soldi!
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              INIZIA ORA
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
              to="/it/articles/5-consigli-vendere-velocemente-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Consigli per Vendere Più Velocemente</h3>
              <p className="font-body text-sm text-gray-600">Aumenta le tue vendite con questi consigli provati.</p>
            </Link>
            <Link
              to="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guida Completa Foto Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Tutte le tecniche per foto che vendono.</p>
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

export default StrategiaVenditaVinted2025Page;
