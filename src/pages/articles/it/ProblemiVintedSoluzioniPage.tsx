import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, AlertTriangle, HelpCircle, Lock, Trash2, CreditCard, Package, Users, XCircle, Euro, Headphones, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ProblemiVintedSoluzioniPage: React.FC = () => {
  useSEO({
    title: "Problemi Vinted: Soluzioni alle Domande Frequenti 2026 | VintDress",
    description: "Risolvi tutti i tuoi problemi su Vinted: accesso, account bloccato, articoli eliminati, pagamento, controversie. Guida completa alle soluzioni 2026.",
    keywords: "problemi vinted, aiuto vinted, supporto vinted, account bloccato vinted, controversia vinted, contattare vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop"
          alt="Problemi Vinted - Soluzioni e Aiuto"
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
            FAQ
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Problemi Vinted: Soluzioni alle Domande Frequenti 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Team VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min di lettura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Gennaio 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["problemi vinted", "aiuto vinted", "supporto", "controversie", "VintDress"].map((tag) => (
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
            Hai un problema su Vinted? Niente panico! In questa guida troverai le <strong className="text-vinted">soluzioni ai problemi più comuni</strong>: accesso impossibile, account bloccato, articoli eliminati, pagamento, controversie... Ogni situazione ha la sua soluzione.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="font-display font-bold text-xl text-black mb-4">Navigazione rapida</h2>
          <ul className="space-y-2 font-body text-black">
            <li><a href="#accesso" className="text-vinted hover:underline">1. Problemi di accesso</a></li>
            <li><a href="#account" className="text-vinted hover:underline">2. Account bloccato o sospeso</a></li>
            <li><a href="#articoli" className="text-vinted hover:underline">3. Articoli eliminati</a></li>
            <li><a href="#pagamento" className="text-vinted hover:underline">4. Problemi di pagamento</a></li>
            <li><a href="#spedizione" className="text-vinted hover:underline">5. Problemi di spedizione</a></li>
            <li><a href="#controversie" className="text-vinted hover:underline">6. Controversie acquirente/venditore</a></li>
            <li><a href="#annullare" className="text-vinted hover:underline">7. Annullare una transazione</a></li>
            <li><a href="#commissioni" className="text-vinted hover:underline">8. Commissioni e costi</a></li>
            <li><a href="#supporto" className="text-vinted hover:underline">9. Contattare il supporto Vinted</a></li>
          </ul>
        </div>

        {/* Section 1 - Problemi di accesso */}
        <section id="accesso" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Lock className="w-8 h-8 text-vinted" />
            Problemi di Accesso
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-black" />
                "Non riesco ad accedere"
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Verifica di usare l'indirizzo email corretto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Clicca su "Password dimenticata" per reimpostarla</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Disinstalla e reinstalla l'applicazione</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Prova ad accedere tramite il sito web</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Password dimenticata</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Vai alla schermata di accesso</li>
                <li><strong>2.</strong> Clicca su "Password dimenticata"</li>
                <li><strong>3.</strong> Inserisci la tua email</li>
                <li><strong>4.</strong> Controlla lo spam se non ricevi l'email</li>
                <li><strong>5.</strong> Clicca sul link e crea una nuova password</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 2 - Account bloccato */}
        <section id="account" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Account Bloccato o Sospeso
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Possibili motivi del blocco</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Violazione dei Termini di Servizio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Vendita di articoli vietati (contraffazioni, prodotti pericolosi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Comportamento sospetto o fraudolento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Multiple segnalazioni da altri utenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Tentativo di transazione fuori dalla piattaforma</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-vinted" />
                Come recuperare il tuo account
              </h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Contatta il supporto Vinted tramite il centro assistenza</li>
                <li><strong>2.</strong> Spiega con calma la tua situazione</li>
                <li><strong>3.</strong> Fornisci le prove richieste</li>
                <li><strong>4.</strong> Abbi pazienza (di solito 3-7 giorni)</li>
                <li><strong>5.</strong> Se rifiutato, puoi fare ricorso una volta</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3 - Articoli eliminati */}
        <section id="articoli" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-vinted" />
            Articoli Eliminati
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Perché Vinted elimina gli articoli</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Contraffazioni</strong>: articoli di marca sospetti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Foto non conformi</strong>: immagini dal web, watermark</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Categoria vietata</strong>: cosmetici, farmaci, ecc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prezzo irrealistico</strong>: troppo basso o troppo alto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Descrizione ingannevole</strong>: informazioni false</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Come evitare l'eliminazione</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Usa solo le tue foto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Descrivi onestamente lo stato dell'articolo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Fotografa l'etichetta per gli articoli di marca</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Controlla la lista degli articoli vietati</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Problemi di pagamento */}
        <section id="pagamento" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-vinted" />
            Problemi di Pagamento
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Pagamento rifiutato</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Verifica il saldo della tua carta</li>
                <li>• Prova con un'altra carta</li>
                <li>• Usa PayPal come alternativa</li>
                <li>• Contatta la tua banca (blocco di sicurezza)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Soldi bloccati</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Normale per 2 giorni dopo la consegna</li>
                <li>• Se c'è controversia: attendi la risoluzione</li>
                <li>• Verifica lo stato nel tuo portafoglio</li>
                <li>• Contatta il supporto se passano +5 giorni</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Bonifico non ricevuto</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Tempi normali: 3-5 giorni lavorativi</li>
                <li>• Verifica l'IBAN registrato</li>
                <li>• Assicurati di aver richiesto il bonifico</li>
                <li>• Contatta il supporto dopo 7 giorni</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Portafoglio non disponibile</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Verifica la tua identità se richiesto</li>
                <li>• Attendi la fine di eventuali controversie</li>
                <li>• Esci e accedi di nuovo</li>
                <li>• Aggiorna l'app</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Problemi di spedizione */}
        <section id="spedizione" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Package className="w-8 h-8 text-vinted" />
            Problemi di Spedizione
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Pacco smarrito</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Verifica il tracking del pacco (potrebbe essere in ritardo)</li>
                <li><strong>2.</strong> Attendi 14 giorni dalla spedizione</li>
                <li><strong>3.</strong> Apri una controversia nella transazione</li>
                <li><strong>4.</strong> Vinted indaga con il corriere</li>
                <li><strong>5.</strong> Rimborso automatico se confermato smarrito</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Pacco danneggiato</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Scatta foto PRIMA di aprire il pacco</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Segnala il problema entro 2 giorni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Apri una controversia con prove fotografiche</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Conserva il pacco se richiesto</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Controversie */}
        <section id="controversie" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Controversie Acquirente/Venditore
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Come aprire una controversia</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Vai su "I miei acquisti" o "Le mie vendite"</li>
                <li><strong>2.</strong> Seleziona la transazione interessata</li>
                <li><strong>3.</strong> Clicca su "Ho un problema"</li>
                <li><strong>4.</strong> Scegli il tipo di problema</li>
                <li><strong>5.</strong> Aggiungi foto e spiegazioni</li>
                <li><strong>6.</strong> Invia la controversia a Vinted</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Articolo non conforme</h3>
                <p className="font-body text-black text-sm mb-3">
                  L'articolo non corrisponde alla descrizione, ha difetti non menzionati o è una contraffazione.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Soluzione:</strong> Apri una controversia entro 2 giorni con foto comparative.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Articolo non ricevuto</h3>
                <p className="font-body text-black text-sm mb-3">
                  Il pacco non arriva nonostante lo stato "consegnato" o supera i tempi.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Soluzione:</strong> Attendi 14 giorni poi apri una controversia per indagine.
                </p>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vinted" />
                Protezione acquisti: cosa è coperto
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Articolo non ricevuto</li>
                <li>• Articolo significativamente diverso dalla descrizione</li>
                <li>• Contraffazione</li>
                <li>• Articolo danneggiato durante il trasporto</li>
              </ul>
              <p className="font-body text-black text-sm mt-4 italic">
                Nota: I disaccordi su taglia o colore (se ben descritti) generalmente non sono coperti.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 - Annullare transazione */}
        <section id="annullare" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Annullare una Transazione
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Come venditore</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Possibile prima di spedire il pacco</li>
                <li>• Vai nella conversazione con l'acquirente</li>
                <li>• Clicca su "Annulla ordine"</li>
                <li>• L'acquirente viene rimborsato automaticamente</li>
                <li>• Possibile impatto sulla reputazione se frequente</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Come acquirente</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Nessuna cancellazione diretta possibile</li>
                <li>• Chiedi al venditore di annullare</li>
                <li>• Se il venditore rifiuta, attendi la consegna</li>
                <li>• Puoi rifiutare il pacco al punto di ritiro</li>
                <li>• Apri una controversia se c'è un problema reale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 - Commissioni */}
        <section id="commissioni" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Euro className="w-8 h-8 text-vinted" />
            Commissioni e Costi
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-vinted" />
              Vinted prende commissioni?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              <strong className="text-vinted">NO per i venditori!</strong> Ricevi il 100% del prezzo di vendita. Questo è ciò che distingue Vinted dalle altre piattaforme.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Cosa paga l'acquirente</h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Protezione acquisti:</strong> 5% del prezzo + 0,70€</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Spedizione:</strong> Varia in base al corriere scelto</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Esempio:</strong> Articolo 20€ + Protezione 1,70€ + Spedizione 4,50€ = <strong>26,20€ totale</strong><br />
                Il venditore riceve: <strong>20€</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 - Contattare supporto */}
        <section id="supporto" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Headphones className="w-8 h-8 text-vinted" />
            Contattare il Supporto Vinted
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Tramite l'app</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Profilo → Impostazioni</li>
                <li><strong>2.</strong> Centro Assistenza</li>
                <li><strong>3.</strong> Cerca il tuo problema</li>
                <li><strong>4.</strong> Se non c'è soluzione → "Contattaci"</li>
                <li><strong>5.</strong> Compila il modulo dettagliato</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Consigli per essere aiutato rapidamente</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Spiega chiaramente il tuo problema in una frase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Aggiungi screenshot</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Indica il numero della transazione se applicabile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Abbi pazienza (tempo di risposta: 24-72h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Non inviare messaggi ripetuti (rallenta il processo)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Evita i problemi, vendi meglio!
          </h3>
          <p className="font-body text-white mb-6">
            Le foto di qualità professionale riducono le controversie e aumentano le tue vendite.
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREA LE MIE FOTO PRO
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
                Quanto dura una controversia Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                In media 3-7 giorni lavorativi. I casi complessi possono richiedere fino a 14 giorni. Vinted esamina le prove di entrambe le parti prima di decidere.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Posso recuperare un account bannato?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                A volte sì. Contatta il supporto con spiegazioni e prove. Hai diritto a un ricorso. Se il ban è permanente, non potrai creare un nuovo account (verifica dell'identità).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                I miei soldi sono bloccati, cosa devo fare?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                I soldi sono bloccati fino alla conferma dell'acquirente (2 giorni dopo la ricezione). Se c'è una controversia in corso, attendi la risoluzione. Se passano +5 giorni senza motivo, contatta il supporto.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Come evitare le truffe su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Non comunicare mai fuori dall'app, non accettare mai pagamenti esterni, diffida dei prezzi troppo bassi, verifica le recensioni di venditori/acquirenti e usa sempre il sistema di pagamento di Vinted.
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
              { slug: "pagamento-vinted-guida", title: "Pagamento Vinted: Guida" },
              { slug: "spedizione-vinted-guida", title: "Spedizione Vinted" },
              { slug: "come-funziona-vinted", title: "Come Funziona Vinted" }
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

export default ProblemiVintedSoluzioniPage;
