import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  Search,
  Eye,
  UserCheck,
  MessageSquare,
  ShoppingCart,
  MapPin,
  Package,
  Shield,
  AlertTriangle,
  CheckCircle,
  Star,
  CreditCard,
  Clock,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';

export default function ComeComprareSuVintedPage() {
  useSEO({
    title: 'Come Comprare su Vinted: Guida Completa Acquirente 2026',
    description: 'Guida completa per comprare su Vinted: trovare offerte, fare offerte, pagamento sicuro e protezione acquirente.',
    keywords: 'comprare vinted, acquisto vinted, come comprare vinted, offerta vinted, acquirente vinted, affari vinted',
    canonicalUrl: 'https://vintdress.com/it/articles/come-comprare-su-vinted',
    ogImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-cream">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              GUIDA
            </span>
            <span className="text-gray-600 font-medium">9 min di lettura</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Come Comprare su Vinted: Guida Completa Acquirente 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Vuoi trovare affari su Vinted ma non sai da dove iniziare?
            Questa guida ti mostra come trovare i pezzi migliori, negoziare in modo intelligente
            e acquistare in sicurezza.
          </p>

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop"
            alt="Shopping su Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">In questo articolo</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#trovare" className="hover:text-vinted transition-colors">1. Trovare l'articolo giusto</a></li>
            <li><a href="#analizzare" className="hover:text-vinted transition-colors">2. Analizzare un annuncio</a></li>
            <li><a href="#verificare" className="hover:text-vinted transition-colors">3. Verificare il venditore</a></li>
            <li><a href="#offerta" className="hover:text-vinted transition-colors">4. Fare un'offerta</a></li>
            <li><a href="#processo" className="hover:text-vinted transition-colors">5. Processo di acquisto</a></li>
            <li><a href="#mano" className="hover:text-vinted transition-colors">6. Ritiro di persona</a></li>
            <li><a href="#ricezione" className="hover:text-vinted transition-colors">7. Ricezione e validazione</a></li>
            <li><a href="#protezione" className="hover:text-vinted transition-colors">8. Protezione acquirente</a></li>
            <li><a href="#problemi" className="hover:text-vinted transition-colors">9. Problemi comuni</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">Perché comprare su Vinted?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Risparmia fino al 90%</strong> sui prezzi di negozio</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Moda sostenibile</strong>: dai una seconda vita ai vestiti</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Pezzi unici</strong>: vintage, edizioni limitate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Protezione acquirente</strong>: rimborso garantito</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1 */}
        <section id="trovare" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Trovare l'articolo giusto</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Con milioni di articoli su Vinted, saper cercare efficacemente è essenziale.
              Ecco come trovare esattamente quello che cerchi.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Usa i filtri efficacemente</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Categoria:</strong> Donna, Uomo, Bambini, Casa...</li>
                <li><strong>Taglia:</strong> Sii preciso con la tua taglia abituale</li>
                <li><strong>Marca:</strong> Cerca per marca specifica</li>
                <li><strong>Condizione:</strong> Nuovo, Ottimo, Buono, Discreto</li>
                <li><strong>Prezzo:</strong> Imposta un budget min/max</li>
                <li><strong>Colore:</strong> Filtra per colore desiderato</li>
                <li><strong>Posizione:</strong> Per ritiro di persona</li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Consigli di ricerca pro</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Salva le tue ricerche:</strong> Attiva le notifiche</li>
                <li><strong>Segui i venditori:</strong> Segui quelli con buon stile</li>
                <li><strong>Parole chiave precise:</strong> "Zara blazer nero taglia M"</li>
                <li><strong>Variazioni ortografiche:</strong> Cerca anche gli errori comuni</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="analizzare" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Analizzare un annuncio</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Prima di comprare, prenditi il tempo per esaminare l'annuncio in dettaglio.
              Una buona analisi ti evita sorprese.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Verificare le foto</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Foto chiare e ben illuminate</li>
                  <li>Più angolazioni (fronte, retro, dettagli)</li>
                  <li>Foto dei difetti menzionati</li>
                  <li>Etichetta visibile (taglia, composizione)</li>
                  <li>Foto reali (non di stock)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Leggere la descrizione</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Condizione reale dettagliata</li>
                  <li>Misure precise (se disponibili)</li>
                  <li>Motivo della vendita</li>
                  <li>Difetti onestamente menzionati</li>
                  <li>Materiale e cura</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">Non esitare a chiedere!</h4>
                  <p className="text-gray-700">
                    Se mancano informazioni, contatta il venditore. Chiedi foto aggiuntive,
                    misure esatte o le condizioni di certi dettagli. Un buon venditore risponderà velocemente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="verificare" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Verificare il venditore</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Il profilo del venditore dice molto sull'affidabilità della transazione.
              Ecco gli indicatori da verificare.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Indicatori di fiducia</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span><strong>Valutazioni:</strong> Media voti (punta a 4.5+)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-vinted" />
                  <span><strong>Vendite:</strong> Numero di transazioni riuscite</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span><strong>Anzianità:</strong> Tempo su Vinted</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span><strong>Reattività:</strong> Tempo medio di risposta</span>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Campanelli d'allarme</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Account nuovo senza valutazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Molte valutazioni negative recenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Non risponde ai messaggi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Prezzi troppo belli per essere veri (contraffazioni)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Chiede pagamento fuori Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="offerta" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Fare un'offerta</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Negoziare fa parte di Vinted! Ma ci sono regole da seguire
              per una negoziazione di successo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Quando negoziare</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Articolo online da tempo</li>
                  <li>Prezzo sopra il mercato</li>
                  <li>Piccolo difetto menzionato</li>
                  <li>Acquisto di più articoli</li>
                </ul>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Quando comprare diretto</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Prezzo già molto attraente</li>
                  <li>Articolo molto richiesto</li>
                  <li>Molti "preferiti"</li>
                  <li>"Prezzo fisso" nell'annuncio</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Regole d'oro della negoziazione</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Sii educato:</strong> "Ciao, sarebbe possibile fare X€?"</li>
                <li><strong>2. Sii ragionevole:</strong> 10-20% di sconto massimo</li>
                <li><strong>3. Giustifica la tua offerta:</strong> "Ho visto un articolo simile a questo prezzo"</li>
                <li><strong>4. Proponi un bundle:</strong> "Prendo entrambi se fai un prezzo"</li>
                <li><strong>5. Accetta il rifiuto:</strong> Non negoziare all'infinito</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="processo" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Processo di acquisto</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">1</span>
                  <h3 className="font-display font-bold text-xl">Clicca "Acquista"</h3>
                </div>
                <p className="text-gray-700">
                  Clicca sul pulsante "Acquista" sull'annuncio. Puoi anche accettare un'offerta
                  del venditore o fare una controfferta.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">2</span>
                  <h3 className="font-display font-bold text-xl">Scegli la spedizione</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Seleziona il tuo metodo di spedizione preferito:
                </p>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>Punto di ritiro</li>
                  <li>Consegna a domicilio</li>
                  <li>Spedizione express</li>
                  <li>Ritiro di persona</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">3</span>
                  <h3 className="font-display font-bold text-xl">Pagamento sicuro</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Paga con il tuo metodo di pagamento preferito:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Carta</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">PayPal</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Apple Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Google Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Saldo Vinted</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">4</span>
                  <h3 className="font-display font-bold text-xl">Tracciamento ordine</h3>
                </div>
                <p className="text-gray-700">
                  Segui la spedizione nell'app. Riceverai notifiche ad ogni fase:
                  spedito, in transito, consegnato. Il venditore ha 5 giorni per spedire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="mano" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Ritiro di persona</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Il ritiro di persona evita le spese di spedizione, ma richiede alcune precauzioni.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Vantaggi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Nessun costo di spedizione</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Vedere l'articolo prima di comprare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Transazione immediata</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Provarlo se possibile</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Precauzioni di sicurezza</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Luogo pubblico e frequentato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Di giorno preferibilmente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Avvisa qualcuno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Verifica l'articolo sul posto</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Luoghi consigliati</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Stazione</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Centro commerciale</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Bar</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Metro/Bus</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Piazza pubblica</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="ricezione" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Ricezione e validazione</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Alla ricezione del pacco</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Controlla l'imballaggio:</strong> Pacco danneggiato? Annotalo prima di aprire</li>
                <li><strong>2. Filma l'apertura:</strong> In caso di disputa, è una prova</li>
                <li><strong>3. Confronta con l'annuncio:</strong> Condizione, colore, taglia come descritto?</li>
                <li><strong>4. Prova l'articolo:</strong> Verifica taglia e difetti</li>
              </ol>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">Hai 2 giorni per validare</h4>
                  <p className="text-gray-700">
                    Dopo la ricezione, hai 2 giorni per validare l'ordine o segnalare un problema.
                    Passato questo termine, l'ordine viene validato automaticamente e il venditore riceve i soldi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Lasciare una valutazione</h3>
              <p className="text-gray-700 mb-3">
                Dopo la validazione, lascia una valutazione onesta. Aiuta gli altri acquirenti!
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-2 text-gray-700">= Transazione perfetta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="protezione" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Protezione acquirente</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vinted offre protezione acquirente che copre la maggior parte dei problemi.
              Costa il 5% del prezzo + una tariffa fissa per transazione.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Cosa è coperto</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Articolo non ricevuto</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Articolo molto diverso dalla descrizione</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Articolo danneggiato durante la spedizione</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Contraffazione confermata</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Come aprire una disputa</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Vai su "I miei acquisti" e seleziona l'ordine</li>
                <li><strong>2.</strong> Clicca "Ho un problema"</li>
                <li><strong>3.</strong> Seleziona il tipo di problema</li>
                <li><strong>4.</strong> Aggiungi foto/prove</li>
                <li><strong>5.</strong> Descrivi il problema con precisione</li>
                <li><strong>6.</strong> Attendi la risposta del supporto (48-72h)</li>
              </ol>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Cosa NON è coperto</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Non ti piace più l'articolo (cambio di idea)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>La taglia non va bene (se indicata correttamente)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Difetti menzionati nell'annuncio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Ritiro di persona senza pagamento Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section id="problemi" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">9. Problemi comuni</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"Non riesco a comprare"</h3>
                <p className="text-gray-700 mb-3">Possibili soluzioni:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Verifica la tua connessione internet</li>
                  <li>Aggiorna l'app Vinted</li>
                  <li>Verifica che il metodo di pagamento sia valido</li>
                  <li>Assicurati che l'articolo sia ancora disponibile</li>
                  <li>Prova da un altro dispositivo</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"Il mio pagamento è stato rifiutato"</h3>
                <p className="text-gray-700 mb-3">Possibili cause:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Fondi insufficienti</li>
                  <li>Carta scaduta o bloccata</li>
                  <li>Limite di pagamento raggiunto</li>
                  <li>3D Secure non attivato</li>
                  <li>Prova un altro metodo di pagamento</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"L'articolo non corrisponde"</h3>
                <p className="text-gray-700 mb-3">Cosa fare:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Non validare l'ordine</li>
                  <li>Scatta foto del problema</li>
                  <li>Apri una disputa entro 2 giorni</li>
                  <li>Contatta il venditore per trovare una soluzione</li>
                  <li>Il supporto Vinted deciderà se necessario</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Checklist dell'acquirente intelligente
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Foto chiare e dettagliate?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Descrizione completa?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Venditore ben valutato (4.5+)?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Prezzo coerente con il mercato?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Domande fatte se in dubbio?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>Pagamento solo tramite Vinted?</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/it/articles/pagamento-vinted-guida"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Pagamento Vinted</h3>
                  <p className="text-gray-600 text-sm">Tutto su pagamenti e prelievi</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
            <Link
              to="/it/articles/come-vendere-su-vinted"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Come vendere su Vinted</h3>
                  <p className="text-gray-600 text-sm">Guida completa del venditore</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-display font-bold mb-4">Pronto a trovare affari?</h2>
            <p className="text-gray-700 mb-6">
              Con questi consigli, hai tutte le chiavi per comprare in modo intelligente su Vinted.
              Prenditi il tuo tempo, controlla bene gli annunci e non esitare a fare domande
              ai venditori. Buona caccia!
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl">🛍️</span>
              <span className="font-display font-bold text-lg">Buono shopping!</span>
            </div>
          </div>
        </section>

        <ArticleNavigation />
      </article>
    </div>
  );
}
