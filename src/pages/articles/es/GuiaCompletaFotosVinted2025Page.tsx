import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Lightbulb, AlertTriangle, Zap, Camera, Sparkles } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const GuiaCompletaFotosVinted2025Page: React.FC = () => {
  useSEO({
    title: "Guía Completa: Optimiza tus Fotos Vinted en 2025 | VintDress",
    description: "Guía completa 2025 para optimizar tus fotos Vinted. Técnicas pro, IA, estrategias avanzadas. ¡+200% de vistas garantizadas!",
    keywords: "guia fotos vinted 2025, optimizar fotos vinted, fotos IA vinted, vender mas vinted, guia completa vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] lg:h-[500px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=500&fit=crop"
          alt="Guía Completa Fotos Vinted 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-white text-4xl lg:text-6xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              GUÍA COMPLETA 2025
            </h1>
            <p className="font-display font-bold text-mint text-xl lg:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Optimiza tus Fotos Vinted
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
              GUÍA
            </span>
            <span className="font-body text-sm text-gray-600">Por Equipo VintDress</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">15 de noviembre de 2025</span>
            <span className="font-body text-sm text-gray-600">•</span>
            <span className="font-body text-sm text-gray-600">12 min de lectura</span>
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4">
            Guía Completa: Optimiza tus Fotos Vinted en 2025
          </h1>

          <p className="font-body text-lg text-gray-700 mb-6">
            La guía definitiva para crear fotos Vinted que conviertan en 2025. ¡Todas las técnicas reveladas!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Guía", "Fotos", "Vinted", "2025", "IA", "Optimización"].map((tag) => (
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
          <p className="font-display font-bold text-white text-lg">
            2025 marca una nueva era para la venta online. Con la explosión de la IA y las nuevas expectativas de los compradores, tus fotos Vinted deben ser perfectas.
          </p>
        </div>

        {/* Evolución del E-Commerce */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            La Evolución del E-Commerce en 2025
          </h2>

          <div className="bg-pink-pastel border-3 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Lo que ha Cambiado
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Estándares visuales más altos</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Primera impresión crucial</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">IA en los hábitos de compra</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-body text-sm text-gray-700">Mobile-first: 95% de las vistas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 1: Fundamentos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 1: Los Fundamentos 2025
          </h2>

          <div className="space-y-6">
            {/* 1.1 Regla de los 3 segundos */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                1.1 La Regla de los 3 Segundos
              </h3>
              <p className="font-body text-gray-700">
                Los compradores deciden en 3 segundos si tu artículo les interesa. Tu foto principal debe ser <strong>perfecta</strong>.
              </p>
            </div>

            {/* 1.2 Formatos óptimos */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.2 Formatos Óptimos
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Ratio 4:5</strong>: El formato preferido de Vinted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Resolución mínima</strong>: 1080x1350px</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700"><strong>Peso máximo</strong>: 10MB para evitar compresión</span>
                </li>
              </ul>
            </div>

            {/* 1.3 Iluminación */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                1.3 Iluminación Natural vs Artificial
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ILUMINACIÓN NATURAL</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Ventana norte: luz suave</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Evitar 12h-14h (muy fuerte)</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Nubes = difusor perfecto</span></li>
                  </ul>
                </div>
                <div className="bg-pink-pastel border-2 border-black p-4">
                  <h4 className="font-display font-bold text-sm text-black mb-2">ILUMINACIÓN ARTIFICIAL</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Ring light mínimo 18"</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Temperatura 5500K</span></li>
                    <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Evitar flash directo</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 2: Puesta en Escena */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 2: Puesta en Escena Profesional
          </h2>

          <div className="space-y-6">
            {/* Fondos */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Top 3 de Fondos 2025
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-white border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">1. Blanco puro</p>
                  <p className="font-body text-xs text-gray-600">Atemporal, destaca</p>
                </div>
                <div className="bg-cream border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-cream border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">2. Beige natural</p>
                  <p className="font-body text-xs text-gray-600">Cálido, slow fashion</p>
                </div>
                <div className="bg-gray-200 border-2 border-black p-4 text-center">
                  <div className="w-12 h-12 bg-gray-300 border-2 border-black mx-auto mb-2"></div>
                  <p className="font-display font-bold text-sm text-black mb-1">3. Gris claro</p>
                  <p className="font-body text-xs text-gray-600">Moderno, tonos oscuros</p>
                </div>
              </div>
            </div>

            {/* Composición */}
            <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Composición y Ángulos
              </h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-gray-700"><strong>La regla de los tercios:</strong></p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Artículo principal en intersección</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Espacio negativo para respirar</span></li>
                  <li className="flex gap-2"><Camera className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Ángulo ligeramente diagonal</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 3: Revolución IA */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 3: La Revolución IA
          </h2>

          <div className="bg-vinted border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Por Qué la IA lo Cambia Todo
            </h3>
            <p className="font-body text-white mb-4">
              La inteligencia artificial ahora permite crear fotos puestas ultra realistas sin maniquí.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Consistencia</p>
                <p className="font-body text-sm text-gray-700">Calidad pro garantizada</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Rapidez</p>
                <p className="font-body text-sm text-gray-700">30 segundos vs 30 minutos</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">Diversidad</p>
                <p className="font-body text-sm text-gray-700">Varios modelos y poses</p>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <p className="font-display font-bold text-black mb-1">ROI</p>
                <p className="font-body text-sm text-gray-700">+300% de vistas</p>
              </div>
            </div>
          </div>

          {/* Cuándo usar la IA */}
          <div className="bg-mint border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Cuándo Usar la IA
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Ropa difícil de poner</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Artículos de valor</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Piezas únicas o vintage</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">Cuando te falta tiempo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 4: Estrategias Avanzadas */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 4: Estrategias Avanzadas
          </h2>

          <div className="space-y-6">
            {/* Secuenciación */}
            <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">
                Secuenciación de Fotos
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Vista puesta IA</p>
                    <p className="font-body text-sm text-gray-600">Gancho principal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Detalle material/etiqueta</p>
                    <p className="font-body text-sm text-gray-600">Prueba de calidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Vista general artículo solo</p>
                    <p className="font-body text-sm text-gray-600">Contexto completo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-vinted border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-display font-bold text-white">4</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black">Defectos eventuales</p>
                    <p className="font-body text-sm text-gray-600">Transparencia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimización Móvil */}
            <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-3">
                Optimización Móvil (95% de las vistas)
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Texto legible incluso en miniatura</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Contrastes marcados para visibilidad</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-vinted flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700">Elementos centrados para evitar recortes</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capítulo 5: Errores a Evitar */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 5: Errores a Evitar Absolutamente
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Fotos borrosas</h3>
              </div>
              <p className="font-body text-sm text-gray-700">-70% de vistas</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Iluminación amarilla</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Desnaturaliza los colores</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Fondo desordenado</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Distrae la atención</p>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-bold text-black">Múltiples artículos</h3>
              </div>
              <p className="font-body text-sm text-gray-700">Confusión garantizada</p>
            </div>
          </div>

          <div className="bg-pink-pastel border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Trampas Específicas 2025
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Sobresaturación</strong>: Las pantallas modernas revelan todo</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Filtros Instagram</strong>: Falsean la realidad</span></li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span className="font-body text-sm text-gray-700"><strong>Fotos muy retocadas</strong>: Pérdida de confianza del comprador</span></li>
            </ul>
          </div>
        </section>

        {/* Capítulo 6: Casos Prácticos */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 6: Casos Prácticos por Categoría
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Vestidos y Faldas */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Vestidos y Faldas</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>IA recomendada</strong>: Ver la caída</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Pose</strong>: De pie, rotación de cadera</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Enfoque</strong>: Largo y corte</span></li>
              </ul>
            </div>

            {/* Tops y Camisetas */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Tops y Camisetas</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Busto</strong>: Entallado para ver la forma</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Detalles</strong>: Cuello, mangas, estampados</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Arrugas</strong>: Evitar absolutamente</span></li>
              </ul>
            </div>

            {/* Pantalones y Jeans */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Pantalones y Jeans</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Piernas</strong>: Rectas, no cruzadas</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Cintura</strong>: Bien visible</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Dobladillos</strong>: Largo claro</span></li>
              </ul>
            </div>

            {/* Zapatos */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Zapatos</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Perfil</strong>: Vista lateral obligatoria</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Suelas</strong>: Estado de desgaste visible</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Par</strong>: Siempre los dos</span></li>
              </ul>
            </div>

            {/* Accesorios */}
            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Accesorios</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Proporciones</strong>: Referencia de tamaño</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Brillo</strong>: Evitar reflejos</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700"><strong>Detalles</strong>: Cierres, cadenas</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capítulo 7: Herramientas */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Capítulo 7: Herramientas y Equipamiento
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-mint border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Smartphone</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">12MP mínimo</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Estabilización óptica</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Modo retrato</span></li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Aplicaciones</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">VSCO</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Snapseed</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Lightroom Mobile</span></li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-lg text-black mb-3">Equipo Pro</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Trípode</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Mando a distancia</span></li>
                <li className="flex gap-2"><span className="text-vinted">•</span><span className="font-body text-gray-700">Reflector</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plan de Acción */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl text-black mb-6 pb-3 border-b-4 border-black">
            Tu Plan de Acción 2025
          </h2>

          <div className="bg-vinted border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">1</span>
                </div>
                <p className="font-body text-white"><strong>Audita tus fotos actuales</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">2</span>
                </div>
                <p className="font-body text-white"><strong>Identifica tus 5 mejores piezas</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">3</span>
                </div>
                <p className="font-body text-white"><strong>Prueba la IA en estos artículos</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">4</span>
                </div>
                <p className="font-body text-white"><strong>Compara los resultados</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-display font-bold text-vinted">5</span>
                </div>
                <p className="font-body text-white"><strong>Adopta la estrategia ganadora</strong></p>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-4 mt-6">
              <p className="font-display font-bold text-black mb-2">
                El Secreto en 2025
              </p>
              <p className="font-body text-sm text-gray-700">
                Mezclar inteligentemente fotos IA y fotos tradicionales según el tipo de artículo y tu presupuesto de tiempo.
              </p>
            </div>

            <div className="bg-mint border-3 border-black p-4 mt-4">
              <p className="font-display font-bold text-black mb-2">
                Resultado Garantizado
              </p>
              <p className="font-body text-sm text-gray-700">
                +200% de vistas mínimo, tiempo de venta dividido por 3.
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
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Qué formato de foto usar en Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  El formato óptimo es 4:5 (1080x1350px) que se muestra perfectamente en móvil y escritorio.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuántas fotos poner en un anuncio Vinted?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Lo ideal son 5 fotos: una principal puesta, detalles, una vista trasera y la etiqueta.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿La IA puede realmente mejorar mis ventas?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Sí, los usuarios ven en promedio +300% de vistas y +250% de ventas con fotos IA.
                </p>
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-4 cursor-pointer font-display font-bold text-black hover:bg-cream transition-colors list-none flex items-center justify-between">
                <span>¿Cuánto tiempo para crear una foto IA?</span>
                <span className="text-vinted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 border-t-3 border-black">
                <p className="font-body text-gray-700 pt-4">
                  Solo 30 segundos para generar una foto puesta profesional con VintDress.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              ¿Listo/a para Revolucionar tus Fotos Vinted?
            </h2>
            <p className="font-body text-white mb-6 max-w-2xl mx-auto">
              Prueba nuestra IA ahora y únete a los vendedores que dominan Vinted en 2025.
            </p>
            <Link
              to="/#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-4 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROBAR LA IA AHORA
              <Zap className="w-5 h-5" />
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
              to="/es/articles/estrategia-ventas-vinted-2025"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Estrategia de Ventas Vinted 2025</h3>
              <p className="font-body text-sm text-gray-600">La estrategia completa para dominar Vinted este año.</p>
            </Link>
            <Link
              to="/es/articles/maniqui-ia-vinted"
              className="bg-white border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <h3 className="font-display font-bold text-black mb-2">Maniquí IA Vinted</h3>
              <p className="font-body text-sm text-gray-600">Descubre cómo un maniquí IA puede transformar tus fotos.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GuiaCompletaFotosVinted2025Page;
