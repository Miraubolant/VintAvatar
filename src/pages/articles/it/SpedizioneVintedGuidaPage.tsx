import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Package, Truck, MapPin, AlertTriangle, Star, ArrowRight, Euro, Shield, Box } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const SpedizioneVintedGuidaPage: React.FC = () => {
  useSEO({
    title: "Spedizione Vinted: Guida Completa Pacchi 2026 | VintDress",
    description: "Come spedire su Vinted? Guida completa: opzioni di spedizione, costi, imballaggio, punti di consegna. Tutto sulla spedizione Vinted.",
    keywords: "spedizione vinted, inviare pacco vinted, costi spedizione vinted, come spedire vinted, punto ritiro vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=400&fit=crop"
          alt="Spedizione Vinted - Guida completa pacchi"
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
            Spedizione Vinted: Guida Completa Pacchi 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Team VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min di lettura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 gennaio 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["spedizione vinted", "pacco", "costi spedizione", "punto ritiro", "VintDress"].map((tag) => (
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
            Hai appena venduto il tuo primo articolo su Vinted? Complimenti! Ora devi spedirlo all'acquirente. Niente panico: la spedizione Vinted è semplice e ben organizzata. In questa guida imparerai <strong className="text-vinted">come spedire un pacco</strong>, chi paga i costi e come ottenere recensioni a 5 stelle con una spedizione curata.
          </p>
        </div>

        {/* Section 1 - Opzioni di spedizione */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Opzioni di spedizione disponibili
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Truck className="w-6 h-6 text-vinted" />
                Punti di ritiro / Locker
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prezzo</strong>: Da 2,79€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Tempi</strong>: 3-5 giorni lavorativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Vantaggio</strong>: L'opzione più economica, tanti punti di consegna</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Peso max</strong>: Fino a 30kg a seconda del formato</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-vinted" />
                Poste / Corriere
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prezzo</strong>: Da 4,29€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Tempi</strong>: 2-3 giorni lavorativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Vantaggio</strong>: Consegna a domicilio possibile, veloce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Peso max</strong>: Fino a 30kg</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-vinted" />
                Consegna a mano
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Prezzo</strong>: Gratis!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Vantaggio</strong>: Nessun costo, incontro diretto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Svantaggio</strong>: Richiede spostamento, nessuna protezione Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 - Chi paga cosa */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Chi paga cosa?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Euro className="w-6 h-6 text-vinted" />
              Ripartizione dei costi
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Spese di spedizione</p>
                <p className="font-body text-black">Pagate dall'<strong className="text-vinted">acquirente</strong>. Tu non paghi nulla!</p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Protezione acquisti</p>
                <p className="font-body text-black">5% del prezzo + 0,70€, pagati dall'<strong className="text-vinted">acquirente</strong></p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Commissione venditore</p>
                <p className="font-body text-black"><strong className="text-vinted">0%!</strong> Ricevi il 100% del prezzo di vendita</p>
              </div>
            </div>
          </div>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Esempio concreto</h3>
            <div className="font-body text-black space-y-2">
              <p>Vendi una maglietta a <strong>15€</strong></p>
              <p>L'acquirente paga: 15€ + 3,50€ (spedizione) + 1,45€ (protezione) = <strong>19,95€</strong></p>
              <p>Tu ricevi: <strong className="text-vinted">15€</strong> (100% del prezzo di vendita)</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Passaggi spedizione */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Come spedire un pacco passo dopo passo
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Ricevi la notifica di vendita
                </h3>
                <p className="font-body text-black">
                  Quando qualcuno acquista, ricevi una notifica. Hai <strong>5 giorni</strong> per spedire il pacco.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Stampa l'etichetta prepagata
                </h3>
                <p className="font-body text-black">
                  Vai su "Le mie vendite" → "Scarica etichetta". Stampala (o mostra il codice QR al punto di consegna).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Imballa con cura
                </h3>
                <p className="font-body text-black">
                  Usa una scatola o busta da spedizione. Proteggi l'articolo dall'umidità con un sacchetto di plastica.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Consegna al punto di ritiro
                </h3>
                <p className="font-body text-black">
                  Recati al punto di consegna indicato. Conserva la ricevuta come prova di spedizione.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Conferma la spedizione nell'app
                </h3>
                <p className="font-body text-black">
                  Clicca su "Segna come spedito". L'acquirente potrà seguire il pacco in tempo reale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Imballaggio */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Imballare bene il pacco
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Box className="w-6 h-6 text-vinted" />
                Materiali consigliati
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Buste da spedizione in plastica</li>
                <li>• Cartone riciclato (scatole da scarpe)</li>
                <li>• Carta velina o kraft</li>
                <li>• Sacchetti di plastica per proteggere dall'umidità</li>
                <li>• Nastro adesivo resistente</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Consigli per 5 stelle
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Aggiungi un biglietto di ringraziamento</li>
                <li>• Piega i vestiti con cura</li>
                <li>• Profuma leggermente (opzionale)</li>
                <li>• Imballa come un regalo</li>
                <li>• Spedisci rapidamente (24-48h)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Problemi comuni */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Problemi comuni e soluzioni
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Pacco smarrito</p>
                </div>
                <p className="font-body text-black ml-8">
                  Contatta il supporto Vinted con la ricevuta di consegna. La Protezione acquisti copre questo caso, sarai rimborsato.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Pacco danneggiato</p>
                </div>
                <p className="font-body text-black ml-8">
                  L'acquirente deve segnalare il problema con foto. La Protezione acquisti si occuperà del caso.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">L'acquirente non ritira il pacco</p>
                </div>
                <p className="font-body text-black ml-8">
                  Dopo 14 giorni al punto di ritiro, il pacco viene restituito. Puoi annullare la vendita o rispedire.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Richiesta di reso</p>
                </div>
                <p className="font-body text-black ml-8">
                  Se l'articolo non corrisponde, l'acquirente può richiedere un reso. Le spese di reso sono a suo carico a meno che tu abbia commesso un errore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Consegna a mano */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Consegna a mano: consigli di sicurezza
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Precauzioni da prendere
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Luogo pubblico</strong>: Bar, centro commerciale, stazione... Mai a casa!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Orario</strong>: Di giorno, in un luogo frequentato</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Pagamento</strong>: Aspetta la conferma del pagamento Vinted PRIMA di consegnare l'articolo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Accompagnato</strong>: Se possibile, vieni con qualcuno</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-white border-3 border-black">
              <p className="font-body text-black text-sm">
                <strong>Nota:</strong> La consegna a mano non è coperta dalla protezione Vinted. In caso di controversia, non hai ricorso.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Prima di spedire, ottimizza i tuoi annunci!
          </h3>
          <p className="font-body text-white mb-6">
            Foto professionali = più vendite = più pacchi da spedire. Prova VintDress!
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
                Chi paga la spedizione su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Le spese di spedizione sono pagate dall'acquirente. Come venditore, non paghi nulla: ricevi il 100% del prezzo di vendita.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Dove consegno il mio pacco Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                A seconda dell'opzione scelta dall'acquirente: punto di ritiro, ufficio postale, o punto d'incontro per la consegna a mano.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quanto tempo ho per spedire il mio pacco?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Hai 5 giorni lavorativi per spedire il pacco dopo la vendita. Oltre questo termine, la vendita può essere annullata automaticamente.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Cosa faccio se non ho una stampante?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Puoi usare il codice QR fornito da Vinted. Mostralo direttamente al punto di consegna dove verrà scannerizzato e l'etichetta stampata sul posto.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articoli correlati
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "pagamento-vinted-guida", title: "Pagamento Vinted: Guida Completa" },
              { slug: "come-vendere-su-vinted", title: "Come Vendere su Vinted" },
              { slug: "problemi-vinted-soluzioni", title: "Problemi Vinted: Soluzioni" }
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

export default SpedizioneVintedGuidaPage;
