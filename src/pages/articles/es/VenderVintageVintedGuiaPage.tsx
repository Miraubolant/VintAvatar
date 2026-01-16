import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Gem, Search, Camera, DollarSign, FileText, TrendingUp, Clock, Award, Star, CheckCircle, X } from 'lucide-react';

export default function VenderVintageVintedGuiaPage() {
  useSEO({
    title: "Vender Vintage en Vinted: La Guía Completa 2025 | VintDress",
    description: "Guía completa para vender vintage en Vinted en 2025. Autenticación, fotos IA, precios, descripciones. ¡Transforma tus piezas retro en oro!",
    keywords: "vender vintage vinted, ropa vintage, moda retro vinted, precio vintage, autenticidad vintage",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Vender Vintage en Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Vender Vintage en Vinted
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              La Guía Completa 2025
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
            <span className="text-black">6 de diciembre de 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">10 min de lectura</span>
            <span className="text-black">•</span>
            <span className="text-black">Por Sophie Martin</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Vintage', 'Guía', 'Vinted', 'Moda Retro', 'Ventas'].map((tag) => (
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
            ¡El vintage está en pleno auge! Con la moda sostenible y el regreso de las tendencias retro,
            vender ropa vintage en Vinted puede ser muy lucrativo. Aquí está todo lo que necesitas saber.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Gem className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl mb-3">Por Qué el Vintage Triunfa en 2025</h2>
              <div className="bg-mint/30 border-2 border-black p-4 mb-4">
                <h3 className="font-semibold mb-2">Las cifras hablan:</h3>
                <ul className="space-y-1">
                  <li>• +45% de búsquedas "vintage" en Vinted en 2024</li>
                  <li>• Precios medios 3x más altos que el fast-fashion</li>
                  <li>• Compradores dispuestos a pagar por autenticidad</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Lo que enamora a los compradores:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Piezas únicas y originales',
                'Calidad de fabricación superior',
                'Estilo atemporal y duradero',
                'Historia y carácter de las prendas'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comment Identifier une Vraie Pièce Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Cómo Identificar una Pieza Vintage Auténtica</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Etiquetas reveladoras:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>"Made in France/Italy/USA" (antes de la deslocalización)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Tipografía y logos de época</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Números de lote o códigos antiguos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Materiales nobles mencionados</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Detalles de fabricación:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Costuras reforzadas y regulares</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Botones de nácar, metal o madera</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Forros completos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Cremalleras metálicas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Datar una Pieza Vintage:</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Años 70:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Motivos psicodélicos</li>
                  <li>• Cuellos anchos y puntiagudos</li>
                  <li>• Tejidos sintéticos brillantes</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Años 80:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Hombreras marcadas</li>
                  <li>• Colores neón</li>
                  <li>• Logos visibles</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-semibold mb-2">Años 90:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Minimalismo</li>
                  <li>• Denim desgastado</li>
                  <li>• Cortes oversize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photographier le Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Fotografiar Vintage: Los Secretos Pro</h2>
          </div>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="text-white text-lg mb-4">
              El vintage tiene un desafío único: los compradores no pueden tocar el tejido ni ver los detalles.
              Tus fotos deben compensar.
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">La solución IA:</h3>
              <p className="mb-3">Nuestro generador de fotos puestas es perfecto para vintage porque:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Resalta el corte único</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Muestra cómo cae la prenda</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Da vida a piezas que pueden parecer "muertas" en percha</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span><strong>¡Aumenta las ventas en +350% en vintage!</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">Fotos Obligatorias para Vintage:</h3>

            <div className="space-y-3">
              {[
                { num: '1', title: 'Foto puesta IA', desc: 'El gancho definitivo' },
                { num: '2', title: 'Etiqueta/marca', desc: 'Prueba de autenticidad' },
                { num: '3', title: 'Detalles del tejido', desc: 'Textura y calidad' },
                { num: '4', title: 'Costuras y acabados', desc: 'Artesanía' },
                { num: '5', title: 'Defectos eventuales', desc: 'Transparencia total' },
              ].map((photo) => (
                <div key={photo.num} className="flex items-center gap-3 bg-white border-2 border-black p-3">
                  <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                    {photo.num}
                  </span>
                  <div>
                    <p className="font-semibold">{photo.title}</p>
                    <p className="text-sm text-gray-600">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fixer le Prix du Vintage */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Fijar el Precio del Vintage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">1</span>
                <h3 className="font-semibold text-lg">Identificar la marca</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Marcas de lujo vintage: precio x5 a x10</li>
                <li>• Marcas de calidad (Cacharel, Kenzo vintage): x3</li>
                <li>• Sin marca pero calidad: x2</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">2</span>
                <h3 className="font-semibold text-lg">Evaluar el estado</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Perfecto/Nuevo: Precio máximo</li>
                <li>• Muy buen estado: -10 a 15%</li>
                <li>• Buen estado con defectos menores: -20 a 30%</li>
                <li>• Para restaurar: -50% pero nicho específico</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">3</span>
                <h3 className="font-semibold text-lg">Verificar la tendencia</h3>
              </div>
              <ul className="space-y-1 text-sm ml-10">
                <li>• Pieza tendencia actual: precio premium</li>
                <li>• Clásico atemporal: precio estable</li>
                <li>• Fuera de tendencia temporal: paciencia o rebaja</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center border-2 border-black">4</span>
                <h3 className="font-semibold text-lg">Estudiar el mercado</h3>
              </div>
              <p className="text-sm ml-10">
                Busca artículos similares <strong>vendidos</strong> (¡no en venta!)
              </p>
            </div>
          </div>
        </div>

        {/* Descriptions qui Font Vendre */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Descripciones que Venden</h2>
          </div>

          <div className="bg-cream border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-4">La Plantilla Perfecta para Vintage:</h3>

            <div className="bg-white border-2 border-black p-4 font-mono text-sm">
              <p className="mb-2">[DÉCADA] [MARCA] - [TIPO DE PRENDA]</p>
              <p className="mb-2">Historia:</p>
              <p className="mb-2 ml-4">[Contexto de la pieza, época, estilo]</p>
              <p className="mb-2">Detalles:</p>
              <ul className="ml-4 mb-2">
                <li>- Marca: [nombre]</li>
                <li>- Época: [estimación]</li>
                <li>- Talla etiqueta: [X] (corresponde a [Y] actual)</li>
                <li>- Material: [composición]</li>
                <li>- Color: [descripción precisa]</li>
              </ul>
              <p className="mb-2">Medidas:</p>
              <p className="mb-2 ml-4">[Todas las medidas importantes]</p>
              <p className="mb-2">Estado:</p>
              <p className="mb-2 ml-4">[Descripción honesta con defectos]</p>
              <p className="mb-2">Autenticidad:</p>
              <p className="ml-4">[Elementos que prueban la autenticidad]</p>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Palabras Clave que Impulsan:</h3>
            <div className="flex flex-wrap gap-2">
              {['Vintage 90s', 'Retro', 'True vintage', 'Colección', 'Raro', 'Made in France'].map((keyword) => (
                <span key={keyword} className="bg-mint border-2 border-black px-3 py-1 text-sm font-semibold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Niches Vintage les Plus Rentables */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Nichos Vintage Más Rentables</h2>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { num: '1', title: 'Denim vintage Levi\'s', desc: 'Valor seguro, alta demanda' },
              { num: '2', title: 'Sportswear 90s', desc: 'Nike, Adidas vintage muy buscados' },
              { num: '3', title: 'Lujo vintage', desc: 'Chanel, Hermès, YSL = jackpot' },
              { num: '4', title: 'Bohemio 70s', desc: 'Vestidos largos, motivos florales' },
              { num: '5', title: 'Preppy 80s', desc: 'Ralph Lauren, Lacoste vintage' },
            ].map((niche) => (
              <div key={niche.num} className="bg-cream border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-black text-lg">
                    {niche.num}
                  </span>
                  <div>
                    <p className="font-semibold text-lg">{niche.title}</p>
                    <p className="text-sm text-gray-600">{niche.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">A Evitar:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Ropa muy manchada o agujereada (salvo mención "para piezas")</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Falsificaciones vintage (¡sí, existen!)</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Piezas sin ningún atractivo estilístico</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stratégie de Vente Avancée */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Estrategia de Venta Avanzada</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Crear tu Tienda Vintage:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Fotos coherentes gracias a nuestra IA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Descripción estilística unificada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Especialización por época o estilo</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Fidelizar tu clientela:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Lotes temáticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Previstas para clientes fieles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Consejos de estilo personalizados</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-vinted" />
              <h3 className="font-display font-bold text-xl">Timing Óptimo:</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Enero</p>
                <p className="text-sm">Buenos propósitos moda sostenible</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Abril</p>
                <p className="text-sm">Transición primavera, búsqueda piezas ligeras</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Septiembre</p>
                <p className="text-sm">Vuelta al cole, nuevos looks</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Octubre</p>
                <p className="text-sm">Piezas de otoño vintage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cas Pratique */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Caso Práctico: De 5€ a 150€</h2>
          </div>

          <div className="bg-white border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-4">La Historia de Esta Chaqueta:</h3>

            <div className="space-y-4">
              <div className="bg-pink-pastel/30 border-2 border-black p-4">
                <p className="font-semibold mb-2">Compra:</p>
                <p>Chaqueta de terciopelo comprada a <strong>5€</strong></p>
              </div>

              <div className="bg-vinted/10 border-2 border-black p-4">
                <p className="font-semibold mb-2">Análisis:</p>
                <ul className="space-y-1">
                  <li>• Etiqueta "Made in France"</li>
                  <li>• Marca de confección parisina</li>
                  <li>• Botones de cuerno</li>
                  <li>• Forro de seda</li>
                </ul>
              </div>

              <div className="bg-mint/50 border-2 border-black p-4">
                <p className="font-semibold mb-2">Puesta en venta:</p>
                <ul className="space-y-1">
                  <li>• Foto puesta IA sublime</li>
                  <li>• Descripción detallada con historia</li>
                  <li>• Precio fijado: <strong>150€</strong></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-2xl text-vinted">
                  Resultado: ¡Vendida en 48h!
                </p>
                <p className="text-sm mt-2">A una compradora que buscaba exactamente este estilo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Conclusión</h2>
          <p className="text-lg mb-6">
            El vintage en Vinted es una mina de oro para quien sabe aprovecharlo. Las claves del éxito:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { num: '1', text: 'Autentificar correctamente tus piezas' },
              { num: '2', text: 'Fotografiar con nuestra IA para fotos puestas perfectas' },
              { num: '3', text: 'Describir con pasión y precisión' },
              { num: '4', text: 'Tarifar inteligentemente' },
              { num: '5', text: 'Apuntar a los nichos correctos' },
            ].map((cle) => (
              <div key={cle.num} className="bg-cream border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {cle.num}
                </span>
                <p className="font-semibold pt-1">{cle.text}</p>
              </div>
            ))}
          </div>

          <a
            href="/es"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Probar VintDress Ahora
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/es/articles/tendencias-moda-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Tendencias Moda 2025 →</p>
            </a>
            <a
              href="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía Fotos 2025 →</p>
            </a>
            <a
              href="/es/articles/estrategia-venta-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Estrategia de Venta 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
