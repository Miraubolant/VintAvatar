import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArrowLeft, AlertTriangle, Camera, Tag, FileText, MessageSquare, Images, Clock, Search, TrendingUp, User, CheckCircle2, XCircle } from 'lucide-react';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export default function ErroresVentasVintedPage() {
  useSEO({
    title: "10 Errores que Matan tus Ventas en Vinted (y Cómo Evitarlos) | Guía Completa",
    description: "Descubre los errores más comunes que hacen huir a los compradores y aprende a corregirlos para impulsar tus ventas.",
    keywords: "errores vinted, por qué no vende vinted, mejorar ventas vinted, consejos vinted, impulsar vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          alt="Errores de Vinted a evitar"
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
            <span className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold">
              Consejos
            </span>
            <span className="font-space-grotesk">25 de noviembre de 2025</span>
            <span className="font-space-grotesk">9 min de lectura</span>
            <span className="font-space-grotesk font-semibold">Por Thomas Bernard</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6 leading-tight">
            10 Errores que Matan tus Ventas en Vinted (y Cómo Evitarlos)
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            ¿Publicas artículos pero no se venden? No estás solo. Después de analizar miles de perfiles de Vinted, aquí están los 10 errores fatales y cómo corregirlos.
          </p>

          {/* Erreur #1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Camera className="w-8 h-8" />
                  Fotos de Mala Calidad
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p className="mb-4">
                Esta es LA primera causa de fracaso en Vinted. Una foto borrosa, oscura o mal encuadrada = artículo ignorado.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Estadísticas impactantes:</p>
                <ul className="space-y-1">
                  <li>• El 78% de los compradores juzgan por la primera foto</li>
                  <li>• Fotos borrosas: -85% de clics</li>
                  <li>• Mala iluminación: -70% de conversiones</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución
              </h3>
              <p className="font-semibold mb-2">El cambio de juego: nuestras fotos IA con modelo</p>
              <ul className="space-y-1 mb-3">
                <li>• Calidad profesional garantizada</li>
                <li>• Iluminación de estudio perfecta</li>
                <li>• Prenda valorizada en un maniquí</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Resultado: ¡+300% de visualizaciones en promedio!
              </p>
            </div>
          </div>

          {/* Erreur #2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Prenda en Percha Básica
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p className="mb-4">
                Una prenda en percha está... muerta. El comprador no puede imaginar cómo cae, cómo le quedaría.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Comparación:</p>
                <ul className="space-y-1">
                  <li>• Foto en percha: 2% de tasa de conversión</li>
                  <li>• Foto con modelo: 12% de tasa de conversión</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución
              </h3>
              <p>
                Usa nuestra IA para transformar cada foto en percha en una foto con modelo sublime. Los compradores visualizan instantáneamente la prenda en ellos.
              </p>
            </div>
          </div>

          {/* Erreur #3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Tag className="w-8 h-8" />
                  Precios Irreales
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p><strong>Demasiado caro:</strong> Nadie compra, ni siquiera con negociación</p>
              <p><strong>Demasiado barato:</strong> Parece "sospechoso" o "defecto oculto"</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución
              </h3>
              <p className="font-semibold mb-2">El método de los 5 vendidos:</p>
              <ol className="space-y-1 mb-3">
                <li>1. Busca 5 artículos similares VENDIDOS (no en venta)</li>
                <li>2. Calcula el promedio de precios</li>
                <li>3. Posiciónate en ese rango</li>
                <li>4. Ajusta según el estado y la marca</li>
              </ol>
              <p className="font-space-grotesk font-bold text-green-700">
                Truco psicológico: 19€ convierte mejor que 20€
              </p>
            </div>
          </div>

          {/* Erreur #4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  Descripciones Vacías o Copiadas
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p className="mb-4">
                "Bonita blusa, talla M, buen estado" = descripción inútil
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Lo que el comprador quiere saber:</p>
                <ul className="space-y-1">
                  <li>• Talla real y cómo queda</li>
                  <li>• Material y tacto</li>
                  <li>• Defectos eventuales</li>
                  <li>• Por qué lo vendes</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución: Plantilla de descripción completa
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm">
                <p>[Tipo] [Marca] - [Característica principal]</p>
                <p className="mt-2">Esta [prenda] es [descripción emocional].</p>
                <p>[Razón de venta]</p>
                <p className="mt-2">Detalles:</p>
                <p>- Marca: [X]</p>
                <p>- Talla: [X] (queda [normal/pequeño/grande])</p>
                <p>- Material: [X]</p>
                <p>- Estado: [X] sobre 10</p>
                <p>- Defectos: [ninguno / enumera honestamente]</p>
                <p className="mt-2">Medidas tomadas en plano:</p>
                <p>- Largo: X cm</p>
                <p>- Contorno de pecho: X cm</p>
                <p className="mt-2">¡Envío cuidadoso en 48h!</p>
              </div>
            </div>
          </div>

          {/* Erreur #5 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8" />
                  Ignorar los Mensajes
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p className="mb-4">
                ¿Respondes 3 días después? El comprador ya compró en otro sitio.
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">El tiempo cuenta:</p>
                <ul className="space-y-1">
                  <li>• Respuesta &lt; 1h: 80% de conversión</li>
                  <li>• Respuesta 1-24h: 40% de conversión</li>
                  <li>• Respuesta &gt; 24h: 10% de conversión</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución
              </h3>
              <ul className="space-y-2">
                <li>• Activa las notificaciones de Vinted</li>
                <li>• Responde aunque sea "¡Verifico y te respondo!"</li>
                <li>• Prepara respuestas tipo para preguntas frecuentes</li>
              </ul>
            </div>
          </div>

          {/* Erreur #6 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Images className="w-8 h-8" />
                  Fotos Únicas
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p>
                Una sola foto = información insuficiente = no hay compra
              </p>
              <p className="font-semibold mt-2">Mínimo recomendado: 4-5 fotos</p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución: La combinación ganadora
              </h3>
              <ol className="space-y-2">
                <li>1. <strong>Foto IA con modelo</strong>: Vista general atractiva</li>
                <li>2. <strong>Foto de detalle</strong>: Tejido, textura, calidad</li>
                <li>3. <strong>Foto de etiqueta</strong>: Marca, talla, composición</li>
                <li>4. <strong>Foto de defectos</strong>: Si aplica, transparencia</li>
                <li>5. <strong>Foto adicional</strong>: Otro ángulo o detalle</li>
              </ol>
            </div>
          </div>

          {/* Erreur #7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Clock className="w-8 h-8" />
                  Mal Momento de Publicación
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p>
                Publicar a las 3 de la mañana o durante las vacaciones = artículo ahogado
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución: Mejores momentos 2025
              </h3>
              <ul className="space-y-2 mb-4">
                <li>• <strong>Domingo 18h-22h</strong>: Preparación de la semana</li>
                <li>• <strong>Martes/Miércoles 12h-14h</strong>: Pausa del almuerzo para compras</li>
                <li>• <strong>Jueves 20h-22h</strong>: Se acerca el fin de semana</li>
              </ul>
              <p className="font-semibold text-red-700">A evitar:</p>
              <ul className="space-y-1">
                <li>• Viernes noche y sábado (salidas)</li>
                <li>• Vacaciones escolares</li>
                <li>• Días festivos</li>
              </ul>
            </div>
          </div>

          {/* Erreur #8 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <Search className="w-8 h-8" />
                  Ignorar el SEO de Vinted
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p>
                Título "Blusa negra" = imposible de encontrar en búsquedas
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución: Optimiza tu título
              </h3>
              <div className="bg-white border-2 border-green-500 p-4 font-mono text-sm mb-4">
                <p>[Marca] [Tipo] [Característica] [Talla] [Estado]</p>
                <p className="mt-2">Ejemplo: ZARA Blusa Encaje Negro M Nueva</p>
              </div>
              <p className="font-semibold mb-2">Palabras clave estratégicas:</p>
              <ul className="space-y-1">
                <li>• Incluye la marca completa</li>
                <li>• Usa sinónimos (blusa, top, camiseta)</li>
                <li>• Añade tendencias (cottagecore, Y2K, minimalista)</li>
              </ul>
            </div>
          </div>

          {/* Erreur #9 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                9
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  Sin Impulso Estratégico
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p>
                Tus artículos están enterrados bajo miles de otros
              </p>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución: Estrategia de impulso inteligente
              </h3>
              <ul className="space-y-2 mb-3">
                <li>• Impulsa tus mejores piezas el domingo por la noche</li>
                <li>• Vuelve a publicar artículos sin vistas después de 2 semanas</li>
                <li>• Usa los impulsos gratuitos diarios</li>
              </ul>
              <p className="font-space-grotesk font-bold text-green-700">
                Sinergia con fotos IA: ¡Impulsa EN PRIORIDAD los artículos con fotos IA con modelo - mejor ROI!
              </p>
            </div>
          </div>

          {/* Erreur #10 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-space-grotesk font-bold text-xl border-2 border-black">
                10
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-space-grotesk font-bold mb-2 flex items-center gap-3">
                  <User className="w-8 h-8" />
                  Perfil Descuidado
                </h2>
              </div>
            </div>

            <div className="bg-red-50 border-3 border-red-500 p-6 mb-4">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                El Problema
              </h3>
              <p className="mb-4">
                Perfil sin foto, sin descripción = cero confianza
              </p>
              <div className="bg-white border-2 border-red-500 p-4">
                <p className="font-space-grotesk font-bold mb-2">Impacto del perfil:</p>
                <ul className="space-y-1">
                  <li>• Perfil completo: +90% de confianza del comprador</li>
                  <li>• Evaluaciones visibles: +75% de conversión</li>
                  <li>• Descripción profesional: +50% de seguidores</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-3 border-green-500 p-6">
              <h3 className="font-space-grotesk font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                La Solución: Lista de verificación perfil perfecto
              </h3>
              <ul className="space-y-2">
                <li>• Foto de perfil clara y sonriente</li>
                <li>• Descripción de 2-3 líneas (estilo, especialidad, compromiso)</li>
                <li>• Respuesta a las evaluaciones recibidas</li>
                <li>• Regularidad en las publicaciones</li>
              </ul>
            </div>
          </div>

          {/* Plan d'Action 48h */}
          <div className="bg-vinted border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Plan de Acción: Corregir en 48h
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Día 1 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Rehaz tus 5 peores fotos con nuestra IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Corrige los precios irreales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Activa las notificaciones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-3 border-black p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-4">
                  Día 2 (2h)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Reescribe tus 5 peores descripciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Optimiza tu perfil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black mt-1 flex-shrink-0"></div>
                    <span>Planifica tus próximas publicaciones</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-200 border-3 border-black p-6 mt-6">
              <h3 className="font-space-grotesk font-bold text-xl mb-3">
                Resultados esperados
              </h3>
              <p className="mb-2">Al corregir estos errores:</p>
              <ul className="space-y-1 font-semibold">
                <li>• +200% de vistas mínimo</li>
                <li>• +150% de mensajes</li>
                <li>• Ventas multiplicadas por 2 a 3</li>
              </ul>
            </div>
          </div>

          {/* Tableau Récapitulatif */}
          <div className="mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-6">
              El Resumen
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black">
                <thead>
                  <tr className="bg-pink-pastel border-b-4 border-black">
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Error
                    </th>
                    <th className="border-r-3 border-black p-4 text-left font-space-grotesk font-bold">
                      Impacto
                    </th>
                    <th className="p-4 text-left font-space-grotesk font-bold">
                      Solución Rápida
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Fotos borrosas</td>
                    <td className="border-r-2 border-black p-4">-85% clics</td>
                    <td className="p-4 font-semibold">Fotos IA con modelo</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Prenda en percha</td>
                    <td className="border-r-2 border-black p-4">-80% conversión</td>
                    <td className="p-4 font-semibold">Fotos IA con modelo</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Precios mal calibrados</td>
                    <td className="border-r-2 border-black p-4">Sin venta</td>
                    <td className="p-4 font-semibold">Método 5 vendidos</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Descripciones vacías</td>
                    <td className="border-r-2 border-black p-4">Desconfianza comprador</td>
                    <td className="p-4 font-semibold">Plantilla completa</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Respuestas lentas</td>
                    <td className="border-r-2 border-black p-4">-90% conversión</td>
                    <td className="p-4 font-semibold">Notificaciones ON</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Foto única</td>
                    <td className="border-r-2 border-black p-4">Falta de información</td>
                    <td className="p-4 font-semibold">4-5 fotos mínimo</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Mal momento</td>
                    <td className="border-r-2 border-black p-4">Artículo ahogado</td>
                    <td className="p-4 font-semibold">Domingo noche</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Sin SEO</td>
                    <td className="border-r-2 border-black p-4">Imposible encontrar</td>
                    <td className="p-4 font-semibold">Título optimizado</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="border-r-2 border-black p-4">Sin impulso</td>
                    <td className="border-r-2 border-black p-4">Enterrado</td>
                    <td className="p-4 font-semibold">Impulso estratégico</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-black p-4">Perfil vacío</td>
                    <td className="border-r-2 border-black p-4">Cero confianza</td>
                    <td className="p-4 font-semibold">Perfil completo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-mint border-4 border-black p-8 mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">
              Conclusión
            </h2>
            <p className="text-lg mb-4">
              Estos 10 errores son evitables. ¿La buena noticia? Corregirlos es simple y los resultados son inmediatos.
            </p>
            <p className="text-lg font-semibold mb-4">
              El error #1 a corregir con prioridad: Tus fotos. Con nuestra IA, transformas instantáneamente fotos mediocres en fotos que venden.
            </p>
            <Link
              to="/es"
              className="inline-block bg-vinted text-white px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-lg"
            >
              Mejorar mis Fotos Ahora
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Errores", "Consejos", "Vinted", "Optimización", "Ventas"].map((tag) => (
              <span
                key={tag}
                className="bg-pink-pastel px-4 py-2 border-2 border-black font-space-grotesk font-semibold text-sm"
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
              to="/es/articles/como-tomar-buenas-fotos-vinted"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Cómo Tomar Buenas Fotos para Vinted
              </h3>
              <p className="text-sm text-gray-600">
                Guía completa para fotos que venden
              </p>
            </Link>
            <Link
              to="/es/articles/estrategia-venta-vinted-2025"
              className="border-3 border-black p-4 hover:bg-pink-pastel transition-colors"
            >
              <h3 className="font-space-grotesk font-bold mb-2">
                Estrategia de Venta Vinted 2025
              </h3>
              <p className="text-sm text-gray-600">
                Las mejores técnicas para maximizar tus ventas
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
