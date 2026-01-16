import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Package, Truck, MapPin, AlertTriangle, Star, ArrowRight, Euro, Shield, Box } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const EnvioVintedGuiaPage: React.FC = () => {
  useSEO({
    title: "Envío Vinted: Guía Completa de Paquetes 2026 | VintDress",
    description: "¿Cómo enviar un paquete en Vinted? Guía completa: opciones de envío, gastos, embalaje, puntos de entrega. Todo sobre el envío en Vinted.",
    keywords: "envio vinted, enviar paquete vinted, gastos envio vinted, como enviar vinted, punto de entrega vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=400&fit=crop"
          alt="Envío Vinted - Guía completa de paquetes"
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
            GUÍA
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">
            Envío Vinted: Guía Completa de Paquetes 2026
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipo VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 de enero de 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["envío vinted", "paquete", "gastos envío", "punto entrega", "VintDress"].map((tag) => (
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
            ¿Acabas de vender tu primer artículo en Vinted? ¡Felicidades! Ahora tienes que enviarlo al comprador. No te preocupes: el envío en Vinted es simple y bien organizado. En esta guía, aprenderás <strong className="text-vinted">cómo enviar un paquete</strong>, quién paga los gastos y cómo conseguir valoraciones de 5 estrellas con un envío cuidado.
          </p>
        </div>

        {/* Section 1 - Opciones de envío */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Opciones de envío disponibles
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Truck className="w-6 h-6 text-vinted" />
                Puntos de entrega / Taquillas
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Precio</strong>: Desde 2,79€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Plazo</strong>: 3-5 días laborables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Ventaja</strong>: La opción más económica, muchos puntos de entrega</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Peso máx</strong>: Hasta 30kg según formato</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-vinted" />
                Correos / Servicio postal
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Precio</strong>: Desde 4,29€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Plazo</strong>: 2-3 días laborables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Ventaja</strong>: Entrega a domicilio posible, rápido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Peso máx</strong>: Hasta 30kg</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-vinted" />
                Entrega en mano
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Precio</strong>: ¡Gratis!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Ventaja</strong>: Sin gastos, encuentro directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>Desventaja</strong>: Requiere desplazarse, sin protección Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 - Quién paga qué */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Quién paga qué?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Euro className="w-6 h-6 text-vinted" />
              Desglose de gastos
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Gastos de envío</p>
                <p className="font-body text-black">Pagados por el <strong className="text-vinted">comprador</strong>. ¡Tú no pagas nada!</p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Protección al comprador</p>
                <p className="font-body text-black">5% del precio + 0,70€, pagados por el <strong className="text-vinted">comprador</strong></p>
              </div>
              <div className="p-4 bg-white border-3 border-black">
                <p className="font-display font-bold text-black mb-2">Comisión del vendedor</p>
                <p className="font-body text-black"><strong className="text-vinted">¡0%!</strong> Recibes el 100% del precio de venta</p>
              </div>
            </div>
          </div>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">Ejemplo concreto</h3>
            <div className="font-body text-black space-y-2">
              <p>Vendes una camiseta por <strong>15€</strong></p>
              <p>El comprador paga: 15€ + 3,50€ (envío) + 1,45€ (protección) = <strong>19,95€</strong></p>
              <p>Tú recibes: <strong className="text-vinted">15€</strong> (100% del precio de venta)</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Pasos de envío */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cómo enviar un paquete paso a paso
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Recibe la notificación de venta
                </h3>
                <p className="font-body text-black">
                  Cuando alguien compra, recibes una notificación. Tienes <strong>5 días</strong> para enviar el paquete.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Imprime la etiqueta prepagada
                </h3>
                <p className="font-body text-black">
                  Ve a "Mis ventas" → "Descargar etiqueta". Imprímela (o muestra el código QR en el punto de entrega).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Embala con cuidado
                </h3>
                <p className="font-body text-black">
                  Usa una caja o sobre de envío. Protege el artículo de la humedad con una bolsa de plástico.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Entrega en el punto de recogida
                </h3>
                <p className="font-body text-black">
                  Ve al punto de entrega indicado. Guarda el resguardo como prueba de envío.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                5
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Confirma el envío en la app
                </h3>
                <p className="font-body text-black">
                  Pulsa "Marcar como enviado". El comprador podrá seguir el paquete en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Embalaje */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Embalar bien tu paquete
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Box className="w-6 h-6 text-vinted" />
                Materiales recomendados
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Sobres de envío de plástico</li>
                <li>• Cartón reciclado (cajas de zapatos)</li>
                <li>• Papel de seda o kraft</li>
                <li>• Bolsas de plástico para proteger de la humedad</li>
                <li>• Cinta adhesiva resistente</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-vinted" />
                Consejos para 5 estrellas
              </h3>
              <ul className="space-y-2 font-body text-black">
                <li>• Añade una nota de agradecimiento</li>
                <li>• Dobla la ropa con cuidado</li>
                <li>• Perfuma ligeramente (opcional)</li>
                <li>• Embala como un regalo</li>
                <li>• Envía rápidamente (24-48h)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Problemas comunes */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Problemas comunes y soluciones
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Paquete perdido</p>
                </div>
                <p className="font-body text-black ml-8">
                  Contacta con el soporte de Vinted con tu resguardo de entrega. La Protección al comprador cubre este caso, serás reembolsado.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Paquete dañado</p>
                </div>
                <p className="font-body text-black ml-8">
                  El comprador debe reportar el problema con fotos. La Protección al comprador se encargará.
                </p>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">El comprador no recoge el paquete</p>
                </div>
                <p className="font-body text-black ml-8">
                  Después de 14 días en el punto de recogida, el paquete se devuelve. Puedes cancelar la venta o reenviar.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                  <p className="font-display font-bold text-black">Solicitud de devolución</p>
                </div>
                <p className="font-body text-black ml-8">
                  Si el artículo no corresponde, el comprador puede solicitar una devolución. Los gastos de devolución son a su cargo salvo que hayas cometido un error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Entrega en mano */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Entrega en mano: consejos de seguridad
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Precauciones a tomar
            </h3>
            <ul className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Lugar público</strong>: Cafetería, centro comercial, estación... ¡Nunca en casa!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Horario</strong>: Durante el día, en un lugar concurrido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Pago</strong>: Espera la confirmación del pago de Vinted ANTES de entregar el artículo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Acompañado</strong>: Si es posible, ve con alguien</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-white border-3 border-black">
              <p className="font-body text-black text-sm">
                <strong>Nota:</strong> La entrega en mano no está cubierta por la protección de Vinted. En caso de disputa, no tendrás recurso.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¡Antes de enviar, optimiza tus anuncios!
          </h3>
          <p className="font-body text-white mb-6">
            Fotos profesionales = más ventas = más paquetes para enviar. ¡Prueba VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            CREAR MIS FOTOS
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
                ¿Quién paga los gastos de envío en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Los gastos de envío los paga el comprador. Como vendedor, no pagas nada: recibes el 100% del precio de venta.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Dónde entrego mi paquete de Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Según la opción elegida por el comprador: punto de entrega, oficina de correos, o punto de encuentro para entrega en mano.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cuánto tiempo tengo para enviar mi paquete?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Tienes 5 días laborables para enviar tu paquete después de la venta. Pasado ese plazo, la venta puede cancelarse automáticamente.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Qué hago si no tengo impresora?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Puedes usar el código QR proporcionado por Vinted. Muéstralo directamente en el punto de entrega donde lo escanearán e imprimirán la etiqueta en el momento.
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Artículos relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "pago-vinted-guia", title: "Pago Vinted: Guía Completa" },
              { slug: "como-vender-en-vinted", title: "Cómo Vender en Vinted" },
              { slug: "problemas-vinted-soluciones", title: "Problemas Vinted: Soluciones" }
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

export default EnvioVintedGuiaPage;
