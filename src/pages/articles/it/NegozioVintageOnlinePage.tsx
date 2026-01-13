import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { ShoppingBag, Search, Camera, TrendingUp, Shield, Star, CheckCircle, X, Store, Smartphone } from 'lucide-react';

export default function NegozioVintageOnlinePage() {
  useSEO({
    title: "Negozio Vintage Online: Migliori Piattaforme 2026 | VintDress",
    description: "Guida completa ai negozi vintage online nel 2026. Confronto Vinted, Vestiaire Collective, Depop. Consigli per comprare e vendere abbigliamento usato.",
    keywords: "negozio vintage online, vinted, vestiaire collective, depop, abbigliamento usato, moda sostenibile, comprare vintage",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Negozio vintage online - abbigliamento vintage e usato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Negozio Vintage Online
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Migliori Piattaforme 2026
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-vinted border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
              Guida
            </span>
            <span className="text-black">13 Gennaio 2026</span>
            <span className="text-black">•</span>
            <span className="text-black">12 min di lettura</span>
            <span className="text-black">•</span>
            <span className="text-black">Di Emma Dubois</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Vintage', 'Usato', 'Vinted', 'Moda Sostenibile', 'Confronto'].map((tag) => (
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
            I negozi vintage online hanno rivoluzionato il modo di comprare e vendere vestiti.
            Finiti i tempi in cui bisognava passare ore nei negozi dell'usato fisici!
            Oggi, milioni di pezzi unici sono accessibili con pochi clic.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">La Rivoluzione del Second Hand</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">Numeri chiave 2026:</h3>
                <ul className="space-y-1">
                  <li>• 45 milioni di utenti Vinted in Europa</li>
                  <li>• Mercato usato: +25% all'anno</li>
                  <li>• 70% dei 18-35 anni compra usato</li>
                  <li>• Risparmio medio: 60% vs nuovo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Perché i negozi vintage online spopolano:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Moda sostenibile ed eco-responsabile',
                'Prezzi imbattibili vs fast-fashion',
                'Pezzi unici e vintage',
                'Shopping facile 24h/24'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vinted: Il Negozio N°1 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Vinted: Il Negozio Vintage Online N°1</h2>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              Con oltre 45 milioni di utenti, Vinted è diventato IL riferimento
              per l'usato in Europa. Perché tanto successo?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Vantaggi Vinted
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>0% commissione</strong> per venditori</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Spedizione semplificata (etichette integrate)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Protezione acquirente inclusa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Chat integrata per negoziare</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>App mobile intuitiva</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Categorie popolari:</h3>
              <ul className="space-y-2">
                {[
                  'Abbigliamento donna (60% vendite)',
                  'Moda bambini (+40% crescita)',
                  'Abbigliamento uomo',
                  'Accessori e borse',
                  'Scarpe',
                  'Vintage e collezionismo'
                ].map((cat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-vinted text-white text-xs font-bold w-5 h-5 flex items-center justify-center mr-2 border border-black">
                      {idx + 1}
                    </span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Confronto Piattaforme */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Confronto Negozi Vintage Online</h2>
          </div>

          {/* Vinted */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vinted</h3>
              <span className="bg-vinted text-white px-3 py-1 font-bold border-2 border-black">N°1 Consigliato</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Usato generalista</p>
              </div>
              <div>
                <p className="font-semibold">Commissione venditore:</p>
                <p className="text-green-600 font-bold">0%</p>
              </div>
              <div>
                <p className="font-semibold">Protezione acquirente:</p>
                <p>5% + 0,70€</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideale per:</strong> Tutti, dai principianti ai venditori pro</p>
          </div>

          {/* Vestiaire Collective */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vestiaire Collective</h3>
              <span className="bg-black text-white px-3 py-1 font-bold border-2 border-black">Lusso</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Lusso e designer</p>
              </div>
              <div>
                <p className="font-semibold">Commissione venditore:</p>
                <p className="text-orange-600 font-bold">15-25%</p>
              </div>
              <div>
                <p className="font-semibold">Autenticazione:</p>
                <p>Controllo qualità incluso</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideale per:</strong> Vendere/comprare lusso (Chanel, Hermès, LV...)</p>
          </div>

          {/* Depop */}
          <div className="bg-mint/50 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Depop</h3>
              <span className="bg-purple-500 text-white px-3 py-1 font-bold border-2 border-black">Tendenza</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Streetwear, vintage, tendenza</p>
              </div>
              <div>
                <p className="font-semibold">Commissione venditore:</p>
                <p className="text-orange-600 font-bold">10%</p>
              </div>
              <div>
                <p className="font-semibold">Pubblico:</p>
                <p>Gen Z, creativi</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideale per:</strong> Pezzi unici, streetwear, vintage di tendenza</p>
          </div>

          {/* Subito */}
          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Subito.it</h3>
              <span className="bg-orange-500 text-white px-3 py-1 font-bold border-2 border-black">Locale</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Annunci generalisti</p>
              </div>
              <div>
                <p className="font-semibold">Commissione venditore:</p>
                <p className="text-green-600 font-bold">0% (base)</p>
              </div>
              <div>
                <p className="font-semibold">Specialità:</p>
                <p>Consegna a mano</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideale per:</strong> Vendite locali, grandi volumi</p>
          </div>
        </div>

        {/* Come Vendere */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Come Vendere su un Negozio Vintage Online</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Creare account venditore', desc: 'Registrazione gratuita, profilo completo con foto' },
              { num: '2', title: 'Fotografare i tuoi articoli', desc: 'Foto luminose, più angolazioni, dettagli' },
              { num: '3', title: 'Scrivere descrizioni', desc: 'Marca, taglia, stato, misure, difetti' },
              { num: '4', title: 'Fissare il prezzo giusto', desc: 'Analisi concorrenza, margine trattativa' },
              { num: '5', title: 'Spedire velocemente', desc: 'Imballaggio curato, spedizione entro 48h' },
            ].map((step) => (
              <div key={step.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-vinted border-3 border-black p-6">
            <p className="text-white text-lg mb-4">
              Il segreto per vendere velocemente? <strong>Foto professionali!</strong>
            </p>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La soluzione VintDress:</h3>
              <p className="mb-3">La nostra IA trasforma le tue foto di vestiti in foto con modello professionale:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>+300% più visualizzazioni</strong> sui tuoi annunci</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Vendi <strong>3x più veloce</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Risultato in <strong>30 secondi</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendenze 2026 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Tendenze Negozi Vintage 2026</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Pezzi più ricercati:</h3>
              <ul className="space-y-2">
                {[
                  'Jeans Levi\'s vintage 501',
                  'Giacche pelle anni 80-90',
                  'Abiti vintage anni 70',
                  'Sportswear retro (Nike, Adidas)',
                  'Borse di lusso usate',
                  'Cappotti lana oversize'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-vinted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Marchi che vanno forte:</h3>
              <ul className="space-y-2">
                {[
                  'Levi\'s (soprattutto vintage)',
                  'Nike / Adidas vintage',
                  'The North Face',
                  'Carhartt',
                  'Ralph Lauren',
                  'Patagonia'
                ].map((brand, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-vinted" />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Consigli per Acquirenti */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Consigli per Comprare in Sicurezza</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Cosa verificare
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Foto chiare e dettagliate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Descrizione completa con misure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Recensioni venditore positive (+4,5 stelle)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Difetti menzionati onestamente</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                Segnali d'allarme
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Prezzi troppo belli per essere veri</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Foto sfocate o stock</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Account creato di recente senza vendite</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Pagamento fuori piattaforma</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-vinted" />
              Consigli per negoziare
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Sii educato e diretto</p>
                <p className="text-sm text-gray-600">"Ciao, accetteresti X€?"</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Fai offerte realistiche</p>
                <p className="text-sm text-gray-600">-10 a 20% max del prezzo</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Domande Frequenti</h2>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Qual è il miglior negozio vintage online?</h3>
              <p className="text-gray-700">
                Vinted è la scelta migliore per la maggior parte grazie allo 0% di commissione venditore,
                ampia selezione e facilità d'uso. Per il lusso, scegli Vestiaire Collective.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">È sicuro comprare nei negozi vintage online?</h3>
              <p className="text-gray-700">
                Sì, le grandi piattaforme come Vinted offrono protezione acquirente. I tuoi soldi
                sono trattenuti fino a conferma ricezione. In caso di problema, vieni rimborsato.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Come vendere bene su un negozio vintage online?</h3>
              <p className="text-gray-700">
                Le 3 chiavi del successo: foto di qualità (usa VintDress per foto con modello pro),
                descrizioni dettagliate con misure, e prezzi competitivi.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">Quanto si può guadagnare su un negozio vintage online?</h3>
              <p className="text-gray-700">
                Dipende dal volume e qualità. I venditori attivi su Vinted generano in media
                200-500€/mese. I top venditori possono superare 2000€/mese.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusione</h2>
          <p className="text-lg mb-6">
            I negozi vintage online hanno democratizzato l'accesso alla moda second hand. Che tu sia
            acquirente o venditore, queste piattaforme offrono opportunità incredibili per consumare in modo
            più responsabile trovando ottimi affari.
          </p>

          <a
            href="/it"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Aumentare le mie vendite con VintDress
          </a>
        </div>

        {/* Articoli Correlati */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Articoli Correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/it/articles/vendere-vintage-vinted-guida"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vendere Vintage su Vinted →</p>
            </a>
            <a
              href="/it/articles/come-vendere-su-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guida Vendita Vinted →</p>
            </a>
            <a
              href="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guida Foto Vinted →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
