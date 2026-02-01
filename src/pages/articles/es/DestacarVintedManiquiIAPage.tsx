import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Eye, TrendingUp, Users, Camera, Sparkles, Target, CheckCircle, XCircle, ArrowRight, Zap, Star } from 'lucide-react';

export default function DestacarVintedManiquiIAPage() {
  useSEO({
    title: "Destacar en Vinted: El Maniqui IA para Impulsar tus Ventas | VintDress",
    description: "Descubre como el maniqui IA de VintDress te ayuda a destacar entre miles de anuncios de Vinted y vender 3 veces mas rapido.",
    keywords: "destacar vinted, visibilidad vinted, maniqui ia vinted, fotos vinted profesionales, impulsar ventas vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
          alt="Destacar en Vinted con maniqui IA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Guia
            </span>
            <span className="font-space-grotesk">1 de febrero de 2026</span>
            <span className="font-space-grotesk">10 min de lectura</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Destacar en Vinted: Como el Maniqui IA Impulsa tus Ventas
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Tienes docenas de articulos en venta en Vinted, pero permanecen invisibles entre millones de anuncios? No estas solo. El problema real no es tu ropa, es como la presentas.
          </p>

          <div className="bg-pink-pastel border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              El Problema: La Invisibilidad en Vinted
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">Los numeros que duelen:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>+50 millones</strong> de articulos online en Vinted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>80%</strong> de anuncios tienen fotos similares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>3 segundos</strong> para captar la atencion del comprador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>70%</strong> de las ventas ocurren gracias a la 1a foto</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">Lo que probablemente experimentas:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Tus anuncios estancados con pocas vistas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Pocos favoritos y aun menos mensajes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Competidores vendiendo los mismos articulos mas rapido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Horas dedicadas a fotos "mediocres"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              La Solucion: El Maniqui IA VintDress
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              VintDress resuelve este problema generando visuales de calidad profesional con su maniqui IA. En segundos, tu foto de ropa "basica" se convierte en una foto de catalogo.
            </p>

            <div className="bg-vinted border-4 border-black p-8 mb-8">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                Como funciona?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">1</div>
                  <h4 className="font-bold mb-2">Sube</h4>
                  <p className="text-sm text-gray-600">Carga tu foto o pega un enlace de Vinted</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">2</div>
                  <h4 className="font-bold mb-2">Configura</h4>
                  <p className="text-sm text-gray-600">Elige el tipo de maniqui y fondo</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">3</div>
                  <h4 className="font-bold mb-2">Genera</h4>
                  <p className="text-sm text-gray-600">La IA crea tu foto en 30 segundos</p>
                </div>
                <div className="bg-white border-3 border-black p-4 text-center">
                  <div className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black font-bold">4</div>
                  <h4 className="font-bold mb-2">Publica</h4>
                  <p className="text-sm text-gray-600">Descarga y actualiza tu anuncio</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-mint border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Ventajas VintDress
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Fotos de calidad profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Generacion en 30 segundos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Maniquies personalizables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Aumenta la visibilidad de tus anuncios</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">Resultados observados:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Vistas promedio</span>
                    <span className="font-bold text-vinted">+300%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Tasa de favoritos</span>
                    <span className="font-bold text-vinted">+150%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                    <span>Mensajes recibidos</span>
                    <span className="font-bold text-vinted">+200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tiempo de venta</span>
                    <span className="font-bold text-vinted">-50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vinted border-4 border-black p-8 text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Listo para Destacar?
            </h2>
            <p className="text-white text-lg mb-6">
              Unete a miles de vendedores que ya han impulsado sus ventas con VintDress.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-space-grotesk font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Probar VintDress Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-mint border-4 border-black p-8">
            <h2 className="text-2xl font-space-grotesk font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              En Vinted, la competencia es feroz. Millones de anuncios compiten por la atencion de los compradores. La diferencia entre un articulo que se estanca y uno que se vende? A menudo, es solo la foto.
            </p>
            <p className="text-lg text-gray-700">
              Con VintDress, tienes una ventaja competitiva inmediata. Fotos profesionales que atraen la mirada, generan clics y convierten en ventas. Todo en segundos y por centimos por foto.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-space-grotesk font-bold mb-6">Articulos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/es/articles/maniqui-ia-vinted" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Maniqui IA para Vinted: Como Funciona?</h3>
                <p className="text-gray-600 text-sm">Todo sobre la tecnologia detras de los maniquies virtuales.</p>
              </Link>
              <Link to="/es/articles/algoritmo-vinted-visibilidad" className="bg-white border-3 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="font-bold text-lg mb-2">Algoritmo Vinted: Maximiza tu Visibilidad</h3>
                <p className="text-gray-600 text-sm">Entiende el algoritmo para impulsar tus ventas.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
