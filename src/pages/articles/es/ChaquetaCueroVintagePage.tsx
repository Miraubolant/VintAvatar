import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shield, Crown, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function ChaquetaCueroVintagePage() {
  useSEO({
    title: "Chaqueta de Cuero Vintage: Guía Completa de Compra y Autenticación",
    description: "Descubre las chaquetas de cuero vintage más buscadas: perfecto, bomber, biker. Guía completa para elegir, autenticar y cuidar una chaqueta de cuero vintage.",
    keywords: "chaqueta cuero vintage, perfecto vintage, cazadora cuero vintage, chaqueta biker vintage, schott vintage",
    canonicalUrl: "https://vintdress.com/es/articles/chaqueta-cuero-vintage",
    ogImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=630&fit=crop"
  });

  return (
    <main className="min-h-screen bg-grain">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-pastel/30 via-cream to-mint/30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-vinted/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-pastel/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/es/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-vinted transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a los artículos
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-vinted text-white text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Moda Vintage
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Cuero
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Chaqueta de Cuero Vintage: Guía Completa de Compra y{' '}
              <span className="text-vinted">Autenticación</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Del perfecto legendario al bomber aviador, las chaquetas de cuero vintage son piezas
              atemporales. Descubre cómo encontrar la chaqueta perfecta y reconocer un cuero de calidad.
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
                <span>13 enero 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-full border-2 border-black">
                  <Clock className="w-4 h-4" />
                </div>
                <span>15 min de lectura</span>
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
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=600&fit=crop"
              alt="Chaqueta de cuero vintage - Estilo atemporal"
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
              Un clásico atemporal para hombres y mujeres
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>chaqueta de cuero vintage</strong> es una de las inversiones de moda más duraderas.
              A diferencia de las producciones actuales, a menudo en cuero reconstituido o sintético, las chaquetas
              vintage ofrecen cuero de plena flor que adquiere una pátina magnífica con el tiempo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta guía te ayudará a identificar los modelos más buscados, autenticar el cuero
              y el origen, y mantener tu pieza para que dure décadas.
            </p>
          </div>

          {/* Índice */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Índice</h2>
            <nav className="space-y-2">
              <a href="#estilos-iconicos" className="block text-vinted hover:underline font-medium">1. Estilos icónicos de chaquetas de cuero</a>
              <a href="#perfecto" className="block text-vinted hover:underline font-medium">2. El perfecto: leyenda del cuero</a>
              <a href="#aviador-bomber" className="block text-vinted hover:underline font-medium">3. Cazadora aviador y bomber</a>
              <a href="#marcas-buscadas" className="block text-vinted hover:underline font-medium">4. Marcas más buscadas</a>
              <a href="#autenticar" className="block text-vinted hover:underline font-medium">5. Cómo autenticar una chaqueta vintage</a>
              <a href="#calidad-cuero" className="block text-vinted hover:underline font-medium">6. Reconocer un cuero de calidad</a>
              <a href="#cuidado" className="block text-vinted hover:underline font-medium">7. Cuidado y restauración</a>
              <a href="#donde-comprar" className="block text-vinted hover:underline font-medium">8. Dónde comprar una chaqueta vintage</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">9. FAQ</a>
            </nav>
          </div>

          {/* Sección 1: Estilos icónicos */}
          <section id="estilos-iconicos" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Estilos icónicos de chaquetas de cuero</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Las chaquetas de cuero vintage vienen en varios estilos emblemáticos, cada uno
                con su historia y estética propia. Conocer estas diferencias te ayudará a elegir
                la pieza que corresponde a tu estilo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Perfecto / Biker</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cremallera asimétrica</li>
                  <li>Cuello con solapas y botones</li>
                  <li>Cinturón en la cintura</li>
                  <li>Estilo rock y rebelde</li>
                </ul>
              </div>
              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Cazadora Aviador</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cuello de borrego</li>
                  <li>Corte amplio y cálido</li>
                  <li>Bolsillos de parche</li>
                  <li>Estilo militar vintage</li>
                </ul>
              </div>
              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Bomber</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Corte corto y ajustado</li>
                  <li>Puños elásticos</li>
                  <li>Cuello redondo o Mao</li>
                  <li>Estilo casual y urbano</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Blazer de Cuero</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Corte estructurado de chaqueta</li>
                  <li>Solapas clásicas</li>
                  <li>Botones o cierre oculto</li>
                  <li>Estilo elegante y refinado</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 2: Perfecto */}
          <section id="perfecto" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">El perfecto: leyenda del cuero</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Historia del perfecto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Creado por <strong>Schott NYC</strong> en 1928, el perfecto fue popularizado por Marlon Brando
                  en "Salvaje" (1953). Esta chaqueta se convirtió en el símbolo de la rebeldía y
                  del rock'n'roll, usada por iconos como James Dean y los Ramones.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Modelo 618</strong> - El perfecto original de Schott</li>
                  <li><strong>Modelo 613</strong> - Versión One Star, la más famosa</li>
                  <li><strong>Lewis Leathers</strong> - El equivalente británico</li>
                  <li><strong>Vanson</strong> - Alternativa americana de calidad</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Reconocer un verdadero perfecto vintage</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Elementos auténticos</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Cremalleras Talon o YKK antiguas</li>
                      <li>Cuero de vaca grueso (1.2-1.4mm)</li>
                      <li>Forro de satén acolchado</li>
                      <li>Estrella en la hombrera (modelo 613)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Indicios de datación</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Etiqueta "Made in USA" (antes de 2000)</li>
                      <li>Número de serie en la etiqueta</li>
                      <li>Estilo de la tipografía</li>
                      <li>Tipo de cremalleras</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3: Aviador y Bomber */}
          <section id="aviador-bomber" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Cazadora aviador y bomber</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">A-2 Flight Jacket</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La A-2 es una pieza militar americana creada en 1931 para el US Army Air Corps.
                  Reconocible por su cuello de camisa y bolsillos de parche, es un clásico atemporal.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Cuero de caballo</strong> - El más auténtico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Cuero de vaca</strong> - Más común</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Forro de seda</strong> - Modelos de calidad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">B-3 Shearling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La B-3 es la chaqueta de bombardero por excelencia, con su cuello de borrego
                  y forro de piel de cordero. Ultra cálida, es la pieza de invierno definitiva.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Borrego auténtico</strong> - Reconocer la lana natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Correas</strong> - Para ajustar el cuello</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Peso</strong> - Una auténtica es pesada (2-3kg)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 4: Marcas buscadas */}
          <section id="marcas-buscadas" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Marcas más buscadas</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marcas americanas</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Schott NYC</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Perfecto original</li>
                      <li>Calidad legendaria</li>
                      <li>Precio: 300-800€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Aero Leather</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Reproducciones militares</li>
                      <li>Cuero de caballo</li>
                      <li>Precio: 400-1000€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Vanson</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Chaquetas de moto</li>
                      <li>Made in USA</li>
                      <li>Precio: 350-700€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Marcas europeas</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Lewis Leathers</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>UK, desde 1892</li>
                      <li>Estilo punk rock</li>
                      <li>Precio: 500-1200€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Belstaff</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>UK, desde 1924</li>
                      <li>Estilo motero chic</li>
                      <li>Precio: 400-900€</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Chevignon</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Francia, años 80</li>
                      <li>Cazadoras aviador</li>
                      <li>Precio: 150-400€</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 5: Autenticar */}
          <section id="autenticar" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Cómo autenticar una chaqueta vintage</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Puntos de verificación</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Etiquetas y marcas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Etiqueta de marca original</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>País de fabricación coherente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Número de serie (si aplica)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Etiqueta de composición</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Construcción</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Cremalleras de calidad (YKK, Talon)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Costuras sólidas y regulares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Forro de calidad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                        <span>Botones a presión grabados</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Cuidado con las falsificaciones</h3>
                <p className="text-gray-700">
                  Las chaquetas Schott y Lewis Leathers son muy copiadas. Desconfía de precios demasiado bajos,
                  etiquetas mal impresas o vendedores que se niegan a mostrar el interior de la chaqueta.
                  Un verdadero perfecto Schott vintage nunca se vende por debajo de 200€.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 6: Calidad del cuero */}
          <section id="calidad-cuero" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Reconocer un cuero de calidad</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-gray-700 leading-relaxed mb-6">
                La calidad del cuero es determinante para el valor y la durabilidad de una chaqueta vintage.
                Aquí está cómo distinguir los diferentes tipos de cuero.
              </p>

              <h3 className="text-lg font-bold mb-4">Tipos de cuero por calidad</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Cuero plena flor (Full grain)</h4>
                  <p className="text-sm text-gray-700">El mejor. Superficie natural con sus imperfecciones.
                  Adquiere una pátina magnífica. Es lo que encuentras en chaquetas vintage de calidad.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Cuero corregido</h4>
                  <p className="text-sm text-gray-700">Superficie lijada y recubierta. Aspecto más uniforme
                  pero menos noble. Aceptable en chaquetas de gama media.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">Cuero dividido (Split)</h4>
                  <p className="text-sm text-gray-700">Capa inferior del cuero. Menos resistente,
                  a menudo recubierto con una película. Evitar para compras vintage.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Polipiel / Sintético</h4>
                  <p className="text-sm text-gray-700">No es cuero real. Se agrieta con el tiempo.
                  Huye de las chaquetas "vintage" de polipiel vendidas como cuero real.</p>
                </div>
              </div>

              <div className="bg-mint/20 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Prueba simple:</strong> El cuero real absorbe ligeramente el agua y tiene un
                  olor característico. La polipiel repele el agua y huele a plástico.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 7: Cuidado */}
          <section id="cuidado" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Cuidado y restauración</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Mantenimiento regular</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Quitar el polvo con un paño suave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Nutrir el cuero 2-3 veces al año</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Usar leche o crema para cuero</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Evitar productos con silicona</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-vinted">Almacenamiento</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Percha ancha y acolchada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Funda de algodón transpirable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lejos de la luz y el calor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                      <span>Nunca en una bolsa de plástico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 8: Dónde comprar */}
          <section id="donde-comprar" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Dónde comprar una chaqueta vintage</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Plataformas online</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Vinted</strong> - Amplia selección, negociación posible</li>
                  <li><strong>eBay</strong> - Subastas y vendedores especializados</li>
                  <li><strong>Grailed</strong> - Moda masculina de alta gama</li>
                  <li><strong>Etsy</strong> - Vendedores vintage seleccionados</li>
                  <li><strong>Vestiaire Collective</strong> - Autenticación incluida</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">En tienda</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Tiendas de segunda mano</strong> - Selección cuidada</li>
                  <li><strong>Consignación de lujo</strong> - Piezas autenticadas</li>
                  <li><strong>Mercados vintage</strong> - Negociación directa</li>
                  <li><strong>Rastros</strong> - Tesoros escondidos</li>
                  <li><strong>Subastas</strong> - Piezas de colección</li>
                </ul>
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
                  <h2 className="text-2xl font-bold mb-2">Vende tus chaquetas de cuero vintage con VintDress</h2>
                  <p className="text-white/90">
                    ¿Tienes chaquetas de cuero vintage para vender en Vinted? Preséntalas con nuestras
                    fotos puestas generadas por IA. Una chaqueta bien presentada se vende hasta 3 veces más rápido.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-vinted px-6 py-3 rounded-xl font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Prueba VintDress gratis
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
                <h3 className="text-lg font-bold mb-3">¿Qué presupuesto para una chaqueta de cuero vintage de calidad?</h3>
                <p className="text-gray-700">
                  Cuenta con 150-300€ para una buena chaqueta vintage sin marca, 300-600€ para una Schott
                  o Vanson vintage, y 500-1200€ para piezas raras como Lewis Leathers o chaquetas
                  militares auténticas. El precio depende del estado, la marca y la rareza.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Cómo saber si es cuero real?</h3>
                <p className="text-gray-700">
                  El cuero real tiene un olor característico, absorbe ligeramente el agua y presenta
                  imperfecciones naturales (poros, variaciones de color). La polipiel tiene un aspecto
                  demasiado regular, huele a plástico y el agua perla en su superficie.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Se puede reparar una chaqueta de cuero vintage?</h3>
                <p className="text-gray-700">
                  ¡Sí! Un artesano del cuero puede reparar cremalleras, desgarros menores y reemplazar
                  el forro. Una buena restauración (limpieza, nutrición, retintado) puede devolver la vida
                  a una chaqueta desgastada. Cuenta con 50-200€ según los trabajos.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Cómo elegir la talla vintage correcta?</h3>
                <p className="text-gray-700">
                  Las tallas vintage suelen ser más pequeñas que las actuales. Una 42 vintage puede corresponder
                  a una 40 actual. Pide siempre las medidas exactas (pecho, hombros, largo de mangas)
                  y compáralas con una chaqueta que ya tengas.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Las chaquetas de cuero vintage son una buena inversión?</h3>
                <p className="text-gray-700">
                  ¡Absolutamente! A diferencia de las chaquetas nuevas que se deprecian, las chaquetas vintage de marcas
                  reconocidas (Schott, Lewis Leathers) mantienen o aumentan su valor. Una pieza
                  bien cuidada puede revenderse al mismo precio o incluso más caro.
                </p>
              </div>
            </div>
          </section>

          {/* Artículos relacionados */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/es/articles/vestido-vintage-mujer"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vestido Vintage Mujer</h3>
                <p className="text-gray-600 text-sm">
                  Guía completa para encontrar el vestido vintage perfecto: años 50, 60, 70.
                </p>
              </Link>
              <Link
                to="/es/articles/vaquero-levis-vintage"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vaquero Levi's Vintage</h3>
                <p className="text-gray-600 text-sm">
                  Guía de compra y autenticación de vaqueros Levi's vintage.
                </p>
              </Link>
            </div>
          </section>

          {/* Navegación entre artículos */}
          <ArticleNavigation currentPath="/es/articles/chaqueta-cuero-vintage" />
        </div>
      </article>
    </main>
  );
}
