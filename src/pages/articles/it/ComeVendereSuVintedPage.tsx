import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, TrendingUp, Package, DollarSign, AlertTriangle, Star, ArrowRight, ShoppingBag, Camera, Percent } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ComeVendereSuVintedPage: React.FC = () => {
  useSEO({
    title: "Come Vendere su Vinted: Guida Completa 2026 | VintDress",
    description: "Scopri come vendere su Vinted in modo efficace. Guida completa: creare annunci, fissare il prezzo giusto, vendere bundle e aumentare le vendite.",
    keywords: "come vendere su vinted, vendere vinted, annuncio vinted, vendita vinted, guida venditore vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="Come vendere su Vinted - Guida completa"
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
            Come Vendere su Vinted: Guida Completa 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Team VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min di lettura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 gennaio 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vendere vinted", "annuncio vinted", "principiante vinted", "guida venditore", "VintDress"].map((tag) => (
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
            Vuoi vendere su Vinted ma non sai da dove iniziare? Con oltre <strong className="text-vinted">80 milioni di utenti</strong> in Europa, Vinted è diventata la piattaforma di riferimento per vendere vestiti. Ottima notizia: è <strong>100% gratuito</strong> per i venditori (0% di commissione). In questa guida completa, imparerai a creare annunci che vendono, fissare il prezzo giusto e ottimizzare le tue vendite.
          </p>
        </div>

        {/* Section 1 - Creare un annuncio */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Creare un annuncio che vende
          </h2>

          <div className="space-y-8">
            {/* Titolo ottimizzato */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Un titolo ottimizzato per essere trovato
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Il titolo è la prima cosa che vedono gli acquirenti. Un buon titolo include:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Il marchio</strong>: Zara, H&M, Nike... Gli acquirenti spesso cercano per marchio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Tipo di capo</strong>: Vestito, jeans, t-shirt, giacca...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Taglia</strong>: M, 38, S... Essenziale per il filtraggio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Una caratteristica</strong>: Colore, fantasia, stile (vintage, nuovo...)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-sm text-gray-600 mb-2">Esempio di buon titolo:</p>
                <p className="font-body text-black">"Vestito Zara nero taglia M - Nuovo con etichetta"</p>
              </div>
            </div>

            {/* Descrizione completa */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-vinted" />
                Una descrizione completa
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Una buona descrizione risponde a tutte le domande dell'acquirente:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Condizione reale</strong>: Nuovo, ottime condizioni, buone condizioni... Sii onesto!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Misure</strong>: Petto, lunghezza, vita...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Eventuali difetti</strong>: Menziona tutto, anche i piccoli dettagli.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Motivo della vendita</strong>: Troppo piccolo, mai indossato, cambio di stile...</span>
                </li>
              </ul>
            </div>

            {/* Categorizzazione */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Categorizzazione corretta
              </h3>
              <p className="font-body text-black leading-relaxed">
                Scegli la categoria e sottocategoria giusta affinché il tuo articolo appaia nelle ricerche pertinenti. Compila <strong>tutti i campi</strong>: marchio, taglia, colore, condizione, materiale. Più informazioni fornisci, più visibile sarà il tuo articolo nei filtri di ricerca.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Foto */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Fotografare i tuoi vestiti come un professionista
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-vinted" />
                Le basi di una buona foto
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Luce naturale</strong>: Vicino a una finestra, preferibilmente al mattino o nel tardo pomeriggio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Sfondo neutro</strong>: Parete bianca, lenzuolo tinta unita, niente disordine visibile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Più angolazioni</strong>: Fronte, retro, dettagli, etichetta, eventuali difetti.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Nitidezza</strong>: Niente sfocature, vestiti ben stirati e presentati.</span>
                </li>
              </ul>
            </div>

            {/* CTA VintDress */}
            <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-white" />
                Passa al livello successivo con VintDress
              </h3>
              <p className="font-body text-white leading-relaxed mb-4">
                Le <strong>foto indossate su manichino</strong> aumentano le visualizzazioni del <strong>300%</strong> e riducono i tempi di vendita di 3 volte. Con VintDress, genera foto professionali su manichino IA in <strong>30 secondi</strong> a partire da 0,40€/foto.
              </p>
              <Link
                to="/#generateur"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                PROVA VINTDRESS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3 - Prezzo */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Fissare il prezzo giusto
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-vinted" />
                Analizzare la concorrenza
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Prima di fissare il tuo prezzo, cerca articoli simili su Vinted:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Stesso marchio, stesso tipo di capo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Filtra per "Venduti" per vedere i prezzi di vendita reali</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Adatta in base alle condizioni del tuo articolo</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Margine di trattativa
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Aggiungi <strong>10-15%</strong> al tuo prezzo minimo accettabile. Agli acquirenti di Vinted piace trattare, e potrai accettare le loro offerte senza perdere soldi.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Prezzi psicologici
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Usa prezzi come <strong>9,90€</strong> invece di 10€, o <strong>14,50€</strong> invece di 15€. Queste piccole differenze aumentano le conversioni.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Bundle */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vendere bundle: la strategia vincente
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-vinted" />
              Come creare un bundle attraente
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              I bundle ti permettono di vendere più articoli in una singola transazione:
            </p>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Coerenza</strong>: Raggruppa articoli simili (3 t-shirt, outfit completo...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Sconto attraente</strong>: Offri 15-20% in meno della somma degli articoli separati</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Foto di gruppo</strong>: Mostra tutti gli articoli insieme + foto individuali</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Spese di spedizione condivise</strong>: L'acquirente risparmia sulle spese di spedizione</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 - Cosa si vende di più */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cosa si vende di più su Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-vinted" />
                Marchi più ricercati
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Zara, H&M, Mango (fast fashion)</li>
                <li>• Nike, Adidas, Puma (sportivo)</li>
                <li>• Levi's, Diesel (jeans)</li>
                <li>• The North Face, Patagonia (outdoor)</li>
                <li>• Sézane, Rouje (marchi di tendenza)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Percent className="w-6 h-6 text-vinted" />
                Categorie redditizie
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Abbigliamento bambini (alta rotazione)</li>
                <li>• Vintage e pezzi unici</li>
                <li>• Articoli nuovi con etichetta</li>
                <li>• Scarpe di marca</li>
                <li>• Borse e accessori</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Problemi */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Perché i tuoi articoli non si vendono
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
              <p className="font-display font-bold text-black">
                Checklist diagnostica:
              </p>
            </div>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Foto mediocri</strong>: Sfocate, scure, sfondo disordinato → Rifalle o usa VintDress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Prezzo troppo alto</strong>: Confronta con articoli venduti, non con quelli pubblicati</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Descrizione incompleta</strong>: Aggiungi misure, condizione reale, difetti</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Annuncio inattivo</strong>: Aggiornalo regolarmente (cambia il prezzo di 0,10€)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Nessuna risposta ai messaggi</strong>: Rispondi velocemente, gli acquirenti non aspettano</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Finale */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Pronto a far decollare le tue vendite su Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Foto professionali = più visualizzazioni = più vendite. Prova VintDress e vedi la differenza!
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
                Come vendo su Vinted per la prima volta?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Crea un account gratuito, fai belle foto del tuo articolo, scrivi un titolo e una descrizione dettagliata, fissa un prezzo competitivo e pubblica. È così semplice!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Vinted prende una commissione sulle vendite?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No! Vinted è 100% gratuito per i venditori. La piattaforma guadagna attraverso la protezione acquirenti (5% + 0,70€) pagata dall'acquirente.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Come posso vendere più velocemente su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Usa foto di qualità (idealmente su manichino), fissa un prezzo competitivo, rispondi rapidamente ai messaggi e aggiorna regolarmente i tuoi annunci modificando leggermente il prezzo.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Come creo un bundle su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Crea un nuovo annuncio, seleziona "Bundle" come tipo di articolo, aggiungi foto di tutti gli articoli insieme e individualmente, e offri un prezzo vantaggioso rispetto alla somma degli articoli separati.
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
              { slug: "come-fare-foto-vinted", title: "Come Fare Belle Foto Vinted" },
              { slug: "ottimizzare-vendite-vinted", title: "Aumentare le Vendite Vinted" },
              { slug: "foto-indossate-vinted", title: "Foto Indossate su Vinted" }
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

export default ComeVendereSuVintedPage;
