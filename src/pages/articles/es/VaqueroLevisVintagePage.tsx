import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Calendar, Clock, User, Tag, Star, Search, CheckCircle, TrendingUp, ShoppingBag, Award, AlertTriangle, Sparkles } from 'lucide-react';

export default function VaqueroLevisVintagePage() {
  useSEO({
    title: "Vaquero Levi's Vintage: Guía de Compra y Autenticación 2026 | VintDress",
    description: "Guía completa de vaqueros Levi's vintage: cómo autenticar un 501, identificar modelos raros, dónde comprar y guía de precios. Consejos expertos para coleccionistas.",
    keywords: "vaquero levis vintage, levi's 501 vintage, autenticar levis, jeans vintage, levis coleccionista, vinted levis",
    canonicalUrl: "https://vintdress.com/es/articles/vaquero-levis-vintage",
    ogType: "article"
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-gray-600 hover:text-vinted transition-colors">
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-vinted transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-vinted font-medium">Vaquero Levi's Vintage</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-vinted text-white text-sm font-medium border-2 border-black">
              Guía Experta
            </span>
            <span className="px-3 py-1 bg-mint text-black text-sm font-medium border-2 border-black">
              Vintage
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Vaquero Levi's Vintage: La Guía Completa para Autenticar y Comprar en 2026
          </h1>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Aprende a identificar auténticos vaqueros Levi's vintage, reconocer los modelos más buscados
            y encontrar las mejores piezas en Vinted y tiendas de segunda mano online.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-01-13">13 de enero de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>14 min de lectura</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>VintDress</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&h=600&fit=crop"
            alt="Vaqueros Levi's vintage auténticos - Guía de compra y colección"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-vinted" />
            Índice
          </h2>
          <nav>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">1.</span>
                <a href="#historia">La historia legendaria de Levi's</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">2.</span>
                <a href="#autenticacion">Cómo autenticar un Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">3.</span>
                <a href="#modelos">Los modelos emblemáticos y su valor</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">4.</span>
                <a href="#comprar">Dónde comprar Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">5.</span>
                <a href="#precios">Guía de precios 2026</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">6.</span>
                <a href="#vender">Consejos para vender Levi's vintage</a>
              </li>
              <li className="flex items-center gap-2 hover:text-vinted transition-colors">
                <span className="font-bold text-vinted">7.</span>
                <a href="#faq">FAQ</a>
              </li>
            </ol>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className="bg-mint/30 border-4 border-black p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg leading-relaxed m-0">
              Los <strong>vaqueros Levi's vintage</strong> se han convertido en auténticos objetos de colección.
              Un 501 de los años 1950 puede venderse por miles de euros, mientras que los modelos de los 80-90
              siguen siendo accesibles y muy buscados por los amantes de la moda vintage. Esta guía te enseña
              a reconocer piezas auténticas y conseguir las mejores ofertas.
            </p>
          </div>

          {/* Section 1 */}
          <section id="historia" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-vinted" />
              La Historia Legendaria de Levi's
            </h2>

            <p>
              Fundada en 1853 por Levi Strauss, la marca revolucionó el mundo de la ropa con la invención
              del vaquero azul en 1873. La <strong>patente de los remaches</strong> registrada con Jacob Davis
              dio origen al jean moderno. Esta rica historia hace del Levi's vintage un patrimonio cultural americano.
            </p>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Las Grandes Épocas de Levi's</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1873-1936</div>
                  <p className="m-0">Era "XX" - Primeros vaqueros con remaches, muy raros y valiosos (+10.000€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1936-1971</div>
                  <p className="m-0">Era "Big E" - La E mayúscula en la etiqueta roja, muy buscados (500-5.000€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1971-1983</div>
                  <p className="m-0">Transición "small e" - Todavía Made in USA, gran calidad (150-500€)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-20 font-bold text-vinted shrink-0">1983-1999</div>
                  <p className="m-0">Era vintage moderna - Producción variada, accesibles (50-200€)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="autenticacion" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Search className="w-8 h-8 text-vinted" />
              Cómo Autenticar un Levi's Vintage
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  La Etiqueta Roja (Red Tab)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>"Big E" LEVI'S</strong>: antes de 1971</li>
                  <li><strong>"small e" Levi's</strong>: después de 1971</li>
                  <li><strong>Tab blanco</strong>: años 80-90</li>
                  <li><strong>Verifica</strong> la costura y alineación</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  El Parche de Cuero
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Cuero auténtico</strong>: vintage genuino</li>
                  <li><strong>Cartón</strong>: a partir de los años 90</li>
                  <li><strong>"Two Horse"</strong>: logo icónico</li>
                  <li><strong>Desgaste natural</strong>: señal de autenticidad</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Remaches y Botones
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Remaches ocultos</strong>: después de 1966</li>
                  <li><strong>"LS&CO SF"</strong>: grabado auténtico</li>
                  <li><strong>Pátina cobriza</strong>: desgaste natural</li>
                  <li><strong>Botón superior</strong>: numeración de fábrica</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  La Etiqueta Interior
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Etiqueta "CARE"</strong>: indica el año</li>
                  <li><strong>Made in USA</strong>: muy valorado</li>
                  <li><strong>Número de lote</strong>: identifica el modelo</li>
                  <li><strong>Talla y corte</strong>: codificación vintage</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Cuidado con las Falsificaciones
              </h3>
              <ul className="space-y-2">
                <li>Los falsos vintage son comunes - desconfía de precios demasiado bajos</li>
                <li>Verifica la coherencia entre todos los elementos (tab, parche, remaches)</li>
                <li>El denim vintage tiene una textura y olor particulares</li>
                <li>Pide fotos detalladas de la etiqueta care tag</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="modelos" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-vinted" />
              Los Modelos Emblemáticos y Su Valor
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 501</h3>
                  <span className="px-3 py-1 bg-vinted text-white text-sm font-bold border-2 border-black">
                    El Más Icónico
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  El vaquero original desde 1890. Corte recto, bragueta de botones, talle alto.
                  Los 501 "Big E" y "selvedge" son los más valorados.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valor vintage 80s-90s:</span>
                  <span className="text-vinted font-bold">80€ - 250€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 505</h3>
                  <span className="px-3 py-1 bg-mint text-black text-sm font-bold border-2 border-black">
                    Muy Buscado
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Creado en 1967 con bragueta de cremallera. Corte regular ligeramente más ajustado
                  que el 501. Popular en los años 70-80.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valor vintage:</span>
                  <span className="text-vinted font-bold">60€ - 180€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 517</h3>
                  <span className="px-3 py-1 bg-pink-pastel text-black text-sm font-bold border-2 border-black">
                    Bootcut de Culto
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  El bootcut icónico de los años 70. Vuelve con fuerza con el retorno de la moda retro.
                  Las versiones "Orange Tab" son especialmente buscadas.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valor vintage:</span>
                  <span className="text-vinted font-bold">70€ - 200€</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-bold">Levi's 550 / 560</h3>
                  <span className="px-3 py-1 bg-gray-200 text-black text-sm font-bold border-2 border-black">
                    Nostalgia 90s
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Los cortes relaxed y loose de los años 90, muy de moda hoy.
                  Perfectos para el estilo baggy vintage.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-bold">Valor vintage:</span>
                  <span className="text-vinted font-bold">40€ - 120€</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="comprar" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-vinted" />
              Dónde Comprar Levi's Vintage
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-4 border-black">
                <thead className="bg-vinted text-white">
                  <tr>
                    <th className="p-3 text-left font-display border-b-4 border-black">Plataforma</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Ventajas</th>
                    <th className="p-3 text-left font-display border-b-4 border-black">Precios Medios</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Vinted</td>
                    <td className="p-3">Amplia selección, precios negociables, protección al comprador</td>
                    <td className="p-3 text-vinted font-bold">30€ - 150€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">eBay Vintage</td>
                    <td className="p-3">Piezas raras, vendedores expertos, subastas</td>
                    <td className="p-3 text-vinted font-bold">50€ - 500€+</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold">Tiendas especializadas</td>
                    <td className="p-3">Selección curada, autenticidad garantizada</td>
                    <td className="p-3 text-vinted font-bold">80€ - 300€</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-gray-50">
                    <td className="p-3 font-bold">Mercadillos</td>
                    <td className="p-3">Posibles gangas, negociación</td>
                    <td className="p-3 text-vinted font-bold">20€ - 100€</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Wallapop / Micolet</td>
                    <td className="p-3">Amplia variedad, diferentes estados</td>
                    <td className="p-3 text-vinted font-bold">40€ - 200€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section id="precios" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-vinted" />
              Guía de Precios 2026
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-green-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Entrada (40-100€)
                </h3>
                <ul className="space-y-2">
                  <li>501/505 años 90 buen estado</li>
                  <li>550/560 vintage completo</li>
                  <li>Modelos Made in Mexico/Asia</li>
                  <li>Desgaste visible pero usable</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-blue-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Gama Media (100-250€)
                </h3>
                <ul className="space-y-2">
                  <li>501 Made in USA años 80</li>
                  <li>Orange Tab vintage excelente estado</li>
                  <li>Selvedge principios de los 80</li>
                  <li>Lavado original buscado</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-yellow-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Gama Alta (250-800€)
                </h3>
                <ul className="space-y-2">
                  <li>Big E años 60-70</li>
                  <li>Selvedge estado perfecto</li>
                  <li>Modelos raros (Type III, etc.)</li>
                  <li>Dead stock (nunca usado)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display text-lg font-bold mb-4 text-center bg-red-100 -mx-5 -mt-5 p-3 border-b-4 border-black">
                  Colección (800€+)
                </h3>
                <ul className="space-y-2">
                  <li>501 XX pre-1950s</li>
                  <li>Piezas con historia documentada</li>
                  <li>Ediciones limitadas vintage</li>
                  <li>Estado museo / Dead stock antiguo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="vender" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vinted" />
              Consejos para Vender Levi's Vintage
            </h2>

            <div className="bg-white border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-xl font-bold mb-4">Checklist del Vendedor Pro</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Identifica con precisión</strong> el modelo, año y origen</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Mide todo</strong>: cintura, caderas, entrepierna, largo total</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Fotografía los detalles</strong>: tab, parche, remaches, etiquetas, costuras</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Describe el estado</strong> honestamente: desgaste, rotos, reparaciones</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Usa las palabras clave correctas</strong>: "501 vintage USA", "Big E selvedge"</span>
                </div>
              </div>
            </div>

            <div className="bg-mint/30 border-4 border-black p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-lg font-bold mb-3">Impulsa tus Ventas con VintDress</h3>
              <p className="mb-4">
                Las fotos profesionales marcan la diferencia al vender vaqueros vintage.
                Con <Link to="/" className="text-vinted font-bold hover:underline">VintDress</Link>,
                crea visuales realistas puestos en solo unos clics usando IA.
              </p>
              <Link
                to="/"
                className="inline-block bg-vinted text-white px-6 py-3 font-display font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Probar VintDress Gratis
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6">
              Preguntas Frecuentes sobre Levi's Vintage
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  ¿Cómo sé si mi Levi's es vintage?
                </h3>
                <p className="p-4">
                  Verifica la etiqueta roja (Big E = antes de 1971), el parche de cuero (no cartón),
                  las etiquetas interiores "Made in USA" y la presencia de selvedge en la costura interior.
                  Una etiqueta care tag con código puede datar el vaquero con precisión.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  ¿Cuál es la diferencia entre 501 y 505?
                </h3>
                <p className="p-4">
                  El 501 tiene bragueta de botones y corte recto clásico desde 1890.
                  El 505 (creado en 1967) tiene bragueta de cremallera y un corte ligeramente más ajustado
                  en los muslos. Ambos son muy buscados en vintage.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  ¿Los Levi's vintage tallan igual que hoy?
                </h3>
                <p className="p-4">
                  No, las tallas vintage suelen ser más pequeñas. Un 32 vintage corresponde
                  a menudo a un 30-31 actual. Pide siempre las medidas reales en centímetros
                  antes de comprar: cintura, caderas y entrepierna.
                </p>
              </div>

              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold p-4 bg-gray-100 border-b-4 border-black">
                  ¿Los Levi's vintage son una buena inversión?
                </h3>
                <p className="p-4">
                  Las piezas raras (Big E, selvedge, Made in USA) aumentan de valor con el tiempo.
                  Un 501 Big E comprado por 200€ hace 10 años puede valer 500€+ hoy.
                  Prioriza modelos en excelente estado con todas las etiquetas originales.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(9,177,186,1)]">
              <h2 className="font-display text-2xl font-bold mb-4">
                Conclusión: El Arte del Vaquero Levi's Vintage
              </h2>
              <p className="text-gray-300 mb-4">
                El vaquero Levi's vintage es mucho más que una simple prenda: es un trozo de historia
                de la moda americana. Ya seas un coleccionista apasionado o un amante de la moda sostenible,
                aprender a reconocer y apreciar estas piezas te abre un mundo fascinante.
              </p>
              <p className="text-gray-300">
                En Vinted y las tiendas de segunda mano online, las oportunidades abundan para quien sabe mirar.
                ¡Armado con esta guía, ya estás listo para encontrar tu próximo tesoro vintage!
              </p>
            </div>
          </section>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Levi\'s Vintage', '501', 'Autenticación', 'Vinted', 'Moda Vintage', 'Denim', 'Colección'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm border-2 border-black hover:bg-vinted hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article Navigation */}
        <ArticleNavigation currentArticleId="jean-levis-vintage" />
      </article>
    </div>
  );
}
