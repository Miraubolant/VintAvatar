import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Upload, Cpu, Sparkles, TrendingUp, Clock, DollarSign, Users, Zap, Eye, Target, Shield, CheckCircle2 } from 'lucide-react';

export default function IAServicioModaRevolucionPage() {
  useSEO({
    title: "La IA al Servicio de la Moda: Nuestra Revolución | VintDress",
    description: "Descubre cómo la IA revoluciona la venta de moda online. VintDress transforma tus fotos con tecnología de vanguardia.",
    keywords: "IA moda, fotos IA, tecnología vinted, innovación moda, inteligencia artificial",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
          alt="Inteligencia Artificial y Moda"
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
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Tecnología
            </span>
            <span className="font-space-grotesk">22 de Noviembre de 2025</span>
            <span className="font-space-grotesk">7 min de lectura</span>
            <span className="font-space-grotesk font-semibold">Por Tech Team</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            La Inteligencia Artificial al Servicio de la Moda: La Revolución VintDress
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            La industria de la moda de segunda mano está viviendo una revolución silenciosa. Detrás de cada foto perfecta que ves en Vinted, ahora hay una tecnología que cambia las reglas del juego: la Inteligencia Artificial.
          </p>

          {/* La Génesis */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              La Génesis de una Innovación
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  El Problema
                </h3>
                <p className="mb-3">
                  ¿Cuántas veces has renunciado a vender una prenda porque no sabías cómo fotografiarla?
                </p>
                <p className="text-sm text-gray-700">
                  O peor, ¿cuántos artículos han quedado sin vender debido a fotos poco atractivas?
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Nuestra Solución
                </h3>
                <p className="font-semibold">
                  Una IA revolucionaria que genera fotos puestas ultra-realistas de tu ropa en menos de 30 segundos.
                </p>
              </div>
            </div>
          </div>

          {/* Cómo Funciona */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8" />
              ¿Cómo Funciona?
            </h2>

            <div className="space-y-6">
              {/* Paso 1 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-pink-pastel border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Upload className="w-7 h-7" />
                    Carga y Análisis
                  </h3>
                  <p className="mb-3">Nuestra IA analiza tu prenda:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Tipo de artículo (vestido, pantalón, camiseta...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Colores y estampados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Corte y estilo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Material (deducido visualmente)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-mint border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Cpu className="w-7 h-7" />
                    Generación de Modelo
                  </h3>
                  <p className="mb-3">La IA selecciona automáticamente:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>El tipo de maniquí más adecuado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>La pose perfecta para destacar el artículo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>La iluminación óptima</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>El fondo que realzará el conjunto</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="bg-white border-4 border-black p-6 relative">
                <div className="absolute -top-4 -left-4 bg-yellow-200 border-3 border-black w-12 h-12 flex items-center justify-center font-space-grotesk font-bold text-2xl">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
                    <Sparkles className="w-7 h-7" />
                    Resultado Final
                  </h3>
                  <p className="text-lg font-semibold text-vinted">
                    En pocos segundos, obtienes una foto puesta profesional, ¡como si un fotógrafo profesional hubiera trabajado con una top model!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Las Cifras que Hablan */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Las Cifras que Hablan
            </h2>

            <p className="text-lg mb-6">Desde el lanzamiento de VintDress:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-vinted text-white border-4 border-black p-6">
                <Eye className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +280%
                </div>
                <p className="text-sm">
                  de visualizaciones de media - Los anuncios con fotos IA generan 2,8x más visualizaciones que las fotos tradicionales.
                </p>
              </div>

              <div className="bg-mint border-4 border-black p-6">
                <Clock className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  30s
                </div>
                <p className="text-sm">
                  de generación - El tiempo promedio para obtener una foto perfecta.
                </p>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6">
                <DollarSign className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  +300%
                </div>
                <p className="text-sm">
                  de ventas - Algunos usuarios han triplicado sus ventas usando nuestras fotos IA.
                </p>
              </div>

              <div className="bg-yellow-200 border-4 border-black p-6">
                <Users className="w-10 h-10 mb-3" />
                <div className="text-4xl font-space-grotesk font-bold mb-2">
                  24,000+
                </div>
                <p className="text-sm">
                  usuarios conquistados - ¡Y esto es solo el principio!
                </p>
              </div>
            </div>
          </div>

          {/* El Impacto en el E-Commerce */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              El Impacto en el E-Commerce de Moda
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Para los Vendedores
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Ahorro de tiempo</p>
                      <p className="text-sm text-gray-600">Se acabaron las sesiones de fotos improvisadas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Calidad profesional</p>
                      <p className="text-sm text-gray-600">Cada foto parece salida de un estudio</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Conversión máxima</p>
                      <p className="text-sm text-gray-600">Más visualizaciones = más ventas</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Para el Ecosistema Vinted
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Estándares elevados</p>
                      <p className="text-sm text-gray-600">La calidad general de los anuncios mejora</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Experiencia del comprador</p>
                      <p className="text-sm text-gray-600">Más fácil imaginarse con la prenda</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Confianza reforzada</p>
                      <p className="text-sm text-gray-600">Las fotos profesionales tranquilizan sobre la calidad</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* El Futuro de la Moda con la IA */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              El Futuro de la Moda con la IA
            </h2>

            <p className="text-lg mb-6">Estamos solo al principio de esta revolución. Próximamente:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <div className="text-3xl mb-2">🔮</div>
                <h3 className="font-space-grotesk font-bold mb-2">IA Predictiva</h3>
                <p className="text-sm">Saber qué artículos se venderán mejor</p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-space-grotesk font-bold mb-2">Estilos Personalizados</h3>
                <p className="text-sm">Adaptar el estilo de foto a tu audiencia</p>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-space-grotesk font-bold mb-2">Integración Nativa</h3>
                <p className="text-sm">Directamente en la app Vinted</p>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-space-grotesk font-bold mb-2">Expansión Internacional</h3>
                <p className="text-sm">Adaptarse a los códigos de cada país</p>
              </div>
            </div>
          </div>

          {/* Ética y Transparencia */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Ética y Transparencia
            </h2>

            <div className="bg-green-50 border-4 border-green-500 p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-6">
                Nuestros Compromisos:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Fotos claramente identificadas como generadas por IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Respeto de la realidad del producto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Sin engaños sobre el estado o los colores</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Protección de los datos de los usuarios</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusión */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Conclusión
            </h2>
            <p className="text-white text-lg mb-6">
              La IA no está aquí para reemplazar la creatividad humana, sino para democratizarla. Hoy, cada vendedor de Vinted puede tener acceso a fotos de calidad de estudio.
            </p>
            <p className="text-white text-xl font-semibold mb-8">
              La moda de segunda mano se vuelve más atractiva, más accesible y más profesional.
            </p>
            <p className="text-white text-lg mb-6">
              Y tú, ¿estás listo para unirte a esta revolución?
            </p>
            <Link
              to="/es"
              className="inline-block bg-white text-vinted px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              ¡Prueba VintDress Ahora!
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["IA", "Tecnología", "Innovación", "Moda", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Historia de Éxito: Marie Gana 3000€/Mes
              </h3>
              <p className="text-sm text-gray-600">
                Cómo Marie transformó su vida gracias a las fotos IA
              </p>
            </Link>
            <Link
              to="/es/articles/como-tomar-buenas-fotos-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Cómo Tomar Buenas Fotos para Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Guía completa para fotos que venden
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
