import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { Sparkles, TrendingUp, Heart, Leaf, Users, Zap, Calendar, DollarSign, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function TendenciasModa2025Page() {
  useSEO({
    title: "Tendencias Moda 2025: Qué Vender en Vinted | Guía Completa",
    description: "Tendencias moda 2025: Y2K 3.0, Indie Sleaze, Cottagecore. ¡Descubre qué vender en Vinted para explotar tus ventas!",
    keywords: "tendencias moda 2025, moda vinted 2025, y2k 2025, cottagecore, vender moda vinted, tendencias vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop"
          alt="Tendencias Moda 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Tendencias Moda 2025
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Qué Vender en Vinted
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
              Tendencia
            </span>
            <span className="text-black">10 de noviembre de 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">18 min de lectura</span>
            <span className="text-black">•</span>
            <span className="text-black">Por Equipo VintDress</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Tendencias', 'Moda', '2025', 'Y2K', 'Cottagecore', 'Vinted'].map((tag) => (
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
            ¡2025 se anuncia revolucionario para la moda! Entre nostalgia, sostenibilidad e innovación,
            descubre las tendencias que harán explotar tus ventas en Vinted.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">El Año de Todos los Contrastes</h2>
            <p className="text-white mb-4">
              Este año mezcla todo: lo vintage convive con lo futurista, el minimalismo se encuentra con el exceso,
              y la sostenibilidad se une a la innovación tecnológica.
            </p>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-xl mb-3">Por qué es una MINA DE ORO para Vinted:</h3>
            <ul className="space-y-2">
              {[
                'Diversidad = más oportunidades',
                'Ciclos de moda acelerados',
                'Alta demanda de segunda mano',
                'Consumo más consciente'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <Sparkles className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tendance #1 : Y2K 3.0 */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENCIA #1</span>
              <h2 className="font-display font-bold text-3xl mt-2">Y2K 3.0 - El Regreso Asumido</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">Se acabó el Y2K tímido: ¡2025 lleva el concepto al extremo!</h3>

            <h4 className="font-semibold mb-3">Lo que triunfa:</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Metálicos por todas partes</p>
                <p className="text-sm">Plata, cromo, holográfico</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Transparencia total</p>
                <p className="text-sm">PVC, organza, plexiglás</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Tech-wear integrado</p>
                <p className="text-sm">Bolsillos cargo, detalles LED</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold">Logos XXL</p>
                <p className="text-sm">Cuanto más grande, mejor</p>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Prendas a buscar:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Faldas de vinilo o PVC</li>
              <li>• Tops de malla metálica</li>
              <li>• Accesorios cromados</li>
              <li>• Gafas tintadas futuristas</li>
            </ul>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-2">¿Dónde encontrar?</h4>
            <p className="text-sm">Marcas de los años 2000 (Diesel, Miss Sixty), Fast fashion 2019-2020, Diseñadores independientes, Mercadillos especializados</p>
          </div>
        </div>

        {/* Tendance #2 : Indie Sleaze */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENCIA #2</span>
              <h2 className="font-display font-bold text-3xl mt-2">Indie Sleaze Renaissance</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">El Estilo de la Despreocupación</h3>
            <p className="mb-4"><strong>El anti-Instagram:</strong> ¡Adiós perfección, bienvenido caos controlado!</p>

            <h4 className="font-semibold mb-3">Códigos de vestimenta:</h4>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Layering caótico:</strong> Superposición asumida</li>
              <li>• <strong>Texturas que chocan:</strong> Lentejuelas + denim + cuero</li>
              <li>• <strong>Estampados enfrentados:</strong> Leopardo + rayas + flores</li>
              <li>• <strong>Accesorios excesivos:</strong> Joyas superpuestas</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Artículos de oro:</h4>
              <ul className="space-y-1">
                <li>• Blazers oversize vintage</li>
                <li>• Minifaldas de cuero colorido</li>
                <li>• Medias de fantasía</li>
                <li>• Diademas y pasadores</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Precios tendencia:</h4>
              <ul className="space-y-1">
                <li>• Blazer vintage: <strong>25-45€</strong></li>
                <li>• Mini-falda statement: <strong>15-35€</strong></li>
                <li>• Accesorios cabello: <strong>5-15€</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tendance #3 : Cottagecore */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENCIA #3</span>
              <h2 className="font-display font-bold text-3xl mt-2">Cottagecore Elevated</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">El Romanticismo Sofisticado</h3>
            <p className="mb-4"><strong>Más que una tendencia:</strong> ¡Un verdadero arte de vivir!</p>

            <h4 className="font-semibold mb-3">Evolución 2025:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Materiales más nobles</span>
              <span>• Cortes más estructurados</span>
              <span>• Detalles artesanales</span>
              <span>• Colores complejos</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Imprescindibles para vender:</h4>
              <ul className="space-y-1">
                <li>• Vestidos midi de lino bordado</li>
                <li>• Cárdigans de lana merino</li>
                <li>• Faldas largas con smock</li>
                <li>• Blusas con cuello claudine premium</li>
              </ul>
            </div>
            <div className="bg-cream border-3 border-black p-6">
              <h4 className="font-semibold mb-3">Marcas que triunfan:</h4>
              <p><strong>Gama alta:</strong> Sézane, Maje</p>
              <p className="mt-2"><strong>Accesible:</strong> Zara, & Other Stories</p>
            </div>
          </div>
        </div>

        {/* Tendance #4 : Sustainable Luxury */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENCIA #4</span>
              <h2 className="font-display font-bold text-3xl mt-2">Sustainable Luxury</h2>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">El Lujo Responsable</h3>
            <p className="mb-4"><strong>La nueva nobleza:</strong> ¡Calidad + sostenibilidad + estilo!</p>

            <h4 className="font-semibold mb-3">Criterios 2025:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Materiales eco-friendly certificados</span>
              <span>• Producción ética probada</span>
              <span>• Diseño atemporal</span>
              <span>• Made in Europe prioridad</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Ejemplos rentables:</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Abrigo lana vintage Burberry</span>
                <span className="font-bold text-vinted">200-400€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Bolso cuero artesanal</span>
                <span className="font-bold text-vinted">80-150€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Zapatillas eco-diseñadas</span>
                <span className="font-bold text-vinted">60-120€</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tendance #5 : Gender-Fluid */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENCIA #5</span>
              <h2 className="font-display font-bold text-3xl mt-2">Gender-Fluid Fashion</h2>
            </div>
          </div>

          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">La Moda Sin Fronteras</h3>
            <p className="mb-4"><strong>Revolución silenciosa:</strong> ¡Los géneros se difuminan en el armario!</p>

            <h4 className="font-semibold mb-3">Prendas universales que venden:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Camisas oversize neutras</span>
              <span>• Zapatillas unisex</span>
              <span>• Joyas minimalistas</span>
              <span>• Perfumes sin género</span>
            </div>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Estrategia Vinted:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Etiqueta tus artículos como "unisex"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Fotos con modelos diversos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                <span>Descripciones inclusivas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tendance #6 : Tech-Wear */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-black text-white px-3 py-1 font-display font-bold text-sm">TENDENCIA #6</span>
              <h2 className="font-display font-bold text-3xl mt-2">Tech-Wear Urbano</h2>
            </div>
          </div>

          <div className="bg-mint/30 border-3 border-black p-6 mb-6">
            <h3 className="font-display font-bold text-xl mb-3">La Moda del Futuro</h3>
            <p className="mb-4"><strong>Performance meets style:</strong> ¡Prendas inteligentes y funcionales!</p>

            <h4 className="font-semibold mb-3">Características:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• Tejidos técnicos (Gore-Tex, Coolmax)</span>
              <span>• Multifuncionalidad</span>
              <span>• Estética cyberpunk</span>
              <span>• Integración tecnológica</span>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h4 className="font-semibold mb-3">Artículos buscados:</h4>
            <ul className="space-y-1">
              <li>• Chaquetas con bolsillos modulares</li>
              <li>• Pantalones cargo técnicos</li>
              <li>• Zapatillas conectadas</li>
              <li>• Accesorios tácticos</li>
            </ul>
          </div>
        </div>

        {/* Calendrier des Tendances */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Calendario de Tendencias 2025</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q1 - Enero a Marzo</h3>
              <p className="text-sm italic mb-3">"New Year, New Me" Energy</p>
              <ul className="space-y-1 text-sm">
                <li>• Básicos premium</li>
                <li>• Detox vestimentario</li>
                <li>• Sport-luxe</li>
                <li>• Colores neutros sofisticados</li>
              </ul>
            </div>

            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q2 - Abril a Junio</h3>
              <p className="text-sm italic mb-3">Renacimiento Primaveral</p>
              <ul className="space-y-1 text-sm">
                <li>• Explosión Y2K 3.0</li>
                <li>• Cottagecore elevated</li>
                <li>• Pasteles complejos</li>
                <li>• Transparencias refinadas</li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q3 - Julio a Septiembre</h3>
              <p className="text-sm italic mb-3">Festival & Vacation Mode</p>
              <ul className="space-y-1 text-sm">
                <li>• Indie sleaze festival</li>
                <li>• Sustainable beachwear</li>
                <li>• Gender-fluid summer</li>
                <li>• Metálicos vacation</li>
              </ul>
            </div>

            <div className="bg-cream border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-2">Q4 - Octubre a Diciembre</h3>
              <p className="text-sm italic mb-3">Sofisticación Invernal</p>
              <ul className="space-y-1 text-sm">
                <li>• Tech-wear protección</li>
                <li>• Lujo responsable</li>
                <li>• Layering masterclass</li>
                <li>• Holiday glamour</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Strategy */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Estrategia de Precios 2025</h2>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-3 border-black">
              <thead>
                <tr className="bg-black text-white border-b-3 border-black">
                  <th className="border-r-2 border-white p-3 text-left font-display font-bold">Tendencia</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Precio Base</th>
                  <th className="border-r-2 border-white p-3 text-center font-display font-bold">Rango Medio</th>
                  <th className="p-3 text-center font-display font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tendance: 'Y2K 3.0', entry: '20-35€', mid: '35-65€', premium: '65-120€' },
                  { tendance: 'Indie Sleaze', entry: '15-30€', mid: '30-50€', premium: '50-90€' },
                  { tendance: 'Cottagecore', entry: '25-40€', mid: '40-75€', premium: '75-150€' },
                  { tendance: 'Sustainable Lux', entry: '50-100€', mid: '100-200€', premium: '200-400€' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b-2 border-black ${idx % 2 === 0 ? 'bg-cream' : ''}`}>
                    <td className="border-r-2 border-black p-3 font-semibold">{row.tendance}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.entry}</td>
                    <td className="border-r-2 border-black p-3 text-center">{row.mid}</td>
                    <td className="p-3 text-center font-bold text-vinted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-mint/50 border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Factores Multiplicadores:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              <span>• <strong>Autenticidad probada:</strong> +30%</span>
              <span>• <strong>Estado perfecto:</strong> +25%</span>
              <span>• <strong>Edición limitada:</strong> +50%</span>
              <span>• <strong>Influencer worn:</strong> +100%</span>
            </div>
          </div>
        </div>

        {/* Marketing des Tendances */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Marketing de Tendencias</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Y2K 3.0:</h4>
              <p className="font-display text-lg">"🚀 FUTURISTA! Top Metálico Edición Y2K 2025"</p>
            </div>

            <div className="bg-vinted/10 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Indie Sleaze:</h4>
              <p className="font-display text-lg">"✨ CAOS CHIC! Blazer Vintage Party Ready"</p>
            </div>

            <div className="bg-mint/50 border-3 border-black p-4">
              <h4 className="font-semibold mb-2">Cottagecore:</h4>
              <p className="font-display text-lg">"🌸 ROMÁNTICO! Vestido Lino Bordado a Mano Estilo Francés"</p>
            </div>
          </div>

          <div className="bg-cream border-3 border-black p-6">
            <h3 className="font-display font-bold text-lg mb-3">Hashtags Potentes 2025:</h3>
            <div className="flex flex-wrap gap-2">
              {['#Y2K2025', '#MetallicMagic', '#TechFashion', '#IndieSleaze', '#ChaosChic', '#PartyReady', '#Cottagecore2025', '#RomanticStyle', '#HandCrafted', '#SustainableLux', '#EthicalFashion', '#GreenStyle'].map((tag) => (
                <span key={tag} className="bg-mint border-2 border-black px-2 py-1 text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Erreurs à Éviter */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Errores a Evitar Absolutamente</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-display font-bold text-xl">Red Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Seguir ciegamente:</strong> Adapta a tu mercado local</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Stock desmesurado:</strong> Prueba primero con algunas piezas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Ignorar la estacionalidad:</strong> Timing = todo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>Precios fantasiosos:</strong> Mantente coherente con el mercado</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-display font-bold text-xl">Green Flags</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Test & Learn:</strong> Experimenta pequeño, escala grande</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Quality over Quantity:</strong> Mejor 10 piezas perfectas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Story telling:</strong> Cuenta la historia de cada tendencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Community building:</strong> Crea tu tribu de moda</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan d'Action */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Tu Plan de Acción Tendencias 2025</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { week: 'Semana 1', action: 'Analiza tu stock actual vs tendencias' },
              { week: 'Semana 2', action: 'Búsqueda dirigida en 2 tendencias máx' },
              { week: 'Semana 3', action: 'Pruebas de precios y presentación' },
              { week: 'Semana 4', action: 'Escala los éxitos, pivota los fracasos' },
            ].map((step, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4">
                <div className="bg-vinted text-white font-display font-bold px-3 py-1 mb-3 text-center border-2 border-black">
                  {step.week}
                </div>
                <p className="text-sm text-center">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prédictions */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Predicciones Exclusivas</h2>
          <p className="text-white text-lg mb-4">Lo Que Va a Explotar a Finales de 2025:</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Nostalgia vintage 2010s', desc: '¡Prepárate ahora!' },
              { title: 'Moda diseñada por IA', desc: 'Colaboración humano-máquina' },
              { title: 'Ropa adaptativa al clima', desc: 'Prendas que se adaptan' },
              { title: 'Crossover moda virtual', desc: 'Del digital al físico' },
            ].map((pred, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4">
                <p className="font-semibold">{pred.title}</p>
                <p className="text-sm text-gray-600">{pred.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion + CTA */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-4">Conclusión: Surfea la Ola</h2>
          <p className="text-lg mb-4">
            ¡Las tendencias 2025 son una oportunidad de oro! Pero cuidado: el secreto no es seguir todo,
            sino elegir lo que resuena con tu audiencia y tu experiencia.
          </p>
          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-white text-center">
              ¡Pasión + Timing + Calidad = Historia de éxito en Vinted!
            </p>
          </div>
          <a
            href="/es"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Optimiza Tus Fotos Con VintDress
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/es/articles/estrategia-venta-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Estrategia de Venta 2025 →</p>
            </a>
            <a
              href="/es/articles/5-trucos-para-vender-mas-rapido-en-vinted"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">5 Trucos Vender Más Rápido →</p>
            </a>
            <a
              href="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía Fotos 2025 →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
