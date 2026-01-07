import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CreditCard, Wallet, ArrowRight, CheckCircle, AlertTriangle, Euro, Clock3, Shield, Smartphone } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

const PagamentoVintedGuidaPage: React.FC = () => {
  useSEO({
    title: "Pagamento Vinted: Come Ricevere e Prelevare i Soldi | VintDress",
    description: "Guida completa al sistema di pagamento Vinted. Portafoglio, metodi di pagamento, tempi di trasferimento e come prelevare i tuoi soldi.",
    keywords: "pagamento vinted, portafoglio vinted, prelevare soldi vinted, bonifico vinted, come ricevere soldi vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=400&fit=crop"
          alt="Guida completa pagamento Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        <ArticleNavigation />

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-vinted text-white border-3 border-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            GUIDA
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Pagamento Vinted: Come Ricevere e Prelevare i Soldi
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Team VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min di lettura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Gennaio 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["pagamento vinted", "portafoglio", "prelevare soldi", "bonifico", "PayPal"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            Hai appena fatto la tua prima vendita su Vinted? Congratulazioni! Ma come recuperare i tuoi soldi? In questa guida completa, ti spieghiamo tutto sul sistema di pagamento Vinted: dal portafoglio al bonifico bancario, passando per i tempi e le commissioni. <strong className="text-vinted">Spoiler: è 100% gratuito per i venditori!</strong>
          </p>
        </div>

        {/* Section 1 - Payment methods */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Metodi di Pagamento Accettati (Acquirente)
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Quando acquisti su Vinted, hai diverse opzioni di pagamento disponibili. Ecco i metodi accettati:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Carta di credito/debito
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Visa, Mastercard, Maestro... Pagamento istantaneo e sicuro. Il metodo più utilizzato su Vinted.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  PayPal
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Collega il tuo account PayPal per pagare in un clic. Protezione acquirente inclusa.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Apple Pay / Google Pay
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Pagamento mobile veloce dal tuo smartphone. Ideale per acquistare in pochi secondi.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Saldo Vinted
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Usa i soldi delle tue vendite direttamente per comprare. Puoi combinare saldo + carta.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Vinted Wallet */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Il Portafoglio Vinted
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              Come Funziona?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Il portafoglio Vinted è un portafoglio virtuale integrato nell'app. Quando vendi un articolo, i soldi vengono prima accreditati sul tuo portafoglio Vinted prima che tu possa trasferirli sul tuo conto bancario.
            </p>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Sicuro:</strong> I soldi sono protetti fino alla convalida della transazione</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Accessibile:</strong> Visibile nella scheda "Portafoglio" dell'app</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Flessibile:</strong> Usalo per comprare o trasferiscilo sul tuo conto</span>
              </li>
            </ul>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Dove Vedere il Tuo Saldo?
            </h3>
            <ol className="font-body text-black space-y-2">
              <li>1. Apri l'app Vinted</li>
              <li>2. Vai al tuo profilo (icona in basso a destra)</li>
              <li>3. Clicca su "Portafoglio" o "Saldo"</li>
              <li>4. Vedrai il tuo saldo disponibile e lo storico delle transazioni</li>
            </ol>
          </div>
        </section>

        {/* Section 3 - Payment lifecycle */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Ciclo di Vita di un Pagamento
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Quando qualcuno compra il tuo articolo, ecco cosa succede passo dopo passo:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Acquisto dell'acquirente
                </h3>
                <p className="font-body text-black">
                  L'acquirente paga il prezzo dell'articolo + le commissioni di protezione. <strong>I soldi vengono bloccati</strong> da Vinted in attesa della spedizione.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Spedizione del pacco
                </h3>
                <p className="font-body text-black">
                  Stampi l'etichetta, impacchetti l'articolo e depositi il pacco. Lo stato cambia in "In transito".
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Ricezione da parte dell'acquirente
                </h3>
                <p className="font-body text-black">
                  L'acquirente riceve il pacco. Ha poi <strong>2 giorni</strong> per convalidare l'ordine o segnalare un problema.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-mint text-black border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-mint border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Soldi disponibili!
                </h3>
                <p className="font-body text-black">
                  Se l'acquirente convalida (o dopo 2 giorni automaticamente), <strong>i soldi vengono accreditati sul tuo portafoglio</strong>. Ora puoi prelevarli!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Withdraw money */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Come Prelevare i Tuoi Soldi
          </h2>

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              Passaggi per Trasferire sul Tuo Conto Bancario
            </h3>
            <ol className="font-body text-black space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">1</span>
                <span>Vai su <strong>Portafoglio</strong> dal tuo profilo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">2</span>
                <span>Clicca su <strong>"Trasferisci"</strong> o <strong>"Preleva"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">3</span>
                <span>Aggiungi il tuo IBAN se non lo hai già fatto</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">4</span>
                <span>Conferma l'importo da trasferire</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-mint text-black border-2 border-black font-display font-bold flex items-center justify-center text-sm">5</span>
                <span>Attendi <strong>3-5 giorni lavorativi</strong> per ricevere i soldi</span>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Clock3 className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Tempi di Trasferimento
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- <strong>3-5 giorni lavorativi</strong> in media</li>
                <li>- Può variare a seconda della tua banca</li>
                <li>- Nessun trasferimento nei weekend</li>
                <li>- Gratuito e senza minimo</li>
              </ul>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Usa il Tuo Saldo
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- Compra direttamente su Vinted</li>
                <li>- Combina saldo + carta di credito</li>
                <li>- Nessun tempo di attesa</li>
                <li>- Ideale se compri spesso</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Fees */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Commissioni e Costi
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-vinted" />
              Buone notizie: 0% di commissione per i venditori!
            </h3>
            <p className="font-body text-black leading-relaxed">
              Vinted non prende <strong>nessuna commissione sulle tue vendite</strong>. Se vendi un articolo per 20€, ricevi 20€ nel tuo portafoglio. L'acquirente paga le commissioni di protezione.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Cosa Paga l'Acquirente
            </h3>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Protezione Acquirente:</strong> 5% del prezzo + 0,70€ fissi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Spese di spedizione:</strong> Variabili a seconda del corriere scelto</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Esempio:</strong> Per un articolo da 20€, l'acquirente pagherà 20€ + 1,70€ (protezione) + spedizione = circa 25-27€ in totale.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Domande Frequenti
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quanto tempo per ricevere i soldi dopo una vendita?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Dopo la convalida dell'acquirente (o 2 giorni automatici), i soldi arrivano nel tuo portafoglio. Poi conta 3-5 giorni lavorativi per il bonifico bancario.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                C'è un importo minimo per prelevare?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No, puoi prelevare da 0,01€! Non c'è importo minimo su Vinted.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Posso ricevere i soldi su PayPal?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No, i trasferimenti si fanno solo su conto bancario (IBAN). PayPal è accettato solo per i pagamenti, non per i prelievi.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Devo dichiarare i miei guadagni Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Se vendi oggetti personali occasionalmente, generalmente non sei tassabile. Ma se compri per rivendere o superi certe soglie, potresti dover dichiarare. Consulta le regole fiscali del tuo paese.
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <Shield className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Pronto a Vendere su Vinted?
          </h3>
          <p className="font-body text-white mb-6 max-w-xl mx-auto">
            Ora che hai padroneggiato i pagamenti, aumenta le tue vendite con foto professionali grazie a VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREA LE MIE FOTO
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articoli Correlati
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "come-fare-foto-vinted", title: "Come Fare Belle Foto" },
              { slug: "foto-indossate-vinted", title: "Foto Indossate Vinted" },
              { slug: "algoritmo-vinted-visibilita-2025", title: "Algoritmo Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/it/articles/${article.slug}`}
                className="block bg-pink-pastel border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mb-2 text-vinted" />
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default PagamentoVintedGuidaPage;
