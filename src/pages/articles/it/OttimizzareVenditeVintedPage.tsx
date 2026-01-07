import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Tag,
  Search,
  Camera,
  Zap,
  Heart,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  Target,
  Sparkles,
  ArrowRight,
  Calendar,
  Eye
} from 'lucide-react';

export default function OttimizzareVenditeVintedPage() {
  useSEO({
    title: 'Aumentare le Vendite Vinted: Consigli Pro 2026',
    description: 'Scopri i consigli pro per aumentare le tue vendite su Vinted: articoli più venduti, strategie di prezzo, foto che convertono e segreti dell\'algoritmo.',
    keywords: 'aumentare vendite vinted, ottimizzare vinted, consigli vinted, vendere di più vinted, algoritmo vinted, foto vinted',
    canonicalUrl: 'https://vintdress.com/it/articles/ottimizzare-vendite-vinted',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-cream">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              CONSIGLI
            </span>
            <span className="text-gray-600 font-medium">10 min di lettura</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Aumentare le Vendite Vinted: Consigli Pro 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I tuoi articoli restano su Vinted per settimane senza vendersi?
            Scopri le strategie dei migliori venditori per moltiplicare le tue vendite e
            massimizzare i tuoi profitti.
          </p>

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
            alt="Ottimizzare vendite Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">In questo articolo</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#piu-venduti" className="hover:text-vinted transition-colors">1. Articoli più venduti su Vinted</a></li>
            <li><a href="#prezzi" className="hover:text-vinted transition-colors">2. Strategie di prezzo avanzate</a></li>
            <li><a href="#annunci" className="hover:text-vinted transition-colors">3. Ottimizzare i tuoi annunci</a></li>
            <li><a href="#foto" className="hover:text-vinted transition-colors">4. Foto che convertono</a></li>
            <li><a href="#algoritmo" className="hover:text-vinted transition-colors">5. Algoritmo Vinted: i segreti</a></li>
            <li><a href="#fidelizzare" className="hover:text-vinted transition-colors">6. Fidelizzare gli acquirenti</a></li>
            <li><a href="#errori" className="hover:text-vinted transition-colors">7. Errori che uccidono le vendite</a></li>
            <li><a href="#piano-azione" className="hover:text-vinted transition-colors">8. Piano d'azione 30 giorni</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">Da venditore amatoriale a venditore pro</h2>
            <p className="text-gray-700 mb-4">
              La differenza tra un venditore che guadagna 50€/mese e uno che guadagna 500€/mese?
              Non è la quantità di articoli, è il <strong>metodo</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tempo di vendita ridotto</strong> da settimane a giorni</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>+300% di visualizzazioni</strong> sui tuoi annunci</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Prezzi di vendita più alti</strong> grazie a una migliore presentazione</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1: Più venduti */}
        <section id="piu-venduti" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Articoli più venduti su Vinted</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Top 10 categorie redditizie</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ol className="space-y-2">
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">1.</span> Jeans di marca (Levi's, Diesel)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">2.</span> Sneakers (Nike, Adidas, NB)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">3.</span> Giacche e cappotti</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">4.</span> Vestiti di marca</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">5.</span> Borse</li>
              </ol>
              <ol className="space-y-2" start={6}>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">6.</span> Abbigliamento bambini</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">7.</span> Abbigliamento sportivo</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">8.</span> Vintage anni 90-2000</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">9.</span> Maglioni lana/cashmere</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">10.</span> Accessori di lusso</li>
              </ol>
            </div>
          </div>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Marchi più ricercati</h3>
            <div className="flex flex-wrap gap-2">
              {['Nike', 'Zara', 'H&M', 'Levi\'s', 'Adidas', 'The North Face', 'Lacoste', 'Ralph Lauren', 'Mango', 'Sézane'].map((brand) => (
                <span key={brand} className="bg-white px-3 py-1 border-2 border-black font-medium">
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Consiglio:</strong> Menziona sempre il marchio nel titolo del tuo annuncio!
            </p>
          </div>
        </section>

        {/* Section 2: Prezzi */}
        <section id="prezzi" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Strategie di prezzo avanzate</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Prezzi psicologici</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Usa <strong>9,99€ invece di 10€</strong> (effetto psicologico provato)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Numeri <strong>che finiscono per 5 o 0</strong> per articoli premium (25€, 50€)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lascia un <strong>margine del 10-15%</strong> per la negoziazione</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Analizza la concorrenza</h3>
              <p className="text-gray-700 mb-4">
                Prima di fissare il prezzo, cerca articoli simili su Vinted:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Cerca il tuo marchio + tipo di articolo + taglia</li>
                <li>2. Annota i primi 5 risultati venduti di recente</li>
                <li>3. Calcola il prezzo medio</li>
                <li>4. Posizionati leggermente sotto se vuoi vendere velocemente</li>
              </ol>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Prezzi per bundle</h3>
              <p className="text-gray-700">
                I bundle si vendono il 30% più velocemente! Offri sconti attraenti:
              </p>
              <ul className="mt-4 space-y-2">
                <li><strong>2 articoli:</strong> -10% sul totale</li>
                <li><strong>3 articoli:</strong> -15% sul totale</li>
                <li><strong>5+ articoli:</strong> -20% sul totale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Annunci */}
        <section id="annunci" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Ottimizzare i tuoi annunci</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Titoli che attirano clic</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="line-through text-gray-500">Vestito</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Vestito Sézane Seta Nero Taglia 42 - Nuovo con etichette</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Un buon titolo include: <strong>Marca + Tipo + Colore + Taglia + Condizione</strong>
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Descrizioni ottimizzate</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Inizia con le <strong>parole chiave importanti</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Aggiungi le <strong>misure esatte</strong> (busto, lunghezza...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Menziona lo <strong>stato onestamente</strong> (inclusi difetti)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Termina con una <strong>frase coinvolgente</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Aggiornamenti regolari</h3>
              <p className="text-gray-700">
                <strong>Consiglio pro:</strong> Modifica leggermente i tuoi annunci ogni 3-4 giorni.
                Questo li fa salire nei risultati di ricerca senza usare il boost a pagamento!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Foto */}
        <section id="foto" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Foto che convertono</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Impatto provato delle foto pro</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-red-100 border-2 border-black">
                <Eye className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-2xl font-bold text-red-600">+300%</p>
                <p className="text-sm">più visualizzazioni</p>
              </div>
              <div className="text-center p-4 bg-green-100 border-2 border-black">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold text-green-600">+150%</p>
                <p className="text-sm">più preferiti</p>
              </div>
              <div className="text-center p-4 bg-blue-100 border-2 border-black">
                <Star className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold text-blue-600">2x più</p>
                <p className="text-sm">vendite</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Foto indossata vs foto piatta</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-2">Tipo</th>
                    <th className="text-left py-2">Pro</th>
                    <th className="text-left py-2">Contro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Foto piatta</td>
                    <td className="py-2">Veloce, semplice</td>
                    <td className="py-2">Meno coinvolgente, aspetto piatto</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Foto indossata</td>
                    <td className="py-2">+300% visualizzazioni, mostra vestibilità</td>
                    <td className="py-2">Serve un modello</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium bg-mint">Manichino IA</td>
                    <td className="py-2 bg-mint">Il meglio di entrambi!</td>
                    <td className="py-2 bg-mint">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <h3 className="font-display font-bold text-2xl text-white">Trasforma i tuoi vestiti in foto su manichino</h3>
            </div>
            <p className="text-white mb-6">
              Con VintDress, genera foto su manichino IA in 30 secondi.
              Non serve posare o cercare un manichino!
            </p>
            <Link
              to="/it"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-display font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Prova VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5: Algoritmo */}
        <section id="algoritmo" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Algoritmo Vinted: i segreti</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Come funziona il feed</h3>
              <p className="text-gray-700 mb-4">
                L'algoritmo di Vinted favorisce i venditori che:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sono <strong>attivi regolarmente</strong> (accesso giornaliero)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Hanno <strong>annunci completi</strong> (foto, descrizione, marca)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Rispondono <strong>rapidamente</strong> ai messaggi (meno di 24h)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Hanno <strong>buone recensioni</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Far salire gli annunci gratis</h3>
              <p className="text-gray-700 mb-4">
                Per far salire un annuncio senza pagare:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Modifica leggermente la descrizione</li>
                <li>2. Riorganizza l'ordine delle foto</li>
                <li>3. Modifica il prezzo di qualche centesimo</li>
                <li>4. Aggiungi o rimuovi un hashtag</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Migliori momenti per pubblicare
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">Giorni ottimali:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Domenica sera (20-22)</li>
                    <li>Mercoledì pomeriggio</li>
                    <li>Sabato mattina</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Da evitare:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Lunedì mattina</li>
                    <li>Venerdì sera</li>
                    <li>Notte (mezzanotte-7)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Fidelizzare */}
        <section id="fidelizzare" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Fidelizzare gli acquirenti</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Comunicazione rapida</h3>
              <p className="text-gray-700">
                Rispondi ai messaggi entro 2 ore durante il giorno.
                Gli acquirenti vanno altrove se impieghi troppo tempo.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8 text-vinted mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Imballaggio curato</h3>
              <p className="text-gray-700">
                Un bell'imballaggio = recensioni a 5 stelle. Usa carta velina,
                un bel nastro e proteggi bene l'articolo.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Biglietto di ringraziamento</h3>
              <p className="text-gray-700">
                Inserisci un bigliettino di ringraziamento. Fa la differenza
                e incoraggia gli acquirenti a tornare!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <BarChart2 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Ottenere 5 stelle</h3>
              <p className="text-gray-700">
                Spedisci velocemente, imballa bene, e non esitare ad aggiungere
                un piccolo extra (campione, caramella...).
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Errori */}
        <section id="errori" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Errori che uccidono le vendite</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Prezzi troppo alti</strong>
                  <p className="text-gray-600">Confronta sempre con la concorrenza prima di fissare il prezzo</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Foto mediocri</strong>
                  <p className="text-gray-600">Foto sfocate, mal illuminate o con sfondo disordinato = meno clic</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Descrizioni vuote</strong>
                  <p className="text-gray-600">"Vestito, taglia M" non basta. Dettaglia l'articolo!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Non rispondere ai messaggi</strong>
                  <p className="text-gray-600">Un acquirente che aspetta va altrove. Rispondi velocemente!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Inattività prolungata</strong>
                  <p className="text-gray-600">L'algoritmo penalizza gli account inattivi. Collegati ogni giorno!</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Piano d'azione */}
        <section id="piano-azione" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Piano d'azione 30 giorni</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Settimana 1</span>
                Audit del tuo armadio
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Seleziona tutti i tuoi articoli</li>
                <li>Identifica gli articoli ad alto potenziale</li>
                <li>Analizza i prezzi della concorrenza</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Settimana 2</span>
                Rifare le foto
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Rifotografa tutti i tuoi articoli</li>
                <li>Usa VintDress per le foto su manichino</li>
                <li>Aggiungi foto dei dettagli</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Settimana 3</span>
                Ottimizzare prezzi e descrizioni
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Riscrivi tutte le tue descrizioni</li>
                <li>Modifica i prezzi secondo la tua strategia</li>
                <li>Aggiungi le misure esatte</li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Settimana 4</span>
                Analisi e aggiustamenti
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Analizza le tue statistiche di visualizzazione</li>
                <li>Identifica cosa funziona</li>
                <li>Modifica la tua strategia di conseguenza</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusione */}
        <section className="mb-12">
          <div className="bg-black text-white border-4 border-black p-8">
            <h2 className="font-display font-bold text-2xl mb-6">Riepilogo: azioni prioritarie</h2>
            <ol className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">1</span>
                <span>Migliora le tue foto (usa VintDress per foto su manichino)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">2</span>
                <span>Ottimizza i tuoi titoli e descrizioni</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">3</span>
                <span>Modifica i prezzi in base alla concorrenza</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">4</span>
                <span>Sii attivo e reattivo ogni giorno</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">5</span>
                <span>Cura l'esperienza dell'acquirente (imballaggio, comunicazione)</span>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA finale */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Pronto ad aumentare le tue vendite?
            </h2>
            <p className="text-white text-lg mb-6">
              Inizia dal passaggio che ha più impatto: le foto.
              Con VintDress, trasforma i tuoi vestiti in foto su manichino professionali.
            </p>
            <Link
              to="/it"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-display font-bold text-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Prova VintDress gratis
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Articoli correlati */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl mb-6">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/it/articles/come-vendere-su-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">Come Vendere su Vinted</h3>
              <p className="text-gray-600">Guida completa per creare i tuoi primi annunci</p>
            </Link>
            <Link
              to="/it/articles/come-fare-foto-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">Come Fare Belle Foto</h3>
              <p className="text-gray-600">Tecniche per foto che vendono</p>
            </Link>
          </div>
        </section>

        <ArticleNavigation currentSlug="ottimizzare-vendite-vinted" />
      </article>
    </div>
  );
}
