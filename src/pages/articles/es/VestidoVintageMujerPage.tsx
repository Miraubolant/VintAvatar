import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function VestidoVintageMujerPage() {
  useSEO({
    title: "Vestido Vintage Mujer: Guía Completa para Encontrar la Pieza Perfecta",
    description: "Descubre los vestidos vintage mujer más buscados: años 50, 60, 70, bohemio, pin-up. Guía completa para elegir, autentificar y llevar un vestido vintage.",
    keywords: "vestido vintage mujer, vestido retro, vestido años 50, vestido bohemio vintage, vestido pin-up, moda vintage mujer",
    canonicalUrl: "https://vintdress.com/es/articles/vestido-vintage-mujer",
    ogImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=630&fit=crop"
  });

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-pastel/30 via-cream to-mint/30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-vinted/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-pastel/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/es/articles"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vinted transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a artículos
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-vinted text-white text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Moda Vintage
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Vestidos
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vestido Vintage Mujer: Guía Completa para Encontrar la{' '}
              <span className="text-vinted">Pieza Perfecta</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Desde los años 50 hasta los 90, los vestidos vintage encarnan la elegancia atemporal.
              Descubre cómo encontrar el vestido perfecto, autentificarlo y llevarlo con estilo.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">VintDress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>13 de enero de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Clock className="w-4 h-4" />
                </div>
                <span>14 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen principal */}
      <section className="container mx-auto px-4 -mt-8 mb-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=600&fit=crop"
              alt="Vestido vintage mujer - Elegancia atemporal"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Introducción */}
          <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Crown className="w-6 h-6 text-vinted" />
              La elegancia atemporal de los vestidos vintage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un <strong>vestido vintage mujer</strong> es mucho más que una simple prenda: es un
              viaje en el tiempo, una pieza única que cuenta una historia. Ya busques un vestido
              swing de los años 50, un minivestido psicodélico de los sesenta o un vestido bohemio
              de los setenta, el vintage ofrece tesoros incomparables.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta guía completa te acompañará para encontrar el vestido vintage perfecto,
              comprender las diferentes épocas y estilos, y llevar estas piezas excepcionales con confianza.
            </p>
          </div>

          {/* Índice */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Índice</h2>
            <nav className="space-y-2">
              <a href="#estilos-epocas" className="block text-vinted hover:underline font-medium">1. Los estilos por época</a>
              <a href="#anos-50" className="block text-vinted hover:underline font-medium">2. Vestidos años 50: elegancia pin-up</a>
              <a href="#anos-60-70" className="block text-vinted hover:underline font-medium">3. Años 60-70: del mod al bohemio</a>
              <a href="#anos-80-90" className="block text-vinted hover:underline font-medium">4. Años 80-90: glamour y minimalismo</a>
              <a href="#autentificar" className="block text-vinted hover:underline font-medium">5. Cómo autentificar un vestido vintage</a>
              <a href="#elegir-talla" className="block text-vinted hover:underline font-medium">6. Elegir la talla correcta</a>
              <a href="#donde-comprar" className="block text-vinted hover:underline font-medium">7. Dónde comprar vestidos vintage</a>
              <a href="#cuidado" className="block text-vinted hover:underline font-medium">8. Cuidado y conservación</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Sección 1: Estilos por época */}
          <section id="estilos-epocas" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Los estilos de vestidos por época</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cada década aportó su cuota de innovaciones y estilos icónicos al mundo
                de los vestidos. Comprender estas diferentes épocas te ayudará a identificar
                las piezas auténticas y elegir el estilo que mejor te va.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Años 40-50</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cintura ceñida y falda amplia</li>
                  <li>Estampados florales y lunares</li>
                  <li>Tejidos de calidad (algodón, seda)</li>
                  <li>Detalles cuidados (botones, cuellos)</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Años 60</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Corte recto o trapecio</li>
                  <li>Motivos geométricos y pop</li>
                  <li>Minifaldas revolucionarias</li>
                  <li>Materiales sintéticos innovadores</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Años 70</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Estilo bohemio y fluido</li>
                  <li>Maxivestidos y estampados étnicos</li>
                  <li>Mangas acampanadas</li>
                  <li>Tejidos naturales y crochet</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Años 80-90</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Hombros marcados y power dressing</li>
                  <li>Vestidos ceñidos y stretch</li>
                  <li>Minimalismo y slip dress</li>
                  <li>Lentejuelas y glamour</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 2: Años 50 */}
          <section id="anos-50" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Vestidos años 50: elegancia pin-up</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">El New Look de Dior</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Los años 50 están marcados por el <strong>New Look</strong> de Christian Dior:
                  cintura muy marcada, faldas amplias y hombros suaves. Esta silueta ultrafemenina
                  sigue siendo una de las más buscadas en moda vintage.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Vestido swing</strong> - Falda circular ideal para bailar</li>
                  <li><strong>Vestido tubo</strong> - Corte ajustado y elegante</li>
                  <li><strong>Vestido camisero</strong> - Estilo casual chic</li>
                  <li><strong>Vestido de cóctel</strong> - Para ocasiones especiales</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marcas y diseñadores a buscar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Alta costura</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Christian Dior</li>
                      <li>Balenciaga</li>
                      <li>Givenchy</li>
                      <li>Jacques Fath</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Prêt-à-porter</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Jonathan Logan</li>
                      <li>Gay Gibson</li>
                      <li>Lanz</li>
                      <li>Toni Todd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3: Años 60-70 */}
          <section id="anos-60-70" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Años 60-70: del mod al bohemio</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Estilo Mod (años 60)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La revolución de los sesenta trae cortes geométricos, colores vivos
                  y la revolucionaria minifalda de Mary Quant.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Vestido trapecio</strong> - Corte en A acampanado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Minivestido</strong> - Por encima de la rodilla</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Shift dress</strong> - Recto y sin cinturón</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Estilo Bohemio (años 70)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Los setenta celebran la libertad con vestidos fluidos, estampados
                  étnicos y vuelta a los materiales naturales.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Maxivestido</strong> - Largo y fluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Vestido campesino</strong> - Bordados y volantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Vestido caftán</strong> - Amplio y exótico</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 4: Años 80-90 */}
          <section id="anos-80-90" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Años 80-90: glamour y minimalismo</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Power dressing de los años 80</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Los años 80 encarnan el exceso y el poder femenino con hombros
                  estructurados, colores vivos y materiales brillantes.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Estilos clave</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Vestido con hombreras</li>
                      <li>Vestido palabra de honor</li>
                      <li>Vestido de lentejuelas</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Diseñadores</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Thierry Mugler</li>
                      <li>Claude Montana</li>
                      <li>Azzedine Alaïa</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Materiales</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Lamé y lurex</li>
                      <li>Terciopelo</li>
                      <li>Lycra stretch</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Minimalismo de los años 90</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En reacción a los excesos de los ochenta, los 90 abrazan un minimalismo
                  elegante con líneas depuradas y colores neutros.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Slip dress</strong> - El icónico vestido lencero</li>
                  <li><strong>Vestido columna</strong> - Largo y recto</li>
                  <li><strong>Little black dress</strong> - Minimalista y chic</li>
                  <li><strong>Vestido grunge</strong> - Estampados florales y capas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 5: Autentificar */}
          <section id="autentificar" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Cómo autentificar un vestido vintage</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Señales de autenticidad</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Etiquetas y marcas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Etiqueta de tela cosida (no impresa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Mención "Union Made" o sindicato (EE.UU.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Ausencia de códigos de barras (antes de 1980)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>País de origen (antes de la globalización)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Acabados y construcción</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Cremalleras metálicas (antes de 1970)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Costuras a mano o pespuntes cuidados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Forro completo en seda o acetato</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Botones a juego o de nácar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Puntos de atención</h3>
                <p className="text-gray-700">
                  Cuidado con las reproducciones modernas de estilo "vintage". Las piezas vintage
                  auténticas tienen una pátina natural, tejidos de calidad superior y acabados
                  que ya no se encuentran en la confección actual.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 6: Talla */}
          <section id="elegir-talla" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Elegir la talla vintage correcta</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Atención:</strong> ¡Las tallas vintage no corresponden a las tallas
                actuales! Una talla 12 de los años 50 equivale a menudo a una 36-38 moderna.
                Siempre guíate por las medidas reales, no por la etiqueta.
              </p>

              <h3 className="text-lg font-bold mb-4">Medidas esenciales a verificar</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Contorno de pecho</h4>
                  <p className="text-sm text-gray-600">Medido bajo las axilas</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Contorno de cintura</h4>
                  <p className="text-sm text-gray-600">En la cintura natural</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Contorno de cadera</h4>
                  <p className="text-sm text-gray-600">En lo más ancho</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="font-bold text-vinted mb-2">Largo</h4>
                  <p className="text-sm text-gray-600">Del hombro al dobladillo</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Consejo VintDress:</strong> Pide siempre las medidas en plano al vendedor
                  y compáralas con una prenda que ya tengas y que te quede bien.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 7: Dónde comprar */}
          <section id="donde-comprar" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Dónde comprar vestidos vintage</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Plataformas online</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Amplia selección, precios accesibles</li>
                  <li><strong>Vestiaire Collective</strong> - Lujo y autentificación</li>
                  <li><strong>Etsy</strong> - Vendedores especializados vintage</li>
                  <li><strong>eBay</strong> - Subastas y gangas</li>
                  <li><strong>Depop</strong> - Moda vintage de tendencia</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">En tienda</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Tiendas de segunda mano</strong> - Hallazgos a buen precio</li>
                  <li><strong>Boutiques vintage</strong> - Piezas seleccionadas</li>
                  <li><strong>Tiendas de consigna</strong> - Marcas de calidad</li>
                  <li><strong>Mercadillos</strong> - Tesoros ocultos</li>
                  <li><strong>Subastas</strong> - Piezas de colección</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 8: Cuidado */}
          <section id="cuidado" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Cuidado y conservación</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Lavado y limpieza</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Prefiere la limpieza en seco para piezas delicadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lavado a mano con agua fría para algodón</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Usar detergentes suaves sin blanqueadores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Secar en plano, nunca en secadora</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Almacenamiento</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Perchas acolchadas para evitar marcas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Fundas de algodón transpirable (no plástico)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Proteger de la luz directa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Antipolillas naturales (lavanda, cedro)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA VintDress */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-vinted to-vinted/80 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Vende tus vestidos vintage con VintDress</h2>
                  <p className="text-white/90">
                    ¿Tienes vestidos vintage para vender en Vinted? ¡Destácalos con nuestras fotos
                    con modelo generadas por IA! A los compradores les encanta ver cómo queda un
                    vestido en un maniquí virtual.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Probar VintDress gratis
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Tag className="w-8 h-8 text-vinted" />
              Preguntas frecuentes
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Cómo sé si un vestido es realmente vintage?</h3>
                <p className="text-gray-700">
                  Verifica las etiquetas (tejido, origen), las cremalleras (metal antes de 1970),
                  la calidad de las costuras y la presencia de forro. Las piezas vintage auténticas
                  tienen generalmente acabados superiores a las reproducciones modernas.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Qué presupuesto para un vestido vintage de calidad?</h3>
                <p className="text-gray-700">
                  Los precios varían mucho según la época, la marca y el estado. Cuenta con 30-80€
                  para un vestido vintage en tienda de segunda mano, 100-300€ para una pieza de
                  diseñador, y varios cientos de euros para alta costura o piezas raras.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Se pueden arreglar los vestidos vintage?</h3>
                <p className="text-gray-700">
                  Sí, pero confía tus piezas a un sastre experimentado que respete la integridad
                  de la prenda. Los arreglos comunes incluyen ajustar la cintura, acortar el
                  dobladillo y reemplazar cremalleras defectuosas.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Cómo llevar un vestido vintage a diario?</h3>
                <p className="text-gray-700">
                  Mezcla tu vestido vintage con accesorios modernos para evitar el efecto disfraz.
                  Un vestido de los 50 puede llevarse con zapatillas blancas, un vestido de los 70
                  con una chaqueta de cuero contemporánea. El equilibrio entre vintage y moderno es la clave.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Los vestidos vintage son sostenibles?</h3>
                <p className="text-gray-700">
                  ¡Absolutamente! Comprar vintage es una de las elecciones de moda más sostenibles.
                  Das una segunda vida a una prenda existente, evitas la producción de nuevas piezas
                  y a menudo disfrutas de una calidad superior que durará más décadas.
                </p>
              </div>
            </div>
          </section>

          {/* Artículos relacionados */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/es/articles/ropa-vintage-anos-90"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Ropa Vintage Años 90</h3>
                <p className="text-gray-600 text-sm">
                  Descubre las tendencias icónicas de los 90: grunge, streetwear y minimalismo.
                </p>
              </Link>
              <Link
                to="/es/articles/tienda-vintage-online"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Tienda Vintage Online: Guía Completa</h3>
                <p className="text-gray-600 text-sm">
                  Las mejores plataformas para comprar ropa vintage online.
                </p>
              </Link>
            </div>
          </section>

          {/* Navegación entre artículos */}
          <ArticleNavigation currentPath="/es/articles/vestido-vintage-mujer" />
        </div>
      </article>
    </main>
  );
}
