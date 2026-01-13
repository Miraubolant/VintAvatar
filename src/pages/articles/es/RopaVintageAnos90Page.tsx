import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Sparkles, Star, TrendingUp, Heart, Shirt, Music, Palette } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function RopaVintageAnos90Page() {
  useSEO({
    title: "Ropa Vintage Años 90: Guía Completa de las Tendencias Icónicas",
    description: "Descubre la ropa vintage de los años 90 más buscada: vaqueros baggy, crop tops, chaquetas vaqueras, zapatillas retro. Guía completa para un look 90s auténtico.",
    keywords: "ropa vintage años 90, moda 90s, estilo años 90, look vintage 90, tendencias 90s, moda noventas",
    canonicalUrl: "https://vintdress.com/es/articles/ropa-vintage-anos-90",
    ogImage: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=630&fit=crop"
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
                Tendencias
              </span>
              <span className="px-4 py-2 bg-pink-pastel text-black text-sm font-bold rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Estilo 90s
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ropa Vintage Años 90: Guía Completa de las{' '}
              <span className="text-vinted">Tendencias Icónicas</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              ¡Los años 90 han vuelto con fuerza! Descubre las piezas vintage más buscadas,
              desde los vaqueros baggy hasta los crop tops, y aprende a crear un look 90s auténtico y tendencia.
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
              src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=600&fit=crop"
              alt="Ropa vintage años 90 - Moda retro icónica"
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
              <Music className="w-6 h-6 text-vinted" />
              El gran regreso de los años 90
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>ropa vintage de los años 90</strong> está en el corazón de la moda actual.
              Esta década, marcada por el grunge, el hip-hop y la cultura pop, produjo piezas icónicas
              que hoy encantan a los amantes de la moda de segunda mano. Desde los vaqueros de talle
              alto hasta las chaquetas oversized, el estilo 90s se ha convertido en una referencia imprescindible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ya seas nostálgico de esa época o estés descubriendo estas tendencias, esta guía completa
              te acompañará para encontrar las mejores piezas y crear un look 90s auténtico.
            </p>
          </div>

          {/* Índice */}
          <div className="bg-mint/30 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Índice</h2>
            <nav className="space-y-2">
              <a href="#piezas-iconicas" className="block text-vinted hover:underline font-medium">1. Las piezas icónicas de los años 90</a>
              <a href="#tendencias-grunge" className="block text-vinted hover:underline font-medium">2. El estilo grunge: el espíritu Seattle</a>
              <a href="#streetwear-90s" className="block text-vinted hover:underline font-medium">3. Streetwear 90s: la influencia hip-hop</a>
              <a href="#minimalismo" className="block text-vinted hover:underline font-medium">4. El minimalismo sofisticado</a>
              <a href="#accesorios" className="block text-vinted hover:underline font-medium">5. Accesorios emblemáticos</a>
              <a href="#donde-encontrar" className="block text-vinted hover:underline font-medium">6. Dónde encontrar ropa 90s auténtica</a>
              <a href="#como-llevar" className="block text-vinted hover:underline font-medium">7. Cómo llevar el vintage 90s hoy</a>
              <a href="#faq" className="block text-vinted hover:underline font-medium">8. FAQ</a>
            </nav>
          </div>

          {/* Sección 1: Piezas icónicas */}
          <section id="piezas-iconicas" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Las piezas icónicas de los años 90</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">El vaquero baggy y de talle alto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El <strong>vaquero baggy</strong> es la pieza estrella del vestuario 90s. Ancho, cómodo,
                  a menudo llevado con un cinturón visible, encarna el espíritu relajado de la época.
                  Los cortes mom jeans y los talles altos también son muy buscados.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Levi's 501</strong> y <strong>550</strong> - Los clásicos indiscutibles</li>
                  <li><strong>JNCO</strong> - Los vaqueros extra anchos del skatewear</li>
                  <li><strong>Guess</strong> - El denim premium de los 90</li>
                  <li><strong>Calvin Klein</strong> - La elegancia minimalista</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">El crop top y el body</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El <strong>crop top</strong> de los 90 se distingue por su corte corto y sus materiales
                  variados: terciopelo, algodón, malla o metálico. Llevado con un vaquero de talle alto,
                  crea la silueta emblemática de la década.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El <strong>body</strong> también vive un gran resurgimiento, especialmente los modelos
                  de cuello alto o de tirantes finos, perfectos para un look minimalista.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">La chaqueta vaquera oversized</h3>
                <p className="text-gray-700 leading-relaxed">
                  La <strong>chaqueta vaquera oversize</strong> es un imprescindible de los años 90.
                  Ya sea en azul desgastado clásico, personalizada con parches o bordada, aporta un
                  toque retro a cualquier outfit. Los modelos vintage de Levi's y Wrangler son
                  particularmente codiciados.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">El vestido slip dress</h3>
                <p className="text-gray-700 leading-relaxed">
                  Inspirado en la lencería, el <strong>slip dress</strong> (vestido lencero) se convirtió
                  en un símbolo del estilo minimalista 90s. Llevado solo para un look sofisticado o
                  superpuesto sobre una camiseta para un estilo más casual, sigue siendo una pieza
                  versátil muy buscada.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 2: Estilo grunge */}
          <section id="tendencias-grunge" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">El estilo grunge: el espíritu Seattle</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nacido en los clubes de Seattle con grupos como Nirvana y Pearl Jam, el
                <strong> estilo grunge</strong> revolucionó la moda de los años 90. Anticonformista
                y despreocupado, privilegia la comodidad y la autenticidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-pastel/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Piezas esenciales grunge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Camisa de franela a cuadros</strong> - Llevada abierta sobre camiseta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Camiseta de grupo</strong> - Nirvana, Pearl Jam, Soundgarden...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Vaqueros rotos</strong> - Look gastado y relajado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span><strong>Doc Martens</strong> - Las botas icónicas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-mint/30 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Consejos de estilo grunge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Superpón las capas de manera desenfadada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Opta por tallas oversize</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Favorece los colores oscuros: negro, burdeos, caqui</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                    <span>Añade accesorios de plata o cuero</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3: Streetwear 90s */}
          <section id="streetwear-90s" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Streetwear 90s: la influencia hip-hop</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                El <strong>streetwear de los años 90</strong> es inseparable de la cultura hip-hop.
                Artistas como Tupac, Notorious B.I.G. y TLC popularizaron un estilo urbano reconocible
                en cualquier lugar: ropa amplia, logos visibles y zapatillas de colección.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Marcas de culto</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Tommy Hilfiger</li>
                  <li>FUBU</li>
                  <li>Karl Kani</li>
                  <li>Cross Colours</li>
                  <li>Starter</li>
                  <li>Champion</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Piezas estrella</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Sudadera con capucha oversized</li>
                  <li>Chándal completo</li>
                  <li>Gorra snapback</li>
                  <li>Bomber jacket</li>
                  <li>Pantalón cargo</li>
                  <li>Camiseta de baloncesto</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3 text-vinted">Zapatillas 90s</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Nike Air Max 95</li>
                  <li>Air Jordan 1-12</li>
                  <li>Reebok Classic</li>
                  <li>Fila Disruptor</li>
                  <li>Adidas Superstar</li>
                  <li>New Balance 990</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 4: Minimalismo */}
          <section id="minimalismo" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">El minimalismo sofisticado</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                En contraste con el grunge, el <strong>minimalismo de los 90</strong> fue abanderado
                por diseñadores como Calvin Klein, Helmut Lang y Jil Sander. Este estilo depurado
                favorece los cortes limpios, los colores neutros y los materiales nobles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Características del estilo minimalista 90s</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Paleta neutra</strong>: negro, blanco, beige, gris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Cortes depurados</strong> y líneas rectas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Materiales nobles</strong>: seda, cachemira, cuero</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Ausencia de logos</strong> visibles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4">Piezas minimalistas a buscar</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Slip dress de satén</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Blazer boyfriend negro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pantalón de sastre fluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-vinted rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cuello alto fino de punto</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 5: Accesorios */}
          <section id="accesorios" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-pastel rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Accesorios emblemáticos de los años 90</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Joyas y accesorios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chokers</strong> - Gargantillas de terciopelo o estilo tatuaje</li>
                  <li><strong>Cadenas</strong> - Cadenas grandes doradas estilo hip-hop</li>
                  <li><strong>Clips mariposa</strong> - Coloridos y brillantes</li>
                  <li><strong>Mini bolsos</strong> - Los bolsos pequeños vuelven</li>
                  <li><strong>Riñonera</strong> - El bolso de cintura práctico y estiloso</li>
                  <li><strong>Gafas ovaladas</strong> - Estilo Matrix o hippie</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-4 text-vinted">Calzado de culto</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Doc Martens</strong> - Botas, derbis y sandalias</li>
                  <li><strong>Platform shoes</strong> - Cuñas estilo Spice Girls</li>
                  <li><strong>Buffalo</strong> - Las plataformas masivas</li>
                  <li><strong>Converse All-Star</strong> - Bajas o altas</li>
                  <li><strong>Vans Old Skool</strong> - El estilo skate</li>
                  <li><strong>Sandalias deportivas</strong> - Teva y Birkenstock</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 6: Dónde encontrar */}
          <section id="donde-encontrar" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-mint rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold">Dónde encontrar ropa 90s auténtica</h2>
            </div>

            <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <h3 className="text-xl font-bold mb-4 text-vinted">Plataformas online</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las <strong>plataformas de segunda mano</strong> son el mejor lugar para encontrar
                piezas vintage de los 90 a precios accesibles. Vinted, Vestiaire Collective y Depop
                están llenas de tesoros de esa época.
              </p>
              <div className="bg-vinted/10 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Consejo VintDress:</strong> Usa palabras clave precisas como "vintage 90s",
                  "Y2K", "grunge" o los nombres de marcas emblemáticas para afinar tus búsquedas.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-pastel/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Tiendas de segunda mano</h3>
                <p className="text-gray-700 text-sm">
                  Las tiendas vintage y tiendas de segunda mano locales ofrecen a menudo piezas
                  auténticas a precios imbatibles. ¡Tómate tiempo para buscar!
                </p>
              </div>

              <div className="bg-mint/20 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Mercadillos</h3>
                <p className="text-gray-700 text-sm">
                  Los rastros y mercadillos pueden revelar tesoros vintage olvidados.
                  Ideal para negociar precios.
                </p>
              </div>

              <div className="bg-vinted/10 rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">Boutiques especializadas</h3>
                <p className="text-gray-700 text-sm">
                  Algunas boutiques se especializan en vintage 90s y ofrecen piezas
                  ya seleccionadas y autentificadas.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 7: Cómo llevar */}
          <section id="como-llevar" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-vinted rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Cómo llevar el vintage 90s hoy</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Mezclar vintage y contemporáneo</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La clave de un look 90s exitoso es <strong>mezclar las piezas vintage con
                  básicos modernos</strong>. Combina unos vaqueros baggy vintage con un crop top
                  actual, o lleva una chaqueta vaquera 90s sobre un vestido minimalista contemporáneo.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Evita el look total 90s que puede parecer un disfraz</li>
                  <li>Elige 1-2 piezas vintage fuertes por outfit</li>
                  <li>Equilibra los volúmenes: pieza oversize + pieza ajustada</li>
                  <li>Juega con los accesorios para acentuar el lado retro</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold mb-4 text-vinted">Ideas de looks 90s</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look casual grunge</h4>
                    <p className="text-sm text-gray-700">
                      Mom jeans + camiseta de grupo vintage + camisa de franela anudada a la cintura + Doc Martens
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look minimalista chic</h4>
                    <p className="text-sm text-gray-700">
                      Slip dress satinado + blazer oversized + sandalias de tacón + bolso baguette
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look streetwear</h4>
                    <p className="text-sm text-gray-700">
                      Vaquero baggy + sudadera vintage + zapatillas retro + gorra
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Look verano 90s</h4>
                    <p className="text-sm text-gray-700">
                      Short vaquero de talle alto + crop top + sandalias de plataforma + gafas ovaladas
                    </p>
                  </div>
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
                  <h2 className="text-2xl font-bold mb-2">Vende tus piezas vintage con VintDress</h2>
                  <p className="text-white/90">
                    ¿Tienes ropa vintage de los años 90 para vender en Vinted? ¡Aumenta tus ventas con
                    nuestras fotos con modelo generadas por IA! A los compradores les encanta ver la
                    ropa en un maniquí virtual.
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
                <h3 className="text-lg font-bold mb-3">¿Qué define la moda de los años 90?</h3>
                <p className="text-gray-700">
                  La moda de los 90 se caracteriza por su diversidad: del grunge desenfadado al
                  minimalismo sofisticado, pasando por el streetwear hip-hop. Los cortes oversized,
                  el denim, los crop tops y las zapatillas son las piezas emblemáticas de esa década.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Cómo reconocer ropa vintage auténtica de los 90?</h3>
                <p className="text-gray-700">
                  Verifica las etiquetas (composición, país de fabricación), la calidad de las
                  costuras y acabados. La ropa de los 90 auténtica suele tener costuras más
                  resistentes y materiales más gruesos. Busca también los logos y diseños de
                  época específicos de las marcas.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Qué marcas de los 90 son las más buscadas?</h3>
                <p className="text-gray-700">
                  Las marcas más codiciadas incluyen Levi's, Tommy Hilfiger, Calvin Klein,
                  Champion, FUBU, Starter y Nike vintage. Las piezas con logos visibles o
                  diseños icónicos de la época son particularmente valoradas.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿El estilo 90s es adecuado para todas las edades?</h3>
                <p className="text-gray-700">
                  ¡Absolutamente! El estilo de los 90 es muy versátil. Opta por el minimalismo
                  sofisticado si prefieres un look más maduro, o atrévete con el grunge y el
                  streetwear para un estilo más audaz. Lo importante es adaptar las piezas a
                  tu tipo de cuerpo y personalidad.
                </p>
              </div>

              <div className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg font-bold mb-3">¿Qué presupuesto para un armario vintage 90s?</h3>
                <p className="text-gray-700">
                  Los precios varían según las plataformas y el estado de las piezas. En Vinted o
                  en tiendas de segunda mano, cuenta con 10-30€ para una camiseta vintage, 25-60€
                  para unos vaqueros Levi's, 30-80€ para una chaqueta vaquera. Las piezas raras o
                  de marcas premium pueden alcanzar precios más elevados.
                </p>
              </div>
            </div>
          </section>

          {/* Artículos relacionados */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/es/articles/tienda-vintage-online"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Tienda Vintage Online: Guía Completa 2026</h3>
                <p className="text-gray-600 text-sm">
                  Descubre las mejores plataformas para comprar ropa vintage online.
                </p>
              </Link>
              <Link
                to="/es/articles/vaquero-levis-vintage"
                className="bg-white rounded-xl border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <h3 className="font-bold text-vinted mb-2">Vaquero Levi's Vintage: Guía de Compra</h3>
                <p className="text-gray-600 text-sm">
                  Cómo reconocer y comprar un auténtico vaquero Levi's vintage.
                </p>
              </Link>
            </div>
          </section>

          {/* Navegación entre artículos */}
          <ArticleNavigation currentPath="/es/articles/ropa-vintage-anos-90" />
        </div>
      </article>
    </main>
  );
}
