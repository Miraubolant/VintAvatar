import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Gift, Users, Share2, CreditCard, Star, CheckCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function CreditiGratutiVintDressPage() {
  useSEO({
    title: "Crediti Gratuiti VintDress: Come Usare l'IA di Vinted Gratis | VintDress",
    description: "Scopri come ottenere crediti gratuiti su VintDress: programma referral e condivisione in galleria. Usa il manichino IA di Vinted senza pagare.",
    keywords: "ia vinted gratis, manichino ia gratis vinted, crediti gratuiti vintdress, referral vinted ia, foto vinted gratis ia",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
          alt="Crediti gratuiti VintDress"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold mb-6">
            <span className="px-4 py-2 bg-vinted text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Consiglio
            </span>
            <time className="text-gray-600">6 Febbraio 2026</time>
            <span className="text-gray-600">5 min di lettura</span>
          </div>

          <h1 className="font-space-grotesk font-bold text-4xl lg:text-5xl mb-6 leading-tight">
            Crediti Gratuiti VintDress: 2 Metodi per Usare l'IA di Vinted senza Pagare
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed">
            Vuoi creare foto professionali con l'IA per i tuoi annunci Vinted ma senza spendere un euro? VintDress ti offre due metodi semplici per ottenere crediti gratuiti e utilizzare il manichino IA virtuale senza pagare. Scopri come massimizzare le tue foto Vinted con l'intelligenza artificiale senza costi.
          </p>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            VintDress e il suo <Link to="/it/articles/manichino-ia-vinted" className="text-vinted hover:underline font-semibold">manichino IA per Vinted</Link> permettono di trasformare le tue foto di vestiti in immagini professionali con modelli virtuali. Ma sapevi che puoi usare questo servizio gratuitamente? Ecco due metodi concreti per accumulare crediti gratis e beneficiare dell'IA di Vinted senza spendere nulla.
          </p>
        </div>

        {/* Metodo 1 - Programma Referral */}
        <section className="mb-16">
          <div className="bg-mint border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Users className="w-8 h-8 text-vinted" />
              </div>
              <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl">
                Metodo 1: Programma Referral
              </h2>
            </div>

            <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <Gift className="w-8 h-8 text-vinted flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-space-grotesk font-bold text-xl mb-3">+1 credito per te e il tuo amico</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Il programma referral di VintDress ti permette di guadagnare crediti gratuiti invitando i tuoi amici. Ogni volta che un amico si registra tramite il tuo link e effettua il suo primo acquisto, ricevete entrambi 1 credito gratuito.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-space-grotesk font-bold text-2xl mb-6">Come funziona il referral VintDress?</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white border-3 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-8 h-8 bg-vinted border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Accedi al tuo account VintDress</h4>
                  <p className="text-gray-700">
                    Vai alla sezione "Affiliazione" nel tuo profilo utente per ottenere il tuo codice referral personale.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border-3 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-8 h-8 bg-vinted border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Condividi il tuo link unico</h4>
                  <p className="text-gray-700">
                    Invia il tuo link referral ai tuoi amici venditori Vinted, sui social network, o nelle community di venditori online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border-3 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-8 h-8 bg-vinted border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ricevi i tuoi crediti automaticamente</h4>
                  <p className="text-gray-700">
                    Quando il tuo amico effettua il suo primo acquisto di crediti, ricevete entrambi 1 credito gratuito istantaneamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Consiglio Pro</h4>
                  <p className="text-gray-700">
                    Condividi il tuo link nei gruppi Facebook di venditori Vinted, su Instagram con l'hashtag #VintedFrance, o direttamente nei tuoi annunci Vinted. Piu condividi, piu crediti accumuli!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4">
              <Star className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-space-grotesk font-bold text-xl mb-3">Vantaggio: crediti illimitati</h3>
                <p className="text-gray-700 leading-relaxed">
                  Non c'e limite al numero di amici che puoi invitare. Piu persone inviti, piu crediti gratuiti accumuli per creare foto professionali con l'IA di Vinted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metodo 2 - Condivisione Galleria */}
        <section className="mb-16">
          <div className="bg-pink-pastel border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Share2 className="w-8 h-8 text-vinted" />
              </div>
              <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl">
                Metodo 2: Condivisione in Galleria
              </h2>
            </div>

            <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-vinted flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-space-grotesk font-bold text-xl mb-3">+1 credito per condivisione (max 2)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Condividi le tue migliori creazioni IA nella galleria pubblica di VintDress e guadagna 1 credito gratuito per ogni foto condivisa. Puoi condividere fino a 2 foto per ottenere 2 crediti gratuiti.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-space-grotesk font-bold text-2xl mb-6">Come guadagnare crediti con la galleria?</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white border-3 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-8 h-8 bg-vinted border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Genera una foto con l'IA</h4>
                  <p className="text-gray-700">
                    Utilizza VintDress per creare una foto professionale del tuo vestito con il manichino IA virtuale.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border-3 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-8 h-8 bg-vinted border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Condividi nella galleria pubblica</h4>
                  <p className="text-gray-700">
                    Dopo la generazione, clicca sul pulsante "Condividi nella Galleria" per rendere la tua foto pubblica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border-3 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-8 h-8 bg-vinted border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ricevi il tuo credito immediatamente</h4>
                  <p className="text-gray-700">
                    Il tuo credito gratuito viene aggiunto automaticamente al tuo account. Puoi condividere fino a 2 foto per ottenere 2 crediti.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Consiglio Pro</h4>
                  <p className="text-gray-700">
                    Scegli le tue migliori trasformazioni prima/dopo per impressionare la community. Le foto di qualita ispirano altri venditori e valorizzano il tuo contributo alla galleria VintDress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4">
              <Star className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-space-grotesk font-bold text-xl mb-3">Vantaggio: ispira la community</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oltre ai crediti gratuiti, condividere nella galleria ti permette di mostrare i tuoi risultati, ispirare altri venditori Vinted e partecipare alla community VintDress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabella Riepilogativa */}
        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-8">
            Riepilogo: Come Ottenere Crediti Gratuiti VintDress
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <thead>
                <tr className="bg-vinted text-white border-b-4 border-black">
                  <th className="py-4 px-6 text-left font-space-grotesk font-bold border-r-4 border-black">
                    Metodo
                  </th>
                  <th className="py-4 px-6 text-left font-space-grotesk font-bold border-r-4 border-black">
                    Crediti Guadagnati
                  </th>
                  <th className="py-4 px-6 text-left font-space-grotesk font-bold border-r-4 border-black">
                    Limite
                  </th>
                  <th className="py-4 px-6 text-left font-space-grotesk font-bold">
                    Difficolta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-3 border-black">
                  <td className="py-4 px-6 font-semibold border-r-3 border-black">
                    Programma Referral
                  </td>
                  <td className="py-4 px-6 border-r-3 border-black">
                    +1 credito per invito
                  </td>
                  <td className="py-4 px-6 border-r-3 border-black">
                    Illimitato
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-mint border-2 border-black text-sm font-semibold">
                      Facile
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold border-r-3 border-black">
                    Condivisione Galleria
                  </td>
                  <td className="py-4 px-6 border-r-3 border-black">
                    +1 credito per foto
                  </td>
                  <td className="py-4 px-6 border-r-3 border-black">
                    Max 2 foto
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-mint border-2 border-black text-sm font-semibold">
                      Molto facile
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4">
              <CreditCard className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-space-grotesk font-bold text-xl mb-3">Calcolo del potenziale</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Combinando questi due metodi, puoi facilmente ottenere i tuoi primi crediti gratuiti:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>2 crediti</strong> condividendo 2 foto nella galleria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>3 crediti</strong> invitando 3 amici venditori Vinted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Totale: 5 crediti gratuiti</strong> senza spendere nulla!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-8">
            Gratis vs Pagamento: Quale Scegliere?
          </h2>

          <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              I crediti gratuiti sono perfetti per testare VintDress e creare le tue prime foto IA per Vinted. Se hai bisogno di piu generazioni per il tuo inventario, i pacchetti a pagamento offrono un miglior rapporto qualita/prezzo:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-3 border-black p-6 bg-grain">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">Crediti Gratuiti</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Ideale per testare il servizio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Nessun impegno finanziario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Perfetto per venditori occasionali</span>
                  </li>
                </ul>
              </div>

              <div className="border-3 border-black p-6 bg-vinted text-white">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">Pacchetti a Pagamento</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <span>Miglior rapporto qualita/prezzo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <span>Crediti disponibili immediatamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <span>Ideale per inventari grandi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/it/articles/ia-foto-vinted-gratis-vs-pagamento"
                className="inline-flex items-center gap-2 text-vinted hover:underline font-semibold"
              >
                Confronta tutte le opzioni gratis vs pagamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-vinted border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 text-white">
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-6">
              Inizia a Usare l'IA di Vinted Gratis Oggi
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Approfitta del programma referral e della condivisione in galleria per ottenere i tuoi primi crediti gratuiti. Testa la potenza dell'IA di Vinted senza spendere un euro!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/tarifs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-space-grotesk font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Scopri i Nostri Prezzi
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/galerie"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-pastel text-black border-3 border-black font-space-grotesk font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Visita la Galleria
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-space-grotesk font-bold text-2xl mb-6">Conclusione</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VintDress ti offre due metodi semplici ed efficaci per utilizzare il <Link to="/it/articles/manichino-ia-vinted" className="text-vinted hover:underline font-semibold">manichino IA di Vinted</Link> gratuitamente. Che tu preferisca invitare amici tramite il programma referral o condividere le tue creazioni nella galleria pubblica, ogni metodo ti permette di accumulare crediti gratuiti per creare foto professionali.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il vantaggio principale? Puoi testare la qualita dell'IA senza alcun rischio finanziario. E se sei soddisfatto dei risultati, potrai sempre optare per un pacchetto a pagamento per beneficiare di un miglior rapporto qualita/prezzo e crediti illimitati.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Inizia oggi stesso e trasforma le tue foto Vinted con l'intelligenza artificiale, senza spendere un euro!
            </p>
          </div>
        </section>

        {/* Article Navigation */}
        <ArticleNavigation language="it" />
      </article>
    </div>
  );
}
