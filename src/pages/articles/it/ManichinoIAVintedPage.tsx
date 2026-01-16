import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Zap, TrendingUp, Star, Shield, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ManichinoIAVintedPage: React.FC = () => {
  useSEO({
    title: "Migliora le tue vendite su Vinted con un manichino IA | VintDress",
    description: "Ottimizza le tue vendite su Vinted con un manichino IA. Scopri come VintDress può trasformare le tue foto.",
    keywords: "manichino ia vinted, manichino virtuale vinted, ia per foto vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop"
          alt="Manichino IA per foto professionali su Vinted"
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
            Migliora le tue vendite su Vinted con un manichino IA
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
              <span>26 dicembre 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["manichino ia", "vinted", "foto vinted", "e-commerce", "vendita online"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-pink-pastel border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            Nel mondo dell'e-commerce, e in particolare su Vinted, la presentazione dei tuoi articoli è fondamentale. Se sei un venditore su Vinted, avrai sicuramente notato che le foto di qualità professionale attirano più acquirenti. Ma come ottenere queste foto senza spendere una fortuna? La risposta: <strong className="text-vinted">il manichino IA</strong>.
          </p>
        </div>

        {/* Section 1 - What is an AI Mannequin */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cos'è un Manichino IA?
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <p className="font-body text-black leading-relaxed mb-4">
              Un manichino IA è una tecnologia innovativa che ti permette di creare foto di abbigliamento in modo professionale grazie all'intelligenza artificiale. Con strumenti come VintDress, puoi generare immagini realistiche dei tuoi vestiti indossati da un manichino virtuale in pochi clic.
            </p>
          </div>

          {/* Why VintDress */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-black flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              Perché Scegliere VintDress?
            </h3>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-body text-black leading-relaxed mb-6">
                VintDress si distingue per la sua qualità. A differenza degli strumenti gratuiti, VintDress utilizza la tecnologia <strong>FLUX 2 Pro</strong>, che garantisce risultati indistinguibili da foto reali. Ecco perché gli strumenti gratuiti non sono una soluzione valida:
              </p>

              <div className="bg-cream border-3 border-black p-5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problemi degli strumenti gratuiti:
                  </p>
                </div>
                <ul className="space-y-3 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Qualità mediocre</strong>: Le foto generate sono spesso sfocate e poco lusinghiere.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Filigrane</strong>: La maggior parte dei servizi gratuiti aggiunge filigrane alle immagini, rovinandone la qualità.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Deformazioni dei vestiti</strong>: I modelli gratuiti possono deformare i tuoi vestiti, scoraggiando i potenziali acquirenti.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Tempi di attesa</strong>: Puoi aspettare fino a 30 minuti per generare una foto, un lusso che pochi venditori possono permettersi.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - The Real Cost */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Il Vero Costo del Gratuito
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-black leading-relaxed mb-4">
              Investire in un servizio gratuito può sembrare economico all'inizio, ma può diventare rapidamente costoso in termini di tempo e vendite perse. Ad esempio, se perdi 30 minuti ad aspettare foto di scarsa qualità, è tempo che avresti potuto dedicare a promuovere i tuoi articoli o rispondere alle domande degli acquirenti.
            </p>

            <div className="bg-white border-3 border-black p-5 mt-4">
              <p className="font-body text-black leading-relaxed">
                Con VintDress, puoi generare una foto in soli <strong className="text-vinted">30 secondi</strong> per un costo di <strong className="text-vinted">0,40€/foto</strong>. Immagina di vendere un capo a 20€. Con una foto di qualità, è molto più probabile che tu concluda la vendita. Una sola vendita aggiuntiva copre ampiamente il costo delle foto.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Sales Boost */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Come il Manichino Virtuale Aumenterà le Tue Vendite?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VISUALIZZAZIONI SU VINTED</p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">÷3</div>
              <p className="font-display font-bold text-black text-sm">TEMPO DI VENDITA</p>
            </div>

            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">↓</div>
              <p className="font-display font-bold text-black text-sm">TRATTATIVE</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-vinted" />
              Vantaggi concreti
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Tempo di vendita diviso per 3</strong>: Gli articoli con foto di qualità si vendono più velocemente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Meno trattative sul prezzo</strong>: Le foto professionali ispirano fiducia.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Meno resi</strong>: Gli acquirenti possono visualizzare meglio ciò che acquistano.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            Funzionalità di VintDress
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Manichino IA Ultra-Realistico</h4>
                  <p className="font-body text-sm text-black">La qualità dell'immagine è eccezionale, indistinguibile da una foto reale.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Personalizzazione Completa</h4>
                  <p className="font-body text-sm text-black">Scegli il genere, la morfologia, la carnagione, la posa e lo sfondo per un risultato su misura.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Interfaccia Intuitiva</h4>
                  <p className="font-body text-sm text-black">Non serve essere esperti di tecnologia per usare VintDress. È semplice e veloce.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Bonus Incluso</h4>
                  <p className="font-body text-sm text-black">Generazione automatica di descrizioni e titoli ottimizzati per Vinted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonianze di Venditori Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Ho provato diversi strumenti gratuiti, ma la qualità era sempre deludente. Con VintDress, i miei articoli si vendono più velocemente e a prezzi più alti!"
              </p>
              <p className="font-display font-bold text-black">
                - Giulia, venditrice Vinted
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Usando un manichino IA, ho visto una reale differenza nelle mie vendite. Le foto catturano l'attenzione e aumentano la mia credibilità come venditore."
              </p>
              <p className="font-display font-bold text-black">
                - Marco, venditore Vinted
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 flex items-center gap-2">
              <Shield className="w-7 h-7" />
              Un Investimento Redditizio
            </h2>
            <p className="font-body text-white text-lg leading-relaxed">
              Cercavi soluzioni gratuite per migliorare le tue foto su Vinted, ma hai trovato qualcosa di meglio: VintDress. Per <strong>0,40€/foto</strong>, ottieni qualità professionale che attira acquirenti e aumenta le tue vendite. In definitiva, è un investimento che si ripaga rapidamente.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Pronto a trasformare le tue foto Vinted?
          </h3>
          <p className="font-body text-black mb-6">
            Genera foto con manichino IA in 30 secondi!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            PROVA ORA
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
                Come funziona il manichino IA su Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Il manichino IA di VintDress genera immagini realistiche dei tuoi vestiti grazie a una tecnologia avanzata. Basta caricare una foto, scegliere i parametri, e in 30 secondi avrai un'immagine pronta per la pubblicazione.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Perché dovrei pagare per le foto quando esistono strumenti gratuiti?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Gli strumenti gratuiti offrono spesso qualità mediocre, deformazioni e filigrane. VintDress offre un servizio premium che garantisce foto di qualità professionale, il che si traduce in vendite più veloci e numerose.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Ne vale la pena l'investimento?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sì, investire 0,40€/foto può farti guadagnare molto di più aumentando le tue possibilità di vendita. Una sola vendita può facilmente coprire il costo delle tue foto.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quali tipi di vestiti posso fotografare con VintDress?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Puoi usare VintDress per tutti i tipi di abbigliamento, che siano vestiti, magliette, pantaloni, ecc. La personalizzazione permette di adattare il manichino a ogni articolo.
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
              { slug: "ia-foto-vinted-gratis-vs-pagamento", title: "IA Gratis vs Pagamento" },
              { slug: "guida-completa-foto-vinted-2025", title: "Guida Foto 2025" },
              { slug: "foto-indossate-vinted", title: "Foto Indossate Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/it/articles/${article.slug}`}
                className="block bg-mint border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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

export default ManichinoIAVintedPage;
