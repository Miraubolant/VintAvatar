import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, TrendingUp, Package, DollarSign, AlertTriangle, Star, ArrowRight, ShoppingBag, Camera, Percent } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ComoVenderEnVintedPage: React.FC = () => {
  useSEO({
    title: "Cómo Vender en Vinted: Guía Completa 2026 | VintDress",
    description: "Aprende cómo vender en Vinted de manera efectiva. Guía completa: crear anuncios, fijar el precio correcto, vender lotes y aumentar tus ventas.",
    keywords: "como vender en vinted, vender vinted, anuncio vinted, venta vinted, guia vendedor vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
          alt="Cómo vender en Vinted - Guía completa"
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
            Cómo Vender en Vinted: Guía Completa 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipo VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 de enero de 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vender vinted", "anuncio vinted", "principiante vinted", "guía vendedor", "VintDress"].map((tag) => (
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
            ¿Quieres vender en Vinted pero no sabes por dónde empezar? Con más de <strong className="text-vinted">80 millones de usuarios</strong> en Europa, Vinted se ha convertido en la plataforma imprescindible para vender ropa. Buenas noticias: es <strong>100% gratis</strong> para los vendedores (0% de comisión). En esta guía completa, aprenderás a crear anuncios que venden, fijar el precio correcto y optimizar tus ventas.
          </p>
        </div>

        {/* Section 1 - Crear anuncio */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Crear un anuncio que venda
          </h2>

          <div className="space-y-8">
            {/* Título optimizado */}
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Un título optimizado para ser encontrado
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                El título es lo primero que ven los compradores. Un buen título incluye:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>La marca</strong>: Zara, H&M, Nike... Los compradores suelen buscar por marca.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Tipo de prenda</strong>: Vestido, vaqueros, camiseta, chaqueta...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Talla</strong>: M, 38, S... Esencial para el filtrado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Una característica</strong>: Color, estampado, estilo (vintage, nuevo...)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-sm text-gray-600 mb-2">Ejemplo de buen título:</p>
                <p className="font-body text-black">"Vestido Zara negro talla M - Nuevo con etiqueta"</p>
              </div>
            </div>

            {/* Descripción completa */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-vinted" />
                Una descripción completa
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Una buena descripción responde a todas las preguntas del comprador:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Estado real</strong>: Nuevo, muy buen estado, buen estado... ¡Sé honesto!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Medidas</strong>: Pecho, largo, cintura...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Defectos posibles</strong>: Menciona todo, incluso los pequeños detalles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Razón de la venta</strong>: Muy pequeño, nunca usado, cambio de estilo...</span>
                </li>
              </ul>
            </div>

            {/* Categorización */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Categorización correcta
              </h3>
              <p className="font-body text-black leading-relaxed">
                Elige la categoría y subcategoría correcta para que tu artículo aparezca en las búsquedas relevantes. Completa <strong>todos los campos</strong>: marca, talla, color, estado, material. Cuanta más información proporciones, más visible será tu artículo en los filtros de búsqueda.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Fotos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Fotografiar tu ropa como un profesional
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-vinted" />
                Las bases de una buena foto
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Luz natural</strong>: Cerca de una ventana, preferiblemente por la mañana o al final de la tarde.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Fondo neutro</strong>: Pared blanca, sábana lisa, sin desorden visible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Varios ángulos</strong>: Frente, espalda, detalles, etiqueta, defectos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Nitidez</strong>: Sin desenfoque, ropa bien planchada y presentada.</span>
                </li>
              </ul>
            </div>

            {/* CTA VintDress */}
            <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-white" />
                Sube de nivel con VintDress
              </h3>
              <p className="font-body text-white leading-relaxed mb-4">
                Las <strong>fotos puestas en maniquí</strong> aumentan las vistas en un <strong>300%</strong> y reducen el tiempo de venta por 3. Con VintDress, genera fotos profesionales en maniquí IA en <strong>30 segundos</strong> desde 0,40€/foto.
              </p>
              <Link
                to="/#generateur"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                PROBAR VINTDRESS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3 - Precio */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Fijar el precio correcto
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-vinted" />
                Analizar la competencia
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                Antes de fijar tu precio, busca artículos similares en Vinted:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Misma marca, mismo tipo de prenda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Filtra por "Vendidos" para ver los precios reales de venta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Ajusta según el estado de tu artículo</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Margen de negociación
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Añade <strong>10-15%</strong> a tu precio mínimo aceptable. A los compradores de Vinted les encanta negociar, y podrás aceptar sus ofertas sin perder dinero.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">
                  Precios psicológicos
                </h3>
                <p className="font-body text-black leading-relaxed">
                  Usa precios como <strong>9,90€</strong> en lugar de 10€, o <strong>14,50€</strong> en lugar de 15€. Estas pequeñas diferencias aumentan las conversiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Lotes */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Vender lotes: la estrategia ganadora
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-vinted" />
              Cómo crear un lote atractivo
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Los lotes te permiten vender más artículos en una sola transacción:
            </p>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Coherencia</strong>: Agrupa artículos similares (3 camisetas, conjunto completo...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Descuento atractivo</strong>: Ofrece 15-20% menos que la suma de los artículos por separado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Fotos en grupo</strong>: Muestra todos los artículos juntos + fotos individuales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Gastos de envío compartidos</strong>: El comprador ahorra en los gastos de envío</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 - Lo que más se vende */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Lo que más se vende en Vinted
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-vinted" />
                Marcas más buscadas
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Zara, H&M, Mango (fast fashion)</li>
                <li>• Nike, Adidas, Puma (deportivo)</li>
                <li>• Levi's, Diesel (vaqueros)</li>
                <li>• The North Face, Patagonia (outdoor)</li>
                <li>• Sézane, Rouje (marcas tendencia)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Percent className="w-6 h-6 text-vinted" />
                Categorías rentables
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Ropa infantil (alta rotación)</li>
                <li>• Vintage y piezas únicas</li>
                <li>• Artículos nuevos con etiqueta</li>
                <li>• Zapatos de marca</li>
                <li>• Bolsos y accesorios</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Problemas */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Por qué tus artículos no se venden
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-vinted flex-shrink-0 mt-1" />
              <p className="font-display font-bold text-black">
                Checklist de diagnóstico:
              </p>
            </div>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Fotos mediocres</strong>: Borrosas, oscuras, fondo desordenado → Rehazlas o usa VintDress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Precio demasiado alto</strong>: Compara con artículos vendidos, no con los publicados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Descripción incompleta</strong>: Añade medidas, estado real, defectos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Anuncio inactivo</strong>: Actualízalo regularmente (cambia el precio 0,10€)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Sin respuesta a mensajes</strong>: Responde rápido, los compradores no esperan</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¿Listo para impulsar tus ventas en Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Fotos profesionales = más vistas = más ventas. ¡Prueba VintDress y ve la diferencia!
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
                ¿Cómo vendo en Vinted por primera vez?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Crea una cuenta gratuita, toma buenas fotos de tu artículo, escribe un título y descripción detallada, fija un precio competitivo y publica. ¡Es así de sencillo!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Vinted cobra comisión por las ventas?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                ¡No! Vinted es 100% gratis para los vendedores. La plataforma gana a través de la protección al comprador (5% + 0,70€) que paga el comprador.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cómo puedo vender más rápido en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Usa fotos de calidad (idealmente en maniquí), fija un precio competitivo, responde rápidamente a los mensajes y actualiza regularmente tus anuncios cambiando ligeramente el precio.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cómo creo un lote en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Crea un nuevo anuncio, selecciona "Lote" como tipo de artículo, añade fotos de todos los artículos juntos e individualmente, y ofrece un precio ventajoso comparado con la suma de los artículos por separado.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Artículos relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "como-hacer-fotos-vinted", title: "Cómo Hacer Buenas Fotos Vinted" },
              { slug: "optimizar-ventas-vinted", title: "Impulsar tus Ventas Vinted" },
              { slug: "fotos-puestas-vinted", title: "Fotos Puestas en Vinted" }
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
};

export default ComoVenderEnVintedPage;
