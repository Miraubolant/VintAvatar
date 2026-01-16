import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CreditCard, Wallet, ArrowRight, CheckCircle, AlertTriangle, Euro, Clock3, Shield, Smartphone } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

const PagoVintedGuiaPage: React.FC = () => {
  useSEO({
    title: "Pago Vinted: Cómo Recibir y Retirar tu Dinero | VintDress",
    description: "Guía completa del sistema de pago de Vinted. Monedero, métodos de pago, tiempos de transferencia y cómo retirar tu dinero.",
    keywords: "pago vinted, monedero vinted, retirar dinero vinted, transferencia vinted, cómo recibir dinero vinted",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=400&fit=crop"
          alt="Guía completa de pago Vinted"
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
            Pago Vinted: Cómo Recibir y Retirar tu Dinero
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Equipo VintDress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>7 de enero de 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["pago vinted", "monedero", "retirar dinero", "transferencia", "PayPal"].map((tag) => (
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
            ¿Acabas de hacer tu primera venta en Vinted? ¡Felicidades! Pero, ¿cómo recuperas tu dinero? En esta guía completa, te explicamos todo sobre el sistema de pago de Vinted: desde el monedero hasta la transferencia bancaria, pasando por los tiempos y las comisiones. <strong className="text-vinted">Spoiler: ¡es 100% gratis para los vendedores!</strong>
          </p>
        </div>

        {/* Section 1 - Payment methods */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Métodos de Pago Aceptados (Comprador)
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Cuando compras en Vinted, tienes varias opciones de pago disponibles. Estos son los métodos aceptados:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Tarjeta bancaria
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Visa, Mastercard, Maestro... Pago instantáneo y seguro. El método más utilizado en Vinted.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  PayPal
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Conecta tu cuenta de PayPal para pagar en un clic. Protección al comprador incluida.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Apple Pay / Google Pay
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Pago móvil rápido desde tu smartphone. Ideal para comprar en segundos.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-vinted" />
                <h3 className="font-display font-bold text-xl text-black">
                  Saldo Vinted
                </h3>
              </div>
              <p className="font-body text-black text-sm">
                Usa el dinero de tus ventas directamente para comprar. Puedes combinar saldo + tarjeta.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Vinted Wallet */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            El Monedero Vinted
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              ¿Cómo Funciona?
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              El monedero Vinted es un monedero virtual integrado en la aplicación. Cuando vendes un artículo, el dinero se acredita primero en tu monedero Vinted antes de que puedas transferirlo a tu cuenta bancaria.
            </p>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Seguro:</strong> El dinero está protegido hasta la validación de la transacción</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Accesible:</strong> Visible en la pestaña "Monedero" de la app</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                <span><strong>Flexible:</strong> Úsalo para comprar o transfiérelo a tu cuenta</span>
              </li>
            </ul>
          </div>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              ¿Dónde Ver tu Saldo?
            </h3>
            <ol className="font-body text-black space-y-2">
              <li>1. Abre la aplicación Vinted</li>
              <li>2. Ve a tu perfil (icono abajo a la derecha)</li>
              <li>3. Haz clic en "Monedero" o "Saldo"</li>
              <li>4. Verás tu saldo disponible y el historial de transacciones</li>
            </ol>
          </div>
        </section>

        {/* Section 3 - Payment lifecycle */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Ciclo de Vida de un Pago
          </h2>

          <p className="font-body text-black leading-relaxed mb-6">
            Cuando alguien compra tu artículo, esto es lo que pasa paso a paso:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Compra del comprador
                </h3>
                <p className="font-body text-black">
                  El comprador paga el precio del artículo + las tasas de protección. <strong>El dinero queda bloqueado</strong> por Vinted a la espera del envío.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Envío del paquete
                </h3>
                <p className="font-body text-black">
                  Imprimes la etiqueta, empaquetas el artículo y depositas el paquete. El estado cambia a "En tránsito".
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Recepción por el comprador
                </h3>
                <p className="font-body text-black">
                  El comprador recibe el paquete. Tiene entonces <strong>2 días</strong> para validar el pedido o reportar un problema.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-mint text-black border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-mint border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  ¡Dinero disponible!
                </h3>
                <p className="font-body text-black">
                  Si el comprador valida (o después de 2 días automáticamente), <strong>el dinero se acredita en tu monedero</strong>. ¡Ya puedes retirarlo!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Withdraw money */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cómo Retirar tu Dinero
          </h2>

          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4">
              Pasos para Transferir a tu Cuenta Bancaria
            </h3>
            <ol className="font-body text-black space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">1</span>
                <span>Ve a <strong>Monedero</strong> desde tu perfil</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">2</span>
                <span>Haz clic en <strong>"Transferir"</strong> o <strong>"Retirar"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">3</span>
                <span>Añade tu IBAN si aún no lo has hecho</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white border-2 border-black font-display font-bold flex items-center justify-center text-sm">4</span>
                <span>Confirma el monto a transferir</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-mint text-black border-2 border-black font-display font-bold flex items-center justify-center text-sm">5</span>
                <span>Espera <strong>3 a 5 días hábiles</strong> para recibir el dinero</span>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Clock3 className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Tiempos de Transferencia
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- <strong>3 a 5 días hábiles</strong> de media</li>
                <li>- Puede variar según tu banco</li>
                <li>- No hay transferencias los fines de semana</li>
                <li>- Gratis y sin mínimo</li>
              </ul>
            </div>

            <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="w-6 h-6 text-vinted" />
                <h3 className="font-display font-bold text-lg text-black">
                  Usar tu Saldo
                </h3>
              </div>
              <ul className="font-body text-black text-sm space-y-1">
                <li>- Compra directamente en Vinted</li>
                <li>- Combina saldo + tarjeta bancaria</li>
                <li>- Sin tiempo de espera</li>
                <li>- Ideal si compras a menudo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Fees */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Comisiones y Tasas
          </h2>

          <div className="bg-mint border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-vinted" />
              ¡Buenas noticias: 0% de comisión para los vendedores!
            </h3>
            <p className="font-body text-black leading-relaxed">
              Vinted no cobra <strong>ninguna comisión sobre tus ventas</strong>. Si vendes un artículo por 20€, recibes 20€ en tu monedero. El comprador paga las tasas de protección.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">
              Lo que Paga el Comprador
            </h3>
            <ul className="font-body text-black space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Protección al Comprador:</strong> 5% del precio + 0,70€ fijo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Gastos de envío:</strong> Variable según el transportista elegido</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-cream border-2 border-black">
              <p className="font-body text-black text-sm">
                <strong>Ejemplo:</strong> Para un artículo de 20€, el comprador pagará 20€ + 1,70€ (protección) + envío = alrededor de 25-27€ en total.
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
                ¿Cuánto tiempo para recibir el dinero tras una venta?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Tras la validación del comprador (o 2 días automático), el dinero llega a tu monedero. Luego cuenta con 3 a 5 días hábiles para la transferencia bancaria.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Hay un monto mínimo para retirar?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No, ¡puedes retirar desde 0,01€! No hay monto mínimo en Vinted.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Puedo recibir el dinero en PayPal?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                No, las transferencias solo se hacen a una cuenta bancaria (IBAN). PayPal solo se acepta para pagos, no para retiros.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Tengo que declarar mis ingresos de Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Si vendes objetos personales ocasionalmente, generalmente no estás sujeto a impuestos. Pero si compras para revender o superas ciertos umbrales, puede que tengas que declarar. Consulta las normas fiscales de tu país.
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <Shield className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¿Listo para Vender en Vinted?
          </h3>
          <p className="font-body text-white mb-6 max-w-xl mx-auto">
            Ahora que dominas los pagos, ¡impulsa tus ventas con fotos profesionales gracias a VintDress!
          </p>
          <Link
            to="/#generateur"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-vinted border-3 border-black font-display font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
              { slug: "como-hacer-fotos-vinted", title: "Cómo Hacer Buenas Fotos" },
              { slug: "fotos-puestas-vinted", title: "Fotos Puestas Vinted" },
              { slug: "algoritmo-vinted-visibilidad-2025", title: "Algoritmo Vinted" }
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

export default PagoVintedGuiaPage;
