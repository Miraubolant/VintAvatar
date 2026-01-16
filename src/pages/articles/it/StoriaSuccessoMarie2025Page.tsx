import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Calendar, DollarSign, Star, Target, Smartphone, Package, CheckCircle2, XCircle, Lightbulb, Award } from 'lucide-react';

export default function StoriaSuccessoMarie2025Page() {
  useSEO({
    title: "Storia di Successo: Marie Guadagna 3000€/Mese Con Vinted | Testimonianza Completa",
    description: "Marie guadagna 3000€/mese con Vinted grazie alle foto IA! Scopri il suo metodo completo e i suoi segreti di successo.",
    keywords: "storia di successo vinted, guadagnare soldi vinted, business vinted, foto IA vinted, marie vinted avatar, testimonianza vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
          alt="Storia di Successo Marie"
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
            <span className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Storia di Successo
            </span>
            <span className="font-space-grotesk">18 novembre 2025</span>
            <span className="font-space-grotesk">12 min di lettura</span>
            <span className="font-space-grotesk font-semibold">Di Team VintDress</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Storia di Successo: Marie Guadagna 3000€/Mese Con Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Incontra Marie, 28 anni, che ha rivoluzionato la sua vita grazie a Vinted! Da semplice venditrice occasionale a imprenditrice della moda che genera 3000€ al mese, scopri il suo percorso ispirante.
          </p>

          {/* Stats Hero */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-vinted text-white border-3 border-black p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3000€</div>
              <div className="text-sm">al mese</div>
            </div>
            <div className="bg-mint border-3 border-black p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">120</div>
              <div className="text-sm">articoli/mese</div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">5/5</div>
              <div className="text-sm">valutazione venditore</div>
            </div>
            <div className="bg-yellow-200 border-3 border-black p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3400</div>
              <div className="text-sm">follower</div>
            </div>
          </div>

          {/* Le Déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Il Momento Chiave: Gennaio 2024
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Prima: La Difficoltà
                </h3>
                <ul className="space-y-2">
                  <li>• Impiegata part-time in un negozio</li>
                  <li>• Stipendio: 1200€/mese</li>
                  <li>• Passione per la moda frustrata</li>
                  <li>• Vendite Vinted sporadiche (50€/mese max)</li>
                </ul>
                <p className="mt-4 font-semibold text-red-700">
                  Il problema: Foto amatoriali, articoli fermi per mesi
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Il Momento Rivelatore
                </h3>
                <p className="italic mb-4">
                  "Ho scoperto VintDress scrollando su Instagram. All'inizio ero scettica: foto IA per i miei vestiti? Ma avevo provato tutto..."
                </p>
                <div className="bg-white border-2 border-green-500 p-4">
                  <p className="font-semibold mb-2">Primo test: Vestito Zara</p>
                  <p className="text-sm">• Prima IA: 12 visualizzazioni in 6 mesi, 0 vendite</p>
                  <p className="text-sm">• Dopo IA: Venduto in 48h a prezzo pieno!</p>
                </div>
                <p className="mt-4 italic font-semibold text-green-700">
                  "Lì ho capito che avevo trovato la soluzione!"
                </p>
              </div>
            </div>
          </div>

          {/* La Transformation */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              La Trasformazione: Febbraio-Giugno 2024
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mese 1-2: L'Apprendimento
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Strategia:</p>
                    <ul className="space-y-1 text-sm">
                      <li>1. Test su 20 articoli del suo guardaroba</li>
                      <li>2. Foto IA per tutti gli articoli invenduti</li>
                      <li>3. Riattivazione di 50 vecchi annunci</li>
                    </ul>
                  </div>
                  <div className="bg-mint border-2 border-black p-4">
                    <p className="font-semibold mb-2">Risultati:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Febbraio: 340€ di vendite</li>
                      <li>• Marzo: 580€ di vendite</li>
                      <li>• Tasso di vendita: x5!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mese 3-4: L'Accelerazione
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Azioni:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Approvvigionamento attivo nei mercatini</li>
                      <li>• 2-3h al giorno dedicate a Vinted</li>
                      <li>• Specializzazione nel vintage francese</li>
                    </ul>
                  </div>
                  <div className="bg-pink-pastel border-2 border-black p-4">
                    <p className="font-semibold mb-2">Cifre impressionanti:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Aprile: 920€ di vendite</li>
                      <li>• Maggio: 1250€ di vendite</li>
                      <li>• Stock: 150 articoli in rotazione</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 italic text-gray-700">
                  "Le foto IA mi hanno dato la sicurezza per prendermi sul serio. I miei articoli finalmente sembravano professionali!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mese 5-6: La Professionalizzazione
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">La svolta professionale:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Creazione di uno spazio dedicato a casa</li>
                      <li>• Sistema di gestione dell'inventario</li>
                      <li>• Rapporto clienti eccellente</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-200 border-2 border-black p-4">
                    <p className="font-semibold mb-2">Performance:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Giugno: 1680€ di vendite</li>
                      <li>• 95% di soddisfazione clienti</li>
                      <li>• Tasso di reso: 0,2%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* L'Empire Marie : Aujourd'hui */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              L'Impero Marie: Oggi
            </h2>

            <div className="bg-vinted border-4 border-black p-8 mb-6">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Le Cifre di Gennaio 2025
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Performance mensile:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Fatturato:</span>
                      <span className="font-bold">4200€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Utili netti:</span>
                      <span className="font-bold text-green-600">3000€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Articoli venduti:</span>
                      <span className="font-bold">120/mese</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Scontrino medio:</span>
                      <span className="font-bold">35€</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Statistiche impressionanti:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tempo medio di vendita:</span>
                      <span className="font-bold">8 giorni</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tasso di conversione:</span>
                      <span className="font-bold">24%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Valutazione venditore:</span>
                      <span className="font-bold">5/5 ⭐</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Follower Vinted:</span>
                      <span className="font-bold">3400</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Méthode MARIE */}
            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-6">
                Il Suo Segreto: Il Metodo M.A.R.I.E
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    M
                  </div>
                  <div>
                    <p className="font-bold">Marchi mirati</p>
                    <p className="text-sm text-gray-700">Specializzarsi per diventare esperta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    A
                  </div>
                  <div>
                    <p className="font-bold">IA per tutte le foto</p>
                    <p className="text-sm text-gray-700">Coerenza e professionalità</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-bold">Relazione clienti premium</p>
                    <p className="text-sm text-gray-700">Differenziazione tramite il servizio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    I
                  </div>
                  <div>
                    <p className="font-bold">Inventario ottimizzato</p>
                    <p className="text-sm text-gray-700">Rotazione rapida dello stock</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    E
                  </div>
                  <div>
                    <p className="font-bold">Evoluzione costante</p>
                    <p className="text-sm text-gray-700">Test & learn in permanenza</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Exclusive */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Intervista Esclusiva con Marie
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  D: Qual è stata la tua sfida più grande?
                </p>
                <p className="italic text-gray-700">
                  "All'inizio, mi vergognavo di usare l'IA. Mi dicevo che era 'barare'. Poi ho capito che era solo uno strumento, come una buona illuminazione o un bel sfondo. Ciò che conta è la qualità del capo e il servizio clienti!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  D: Quanto tempo dedichi?
                </p>
                <p className="italic text-gray-700">
                  "4-5h al giorno adesso, ma è diventata la mia passione! La mattina gestisco gli ordini e i messaggi, il pomeriggio fotografo e pubblico gli annunci. È molto strutturato."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  D: I tuoi consigli per l'approvvigionamento?
                </p>
                <p className="italic text-gray-700">
                  "Mi sono specializzata nel vintage francese degli anni '80-'90. Conosco i miei marchi a memoria: Kenzo, Thierry Mugler, Claude Montana... Faccio il giro dei mercatini ogni settimana con una lista precisa."
                </p>
              </div>

              <div className="bg-vinted border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3 text-white">
                  D: L'impatto dell'IA sulle tue vendite?
                </p>
                <p className="italic text-white font-semibold">
                  "Rivoluzionario! I miei articoli con foto IA si vendono il 300% più velocemente e il 40% più cari. Gli acquirenti vedono immediatamente come cade il capo, sono rassicurati."
                </p>
              </div>
            </div>
          </div>

          {/* Sa Routine Gagnante */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              La Sua Routine Vincente
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Lunedì: GIORNO APPROVVIGIONAMENTO
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>8h-12h</strong>: Giro dei mercatini</li>
                  <li>• <strong>14h-16h</strong>: Selezione e pulizia dei capi</li>
                  <li>• <strong>16h-18h</strong>: Ricerca prezzi e concorrenza</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Martedì-Mercoledì: PRODUZIONE
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>9h-12h</strong>: Foto IA e pubblicazione annunci</li>
                  <li>• <strong>14h-17h</strong>: Gestione ordini e assistenza</li>
                  <li>• <strong>17h-18h</strong>: Community management</li>
                </ul>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Giovedì: STRATEGIA
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Analisi delle performance</li>
                  <li>• Pianificazione settimana successiva</li>
                  <li>• Ricerca nuove opportunità</li>
                </ul>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Venerdì: SPEDIZIONI
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Preparazione di tutti i pacchi</li>
                  <li>• Passaggio alla Posta</li>
                  <li>• Monitoraggio soddisfazione clienti</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ses Outils Indispensables */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8" />
              I Suoi Strumenti Indispensabili
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Setup Tecnico
                </h3>
                <ul className="space-y-2">
                  <li>• Smartphone iPhone 13 Pro</li>
                  <li>• VintDress per le foto IA</li>
                  <li>• Excel per la gestione dello stock</li>
                  <li>• Etichette personalizzate premium</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Organizzazione
                </h3>
                <ul className="space-y-2">
                  <li>• Appendiabiti per categoria/stagione</li>
                  <li>• Sistema di tag colorati</li>
                  <li>• Spazio confezionamento ottimizzato</li>
                  <li>• Stock di packaging di qualità</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Les Erreurs Évitées */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Gli Errori Che Ha Evitato
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Errori Classici dei Principianti
                </h3>
                <ul className="space-y-2">
                  <li>• Vendere troppo economico per mancanza di fiducia</li>
                  <li>• Foto sfocate o mal inquadrate</li>
                  <li>• Descrizioni approssimative</li>
                  <li>• Nessun follow-up clienti</li>
                </ul>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Ciò Che Fa la Differenza
                </h3>
                <ul className="space-y-2">
                  <li>• <strong>Prezzo</strong> giusto e sicuro</li>
                  <li>• <strong>Foto</strong> professionali sistematiche</li>
                  <li>• <strong>Descrizioni</strong> dettagliate e oneste</li>
                  <li>• <strong>Servizio</strong> clienti impeccabile</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ses Astuces Secrètes */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8" />
              I Suoi Trucchi Segreti
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Tecnica #1: La Strategia Bundle
                </h3>
                <p className="italic text-gray-700">
                  "Propongo spesso bundle ai miei clienti abituali. Un top + una gonna con il 15% di sconto. Aumenta lo scontrino medio e fidelizza!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Tecnica #2: La Stagionalità
                </h3>
                <p className="italic text-gray-700">
                  "Preparo sempre la stagione successiva. A gennaio, compro già primavera-estate. Quando tutti cercano, io sono pronta!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Tecnica #3: L'Esclusività
                </h3>
                <p className="italic text-gray-700">
                  "I miei pezzi migliori, li propongo prima alla mia comunità VIP tramite messaggio privato. Si sentono privilegiate e comprano di più!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Tecnica #4: La Reattività
                </h3>
                <p className="italic text-gray-700">
                  "Rispondo ai messaggi entro un'ora. Su Vinted, la velocità fa la differenza. Un cliente che aspetta, è un cliente che va altrove."
                </p>
              </div>
            </div>
          </div>

          {/* L'Impact sur Sa Vie */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              L'Impatto Sulla Sua Vita
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Libertà Finanziaria
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Per la prima volta, non ho più stress di soldi. Guadagno più che in negozio, con la libertà in più!"
                </p>
              </div>

              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Realizzazione Personale
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Ogni vendita è una piccola vittoria. Ho sviluppato un occhio per la moda, capisco le tendenze, è appassionante!"
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Riconoscimento
                </h3>
                <p className="italic text-sm text-gray-700">
                  "La mia famiglia non capiva all'inizio. Ora sono orgogliosi! Il mio ragazzo mi dice che sono una vera imprenditrice."
                </p>
              </div>
            </div>
          </div>

          {/* Ses Projets 2025 */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              I Suoi Progetti 2025
            </h2>

            <div className="bg-yellow-200 border-4 border-black p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">
                Obiettivi Ambiziosi
              </h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>5000€/mese</strong> entro fine 2025</li>
                <li>• <strong>Diversificazione</strong> su altre piattaforme</li>
                <li>• <strong>Formazione</strong> per aiutare altre venditrici</li>
                <li>• <strong>Forse</strong> il suo negozio fisico</li>
              </ul>
              <p className="italic text-gray-700">
                "Sto pensando di offrire i miei servizi di sourcing ad altre venditrici. E perché non creare il mio marchio vintage rivisitato?"
              </p>
            </div>
          </div>

          {/* Ce Que Tu Peux Apprendre */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Cosa Puoi Imparare da Marie
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  I Fondamentali
                </h3>
                <ol className="space-y-2">
                  <li>1. <strong>Qualità</strong> prima della quantità</li>
                  <li>2. <strong>Costanza</strong> nello sforzo</li>
                  <li>3. <strong>Specializzazione</strong> invece che dispersione</li>
                  <li>4. <strong>Servizio</strong> clienti premium</li>
                </ol>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Gli Strumenti Indispensabili
                </h3>
                <ul className="space-y-2">
                  <li>• Foto IA per l'atteggiamento professionale</li>
                  <li>• Organizzazione rigorosa</li>
                  <li>• Rapporto clienti curato</li>
                  <li>• Monitoraggio della concorrenza</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 text-white">
                Il Mindset Vincente
              </h3>
              <p className="italic text-white font-semibold">
                "Pensa in grande ma inizia in piccolo. Ogni vendita conta, ogni cliente è importante. E soprattutto: osa usare tutti gli strumenti disponibili!"
              </p>
            </div>
          </div>

          {/* Ton Tour Maintenant */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Ora Tocca a Te!
            </h2>

            <h3 className="font-space-grotesk font-bold text-xl mb-4">
              Se Marie Ce L'Ha Fatta, Perché Non Tu?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold mb-2">Gli ingredienti del successo:</p>
                <ul className="space-y-1">
                  <li>• Passione per la moda ✓</li>
                  <li>• Voglia di imparare ✓</li>
                  <li>• Strumenti professionali ✓</li>
                  <li>• Perseveranza ✓</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Da Dove Iniziare?</p>
                <ol className="space-y-1">
                  <li>1. <strong>Testare</strong> l'IA su 10 articoli</li>
                  <li>2. <strong>Analizzare</strong> i risultati</li>
                  <li>3. <strong>Ottimizzare</strong> e ripetere</li>
                  <li>4. <strong>Scalare</strong> progressivamente</li>
                </ol>
              </div>
            </div>

            <p className="italic text-lg mb-6">
              "La cosa più difficile è iniziare. Dopo, i risultati parlano da soli!" - Marie
            </p>

            <Link
              to="/it"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Inizia Ora!
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-xs text-gray-600 italic">
              Marie utilizza VintDress da più di un anno. Risultati non garantiti, variabili secondo l'impegno personale.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Storia di Successo", "Testimonianza", "Vinted", "Business", "2025", "Imprenditore"].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              to="/it/articles/strategia-vendita-vinted-2025"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Strategia di Vendita Vinted 2025
              </h3>
              <p className="text-sm text-gray-600">
                Le migliori tecniche per massimizzare le tue vendite
              </p>
            </Link>
            <Link
              to="/it/articles/errori-vendite-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Errori Che Uccidono le Tue Vendite Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Evita questi errori per aumentare i tuoi risultati
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
