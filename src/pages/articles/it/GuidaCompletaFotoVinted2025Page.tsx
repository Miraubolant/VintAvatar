import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Lightbulb, AlertTriangle, Zap, Camera, Sparkles } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const GuidaCompletaFotoVinted2025Page: React.FC = () => {
  useSEO({
    title: "Guida Completa: Ottimizza le Tue Foto Vinted nel 2025 | VintDress",
    description: "Guida completa 2025 per ottimizzare le tue foto Vinted. Tecniche pro, IA, strategie avanzate. +200% visualizzazioni garantite!",
    keywords: "guida foto vinted 2025, ottimizzare foto vinted, foto IA vinted, vendere di più vinted, guida completa vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=500&fit=crop"
          alt="Guida Completa Foto Vinted 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              GUIDA COMPLETA 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Ottimizza le Tue Foto Vinted
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              GUIDA
            </span>
            <span className="font-body text-sm text-gray-600">Dal Team VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 novembre 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 min di lettura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Guida Completa: Ottimizza le Tue Foto Vinted nel 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            La guida definitiva per creare foto Vinted che convertono nel 2025. Tutte le tecniche svelate!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Guida", "Foto", "Vinted", "2025", "IA", "Ottimizzazione"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            Il 2025 segna una nuova era per la vendita online. Con l'esplosione dell'IA e le nuove aspettative degli acquirenti, le tue foto Vinted devono essere perfette.
          </p>
        </div>

        {/* E-Commerce Evolution */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            L'Evoluzione dell'E-Commerce nel 2025
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Cosa è Cambiato
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Standard visivi più elevati</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Prima impressione cruciale</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">IA nelle abitudini d'acquisto</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Mobile-first: 95% delle visualizzazioni</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 1: Fundamentals */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 1: I Fondamenti del 2025
          </h2>

          <div className="space-y-6">
            {/* 1.1 3 Second Rule */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                1.1 La Regola dei 3 Secondi
              </h3>
              <p className="font-body text-gray-700">
                Gli acquirenti decidono in 3 secondi se il tuo articolo li interessa. La tua foto principale deve essere <strong>perfetta</strong>.
              </p>
            </div>

            {/* 1.2 Optimal Formats */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.2 Formati Ottimali
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Rapporto 4:5</strong>: Il formato preferito da Vinted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Risoluzione minima</strong>: 1080x1350px</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Peso massimo</strong>: 10MB per evitare la compressione</span>
                </li>
              </ul>
            </div>

            {/* 1.3 Lighting */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.3 Illuminazione Naturale vs Artificiale
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ILLUMINAZIONE NATURALE</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Finestra a nord: luce morbida</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Evitare 12-14 (troppo forte)</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Nuvole = diffusore perfetto</span></li>
                  </ul>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ILLUMINAZIONE ARTIFICIALE</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Ring light minimo 18"</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Temperatura 5500K</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Evitare il flash diretto</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Staging */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 2: Messa in Scena Professionale
          </h2>

          <div className="space-y-6">
            {/* Backgrounds */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Top 3 Sfondi nel 2025
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-white border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">1. Bianco puro</p>
                  <p className="font-body text-xs text-gray-600">Intramontabile, valorizza</p>
                </div>
                <div className="bg-cream border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-cream border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">2. Beige naturale</p>
                  <p className="font-body text-xs text-gray-600">Caldo, slow fashion</p>
                </div>
                <div className="bg-gray-200 border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-gray-300 border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">3. Grigio chiaro</p>
                  <p className="font-body text-xs text-gray-600">Moderno, toni scuri</p>
                </div>
              </div>
            </div>

            {/* Composition */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Composizione e Angolazioni
              </h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-gray-700"><strong>La regola dei terzi:</strong></p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Articolo principale sull'intersezione</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Spazio negativo per respiro</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Angolo leggermente diagonale</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: AI Revolution */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 3: La Rivoluzione IA
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Perché l'IA Cambia Tutto
            </h3>
            <p className="font-body text-white mb-4">
              L'intelligenza artificiale permette ora di creare foto indossate ultra-realistiche senza manichino.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Consistenza</p>
                <p className="font-body text-sm text-gray-700">Qualità pro garantita</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Velocità</p>
                <p className="font-body text-sm text-gray-700">30 secondi vs 30 minuti</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Diversità</p>
                <p className="font-body text-sm text-gray-700">Più modelli e pose</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">ROI</p>
                <p className="font-body text-sm text-gray-700">+300% visualizzazioni</p>
              </div>
            </div>
          </div>

          {/* When to use AI */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Quando Usare l'IA
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Vestiti difficili da indossare</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Articoli di valore</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Pezzi unici o vintage</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Quando hai poco tempo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Advanced Strategies */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 4: Strategie Avanzate
          </h2>

          <div className="space-y-6">
            {/* Sequencing */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Sequenza delle Foto
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Vista indossata IA</p>
                    <p className="font-body text-sm text-gray-600">Gancio principale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Dettaglio materiale/etichetta</p>
                    <p className="font-body text-sm text-gray-600">Prova di qualità</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Vista d'insieme articolo solo</p>
                    <p className="font-body text-sm text-gray-600">Contesto completo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">4</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Eventuali difetti</p>
                    <p className="font-body text-sm text-gray-600">Trasparenza</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Optimization */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Ottimizzazione Mobile (95% delle visualizzazioni)
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Testo leggibile anche in miniatura</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Contrasti marcati per la visibilità</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Elementi centrati per evitare tagli</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 5: Mistakes to Avoid */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 5: Errori da Evitare Assolutamente
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Foto sfocate</h3>
              </div>
              <p className="font-body text-sm text-gray-700">-70% visualizzazioni</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Illuminazione gialla</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Distorce i colori</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Sfondo disordinato</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Distrae l'attenzione</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Articoli multipli</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Confusione garantita</p>
            </div>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Trappole Specifiche del 2025
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Sovrasaturazione</strong>: Gli schermi moderni rivelano tutto</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Filtri Instagram</strong>: Falsano la realtà</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Foto troppo ritoccate</strong>: Perdita di fiducia dell'acquirente</span></li>
            </ul>
          </div>
        </section>

        {/* Chapter 6: Practical Cases */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 6: Casi Pratici per Categoria
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Dresses and Skirts */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Vestiti e Gonne</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>IA consigliata</strong>: Vedere la caduta</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Posa</strong>: In piedi, rotazione fianchi</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Focus</strong>: Lunghezza e taglio</span></li>
              </ul>
            </div>

            {/* Tops and T-shirts */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Top e T-shirt</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Busto</strong>: Aderente per vedere la forma</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Dettagli</strong>: Collo, maniche, motivi</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Pieghe</strong>: Assolutamente da evitare</span></li>
              </ul>
            </div>

            {/* Pants and Jeans */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Pantaloni e Jeans</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Gambe</strong>: Dritte, non incrociate</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Vita</strong>: Chiaramente visibile</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Orli</strong>: Lunghezza chiara</span></li>
              </ul>
            </div>

            {/* Shoes */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Scarpe</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Profilo</strong>: Vista laterale obbligatoria</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Suole</strong>: Stato d'usura visibile</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Paio</strong>: Sempre entrambe</span></li>
              </ul>
            </div>

            {/* Accessories */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Accessori</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Proporzioni</strong>: Riferimento dimensione</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Brillantezza</strong>: Evitare riflessi</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Dettagli</strong>: Chiusure, catene</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 7: Tools */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capitolo 7: Strumenti e Attrezzatura
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Smartphone</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">12MP minimo</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Stabilizzazione ottica</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Modalità ritratto</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Applicazioni</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">VSCO</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Snapseed</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Lightroom Mobile</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Attrezzatura Pro</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Treppiede</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Telecomando</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Riflettore</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Il Tuo Piano d'Azione 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">1</span>
                </div>
                <p className="font-body text-white"><strong>Analizza le tue foto attuali</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">2</span>
                </div>
                <p className="font-body text-white"><strong>Identifica i tuoi 5 pezzi migliori</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">3</span>
                </div>
                <p className="font-body text-white"><strong>Testa l'IA su questi articoli</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">4</span>
                </div>
                <p className="font-body text-white"><strong>Confronta i risultati</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">5</span>
                </div>
                <p className="font-body text-white"><strong>Adotta la strategia vincente</strong></p>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-4 mt-6">
              <p className="font-display font-bold text-black mb-2">
                Il Segreto del 2025
              </p>
              <p className="font-body text-sm text-gray-700">
                Mescolare intelligentemente foto IA e foto tradizionali in base al tipo di articolo e al tuo budget tempo.
              </p>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4">
              <p className="font-display font-bold text-black mb-2">
                Risultato Garantito
              </p>
              <p className="font-body text-sm text-gray-700">
                +200% visualizzazioni minimo, tempi di vendita divisi per 3.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Domande Frequenti
          </h2>
          <div className="space-y-3">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quale formato foto usare su Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Il formato ottimale è 4:5 (1080x1350px) che si visualizza perfettamente su mobile e desktop.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quante foto mettere in un annuncio Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  L'ideale è 5 foto: una principale indossata, dettagli, una vista posteriore e l'etichetta.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>L'IA può davvero migliorare le mie vendite?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sì, gli utenti registrano in media +300% visualizzazioni e +250% vendite con le foto IA.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>Quanto tempo per creare una foto IA?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Solo 30 secondi per generare una foto indossata professionale con VintDress.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto a Rivoluzionare le Tue Foto Vinted?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Prova la nostra IA ora e unisciti ai venditori che dominano Vinted nel 2025.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROVA L'IA ORA
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Articoli Correlati
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/it/articles/5-consigli-vendere-velocemente-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Consigli per Vendere Più Velocemente</h3>
              <p className="font-body text-sm text-gray-600">Ottimizza le tue vendite con strategie comprovate.</p>
            </Link>
            <Link
              to="/it/articles/strategia-vendita-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Strategia di Vendita Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">La strategia completa per dominare Vinted quest'anno.</p>
            </Link>
            <Link
              to="/it/articles/manichino-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Manichino IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Scopri come un manichino IA può trasformare le tue foto.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GuidaCompletaFotoVinted2025Page;
