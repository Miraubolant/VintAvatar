import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Eye, TrendingUp, Users, Camera, Sparkles, Target, CheckCircle, XCircle, ArrowRight, Zap, Star } from 'lucide-react';

export default function DistinguerstiVintedManichinoIAPage() {
  useSEO({
    title: "Distinguersi su Vinted: Il Manichino IA per Aumentare le Vendite | VintDress",
    description: "Scopri come il manichino IA di VintDress ti aiuta a distinguerti tra migliaia di annunci Vinted e vendere 3 volte piu velocemente.",
    keywords: "distinguersi vinted, visibilita vinted, manichino ia vinted, foto vinted professionali, aumentare vendite vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
          alt="Distinguersi su Vinted con manichino IA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Guida
            </span>
            <span className="font-space-grotesk">1 febbraio 2026</span>
            <span className="font-space-grotesk">10 min di lettura</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Distinguersi su Vinted: Come il Manichino IA Aumenta le Tue Vendite
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Hai decine di articoli in vendita su Vinted, ma rimangono invisibili tra milioni di annunci? Non sei solo. Il vero problema non sono i tuoi vestiti, e come li presenti.
          </p>

          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              Il Problema: L'Invisibilita su Vinted
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">I numeri che fanno male:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>+50 milioni</strong> di articoli online su Vinted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>80%</strong> degli annunci hanno foto simili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>3 secondi</strong> per catturare l'attenzione dell'acquirente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>70%</strong> delle vendite avviene grazie alla 1a foto</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">Quello che probabilmente vivi:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>I tuoi annunci bloccati a poche visualizzazioni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Pochi preferiti e ancora meno messaggi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Concorrenti che vendono gli stessi articoli piu velocemente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Ore passate su foto "mediocri"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              La Soluzione: Il Manichino IA VintDress
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              VintDress risolve questo problema generando visual di qualita professionale con il suo manichino IA. In pochi secondi, la tua foto di abbigliamento "basilare" diventa una foto da catalogo.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                Come funziona?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">1</div>
                  <h4 className="font-bold mb-2">Carica</h4>
                  <p className="text-sm text-gray-600">Carica la tua foto o incolla un link Vinted</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">2</div>
                  <h4 className="font-bold mb-2">Configura</h4>
                  <p className="text-sm text-gray-600">Scegli il tipo di manichino e sfondo</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">3</div>
                  <h4 className="font-bold mb-2">Genera</h4>
                  <p className="text-sm text-gray-600">L'IA crea la tua foto in 30 secondi</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">4</div>
                  <h4 className="font-bold mb-2">Pubblica</h4>
                  <p className="text-sm text-gray-600">Scarica e aggiorna il tuo annuncio</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-mint border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Vantaggi VintDress
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Foto di qualita professionale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Generazione in 30 secondi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Manichini personalizzabili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Aumenta la visibilita dei tuoi annunci</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">Risultati osservati:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Visualizzazioni medie</span>
                    <span className="font-bold text-vinted">+300%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Tasso di preferiti</span>
                    <span className="font-bold text-vinted">+150%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Messaggi ricevuti</span>
                    <span className="font-bold text-vinted">+200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tempo di vendita</span>
                    <span className="font-bold text-vinted">-50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Pronto a Distinguerti?
            </h2>
            <p className="text-white text-lg mb-6">
              Unisciti a migliaia di venditori che hanno gia aumentato le loro vendite con VintDress.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Prova VintDress Ora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusione
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Su Vinted, la concorrenza e feroce. Milioni di annunci competono per l'attenzione degli acquirenti. La differenza tra un articolo che ristagna e uno che si vende? Spesso, e solo la foto.
            </p>
            <p className="text-lg text-gray-700">
              Con VintDress, hai un vantaggio competitivo immediato. Foto professionali che catturano l'occhio, generano clic e convertono in vendite. Il tutto in pochi secondi e per pochi centesimi a foto.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Articoli Correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/it/articles/manichino-ia-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Manichino IA per Vinted: Come Funziona?</h3>
                <p className="text-gray-600 text-sm">Tutto sulla tecnologia dietro i manichini virtuali.</p>
              </Link>
              <Link to="/it/articles/algoritmo-vinted-visibilita" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Algoritmo Vinted: Massimizza la Tua Visibilita</h3>
                <p className="text-gray-600 text-sm">Capire l'algoritmo per aumentare le tue vendite.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
