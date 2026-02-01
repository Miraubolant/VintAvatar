import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { FileText, Sparkles, MessageSquare, CheckCircle, XCircle, ArrowRight, Zap, Target, TrendingUp, Clock, AlertTriangle, Lightbulb } from 'lucide-react';

export default function DescrizioneVintedOttimizzataIAPage() {
  useSEO({
    title: "Descrizione Vinted Ottimizzata con IA: Vendi Piu Velocemente | VintDress",
    description: "Trasforma le tue descrizioni Vinted basilari in testi ottimizzati che rassicurano l'acquirente e accelerano le tue vendite con l'intelligenza artificiale.",
    keywords: "descrizione vinted, ottimizzare descrizione vinted, ia descrizione vinted, testo annuncio vinted, vendere piu velocemente vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop"
          alt="Descrizione Vinted ottimizzata con IA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-mint px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Consigli
            </span>
            <span className="font-space-grotesk">1 febbraio 2026</span>
            <span className="font-space-grotesk">12 min di lettura</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Descrizione Vinted: Come l'IA Trasforma i Tuoi Testi in Macchine da Vendita
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Passi ore a scattare belle foto per Vinted, ma trascuri completamente la descrizione? Grande errore. L'ho imparato a mie spese.
          </p>

          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              L'Errore che Commette il 90% dei Venditori
            </h2>

            <p className="text-lg mb-6">
              Durante i miei primi 3 mesi su Vinted, scrivevo solo "Buone condizioni" e aspettavo che si vendesse.
            </p>

            <div className="bg-white border-3 border-black p-6 mb-4">
              <h3 className="font-bold mb-2">Risultato?</h3>
              <p className="text-gray-700">Decine di messaggi con le stesse domande:</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Qual e il materiale?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Che taglia esattamente?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Ci sono difetti?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Veste grande o piccolo?"
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-3 border-black p-4">
              <p className="font-semibold">
                <Lightbulb className="w-5 h-5 inline mr-2 text-yellow-600" />
                Ho capito una cosa: una descrizione completa e ben scritta riduce le domande del <span className="text-vinted font-bold">70%</span> e raddoppia le tue possibilita di vendere rapidamente.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Perche la Descrizione Conta Quanto la Foto
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cream border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Descrizione debole =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Acquirente che dubita</li>
                  <li>• Cascata di domande</li>
                  <li>• Negoziazione del prezzo</li>
                  <li>• Abbandono del carrello</li>
                  <li>• La concorrenza vince</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Descrizione ottimizzata =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Acquirente fiducioso</li>
                  <li>• Acquisto impulsivo</li>
                  <li>• Prezzo accettato</li>
                  <li>• Meno resi</li>
                  <li>• Recensioni migliori</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-4 border-black p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="text-sm">degli acquirenti legge la descrizione prima di comprare</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">-50%</div>
                  <div className="text-sm">domande con una descrizione completa</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2x</div>
                  <div className="text-sm">piu possibilita di vendita rapida</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              L'IA al Salvataggio: Genera le Tue Descrizioni in Secondi
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Scrivere una descrizione completa richiede tempo. Nel 2026, l'IA puo farlo per te in pochi secondi.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                Come ottimizza l'IA le tue descrizioni?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <Target className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Analizza</h4>
                  <p className="text-sm text-gray-600">L'IA analizza la tua foto e le info dell'articolo Vinted</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Genera</h4>
                  <p className="text-sm text-gray-600">Scrive una descrizione completa e persuasiva</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Ottimizza</h4>
                  <p className="text-sm text-gray-600">Parole chiave SEO Vinted per piu visibilita</p>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6">
              <h3 className="font-bold text-xl mb-4">Vantaggi dell'IA per le tue descrizioni:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Risparmio di tempo</h4>
                    <p className="text-sm text-gray-600">5 secondi invece di 10 minuti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Completezza</h4>
                    <p className="text-sm text-gray-600">Non dimentica mai info importanti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Persuasione</h4>
                    <p className="text-sm text-gray-600">Formulazioni che innescano l'acquisto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">SEO Vinted</h4>
                    <p className="text-sm text-gray-600">Parole chiave per miglior posizionamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Combina Foto IA + Descrizione Ottimizzata
            </h2>
            <p className="text-white text-lg mb-6">
              Con VintDress, ottieni foto professionali E descrizioni che vendono.
              Il combo vincente per aumentare le tue vendite su Vinted.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Scopri VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusione
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Una bella foto attira l'occhio, ma e la descrizione che converte. I venditori di successo su Vinted lo capiscono: ogni parola conta.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nel 2026, non hai scuse per descrizioni trascurate. L'IA puo generarti testi ottimizzati in pochi secondi. Combina questo con foto di manichino IA, e hai la formula vincente.
            </p>
            <p className="text-lg font-semibold">
              Foto professionale + Descrizione completa = Vendita rapida al prezzo giusto.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Articoli Correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/it/articles/distinguersti-vinted-manichino-ia" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Distinguersi su Vinted con Manichino IA</h3>
                <p className="text-gray-600 text-sm">Come aumentare la tua visibilita tra migliaia di annunci.</p>
              </Link>
              <Link to="/it/articles/5-consigli-vendere-velocemente-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">5 Consigli per Vendere Piu Velocemente su Vinted</h3>
                <p className="text-gray-600 text-sm">Tecniche collaudate per accelerare le tue vendite.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
