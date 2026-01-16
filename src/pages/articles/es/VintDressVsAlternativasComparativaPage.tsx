import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Target, Award, Scale, Users, MessageCircle, Trophy, ArrowRight, Check, X, AlertCircle } from 'lucide-react';

export default function VintDressVsAlternativasComparativaPage() {
  useSEO({
    title: "VintDress vs Alternativas: ¿Qué Generador de Fotos IA Elegir en 2025? | Comparativa",
    description: "Comparativa completa de generadores de fotos IA para Vinted en 2025. VintDress vs alternativas: precios, calidad, funcionalidades. ¡Guía de compra!",
    keywords: "vintdress opiniones, generador foto ia vinted, comparativa foto ia, mejor herramienta vinted, alternativa vintdress, foto ia vinted 2025",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
          alt="VintDress vs Alternativas Comparativa 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              VintDress vs Alternativas
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Comparativa Completa 2025
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
              Comparativa
            </span>
            <span className="text-black">3 de diciembre de 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min de lectura</span>
            <span className="text-black">•</span>
            <span className="text-black">Por Equipo VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Comparativa', 'IA', 'Vinted', 'Fotos', '2025'].map((tag) => (
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
            ¿Buscas la mejor herramienta IA para crear fotos puestas para tus anuncios de Vinted?
            Hemos probado las principales soluciones del mercado para ayudarte a elegir bien.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">¿Por Qué Usar un Generador de Fotos IA?</h2>
              <p className="mb-4">
                Vender en Vinted se ha vuelto ultra-competitivo. Con <strong>más de 65 millones de usuarios</strong>,
                la calidad de las fotos marca la diferencia.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Problema de las fotos clásicas:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Tiempo de preparación (30-60 min por artículo)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Necesidad de un modelo o hacerse fotos</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Calidad variable según las condiciones</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Resultados a menudo amateurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Solución: Los generadores IA:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Fotos profesionales en segundos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sin necesidad de modelo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Calidad constante</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Resultados que venden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Criterios de Comparación */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Criterios de Comparación</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: '1', title: 'Calidad de imagen', desc: 'Realismo, detalles, coherencia' },
              { num: '2', title: 'Velocidad de generación', desc: 'Tiempo de espera' },
              { num: '3', title: 'Opciones de personalización', desc: 'Morfología, pose, fondo' },
              { num: '4', title: 'Integración Vinted', desc: 'Facilidad de importación desde Vinted' },
              { num: '5', title: 'Precio', desc: 'Relación calidad-precio' },
              { num: '6', title: 'Privacidad', desc: 'Protección de datos y rostro' },
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

        {/* VintDress - El Especialista */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">VintDress: El Especialista Vinted</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              VintDress es <strong>LA solución francesa</strong> diseñada específicamente para vendedores de Vinted.
              La herramienta destaca por su integración nativa con Vinted y su comprensión de las necesidades específicas
              de los vendedores de moda de segunda mano.
            </p>

            <h3 className="font-display font-bold text-xl mb-4">Puntos Fuertes:</h3>

            <div className="space-y-4">
              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Integración Vinted única:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Importación directa via URL de Vinted</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Extracción automática de fotos de anuncios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Optimizado para el formato Vinted (4:5)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Personalización completa:</h4>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>• Género (mujer/hombre)</span>
                  <span>• Tono de piel</span>
                  <span>• Morfología</span>
                  <span>• Pose (de pie, sentado...)</span>
                  <span>• Fondo (neutro, urbano...)</span>
                  <span>• Tipo de prenda</span>
                </div>
              </div>

              <div className="bg-cream border-3 border-black p-4">
                <h4 className="font-semibold mb-2">Protección de la privacidad:</h4>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Opción de ocultar rostro incluida</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Servidores europeos (RGPD)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Datos seguros</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarifas */}
          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Tarifas VintDress:</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-3 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-3 border-black">
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Plan</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Precio</th>
                    <th className="border-r-2 border-black p-3 text-left font-display font-bold">Generaciones</th>
                    <th className="p-3 text-left font-display font-bold">Precio/Foto</th>
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
                    <td className="border-r-2 border-black p-3 font-semibold">Suscripción</td>
                    <td className="border-r-2 border-black p-3">12,99€/mes</td>
                    <td className="border-r-2 border-black p-3">40</td>
                    <td className="p-3 font-bold text-vinted">0,32€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-semibold">¡Los créditos de los packs nunca caducan!</p>
            </div>
          </div>

          {/* Puntuación Global */}
          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Puntuación Global VintDress:</h3>

            <div className="space-y-3">
              {[
                { critere: 'Calidad', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Velocidad', note: '⭐⭐⭐⭐⭐', detail: '30 segundos' },
                { critere: 'Personalización', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Precio', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
                { critere: 'Especialización Vinted', note: '⭐⭐⭐⭐⭐', detail: '5/5' },
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

        {/* Tabla Comparativa */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">VintDress vs Alternativas</h2>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-lg mb-3">Limitaciones de las alternativas genéricas:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Sin importación URL de Vinted</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Formato de imagen no adaptado</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Sin opciones específicas para ropa de segunda mano</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Resultados menos realistas en ropa real</span>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-3 border-black bg-white">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Criterio</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">VintDress</th>
                  <th className="p-3 text-center font-display font-bold">Alternativas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Import URL Vinted', vintdress: '✅ Sí', alternatives: '❌ No' },
                  { critere: 'Formato 4:5 nativo', vintdress: '✅ Sí', alternatives: '⚠️ Variable' },
                  { critere: 'Ocultar rostro', vintdress: '✅ Incluido', alternatives: '⚠️ Raro' },
                  { critere: 'Tipo de prenda', vintdress: '✅ Específico', alternatives: '❌ Genérico' },
                  { critere: 'Servidores RGPD', vintdress: '✅ Europa', alternatives: '⚠️ Variable' },
                  { critere: 'Soporte español', vintdress: '✅ Sí', alternatives: '⚠️ Raramente' },
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

        {/* Lo Que Buscan los Vendedores */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Lo Que Buscan los Vendedores de Vinted</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">1. Autenticidad</h3>
              <p>
                Los compradores de Vinted quieren ver la prenda real, no una versión idealizada.
                VintDress preserva los detalles de la prenda original.
              </p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">2. Confianza</h3>
              <p>
                El ocultamiento del rostro y los servidores europeos tranquilizan tanto a vendedores como compradores
                sobre la protección de datos.
              </p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">3. Rapidez</h3>
              <p>
                Con decenas de artículos para fotografiar, la velocidad es crucial.
                <strong> 30 segundos vs 30 minutos</strong> lo cambia todo.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-2">4. Rentabilidad</h3>
              <p>
                A <strong>0,32€ por foto de calidad pro</strong>, el ROI es inmediato:
                una venta más rápida amortiza fácilmente la inversión.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Testimonios de Usuarios</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-6">
              <p className="italic mb-3">
                "Probé varias soluciones antes de VintDress. ¿La diferencia? La importación URL de Vinted me ahorra
                muchísimo tiempo, y la calidad es constante."
              </p>
              <p className="font-semibold">— María, vendedora desde hace 3 años</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-6">
              <p className="italic mb-3">
                "La relación calidad-precio es inigualable. Mis visitas se han triplicado desde que uso fotos IA."
              </p>
              <p className="font-semibold">— Lucas, vendedor pro (150+ artículos)</p>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="italic mb-3">
                "No me atrevía a hacerme fotos. Con VintDress, ¡mis anuncios por fin tienen aspecto profesional!"
              </p>
              <p className="font-semibold">— Sofía, principiante</p>
            </div>
          </div>
        </div>

        {/* Veredicto */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Veredicto: ¿Qué Herramienta Elegir?</h2>
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">Por qué VintDress gana:</h3>

            <div className="space-y-3">
              {[
                'Única herramienta con importación URL Vinted - Ahorro de tiempo enorme',
                'Especializada en moda de segunda mano - Entiende las necesidades específicas',
                'Precios accesibles - Desde 0,32€/foto',
                'Francesa y RGPD - Soporte y datos seguros',
                'Ocultamiento de rostro incluido - Privacidad garantizada',
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
              <h3 className="font-display font-bold text-lg mb-3">Usa VintDress si:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Vendes en Vinted (¡obvio!)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tienes varios artículos para fotografiar</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Quieres resultados pro sin esfuerzo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Te importa la privacidad</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-display font-bold text-lg mb-3">Considera alternativas si:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>No vendes en Vinted</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Solo buscas edición de fotos básica</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>Necesitas retoques complejos (distintos de fotos puestas)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cómo Empezar */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Cómo Empezar con VintDress</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { num: '1', titre: 'Crear una cuenta', desc: 'Gratis, registro rápido' },
              { num: '2', titre: 'Elegir tu plan', desc: 'Pack o suscripción según tus necesidades' },
              { num: '3', titre: 'Importar tu prenda', desc: 'URL Vinted o subir foto' },
              { num: '4', titre: 'Generar y descargar', desc: '¡30 segundos y listo!' },
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
            <h3 className="font-display font-bold text-xl mb-4">Nuestra Recomendación:</h3>
            <div className="space-y-2">
              <p><strong>Para probar:</strong> Pack Starter a 3,99€ (10 generaciones)</p>
              <p><strong>Para vendedores regulares:</strong> Pack Pro a 7,99€ (25 generaciones)</p>
              <p><strong>Para vendedores intensivos:</strong> Suscripción a 12,99€/mes</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Preguntas Frecuentes</h2>

          <div className="space-y-4">
            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Cuál es el mejor generador de fotos IA para Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress es la única herramienta especializada para Vinted con importación URL directa, formato 4:5 nativo
                y opción de ocultar rostro. Es la opción recomendada para vendedores de Vinted.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Cuánto cuesta una foto IA para Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Con VintDress, el precio por foto varía de 0,32€ a 0,40€ según el plan elegido.
                Los créditos de los packs nunca caducan, a diferencia de las suscripciones mensuales.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Están permitidas las fotos IA en Vinted?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                Sí, puedes usar fotos generadas por IA en Vinted siempre que representen fielmente
                la prenda real que vendes.
              </p>
            </details>

            <details className="bg-cream border-3 border-black p-6 cursor-pointer group">
              <summary className="font-display font-bold text-lg list-none flex items-center justify-between">
                <span>¿Cuál es la diferencia entre VintDress y las alternativas?</span>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 pt-4 border-t-2 border-black">
                VintDress es la única que ofrece importación directa de URL Vinted, especialización en moda de segunda mano,
                ocultamiento de rostro incluido, y servidores europeos conformes al RGPD.
              </p>
            </details>
          </div>
        </div>

        {/* Conclusión + CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Conclusión</h2>
          <p className="text-white text-lg mb-4">
            En un mercado donde la calidad de las fotos marca la diferencia, elegir la herramienta IA correcta es estratégico.
          </p>
          <p className="text-white text-lg mb-6">
            <strong>VintDress destaca</strong> por su especialización en Vinted, su integración única (importación URL),
            sus opciones de personalización completas, y su excelente relación calidad-precio.
          </p>
          <p className="text-white text-lg mb-6">
            Para los vendedores de Vinted que quieren fotos profesionales sin complicarse la vida, la elección es clara.
          </p>
          <a
            href="/es"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Probar VintDress Ahora
          </a>
        </div>

        {/* Artículos Relacionados */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía Completa Fotos 2025 →</p>
            </a>
            <a
              href="/es/articles/5-consejos-vender-rapido-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Consejos Vender Rápido →</p>
            </a>
            <a
              href="/es/articles/ia-servicio-moda-revolucion"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">IA al Servicio de la Moda →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
