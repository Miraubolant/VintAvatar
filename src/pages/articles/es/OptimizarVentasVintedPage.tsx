import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Tag,
  Search,
  Camera,
  Zap,
  Heart,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  Target,
  Sparkles,
  ArrowRight,
  Calendar,
  Eye
} from 'lucide-react';

export default function OptimizarVentasVintedPage() {
  useSEO({
    title: 'Impulsar tus Ventas Vinted: Consejos Pro 2026',
    description: 'Descubre los consejos pro para impulsar tus ventas en Vinted: artículos más vendidos, estrategias de precios, fotos que convierten y secretos del algoritmo.',
    keywords: 'impulsar ventas vinted, optimizar vinted, consejos vinted, vender más vinted, algoritmo vinted, fotos vinted',
    canonicalUrl: 'https://vintdress.com/es/articles/optimizar-ventas-vinted',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-cream">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              CONSEJOS
            </span>
            <span className="text-gray-600 font-medium">10 min de lectura</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Impulsar tus Ventas Vinted: Consejos Pro 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            ¿Tus artículos están en Vinted durante semanas sin venderse?
            Descubre las estrategias de los mejores vendedores para multiplicar tus ventas y
            maximizar tus ganancias.
          </p>

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
            alt="Optimizar ventas Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">En este artículo</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#mas-vendidos" className="hover:text-vinted transition-colors">1. Artículos más vendidos en Vinted</a></li>
            <li><a href="#precios" className="hover:text-vinted transition-colors">2. Estrategias de precios avanzadas</a></li>
            <li><a href="#anuncios" className="hover:text-vinted transition-colors">3. Optimizar tus anuncios</a></li>
            <li><a href="#fotos" className="hover:text-vinted transition-colors">4. Fotos que convierten</a></li>
            <li><a href="#algoritmo" className="hover:text-vinted transition-colors">5. Algoritmo Vinted: los secretos</a></li>
            <li><a href="#fidelizar" className="hover:text-vinted transition-colors">6. Fidelizar a tus compradores</a></li>
            <li><a href="#errores" className="hover:text-vinted transition-colors">7. Errores que matan tus ventas</a></li>
            <li><a href="#plan-accion" className="hover:text-vinted transition-colors">8. Plan de acción 30 días</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">De vendedor amateur a vendedor pro</h2>
            <p className="text-gray-700 mb-4">
              ¿La diferencia entre un vendedor que gana 50€/mes y uno que gana 500€/mes?
              No es la cantidad de artículos, es el <strong>método</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tiempo de venta reducido</strong> de semanas a días</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>+300% de vistas</strong> en tus anuncios</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Precios de venta más altos</strong> gracias a mejor presentación</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1: Más vendidos */}
        <section id="mas-vendidos" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Artículos más vendidos en Vinted</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Top 10 categorías rentables</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ol className="space-y-2">
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">1.</span> Vaqueros de marca (Levi's, Diesel)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">2.</span> Zapatillas (Nike, Adidas, NB)</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">3.</span> Chaquetas y abrigos</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">4.</span> Vestidos de marca</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">5.</span> Bolsos</li>
              </ol>
              <ol className="space-y-2" start={6}>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">6.</span> Ropa bebé/niños</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">7.</span> Ropa deportiva</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">8.</span> Vintage 90s-2000s</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">9.</span> Jerseys lana/cachemira</li>
                <li className="flex items-center gap-2"><span className="font-bold text-vinted">10.</span> Accesorios de lujo</li>
              </ol>
            </div>
          </div>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Marcas más buscadas</h3>
            <div className="flex flex-wrap gap-2">
              {['Nike', 'Zara', 'H&M', 'Levi\'s', 'Adidas', 'The North Face', 'Lacoste', 'Ralph Lauren', 'Mango', 'Sézane'].map((brand) => (
                <span key={brand} className="bg-white px-3 py-1 border-2 border-black font-medium">
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Consejo:</strong> ¡Siempre menciona la marca en el título de tu anuncio!
            </p>
          </div>
        </section>

        {/* Section 2: Precios */}
        <section id="precios" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Estrategias de precios avanzadas</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Precios psicológicos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Usa <strong>9,99€ en lugar de 10€</strong> (efecto psicológico probado)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Números <strong>terminados en 5 o 0</strong> para artículos premium (25€, 50€)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Deja un <strong>margen del 10-15%</strong> para negociación</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Analiza la competencia</h3>
              <p className="text-gray-700 mb-4">
                Antes de fijar tu precio, busca artículos similares en Vinted:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Busca tu marca + tipo de artículo + talla</li>
                <li>2. Anota los 5 primeros resultados vendidos recientemente</li>
                <li>3. Calcula el precio medio</li>
                <li>4. Posiciónate ligeramente por debajo si quieres vender rápido</li>
              </ol>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Precios de lotes</h3>
              <p className="text-gray-700">
                ¡Los lotes se venden un 30% más rápido! Ofrece descuentos atractivos:
              </p>
              <ul className="mt-4 space-y-2">
                <li><strong>2 artículos:</strong> -10% del total</li>
                <li><strong>3 artículos:</strong> -15% del total</li>
                <li><strong>5+ artículos:</strong> -20% del total</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Anuncios */}
        <section id="anuncios" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Optimizar tus anuncios</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Títulos que atraen clics</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="line-through text-gray-500">Vestido</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Vestido Sézane Seda Negro Talla 38 - Nuevo con etiquetas</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Un buen título incluye: <strong>Marca + Tipo + Color + Talla + Estado</strong>
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Descripciones optimizadas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Empieza con las <strong>palabras clave importantes</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Añade las <strong>medidas exactas</strong> (pecho, largo...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Menciona el <strong>estado honestamente</strong> (incluyendo defectos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Termina con una <strong>frase atractiva</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Actualizaciones regulares</h3>
              <p className="text-gray-700">
                <strong>Consejo pro:</strong> Modifica ligeramente tus anuncios cada 3-4 días.
                ¡Esto los hace subir en los resultados de búsqueda sin usar el boost de pago!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Fotos */}
        <section id="fotos" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Fotos que convierten</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Impacto probado de las fotos pro</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-red-100 border-2 border-black">
                <Eye className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <p className="text-2xl font-bold text-red-600">+300%</p>
                <p className="text-sm">más vistas</p>
              </div>
              <div className="text-center p-4 bg-green-100 border-2 border-black">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold text-green-600">+150%</p>
                <p className="text-sm">más favoritos</p>
              </div>
              <div className="text-center p-4 bg-blue-100 border-2 border-black">
                <Star className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold text-blue-600">2x más</p>
                <p className="text-sm">ventas</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl mb-4">Foto puesta vs foto plana</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-2">Tipo</th>
                    <th className="text-left py-2">Ventajas</th>
                    <th className="text-left py-2">Desventajas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Foto plana</td>
                    <td className="py-2">Rápida, simple</td>
                    <td className="py-2">Menos atractiva, aspecto plano</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 font-medium">Foto puesta</td>
                    <td className="py-2">+300% vistas, muestra caída</td>
                    <td className="py-2">Necesitas modelo</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium bg-mint">Maniquí IA</td>
                    <td className="py-2 bg-mint">¡Lo mejor de ambos!</td>
                    <td className="py-2 bg-mint">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <h3 className="font-display font-bold text-2xl text-white">Transforma tu ropa en fotos de maniquí</h3>
            </div>
            <p className="text-white mb-6">
              Con VintDress, genera fotos con maniquí IA en 30 segundos.
              ¡Sin necesidad de posar o buscar un maniquí!
            </p>
            <Link
              to="/es"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-display font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Probar VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5: Algoritmo */}
        <section id="algoritmo" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Algoritmo Vinted: los secretos</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Cómo funciona el feed</h3>
              <p className="text-gray-700 mb-4">
                El algoritmo de Vinted favorece a los vendedores que:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Están <strong>activos regularmente</strong> (conexión diaria)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tienen <strong>anuncios completos</strong> (fotos, descripción, marca)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Responden <strong>rápidamente</strong> a los mensajes (menos de 24h)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tienen <strong>buenas valoraciones</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Subir tus anuncios gratis</h3>
              <p className="text-gray-700 mb-4">
                Para hacer subir un anuncio sin pagar:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li>1. Modifica ligeramente la descripción</li>
                <li>2. Reorganiza el orden de las fotos</li>
                <li>3. Ajusta el precio unos céntimos</li>
                <li>4. Añade o quita un hashtag</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Mejores momentos para publicar
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold mb-2">Días óptimos:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Domingo noche (20h-22h)</li>
                    <li>Miércoles tarde</li>
                    <li>Sábado mañana</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Evitar:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Lunes mañana</li>
                    <li>Viernes noche</li>
                    <li>Noche (medianoche-7h)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Fidelizar */}
        <section id="fidelizar" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Fidelizar a tus compradores</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Comunicación rápida</h3>
              <p className="text-gray-700">
                Responde a los mensajes en menos de 2 horas durante el día.
                Los compradores se van si tardas demasiado.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8 text-vinted mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Embalaje cuidado</h3>
              <p className="text-gray-700">
                Un buen embalaje = reseñas de 5 estrellas. Usa papel de seda,
                un lazo bonito y protege bien el artículo.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Nota de agradecimiento</h3>
              <p className="text-gray-700">
                Incluye una tarjetita de agradecimiento. Marca la diferencia
                ¡y anima a los compradores a volver!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <BarChart2 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Conseguir 5 estrellas</h3>
              <p className="text-gray-700">
                Envía rápido, embala bien, y no dudes en añadir
                un pequeño extra (muestra, caramelo...).
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Errores */}
        <section id="errores" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Errores que matan tus ventas</h2>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Precios demasiado altos</strong>
                  <p className="text-gray-600">Compara siempre con la competencia antes de fijar tu precio</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Fotos mediocres</strong>
                  <p className="text-gray-600">Fotos borrosas, mal iluminadas o con fondo desordenado = menos clics</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Descripciones vacías</strong>
                  <p className="text-gray-600">"Vestido, talla M" no es suficiente. ¡Detalla el artículo!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">No responder mensajes</strong>
                  <p className="text-gray-600">Un comprador que espera se va a otro sitio. ¡Responde rápido!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-600">Inactividad prolongada</strong>
                  <p className="text-gray-600">El algoritmo penaliza las cuentas inactivas. ¡Conéctate cada día!</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Plan de acción */}
        <section id="plan-accion" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Plan de acción 30 días</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semana 1</span>
                Auditoría de tu armario
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Clasifica todos tus artículos</li>
                <li>Identifica los artículos con mayor potencial</li>
                <li>Analiza los precios de la competencia</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semana 2</span>
                Rehacer las fotos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Vuelve a fotografiar todos tus artículos</li>
                <li>Usa VintDress para fotos de maniquí</li>
                <li>Añade fotos de detalles</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semana 3</span>
                Optimizar precios y descripciones
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Reescribe todas tus descripciones</li>
                <li>Ajusta los precios según tu estrategia</li>
                <li>Añade las medidas exactas</li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <span className="bg-vinted text-white px-3 py-1 text-sm">Semana 4</span>
                Análisis y ajustes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Analiza tus estadísticas de vistas</li>
                <li>Identifica qué funciona</li>
                <li>Ajusta tu estrategia en consecuencia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <div className="bg-black text-white border-4 border-black p-8">
            <h2 className="font-display font-bold text-2xl mb-6">Resumen: acciones prioritarias</h2>
            <ol className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">1</span>
                <span>Mejora tus fotos (usa VintDress para fotos de maniquí)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">2</span>
                <span>Optimiza tus títulos y descripciones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">3</span>
                <span>Ajusta tus precios con la competencia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">4</span>
                <span>Sé activo y reactivo cada día</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-vinted text-white px-2 py-1 text-sm font-bold">5</span>
                <span>Cuida la experiencia del comprador (embalaje, comunicación)</span>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA final */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo para impulsar tus ventas?
            </h2>
            <p className="text-white text-lg mb-6">
              Empieza por el paso que más impacto tiene: las fotos.
              Con VintDress, transforma tu ropa en fotos de maniquí profesionales.
            </p>
            <Link
              to="/es"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-display font-bold text-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Probar VintDress gratis
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Artículos relacionados */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos relacionados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/es/articles/como-vender-en-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">Cómo Vender en Vinted</h3>
              <p className="text-gray-600">Guía completa para crear tus primeros anuncios</p>
            </Link>
            <Link
              to="/es/articles/como-hacer-fotos-vinted"
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-2">Cómo Hacer Buenas Fotos</h3>
              <p className="text-gray-600">Técnicas para fotos que venden</p>
            </Link>
          </div>
        </section>

        <ArticleNavigation currentSlug="optimizar-ventas-vinted" />
      </article>
    </div>
  );
}
