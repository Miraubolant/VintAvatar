import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Upload, Cpu, Sparkles, TrendingUp, Clock, DollarSign, Users, Zap, Eye, Target, Shield, CheckCircle2 } from 'lucide-react';

export default function IAServizioModaRivoluzionePage() {
  useSEO({
    title: "L'IA al Servizio della Moda: La Nostra Rivoluzione | VintDress",
    description: "Scopri come l'IA sta rivoluzionando la vendita di moda online. VintDress trasforma le tue foto con una tecnologia all'avanguardia.",
    keywords: "IA moda, foto IA, tecnologia vinted, innovazione moda, intelligenza artificiale",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
          alt="Intelligenza Artificiale e Moda"
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
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Tecnologia
            </span>
            <span className="font-space-grotesk">22 Novembre 2025</span>
            <span className="font-space-grotesk">7 min di lettura</span>
            <span className="font-space-grotesk font-semibold">Di Tech Team</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            L'Intelligenza Artificiale al Servizio della Moda: La Rivoluzione VintDress
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            L'industria della moda di seconda mano sta vivendo una rivoluzione silenziosa. Dietro ogni foto perfetta che vedi su Vinted, c'è ora una tecnologia che cambia le regole del gioco: l'Intelligenza Artificiale.
          </p>

          {/* La Genesi */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              La Genesi di un'Innovazione
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Il Problema
                </h3>
                <p className="mb-3">
                  Quante volte hai rinunciato a vendere un capo perché non sapevi come fotografarlo?
                </p>
                <p className="text-sm text-gray-700">
                  O peggio, quanti articoli sono rimasti invenduti a causa di foto poco attraenti?
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  La Nostra Soluzione
                </h3>
                <p className="font-semibold">
                  Un'IA rivoluzionaria che genera foto indossate ultra-realistiche dei tuoi capi in meno di 30 secondi.
                </p>
              </div>
            </div>
          </div>

          {/* Come Funziona */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8" />
              Come Funziona?
            </h2>

            <div className="space-y-6">
              {/* Passo 1 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-pink-pastel border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Upload className="w-7 h-7" />
                    Upload e Analisi
                  </h3>
                  <p className="mb-3">La nostra IA analizza il tuo capo:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Tipo di articolo (vestito, pantaloni, t-shirt...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Colori e motivi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Taglio e stile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Materiale (dedotto visivamente)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-mint border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Cpu className="w-7 h-7" />
                    Generazione del Modello
                  </h3>
                  <p className="mb-3">L'IA seleziona automaticamente:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Il tipo di manichino più adatto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>La posa perfetta per valorizzare l'articolo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>L'illuminazione ottimale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Lo sfondo che esalterà l'insieme</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-yellow-200 border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Sparkles className="w-7 h-7" />
                    Risultato Finale
                  </h3>
                  <p className="text-lg font-semibold text-vinted">
                    In pochi secondi, ottieni una foto indossata professionale, come se un fotografo professionista avesse lavorato con una top model!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* I Numeri Parlano */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              I Numeri che Parlano
            </h2>

            <p className="text-lg mb-6">Dal lancio di VintDress:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted text-white border-4 border-black p-6">
                <Eye className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +280%
                </div>
                <p className="text-sm">
                  di visualizzazioni in media - Gli annunci con foto IA generano 2,8 volte più visualizzazioni rispetto alle foto tradizionali.
                </p>
              </div>

              <div className="bg-mint border-4 border-black p-6">
                <Clock className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  30s
                </div>
                <p className="text-sm">
                  di generazione - Il tempo medio per ottenere una foto perfetta.
                </p>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6">
                <DollarSign className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +300%
                </div>
                <p className="text-sm">
                  di vendite - Alcuni utenti hanno triplicato le loro vendite utilizzando le nostre foto IA.
                </p>
              </div>

              <div className="bg-yellow-200 border-4 border-black p-6">
                <Users className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  24.000+
                </div>
                <p className="text-sm">
                  utenti conquistati - E questo è solo l'inizio!
                </p>
              </div>
            </div>
          </div>

          {/* L'Impatto sull'E-Commerce */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              L'Impatto sull'E-Commerce Moda
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Per i Venditori
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Risparmio di tempo</p>
                      <p className="text-sm text-gray-600">Addio ai servizi fotografici improvvisati</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Qualità professionale</p>
                      <p className="text-sm text-gray-600">Ogni foto sembra uscita da uno studio</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Conversione massima</p>
                      <p className="text-sm text-gray-600">Più visualizzazioni = più vendite</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Per l'Ecosistema Vinted
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Standard elevati</p>
                      <p className="text-sm text-gray-600">La qualità generale degli annunci migliora</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Esperienza acquirente</p>
                      <p className="text-sm text-gray-600">Più facile immaginarsi con il capo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Fiducia rafforzata</p>
                      <p className="text-sm text-gray-600">Le foto professionali rassicurano sulla qualità</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Il Futuro della Moda con l'IA */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Il Futuro della Moda con l'IA
            </h2>

            <p className="text-lg mb-6">Siamo solo all'inizio di questa rivoluzione. Presto:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <div className="text-3xl mb-2">🔮</div>
                <h3 className="font-space-grotesk font-bold mb-2">IA Predittiva</h3>
                <p className="text-sm">Sapere quali articoli si venderanno meglio</p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-space-grotesk font-bold mb-2">Stili Personalizzati</h3>
                <p className="text-sm">Adattare lo stile fotografico al tuo pubblico</p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-space-grotesk font-bold mb-2">Integrazione Nativa</h3>
                <p className="text-sm">Direttamente nell'app Vinted</p>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-space-grotesk font-bold mb-2">Espansione Internazionale</h3>
                <p className="text-sm">Adattamento ai codici di ogni paese</p>
              </div>
            </div>
          </div>

          {/* Etica e Trasparenza */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Etica e Trasparenza
            </h2>

            <div className="bg-green-50 border-4 border-green-500 p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-6">
                I Nostri Impegni:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Foto chiaramente identificate come generate dall'IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Rispetto della realtà del prodotto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Nessun inganno sullo stato o sui colori</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Protezione dei dati degli utenti</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusione */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Conclusione
            </h2>
            <p className="text-white text-lg mb-6">
              L'IA non è qui per sostituire la creatività umana, ma per democratizzarla. Oggi, ogni venditore Vinted può avere accesso a foto di qualità studio.
            </p>
            <p className="text-white text-xl font-semibold mb-8">
              La moda di seconda mano diventa più attraente, più accessibile e più professionale.
            </p>
            <p className="text-white text-lg mb-6">
              E tu, sei pronto/a a unirti a questa rivoluzione?
            </p>
            <Link
              to="/it"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Prova VintDress Ora!
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["IA", "Tecnologia", "Innovazione", "Moda", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              to="/it/articles/storia-successo-marie-2025"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Storia di Successo: Marie Guadagna 3000€/Mese
              </h3>
              <p className="text-sm text-gray-600">
                Come Marie ha trasformato la sua vita grazie alle foto IA
              </p>
            </Link>
            <Link
              to="/it/articles/come-fare-belle-foto-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Come Fare Belle Foto per Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Guida completa per foto che vendono
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
