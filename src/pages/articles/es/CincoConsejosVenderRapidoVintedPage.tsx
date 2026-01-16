import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, FileText, DollarSign, Clock, MessageCircle, CheckCircle2, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const CincoConsejosVenderRapidoVintedPage: React.FC = () => {
  useSEO({
    title: "5 Consejos para Vender Más Rápido en Vinted | VintDress",
    description: "Descubre 5 consejos esenciales para impulsar tus ventas en Vinted. Fotos IA, precio óptimo, timing perfecto - ¡todos nuestros secretos revelados!",
    keywords: "ventas vinted, consejos vinted, fotos vinted, vender más rápido, fotos IA",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="5 Consejos para Vender en Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              5 CONSEJOS VINTED
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Vender Más Rápido y a Mejor Precio
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
              CONSEJOS
            </span>
            <span className="font-body text-sm text-gray-600">Por Equipo VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">28 de noviembre de 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">5 min de lectura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            5 Consejos para Vender Más Rápido en Vinted
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Descubre los secretos para maximizar tus ventas con fotos perfectas generadas por IA.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Vinted", "Consejos", "Ventas", "Fotos", "IA"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            Vinted se ha convertido en LA plataforma esencial para vender ropa de segunda mano. Pero con millones de usuarios, ¿cómo hacer que tus anuncios destaquen?
          </p>
        </div>

        {/* Consejo 1: Fotos */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">1</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Fotos que Marcan la Diferencia
                  </h2>
                </div>
                <p className="font-display font-bold text-lg text-vinted mb-4">
                  Secreto N°1: La calidad de tus fotos
                </p>
                <p className="font-body text-gray-700 mb-4">
                  Los compradores de Vinted juzgan primero con los ojos. Una foto de mala calidad puede ahuyentar a un comprador potencial, aunque tu artículo sea genial.
                </p>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">
                Nuestros Consejos
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Usa luz natural (cerca de una ventana)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Evita las fotos borrosas o muy oscuras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Muestra el artículo desde varios ángulos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Solución revolucionaria:</strong> ¡Usa nuestra IA para crear fotos puestas ultra-realistas en 30 segundos!</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consejo 2: Título y Descripción */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">2</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Título Atractivo y Descripción Detallada
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Título perfecto */}
              <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  El Título Perfecto en 3 Pasos
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">1.</span>
                    <span className="font-body text-sm text-gray-700">Marca + Modelo (si se conoce)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">2.</span>
                    <span className="font-body text-sm text-gray-700">Talla clara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">3.</span>
                    <span className="font-body text-sm text-gray-700">Estado preciso</span>
                  </li>
                </ol>
                <div className="bg-white border-2 border-black p-3 mt-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Ejemplo:</p>
                  <p className="font-display font-bold text-sm text-black">
                    "ZARA Vestido negro S - Excelente estado - Usado 2x"
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Para la Descripción
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Material del tejido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Medidas exactas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Historia del artículo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-700">Defectos eventuales (transparencia = confianza)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consejo 3: Precio */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-mint border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">3</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Precio Estratégico
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                La Regla de Oro
              </h3>
              <p className="font-body text-white">
                Empieza con un precio ligeramente superior a lo que realmente quieres obtener. Esto te da margen de negociación.
              </p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Truco Psicológico
              </h3>
              <p className="font-body text-gray-700">
                Usa precios terminados en <strong>9</strong> (19€ en lugar de 20€) - ¡realmente funciona!
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Menos atractivo</p>
                  <p className="font-display font-bold text-2xl text-gray-500 line-through">20€</p>
                </div>
                <div className="bg-white border-2 border-black p-3 text-center">
                  <p className="font-body text-xs text-gray-600">Más atractivo</p>
                  <p className="font-display font-bold text-2xl text-vinted">19€</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consejo 4: Timing */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-pastel border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">4</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Momento Óptimo de Publicación
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Los Mejores Momentos
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">1</span>
                    </div>
                    <p className="font-display font-bold text-black">Domingo noche (18h-20h)</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Preparación de la semana</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">2</span>
                    </div>
                    <p className="font-display font-bold text-black">Miércoles noche</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Mitad de semana, motivación de compra</p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">3</span>
                    </div>
                    <p className="font-display font-bold text-black">Viernes tarde</p>
                  </div>
                  <p className="font-body text-sm text-gray-600">Preparación del fin de semana</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consejo 5: Reactividad */}
        <section className="mb-12">
          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-vinted border-3 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-vinted border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-2xl">5</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-black">
                    Reactividad y Servicio al Cliente
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  Responde Rápidamente
                </h3>
                <p className="font-body text-white text-sm">
                  Los compradores de Vinted son impacientes. Una respuesta en una hora puede marcar la diferencia.
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg text-black mb-3">
                  Sé Flexible
                </h3>
                <p className="font-body text-gray-700 text-sm">
                  Precio, envío agrupado, plazos... ¡La negociación es parte del juego!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Conclusión
            </h2>
            <p className="font-body text-white mb-4">
              Con estos 5 consejos, ¡deberías ver tus ventas despegar! Y no olvides: las fotos de calidad profesional pueden aumentar tus ventas en <strong>+300%</strong>.
            </p>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-vinted text-center text-lg">
                Ahí es donde entra nuestra IA...
              </p>
            </div>
          </div>
        </section>

        {/* Resumen visual */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Resumen de los 5 Consejos
          </h2>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Fotos IA</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Título + Descripción</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Precio en 9</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Buen Timing</p>
            </div>
            <div className="bg-white border-3 border-black p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageCircle className="w-8 h-8 text-vinted mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-black">Reactividad</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuál es el mejor momento para publicar en Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Los mejores horarios son domingo noche (18h-20h), miércoles noche y viernes tarde.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cómo fijar el precio correcto en Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Analiza 5 artículos similares vendidos, posiciónate 10-20% por debajo de la media y usa precios psicológicos (19€ en lugar de 20€).
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Las fotos IA realmente aumentan las ventas?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sí, nuestros usuarios ven +300% más visualizaciones y ventas 3 a 5 veces más rápidas con fotos generadas por IA.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo para Transformar tus Ventas?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              ¡Prueba nuestro generador IA ahora y aumenta tus ventas en +300%!
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROBAR IA AHORA
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
              to="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guía Completa Fotos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Todas las técnicas para fotos que venden.</p>
            </Link>
            <Link
              to="/es/articles/estrategia-venta-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Estrategia de Venta Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">La estrategia completa para dominar Vinted.</p>
            </Link>
            <Link
              to="/es/articles/algoritmo-vinted-visibilidad-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Algoritmo Vinted Visibilidad</h3>
              <p className="font-body text-sm text-gray-600">Comprende el algoritmo para maximizar tu visibilidad.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CincoConsejosVenderRapidoVintedPage;
