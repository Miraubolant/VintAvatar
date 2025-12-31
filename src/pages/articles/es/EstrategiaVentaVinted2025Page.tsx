import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Target, DollarSign, FileText, Users, BarChart, Calendar, Zap } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const EstrategiaVentaVinted2025Page: React.FC = () => {
  useSEO({
    title: "Estrategia de Venta Vinted: Dominar en 2025 | VintDress",
    description: "Estrategias de venta Vinted 2025: precios, títulos, timing. ¡Los secretos de los top vendedores para explotar tus ventas!",
    keywords: "estrategia venta vinted 2025, vender más vinted, precios vinted, optimizar ventas vinted, negocio vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop"
          alt="Estrategia Venta Vinted 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              ESTRATEGIA VINTED 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Dominar el Mercado Este Año
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 lg:pb-20">
        <ArticleNavigation />

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-vinted text-white border-3 border-black font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              ESTRATEGIA
            </span>
            <span className="font-body text-sm text-gray-600">Por Equipo VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 de noviembre de 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 min de lectura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Estrategia de Venta Vinted: Dominar en 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            ¡Las estrategias secretas de los top vendedores para explotar tus ventas Vinted este año!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Estrategia", "Ventas", "Vinted", "2025", "Negocio", "E-commerce"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg mb-4">
            El mercado Vinted nunca ha sido tan competitivo. Para triunfar en 2025, necesitas más que una simple foto bonita: ¡necesitas una verdadera estrategia!
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">65 millones de usuarios activos</p>
            </div>
            <div className="bg-white border-2 border-black p-3">
              <p className="font-body text-sm text-gray-700">97% de compras en smartphone</p>
            </div>
          </div>
        </div>

        {/* Capítulo 1: Conoce Tu Mercado */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Target className="w-8 h-8 text-vinted" />
            Capítulo 1: Conoce Tu Mercado
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Analizar la Competencia
              </h3>
              <p className="font-body text-sm text-gray-700 mb-3">
                Técnica del "Price Benchmarking":
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Busca 10 artículos similares</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Anota precios, estados y presentaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Posiciónate estratégicamente</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Horarios Ganadores 2025
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Domingo 19h-21h</p>
                  <p className="font-body text-xs text-gray-600">Pico de vistas (+340%)</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Miércoles 12h-14h</p>
                  <p className="font-body text-xs text-gray-600">Shopping pausa almuerzo</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Viernes 17h-20h</p>
                  <p className="font-body text-xs text-gray-600">Preparación fin de semana</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 2: Optimización de Títulos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <FileText className="w-8 h-8 text-vinted" />
            Capítulo 2: Optimización de Títulos
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Fórmula Mágica
            </h3>
            <div className="bg-white border-3 border-black p-4 mb-4">
              <code className="font-display font-bold text-black">
                MARCA + TIPO + DETALLE ÚNICO + TALLA + ESTADO
              </code>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-pink-pastel border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">Mal ejemplo</p>
                <p className="font-body text-sm text-gray-700 line-through">"Vestido negro M"</p>
              </div>
              <div className="bg-mint border-2 border-black p-3">
                <p className="font-body text-xs text-gray-600 mb-1">Buen ejemplo</p>
                <p className="font-body text-sm text-black font-semibold">"ZARA Vestido Blazer Negro Botones Dorados T.M Perfecto Estado"</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Top 10 Palabras Que Venden
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["NUEVO / NUNCA USADO", "EDICIÓN LIMITADA", "VINTAGE AUTÉNTICO", "TENDENCIA 2025", "PERFECTO ESTADO",
                "PIEZA RARA", "COLECCIÓN PRIVADA", "PRECIO SACRIFICADO", "VENTA URGENTE", "ÚLTIMA PIEZA"].map((word, i) => (
                <div key={i} className="bg-mint border-2 border-black p-2 text-center">
                  <span className="font-display font-bold text-xs text-black">{i + 1}. {word}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capítulo 3: Estrategia de Precios */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-vinted" />
            Capítulo 3: Estrategia de Precios
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Psicología de Precios
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Terminar en <strong>9</strong> o <strong>5</strong>: 19€, 25€, 35€</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Precio alto inicial luego "descuento"</span></li>
              <li className="flex gap-2"><Zap className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Bundle deals para aumentar el carrito</span></li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <h3 className="font-display font-bold text-xl text-black p-4 border-b-3 border-black bg-cream">
                Guía de Precios 2025
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Categoría</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Nuevo</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Muy Bueno</th>
                    <th className="p-4 text-center font-display font-bold text-black">Bueno</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Fast Fashion</td>
                    <td className="p-4 text-center border-r-3 border-black">40-60%</td>
                    <td className="p-4 text-center border-r-3 border-black">30-40%</td>
                    <td className="p-4 text-center">20-30%</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Marcas Premium</td>
                    <td className="p-4 text-center border-r-3 border-black">50-70%</td>
                    <td className="p-4 text-center border-r-3 border-black">40-50%</td>
                    <td className="p-4 text-center">30-40%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Lujo/Diseñador</td>
                    <td className="p-4 text-center border-r-3 border-black">60-80%</td>
                    <td className="p-4 text-center border-r-3 border-black">50-60%</td>
                    <td className="p-4 text-center">40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Capítulo 4: Descripción */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 4: Descripción que Convierte
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Template Ganador
              </h3>
              <div className="space-y-3">
                <div className="bg-vinted border-2 border-black p-3">
                  <p className="font-display font-bold text-white text-sm">GANCHO EMOCIONAL</p>
                </div>
                <div className="bg-mint border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">DETALLES</p>
                  <p className="font-body text-xs text-gray-700">Marca, talla, materiales, estado</p>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-3">
                  <p className="font-display font-bold text-black text-sm">INFO PRÁCTICA</p>
                  <p className="font-body text-xs text-gray-700">Envío, embalaje, preguntas</p>
                </div>
              </div>
            </div>

            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4">
                Storytelling Poderoso
              </h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Básico</p>
                  <p className="font-body text-sm text-gray-700">"Jean Levi's 501 talla 28, buen estado"</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-body text-xs text-gray-600 mb-1">Transformado</p>
                  <p className="font-body text-sm text-black">"¡Este Levi's 501 vintage tiene alma! Encontrado en una tienda vintage parisina, tiene ese algo especial."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 5: Gestión de Stock */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 5: Gestión de Stock
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Estrategia de 30 Días
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Día 1-10</p>
                <p className="font-body text-sm text-gray-700">Precio estándar</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Día 11-20</p>
                <p className="font-body text-sm text-gray-700">-10% + boost</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-vinted text-lg mb-1">Día 21-30</p>
                <p className="font-body text-sm text-gray-700">-20% + repost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 6: Relación Cliente */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Capítulo 6: Relación Cliente 2025
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Servicio Cliente Excepcional
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Respuesta en menos de 2 horas</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Fotos adicionales bajo pedido</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Flexibilidad en negociaciones</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Programa VIP Propio
              </h3>
              <div className="space-y-2">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">5% en la 2ª compra</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">10% en la 3ª compra</p>
                </div>
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-display font-bold text-sm text-black">Acceso prioritario a novedades</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 7: Analytics */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <BarChart className="w-8 h-8 text-vinted" />
            Capítulo 7: Analytics y Optimización
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                KPIs a Monitorizar
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tasa de vistas por artículo</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tiempo medio hasta venta</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Tasa de negociación</span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Satisfacción cliente (reseñas)</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Tests A/B Permanentes
              </h3>
              <div className="space-y-2">
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Títulos diferentes</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Precios gancho</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Momento de publicación</p>
                </div>
                <div className="bg-cream border-2 border-black p-2">
                  <p className="font-body text-sm text-gray-700">Estilo de fotos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 8: Tendencias */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Calendar className="w-8 h-8 text-vinted" />
            Capítulo 8: Tendencias Moda 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Top Tendencias 2025
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Y2K revival intensificado", "Moda sostenible", "Cottagecore romántico", "Tech wear urbano", "Indie sleaze comeback"].map((trend) => (
                <div key={trend} className="bg-white border-2 border-black p-3">
                  <p className="font-body text-sm text-black">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan de Acción 30 Días */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Plan de Acción 30 Días
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">1</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semana 1</p>
              <p className="font-body text-xs text-gray-700">Auditoría completa anuncios</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">2</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semana 2</p>
              <p className="font-body text-xs text-gray-700">Optimización títulos/descripciones</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">3</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semana 3</p>
              <p className="font-body text-xs text-gray-700">Tests precios y fotos</p>
            </div>
            <div className="bg-white border-3 border-black p-5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-vinted border-2 border-black mx-auto mb-3 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-bold text-white text-xl">4</span>
              </div>
              <p className="font-display font-bold text-black mb-1">Semana 4</p>
              <p className="font-body text-xs text-gray-700">Análisis y ajustes</p>
            </div>
          </div>
        </section>

        {/* Resultados Garantizados */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Resultados Garantizados
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+400%</p>
                <p className="font-body text-sm text-gray-700">Vistas medias</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">÷2</p>
                <p className="font-body text-sm text-gray-700">Tiempo de venta</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center">
                <p className="font-display font-bold text-4xl text-vinted mb-1">+60%</p>
                <p className="font-body text-sm text-gray-700">Carrito medio</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuál es la mejor estrategia de precios en Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Usa precios psicológicos (terminados en 9 o 5), ofrece bundles y ajusta según estado y marca.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cómo destacar entre 65 millones de usuarios?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Fotos IA profesionales, títulos optimizados con palabras clave potentes, descripciones storytelling y servicio cliente reactivo.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuál es el mejor título para un anuncio Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La fórmula ganadora: MARCA + TIPO + DETALLE ÚNICO + TALLA + ESTADO. Ej: "ZARA Vestido Blazer Negro Botones Dorados T.M Perfecto Estado"
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo para Dominar Vinted en 2025?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              ¡Aplica estas estrategias ahora y transforma Vinted en tu máquina de hacer dinero!
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              EMPEZAR AHORA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-2xl text-black mb-6">
            Artículos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/es/articles/5-consejos-vender-rapido-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Consejos para Vender Más Rápido</h3>
              <p className="font-body text-sm text-gray-600">Impulsa tus ventas con estos consejos probados.</p>
            </Link>
            <Link
              to="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guía Completa Fotos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Todas las técnicas para fotos que venden.</p>
            </Link>
            <Link
              to="/es/articles/algoritmo-vinted-visibilidad-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Algoritmo Vinted Visibilidad</h3>
              <p className="font-body text-sm text-gray-600">Comprende el algoritmo para maximizar tu visibilidad.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EstrategiaVentaVinted2025Page;
