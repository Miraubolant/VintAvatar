import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Sparkles, Sun, Image as ImageIcon, Camera, CheckSquare, Settings, XCircle, Zap, Calendar } from 'lucide-react';

export default function ComeFareBelleFotoVintedPage() {
  useSEO({
    title: "Come Fare Belle Foto per Vinted: Guida Principianti 2025 | VintDress",
    description: "Guida completa per principianti: come fare belle foto per Vinted. Illuminazione, sfondo, tecniche, consigli pro. Vendi più velocemente!",
    keywords: "come fare foto vinted, foto vinted principiante, belle foto vinted, tutorial foto vinted, vendere vinted principiante",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="Come fare belle foto per Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Come Fare Belle Foto per Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Guida Principianti 2025
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-pink-pastel border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Guida Principianti
            </span>
            <span className="text-black">5 dicembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min di lettura</span>
            <span className="text-black">•</span>
            <span className="text-black">Dal Team VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Principiante', 'Foto', 'Vinted', 'Guida', 'Tutorial'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Hai appena iniziato su Vinted e ti chiedi perché i tuoi articoli non si vendono?
            Nel 90% dei casi, il problema sono le foto. Questa guida completa ti spiega tutto, passo dopo passo.
          </p>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">La realtà dei numeri:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Gli acquirenti decidono in <strong>3 secondi</strong> se sono interessati al tuo articolo</span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Una buona foto = <strong>5x più visualizzazioni</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-vinted mr-2">→</span>
                <span>Foto professionali = <strong>prezzo di vendita +25%</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold">
              "Se il venditore non cura le sue foto, curerà il mio pacco?"
            </p>
            <p className="text-sm mt-2">— Cosa pensano gli acquirenti</p>
          </div>
        </div>

        {/* Step 1: Preparare il Capo */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Passo 1: Preparare il Tuo Capo</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-3">Stirare o Vaporizzare</h3>
              <p className="mb-3">
                <strong>Perché è cruciale:</strong> Un capo stropicciato dà l'impressione di essere trascurato o di scarsa qualità.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Stira il capo prima della foto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Oppure usa un vaporizzatore per vestiti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Alternativa: appendilo in bagno durante una doccia calda</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Checklist prima della foto:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Rimuovi i peli di animali (rullo adesivo)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Controlla macchie e palline</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Rimuovi i fili che sporgono</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Verifica che tutti i bottoni siano presenti</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2: Illuminazione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sun className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Passo 2: Scegliere la Giusta Illuminazione</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Luce Naturale (Il Segreto N°1)</h3>
              <p className="mb-4"><strong>Perché è la scelta migliore:</strong></p>
              <ul className="space-y-2 mb-4 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Gratuita e disponibile ovunque</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Mostra i colori reali</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">✓</span>
                  <span>Dà un aspetto professionale</span>
                </li>
              </ul>
              <p className="font-semibold mb-2">Come usarla:</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Posizionati vicino a una grande finestra</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Evita la luce solare diretta (crea ombre dure)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Preferisci cieli leggermente nuvolosi</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Fotografa tra le 10 e le 16</span>
                </li>
              </ol>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Errori di Illuminazione da Evitare</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Flash del telefono</strong>: Appiattisce l'immagine, colori falsi</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Luce gialla delle lampadine</strong>: Distorce i colori</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Controluce</strong>: Capo troppo scuro</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombre marcate</strong>: Nascondono i dettagli</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3: Lo Sfondo */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Passo 3: Scegliere lo Sfondo Giusto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Top 3 Sfondi:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <div>
                    <p className="font-semibold">Muro bianco</p>
                    <p className="text-sm">Classico, valorizza tutti i colori</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <div>
                    <p className="font-semibold">Muro beige/crema</p>
                    <p className="text-sm">Caldo, tendenza attuale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <div>
                    <p className="font-semibold">Pavimento in legno chiaro</p>
                    <p className="text-sm">Perfetto per il flat lay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Sfondi da evitare:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Letto disfatto o lenzuola stropicciate</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Piastrelle del bagno</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Sfondo disordinato (giocattoli, oggetti...)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Pavimento con macchie o sporco visibile</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 4: Le 3 Tecniche Foto */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Passo 4: Le 3 Tecniche Fotografiche</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">1. Flat Lay (A Piatto)</h3>
              <p className="text-sm text-gray-600 mb-3">Ideale per: T-shirt, camicie, accessori</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Stendi il capo ben piatto</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Sistema le maniche simmetricamente</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Fotografa dall'alto, telefono parallelo al pavimento</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Lascia un po' di spazio intorno</span>
                </li>
              </ol>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">2. Su Gruccia</h3>
              <p className="text-sm text-gray-600 mb-3">Ideale per: Vestiti, giacche, cappotti</p>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Usa una gruccia in legno (più professionale)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Appendi a una barra o maniglia della porta</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Indietreggia abbastanza per inquadrare tutto il capo</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Evita grucce di plastica colorate</span>
                </li>
              </ol>
            </div>

            <div className="bg-vinted border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2 text-white">3. Foto Indossata (Game Changer!)</h3>
              <p className="text-white/90 mb-3">
                <strong>Perché è LA tecnica che vende:</strong>
              </p>
              <ul className="space-y-2 mb-4 text-white">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>L'acquirente visualizza l'aspetto reale</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Mostra taglio e vestibilità</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Crea connessione emotiva</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>+300% di visualizzazioni in media!</strong></span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black p-4 mb-3">
                <p className="text-black"><strong>Il problema:</strong> Difficile da fare da soli, serve un modello...</p>
              </div>
              <div className="bg-mint border-2 border-black p-4">
                <p className="text-black"><strong>La soluzione:</strong> VintDress genera foto indossate con IA in 30 secondi!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Le 5 Foto Obbligatorie */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Le 5 Foto Essenziali per Ogni Annuncio</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-display font-bold text-lg">Foto Principale</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Vista frontale completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Illuminazione perfetta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Sfondo neutro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span><strong>È quella che fa cliccare!</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-display font-bold text-lg">Foto Indossata</h3>
              </div>
              <p className="mb-3">
                <strong>Perché converte:</strong> Mostra l'aspetto reale, rassicura l'acquirente, si distingue nel feed.
              </p>
              <p className="bg-mint border-2 border-black p-3 font-semibold text-sm">
                Consiglio: Usa l'IA di VintDress per crearla facilmente
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-display font-bold text-lg">Dettagli</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Texture del tessuto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Fantasie da vicino</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Finiture (cuciture, bottoni)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Eventuali difetti</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-display font-bold text-lg">Etichetta</h3>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Marca visibile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Taglia leggibile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Composizione se possibile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prova l'autenticità</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">5</span>
                <h3 className="font-display font-bold text-lg">Vista Posteriore</h3>
              </div>
              <p>
                Alcuni capi sono diversi davanti/dietro. Mostra il taglio completo e rassicura sullo stato generale.
              </p>
            </div>
          </div>
        </div>

        {/* Impostazioni Telefono */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Settings className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Impostazioni del Tuo Telefono</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Impostazioni Ottimali:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Modalità HDR attivata</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Griglia di composizione attivata</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Rapporto 4:5 (formato Vinted ideale)</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Flash disattivato</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2 text-vinted" />
                  <span>Messa a fuoco sul capo</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-4">Consigli Pro:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Pulisci l'obiettivo (impronte = sfocatura)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Stabilizza il telefono (appoggialo a un muro)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Tocca lo schermo per mettere a fuoco</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">→</span>
                  <span>Scatta più foto e tieni la migliore</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* I 7 Errori Fatali */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <XCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">I 7 Errori Fatali da Evitare</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Foto sfocate</p>
                  <p className="text-sm">-80% di probabilità di vendita</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Illuminazione sbagliata</p>
                  <p className="text-sm">Colori alterati = resi</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Sfondo disordinato</p>
                  <p className="text-sm">Distrae l'attenzione</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold">Una sola foto</p>
                  <p className="text-sm">Diffidenza dell'acquirente</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold">Capo stropicciato</p>
                  <p className="text-sm">Impressione di trascuratezza</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
                <div>
                  <p className="font-semibold">Foto allo specchio</p>
                  <p className="text-sm">Amatoriale e poco valorizzante</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="bg-black text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0">7</span>
                <div>
                  <p className="font-semibold">Filtri Instagram</p>
                  <p className="text-sm">Altera il prodotto reale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* L'Alternativa IA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">L'Alternativa Rivoluzionaria: L'IA</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Vantaggi di VintDress:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Foto indossata in 30 secondi</p>
                  <p className="text-sm">Risparmio di tempo enorme</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Qualità professionale garantita</p>
                  <p className="text-sm">Risultato impeccabile ogni volta</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Nessun modello necessario</p>
                  <p className="text-sm">L'IA fa tutto il lavoro</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-vinted mr-2">✓</span>
                <div>
                  <p className="font-semibold">Personalizzazione completa</p>
                  <p className="text-sm">Corporatura, posa, sfondo...</p>
                </div>
              </div>
            </div>
            <div className="bg-mint border-3 border-black p-4 mt-6 text-center">
              <p className="font-display font-bold text-2xl">Risultati: +300% di visualizzazioni!</p>
            </div>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Come Funziona:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">1</div>
                <p className="font-semibold">Carica la tua foto</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">2</div>
                <p className="font-semibold">Configura il manichino</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">3</div>
                <p className="font-semibold">Genera in 30s</p>
              </div>
              <div className="text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-2 border-2 border-black text-xl">4</div>
                <p className="font-semibold">Pubblica su Vinted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Piano d'Azione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Piano d'Azione per Principianti</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Settimana 1: Le Basi</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Trova il tuo "angolo foto" con buona luce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Pratica su 5 capi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Testa diversi sfondi</span>
                </li>
              </ul>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Settimana 2: Ottimizzazione</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Confronta le tue nuove foto con quelle vecchie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Analizza quali foto hanno più visualizzazioni</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prova l'IA di VintDress sui tuoi pezzi migliori</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Settimana 3: Routine</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Crea una routine fotografica efficiente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Prepara un "kit foto" (gruccia, sfondo, ecc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vinted mr-2">•</span>
                  <span>Fotografa a lotti per risparmiare tempo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Domande Frequenti</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Quante foto mettere in un annuncio Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Minimo 5 foto: vista frontale, foto indossata, dettagli/texture, etichetta e vista posteriore.
                Più foto di qualità hai, più ispiri fiducia.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Qual è il momento migliore per scattare foto?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Tra le 10 e le 16 vicino a una finestra esposta a nord. Evita la luce solare diretta che crea ombre dure.
                Un cielo leggermente nuvoloso è ideale.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Devo usare il flash del telefono?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                No, mai! Il flash appiattisce l'immagine e distorce i colori. Preferisci sempre la luce naturale o un ring light.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Come fare una foto indossata senza modello?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Usa VintDress! La nostra IA genera foto indossate professionali in 30 secondi,
                senza bisogno di un modello.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusione + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusione</h2>
          <p className="text-white text-lg mb-6">
            La qualità delle tue foto fa <strong>tutta</strong> la differenza su Vinted.
            Con questa guida, hai tutte le chiavi per trasformare i tuoi annunci e finalmente vendere!
          </p>
          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-semibold text-lg mb-2">Il segreto dei top seller:</p>
            <p>Combinano buone basi fotografiche con l'IA per risultati professionali senza sforzo.</p>
          </div>
          <a
            href="/"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Prova VintDress Ora
          </a>
        </div>

        {/* Articoli Correlati */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articoli Correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/it/articles/5-consigli-vendere-velocemente-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Consigli per Vendere Più Velocemente →</p>
            </a>
            <a
              href="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guida Completa Foto 2025 →</p>
            </a>
            <a
              href="/it/articles/errori-vendite-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Errori da Evitare →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
