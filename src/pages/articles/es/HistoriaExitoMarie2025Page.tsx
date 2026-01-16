import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { TrendingUp, Calendar, DollarSign, Star, Target, Smartphone, Package, CheckCircle2, XCircle, Lightbulb, Award } from 'lucide-react';

export default function HistoriaExitoMarie2025Page() {
  useSEO({
    title: "Historia de Éxito: Marie Gana 3000€/Mes Con Vinted | Testimonio Completo",
    description: "Marie gana 3000€/mes con Vinted gracias a las fotos IA. Descubre su método completo y sus secretos de éxito.",
    keywords: "historia de éxito vinted, ganar dinero vinted, negocio vinted, fotos IA vinted, marie vinted avatar, testimonio vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
          alt="Historia de Éxito Marie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ArticleNavigation />

        {/* Article Header */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <span className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Historia de Éxito
            </span>
            <span className="font-space-grotesk">18 de noviembre de 2025</span>
            <span className="font-space-grotesk">12 min de lectura</span>
            <span className="font-space-grotesk font-semibold">Por Equipo VintDress</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            Historia de Éxito: Marie Gana 3000€/Mes Con Vinted
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Conoce a Marie, 28 años, que ha revolucionado su vida gracias a Vinted. De simple vendedora ocasional a emprendedora de moda generando 3000€ al mes, descubre su inspirador recorrido.
          </p>

          {/* Stats Hero */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-vinted text-white border-3 border-black p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3000€</div>
              <div className="text-sm">por mes</div>
            </div>
            <div className="bg-mint border-3 border-black p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">120</div>
              <div className="text-sm">artículos/mes</div>
            </div>
            <div className="bg-pink-pastel border-3 border-black p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">5/5</div>
              <div className="text-sm">nota vendedor</div>
            </div>
            <div className="bg-yellow-200 border-3 border-black p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-space-grotesk font-bold mb-1">3400</div>
              <div className="text-sm">seguidores</div>
            </div>
          </div>

          {/* El Déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              El Clic: Enero 2024
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Antes: La Lucha
                </h3>
                <ul className="space-y-2">
                  <li>• Empleada a medio tiempo en una tienda</li>
                  <li>• Salario: 1200€/mes</li>
                  <li>• Pasión por la moda frustrada</li>
                  <li>• Ventas Vinted esporádicas (50€/mes máx)</li>
                </ul>
                <p className="mt-4 font-semibold text-red-700">
                  El problema: Fotos amateur, artículos que se quedan meses
                </p>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  El Momento Revelador
                </h3>
                <p className="italic mb-4">
                  "Descubrí VintDress navegando en Instagram. Al principio, era escéptica: ¿fotos IA para mi ropa? Pero había intentado todo..."
                </p>
                <div className="bg-white border-2 border-green-500 p-4">
                  <p className="font-semibold mb-2">Primera prueba: Vestido Zara</p>
                  <p className="text-sm">• Antes IA: 12 vistas en 6 meses, 0 ventas</p>
                  <p className="text-sm">• Después IA: Vendido en 48h a precio completo</p>
                </div>
                <p className="mt-4 italic font-semibold text-green-700">
                  "Ahí comprendí que había encontrado la solución"
                </p>
              </div>
            </div>
          </div>

          {/* La Transformation */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              La Transformación: Febrero-Junio 2024
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mes 1-2: El Aprendizaje
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Estrategia:</p>
                    <ul className="space-y-1 text-sm">
                      <li>1. Prueba con 20 artículos de su armario</li>
                      <li>2. Fotos IA para todos los artículos dormidos</li>
                      <li>3. Reactivación de 50 anuncios antiguos</li>
                    </ul>
                  </div>
                  <div className="bg-mint border-2 border-black p-4">
                    <p className="font-semibold mb-2">Resultados:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Febrero: 340€ de ventas</li>
                      <li>• Marzo: 580€ de ventas</li>
                      <li>• Tasa de venta: x5</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mes 3-4: La Aceleración
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Acciones:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Búsqueda activa en tiendas de segunda mano</li>
                      <li>• 2-3h al día dedicadas a Vinted</li>
                      <li>• Especialización en vintage francés</li>
                    </ul>
                  </div>
                  <div className="bg-pink-pastel border-2 border-black p-4">
                    <p className="font-semibold mb-2">Cifras impresionantes:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Abril: 920€ de ventas</li>
                      <li>• Mayo: 1250€ de ventas</li>
                      <li>• Stock: 150 artículos en rotación</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 italic text-gray-700">
                  "Las fotos IA me dieron la confianza para tomarme en serio. Mis artículos finalmente se veían profesionales"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Mes 5-6: La Profesionalización
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">El punto de inflexión profesional:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Creación de un espacio dedicado en su casa</li>
                      <li>• Sistema de gestión de inventario</li>
                      <li>• Relación con clientes excelente</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-200 border-2 border-black p-4">
                    <p className="font-semibold mb-2">Rendimiento:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Junio: 1680€ de ventas</li>
                      <li>• 95% de satisfacción del cliente</li>
                      <li>• Tasa de devolución: 0,2%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* L'Empire Marie : Aujourd'hui */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              El Imperio Marie: Hoy
            </h2>

            <div className="bg-vinted border-4 border-black p-8 mb-6">
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Las Cifras de Enero 2025
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Rendimiento mensual:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Facturación:</span>
                      <span className="font-bold">4200€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Beneficios netos:</span>
                      <span className="font-bold text-green-600">3000€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Artículos vendidos:</span>
                      <span className="font-bold">120/mes</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ticket promedio:</span>
                      <span className="font-bold">35€</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <p className="font-semibold mb-3">Estadísticas impresionantes:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tiempo promedio de venta:</span>
                      <span className="font-bold">8 días</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tasa de conversión:</span>
                      <span className="font-bold">24%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Nota vendedor:</span>
                      <span className="font-bold">5/5 ⭐</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Seguidores Vinted:</span>
                      <span className="font-bold">3400</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Méthode MARIE */}
            <div className="bg-mint border-4 border-black p-8">
              <h3 className="text-2xl font-space-grotesk font-bold mb-6">
                Su Secreto: El Método M.A.R.I.E
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    M
                  </div>
                  <div>
                    <p className="font-bold">Marcas específicas</p>
                    <p className="text-sm text-gray-700">Especializarse para convertirse en experta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    A
                  </div>
                  <div>
                    <p className="font-bold">IA para todas las fotos</p>
                    <p className="text-sm text-gray-700">Consistencia y profesionalismo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-bold">Relación cliente premium</p>
                    <p className="text-sm text-gray-700">Diferenciación por el servicio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    I
                  </div>
                  <div>
                    <p className="font-bold">Inventario optimizado</p>
                    <p className="text-sm text-gray-700">Rotación rápida del stock</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl">
                    E
                  </div>
                  <div>
                    <p className="font-bold">Evolución constante</p>
                    <p className="text-sm text-gray-700">Test y aprendizaje permanente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Exclusive */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Entrevista Exclusiva con Marie
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  P: ¿Cuál fue tu mayor desafío?
                </p>
                <p className="italic text-gray-700">
                  "Al principio, me daba vergüenza usar IA. Me decía que era 'hacer trampa'. Luego me di cuenta de que solo era una herramienta, como una buena iluminación o un bonito fondo. Lo que cuenta es la calidad de la prenda y el servicio al cliente"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  P: ¿Cuánto tiempo le dedicas?
                </p>
                <p className="italic text-gray-700">
                  "4-5h al día ahora, pero se ha convertido en mi pasión. Por la mañana gestiono pedidos y mensajes, por la tarde fotografío y publico anuncios. Está muy estructurado."
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3">
                  P: ¿Tus consejos de búsqueda?
                </p>
                <p className="italic text-gray-700">
                  "Me especialicé en vintage francés de los años 80-90. Conozco mis marcas de memoria: Kenzo, Thierry Mugler, Claude Montana... Recorro las tiendas de segunda mano cada semana con una lista precisa."
                </p>
              </div>

              <div className="bg-vinted border-3 border-black p-6">
                <p className="font-space-grotesk font-bold text-lg mb-3 text-white">
                  P: ¿El impacto de la IA en tus ventas?
                </p>
                <p className="italic text-white font-semibold">
                  "Revolucionario. Mis artículos con fotos IA se venden 300% más rápido y 40% más caro. Los compradores ven inmediatamente cómo queda la prenda, están tranquilos."
                </p>
              </div>
            </div>
          </div>

          {/* Sa Routine Gagnante */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Su Rutina Ganadora
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Lunes: DÍA DE BÚSQUEDA
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>8h-12h</strong>: Recorrido por tiendas de segunda mano</li>
                  <li>• <strong>14h-16h</strong>: Clasificación y limpieza de piezas</li>
                  <li>• <strong>16h-18h</strong>: Investigación de precios y competencia</li>
                </ul>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Martes-Miércoles: PRODUCCIÓN
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>9h-12h</strong>: Fotos IA y publicación</li>
                  <li>• <strong>14h-17h</strong>: Gestión de pedidos y atención cliente</li>
                  <li>• <strong>17h-18h</strong>: Community management</li>
                </ul>
              </div>

              <div className="bg-yellow-200 border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Jueves: ESTRATEGIA
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Análisis de rendimiento</li>
                  <li>• Planificación semana siguiente</li>
                  <li>• Búsqueda de nuevas oportunidades</li>
                </ul>
              </div>

              <div className="bg-vinted text-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Viernes: ENVÍOS
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Preparación de todos los paquetes</li>
                  <li>• Visita a Correos</li>
                  <li>• Seguimiento satisfacción cliente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ses Outils Indispensables */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8" />
              Sus Herramientas Indispensables
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Configuración Técnica
                </h3>
                <ul className="space-y-2">
                  <li>• Smartphone iPhone 13 Pro</li>
                  <li>• VintDress para las fotos IA</li>
                  <li>• Excel para la gestión del inventario</li>
                  <li>• Etiquetas personalizadas premium</li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Organización
                </h3>
                <ul className="space-y-2">
                  <li>• Percheros por categoría/temporada</li>
                  <li>• Sistema de etiquetas de colores</li>
                  <li>• Espacio de embalaje optimizado</li>
                  <li>• Stock de packaging de calidad</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Les Erreurs Évitées */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Los Errores que Evitó
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-3 border-red-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Errores Clásicos de Principiantes
                </h3>
                <ul className="space-y-2">
                  <li>• Vender demasiado barato por falta de confianza</li>
                  <li>• Fotos borrosas o mal encuadradas</li>
                  <li>• Descripciones descuidadas</li>
                  <li>• Sin seguimiento al cliente</li>
                </ul>
              </div>

              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Lo Que Marca la Diferencia
                </h3>
                <ul className="space-y-2">
                  <li>• <strong>Precio</strong> justo y asumido</li>
                  <li>• <strong>Fotos</strong> profesionales sistemáticas</li>
                  <li>• <strong>Descripciones</strong> detalladas y honestas</li>
                  <li>• <strong>Servicio</strong> al cliente impecable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ses Astuces Secrètes */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8" />
              Sus Trucos Secretos
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Técnica #1: La Estrategia de Packs
                </h3>
                <p className="italic text-gray-700">
                  "A menudo propongo packs a mis clientes habituales. Un top + una falda con 15% de descuento. Aumenta el ticket promedio y fideliza"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Técnica #2: La Estacionalidad
                </h3>
                <p className="italic text-gray-700">
                  "Siempre preparo la temporada siguiente. En enero, ya compro primavera-verano. Cuando todos buscan, yo ya estoy lista"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Técnica #3: La Exclusividad
                </h3>
                <p className="italic text-gray-700">
                  "Mis mejores piezas, las propongo primero a mi comunidad VIP por mensaje privado. Se sienten privilegiadas y compran más"
                </p>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Técnica #4: La Reactividad
                </h3>
                <p className="italic text-gray-700">
                  "Respondo a los mensajes en una hora. En Vinted, la rapidez marca la diferencia. Un cliente que espera es un cliente que se va a otra parte."
                </p>
              </div>
            </div>
          </div>

          {/* L'Impact sur Sa Vie */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              El Impacto en Su Vida
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 border-3 border-green-500 p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Libertad Financiera
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Por primera vez, ya no tengo estrés por dinero. Gano más que en la tienda, con libertad además"
                </p>
              </div>

              <div className="bg-pink-pastel border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Realización Personal
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Cada venta es una pequeña victoria. He desarrollado un ojo para la moda, entiendo las tendencias, es apasionante"
                </p>
              </div>

              <div className="bg-mint border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold mb-2">
                  Reconocimiento
                </h3>
                <p className="italic text-sm text-gray-700">
                  "Mi familia no lo entendía al principio. Ahora están orgullosos. Mi novio me dice que soy una verdadera emprendedora."
                </p>
              </div>
            </div>
          </div>

          {/* Ses Projets 2025 */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Sus Proyectos 2025
            </h2>

            <div className="bg-yellow-200 border-4 border-black p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">
                Objetivos Ambiciosos
              </h3>
              <ul className="space-y-2 mb-6">
                <li>• <strong>5000€/mes</strong> antes de fin de 2025</li>
                <li>• <strong>Diversificación</strong> en otras plataformas</li>
                <li>• <strong>Formación</strong> para ayudar a otras vendedoras</li>
                <li>• <strong>Quizás</strong> su propia tienda física</li>
              </ul>
              <p className="italic text-gray-700">
                "Estoy pensando en ofrecer mis servicios de búsqueda a otras vendedoras. ¿Y por qué no crear mi propia marca vintage renovada?"
              </p>
            </div>
          </div>

          {/* Ce Que Tu Peux Apprendre */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Lo Que Puedes Aprender de Marie
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Los Fundamentos
                </h3>
                <ol className="space-y-2">
                  <li>1. <strong>Calidad</strong> antes que cantidad</li>
                  <li>2. <strong>Consistencia</strong> en el esfuerzo</li>
                  <li>3. <strong>Especialización</strong> en lugar de dispersión</li>
                  <li>4. <strong>Servicio</strong> al cliente premium</li>
                </ol>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-lg mb-4">
                  Las Herramientas Indispensables
                </h3>
                <ul className="space-y-2">
                  <li>• Fotos IA para actitud profesional</li>
                  <li>• Organización rigurosa</li>
                  <li>• Relación con cliente cuidada</li>
                  <li>• Vigilancia competitiva</li>
                </ul>
              </div>
            </div>

            <div className="bg-vinted border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 text-white">
                La Mentalidad Ganadora
              </h3>
              <p className="italic text-white font-semibold">
                "Pensar en grande pero empezar pequeño. Cada venta cuenta, cada cliente es importante. Y sobre todo: atreverse a usar todas las herramientas disponibles"
              </p>
            </div>
          </div>

          {/* Ton Tour Maintenant */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              Ahora Es Tu Turno
            </h2>

            <h3 className="font-space-grotesk font-bold text-xl mb-4">
              Si Marie Tuvo Éxito, ¿Por Qué Tú No?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold mb-2">Los ingredientes del éxito:</p>
                <ul className="space-y-1">
                  <li>• Pasión por la moda ✓</li>
                  <li>• Voluntad de aprender ✓</li>
                  <li>• Herramientas profesionales ✓</li>
                  <li>• Perseverancia ✓</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">¿Por Dónde Empezar?</p>
                <ol className="space-y-1">
                  <li>1. <strong>Probar</strong> IA con 10 artículos</li>
                  <li>2. <strong>Analizar</strong> los resultados</li>
                  <li>3. <strong>Optimizar</strong> y repetir</li>
                  <li>4. <strong>Escalar</strong> progresivamente</li>
                </ol>
              </div>
            </div>

            <p className="italic text-lg mb-6">
              "Lo más difícil es empezar. Después, los resultados hablan por sí mismos" - Marie
            </p>

            <Link
              to="/es"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Lánzate Ahora
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-400 p-4 mb-8">
            <p className="text-xs text-gray-600 italic">
              Marie usa VintDress desde hace más de un año. Resultados no garantizados, variables según la inversión personal.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Historia de Éxito", "Testimonio", "Vinted", "Negocio", "2025", "Emprendedor"].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-200 px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-space-grotesk font-bold mb-6">
            Artículos Relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/es/articles/estrategia-venta-vinted-2025"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Estrategia de Venta Vinted 2025
              </h3>
              <p className="text-sm text-gray-600">
                Las mejores técnicas para maximizar tus ventas
              </p>
            </Link>
            <Link
              to="/es/articles/errores-ventas-vinted"
              className="border-3 border-black p-4 hover:bg-mint transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                10 Errores que Matan tus Ventas Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Evita estos errores para impulsar tus resultados
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
