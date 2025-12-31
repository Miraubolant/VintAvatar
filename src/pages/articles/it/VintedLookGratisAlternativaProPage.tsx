import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedLookGratisAlternativaProPage: React.FC = () => {
  useSEO({
    title: "Look Vinted Gratis: L'Alternativa Pro Che Fa Davvero Vendere | VintDress",
    description: "Crea look professionali per Vinted che vendono. Scopri perché i migliori venditori scelgono VintDress invece degli strumenti gratuiti.",
    keywords: "look vinted gratis, look vinted, stile vinted, foto look vinted, creare look vinted, vinted stile gratis, outfit vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=500&fit=crop"
          alt="Look Professionale Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              LOOK VINTED GRATIS
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              L'Alternativa Pro Che Fa Davvero Vendere
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
            <span className="font-body text-sm text-gray-600">Di Team VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">26 dicembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min di lettura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Look Vinted Gratis: L'Alternativa Pro Che Fa Davvero Vendere
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Cerchi di creare look per Vinted gratis? Scopri perché un piccolo investimento può moltiplicare le tue vendite per 3.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Look Vinted", "Foto Vinted", "Stile Vinted", "Vendita online", "Moda"].map((tag) => (
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
        <div className="bg-vinted border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            Vuoi creare look professionali per i tuoi annunci Vinted senza spendere una fortuna? Hai cercato "look Vinted gratis" sperando di trovare la soluzione miracolosa. Ti daremo qualcosa di meglio: la verità su ciò che funziona davvero.
          </p>
        </div>

        {/* What is a Vinted Look */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Cos'è un "Look Vinted"?
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              Un <strong>look Vinted</strong> è una foto dove il tuo capo è presentato in modo attraente, idealmente indossato o abbinato. È ciò che fa la differenza tra:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">Una foto piatta che passa inosservata</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">Una foto stilosa che genera clic e vendite</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            Perché i Look Vendono
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VISUALIZZAZIONI SU VINTED</p>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">×3</div>
              <p className="font-display font-bold text-black text-sm">VENDITE PIÙ VELOCI</p>
            </div>
          </div>
        </section>

        {/* Free Options Reality */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Le Opzioni "Gratuite": La Realtà
          </h2>

          {/* Option 1 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Opzione 1: Chiedere a un Amico di Posare
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">VANTAGGI:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Gratis, autentico</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">SVANTAGGI:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Dipende dalla disponibilità</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Qualità variabile</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Tempo considerevole</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Impossibile scalare</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Opzione 2: App di Ritocco Gratuite
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">VANTAGGI:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Accessibili</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">SVANTAGGI:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Non creano manichini virtuali</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Risultati amatoriali visibili</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Tempo di ritocco importante</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Non adatto per foto indossate</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Opzione 3: IA Gratuite Online
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">VANTAGGI:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Nessun costo diretto</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">SVANTAGGI:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Qualità molto variabile</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Code di attesa interminabili</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Filigrane sulle immagini</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Deformazioni dei vestiti</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">I tuoi dati venduti</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Time Value Calculation */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-8 h-8 text-black flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  La Vera Domanda: Quanto Vale il Tuo Tempo?
                </h3>
                <p className="font-body text-gray-700 mb-4">
                  Immagina di passare <strong>2 ore</strong> a cercare uno strumento gratuito che funzioni, aspettare in coda, rifare generazioni fallite e ritoccare immagini di qualità mediocre.
                </p>
                <div className="bg-white border-3 border-black p-4 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-display font-bold text-black text-lg mb-2">
                    Se il tuo tempo vale 10€/ora = 20€ "spesi" per un risultato mediocre
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    Con VintDress a 3,99€, ottieni 10 foto professionali in 5 minuti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VintDress Features */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress: Il Look Pro Accessibile
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Feature 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Manichino IA Ultra-Realistico</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Tecnologia FLUX 2 Pro (usata dai brand di moda). Rendering fotorealistico impossibile da distinguere da una foto vera.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Personalizzazione Completa</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-2">
                Genere, morfologia (XS a XXL), carnagione (tutti i tipi), posa (frontale, profilo, dinamica), sfondo (studio pro, urbano, natura...).
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Qualità Pronta per Vinted</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Alta risoluzione, nessuna filigrana, download immediato, formato ottimizzato per Vinted.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">4</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Bonus: Descrizione IA</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Titolo ottimizzato per la ricerca e descrizione completa generata automaticamente.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              Il Processo in 30 Secondi
            </h3>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Carica la tua foto</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Configura il manichino</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Genera in un clic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">4</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Scarica e pubblica</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Confronto: Gratis vs VintDress
          </h2>
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Criterio</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Gratis</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Qualità</td>
                    <td className="p-4 text-center border-r-3 border-black">Variabile/Bassa</td>
                    <td className="p-4 text-center bg-mint font-semibold">Professionale</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Tempo</td>
                    <td className="p-4 text-center border-r-3 border-black">30min - 2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 secondi</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Affidabilità</td>
                    <td className="p-4 text-center border-r-3 border-black">Casuale</td>
                    <td className="p-4 text-center bg-mint font-semibold">Costante</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Personalizzazione</td>
                    <td className="p-4 text-center border-r-3 border-black">Limitata</td>
                    <td className="p-4 text-center bg-mint font-semibold">Totale</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Filigrana</td>
                    <td className="p-4 text-center border-r-3 border-black">Spesso</td>
                    <td className="p-4 text-center bg-mint font-semibold">Mai</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Supporto</td>
                    <td className="p-4 text-center border-r-3 border-black">Nessuno</td>
                    <td className="p-4 text-center bg-mint font-semibold">Reattivo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border-r-3 border-black bg-cream">Prezzo</td>
                    <td className="p-4 text-center border-r-3 border-black">0€ (+ il tuo tempo)</td>
                    <td className="p-4 text-center bg-mint font-bold text-vinted text-lg">0,40€/foto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonianze di Venditori
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Cercavo disperatamente uno strumento gratuito per i miei look Vinted. Dopo ore perse, ho provato VintDress. 3,99€ e 10 minuti dopo, avevo 10 foto che hanno generato 5 vendite in una settimana."
              </p>
              <p className="font-display font-bold text-black">— Giulia</p>
              <p className="font-body text-sm text-gray-600">Venditrice attiva</p>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Il gratis mi è costato vendite. Le mie foto erano mediocri, i miei articoli stagnavano. Da quando uso VintDress, vendo in media in 4 giorni invece di 3 settimane."
              </p>
              <p className="font-display font-bold text-black">— Marco</p>
              <p className="font-body text-sm text-gray-600">Venditore regolare</p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Investimento Più Redditizio
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Matematica Semplice
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Pack 10 foto</p>
                <p className="font-display font-bold text-2xl text-black">3,99€</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Prezzo medio articolo Vinted</p>
                <p className="font-display font-bold text-2xl text-black">18€</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Tasso di conversione</p>
                <p className="font-display font-bold text-2xl text-black">+200%</p>
              </div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Se UNA sola delle tue 10 foto genera UNA vendita in più = 14,51€ netti di guadagno
              </p>
            </div>
          </div>

          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              ROI Reale dei Nostri Utenti
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>+47% di vendite</strong> il primo mese</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Tempo di vendita diviso per 3</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Meno trattative</strong> sul prezzo</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              In Sintesi
            </h2>
            <p className="font-body text-gray-700 mb-4">
              Cercavi "look Vinted gratis"? Ecco cosa ricordare:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">1</span>
                </div>
                <span className="font-body text-gray-700">Il gratis esiste ma costa caro in tempo e vendite perse</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">2</span>
                </div>
                <span className="font-body text-gray-700">La qualità fa la differenza su una piattaforma così competitiva</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">3</span>
                </div>
                <span className="font-body text-gray-700">0,40€ per foto professionale è un investimento, non una spesa</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">4</span>
                </div>
                <span className="font-body text-gray-700">I venditori di successo capiscono questa equazione</span>
              </li>
            </ul>
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
                <span>Come creare un look Vinted gratis?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Le opzioni gratuite (chiedere a un amico, app di ritocco, IA gratuite) esistono ma hanno limitazioni importanti: qualità variabile, tempo considerevole, risultati spesso inutilizzabili per Vinted.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Perché i look professionali vendono meglio?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Le foto indossate professionali generano +300% di visualizzazioni e vendite 3 volte più veloci perché gli acquirenti visualizzano meglio come sta il capo.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quanto costa un look professionale con VintDress?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Solo 0,40€ per foto con il pack da 10 crediti a 3,99€. Un investimento ripagato dalla prima vendita aggiuntiva.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>VintDress è adatto ai principianti su Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sì, l'interfaccia è semplice: carica la tua foto, configura il manichino, genera in 30 secondi. Nessuna competenza tecnica richiesta.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto/a a Creare Look Che Vendono?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              VintDress ti permette di creare look professionali per i tuoi annunci Vinted a un prezzo accessibile. Nessun abbonamento obbligatorio, nessuna filigrana, nessun compromesso sulla qualità.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              CREA I MIEI LOOK PRO
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
              to="/it/articles/manichino-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Manichino IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Scopri come un manichino IA può trasformare le tue foto.</p>
            </Link>
            <Link
              to="/it/articles/ia-foto-vinted-gratis-vs-pagamento"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">IA Vinted Gratis: Perché Pagare</h3>
              <p className="font-body text-sm text-gray-600">Capisci perché investire in qualità fa la differenza.</p>
            </Link>
            <Link
              to="/it/articles/5-trucchi-vendere-piu-veloce-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Trucchi per Vendere Più Veloce</h3>
              <p className="font-body text-sm text-gray-600">Ottimizza le tue vendite con queste strategie collaudate.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VintedLookGratisAlternativaProPage;
