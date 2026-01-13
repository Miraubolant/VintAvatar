import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { ShoppingBag, Search, Camera, TrendingUp, Shield, Star, CheckCircle, X, Store, Smartphone } from 'lucide-react';

export default function TiendaVintageOnlinePage() {
  useSEO({
    title: "Tienda Vintage Online: Mejores Plataformas 2026 | VintDress",
    description: "Guía completa de tiendas vintage online en 2026. Comparativa Vinted, Vestiaire Collective, Depop. Consejos para comprar y vender ropa de segunda mano.",
    keywords: "tienda vintage online, vinted, vestiaire collective, depop, ropa segunda mano, moda sostenible, comprar vintage",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Tienda vintage online - ropa vintage y segunda mano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Tienda Vintage Online
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Mejores Plataformas 2026
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-vinted border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
              Guía
            </span>
            <span className="text-black">13 Enero 2026</span>
            <span className="text-black">•</span>
            <span className="text-black">12 min de lectura</span>
            <span className="text-black">•</span>
            <span className="text-black">Por Emma Dubois</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Vintage', 'Segunda Mano', 'Vinted', 'Moda Sostenible', 'Comparativa'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Las tiendas vintage online han revolucionado nuestra forma de comprar y vender ropa.
            ¡Se acabó pasar horas buscando en tiendas de segunda mano físicas!
            Hoy, millones de piezas únicas están accesibles con solo unos clics.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">La Revolución de la Segunda Mano</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">Cifras clave 2026:</h3>
                <ul className="space-y-1">
                  <li>• 45 millones de usuarios Vinted en Europa</li>
                  <li>• Mercado segunda mano: +25% anual</li>
                  <li>• 70% de los 18-35 años compran de ocasión</li>
                  <li>• Ahorro medio: 60% vs nuevo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Por qué las tiendas vintage online triunfan:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Moda sostenible y eco-responsable',
                'Precios imbatibles vs fast-fashion',
                'Piezas únicas y vintage',
                'Compra fácil 24h/24'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vinted: La Tienda N°1 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Vinted: La Tienda Vintage Online N°1</h2>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <p className="text-lg mb-4">
              Con más de 45 millones de usuarios, Vinted se ha convertido en LA referencia
              de segunda mano en Europa. ¿Por qué tanto éxito?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Ventajas Vinted
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>0% comisión</strong> para vendedores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Envío simplificado (etiquetas integradas)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Protección al comprador incluida</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Chat integrado para negociar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>App móvil intuitiva</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Categorías populares:</h3>
              <ul className="space-y-2">
                {[
                  'Ropa mujer (60% ventas)',
                  'Moda infantil (+40% crecimiento)',
                  'Ropa hombre',
                  'Accesorios y bolsos',
                  'Zapatos',
                  'Vintage y coleccionismo'
                ].map((cat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-vinted text-white text-xs font-bold w-5 h-5 flex items-center justify-center mr-2 border border-black">
                      {idx + 1}
                    </span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comparativa de Plataformas */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Comparativa de Tiendas Vintage Online</h2>
          </div>

          {/* Vinted */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vinted</h3>
              <span className="bg-vinted text-white px-3 py-1 font-bold border-2 border-black">N°1 Recomendado</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Segunda mano generalista</p>
              </div>
              <div>
                <p className="font-semibold">Comisión vendedor:</p>
                <p className="text-green-600 font-bold">0%</p>
              </div>
              <div>
                <p className="font-semibold">Protección comprador:</p>
                <p>5% + 0,70€</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideal para:</strong> Todos, desde principiantes hasta vendedores pro</p>
          </div>

          {/* Vestiaire Collective */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Vestiaire Collective</h3>
              <span className="bg-black text-white px-3 py-1 font-bold border-2 border-black">Lujo</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Lujo y diseñadores</p>
              </div>
              <div>
                <p className="font-semibold">Comisión vendedor:</p>
                <p className="text-orange-600 font-bold">15-25%</p>
              </div>
              <div>
                <p className="font-semibold">Autenticación:</p>
                <p>Control calidad incluido</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideal para:</strong> Vender/comprar lujo (Chanel, Hermès, LV...)</p>
          </div>

          {/* Depop */}
          <div className="bg-mint/50 border-3 border-black p-6 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Depop</h3>
              <span className="bg-purple-500 text-white px-3 py-1 font-bold border-2 border-black">Tendencia</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Streetwear, vintage, tendencia</p>
              </div>
              <div>
                <p className="font-semibold">Comisión vendedor:</p>
                <p className="text-orange-600 font-bold">10%</p>
              </div>
              <div>
                <p className="font-semibold">Audiencia:</p>
                <p>Gen Z, creativos</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideal para:</strong> Piezas únicas, streetwear, vintage tendencia</p>
          </div>

          {/* Wallapop */}
          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-2xl">Wallapop</h3>
              <span className="bg-orange-500 text-white px-3 py-1 font-bold border-2 border-black">Local</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tipo:</p>
                <p>Anuncios generalistas</p>
              </div>
              <div>
                <p className="font-semibold">Comisión vendedor:</p>
                <p className="text-green-600 font-bold">0% (salvo opciones)</p>
              </div>
              <div>
                <p className="font-semibold">Especialidad:</p>
                <p>Entrega en mano</p>
              </div>
            </div>
            <p className="mt-3 text-sm"><strong>Ideal para:</strong> Ventas locales, grandes volúmenes</p>
          </div>
        </div>

        {/* Cómo Vender */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Cómo Vender en una Tienda Vintage Online</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Crear cuenta vendedor', desc: 'Registro gratuito, perfil completo con foto' },
              { num: '2', title: 'Fotografiar tus artículos', desc: 'Fotos luminosas, varios ángulos, detalles' },
              { num: '3', title: 'Redactar descripciones', desc: 'Marca, talla, estado, medidas, defectos' },
              { num: '4', title: 'Fijar el precio correcto', desc: 'Análisis competencia, margen negociación' },
              { num: '5', title: 'Enviar rápidamente', desc: 'Embalaje cuidado, envío en 48h' },
            ].map((step) => (
              <div key={step.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-vinted border-3 border-black p-6">
            <p className="text-white text-lg mb-4">
              ¿El secreto para vender rápido? <strong>¡Fotos profesionales!</strong>
            </p>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La solución VintDress:</h3>
              <p className="mb-3">Nuestra IA transforma tus fotos de ropa en fotos con modelo profesional:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>+300% más vistas</strong> en tus anuncios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Vende <strong>3x más rápido</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Resultado en <strong>30 segundos</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendencias 2026 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Tendencias Tiendas Vintage 2026</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Piezas más buscadas:</h3>
              <ul className="space-y-2">
                {[
                  'Jeans Levi\'s vintage 501',
                  'Chaquetas cuero años 80-90',
                  'Vestidos vintage años 70',
                  'Sportswear retro (Nike, Adidas)',
                  'Bolsos de lujo segunda mano',
                  'Abrigos lana oversize'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-vinted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Marcas que triunfan:</h3>
              <ul className="space-y-2">
                {[
                  'Levi\'s (vintage sobre todo)',
                  'Nike / Adidas vintage',
                  'The North Face',
                  'Carhartt',
                  'Ralph Lauren',
                  'Patagonia'
                ].map((brand, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-vinted" />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Consejos para Compradores */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Consejos para Comprar con Seguridad</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Qué verificar
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Fotos claras y detalladas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Descripción completa con medidas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Opiniones vendedor positivas (+4,5 estrellas)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Defectos mencionados honestamente</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                Señales de alerta
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Precios demasiado buenos para ser verdad</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Fotos borrosas o de stock</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cuenta creada recientemente sin ventas</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Pago fuera de la plataforma</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-vinted" />
              Consejos para negociar
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Sé educado y directo</p>
                <p className="text-sm text-gray-600">"Hola, ¿aceptarías X€?"</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Haz ofertas realistas</p>
                <p className="text-sm text-gray-600">-10 a 20% máx del precio</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Preguntas Frecuentes</h2>

          <div className="space-y-4">
            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">¿Cuál es la mejor tienda vintage online?</h3>
              <p className="text-gray-700">
                Vinted es la mejor opción para la mayoría gracias a su 0% de comisión vendedor,
                amplia selección y facilidad de uso. Para lujo, elige Vestiaire Collective.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">¿Es seguro comprar en tiendas vintage online?</h3>
              <p className="text-gray-700">
                Sí, las grandes plataformas como Vinted ofrecen protección al comprador. Tu dinero
                está retenido hasta que confirmes la recepción. Si hay problema, te reembolsan.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">¿Cómo vender bien en una tienda vintage online?</h3>
              <p className="text-gray-700">
                Las 3 claves del éxito: fotos de calidad (usa VintDress para fotos con modelo pro),
                descripciones detalladas con medidas, y precios competitivos.
              </p>
            </div>

            <div className="bg-cream border-3 border-black p-4">
              <h3 className="font-display font-bold text-lg mb-2">¿Cuánto se puede ganar en una tienda vintage online?</h3>
              <p className="text-gray-700">
                Depende del volumen y calidad. Los vendedores activos en Vinted generan de media
                200-500€/mes. Los top vendedores pueden superar 2000€/mes.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusión</h2>
          <p className="text-lg mb-6">
            Las tiendas vintage online han democratizado el acceso a la moda de segunda mano. Ya seas
            comprador o vendedor, estas plataformas ofrecen oportunidades increíbles para consumir de forma
            más responsable mientras encuentras grandes ofertas.
          </p>

          <a
            href="/es"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Impulsar mis ventas con VintDress
          </a>
        </div>

        {/* Artículos Relacionados */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/es/articles/vender-vintage-vinted-guia"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vender Vintage en Vinted →</p>
            </a>
            <a
              href="/es/articles/como-vender-en-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía Venta Vinted →</p>
            </a>
            <a
              href="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía Fotos Vinted →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
