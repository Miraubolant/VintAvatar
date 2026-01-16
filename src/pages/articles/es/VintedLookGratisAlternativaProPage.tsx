import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const VintedLookGratisAlternativaProPage: React.FC = () => {
  useSEO({
    title: "Look Vinted Gratis: La Alternativa Pro Que Realmente Vende | VintDress",
    description: "Crea looks profesionales para Vinted que venden. Descubre por qué los mejores vendedores eligen VintDress en lugar de herramientas gratuitas.",
    keywords: "look vinted gratis, look vinted, estilo vinted, foto look vinted, crear look vinted, vinted estilo gratis, outfit vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=500&fit=crop"
          alt="Look Profesional Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              LOOK VINTED GRATIS
            </h1>
            <p className="font-display font-bold text-pink-pastel text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              La Alternativa Pro Que Realmente Vende
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
            <span className="font-body text-sm text-gray-600">26 de diciembre de 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min de lectura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Look Vinted Gratis: La Alternativa Pro Que Realmente Vende
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            ¿Buscas crear looks para Vinted gratis? Descubre por qué una pequeña inversión puede multiplicar tus ventas por 3.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Look Vinted", "Foto Vinted", "Estilo Vinted", "Venta online", "Moda"].map((tag) => (
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
        <div className="bg-vinted border-4 border-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            ¿Quieres crear looks profesionales para tus anuncios de Vinted sin arruinarte? Has buscado "look Vinted gratis" esperando encontrar la solución milagrosa. Te daremos algo mejor: la verdad sobre lo que realmente funciona.
          </p>
        </div>

        {/* What is a Vinted Look */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Qué es un "Look Vinted"?
          </h2>
          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              Un <strong>look Vinted</strong> es una foto donde tu prenda se presenta de manera atractiva, idealmente puesta o estilizada. Es lo que marca la diferencia entre:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">Una foto plana que pasa desapercibida</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700">Una foto con estilo que genera clics y ventas</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-4">
            Por Qué los Looks Venden
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VISTAS EN VINTED</p>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">×3</div>
              <p className="font-display font-bold text-black text-sm">VENTAS MÁS RÁPIDAS</p>
            </div>
          </div>
        </section>

        {/* Free Options Reality */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Las Opciones "Gratuitas": La Realidad
          </h2>

          {/* Option 1 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Opción 1: Pedir a un Amigo que Pose
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">VENTAJAS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Gratis, auténtico</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">DESVENTAJAS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Depende de la disponibilidad</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Calidad variable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Tiempo considerable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Imposible escalar</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white border-3 border-black p-6 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Opción 2: Apps de Retoque Gratuitas
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">VENTAJAS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Accesibles</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">DESVENTAJAS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">No crean maniquíes virtuales</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Resultados amateur visibles</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Tiempo de retoque importante</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">No adaptado para fotos puestas</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white border-3 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Opción 3: IAs Gratuitas Online
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-display font-bold text-sm text-green-600 mb-2">VENTAJAS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Sin coste directo</span></li>
                </ul>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-red-600 mb-2">DESVENTAJAS:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Calidad muy variable</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Colas de espera interminables</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Marcas de agua en las imágenes</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Deformaciones de la ropa</span></li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-gray-700">Tus datos vendidos</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Time Value Calculation */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-8 h-8 text-black flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  La Verdadera Pregunta: ¿Cuánto Vale Tu Tiempo?
                </h3>
                <p className="font-body text-gray-700 mb-4">
                  Imagina que pasas <strong>2 horas</strong> buscando una herramienta gratuita que funcione, esperando en colas, rehaciendo generaciones fallidas y retocando imágenes de calidad mediocre.
                </p>
                <div className="bg-white border-3 border-black p-4 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-display font-bold text-black text-lg mb-2">
                    Si tu tiempo vale 10€/hora = 20€ "gastados" para un resultado mediocre
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    Con VintDress a 3,99€, obtienes 10 fotos profesionales en 5 minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VintDress Features */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            VintDress: El Look Pro Accesible
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Feature 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">1</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Maniquí IA Ultra-Realista</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Tecnología FLUX 2 Pro (usada por marcas de moda). Renderizado fotorrealista imposible de distinguir de una foto real.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">2</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Personalización Completa</h3>
              </div>
              <p className="font-body text-sm text-gray-700 mb-2">
                Género, morfología (XS a XXL), tono de piel (todos los tipos), pose (frontal, perfil, dinámica), decorado (estudio pro, urbano, naturaleza...).
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">3</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Calidad Lista para Vinted</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Alta resolución, sin marca de agua, descarga inmediata, formato optimizado para Vinted.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-lg">4</span>
                </div>
                <h3 className="font-display font-bold text-lg text-black">Bonus: Descripción IA</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Título optimizado para búsqueda y descripción completa generada automáticamente.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              El Proceso en 30 Segundos
            </h3>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">1</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Sube tu foto</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">2</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Configura tu maniquí</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">3</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Genera en un clic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-2 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-xl">4</span>
                </div>
                <p className="font-body text-sm text-black font-semibold">Descarga y publica</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Comparativa: Gratis vs VintDress
          </h2>
          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Criterio</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Gratis</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Calidad</td>
                    <td className="p-4 text-center border-r-3 border-black">Variable/Baja</td>
                    <td className="p-4 text-center bg-mint font-semibold">Profesional</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Tiempo</td>
                    <td className="p-4 text-center border-r-3 border-black">30min - 2h</td>
                    <td className="p-4 text-center bg-mint font-semibold">30 segundos</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Fiabilidad</td>
                    <td className="p-4 text-center border-r-3 border-black">Aleatoria</td>
                    <td className="p-4 text-center bg-mint font-semibold">Constante</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Personalización</td>
                    <td className="p-4 text-center border-r-3 border-black">Limitada</td>
                    <td className="p-4 text-center bg-mint font-semibold">Total</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Marca de agua</td>
                    <td className="p-4 text-center border-r-3 border-black">Frecuente</td>
                    <td className="p-4 text-center bg-mint font-semibold">Nunca</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Soporte</td>
                    <td className="p-4 text-center border-r-3 border-black">Ninguno</td>
                    <td className="p-4 text-center bg-mint font-semibold">Reactivo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border-r-3 border-black bg-cream">Precio</td>
                    <td className="p-4 text-center border-r-3 border-black">0€ (+ tu tiempo)</td>
                    <td className="p-4 text-center bg-mint font-bold text-vinted text-lg">0,40€/foto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonios de Vendedores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Buscaba desesperadamente una herramienta gratuita para mis looks de Vinted. Después de horas perdidas, probé VintDress. 3,99€ y 10 minutos después, tenía 10 fotos que generaron 5 ventas en una semana."
              </p>
              <p className="font-display font-bold text-black">— Laura</p>
              <p className="font-body text-sm text-gray-600">Vendedora activa</p>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 mb-4 italic">
                "Lo gratis me costó ventas. Mis fotos eran mediocres, mis artículos se estancaban. Desde VintDress, vendo en promedio en 4 días en lugar de 3 semanas."
              </p>
              <p className="font-display font-bold text-black">— Pablo</p>
              <p className="font-body text-sm text-gray-600">Vendedor regular</p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            La Inversión Más Rentable
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Matemáticas Simples
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Pack 10 fotos</p>
                <p className="font-display font-bold text-2xl text-black">3,99€</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Precio medio artículo Vinted</p>
                <p className="font-display font-bold text-2xl text-black">18€</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-body text-xs text-gray-600 mb-1">Tasa de conversión</p>
                <p className="font-display font-bold text-2xl text-black">+200%</p>
              </div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-4">
              <p className="font-display font-bold text-black text-lg text-center">
                Si UNA sola de tus 10 fotos genera UNA venta adicional = 14,51€ netos de ganancia
              </p>
            </div>
          </div>

          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              ROI Real de Nuestros Usuarios
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>+47% de ventas</strong> el primer mes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Tiempo de venta dividido por 3</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700"><strong>Menos negociaciones</strong> sobre el precio</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              En Resumen
            </h2>
            <p className="font-body text-gray-700 mb-4">
              ¿Buscabas "look Vinted gratis"? Esto es lo que debes recordar:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">1</span>
                </div>
                <span className="font-body text-gray-700">Lo gratis existe pero cuesta caro en tiempo y ventas perdidas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">2</span>
                </div>
                <span className="font-body text-gray-700">La calidad marca la diferencia en una plataforma tan competitiva</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">3</span>
                </div>
                <span className="font-body text-gray-700">0,40€ por foto profesional es una inversión, no un gasto</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-sm">4</span>
                </div>
                <span className="font-body text-gray-700">Los vendedores exitosos entienden esta ecuación</span>
              </li>
            </ul>
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
                <span>¿Cómo crear un look Vinted gratis?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Las opciones gratuitas (pedir a un amigo, apps de retoque, IAs gratuitas) existen pero tienen limitaciones importantes: calidad variable, tiempo considerable, resultados a menudo inutilizables para Vinted.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Por qué los looks profesionales venden mejor?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Las fotos puestas profesionales generan +300% de vistas y ventas 3 veces más rápidas porque los compradores visualizan mejor cómo queda la prenda.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuánto cuesta un look profesional con VintDress?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Solo 0,40€ por foto con el pack de 10 créditos a 3,99€. Una inversión rentabilizada desde la primera venta adicional.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿VintDress es adecuado para principiantes en Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sí, la interfaz es simple: sube tu foto, configura el maniquí, genera en 30 segundos. No se requieren habilidades técnicas.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo/a para Crear Looks Que Venden?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              VintDress te permite crear looks profesionales para tus anuncios de Vinted a un precio accesible. Sin suscripción obligatoria, sin marca de agua, sin compromisos de calidad.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              CREAR MIS LOOKS PRO
              <ArrowRight className="w-5 h-5" />
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
              to="/es/articles/ia-foto-vinted-gratis-vs-pago"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">IA Vinted Gratis: Por Qué Pagar</h3>
              <p className="font-body text-sm text-gray-600">Entiende por qué invertir en calidad marca la diferencia.</p>
            </Link>
            <Link
              to="/es/articles/5-trucos-vender-mas-rapido-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Trucos para Vender Más Rápido</h3>
              <p className="font-body text-sm text-gray-600">Optimiza tus ventas con estas estrategias probadas.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default VintedLookGratisAlternativaProPage;
