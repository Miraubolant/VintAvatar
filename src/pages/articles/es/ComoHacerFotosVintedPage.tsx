import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Camera, CheckCircle, XCircle, Star, ArrowRight, Lightbulb, Smartphone, Sun, Image } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

const ComoHacerFotosVintedPage: React.FC = () => {
  useSEO({
    title: "Cómo Hacer Buenas Fotos Vinted en 2026 | VintDress",
    description: "Guía completa para tomar fotos increíbles para Vinted. Técnicas, equipo y consejos para fotos que venden. Fotos con maniquí IA.",
    keywords: "fotos vinted, presentación vinted, maniquí IA, cómo hacer fotos vinted, foto puesta vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=400&fit=crop"
          alt="Cómo hacer buenas fotos para Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        <ArticleNavigation />

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-vinted text-white border-3 border-black px-3 py-1 font-display font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            CONSEJOS
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Cómo Hacer Buenas Fotos Vinted en 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipo VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 de enero de 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["fotos vinted", "presentación vinted", "maniquí IA", "foto puesta", "ventas Vinted"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint border-2 border-black font-display font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Intro */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="font-body text-lg text-black leading-relaxed">
            En Vinted, <strong className="text-vinted">el 90% de las decisiones de compra son visuales</strong>. Tus fotos son tu primer y a menudo único argumento de venta. Un anuncio con buenas fotos atrae hasta 5 veces más visitas que uno con fotos mediocres. En esta guía completa, descubrirás todas las técnicas para tomar fotos que realmente convierten.
          </p>
        </div>

        {/* Section 1 - Los 3 métodos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Los 3 Métodos de Presentación
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Existen tres formas principales de fotografiar tu ropa en Vinted. Cada una tiene sus ventajas e inconvenientes. Aquí tienes una comparativa detallada para ayudarte a elegir.
          </p>

          <div className="space-y-6">
            {/* Foto plana */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Foto Plana (Flat Lay)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Ventajas:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Fácil y rápida de hacer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No necesita equipo especial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Muestra bien detalles y estampados</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Desventajas:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Difícil visualizar cómo queda puesto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Menos atractiva visualmente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Menor tasa de conversión</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Ideal para: accesorios, camisetas básicas, artículos donde el estampado es importante.
              </p>
            </div>

            {/* Foto en percha */}
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-vinted" />
                Foto en Percha
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Ventajas:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Muestra la forma de la prenda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Relativamente fácil de montar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Más profesional que el flat lay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Desventajas:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>No muestra cómo queda puesto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>La percha puede deformar algunas prendas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Requiere un fondo liso detrás</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm italic">
                Ideal para: camisas, chaquetas, vestidos ligeros.
              </p>
            </div>

            {/* Foto puesta */}
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Foto Puesta (El Gold Standard)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-green-700 mb-2">Ventajas:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>+300% de visitas</strong> de media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>El comprador visualiza el resultado real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Mayor tasa de conversión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aspecto profesional y atractivo</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-display font-bold text-red-700 mb-2">Desventajas:</p>
                  <ul className="space-y-1 font-body text-black text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Necesita un maniquí o ponértelo tú</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Consume más tiempo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>No siempre tienes la talla correcta</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-body text-black text-sm">
                <strong>Solución:</strong> Con VintDress, genera fotos puestas en maniquí IA en 30 segundos, ¡sin importar la talla!
              </p>
            </div>
          </div>

          {/* Tabla comparativa */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-vinted text-white">
                  <th className="p-3 border-2 border-black font-display font-bold text-left">Criterio</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Flat Lay</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">En Percha</th>
                  <th className="p-3 border-2 border-black font-display font-bold text-center">Puesta</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Facilidad</td>
                  <td className="p-3 border-2 border-black text-center text-green-600">Fácil</td>
                  <td className="p-3 border-2 border-black text-center text-yellow-600">Media</td>
                  <td className="p-3 border-2 border-black text-center text-red-600">Difícil</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Visitas</td>
                  <td className="p-3 border-2 border-black text-center">Base</td>
                  <td className="p-3 border-2 border-black text-center">+50%</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">+300%</td>
                </tr>
                <tr>
                  <td className="p-3 border-2 border-black font-bold">Conversión</td>
                  <td className="p-3 border-2 border-black text-center">Baja</td>
                  <td className="p-3 border-2 border-black text-center">Media</td>
                  <td className="p-3 border-2 border-black text-center text-vinted font-bold">Alta</td>
                </tr>
                <tr className="bg-cream">
                  <td className="p-3 border-2 border-black font-bold">Tiempo</td>
                  <td className="p-3 border-2 border-black text-center">2 min</td>
                  <td className="p-3 border-2 border-black text-center">5 min</td>
                  <td className="p-3 border-2 border-black text-center">15 min+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 - Equipo */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Equipo Mínimo Necesario
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Buenas noticias: no necesitas equipo profesional para tomar buenas fotos de Vinted. Aquí tienes lo esencial.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Smartphone */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-vinted border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Smartphone
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Tu smartphone es más que suficiente. No necesitas cámara.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Limpia el objetivo antes de cada sesión</li>
                <li>- Desactiva el flash</li>
                <li>- Activa el modo HDR si está disponible</li>
                <li>- Usa el temporizador para evitar el desenfoque</li>
              </ul>
            </div>

            {/* Iluminación */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-mint border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Sun className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Iluminación
              </h3>
              <p className="font-body text-black text-sm mb-3">
                La luz natural es tu mejor amiga, ¡y es gratis!
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Prefiere la luz del día</li>
                <li>- Evita el sol directo (sombras duras)</li>
                <li>- Colócate cerca de una ventana</li>
                <li>- Ring light opcional para invierno</li>
              </ul>
            </div>

            {/* Fondo */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-pink-pastel border-3 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Fondo Neutro
              </h3>
              <p className="font-body text-black text-sm mb-3">
                Un fondo simple destaca tu ropa.
              </p>
              <ul className="space-y-1 font-body text-black text-sm">
                <li>- Pared blanca o beige claro</li>
                <li>- Sábana lisa estirada</li>
                <li>- Cartón blanco (flat lay)</li>
                <li>- Evita fondos desordenados</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Técnica paso a paso */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Técnica Fotográfica Paso a Paso
          </h2>

          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prepara tu Prenda
                </h3>
                <p className="font-body text-black">
                  <strong>Plancha o vaporiza</strong> tu artículo. Usa un rodillo quitapelusas para eliminar pelusa y pelos. Una prenda arrugada da impresión de descuido y espanta a los compradores.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Prepara tu Espacio
                </h3>
                <p className="font-body text-black">
                  Colócate cerca de una ventana con luz natural. Pon tu fondo liso. Asegúrate de que no haya objetos distractores en el encuadre.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Toma los Ángulos Esenciales
                </h3>
                <ul className="font-body text-black space-y-1">
                  <li><strong>Vista frontal</strong>: vista principal del artículo</li>
                  <li><strong>Vista trasera</strong>: muestra la espalda completa</li>
                  <li><strong>Detalles</strong>: etiqueta, botones, costuras, texturas</li>
                  <li><strong>Defectos</strong>: sé honesto con las imperfecciones</li>
                </ul>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Encuadre y Nitidez
                </h3>
                <p className="font-body text-black">
                  Deja espacio alrededor de la prenda. Centra tu artículo. Toca la pantalla para enfocar la ropa. Mantén el teléfono estable o usa un trípode.
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Edición Ligera (Opcional)
                </h3>
                <p className="font-body text-black">
                  Ajusta ligeramente el brillo y el contraste si es necesario. Evita los filtros excesivos que alteran los colores reales de la prenda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Fotos puestas game changer */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Fotos Puestas: El Game Changer
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-vinted flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">
                  Por Qué las Fotos Puestas Convierten Mejor
                </h3>
                <ul className="font-body text-black space-y-2">
                  <li>
                    <strong>Proyección mental:</strong> El comprador se imagina llevando la prenda
                  </li>
                  <li>
                    <strong>Resultado realista:</strong> Se ve cómo cae realmente la prenda
                  </li>
                  <li>
                    <strong>Mayor confianza:</strong> Menos riesgo de decepción al recibir
                  </li>
                  <li>
                    <strong>+300% visitas:</strong> El algoritmo de Vinted favorece estas fotos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              El Problema: No Siempre Tienes Tiempo o Maniquí
            </h3>
            <ul className="font-body text-black space-y-2 mb-4">
              <li>- No tienes la talla correcta para todos tus artículos</li>
              <li>- No quieres salir en cada foto</li>
              <li>- Un maniquí físico es caro y ocupa espacio</li>
              <li>- Fotografiar cada artículo puesto lleva demasiado tiempo</li>
            </ul>
          </div>

          {/* CTA VintDress */}
          <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <Camera className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              La Solución: VintDress
            </h3>
            <p className="font-body text-white mb-6 max-w-xl mx-auto">
              Genera fotos puestas en maniquí IA en 30 segundos. Personaliza género, tipo de cuerpo, pose y fondo. Calidad profesional garantizada.
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROBAR AHORA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 5 - Errores a evitar */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Errores a Evitar
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Mala Iluminación
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Fotos oscuras, amarillentas o con sombras duras. Siempre prefiere la luz natural indirecta.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Fondo Desordenado
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Una cama deshecha, objetos por ahí... Distrae y parece amateur. Usa siempre un fondo limpio y liso.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Fotos Borrosas
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Nada peor que una foto donde no se ven los detalles. Estabiliza tu teléfono y toca para enfocar manualmente.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Pocas Fotos
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Una sola foto no es suficiente. Muestra el artículo desde todos los ángulos: frente, espalda, detalles, etiqueta.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Filtros Excesivos
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Los filtros que cambian los colores crean expectativas irreales y llevan a disputas. Mantente natural.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-display font-bold text-xl text-black">
                  Ocultar Defectos
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Nunca ocultes una mancha o un enganchón. Fotografía los defectos claramente para evitar devoluciones y malas reseñas.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Debo ponerme la ropa yo mismo en las fotos?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Es lo ideal, pero no siempre es práctico. Si no tienes la talla correcta o prefieres mantenerte anónimo, usa VintDress para crear fotos puestas en maniquí IA.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cuántas fotos debo incluir por anuncio?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Mínimo 4 fotos: vista frontal, vista trasera, al menos un detalle y la etiqueta. Lo ideal es usar las 20 fotos permitidas por Vinted para mostrar el artículo desde todos los ángulos.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Flat lay o foto puesta?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Las fotos puestas obtienen +300% más visitas de media. Combina ambas: una foto puesta como imagen principal, luego fotos planas para los detalles.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cuál es el mejor momento para hacer fotos?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Durante el día, con luz natural. Evita las horas de sol directo (sombras duras) y prefiere un tiempo ligeramente nublado para una luz suave y difusa.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cómo muestro los defectos de un artículo?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Haz una foto de primer plano del defecto con buena iluminación. Sé honesto en tu descripción. Los compradores aprecian la transparencia y evita disputas.
              </div>
            </details>
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-black mb-4">
            ¿Listo para Mejorar tus Fotos de Vinted?
          </h3>
          <p className="font-body text-black mb-6">
            ¡Aplica estos consejos hoy y transforma tus anuncios con VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vinted text-white border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREAR MIS FOTOS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Artículos Relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "fotos-puestas-vinted", title: "Fotos Puestas en Vinted" },
              { slug: "algoritmo-vinted-visibilidad-2025", title: "Algoritmo Vinted" },
              { slug: "guia-completa-fotos-vinted-2025", title: "Guía Completa Fotos 2025" }
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/es/articles/${article.slug}`}
                className="block bg-pink-pastel border-3 border-black p-4 font-display font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mb-2 text-vinted" />
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default ComoHacerFotosVintedPage;
