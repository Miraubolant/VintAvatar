import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Camera, CheckCircle, XCircle, Star, ArrowRight, Lightbulb, Smartphone, Sun, Image } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

const ComeFareFotoVintedPage: React.FC = () => {
  useSEO({
    title: "Come Fare Belle Foto Vinted nel 2026 | VintDress",
    description: "Guida completa per scattare foto fantastiche per Vinted. Tecniche, attrezzatura e consigli per foto che vendono. Foto indossate con manichino IA.",
    keywords: "foto vinted, presentazione vinted, manichino IA, come fare foto vinted, foto indossata vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="Come fare belle foto per Vinted"
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
            Come Fare Belle Foto Vinted nel 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Team VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min di lettura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 Gennaio 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["foto vinted", "presentazione vinted", "manichino IA", "foto indossata", "vendite Vinted"].map((tag) => (
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
            Su Vinted, <strong className="text-vinted">il 90% delle decisioni di acquisto è visivo</strong>. Le tue foto sono il tuo primo e spesso unico argomento di vendita. Un annuncio con belle foto attira fino a 5 volte più visualizzazioni rispetto a uno con foto mediocri. In questa guida completa, scoprirai tutte le tecniche per scattare foto che convertono davvero.
          </p>
        </div>

        {/* Section 1 - I 3 metodi */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            I 3 Metodi di Presentazione
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Esistono tre modi principali per fotografare i tuoi vestiti su Vinted. Ognuno ha i suoi vantaggi e svantaggi. Ecco un confronto dettagliato per aiutarti a scegliere.
          </p>

          <div className="space-y-6">
            {/* Foto piatta */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Foto Piatta (Flat Lay)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Vantaggi:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Facile e veloce da fare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Non serve attrezzatura speciale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Mostra bene dettagli e fantasie</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Svantaggi:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Difficile visualizzare come veste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Meno attraente visivamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Tasso di conversione più basso</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Ideale per: accessori, t-shirt basic, articoli dove la fantasia è importante.
              </p>
            </div>

            {/* Foto su gruccia */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Foto su Gruccia
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Vantaggi:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Mostra la forma del capo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Relativamente semplice da allestire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Più professionale del flat lay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Svantaggi:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Non mostra come sta indossato</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>La gruccia può deformare alcuni capi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Richiede uno sfondo uniforme</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Ideale per: camicie, giacche, vestiti leggeri.
              </p>
            </div>

            {/* Foto indossata */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Foto Indossata (Il Gold Standard)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Vantaggi:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>+300% visualizzazioni</strong> in media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>L'acquirente visualizza il risultato reale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Migliore tasso di conversione</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aspetto professionale e attraente</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Svantaggi:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Richiede un manichino o indossarlo tu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Richiede più tempo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Non sempre hai la taglia giusta</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm">
                <strong>Soluzione:</strong> Con VintDress, genera foto indossate su manichino IA in 30 secondi, qualsiasi sia la taglia!
              </p>
            </div>
          </div>

          {/* Tabella comparativa */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-vinted text-white">
                  <th className="p-3 border-2 border-black font-display font-bold text-left">Criterio</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Flat Lay</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Su Gruccia</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Indossata</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Facilità</td>
                  <td className="p-3 border-2 border-black text-center text-green-600">Facile</td>
                  <td className="p-3 border-2 border-black text-center text-yellow-600">Media</td>
                  <td className="p-3 border-2 border-black text-center text-red-600">Difficile</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Visualizzazioni</td>
                  <td className="p-3 border-2 border-black text-center">Base</td>
                  <td className="p-3 border-2 border-black text-center">+50%</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">+300%</td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Conversione</td>
                  <td className="p-3 border-2 border-black text-center">Bassa</td>
                  <td className="p-3 border-2 border-black text-center">Media</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">Alta</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Tempo</td>
                  <td className="p-3 border-2 border-black text-center">2 min</td>
                  <td className="p-3 border-2 border-black text-center">5 min</td>
                  <td className="p-3 border-2 border-black text-center">15 min+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 - Attrezzatura */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Attrezzatura Minima Necessaria
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Buone notizie: non hai bisogno di attrezzatura professionale per scattare belle foto Vinted. Ecco l'essenziale.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Smartphone */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-vinted border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Smartphone
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Il tuo smartphone è più che sufficiente! Non serve una fotocamera.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Pulisci l'obiettivo prima di ogni sessione</li>
                <li>- Disattiva il flash</li>
                <li>- Attiva la modalità HDR se disponibile</li>
                <li>- Usa il timer per evitare il mosso</li>
              </ul>
            </div>

            {/* Illuminazione */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-mint border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Sun className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Illuminazione
              </h3>
              <p className="font-body text-black text-sm mb-3">
                La luce naturale è la tua migliore amica, ed è gratis!
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Preferisci la luce del giorno</li>
                <li>- Evita il sole diretto (ombre dure)</li>
                <li>- Posizionati vicino a una finestra</li>
                <li>- Ring light opzionale per l'inverno</li>
              </ul>
            </div>

            {/* Sfondo */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-pink-pastel border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Sfondo Neutro
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Uno sfondo semplice mette in risalto i tuoi vestiti.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Parete bianca o beige chiaro</li>
                <li>- Lenzuolo teso e liscio</li>
                <li>- Cartone bianco (flat lay)</li>
                <li>- Evita sfondi disordinati</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Tecnica passo dopo passo */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Tecnica Fotografica Passo dopo Passo
          </h2>

          <div className="space-y-4">
            {/* Passo 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prepara il Tuo Capo
                </h3>
                <p className="font-body text-black">
                  <strong>Stira o vaporizza</strong> il tuo articolo. Usa un rullo levapelucchi per rimuovere pelucchi e peli. Un capo sgualcito dà un'impressione di trascuratezza e allontana gli acquirenti.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prepara il Tuo Spazio
                </h3>
                <p className="font-body text-black">
                  Posizionati vicino a una finestra con luce naturale. Sistema il tuo sfondo uniforme. Assicurati che non ci siano oggetti che distraggono nell'inquadratura.
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Scatta gli Angoli Essenziali
                </h3>
                <ul className="font-body text-black space-y-1">
                  <li><strong>Vista frontale</strong>: vista principale dell'articolo</li>
                  <li><strong>Vista posteriore</strong>: mostra il retro completo</li>
                  <li><strong>Dettagli</strong>: etichetta, bottoni, cuciture, texture</li>
                  <li><strong>Difetti</strong>: sii onesto sulle imperfezioni</li>
                </ul>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Inquadratura e Nitidezza
                </h3>
                <p className="font-body text-black">
                  Lascia spazio intorno al capo. Centra il tuo articolo. Tocca lo schermo per mettere a fuoco il vestito. Mantieni il telefono fermo o usa un treppiede.
                </p>
              </div>
            </div>

            {/* Passo 5 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Editing Leggero (Opzionale)
                </h3>
                <p className="font-body text-black">
                  Regola leggermente luminosità e contrasto se necessario. Evita filtri eccessivi che alterano i colori reali del capo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Foto indossate game changer */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Foto Indossate: Il Game Changer
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  Perché le Foto Indossate Convertono Meglio
                </h3>
                <ul className="font-body text-black space-y-2">
                  <li>
                    <strong>Proiezione mentale:</strong> L'acquirente si immagina di indossare il capo
                  </li>
                  <li>
                    <strong>Risultato realistico:</strong> Si vede come cade davvero il capo
                  </li>
                  <li>
                    <strong>Maggiore fiducia:</strong> Meno rischio di delusione alla ricezione
                  </li>
                  <li>
                    <strong>+300% visualizzazioni:</strong> L'algoritmo di Vinted favorisce queste foto
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Il Problema: Non Sempre Hai Tempo o un Manichino
            </h3>
            <ul className="font-body text-black space-y-2 mb-4">
              <li>- Non hai la taglia giusta per tutti i tuoi articoli</li>
              <li>- Non vuoi mostrarti in ogni foto</li>
              <li>- Un manichino fisico è costoso e ingombrante</li>
              <li>- Fotografare ogni articolo indossato richiede troppo tempo</li>
            </ul>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <Camera className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              La Soluzione: VintDress
            </h3>
            <p className="font-body text-white mb-6 max-w-xl mx-auto">
              Genera foto indossate su manichino IA in 30 secondi. Personalizza genere, corporatura, posa e sfondo. Qualità professionale garantita.
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROVA ORA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5 - Errori da evitare */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Errori da Evitare
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Cattiva Illuminazione
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Foto scure, giallastre o con ombre dure. Preferisci sempre la luce naturale indiretta.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Sfondo Disordinato
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Un letto sfatto, oggetti in giro... Distrae e sembra poco professionale. Usa sempre uno sfondo pulito e uniforme.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Foto Sfocate
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Niente di peggio di una foto dove non si vedono i dettagli. Stabilizza il telefono e tocca per mettere a fuoco manualmente.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Poche Foto
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Una sola foto non basta. Mostra l'articolo da ogni angolazione: fronte, retro, dettagli, etichetta.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Filtri Eccessivi
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                I filtri che cambiano i colori creano aspettative irrealistiche e portano a controversie. Resta naturale.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Nascondere i Difetti
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Non nascondere mai una macchia o uno strappo. Fotografa i difetti chiaramente per evitare resi e recensioni negative.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Domande Frequenti
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Devo indossare io stesso i vestiti nelle foto?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                È l'ideale, ma non sempre pratico. Se non hai la taglia giusta o preferisci restare anonimo, usa VintDress per creare foto indossate su manichino IA.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Quante foto devo includere per annuncio?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Minimo 4 foto: vista frontale, vista posteriore, almeno un dettaglio e l'etichetta. L'ideale è usare tutte le 20 foto consentite da Vinted per mostrare l'articolo da ogni angolazione.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Flat lay o foto indossata?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Le foto indossate ottengono +300% di visualizzazioni in media. Combina entrambe: una foto indossata come immagine principale, poi foto flat lay per i dettagli.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Qual è il momento migliore per scattare foto?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Durante il giorno, con luce naturale. Evita le ore di sole diretto (ombre dure) e preferisci un tempo leggermente nuvoloso per una luce morbida e diffusa.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Come mostro i difetti di un articolo?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Scatta una foto ravvicinata del difetto con buona illuminazione. Sii onesto nella descrizione. Gli acquirenti apprezzano la trasparenza ed evita controversie.
              </div>
            </details>
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            Pronto a Migliorare le Tue Foto Vinted?
          </h3>
          <p className="font-body text-black mb-6">
            Applica questi consigli oggi e trasforma i tuoi annunci con VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREA LE MIE FOTO
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articoli Correlati
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "foto-indossate-vinted", title: "Foto Indossate su Vinted" },
              { slug: "algoritmo-vinted-visibilita-2025", title: "Algoritmo Vinted" },
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
};

export default ComeFareFotoVintedPage;
