import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Target, Award, Scale, Users, MessageCircle, Trophy, ArrowRight, Check, X, AlertCircle } from 'lucide-react';

export default function VintDressVsAlternativeConfrontoPage() {
  useSEO({
    title: "VintDress vs Alternative: Quale Generatore di Foto IA Scegliere nel 2025? | Confronto",
    description: "Confronto completo dei generatori di foto IA per Vinted nel 2025. VintDress vs alternative: prezzi, qualità, funzionalità. Guida all'acquisto!",
    keywords: "vintdress recensioni, generatore foto ia vinted, confronto foto ia, miglior strumento vinted, alternativa vintdress, foto ia vinted 2025",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
          alt="VintDress vs Alternative Confronto 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              VintDress vs Alternative
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Confronto Completo 2025
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
              Confronto
            </span>
            <span className="text-black">3 dicembre 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min di lettura</span>
            <span className="text-black">•</span>
            <span className="text-black">Di Team VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Confronto', 'IA', 'Vinted', 'Foto', '2025'].map((tag) => (
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
        {/* Introduzione */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Cerchi il miglior strumento IA per creare foto indossate per i tuoi annunci Vinted?
            Abbiamo testato le principali soluzioni del mercato per aiutarti a fare la scelta giusta.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Perché Usare un Generatore di Foto IA?</h2>
              <p className="mb-4">
                Vendere su Vinted è diventato ultra-competitivo. Con <strong>oltre 65 milioni di utenti</strong>,
                la qualità delle foto fa la differenza.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Problema delle foto classiche:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Tempo di preparazione (30-60 min per articolo)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Bisogno di un modello o di farsi foto</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Qualità variabile secondo le condizioni</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Risultati spesso amatoriali</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Soluzione: I generatori IA:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Foto professionali in secondi</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Nessun modello necessario</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Qualità costante</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Risultati che vendono</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Criteri di Confronto */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Criteri di Confronto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: '1', title: 'Qualità dell\'immagine', desc: 'Realismo, dettagli, coerenza' },
              { num: '2', title: 'Velocità di generazione', desc: 'Tempo di attesa' },
              { num: '3', title: 'Opzioni di personalizzazione', desc: 'Morfologia, posa, sfondo' },
              { num: '4', title: 'Integrazione Vinted', desc: 'Facilità di import da Vinted' },
              { num: '5', title: 'Prezzo', desc: 'Rapporto qualità-prezzo' },
              { num: '6', title: 'Privacy', desc: 'Protezione dati e volto' },
            ].map((critere) => (
              <div key={critere.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {critere.num}
                  </span>
                  <div>
                    <p className="font-semibold">{critere.title}</p>
                    <p className="text-sm text-gray-600">{critere.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VintDress - Lo Specialista */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">VintDress: Lo Specialista Vinted</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              VintDress è <strong>LA soluzione francese</strong> progettata specificamente per i venditori Vinted.
              Lo strumento si distingue per la sua integrazione nativa con Vinted e la comprensione delle esigenze specifiche
              dei venditori di moda di seconda mano.
            </p>

            <h3 className="font-display font-bold text-xl mb-4">Punti di Forza:</h3>

            <div className="space-y-4">
              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Integrazione Vinted unica:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Import diretto via URL Vinted</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Estrazione automatica delle foto dagli annunci</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Ottimizzato per il formato Vinted (4:5)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Personalizzazione completa:</h4>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>• Genere (donna/uomo)</span>
                  <span>• Tonalità pelle</span>
                  <span>• Morfologia</span>
                  <span>• Posa (in piedi, seduta...)</span>
                  <span>• Sfondo (neutro, urbano...)</span>
                  <span>• Tipo di capo</span>
                </div>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Protezione della privacy:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Opzione mascheramento volto inclusa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Server europei (GDPR)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Dati sicuri</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tariffe */}
          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Tariffe VintDress:</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-3 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-3 border-black">
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Piano</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Prezzo</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Generazioni</th>
                    <th className="p-3 text-left font-display font-bold">Prezzo/Foto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-3 font-semibold">Pack Starter</td>
                    <td className="border-r-2 border-black p-3">3,99€</td>
                    <td className="border-r-2 border-black p-3">10</td>
                    <td className="p-3 font-bold text-vinted">0,40€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-mint/20">
                    <td className="border-r-2 border-black p-3 font-semibold">Pack Pro</td>
                    <td className="border-r-2 border-black p-3">7,99€</td>
                    <td className="border-r-2 border-black p-3">25</td>
                    <td className="p-3 font-bold text-vinted">0,32€</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-3 font-semibold">Abbonamento</td>
                    <td className="border-r-2 border-black p-3">12,99€/mese</td>
                    <td className="border-r-2 border-black p-3">40</td>
                    <td className="p-3 font-bold text-vinted">0,32€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-semibold">I crediti dei pack non scadono mai!</p>
            </div>
          </div>

          {/* Voto Globale */}
          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Voto Globale VintDress:</h3>

            <div className="space-y-3">
              {[
                { critere: 'Qualità', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Velocità', note: '⭐⭐⭐⭐⭐', detail: '30 secondi' },
                { critere: 'Personalizzazione', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Prezzo', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Specializzazione Vinted', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
              ].map((item) => (
                <div key={item.critere} className="flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="font-semibold">{item.critere}:</span>
                  <div className="flex items-center gap-2">
                    <span>{item.note}</span>
                    <span className="text-sm text-gray-600">({item.detail})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabella Comparativa */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">VintDress vs Alternative</h2>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-lg mb-3">Limitazioni delle alternative generiche:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Nessun import URL Vinted</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Formato immagine non adatto</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Nessuna opzione specifica per abbigliamento di seconda mano</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Risultati meno realistici su abbigliamento reale</span>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-3 border-black bg-white">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Criterio</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">VintDress</th>
                  <th className="p-3 text-center font-display font-bold">Alternative</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Import URL Vinted', vintdress: '✅ Sì', alternatives: '❌ No' },
                  { critere: 'Formato 4:5 nativo', vintdress: '✅ Sì', alternatives: '⚠️ Variabile' },
                  { critere: 'Mascheramento volto', vintdress: '✅ Incluso', alternatives: '⚠️ Raro' },
                  { critere: 'Tipo di capo', vintdress: '✅ Specifico', alternatives: '❌ Generico' },
                  { critere: 'Server GDPR', vintdress: '✅ Europa', alternatives: '⚠️ Variabile' },
                  { critere: 'Supporto italiano', vintdress: '✅ Sì', alternatives: '⚠️ Raramente' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.critere}</td>
                    <td className="border-r-2 border-black p-3 text-center font-semibold">{row.vintdress}</td>
                    <td className="p-3 text-center">{row.alternatives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cosa Cercano i Venditori */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Cosa Cercano i Venditori Vinted</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">1. Autenticità</h3>
              <p>
                Gli acquirenti Vinted vogliono vedere il vero capo, non una versione idealizzata.
                VintDress preserva i dettagli del capo originale.
              </p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">2. Fiducia</h3>
              <p>
                Il mascheramento del volto e i server europei rassicurano venditori e acquirenti
                sulla protezione dei dati.
              </p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">3. Velocità</h3>
              <p>
                Con decine di articoli da fotografare, la velocità è cruciale.
                <strong> 30 secondi vs 30 minuti</strong> cambia tutto.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">4. Redditività</h3>
              <p>
                A <strong>0,32€ per foto di qualità pro</strong>, il ROI è immediato:
                una vendita più rapida ripaga facilmente l'investimento.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonianze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Testimonianze degli Utenti</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <p className="italic mb-3">
                "Ho testato diverse soluzioni prima di VintDress. La differenza? L'import URL Vinted mi fa
                risparmiare tantissimo tempo, e la qualità è costante."
              </p>
              <p className="font-semibold">— Maria, venditrice da 3 anni</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <p className="italic mb-3">
                "Il rapporto qualità-prezzo è imbattibile. Le mie visualizzazioni sono triplicate da quando uso le foto IA."
              </p>
              <p className="font-semibold">— Luca, venditore pro (150+ articoli)</p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="italic mb-3">
                "Non osavo farmi foto. Con VintDress, i miei annunci hanno finalmente un aspetto professionale!"
              </p>
              <p className="font-semibold">— Sofia, principiante</p>
            </div>
          </div>
        </div>

        {/* Verdetto */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Verdetto: Quale Strumento Scegliere?</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Perché VintDress vince:</h3>

            <div className="space-y-3">
              {[
                'Unico strumento con import URL Vinted - Enorme risparmio di tempo',
                'Specializzato in moda di seconda mano - Capisce le esigenze specifiche',
                'Prezzi accessibili - Da 0,32€/foto',
                'Francese e GDPR - Supporto e dati sicuri',
                'Mascheramento volto incluso - Privacy garantita',
              ].map((raison, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {idx + 1}
                  </span>
                  <p className="font-semibold pt-1">{raison}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Usa VintDress se:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Vendi su Vinted (ovvio!)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Hai più articoli da fotografare</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Vuoi risultati pro senza sforzo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ti importa della privacy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Considera le alternative se:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Non vendi su Vinted</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Cerchi solo editing foto di base</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Hai bisogno di ritocchi complessi (diversi dalle foto indossate)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Come Iniziare */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Come Iniziare con VintDress</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { num: '1', titre: 'Creare un account', desc: 'Gratuito, registrazione rapida' },
              { num: '2', titre: 'Scegliere il piano', desc: 'Pack o abbonamento secondo le tue esigenze' },
              { num: '3', titre: 'Importare il tuo capo', desc: 'URL Vinted o carica foto' },
              { num: '4', titre: 'Generare e scaricare', desc: '30 secondi e sei pronto!' },
            ].map((etape) => (
              <div key={etape.num} className="bg-cream border-3 border-black p-4 text-center">
                <div className="bg-vinted text-white font-display font-bold w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-black text-xl">
                  {etape.num}
                </div>
                <p className="font-semibold mb-2">{etape.titre}</p>
                <p className="text-sm text-gray-600">{etape.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">La Nostra Raccomandazione:</h3>
            <div className="space-y-2">
              <p><strong>Per testare:</strong> Pack Starter a 3,99€ (10 generazioni)</p>
              <p><strong>Per venditori regolari:</strong> Pack Pro a 7,99€ (25 generazioni)</p>
              <p><strong>Per venditori intensivi:</strong> Abbonamento a 12,99€/mese</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Domande Frequenti</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Qual è il miglior generatore di foto IA per Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress è l'unico strumento specializzato per Vinted con import URL diretto, formato 4:5 nativo
                e opzione mascheramento volto. È la scelta consigliata per i venditori Vinted.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Quanto costa una foto IA per Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Con VintDress, il prezzo per foto varia da 0,32€ a 0,40€ secondo il piano scelto.
                I crediti dei pack non scadono mai, a differenza degli abbonamenti mensili.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Le foto IA sono consentite su Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Sì, puoi usare foto generate dall'IA su Vinted purché rappresentino fedelmente
                il capo reale che vendi.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>Qual è la differenza tra VintDress e le alternative?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress è l'unico a offrire import diretto URL Vinted, specializzazione moda di seconda mano,
                mascheramento volto incluso, e server europei conformi al GDPR.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusione + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusione</h2>
          <p className="text-white text-lg mb-4">
            In un mercato dove la qualità delle foto fa la differenza, scegliere il giusto strumento IA è strategico.
          </p>
          <p className="text-white text-lg mb-6">
            <strong>VintDress si distingue</strong> per la sua specializzazione Vinted, la sua integrazione unica (import URL),
            le sue opzioni di personalizzazione complete, e l'ottimo rapporto qualità-prezzo.
          </p>
          <p className="text-white text-lg mb-6">
            Per i venditori Vinted che vogliono foto professionali senza complicarsi la vita, la scelta è chiara.
          </p>
          <a
            href="/it"
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
              href="/it/articles/guida-completa-foto-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guida Completa Foto 2025 →</p>
            </a>
            <a
              href="/it/articles/5-consigli-vendere-velocemente-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Consigli Vendere Velocemente →</p>
            </a>
            <a
              href="/it/articles/ia-servizio-moda-rivoluzione"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">IA al Servizio della Moda →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
