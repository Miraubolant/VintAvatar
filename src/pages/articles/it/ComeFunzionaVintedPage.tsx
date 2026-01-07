import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, Smartphone, Shield, Star, ArrowRight, Users, ShoppingBag, CreditCard, Search, Heart } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ComeFunzionaVintedPage: React.FC = () => {
  useSEO({
    title: "Vinted: Come Funziona? Guida per Principianti 2026 | VintDress",
    description: "Scopri come funziona Vinted nel 2026. Guida completa per principianti: creare account, comprare, vendere, pagamento e sicurezza.",
    keywords: "come funziona vinted, vinted principiante, creare account vinted, app vinted, guida vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop"
          alt="Vinted Come Funziona - Guida per Principianti"
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
            Vinted: Come Funziona? Guida per Principianti 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Team VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min di lettura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Gennaio 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vinted principiante", "creare account", "app vinted", "guida completa", "VintDress"].map((tag) => (
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
            Hai sentito parlare di Vinted ma non sai davvero come funziona? Sei nel posto giusto! Vinted è <strong className="text-vinted">la piattaforma N°1</strong> per comprare e vendere vestiti di seconda mano in Europa, con oltre <strong>80 milioni di utenti</strong>. In questa guida, scoprirai tutto quello che devi sapere per iniziare.
          </p>
        </div>

        {/* Section 1 - Cos'è Vinted */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cos'è Vinted?
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-vinted" />
              Il Marketplace della Moda
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Vinted è un'app e un sito web che ti permette di:
            </p>
            <ul className="space-y-2 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Vendere</strong> i tuoi vestiti, scarpe e accessori che non indossi più</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Comprare</strong> articoli di seconda mano a prezzi ridotti</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Scambiare</strong> direttamente con altri utenti</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">80M+</p>
              <p className="font-body text-black">Utenti</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">20+</p>
              <p className="font-body text-black">Paesi</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">0%</p>
              <p className="font-body text-black">Commissione Venditore</p>
            </div>
          </div>
        </section>

        {/* Section 2 - Vinted è gratuito */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vinted è Gratuito?
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Per i Venditori: 100% GRATIS
              </h3>
              <p className="font-body text-black leading-relaxed">
                Vinted non prende <strong className="text-vinted">nessuna commissione</strong> sulle tue vendite. Ricevi il 100% del prezzo di vendita. Questo è ciò che differenzia Vinted da piattaforme come Vestiaire Collective o eBay.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Per gli Acquirenti: Protezione a Pagamento
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                L'acquirente paga una "Protezione acquisti" che include:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>5% del prezzo</strong> dell'articolo + 0,70€ fissi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Rimborso se l'articolo non corrisponde</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Protezione contro le truffe</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Creare account */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Creare il tuo Account Passo dopo Passo
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-vinted" />
                  Scarica l'App
                </h3>
                <p className="font-body text-black">
                  Disponibile su iOS (App Store) e Android (Google Play). Puoi anche usare il sito web vinted.it.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Iscriviti
                </h3>
                <p className="font-body text-black">
                  Con la tua email, o tramite Google, Facebook o Apple. È istantaneo e gratuito.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Completa il tuo Profilo
                </h3>
                <p className="font-body text-black">
                  Aggiungi una foto profilo, una bio e verifica il tuo numero di telefono. Un profilo completo ispira fiducia!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Verifica la tua Identità (Consigliato)
                </h3>
                <p className="font-body text-black">
                  Opzionale ma consigliato per sbloccare tutte le funzionalità e rassicurare gli altri utenti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - L'interfaccia */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Interfaccia di Vinted Spiegata
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-vinted" />
                Ricerca e Filtri
              </h3>
              <p className="font-body text-black">
                Cerca per parola chiave, marca, taglia, colore, condizione, prezzo... I filtri sono molto potenti per trovare esattamente quello che cerchi.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-vinted" />
                Preferiti
              </h3>
              <p className="font-body text-black">
                Aggiungi articoli ai preferiti per trovarli facilmente. Verrai avvisato se il prezzo scende!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-vinted" />
                Il Mio Armadio
              </h3>
              <p className="font-body text-black">
                È il tuo negozio personale. Tutti i tuoi articoli in vendita sono raggruppati qui. Curalo come una vetrina!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-vinted" />
                Portafoglio
              </h3>
              <p className="font-body text-black">
                I soldi delle tue vendite arrivano qui. Puoi trasferirli sul tuo conto bancario o usarli per comprare su Vinted.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Come vendere */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Come Funziona per Vendere
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">I 5 Passaggi Chiave</h3>
            <ol className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">1.</span>
                <span>Scatta foto di qualità del tuo articolo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">2.</span>
                <span>Crea un annuncio con titolo, descrizione e prezzo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">3.</span>
                <span>Aspetta che un acquirente compri o faccia un'offerta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">4.</span>
                <span>Spedisci il pacco con l'etichetta prepagata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">5.</span>
                <span>Ricevi i soldi nel tuo portafoglio Vinted</span>
              </li>
            </ol>
          </div>

          <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              Consiglio VintDress
            </h3>
            <p className="font-body text-white leading-relaxed mb-4">
              Le <strong>foto su manichino IA</strong> aumentano le tue visualizzazioni del 300%. Trasforma le tue foto in 30 secondi con VintDress!
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROVA VINTDRESS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 6 - Come comprare */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Come Funziona per Comprare
          </h2>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ol className="space-y-4 font-body text-black">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">1</span>
                <div>
                  <strong>Trova un articolo</strong> - Usa la ricerca e i filtri per trovare quello che cerchi
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">2</span>
                <div>
                  <strong>Verifica il venditore</strong> - Guarda le recensioni, il numero di vendite, l'anzianità dell'account
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">3</span>
                <div>
                  <strong>Compra o fai un'offerta</strong> - Puoi negoziare il prezzo con il venditore
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">4</span>
                <div>
                  <strong>Paga online</strong> - Carta di credito, PayPal, Apple Pay...
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">5</span>
                <div>
                  <strong>Ricevi e conferma</strong> - Hai 2 giorni per confermare o segnalare un problema
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 7 - Vinted è affidabile */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vinted è Affidabile?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Protezioni Vinted
            </h3>
            <ul className="space-y-4 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Protezione acquirente</strong>: Se l'articolo non corrisponde alla descrizione o non arriva, vieni rimborsato.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Pagamento sicuro</strong>: I soldi sono bloccati fino a quando l'acquirente conferma la ricezione.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Recensioni</strong>: Le valutazioni degli altri utenti ti aiutano a identificare venditori affidabili.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Assistenza clienti</strong>: Un team è disponibile per risolvere le controversie.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Pronto a Iniziare su Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Ora che sai come funziona, potenzia le tue vendite con foto professionali!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREA LE MIE FOTO
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Domande Frequenti
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                L'app Vinted è gratuita?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sì, l'app è 100% gratuita da scaricare e usare. Vinted non prende commissioni sulle vendite. Solo gli acquirenti pagano una protezione (5% + 0,70€).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Come creo un account Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Scarica l'app su iOS o Android, clicca su "Iscriviti" e usa la tua email o un account Google/Facebook/Apple. È istantaneo!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Vinted è sicuro?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sì, Vinted offre una protezione acquirente che ti rimborsa se l'articolo non corrisponde. Il pagamento è sicuro e i soldi sono bloccati fino alla conferma della ricezione.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quanto si può guadagnare su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Dipende da cosa vendi! Alcuni venditori guadagnano qualche decina di euro al mese, altri diverse centinaia. Con buone foto e prezzi competitivi, puoi vendere velocemente.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articoli Correlati
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "come-vendere-su-vinted", title: "Come Vendere su Vinted" },
              { slug: "come-comprare-su-vinted", title: "Come Comprare su Vinted" },
              { slug: "pagamento-vinted-guida", title: "Pagamento Vinted: Guida" }
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

export default ComeFunzionaVintedPage;
