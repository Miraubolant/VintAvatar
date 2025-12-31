import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingDown, AlertTriangle, DollarSign, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const IAFotoVintedGratisVsPagoPage: React.FC = () => {
  useSEO({
    title: "IA Foto Vinted: Por Qué lo Gratis No Es Suficiente | VintDress",
    description: "IA foto Vinted gratis vs pago: descubre por qué las herramientas gratuitas no son suficientes y cómo VintDress puede realmente impulsar tus ventas.",
    keywords: "ia foto vinted gratis, ia foto vinted, generador foto vinted, ia vinted gratis, foto vinted ia, herramienta foto vinted, mejorar foto vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop"
          alt="IA Foto Vinted Gratis vs Pago"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              IA FOTO VINTED
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Por Qué lo Gratis No Es Suficiente
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              GUÍA
            </span>
            <span className="font-body text-sm text-gray-600">Por Equipo VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">18 de diciembre de 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">7 min de lectura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            IA Foto Vinted: Por Qué lo Gratis No Es Suficiente
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            ¿Buscas una IA gratuita para tus fotos de Vinted? Descubre por qué las herramientas de pago realmente marcan la diferencia para vender más rápido.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["IA Foto", "Vinted", "Gratis", "Comparativa", "Fotos Vinted"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction Card */}
        <div className="bg-pink-pastel border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-black text-lg">
            ¿Has buscado "IA foto Vinted gratis" en Google? No eres el único. Miles de vendedores de Vinted buscan soluciones gratuitas para mejorar sus fotos. Pero aquí está la verdad que nadie te cuenta: lo gratis tiene un coste oculto.
          </p>
        </div>

        {/* The Promise of Free AI */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            La Promesa de las IA Gratuitas
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              Te prometen milagros: ¡transforma tus fotos en imágenes profesionales gratis! Pero detrás de estas promesas se esconde una realidad muy diferente.
            </p>
          </div>
        </section>

        {/* What You Really Get */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            Lo Que Realmente Obtienes con lo Gratis
          </h3>

          <div className="space-y-4">
            {/* Image Quality */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Calidad de Imagen Mediocre
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Baja resolución (a menudo 512x512 píxeles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Detalles borrosos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Colores que no coinciden con el original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Texturas deformadas</span>
                </li>
              </ul>
            </div>

            {/* Usage Limitations */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Limitaciones de Uso
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Colas de espera de varias horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Límite de 1-2 imágenes por día</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Publicidad intrusiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Registro obligatorio con recopilación de datos</span>
                </li>
              </ul>
            </div>

            {/* Disappointing Results */}
            <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Resultados Decepcionantes
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Maniquíes con proporciones irreales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Ropa que ya no se parece al original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Fondos de mala calidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className="font-body text-sm text-gray-700">Imágenes inutilizables para Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Real Cost of Free */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            El Verdadero Coste de lo "Gratis"
          </h2>
          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-black text-lg mb-4">
              Cuando algo es gratis, tú eres el producto.
            </p>
            <p className="font-body text-gray-700">
              Esto es lo que realmente te cuesta lo gratis:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* 1. Your Time */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Tu Tiempo</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-3">
                ¿Cuántas horas pasas probando diferentes herramientas, esperando en colas, rehaciendo generaciones fallidas?
              </p>
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-display font-bold text-black text-sm">
                  2h de tu tiempo = 20€ de valor
                </p>
                <p className="font-body text-xs text-gray-700 mt-1">
                  Un pack VintDress a 3,99€ te ahorra horas.
                </p>
              </div>
            </div>

            {/* 2. Lost Sales */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Ventas Perdidas</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-3">
                Una foto de mala calidad en Vinted significa:
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Menos clics</span></li>
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Menos ventas</span></li>
                <li className="flex gap-2"><TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Artículos estancados</span></li>
              </ul>
            </div>

            {/* 3. Your Reputation */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Tu Reputación</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Las fotos borrosas o deformadas dan una imagen poco profesional. Los compradores de Vinted confían en los vendedores que presentan bien sus artículos.
              </p>
            </div>
          </div>
        </section>

        {/* Why Quality Has a Price */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Por Qué la Calidad Tiene un Precio
          </h2>
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              La inteligencia artificial de calidad profesional requiere:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Servidores GPU potentes</p>
                  <p className="font-body text-xs text-gray-600">Que cuestan miles de euros al mes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Modelos IA avanzados</p>
                  <p className="font-body text-xs text-gray-600">Desarrollados durante años</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Infraestructura fiable</p>
                  <p className="font-body text-xs text-gray-600">Sin tiempos de espera</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-black text-sm">Soporte técnico</p>
                  <p className="font-body text-xs text-gray-600">En caso de problemas</p>
                </div>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black text-center">
                Es imposible ofrecer todo esto gratis de forma sostenible.
              </p>
            </div>
          </div>
        </section>

        {/* VintDress: The Profitable Investment */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress: La Inversión Rentable
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-bold text-white text-lg">
              Seamos claros: VintDress es un servicio de pago. No pretendemos ser gratis, y aquí te explicamos por qué es mejor para ti.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Característica</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Gratis</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Resolución</td>
                    <td className="p-4 text-center border-r-3 border-black">512px</td>
                    <td className="p-4 text-center bg-mint font-semibold">Alta resolución</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Tiempo de espera</td>
                    <td className="p-4 text-center border-r-3 border-black">1-2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 segundos</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Calidad maniquí</td>
                    <td className="p-4 text-center border-r-3 border-black">Variable</td>
                    <td className="p-4 text-center bg-mint font-semibold">Realista</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Personalización</td>
                    <td className="p-4 text-center border-r-3 border-black">Limitada</td>
                    <td className="p-4 text-center bg-mint font-semibold">Completa</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Límite diario</td>
                    <td className="p-4 text-center border-r-3 border-black">1-2</td>
                    <td className="p-4 text-center bg-mint font-semibold">Según tu pack</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing */}
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            Nuestros Precios Transparentes
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">3,99€</div>
              <p className="font-display font-bold text-black mb-1">10 generaciones</p>
              <p className="font-body text-xs text-gray-600">0,40€ por imagen</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">7,99€</div>
              <p className="font-display font-bold text-black mb-1">25 generaciones</p>
              <p className="font-body text-xs text-gray-600">0,32€ por imagen</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-display font-bold text-vinted mb-2">12,99€</div>
              <p className="font-display font-bold text-black mb-1">40 generaciones/mes</p>
              <p className="font-body text-xs text-gray-600">0,32€ por imagen</p>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-vinted" />
              Retorno de la Inversión
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Hagamos las cuentas:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Tu prenda está a la venta a <strong>15€</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Con una foto básica, se estanca <strong>30 días</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted mt-1">•</span>
                <span className="font-body text-sm text-gray-700">Con una foto VintDress, se vende en <strong>3 días</strong></span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Una sola venta acelerada devuelve 4× tu inversión.
              </p>
            </div>
          </div>
        </section>

        {/* Honest Comparison */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Comparativa Honesta: Alternativas del Mercado
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Herramientas Gratuitas
              </h3>
              <div className="mb-4">
                <p className="font-display font-bold text-sm text-green-600 mb-2">VENTAJAS:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Es gratis (aparentemente)</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">DESVENTAJAS:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Calidad insuficiente para Vinted</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tiempo perdido considerable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Resultados aleatorios</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Sin soporte</span></li>
                </ul>
              </div>
            </div>

            {/* VintDress */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                VintDress
              </h3>
              <div className="mb-4">
                <p className="font-display font-bold text-sm text-green-600 mb-2">VENTAJAS:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Calidad profesional garantizada</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Generación en 30 segundos</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Maniquí personalizable</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Soporte reactivo</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Diseñado específicamente para Vinted</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-orange-600 mb-2">DESVENTAJAS:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Servicio de pago (desde 3,99€)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonios de Vendedores Convertidos
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Pasé horas con herramientas gratuitas. Los 3,99€ de VintDress me ahorraron un montón de tiempo y mis ventas despegaron."
              </p>
              <p className="font-display font-bold text-black text-sm">— Sara</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Calculaba mal: perdía más en tiempo y ventas no realizadas que pagando por una herramienta pro."
              </p>
              <p className="font-display font-bold text-black text-sm">— Carlos</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-3 italic">
                "Lo gratis me dio imágenes inutilizables. VintDress funciona de verdad."
              </p>
              <p className="font-display font-bold text-black text-sm">— María</p>
            </div>
          </div>
        </section>

        {/* Honest Advice */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Nuestro Consejo Honesto
            </h3>
            <p className="font-body text-white mb-3">
              Si vendes 1-2 artículos al año, las herramientas gratuitas pueden ser suficientes a pesar de sus defectos.
            </p>
            <p className="font-body text-white mb-4">
              Pero si vendes regularmente en Vinted y quieres fotos que conviertan, ahorrar tiempo y tener resultados garantizados:
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Entonces una herramienta profesional como VintDress es una inversión, no un gasto.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              Conclusión
            </h2>
            <p className="font-body text-gray-700 mb-4">
              La búsqueda "IA foto Vinted gratis" es legítima. Todo el mundo quiere ahorrar. Pero el verdadero ahorro es <strong>vender más rápido con menos esfuerzo</strong>.
            </p>
            <p className="font-body text-gray-700 mb-4">
              Las herramientas gratuitas tienen su lugar para probar o salir del apuro. Para vender en serio en Vinted, la calidad profesional marca toda la diferencia.
            </p>
            <div className="bg-white border-2 border-black p-4">
              <p className="font-display font-bold text-vinted text-center">
                VintDress es de pago porque la calidad tiene un precio. Y ese precio es ridículo comparado con los resultados.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Existe una IA foto Vinted realmente gratis y de calidad?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Las herramientas gratuitas existen pero generalmente producen resultados de calidad insuficiente para Vinted: baja resolución, deformaciones, largos tiempos de espera.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Por qué VintDress no es gratis?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La tecnología IA profesional requiere servidores potentes y modelos avanzados que tienen un coste real. VintDress ofrece tarifas accesibles desde 3,99€ para garantizar una calidad óptima.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Vale la pena pagar para Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sí, si vendes regularmente. Una sola venta acelerada gracias a una mejor foto devuelve varias veces el coste de la herramienta.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuánto cuesta VintDress?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  VintDress ofrece packs desde 3,99€ por 10 generaciones, es decir, 0,40€ por foto profesional.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo/a para Invertir en Tus Ventas?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Descubre VintDress ahora y transforma tus fotos de Vinted en verdaderas herramientas de venta.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              EMPEZAR AHORA
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Artículos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/es/articles/maniqui-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Maniquí IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Descubre cómo un maniquí IA puede transformar tus fotos.</p>
            </Link>
            <Link
              to="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guía Completa Fotos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Todas las técnicas para fotos que venden.</p>
            </Link>
            <Link
              to="/es/articles/5-trucos-vender-mas-rapido-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Trucos para Vender Más Rápido</h3>
              <p className="font-body text-sm text-gray-600">Optimiza tus ventas con estrategias probadas.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IAFotoVintedGratisVsPagoPage;
