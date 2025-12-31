import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, AlertTriangle, Star, ArrowRight } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function FotoIndossateVintedPage() {
  useSEO({
    title: "Migliora le tue vendite con foto indossate su Vinted | VintDress",
    description: "Migliora le tue vendite su Vinted con foto indossate professionali. Scopri VintDress, la soluzione premium per i tuoi annunci.",
    keywords: "foto indossata vinted, foto indossate, mettere vestiti su manichino, foto professionali vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop"
          alt="Foto indossate professionali per Vinted"
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
            CONSIGLI
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Migliora le tue vendite con foto indossate su Vinted
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
              <span>29 dicembre 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["foto indossata vinted", "manichino IA", "vendite Vinted", "foto professionali", "VintDress"].map((tag) => (
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
            Se sei un venditore su Vinted, sai quanto sia cruciale la presentazione dei tuoi articoli. Foto indossate di qualita possono fare la differenza. Permettono agli acquirenti di visualizzare i vestiti in un contesto reale, aumentando notevolmente le possibilita di vendita. Infatti, uno studio ha dimostrato che le foto con manichino IA possono aumentare le visualizzazioni dei tuoi annunci del <strong className="text-vinted">300%</strong> e ridurre i tempi di vendita di tre volte.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Perche scegliere VintDress per le tue foto indossate?
          </h2>

          <div className="space-y-8">
            {/* Pro Quality */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Qualita professionale a portata di mano
              </h3>
              <p className="font-body text-black leading-relaxed">
                VintDress ti offre un servizio premium per creare foto indossate di qualita professionale. Grazie alla nostra tecnologia FLUX 2 Pro, ottieni un risultato realistico e indistinguibile da una foto reale. In soli <strong>30 secondi</strong>, puoi generare un'immagine ad alta definizione che mettera in risalto i tuoi vestiti come mai prima.
              </p>
            </div>

            {/* Customization */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Personalizzazione completa
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Con VintDress, puoi personalizzare completamente il tuo manichino IA: genere, morfologia, carnagione, posa e sfondi sono a tua disposizione. Che tu voglia una foto dinamica o in studio, la nostra interfaccia intuitiva ti permette di configurare facilmente ogni dettaglio.
              </p>
            </div>

            {/* Affordable Cost */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-6">
                Costo accessibile per un alto ritorno sull'investimento
              </h3>

              <div className="bg-cream border-3 border-black p-5 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problemi comuni degli strumenti gratuiti:
                  </p>
                </div>
                <ul className="space-y-2 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Qualita sfocata</strong>: Le immagini generate spesso mancano di nitidezza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Watermark visibili</strong>: Gli strumenti gratuiti aggiungono loghi, danneggiando la presentazione professionale dei tuoi articoli.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Attese interminabili</strong>: Puoi ritrovarti con code di 30 minuti per generare una singola immagine.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Deformazioni dei vestiti</strong>: Gli strumenti gratuiti possono deformare gli articoli, rendendo la presentazione ingannevole.</span>
                  </li>
                </ul>
              </div>

              <p className="font-body text-black leading-relaxed">
                Oltre a questi inconvenienti, il tempo che passi usando questi strumenti gratuiti equivale a soldi persi. Investendo da <strong className="text-vinted">0,40 EUR/foto</strong> con VintDress, hai la garanzia di ottenere immagini di qualita superiore che attirano gli acquirenti. Una sola vendita aggiuntiva, spesso tra 15 e 25 EUR, e piu che sufficiente a coprire il costo delle tue foto.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonianze di venditori Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Ho iniziato a usare VintDress e le mie vendite sono esplose. Le foto indossate attirano molti piu clienti, e il costo si recupera velocemente."
              </p>
              <p className="font-display font-bold text-black">
                - Chiara, 28 anni
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Prima avevo solo foto basiche. Da quando uso VintDress, ho visto i miei tempi di vendita dimezzarsi. E un investimento che raccomando a tutti!"
              </p>
              <p className="font-display font-bold text-black">
                - Giuliano, 34 anni
              </p>
            </div>
          </div>
        </section>

        {/* How to */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Come mettere i tuoi vestiti su un manichino con VintDress?
          </h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Carica il tuo capo
                </h3>
                <p className="font-body text-black">
                  Inizia caricando una foto del tuo capo sulla nostra piattaforma.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Configura il tuo manichino
                </h3>
                <p className="font-body text-black">
                  Scegli il genere, la morfologia, la carnagione e la posa del tuo manichino. Puoi anche selezionare lo sfondo ideale per mettere in risalto i tuoi articoli.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Genera e scarica
                </h3>
                <p className="font-body text-black">
                  In soli 30 secondi, ottieni una foto pronta per essere usata su Vinted. Semplice, veloce ed efficace!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Pronto a potenziare le tue vendite su Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Prova VintDress ora e trasforma le tue foto in meno di 30 secondi!
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
                Qual e il modo migliore per usare foto indossate su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Usa foto indossate per mostrare i tuoi vestiti in una situazione reale. Questo aiuta gli acquirenti a visualizzare il loro potenziale.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Perche dovrei evitare gli strumenti gratuiti?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Gli strumenti gratuiti offrono spesso una qualita mediocre, che puo danneggiare la tua immagine di marca. Investire in VintDress ti garantisce foto professionali.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quanto costa VintDress?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                I pacchetti partono da 3,99 EUR per 10 foto, cioe 0,40 EUR/foto. E un investimento redditizio per migliorare le tue vendite!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Posso personalizzare il mio manichino?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Si, VintDress ti permette di personalizzare completamente il tuo manichino secondo le tue esigenze: genere, morfologia, posa e altro ancora.
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
              { slug: "manichino-ia-vinted", title: "Manichino IA per Vinted" },
              { slug: "ia-foto-vinted-gratis-vs-pagamento", title: "IA Gratis vs Pagamento" },
              { slug: "guida-completa-foto-vinted-2025", title: "Guida Completa Foto 2025" }
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
}
