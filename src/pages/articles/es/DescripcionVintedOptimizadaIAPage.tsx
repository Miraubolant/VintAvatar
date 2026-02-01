import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { FileText, Sparkles, MessageSquare, CheckCircle, XCircle, ArrowRight, Zap, Target, TrendingUp, Clock, AlertTriangle, Lightbulb } from 'lucide-react';

export default function DescripcionVintedOptimizadaIAPage() {
  useSEO({
    title: "Descripcion Vinted Optimizada con IA: Vende Mas Rapido | VintDress",
    description: "Transforma tus descripciones basicas de Vinted en textos optimizados que tranquilizan al comprador y aceleran tus ventas con inteligencia artificial.",
    keywords: "descripcion vinted, optimizar descripcion vinted, ia descripcion vinted, texto anuncio vinted, vender mas rapido vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop"
          alt="Descripcion Vinted optimizada con IA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-mint px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Consejos
            </span>
            <span className="font-space-grotesk">1 de febrero de 2026</span>
            <span className="font-space-grotesk">12 min de lectura</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Descripcion Vinted: Como la IA Transforma tus Textos en Maquinas de Vender
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Pasas horas tomando fotos bonitas para Vinted, pero descuidas completamente la descripcion? Gran error. Lo aprendi por las malas.
          </p>

          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              El Error que Comete el 90% de los Vendedores
            </h2>

            <p className="text-lg mb-6">
              Durante mis primeros 3 meses en Vinted, solo escribia "Buen estado" y esperaba a que se vendiera.
            </p>

            <div className="bg-white border-3 border-black p-6 mb-4">
              <h3 className="font-bold mb-2">Resultado?</h3>
              <p className="text-gray-700">Decenas de mensajes haciendo las mismas preguntas:</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Cual es el material?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Que talla exactamente?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Tiene algun defecto?"
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-vinted" />
                  "Talla grande o pequeno?"
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-3 border-black p-4">
              <p className="font-semibold">
                <Lightbulb className="w-5 h-5 inline mr-2 text-yellow-600" />
                Me di cuenta de algo: una descripcion completa y bien redactada reduce las preguntas en un <span className="text-vinted font-bold">70%</span> y duplica tus posibilidades de vender rapidamente.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Por que la Descripcion Importa Tanto Como la Foto
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cream border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Descripcion debil =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprador que duda</li>
                  <li>• Cascada de preguntas</li>
                  <li>• Negociacion de precio</li>
                  <li>• Abandono del carrito</li>
                  <li>• La competencia gana</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Descripcion optimizada =
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprador confiado</li>
                  <li>• Compra impulsiva</li>
                  <li>• Precio aceptado</li>
                  <li>• Menos devoluciones</li>
                  <li>• Mejores resenas</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-4 border-black p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="text-sm">de compradores leen la descripcion antes de comprar</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">-50%</div>
                  <div className="text-sm">preguntas con una descripcion completa</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2x</div>
                  <div className="text-sm">mas posibilidades de venta rapida</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              La IA al Rescate: Genera tus Descripciones en Segundos
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Escribir una descripcion completa lleva tiempo. En 2026, la IA puede hacerlo por ti en segundos.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                Como optimiza la IA tus descripciones?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <Target className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Analiza</h4>
                  <p className="text-sm text-gray-600">La IA analiza tu foto e info del articulo Vinted</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Genera</h4>
                  <p className="text-sm text-gray-600">Redacta una descripcion completa y persuasiva</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <TrendingUp className="w-10 h-10 mx-auto mb-3 text-vinted" />
                  <h4 className="font-bold mb-2">Optimiza</h4>
                  <p className="text-sm text-gray-600">Palabras clave SEO Vinted para mas visibilidad</p>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6">
              <h3 className="font-bold text-xl mb-4">Ventajas de la IA para tus descripciones:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Ahorro de tiempo</h4>
                    <p className="text-sm text-gray-600">5 segundos en lugar de 10 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Completitud</h4>
                    <p className="text-sm text-gray-600">Nunca olvida info importante</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Persuasion</h4>
                    <p className="text-sm text-gray-600">Formulaciones que desencadenan la compra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-vinted mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">SEO Vinted</h4>
                    <p className="text-sm text-gray-600">Palabras clave para mejor posicionamiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Combina Foto IA + Descripcion Optimizada
            </h2>
            <p className="text-white text-lg mb-6">
              Con VintDress, obtén fotos profesionales Y descripciones que venden.
              El combo ganador para impulsar tus ventas en Vinted.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Descubrir VintDress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Una foto bonita atrae la mirada, pero es la descripcion la que convierte. Los vendedores exitosos de Vinted lo entienden: cada palabra cuenta.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              En 2026, no tienes excusa para descripciones descuidadas. La IA puede generarte textos optimizados en segundos. Combina eso con fotos de maniqui IA, y tienes la formula ganadora.
            </p>
            <p className="text-lg font-semibold">
              Foto profesional + Descripcion completa = Venta rapida al precio correcto.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Articulos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/es/articles/destacar-vinted-maniqui-ia" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Destacar en Vinted con Maniqui IA</h3>
                <p className="text-gray-600 text-sm">Como impulsar tu visibilidad entre miles de anuncios.</p>
              </Link>
              <Link to="/es/articles/5-consejos-vender-rapido-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">5 Consejos para Vender Mas Rapido en Vinted</h3>
                <p className="text-gray-600 text-sm">Tecnicas probadas para acelerar tus ventas.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
