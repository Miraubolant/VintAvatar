import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArrowLeft, AlertTriangle, Camera, Tag, FileText, MessageSquare, Images, Clock, Search, TrendingUp, User, CheckCircle2, XCircle } from 'lucide-react';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function ErroriVenditeVintedPage() {
  useSEO({
    title: "10 Errori che Uccidono le tue Vendite su Vinted (e Come Evitarli) | Guida Completa",
    description: "Scopri gli errori più comuni che fanno scappare gli acquirenti e impara a correggerli per aumentare le tue vendite!",
    keywords: "errori vinted, perché non vendo su vinted, migliorare vendite vinted, consigli vinted, aumentare vendite vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          alt="Errori Vinted da evitare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Consigli
            </span>
            <span className="font-space-grotesk">25 Novembre 2025</span>
            <span className="font-space-grotesk">9 min di lettura</span>
            <span className="font-space-grotesk font-semibold">Di Thomas Bernard</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            10 Errori che Uccidono le tue Vendite su Vinted (e Come Evitarli)
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Pubblichi articoli ma non si vendono? Non sei solo. Dopo aver analizzato migliaia di profili Vinted, ecco i 10 errori fatali e come correggerli.
          </p>

          {/* Errore #1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Camera className="w-8 h-8" />
                  Foto di Scarsa Qualità
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p className="mb-4">
                Questa è LA prima causa di fallimento su Vinted. Una foto sfocata, scura o mal inquadrata = articolo ignorato.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Statistiche scioccanti:</p>
                <ul className="space-y-1">
                  <li>• Il 78% degli acquirenti giudica dalla prima foto</li>
                  <li>• Foto sfocate: -85% di clic</li>
                  <li>• Cattiva illuminazione: -70% di conversioni</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione
              </h3>
              <p className="font-semibold mb-2">Il game-changer: le nostre foto IA indossate</p>
              <ul className="space-y-1 mb-3">
                <li>• Qualità professionale garantita</li>
                <li>• Illuminazione studio perfetta</li>
                <li>• Capo valorizzato su manichino</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Risultato: +300% di visualizzazioni in media!
              </p>
            </div>
          </div>

          {/* Errore #2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Capo su Gruccia Base
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p className="mb-4">
                Un capo su gruccia è... morto. L'acquirente non può immaginare come cade, come gli starebbe.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Confronto:</p>
                <ul className="space-y-1">
                  <li>• Foto gruccia: 2% di tasso di conversione</li>
                  <li>• Foto indossata: 12% di tasso di conversione</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione
              </h3>
              <p>
                Usa la nostra IA per trasformare ogni foto su gruccia in una foto indossata sublime. Gli acquirenti visualizzano istantaneamente il capo su di loro.
              </p>
            </div>
          </div>

          {/* Errore #3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Tag className="w-8 h-8" />
                  Prezzi Irrealistici
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p><strong>Troppo caro:</strong> Nessuno compra, nemmeno con negoziazione</p>
              <p><strong>Troppo basso:</strong> Sembra "sospetto" o "difetto nascosto"</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione
              </h3>
              <p className="font-semibold mb-2">Il metodo dei 5 venduti:</p>
              <ol className="space-y-1 mb-3">
                <li>1. Cerca 5 articoli simili VENDUTI (non in vendita)</li>
                <li>2. Calcola la media dei prezzi</li>
                <li>3. Posizionati in questa fascia</li>
                <li>4. Adatta secondo le condizioni e la marca</li>
              </ol>
              <p className="font-space-grotesk font-bold text-green-700">
                Trucco psicologico: 19€ converte meglio di 20€
              </p>
            </div>
          </div>

          {/* Errore #4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  Descrizioni Vuote o Copiate
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p className="mb-4">
                "Bella maglietta, taglia M, buone condizioni" = descrizione inutile
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Cosa vuole sapere l'acquirente:</p>
                <ul className="space-y-1">
                  <li>• Taglia reale e vestibilità</li>
                  <li>• Materiale e sensazione al tatto</li>
                  <li>• Eventuali difetti</li>
                  <li>• Perché lo vendi</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione: Template descrizione completa
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm">
                <p>[Tipo] [Marca] - [Caratteristica principale]</p>
                <p className="mt-2">Questo [capo] è [descrizione emotiva].</p>
                <p>[Motivo di vendita]</p>
                <p className="mt-2">Dettagli:</p>
                <p>- Marca: [X]</p>
                <p>- Taglia: [X] (veste [normale/piccolo/grande])</p>
                <p>- Materiale: [X]</p>
                <p>- Condizioni: [X] su 10</p>
                <p>- Difetti: [nessuno / elenca onestamente]</p>
                <p className="mt-2">Misure prese a piatto:</p>
                <p>- Lunghezza: X cm</p>
                <p>- Circonferenza petto: X cm</p>
                <p className="mt-2">Spedizione accurata entro 48h!</p>
              </div>
            </div>
          </div>

          {/* Errore #5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8" />
                  Ignorare i Messaggi
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p className="mb-4">
                Rispondi 3 giorni dopo? L'acquirente ha già comprato altrove.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Il tempo conta:</p>
                <ul className="space-y-1">
                  <li>• Risposta &lt; 1h: 80% di conversione</li>
                  <li>• Risposta 1-24h: 40% di conversione</li>
                  <li>• Risposta &gt; 24h: 10% di conversione</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione
              </h3>
              <ul className="space-y-2">
                <li>• Attiva le notifiche Vinted</li>
                <li>• Rispondi anche "Verifico e ti faccio sapere!"</li>
                <li>• Prepara risposte tipo per le domande frequenti</li>
              </ul>
            </div>
          </div>

          {/* Errore #6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Images className="w-8 h-8" />
                  Foto Singola
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p>
                Una sola foto = informazioni insufficienti = nessun acquisto
              </p>
              <p className="font-semibold mt-2">Minimo consigliato: 4-5 foto</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione: Il combo vincente
              </h3>
              <ol className="space-y-2">
                <li>1. <strong>Foto IA indossata</strong>: Vista d'insieme attraente</li>
                <li>2. <strong>Foto dettaglio</strong>: Tessuto, texture, qualità</li>
                <li>3. <strong>Foto etichetta</strong>: Marca, taglia, composizione</li>
                <li>4. <strong>Foto difetti</strong>: Se applicabile, trasparenza</li>
                <li>5. <strong>Foto supplementare</strong>: Altro angolo o dettaglio</li>
              </ol>
            </div>
          </div>

          {/* Errore #7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Clock className="w-8 h-8" />
                  Timing Sbagliato di Pubblicazione
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p>
                Pubblicare alle 3 di notte o durante le vacanze = articolo sommerso
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione: Momenti migliori 2025
              </h3>
              <ul className="space-y-2 mb-4">
                <li>• <strong>Domenica 18h-22h</strong>: Preparazione della settimana</li>
                <li>• <strong>Martedì/Mercoledì 12h-14h</strong>: Pausa pranzo shopping</li>
                <li>• <strong>Giovedì 20h-22h</strong>: Fine settimana si avvicina</li>
              </ul>
              <p className="font-semibold text-red-700">Da evitare:</p>
              <ul className="space-y-1">
                <li>• Venerdì sera e sabato (uscite)</li>
                <li>• Vacanze scolastiche</li>
                <li>• Giorni festivi</li>
              </ul>
            </div>
          </div>

          {/* Errore #8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Search className="w-8 h-8" />
                  Ignorare il SEO Vinted
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p>
                Titolo "Maglietta nera" = introvabile nelle ricerche
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione: Ottimizza il tuo titolo
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm mb-4">
                <p>[Marca] [Tipo] [Caratteristica] [Taglia] [Condizioni]</p>
                <p className="mt-2">Esempio: ZARA Top Pizzo Nero M Nuovo</p>
              </div>
              <p className="font-semibold mb-2">Parole chiave strategiche:</p>
              <ul className="space-y-1">
                <li>• Includi la marca completa</li>
                <li>• Usa sinonimi (maglietta, top, camicetta)</li>
                <li>• Aggiungi le tendenze (cottagecore, Y2K, minimalista)</li>
              </ul>
            </div>
          </div>

          {/* Errore #9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                9
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  Nessun Boost Strategico
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p>
                I tuoi articoli sono sepolti sotto migliaia di altri
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione: Strategia di boost intelligente
              </h3>
              <ul className="space-y-2 mb-3">
                <li>• Fai il boost dei tuoi pezzi migliori domenica sera</li>
                <li>• Ripubblica gli articoli senza visualizzazioni dopo 2 settimane</li>
                <li>• Usa i boost gratuiti quotidiani</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Sinergia con foto IA: Fai il boost IN PRIORITÀ degli articoli con foto indossate IA - miglior ROI!
              </p>
            </div>
          </div>

          {/* Errore #10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                10
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <User className="w-8 h-8" />
                  Profilo Trascurato
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Il Problema
              </h3>
              <p className="mb-4">
                Profilo senza foto, senza descrizione = zero fiducia
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Impatto del profilo:</p>
                <ul className="space-y-1">
                  <li>• Profilo completo: +90% di fiducia dell'acquirente</li>
                  <li>• Valutazioni visibili: +75% di conversione</li>
                  <li>• Descrizione professionale: +50% di follower</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Soluzione: Checklist profilo perfetto
              </h3>
              <ul className="space-y-2">
                <li>• Foto profilo chiara e sorridente</li>
                <li>• Descrizione di 2-3 righe (stile, specialità, impegno)</li>
                <li>• Risposta alle valutazioni ricevute</li>
                <li>• Regolarità nelle pubblicazioni</li>
              </ul>
            </div>
          </div>

          {/* Piano d'Azione 48h */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Piano d'Azione: Correggere in 48h
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Giorno 1 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Rifai le tue 5 foto peggiori con la nostra IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Correggi i prezzi irrealistici</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Attiva le notifiche</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Giorno 2 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Riscrivi le tue 5 descrizioni peggiori</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Ottimizza il tuo profilo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Pianifica le tue prossime pubblicazioni</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-200 border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-xl mb-3">
                Risultati attesi
              </h3>
              <p className="mb-2">Correggendo questi errori:</p>
              <ul className="space-y-1 font-semibold">
                <li>• +200% di visualizzazioni minimo</li>
                <li>• +150% di messaggi</li>
                <li>• Vendite moltiplicate per 2-3</li>
              </ul>
            </div>
          </div>

          {/* Tabella Riepilogativa */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Il Riepilogo
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-pink-pastel border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Errore
                    </th>
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Impatto
                    </th>
                    <th className="p-4 text-left font-space-grotesk font-bold">
                      Soluzione Rapida
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Foto sfocate</td>
                    <td className="border-r-2 border-black p-4">-85% clic</td>
                    <td className="p-4 font-semibold">Foto IA indossate</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Capo su gruccia</td>
                    <td className="border-r-2 border-black p-4">-80% conversione</td>
                    <td className="p-4 font-semibold">Foto IA indossate</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Prezzi mal calibrati</td>
                    <td className="border-r-2 border-black p-4">Nessuna vendita</td>
                    <td className="p-4 font-semibold">Metodo 5 venduti</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Descrizioni vuote</td>
                    <td className="border-r-2 border-black p-4">Diffidenza acquirente</td>
                    <td className="p-4 font-semibold">Template completo</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Risposte lente</td>
                    <td className="border-r-2 border-black p-4">-90% conversione</td>
                    <td className="p-4 font-semibold">Notifiche ON</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Foto singola</td>
                    <td className="border-r-2 border-black p-4">Mancanza di info</td>
                    <td className="p-4 font-semibold">4-5 foto minimo</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Timing sbagliato</td>
                    <td className="border-r-2 border-black p-4">Articolo sommerso</td>
                    <td className="p-4 font-semibold">Domenica sera</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Nessun SEO</td>
                    <td className="border-r-2 border-black p-4">Introvabile</td>
                    <td className="p-4 font-semibold">Titolo ottimizzato</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Nessun boost</td>
                    <td className="border-r-2 border-black p-4">Sepolto</td>
                    <td className="p-4 font-semibold">Boost strategico</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4">Profilo vuoto</td>
                    <td className="border-r-2 border-black p-4">Zero fiducia</td>
                    <td className="p-4 font-semibold">Profilo completo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusione */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">
              Conclusione
            </h2>
            <p className="text-lg mb-4">
              Questi 10 errori sono evitabili. La buona notizia? Correggerli è semplice e i risultati sono immediati.
            </p>
            <p className="text-lg font-semibold mb-4">
              L'errore #1 da correggere in priorità: Le tue foto. Con la nostra IA, trasformi istantaneamente foto mediocri in foto che vendono.
            </p>
            <Link
              to="/it"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Migliorare le mie Foto Ora
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Errori", "Consigli", "Vinted", "Ottimizzazione", "Vendite"].map((tag) => (
              <span
                key={tag}
                className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Articoli Correlati
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/it/articles/come-fare-belle-foto-vinted"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Come Fare Belle Foto per Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Guida completa per foto che fanno vendere
              </p>
            </Link>
            <Link
              to="/it/articles/strategia-vendita-vinted-2025"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Strategia di Vendita Vinted 2025
              </h3>
              <p className="text-sm text-gray-600">
                Le migliori tecniche per massimizzare le tue vendite
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
