import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, AlertTriangle, HelpCircle, Lock, Trash2, CreditCard, Package, Users, XCircle, Euro, Headphones, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ProblemasVintedSolucionesPage: React.FC = () => {
  useSEO({
    title: "Problemas Vinted: Soluciones a Preguntas Frecuentes 2026 | VintDress",
    description: "Resuelve todos tus problemas en Vinted: conexión, cuenta bloqueada, artículos eliminados, pago, disputas. Guía completa de soluciones 2026.",
    keywords: "problemas vinted, ayuda vinted, soporte vinted, cuenta bloqueada vinted, disputa vinted, contactar vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop"
          alt="Problemas Vinted - Soluciones y Ayuda"
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
            FAQ
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Problemas Vinted: Soluciones a Preguntas Frecuentes 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipo VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 de Enero de 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["problemas vinted", "ayuda vinted", "soporte", "disputas", "VintDress"].map((tag) => (
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
            ¿Tienes un problema en Vinted? ¡No te preocupes! En esta guía encontrarás las <strong className="text-vinted">soluciones a los problemas más comunes</strong>: inicio de sesión, cuenta bloqueada, artículos eliminados, pago, disputas... Cada situación tiene su solución.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="font-display font-bold text-xl text-black mb-4">Navegación rápida</h2>
          <ul className="space-y-2 font-body text-black">
            <li><a href="#conexion" className="text-vinted hover:underline">1. Problemas de conexión</a></li>
            <li><a href="#cuenta" className="text-vinted hover:underline">2. Cuenta bloqueada o suspendida</a></li>
            <li><a href="#articulos" className="text-vinted hover:underline">3. Artículos eliminados</a></li>
            <li><a href="#pago" className="text-vinted hover:underline">4. Problemas de pago</a></li>
            <li><a href="#envio" className="text-vinted hover:underline">5. Problemas de envío</a></li>
            <li><a href="#disputas" className="text-vinted hover:underline">6. Disputas comprador/vendedor</a></li>
            <li><a href="#cancelar" className="text-vinted hover:underline">7. Cancelar una transacción</a></li>
            <li><a href="#comisiones" className="text-vinted hover:underline">8. Comisiones y tarifas</a></li>
            <li><a href="#soporte" className="text-vinted hover:underline">9. Contactar soporte Vinted</a></li>
          </ul>
        </div>

        {/* Section 1 - Problemas de conexión */}
        <section id="conexion" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Lock className="w-8 h-8 text-vinted" />
            Problemas de Conexión
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-black" />
                "No puedo iniciar sesión"
              </h3>
              <ul className="space-y-3 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Verifica que estés usando el correo electrónico correcto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Haz clic en "¿Olvidaste tu contraseña?" para restablecerla</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Desinstala y reinstala la aplicación</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Intenta conectarte a través del sitio web</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Contraseña olvidada</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Ve a la pantalla de inicio de sesión</li>
                <li><strong>2.</strong> Haz clic en "¿Olvidaste tu contraseña?"</li>
                <li><strong>3.</strong> Introduce tu correo electrónico</li>
                <li><strong>4.</strong> Revisa tu carpeta de spam si no recibes el email</li>
                <li><strong>5.</strong> Haz clic en el enlace y crea una nueva contraseña</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 2 - Cuenta bloqueada */}
        <section id="cuenta" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Cuenta Bloqueada o Suspendida
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Posibles razones del bloqueo</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Violación de los Términos de Servicio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Venta de artículos prohibidos (falsificaciones, productos peligrosos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Comportamiento sospechoso o fraudulento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Múltiples denuncias de otros usuarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Intento de transacción fuera de la plataforma</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-vinted" />
                Cómo recuperar tu cuenta
              </h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Contacta con el soporte de Vinted a través del centro de ayuda</li>
                <li><strong>2.</strong> Explica tu situación con calma</li>
                <li><strong>3.</strong> Proporciona las pruebas solicitadas</li>
                <li><strong>4.</strong> Ten paciencia (normalmente 3-7 días)</li>
                <li><strong>5.</strong> Si lo rechazan, puedes apelar una vez</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3 - Artículos eliminados */}
        <section id="articulos" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-vinted" />
            Artículos Eliminados
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Por qué Vinted elimina artículos</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Falsificaciones</strong>: artículos de marca sospechosos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Fotos no conformes</strong>: imágenes de internet, marcas de agua</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Categoría prohibida</strong>: cosméticos, medicamentos, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Precio irreal</strong>: demasiado bajo o demasiado alto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Descripción engañosa</strong>: información falsa</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Cómo evitar la eliminación</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Usa únicamente tus propias fotos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Describe honestamente el estado del artículo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Fotografía la etiqueta para artículos de marca</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Consulta la lista de artículos prohibidos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Problemas de pago */}
        <section id="pago" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-vinted" />
            Problemas de Pago
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Pago rechazado</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Verifica el saldo de tu tarjeta</li>
                <li>• Prueba con otra tarjeta</li>
                <li>• Usa PayPal como alternativa</li>
                <li>• Contacta con tu banco (bloqueo de seguridad)</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Dinero retenido</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Normal durante 2 días después de la entrega</li>
                <li>• Si hay disputa: espera la resolución</li>
                <li>• Verifica el estado en tu monedero</li>
                <li>• Contacta soporte si pasan +5 días</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Transferencia no recibida</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Plazo normal: 3-5 días laborables</li>
                <li>• Verifica el IBAN registrado</li>
                <li>• Asegúrate de haber solicitado la transferencia</li>
                <li>• Contacta soporte después de 7 días</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Monedero no disponible</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Verifica tu identidad si se solicita</li>
                <li>• Espera a que termine cualquier disputa</li>
                <li>• Cierra sesión y vuelve a conectarte</li>
                <li>• Actualiza la aplicación</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Problemas de envío */}
        <section id="envio" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Package className="w-8 h-8 text-vinted" />
            Problemas de Envío
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Paquete perdido</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Verifica el seguimiento del paquete (puede estar retrasado)</li>
                <li><strong>2.</strong> Espera 14 días después del envío</li>
                <li><strong>3.</strong> Abre una disputa en la transacción</li>
                <li><strong>4.</strong> Vinted investiga con el transportista</li>
                <li><strong>5.</strong> Reembolso automático si se confirma la pérdida</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Paquete dañado</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Toma fotos ANTES de abrir el paquete</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Reporta el problema en los 2 días siguientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Abre una disputa con pruebas fotográficas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Conserva el paquete si se solicita</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Disputas */}
        <section id="disputas" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Users className="w-8 h-8 text-vinted" />
            Disputas Comprador/Vendedor
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Cómo abrir una disputa</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Ve a "Mis compras" o "Mis ventas"</li>
                <li><strong>2.</strong> Selecciona la transacción correspondiente</li>
                <li><strong>3.</strong> Haz clic en "Tengo un problema"</li>
                <li><strong>4.</strong> Elige el tipo de problema</li>
                <li><strong>5.</strong> Añade fotos y explicaciones</li>
                <li><strong>6.</strong> Envía la disputa a Vinted</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Artículo no conforme</h3>
                <p className="font-body text-black text-sm mb-3">
                  El artículo no corresponde a la descripción, tiene defectos no mencionados o es falsificación.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Solución:</strong> Abre una disputa en los 2 días siguientes con fotos comparativas.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-4">Artículo no recibido</h3>
                <p className="font-body text-black text-sm mb-3">
                  El paquete no llega a pesar del estado "entregado" o supera los plazos.
                </p>
                <p className="font-body text-black text-sm">
                  <strong>Solución:</strong> Espera 14 días y luego abre una disputa para investigación.
                </p>
              </div>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vinted" />
                Protección al comprador: qué está cubierto
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Artículo no recibido</li>
                <li>• Artículo significativamente diferente a la descripción</li>
                <li>• Falsificación</li>
                <li>• Artículo dañado durante el transporte</li>
              </ul>
              <p className="font-body text-black text-sm mt-4 italic">
                Nota: Los desacuerdos sobre talla o color (si están bien descritos) generalmente no están cubiertos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 - Cancelar transacción */}
        <section id="cancelar" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <XCircle className="w-8 h-8 text-vinted" />
            Cancelar una Transacción
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Como vendedor</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• Posible antes de enviar el paquete</li>
                <li>• Ve a la conversación con el comprador</li>
                <li>• Haz clic en "Cancelar pedido"</li>
                <li>• El comprador recibe el reembolso automáticamente</li>
                <li>• Posible impacto en tu reputación si es frecuente</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Como comprador</h3>
              <ul className="space-y-2 font-body text-black text-sm">
                <li>• No hay cancelación directa posible</li>
                <li>• Pide al vendedor que cancele</li>
                <li>• Si el vendedor se niega, espera la entrega</li>
                <li>• Puedes rechazar el paquete en el punto de recogida</li>
                <li>• Abre una disputa si hay un problema real</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 - Comisiones */}
        <section id="comisiones" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Euro className="w-8 h-8 text-vinted" />
            Comisiones y Tarifas
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-vinted" />
              ¿Cobra Vinted comisión?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              <strong className="text-vinted">¡NO para los vendedores!</strong> Recibes el 100% del precio de venta. Esto es lo que diferencia a Vinted de otras plataformas.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Lo que paga el comprador</h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Protección al comprador:</strong> 5% del precio + 0,70€</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Gastos de envío:</strong> Variable según el transportista elegido</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Ejemplo:</strong> Artículo 20€ + Protección 1,70€ + Envío 4,50€ = <strong>26,20€ total</strong><br />
                El vendedor recibe: <strong>20€</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 - Contactar soporte */}
        <section id="soporte" className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black flex items-center gap-3">
            <Headphones className="w-8 h-8 text-vinted" />
            Contactar Soporte Vinted
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">A través de la aplicación</h3>
              <ol className="space-y-2 font-body text-black">
                <li><strong>1.</strong> Perfil → Ajustes</li>
                <li><strong>2.</strong> Centro de Ayuda</li>
                <li><strong>3.</strong> Busca tu problema</li>
                <li><strong>4.</strong> Si no hay solución → "Contáctanos"</li>
                <li><strong>5.</strong> Completa el formulario detallado</li>
              </ol>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4">Consejos para recibir ayuda rápidamente</h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Explica claramente tu problema en una frase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Añade capturas de pantalla</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Indica el número de transacción si aplica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Ten paciencia (tiempo de respuesta: 24-72h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  <span>No envíes mensajes repetidos (ralentiza el proceso)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¡Evita problemas, vende mejor!
          </h3>
          <p className="font-body text-white mb-6">
            Las fotos de calidad profesional reducen las disputas y aumentan tus ventas.
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREAR MIS FOTOS PRO
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cuánto dura una disputa en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                En promedio 3 a 7 días laborables. Los casos complejos pueden tardar hasta 14 días. Vinted examina las pruebas de ambas partes antes de decidir.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Puedo recuperar una cuenta baneada?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                A veces sí. Contacta con soporte con explicaciones y pruebas. Tienes derecho a una apelación. Si el baneo es permanente, no podrás crear una nueva cuenta (verificación de identidad).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                Mi dinero está retenido, ¿qué hago?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                El dinero se retiene hasta la confirmación del comprador (2 días después de la recepción). Si hay una disputa en curso, espera la resolución. Si pasan +5 días sin motivo, contacta con soporte.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cómo evitar estafas en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Nunca comuniques fuera de la app, nunca aceptes pagos externos, desconfía de precios demasiado bajos, verifica las opiniones de vendedores/compradores y usa siempre el sistema de pago de Vinted.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Artículos Relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "pago-vinted-guia", title: "Pago Vinted: Guía" },
              { slug: "envio-vinted-guia", title: "Envío Vinted" },
              { slug: "como-funciona-vinted", title: "Cómo Funciona Vinted" }
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

export default ProblemasVintedSolucionesPage;
