import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, AlertTriangle, Star, ArrowRight } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function FotosPuestasVintedPage() {
  useSEO({
    title: "Mejora tus ventas con fotos puestas en Vinted | VintDress",
    description: "Mejora tus ventas en Vinted con fotos puestas profesionales. Descubre VintDress, la solucion premium para tus anuncios.",
    keywords: "foto puesta vinted, fotos puestas, poner ropa en maniqui, fotos profesionales vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop"
          alt="Fotos puestas profesionales para Vinted"
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
            CONSEJOS
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Mejora tus ventas con fotos puestas en Vinted
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
              <span>29 de diciembre de 2025</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["foto puesta vinted", "maniqui IA", "ventas Vinted", "fotos profesionales", "VintDress"].map((tag) => (
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
            Si eres vendedor en Vinted, sabes lo crucial que es la presentacion de tus articulos. Las fotos puestas de calidad pueden marcar la diferencia. Permiten a los compradores visualizar la ropa en un contexto real, lo que aumenta considerablemente las posibilidades de venta. De hecho, un estudio ha demostrado que las fotos con maniqui IA pueden aumentar las vistas de tus anuncios en un <strong className="text-vinted">300%</strong> y reducir el tiempo de venta por tres.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Por que elegir VintDress para tus fotos puestas?
          </h2>

          <div className="space-y-8">
            {/* Pro Quality */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Calidad profesional al alcance de tu mano
              </h3>
              <p className="font-body text-black leading-relaxed">
                VintDress te ofrece un servicio premium para crear fotos puestas de calidad profesional. Gracias a nuestra tecnologia FLUX 2 Pro, obtienes un resultado realista e indistinguible de una foto real. En solo <strong>30 segundos</strong>, puedes generar una imagen en alta definicion que destacara tu ropa como nunca antes.
              </p>
            </div>

            {/* Customization */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Personalizacion completa
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Con VintDress, puedes personalizar completamente tu maniqui IA: genero, morfologia, tono de piel, pose y fondos estan a tu disposicion. Ya sea que quieras una foto dinamica o en estudio, nuestra interfaz intuitiva te permite configurar facilmente cada detalle.
              </p>
            </div>

            {/* Affordable Cost */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-6">
                Costo asequible para un alto retorno de inversion
              </h3>

              <div className="bg-cream border-3 border-black p-5 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">
                    Problemas comunes de las herramientas gratuitas:
                  </p>
                </div>
                <ul className="space-y-2 font-body text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Calidad borrosa</strong>: Las imagenes generadas a menudo carecen de nitidez.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Marcas de agua visibles</strong>: Las herramientas gratuitas agregan logos, lo que perjudica la presentacion profesional de tus articulos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Esperas interminables</strong>: Puedes terminar con colas de 30 minutos para generar una sola imagen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vinted font-bold">•</span>
                    <span><strong>Deformaciones de la ropa</strong>: Las herramientas gratuitas pueden deformar los articulos, haciendo la presentacion enganosa.</span>
                  </li>
                </ul>
              </div>

              <p className="font-body text-black leading-relaxed">
                Ademas de estos inconvenientes, el tiempo que pasas usando estas herramientas gratuitas equivale a dinero perdido. Al invertir desde <strong className="text-vinted">0,40 EUR/foto</strong> con VintDress, tienes la garantia de obtener imagenes de calidad superior que atraen a los compradores. Una sola venta adicional, a menudo entre 15 y 25 EUR, es mas que suficiente para cubrir el costo de tus fotos.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Testimonios de vendedores de Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Empece a usar VintDress y mis ventas explotaron. Las fotos puestas atraen a muchos mas clientes, y el costo se recupera rapidamente."
              </p>
              <p className="font-display font-bold text-black">
                - Clara, 28 anos
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vinted text-vinted" />
                ))}
              </div>
              <p className="font-body text-black italic mb-4">
                "Antes, solo tenia fotos basicas. Desde que uso VintDress, he visto mis tiempos de venta reducirse a la mitad. Es una inversion que recomiendo a todos!"
              </p>
              <p className="font-display font-bold text-black">
                - Julian, 34 anos
              </p>
            </div>
          </div>
        </section>

        {/* How to */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Como poner tu ropa en un maniqui con VintDress?
          </h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Sube tu prenda
                </h3>
                <p className="font-body text-black">
                  Comienza subiendo una foto de tu prenda a nuestra plataforma.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Configura tu maniqui
                </h3>
                <p className="font-body text-black">
                  Elige el genero, morfologia, tono de piel y pose de tu maniqui. Tambien puedes seleccionar el fondo ideal para destacar tus articulos.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Genera y descarga
                </h3>
                <p className="font-body text-black">
                  En solo 30 segundos, obtienes una foto lista para usar en Vinted. Simple, rapido y eficaz!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Listo para impulsar tus ventas en Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Prueba VintDress ahora y transforma tus fotos en menos de 30 segundos!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREAR MIS FOTOS
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
                Cual es la mejor forma de usar fotos puestas en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Usa fotos puestas para mostrar tu ropa en una situacion real. Esto ayuda a los compradores a visualizar su potencial.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Por que deberia evitar las herramientas gratuitas?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Las herramientas gratuitas a menudo ofrecen una calidad mediocre, lo que puede perjudicar tu imagen de marca. Invertir en VintDress te garantiza fotos profesionales.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Cuanto cuesta VintDress?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Los packs empiezan desde 3,99 EUR por 10 fotos, es decir 0,40 EUR/foto. Es una inversion rentable para mejorar tus ventas!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Puedo personalizar mi maniqui?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Si, VintDress te permite personalizar completamente tu maniqui segun tus necesidades: genero, morfologia, pose y mas.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Articulos relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "maniqui-ia-vinted", title: "Maniqui IA para Vinted" },
              { slug: "ia-foto-vinted-gratis-vs-pago", title: "IA Gratis vs Pago" },
              { slug: "guia-completa-fotos-vinted-2025", title: "Guia Completa Fotos 2025" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/es/articles/${article.slug}`}
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
}
