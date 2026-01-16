import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Clock, DollarSign, Star, Eye, MessageSquare, Zap, Heart, ThumbsUp, Lightbulb } from 'lucide-react';

export default function Testimonianza300PercentoVisualizzazioniPage() {
  useSEO({
    title: "Testimonianza: +300% di Visualizzazioni in Una Settimana | Success Story VintDress",
    description: "Scopri come Marie ha triplicato le sue visualizzazioni in una settimana grazie a VintDress. Testimonianza completa e risultati concreti.",
    keywords: "testimonianza vinted, success story, aumentare visualizzazioni vinted, trasformazione vendite, marie laurent",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=400&fit=crop"
          alt="Testimonianza Success Story"
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
            <span className="font-space-grotesk">20 novembre 2025</span>
            <span className="font-space-grotesk">8 min di lettura</span>
            <span className="font-space-grotesk font-semibold">Di Marie Laurent</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Success Story: Come Marie ha Trasformato il suo Business Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8 italic">
            Testimonianza raccolta il 5 marzo 2025
          </p>

          <p className="text-lg text-gray-700 mb-12">
            Oggi diamo la parola a Marie Laurent, 28 anni, parigina e venditrice appassionata su Vinted. La sua storia con VintDress è semplicemente sorprendente.
          </p>

          {/* Stats Hero */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6 text-center">
              Risultati in Una Settimana
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-3 border-black p-6 text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">+300%</div>
                <div className="text-sm">di visualizzazioni medie</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <Eye className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">67</div>
                <div className="text-sm">visualizzazioni in 48h (vs 8)</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">12</div>
                <div className="text-sm">messaggi ricevuti</div>
              </div>
            </div>
          </div>

          {/* Le Déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Il Momento Chiave
            </h2>

            <div className="bg-pink-pastel border-4 border-black p-8">
              <p className="text-2xl font-space-grotesk font-bold mb-4">
                "Ho scoperto VintDress per caso su Instagram"
              </p>
              <p className="text-lg italic text-gray-700">
                Marie ci racconta: "Avevo un guardaroba pieno di vestiti che non riuscivo a vendere. Le mie foto erano corrette, ma niente di eccezionale. Quando ho visto i risultati possibili con l'IA, ho voluto provare."
              </p>
            </div>
          </div>

          {/* Avant VintDress */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Prima di VintDress: La Frustrazione
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  I numeri parlano da soli:
                </h3>
                <ul className="space-y-2">
                  <li>Media di 12 visualizzazioni per articolo</li>
                  <li>Tempo di vendita medio: 3 mesi</li>
                  <li>Prezzo di vendita spesso negoziato al ribasso</li>
                  <li>Frustrazione crescente</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Marie testimonia:
                </h3>
                <p className="italic text-gray-700">
                  "Passavo ore a cercare di scattare buone foto. Tra trovare la luce, posizionare l'articolo, rifare 10 volte... Era scoraggiante. Alcuni vestiti magnifici rimanevano invenduti solo a causa delle foto."
                </p>
              </div>
            </div>
          </div>

          {/* Le Test qui Change Tout */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              Il Test che Cambia Tutto
            </h2>

            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-4">
                Primo test: Un vestito Zara nero
              </h3>
              <p className="mb-6">
                Marie decide di testare VintDress su un vestito nero Zara che non riusciva a vendere da 2 mesi.
              </p>

              <h4 className="font-space-grotesk font-bold text-xl mb-4">
                Risultati in 48h:
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-2xl">67 visualizzazioni</div>
                  <div className="text-sm text-gray-600">(vs 8 con la vecchia foto)</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-2xl">12 messaggi</div>
                  <div className="text-sm text-gray-600">di persone interessate</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold text-2xl">Venduto</div>
                  <div className="text-sm text-gray-600">al prezzo richiesto!</div>
                </div>
              </div>

              <p className="mt-6 text-lg italic font-semibold text-center">
                "Non ci credevo! In 48h, questo vestito che nessuno guardava era diventato il più richiesto tra i miei annunci."
              </p>
            </div>
          </div>

          {/* La Transformation Complète */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              La Trasformazione Completa
            </h2>

            <p className="text-lg mb-6">
              <strong>Settimana 1 con VintDress:</strong> Marie decide di rifare tutte le sue foto più importanti.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Articolo
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Prima (visualizzazioni/settimana)
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Dopo (visualizzazioni/settimana)
                    </th>
                    <th className="p-4 text-center font-space-grotesk font-bold">
                      Miglioramento
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Vestito Zara</td>
                    <td className="border-r-2 border-black p-4 text-center">2 visualizzazioni</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">67 visualizzazioni</td>
                    <td className="p-4 text-center font-bold text-vinted">+3250%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Jeans Levi's</td>
                    <td className="border-r-2 border-black p-4 text-center">5 visualizzazioni</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">43 visualizzazioni</td>
                    <td className="p-4 text-center font-bold text-vinted">+760%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Blazer vintage</td>
                    <td className="border-r-2 border-black p-4 text-center">1 visualizzazione</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">38 visualizzazioni</td>
                    <td className="p-4 text-center font-bold text-vinted">+3700%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4 font-semibold">Sneakers Nike</td>
                    <td className="border-r-2 border-black p-4 text-center">8 visualizzazioni</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">52 visualizzazioni</td>
                    <td className="p-4 text-center font-bold text-vinted">+550%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-200 border-4 border-black p-6 text-center">
              <p className="text-2xl font-space-grotesk font-bold">
                Media generale: +300% di visualizzazioni!
              </p>
            </div>
          </div>

          {/* Les Bénéfices Inattendus */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              I Vantaggi Inaspettati
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    1. Enorme Risparmio di Tempo
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Non devo più pianificare le mie sessioni fotografiche. In 30 secondi, ho una foto perfetta. Posso mettere in vendita i miei articoli in tempo reale!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ThumbsUp className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    2. Fiducia Ritrovata
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Ora so che i miei articoli saranno ben presentati. Non esito più a metterli online."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    3. Prezzi Rispettati
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Con foto professionali, le persone negoziano meno. Vedono la qualità e accettano il prezzo."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    4. Piacere Rinnovato
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Vendere su Vinted è tornato divertente! Vedere i miei articoli con queste foto è come avere la mia boutique."
                </p>
              </div>
            </div>
          </div>

          {/* Les Chiffres Après 1 Mois */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              I Numeri Dopo 1 Mese
            </h2>

            <div className="bg-vinted border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Risultati impressionanti:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+280%</span>
                  </div>
                  <p className="text-sm text-gray-600">di visualizzazioni medie</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">÷3</span>
                  </div>
                  <p className="text-sm text-gray-600">Divisione per 3 del tempo di vendita</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+150%</span>
                  </div>
                  <p className="text-sm text-gray-600">di fatturato mensile</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">5/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Valutazione venditore (contro 4,2 prima)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conseils de Marie */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              Consigli di Marie per i Nuovi Utenti
            </h2>

            <div className="space-y-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  1. Inizia con i tuoi pezzi migliori
                </h3>
                <p className="italic">
                  "Testa prima sui tuoi articoli di valore. L'effetto sarà più visibile."
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  2. Varia gli stili delle foto
                </h3>
                <p className="italic">
                  "L'IA propone diversi stili. Non esitare a testare per vedere cosa funziona meglio per ogni tipo di articolo."
                </p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  3. Resta onesta
                </h3>
                <p className="italic">
                  "Le foto IA sono magnifiche, ma mantieni una descrizione onesta dello stato reale dell'articolo."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  4. Usa le vecchie foto come complemento
                </h3>
                <p className="italic">
                  "Conservo le mie foto di dettaglio per mostrare la texture, le etichette, ecc."
                </p>
              </div>
            </div>
          </div>

          {/* Le Mot de la Fin */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              La Parola Finale
            </h2>
            <p className="text-white text-xl mb-6 italic">
              "VintDress non ha solo migliorato le mie foto, ha trasformato il mio modo di vedere la vendita online. Lo raccomando ad occhi chiusi a tutti i venditori Vinted che vogliono passare al livello successivo."
            </p>
            <p className="text-white text-lg font-semibold mb-8">
              Il suo consiglio finale: "Non aspettare! Ogni giorno senza VintDress sono vendite perse."
            </p>
            <Link
              to="/it"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Prova VintDress Ora!
            </Link>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-sm text-gray-600 italic">
              Grazie a Marie per questa testimonianza autentica. Se anche tu hai una success story da condividere, contattaci!
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Testimonianza", "Storia di Successo", "Vendite", "Trasformazione", "Risultati"].map((tag) => (
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
              to="/it/articles/storia-successo-marie-2025"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Success Story: Marie Guadagna 3000€/Mese
              </h3>
              <p className="text-sm text-gray-600">
                Come Marie ha trasformato la sua passione in un business redditizio
              </p>
            </Link>
            <Link
              to="/it/articles/errori-vendite-vinted"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Errori che Uccidono le tue Vendite Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Evita questi errori per massimizzare i tuoi risultati
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
