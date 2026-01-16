import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Clock, TrendingUp, Star, AlertTriangle, Lightbulb, Calendar, MessageCircle } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const AlgoritmoVintedVisibilidadPage: React.FC = () => {
  useSEO({
    title: "Algoritmo Vinted: Cómo Maximizar tu Visibilidad en 2025 | VintDress",
    description: "Comprende el algoritmo Vinted y maximiza tu visibilidad. Descubre las estrategias 2025 para aparecer primero en las búsquedas y vender más rápido.",
    keywords: "algoritmo vinted, visibilidad vinted, vinted algoritmo, aparecer primero vinted, impulsar anuncio vinted, ranking vinted, seo vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop"
          alt="Algoritmo Vinted Visibilidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              ALGORITMO VINTED
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Maximiza tu Visibilidad en 2025
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
            <span className="font-body text-sm text-gray-600">18 de diciembre de 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">8 min de lectura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Algoritmo Vinted: Cómo Maximizar tu Visibilidad en 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            Comprende el funcionamiento del algoritmo Vinted y descubre las estrategias para aparecer en las primeras posiciones de las búsquedas y vender más rápido.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Algoritmo", "Vinted", "Visibilidad", "SEO Vinted", "Estrategia"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border-2 border-black text-black font-body text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Introduction Card */}
        <div className="bg-vinted border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-display font-bold text-white text-lg">
            El algoritmo Vinted determina qué anuncios aparecen primero en las búsquedas. Comprender su funcionamiento es la clave para vender más rápido.
          </p>
        </div>

        {/* Los 5 Factores Clave */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Los 5 Factores Clave del Ranking
          </h2>

          <div className="space-y-4">
            {/* Factor 1 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Calidad de las Fotos
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    Es el factor N°1. El algoritmo favorece los anuncios con:
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Fotos nítidas y bien iluminadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Varios ángulos de la prenda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">Imágenes en alta resolución</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700"><strong>Fotos puestas (el criterio más impactante)</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    El Engagement del Anuncio
                  </h3>
                  <p className="font-body text-sm text-gray-700 mb-3">
                    Cuantas más interacciones genera tu anuncio, más sube:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Número de visitas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Añadido a favoritos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Mensajes recibidos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-vinted" />
                      <span className="font-body text-sm text-gray-700">Compartidos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Frescura del Anuncio
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    Los anuncios nuevos y los recientemente actualizados reciben un impulso temporal.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 4 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Reputación del Vendedor
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Número de valoraciones positivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Tasa de respuesta a los mensajes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Historial de ventas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vinted mt-1">•</span>
                      <span className="font-body text-sm text-gray-700">Antigüedad de la cuenta</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Factor 5 */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-white text-2xl">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-black mb-2">
                    La Relevancia de las Palabras Clave
                  </h3>
                  <p className="font-body text-sm text-gray-700">
                    El título y la descripción deben coincidir con lo que buscan los compradores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrategia 1: Fotos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Estrategia 1: Optimizar tus Fotos para el Algoritmo
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Lo que le gusta al algoritmo */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Lo Que Le Gusta al Algoritmo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Fotos puestas en maniquí o persona</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Fondo neutro y limpio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Buena iluminación</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Varias fotos (4-5 mínimo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Alta resolución</span>
                </li>
              </ul>
            </div>

            {/* Lo que penaliza el algoritmo */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Lo Que Penaliza el Algoritmo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Fotos borrosas u oscuras</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Una sola foto</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Fotos con marcas de agua o texto</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">Imágenes muy comprimidas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solución VintDress */}
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              La Solución: Los Maniquíes IA
            </h3>
            <p className="font-body text-white mb-4">
              Las fotos puestas son la señal más fuerte para el algoritmo. Problema: no todo el mundo tiene a alguien para posar.
            </p>
            <p className="font-body text-white mb-4">
              Ahí es donde entra VintDress. Nuestra IA genera fotos de maniquíes ultra realistas que:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Muestran la prenda puesta (señal fuerte)</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Son en alta resolución</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Presentan poses profesionales</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Aumentan drásticamente el engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Estrategia 2: Timing */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Estrategia 2: Dominar el Momento de Publicación
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-body text-gray-700 mb-4">
              El algoritmo impulsa los nuevos anuncios durante 24-48 horas. ¡Aprovéchalo!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Días óptimos */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-vinted" />
                  Días Óptimos
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Domingo</strong>: preparación de la semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Miércoles</strong>: mitad de semana, ganas de comprar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>Viernes</strong>: inicio del fin de semana</span>
                  </li>
                </ul>
              </div>

              {/* Horas óptimas */}
              <div>
                <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-vinted" />
                  Horas Óptimas
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>12h-14h</strong>: pausa del almuerzo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>18h-21h</strong>: salida del trabajo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-display font-bold text-vinted">•</span>
                    <span className="font-body text-sm text-gray-700"><strong>21h-23h</strong>: navegación relajada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Técnica del Bump */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Técnica del Bump
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Refresca tus anuncios regularmente:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Modifica ligeramente el precio</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Añade o cambia una foto</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Actualiza la descripción</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-3 mt-4">
              <p className="font-display font-bold text-black text-sm">
                El algoritmo lo considera un anuncio "nuevo".
              </p>
            </div>
          </div>
        </section>

        {/* Estrategia 3: Títulos y Descripciones */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Estrategia 3: Optimizar Títulos y Descripciones
          </h2>

          <div className="bg-white border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              La Estructura del Título Perfecto
            </h3>
            <div className="bg-cream border-2 border-black p-4 mb-4">
              <code className="font-body text-sm text-black">
                [MARCA] [Tipo de prenda] [Talla] - [Estado] [Color]
              </code>
            </div>
            <h4 className="font-display font-bold text-sm text-black mb-2">Ejemplos:</h4>
            <ul className="space-y-2">
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"ZARA Vestido midi M - Nuevo con etiqueta Negro"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"NIKE Air Force 1 42 - Muy buen estado Blanco"</span>
              </li>
              <li className="bg-mint border-2 border-black p-3">
                <span className="font-body text-sm text-gray-700">"H&M Jersey oversize L - Como nuevo Beige"</span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-3">
              Palabras Clave Estratégicas
            </h3>
            <p className="font-body text-gray-700 mb-3">
              Incluye en tu descripción:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La marca (varias veces naturalmente)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">El tipo de prenda exacto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La temporada (verano, invierno...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">La ocasión (fiesta, casual, oficina...)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vinted" />
                <span className="font-body text-sm text-gray-700">Los materiales (algodón, lino, lana...)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tabla Comparativa Impacto VintDress */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            El Impacto de las Fotos IA en el Algoritmo
          </h2>

          <div className="overflow-x-auto mb-6">
            <div className="bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-black">
                    <th className="p-4 text-left font-display font-bold text-black border-r-3 border-black bg-cream">Métrica</th>
                    <th className="p-4 text-center font-display font-bold text-black border-r-3 border-black">Sin VintDress</th>
                    <th className="p-4 text-center font-display font-bold text-black bg-mint">Con VintDress</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Visitas por anuncio</td>
                    <td className="p-4 text-center border-r-3 border-black">50-100</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">200-400</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Añadido a favoritos</td>
                    <td className="p-4 text-center border-r-3 border-black">2-5</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">10-20</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Tiempo de venta</td>
                    <td className="p-4 text-center border-r-3 border-black">2-4 semanas</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">3-7 días</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r-3 border-black bg-cream">Posición media</td>
                    <td className="p-4 text-center border-r-3 border-black">Página 2-3</td>
                    <td className="p-4 text-center bg-mint font-semibold text-vinted">Página 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-vinted border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-3">
              ¿Por Qué?
            </h3>
            <p className="font-body text-white mb-3">
              Porque las fotos puestas profesionales:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Atraen más clics (señal positiva)</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Generan más favoritos (señal positiva)</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white">Provocan más mensajes (señal positiva)</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black p-4 mt-4">
              <p className="font-display font-bold text-black">
                El algoritmo interpreta todas estas señales como "este anuncio interesa a los compradores" y lo sube.
              </p>
            </div>
          </div>
        </section>

        {/* Errores a Evitar */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            5 Errores a Evitar con el Algoritmo
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">1. Spamear Anuncios</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Publicar demasiados anuncios de golpe puede ser considerado spam.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">2. Copiar-Pegar Descripciones</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Cada anuncio debe tener una descripción única.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">3. Precios Irrealistas</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Los precios demasiado bajos o demasiado altos son penalizados.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">4. Ignorar los Mensajes</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Una tasa de respuesta baja impacta tu ranking.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">5. Fotos de Mala Calidad</h3>
              </div>
              <p className="font-body text-sm text-gray-700">
                Es EL factor más negativo para tu posicionamiento.
              </p>
            </div>
          </div>
        </section>

        {/* Plan de Acción */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Plan de Acción Inmediato
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Esta Semana */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Esta Semana
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Audita tus fotos</strong>: reemplaza las fotos borrosas o mal iluminadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Crea fotos puestas</strong> con VintDress para tus mejores artículos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Optimiza 5 títulos</strong> con la estructura marca + tipo + talla + estado</span>
                </li>
              </ul>
            </div>

            {/* Este Mes */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Este Mes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">1</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Establece un calendario</strong> de publicación (3-4 anuncios/semana en los mejores momentos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">2</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Responde a todos los mensajes</strong> en menos de una hora</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white text-xs">3</span>
                  </div>
                  <span className="font-body text-sm text-gray-700"><strong>Actualiza tus anuncios antiguos</strong> para hacer "bump"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              Conclusión
            </h2>
            <p className="font-body text-white mb-4">
              El algoritmo Vinted no es un misterio. Recompensa:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">Las fotos de calidad (especialmente puestas)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">El engagement generado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">La frescura de los anuncios</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-body text-white">La reputación del vendedor</span>
              </li>
            </ul>
            <div className="bg-white border-3 border-black p-4">
              <p className="font-display font-bold text-black text-center">
                Combinando estas estrategias con fotos profesionales VintDress, maximizas tus posibilidades de aparecer en las primeras posiciones de las búsquedas y vender rápidamente.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cómo funciona el algoritmo Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  El algoritmo Vinted clasifica los anuncios según la calidad de las fotos, el engagement generado, la frescura del anuncio, la reputación del vendedor y la relevancia de las palabras clave.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuál es el factor más importante para el algoritmo Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  La calidad de las fotos es el factor N°1. Las fotos puestas profesionales generan significativamente más visitas y engagement, señales positivas para el algoritmo.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cómo subir en las búsquedas de Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Publica en los mejores momentos (domingo noche, miércoles noche), usa fotos puestas de calidad, responde rápido a los mensajes y actualiza regularmente tus anuncios.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Las fotos IA ayudan realmente con el algoritmo?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sí, las fotos puestas profesionales generadas por IA como VintDress aumentan de 3 a 4 veces las visitas y el engagement, lo que mejora directamente el ranking algorítmico.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo/a para Dominar el Algoritmo Vinted?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Empieza por tus fotos con VintDress y maximiza tu visibilidad desde hoy.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              OPTIMIZAR MIS FOTOS
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
              to="/es/articles/5-trucos-vender-mas-rapido-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">5 Trucos para Vender Más Rápido</h3>
              <p className="font-body text-sm text-gray-600">Optimiza tus ventas con estrategias probadas.</p>
            </Link>
            <Link
              to="/es/articles/maniqui-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Maniquí IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Descubre cómo un maniquí IA puede transformar tus fotos.</p>
            </Link>
            <Link
              to="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Guía Completa Fotos Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">Todas las técnicas para fotos que venden.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AlgoritmoVintedVisibilidadPage;
