import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Zap, TrendingUp, Star, Shield, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ManiquiIAVintedPage: React.FC = () => {
  useSEO({
    title: "Mejora tus ventas en Vinted con un maniquí IA | VintDress",
    description: "Optimiza tus ventas en Vinted con un maniquí IA. Descubre cómo VintDress puede transformar tus fotos.",
    keywords: "maniquí ia vinted, maniquí virtual vinted, ia para fotos vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop"
          alt="Maniquí IA para fotos profesionales de Vinted"
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
            GUÍA
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Mejora tus ventas en Vinted con un maniquí IA
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipo VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>26 de diciembre de 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["maniquí ia", "vinted", "fotos vinted", "e-commerce", "venta online"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-pink-pastel border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            En el mundo del e-commerce, y particularmente en Vinted, la presentación de tus artículos es fundamental. Si eres vendedor en Vinted, seguramente has notado que las fotos de calidad profesional atraen a más compradores. Pero, ¿cómo obtener estas fotos sin gastar una fortuna? La respuesta: <strong className="text-vinted">el maniquí IA</strong>.
          </p>
        </div>

        {/* Section 1 - What is an AI Mannequin */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Qué es un Maniquí IA?
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <p className="font-body text-black leading-relaxed mb-4">
              Un maniquí IA es una tecnología innovadora que te permite crear fotos de ropa de manera profesional gracias a la inteligencia artificial. Con herramientas como VintDress, puedes generar imágenes realistas de tu ropa usada por un maniquí virtual en solo unos clics.
            </p>
          </div>

          {/* Why VintDress */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-black flex items-center gap-2">
              <Zap className="w-6 h-6 text-vinted" />
              ¿Por qué elegir VintDress?
            </h3>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-body text-black leading-relaxed mb-6">
                VintDress destaca por su calidad. A diferencia de las herramientas gratuitas, VintDress utiliza la tecnología <strong>FLUX 2 Pro</strong>, que garantiza resultados indistinguibles de fotos reales. Aquí te explicamos por qué las herramientas gratuitas no son una solución viable:
              </p>

              <div className="bg-cream border-3 border-black p-5">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problemas de las herramientas gratuitas:
                  </p>
                </div>
                <ul className="space-y-3 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Calidad mediocre</strong>: Las fotos generadas suelen ser borrosas y poco favorecedoras.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Marcas de agua</strong>: La mayoría de los servicios gratuitos añaden marcas de agua a las imágenes, arruinando su calidad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Deformaciones de la ropa</strong>: Los modelos gratuitos pueden deformar tu ropa, lo que puede disuadir a los posibles compradores.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Tiempos de espera</strong>: Puedes esperar hasta 30 minutos para generar una foto, un lujo que pocos vendedores pueden permitirse.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - The Real Cost */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            El Coste Real de lo Gratuito
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-black leading-relaxed mb-4">
              Invertir en un servicio gratuito puede parecer económico al principio, pero puede volverse costoso rápidamente en términos de tiempo y ventas perdidas. Por ejemplo, si pierdes 30 minutos esperando fotos de mala calidad, es tiempo que podrías haber dedicado a promocionar tus artículos o responder preguntas de compradores.
            </p>

            <div className="bg-white border-3 border-black p-5 mt-4">
              <p className="font-body text-black leading-relaxed">
                Con VintDress, puedes generar una foto en solo <strong className="text-vinted">30 segundos</strong> por un coste de <strong className="text-vinted">0,40€/foto</strong>. Imagina que vendes una prenda a 20€. Con una foto de calidad, es mucho más probable que cierres la venta. Una sola venta adicional cubre con creces el coste de las fotos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Sales Boost */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Cómo Aumentará el Maniquí Virtual Tus Ventas?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">+300%</div>
              <p className="font-display font-bold text-black text-sm">VISTAS EN VINTED</p>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">÷3</div>
              <p className="font-display font-bold text-black text-sm">TIEMPO DE VENTA</p>
            </div>

            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-5xl font-display font-bold text-vinted mb-2">↓</div>
              <p className="font-display font-bold text-black text-sm">NEGOCIACIONES</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-vinted" />
              Ventajas concretas
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Tiempo de venta dividido por 3</strong>: Los artículos con fotos de calidad se venden más rápido.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Menos negociaciones de precio</strong>: Las fotos profesionales inspiran confianza.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Menos devoluciones</strong>: Los compradores pueden visualizar mejor lo que compran.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl text-black mb-6">
            Funcionalidades de VintDress
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Maniquí IA Ultra-Realista</h4>
                  <p className="font-body text-sm text-black">La calidad de imagen es excepcional, indistinguible de una foto real.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Personalización Completa</h4>
                  <p className="font-body text-sm text-black">Elige el género, la morfología, el tono de piel, la pose y el fondo para un resultado a medida.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Interfaz Intuitiva</h4>
                  <p className="font-body text-sm text-black">No necesitas ser un experto en tecnología para usar VintDress. Es simple y rápido.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-display font-bold text-black mb-2">Bonus Incluido</h4>
                  <p className="font-body text-sm text-black">Generación automática de descripciones y títulos optimizados para Vinted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonios de Vendedores Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Probé varias herramientas gratuitas, pero la calidad siempre era decepcionante. Con VintDress, mis artículos se venden más rápido y a precios más altos."
              </p>
              <p className="font-display font-bold text-black">
                - María, vendedora Vinted
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Usando un maniquí IA, vi una diferencia real en mis ventas. Las fotos captan la atención y aumentan mi credibilidad como vendedor."
              </p>
              <p className="font-display font-bold text-black">
                - Carlos, vendedor Vinted
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 flex items-center gap-2">
              <Shield className="w-7 h-7" />
              Una Inversión Rentable
            </h2>
            <p className="font-body text-white text-lg leading-relaxed">
              Buscabas soluciones gratuitas para mejorar tus fotos en Vinted, pero encontraste algo mejor: VintDress. Por <strong>0,40€/foto</strong>, obtienes calidad profesional que atrae compradores y aumenta tus ventas. Al final, es una inversión que se amortiza rápidamente.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            ¿Listo para transformar tus fotos de Vinted?
          </h3>
          <p className="font-body text-black mb-6">
            ¡Genera fotos con maniquí IA en 30 segundos!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            PROBAR AHORA
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cómo funciona el maniquí IA en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                El maniquí IA de VintDress genera imágenes realistas de tu ropa gracias a tecnología avanzada. Solo tienes que subir una foto, elegir los parámetros, y en 30 segundos tendrás una imagen lista para publicar.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Por qué debería pagar por fotos cuando existen herramientas gratuitas?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Las herramientas gratuitas suelen ofrecer calidad mediocre, deformaciones y marcas de agua. VintDress ofrece un servicio premium que garantiza fotos de calidad profesional, lo que se traduce en ventas más rápidas y numerosas.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Vale la pena la inversión?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sí, invertir 0,40€/foto puede generarte mucho más al aumentar tus posibilidades de venta. Una sola venta puede cubrir fácilmente el coste de tus fotos.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Qué tipos de ropa puedo fotografiar con VintDress?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Puedes usar VintDress para todo tipo de ropa, ya sean vestidos, camisetas, pantalones, etc. La personalización permite adaptar el maniquí a cada artículo.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Artículos Relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "ia-foto-vinted-gratis-vs-pago", title: "IA Gratis vs Pago" },
              { slug: "guia-completa-fotos-vinted-2025", title: "Guía Fotos 2025" },
              { slug: "fotos-puestas-vinted", title: "Fotos Puestas Vinted" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/es/articles/${article.slug}`}
                className="block bg-mint border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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

export default ManiquiIAVintedPage;
