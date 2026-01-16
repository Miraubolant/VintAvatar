import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Clock, DollarSign, Star, Eye, MessageSquare, Zap, Heart, ThumbsUp, Lightbulb } from 'lucide-react';

export default function Testimonio300PorcientoVistasPage() {
  useSEO({
    title: "Testimonio: +300% de Vistas en Una Semana | Success Story VintDress",
    description: "Descubre cómo Marie multiplicó sus vistas por 3 en una semana gracias a VintDress. Testimonio completo y resultados cuantificados.",
    keywords: "testimonio vinted, success story, aumentar vistas vinted, transformación ventas, marie laurent",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=400&fit=crop"
          alt="Testimonio Success Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Historia de Éxito
            </span>
            <span className="font-space-grotesk">20 de noviembre de 2025</span>
            <span className="font-space-grotesk">8 min de lectura</span>
            <span className="font-space-grotesk font-semibold">Por Marie Laurent</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Success Story: Cómo Marie Transformó su Negocio Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8 italic">
            Testimonio recogido el 5 de marzo de 2025
          </p>

          <p className="text-lg text-gray-700 mb-12">
            Hoy damos la palabra a Marie Laurent, 28 años, parisina y vendedora apasionada en Vinted. Su historia con VintDress es simplemente impresionante.
          </p>

          {/* Stats Hero */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6 text-center">
              Resultados en Una Semana
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-3 border-black p-6 text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">+300%</div>
                <div className="text-sm">de vistas promedio</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <Eye className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">67</div>
                <div className="text-sm">vistas en 48h (vs 8)</div>
              </div>
              <div className="bg-white border-3 border-black p-6 text-center">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-vinted" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">12</div>
                <div className="text-sm">mensajes recibidos</div>
              </div>
            </div>
          </div>

          {/* El Déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              El Clic
            </h2>

            <div className="bg-pink-pastel border-4 border-black p-8">
              <p className="text-2xl font-space-grotesk font-bold mb-4">
                "Descubrí VintDress por casualidad en Instagram"
              </p>
              <p className="text-lg italic text-gray-700">
                Marie nos cuenta: "Tenía un armario lleno de ropa que no lograba vender. Mis fotos eran correctas, pero nada excepcional. Cuando vi los resultados posibles con la IA, quise probar."
              </p>
            </div>
          </div>

          {/* Avant VintDress */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Antes de VintDress: La Pesadilla
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Las cifras hablan por sí solas:
                </h3>
                <ul className="space-y-2">
                  <li>Promedio de 12 vistas por artículo</li>
                  <li>Plazo de venta promedio: 3 meses</li>
                  <li>Precio de venta a menudo negociado a la baja</li>
                  <li>Frustración creciente</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Marie testifica:
                </h3>
                <p className="italic text-gray-700">
                  "Pasaba horas intentando tomar buenas fotos. Entre encontrar la luz, colocar el artículo, repetir 10 veces... Era desalentador. Algunas prendas magníficas quedaban sin vender solo por las fotos."
                </p>
              </div>
            </div>
          </div>

          {/* Le Test qui Change Tout */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              La Prueba que lo Cambia Todo
            </h2>

            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-4">
                Primera prueba: Un vestido Zara negro
              </h3>
              <p className="mb-6">
                Marie decide probar VintDress con un vestido negro de Zara que no lograba vender desde hace 2 meses.
              </p>

              <h4 className="font-space-grotesk font-bold text-xl mb-4">
                Resultados en 48h:
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-2xl">67 vistas</div>
                  <div className="text-sm text-gray-600">(vs 8 con la foto antigua)</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-2xl">12 mensajes</div>
                  <div className="text-sm text-gray-600">de personas interesadas</div>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold text-2xl">Vendido</div>
                  <div className="text-sm text-gray-600">al precio pedido!</div>
                </div>
              </div>

              <p className="mt-6 text-lg italic font-semibold text-center">
                "¡No me lo podía creer! En 48h, este vestido que nadie miraba se había convertido en el más solicitado de mis anuncios."
              </p>
            </div>
          </div>

          {/* La Transformation Complète */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              La Transformación Completa
            </h2>

            <p className="text-lg mb-6">
              <strong>Semana 1 con VintDress:</strong> Marie decide rehacer todas sus fotos más importantes.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-vinted text-white border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Artículo
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Antes (vistas/semana)
                    </th>
                    <th className="border-r-3 border-black p-4 text-center font-space-grotesk font-bold">
                      Después (vistas/semana)
                    </th>
                    <th className="p-4 text-center font-space-grotesk font-bold">
                      Mejora
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Vestido Zara</td>
                    <td className="border-r-2 border-black p-4 text-center">2 vistas</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">67 vistas</td>
                    <td className="p-4 text-center font-bold text-vinted">+3250%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Jeans Levi's</td>
                    <td className="border-r-2 border-black p-4 text-center">5 vistas</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">43 vistas</td>
                    <td className="p-4 text-center font-bold text-vinted">+760%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4 font-semibold">Blazer vintage</td>
                    <td className="border-r-2 border-black p-4 text-center">1 vista</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">38 vistas</td>
                    <td className="p-4 text-center font-bold text-vinted">+3700%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4 font-semibold">Zapatillas Nike</td>
                    <td className="border-r-2 border-black p-4 text-center">8 vistas</td>
                    <td className="border-r-2 border-black p-4 text-center font-bold text-green-600">52 vistas</td>
                    <td className="p-4 text-center font-bold text-vinted">+550%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-200 border-4 border-black p-6 text-center">
              <p className="text-2xl font-space-grotesk font-bold">
                Promedio general: ¡+300% de vistas!
              </p>
            </div>
          </div>

          {/* Les Bénéfices Inattendus */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Los Beneficios Inesperados
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    1. Ahorro de Tiempo Enorme
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Ya no necesito planificar mis sesiones de fotos. En 30 segundos, tengo una foto perfecta. ¡Puedo listar mis artículos en tiempo real!"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ThumbsUp className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    2. Confianza Recuperada
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Ahora sé que mis artículos estarán bien presentados. Ya no dudo en ponerlos en línea."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    3. Precios Respetados
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "Con fotos profesionales, la gente negocia menos. Ven la calidad y aceptan el precio."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-vinted" />
                  <h3 className="font-space-grotesk font-bold text-xl">
                    4. Placer Renovado
                  </h3>
                </div>
                <p className="italic text-gray-700">
                  "¡Vender en Vinted ha vuelto a ser divertido! Ver mis artículos con estas fotos es como tener mi propia tienda."
                </p>
              </div>
            </div>
          </div>

          {/* Les Chiffres Après 1 Mois */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Las Cifras Después de 1 Mes
            </h2>

            <div className="bg-vinted border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Resultados impresionantes:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+280%</span>
                  </div>
                  <p className="text-sm text-gray-600">de vistas promedio</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">÷3</span>
                  </div>
                  <p className="text-sm text-gray-600">División por 3 del tiempo de venta</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">+150%</span>
                  </div>
                  <p className="text-sm text-gray-600">de facturación mensual</p>
                </div>
                <div className="bg-white border-3 border-black p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-vinted" />
                    <span className="font-bold text-2xl">5/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Nota vendedor (contra 4,2 antes)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conseils de Marie */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              Consejos de Marie para los Nuevos Usuarios
            </h2>

            <div className="space-y-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  1. Comienza por tus mejores piezas
                </h3>
                <p className="italic">
                  "Prueba primero con tus artículos de valor. El efecto será más visible."
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  2. Varía los estilos de fotos
                </h3>
                <p className="italic">
                  "La IA propone varios estilos. No dudes en probar para ver qué funciona mejor para cada tipo de artículo."
                </p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  3. Sé honesto
                </h3>
                <p className="italic">
                  "Las fotos con IA son magníficas, pero mantén una descripción honesta del estado real del artículo."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-2">
                  4. Usa las fotos antiguas como complemento
                </h3>
                <p className="italic">
                  "Guardo mis fotos de detalle para mostrar la textura, las etiquetas, etc."
                </p>
              </div>
            </div>
          </div>

          {/* Le Mot de la Fin */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              La Palabra Final
            </h2>
            <p className="text-white text-xl mb-6 italic">
              "VintDress no solo mejoró mis fotos, transformó mi forma de ver la venta en línea. Lo recomiendo con los ojos cerrados a todos los vendedores de Vinted que quieran pasar al siguiente nivel."
            </p>
            <p className="text-white text-lg font-semibold mb-8">
              Su consejo final: "¡No esperes! Cada día sin VintDress son ventas perdidas."
            </p>
            <Link
              to="/es"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              ¡Prueba VintDress Ahora!
            </Link>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-sm text-gray-600 italic">
              Gracias a Marie por este testimonio auténtico. ¡Si tú también tienes una historia de éxito para compartir, contáctanos!
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Testimonio", "Historia de Éxito", "Ventas", "Transformación", "Resultados"].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Artículos Relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/es/articles/historia-exito-marie-2025"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Success Story: Marie Gana 3000€/Mes
              </h3>
              <p className="text-sm text-gray-600">
                Cómo Marie transformó su pasión en un negocio rentable
              </p>
            </Link>
            <Link
              to="/es/articles/errores-ventas-vinted"
              className="border-3 border-black p-4 hover:bg-yellow-200 transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Errores que Matan tus Ventas en Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Evita estos errores para maximizar tus resultados
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
