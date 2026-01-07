import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, CheckCircle, Smartphone, Shield, Star, ArrowRight, Users, ShoppingBag, CreditCard, Search, Heart } from 'lucide-react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';

export const ComoFuncionaVintedPage: React.FC = () => {
  useSEO({
    title: "Vinted: ¿Cómo Funciona? Guía para Principiantes 2026 | VintDress",
    description: "Descubre cómo funciona Vinted en 2026. Guía completa para principiantes: crear cuenta, comprar, vender, pago y seguridad.",
    keywords: "como funciona vinted, vinted principiante, crear cuenta vinted, app vinted, guia vinted",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] border-b-4 border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop"
          alt="Vinted Cómo Funciona - Guía para Principiantes"
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
            Vinted: ¿Cómo Funciona? Guía para Principiantes 2026
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
              <span>7 de Enero de 2026</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["vinted principiante", "crear cuenta", "app vinted", "guía completa", "VintDress"].map((tag) => (
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
            ¿Has oído hablar de Vinted pero no sabes realmente cómo funciona? ¡Estás en el lugar correcto! Vinted es <strong className="text-vinted">la plataforma N°1</strong> para comprar y vender ropa de segunda mano en Europa, con más de <strong>80 millones de usuarios</strong>. En esta guía, descubrirás todo lo que necesitas saber para empezar.
          </p>
        </div>

        {/* Section 1 - Qué es Vinted */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Qué es Vinted?
          </h2>

          <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-vinted" />
              El Marketplace de Moda
            </h3>
            <p className="font-body text-black leading-relaxed mb-4">
              Vinted es una aplicación y un sitio web que te permite:
            </p>
            <ul className="space-y-2 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Vender</strong> tu ropa, zapatos y accesorios que ya no usas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Comprar</strong> artículos de segunda mano a precios reducidos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <span><strong>Intercambiar</strong> directamente con otros usuarios</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">80M+</p>
              <p className="font-body text-black">Usuarios</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">20+</p>
              <p className="font-body text-black">Países</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <p className="font-display font-bold text-3xl text-vinted mb-2">0%</p>
              <p className="font-body text-black">Comisión Vendedor</p>
            </div>
          </div>
        </section>

        {/* Section 2 - Es Vinted gratis */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Es Vinted Gratis?
          </h2>

          <div className="space-y-6">
            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-vinted" />
                Para Vendedores: 100% GRATIS
              </h3>
              <p className="font-body text-black leading-relaxed">
                Vinted no cobra <strong className="text-vinted">ninguna comisión</strong> por tus ventas. Recibes el 100% del precio de venta. Esto es lo que diferencia a Vinted de plataformas como Vestiaire Collective o eBay.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Para Compradores: Protección de Pago
              </h3>
              <p className="font-body text-black leading-relaxed mb-4">
                El comprador paga una "Protección al comprador" que incluye:
              </p>
              <ul className="space-y-2 font-body text-black">
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span><strong>5% del precio</strong> del artículo + 0,70€ fijos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Reembolso si el artículo no corresponde</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vinted font-bold">•</span>
                  <span>Protección contra estafas</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 - Crear cuenta */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Crear tu Cuenta Paso a Paso
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                1
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-vinted" />
                  Descarga la Aplicación
                </h3>
                <p className="font-body text-black">
                  Disponible en iOS (App Store) y Android (Google Play). También puedes usar el sitio web vinted.es.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                2
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Regístrate
                </h3>
                <p className="font-body text-black">
                  Con tu email, o a través de Google, Facebook o Apple. Es instantáneo y gratuito.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                3
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Completa tu Perfil
                </h3>
                <p className="font-body text-black">
                  Añade una foto de perfil, una biografía y verifica tu número de teléfono. ¡Un perfil completo inspira confianza!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-vinted text-white border-3 border-black font-display font-bold text-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                4
              </div>
              <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  Verifica tu Identidad (Recomendado)
                </h3>
                <p className="font-body text-black">
                  Opcional pero recomendado para desbloquear todas las funciones y tranquilizar a otros usuarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - La interfaz */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            La Interfaz de Vinted Explicada
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-vinted" />
                Búsqueda y Filtros
              </h3>
              <p className="font-body text-black">
                Busca por palabra clave, marca, talla, color, estado, precio... Los filtros son muy potentes para encontrar exactamente lo que buscas.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-vinted" />
                Favoritos
              </h3>
              <p className="font-body text-black">
                Añade artículos a favoritos para encontrarlos fácilmente. ¡Te notificarán si baja el precio!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-vinted" />
                Mi Armario
              </h3>
              <p className="font-body text-black">
                Es tu tienda personal. Todos tus artículos en venta están agrupados aquí. ¡Cuídalo como un escaparate!
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-vinted" />
                Monedero
              </h3>
              <p className="font-body text-black">
                El dinero de tus ventas llega aquí. Puedes transferirlo a tu cuenta bancaria o usarlo para comprar en Vinted.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Cómo vender */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cómo Funciona para Vender
          </h2>

          <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h3 className="font-display font-bold text-xl text-black mb-4">Los 5 Pasos Clave</h3>
            <ol className="space-y-3 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">1.</span>
                <span>Toma fotos de calidad de tu artículo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">2.</span>
                <span>Crea un anuncio con título, descripción y precio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">3.</span>
                <span>Espera a que un comprador compre o haga una oferta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">4.</span>
                <span>Envía el paquete con la etiqueta prepagada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-display font-bold text-vinted">5.</span>
                <span>Recibe el dinero en tu monedero Vinted</span>
              </li>
            </ol>
          </div>

          <div className="bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              Consejo VintDress
            </h3>
            <p className="font-body text-white leading-relaxed mb-4">
              Las <strong>fotos en maniquí IA</strong> aumentan tus visitas un 300%. ¡Transforma tus fotos en 30 segundos con VintDress!
            </p>
            <Link
              to="/#generateur"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-vinted border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              PROBAR VINTDRESS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Section 6 - Cómo comprar */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            Cómo Funciona para Comprar
          </h2>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ol className="space-y-4 font-body text-black">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">1</span>
                <div>
                  <strong>Encuentra un artículo</strong> - Usa la búsqueda y los filtros para encontrar lo que buscas
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">2</span>
                <div>
                  <strong>Verifica al vendedor</strong> - Mira las opiniones, número de ventas, antigüedad de la cuenta
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">3</span>
                <div>
                  <strong>Compra o haz una oferta</strong> - Puedes negociar el precio con el vendedor
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">4</span>
                <div>
                  <strong>Paga online</strong> - Tarjeta bancaria, PayPal, Apple Pay...
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-vinted text-white rounded-full flex items-center justify-center font-display font-bold">5</span>
                <div>
                  <strong>Recibe y valida</strong> - Tienes 2 días para validar o reportar un problema
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 7 - Es Vinted fiable */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-6 pb-3 border-b-4 border-black">
            ¿Es Vinted Fiable?
          </h2>

          <div className="bg-cream border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              Protecciones de Vinted
            </h3>
            <ul className="space-y-4 font-body text-black">
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Protección al comprador</strong>: Si el artículo no corresponde a la descripción o no llega, te reembolsan.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Pago seguro</strong>: El dinero se bloquea hasta que el comprador valida la recepción.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Evaluaciones</strong>: Las opiniones de otros usuarios te ayudan a identificar vendedores fiables.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vinted font-bold">•</span>
                <div>
                  <strong>Soporte al cliente</strong>: Un equipo está disponible para resolver disputas.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¿Listo para Empezar en Vinted?
          </h3>
          <p className="font-body text-white mb-6">
            Ahora que sabes cómo funciona, ¡impulsa tus ventas con fotos profesionales!
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
                ¿Es gratis la aplicación Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sí, la aplicación es 100% gratuita para descargar y usar. Vinted no cobra comisión por las ventas. Solo los compradores pagan una protección (5% + 0,70€).
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cómo creo una cuenta Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Descarga la app en iOS o Android, haz clic en "Registrarse" y usa tu email o una cuenta de Google/Facebook/Apple. ¡Es instantáneo!
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Es seguro Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                Sí, Vinted ofrece protección al comprador que te reembolsa si el artículo no corresponde. El pago es seguro y el dinero se bloquea hasta que se confirma la recepción.
              </div>
            </details>

            <details className="bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
              <summary className="p-5 font-display font-bold text-black cursor-pointer hover:bg-cream transition-colors">
                ¿Cuánto se puede ganar en Vinted?
              </summary>
              <div className="px-5 pb-5 font-body text-black border-t-3 border-black">
                ¡Depende de lo que vendas! Algunos vendedores ganan unas decenas de euros al mes, otros varios cientos. Con buenas fotos y precios competitivos, puedes vender rápidamente.
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
              { slug: "como-vender-en-vinted", title: "Cómo Vender en Vinted" },
              { slug: "como-comprar-en-vinted", title: "Cómo Comprar en Vinted" },
              { slug: "pago-vinted-guia", title: "Pago Vinted: Guía" }
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

export default ComoFuncionaVintedPage;
