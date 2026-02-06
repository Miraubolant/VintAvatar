import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Gift, Users, Share2, CreditCard, Star, CheckCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function CreditosGratisVintDressPage() {
  useSEO({
    title: "Creditos Gratis VintDress: Como Usar la IA de Vinted Gratis | VintDress",
    description: "Descubre como obtener creditos gratis en VintDress: programa de referidos y compartir en galeria. Usa el maniqui IA de Vinted sin pagar.",
    keywords: "ia vinted gratis, maniqui ia gratis vinted, creditos gratis vintdress, referidos vinted ia, fotos vinted gratis ia",
  });

  return (
    <div className="min-h-screen bg-grain">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
          alt="Creditos gratis VintDress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 lg:py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-space-grotesk">
            <span className="bg-vinted text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
              CONSEJO
            </span>
            <time className="text-gray-600">6 de Febrero de 2026</time>
            <span className="text-gray-600">5 min de lectura</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold font-space-grotesk mb-6 leading-tight">
            Creditos Gratis VintDress: 2 Metodos para Usar la IA de Vinted sin Pagar
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed font-inter">
            Quieres usar el <strong>maniqui IA de Vinted</strong> sin gastar dinero? VintDress ofrece 2 metodos simples para obtener <strong>creditos gratis</strong>. Descubre como maximizar tus generaciones IA sin pagar.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-start gap-4 mb-6">
            <Gift className="w-8 h-8 text-vinted flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold font-space-grotesk mb-4">
                Por Que VintDress Ofrece Creditos Gratis
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VintDress democratiza el acceso a la <strong>inteligencia artificial para Vinted</strong>. A diferencia de otras herramientas IA, queremos que todos puedan probar nuestro <strong>maniqui virtual</strong> sin barreras financieras.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Implementamos un sistema de <strong>creditos gratis</strong> basado en el compartir y la comunidad. Cada credito = 1 generacion IA completa con nuestro modelo FLUX Kontext Pro.
              </p>
            </div>
          </div>
        </section>

        {/* Metodo 1: Programa de Referidos */}
        <section className="mb-12">
          <div className="bg-mint p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-10 h-10 text-black" />
              <h2 className="text-3xl font-bold font-space-grotesk">
                Metodo 1: Programa de Referidos (+1 credito)
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-vinted" />
                  Como Funciona el Sistema de Referidos
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El programa de referidos de VintDress es simple: <strong>cada persona que invitas = 1 credito gratis para ti + 1 credito gratis para ella</strong>. Es una situacion win-win donde todos ganan.
                </p>
                <div className="bg-white p-6 border-3 border-black rounded-lg">
                  <h4 className="font-bold font-space-grotesk mb-3">Pasos para obtener tus creditos gratis:</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Conectate</strong> a tu cuenta VintDress</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Ve a la <strong>seccion "Afiliacion"</strong> en tu panel de cuenta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Copia tu enlace de referido unico</strong> (con tu codigo personal)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Comparte tu enlace</strong> en redes sociales, WhatsApp, o con tus amigos vendedores Vinted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Cuando alguien <strong>se registra y hace su primera compra</strong> con tu enlace: <strong>+1 credito para ti, +1 credito para el</strong></span>
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3 flex items-center gap-2">
                  <Star className="w-6 h-6 text-vinted" />
                  Consejos para Maximizar tus Referidos
                </h3>
                <ul className="space-y-3 bg-white p-6 border-3 border-black rounded-lg">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Comparte en grupos de vendedores Vinted</strong> en Facebook, Discord o Telegram</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Publica en Instagram/TikTok</strong> mostrando tus resultados antes/despues con tu enlace de referido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Crea un tutorial video</strong> de como usar VintDress y incluye tu codigo de referido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Menciona el credito gratis de bienvenida</strong>: la persona invitada tambien gana +1 credito</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 p-6 border-3 border-black rounded-lg">
                <p className="font-bold font-space-grotesk mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Bonus Ilimitado
                </p>
                <p className="text-gray-700">
                  No hay limite al numero de referidos. Cuantas mas personas invites, mas creditos gratis acumulas. Algunos usuarios obtienen 10+ creditos gratis por mes simplemente compartiendo VintDress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metodo 2: Compartir en Galeria */}
        <section className="mb-12">
          <div className="bg-pink-pastel p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 mb-6">
              <Share2 className="w-10 h-10 text-black" />
              <h2 className="text-3xl font-bold font-space-grotesk">
                Metodo 2: Compartir en la Galeria Publica (+1 credito, max 2)
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-vinted" />
                  Como Funciona la Galeria Publica
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  VintDress tiene una <strong>galeria publica</strong> donde los usuarios pueden compartir sus mejores generaciones IA. Compartir tus fotos ayuda a inspirar a otros vendedores Vinted y a mostrar el potencial de nuestro <Link to="/es/articles/maniqui-ia-vinted" className="text-vinted hover:underline font-semibold">maniqui IA</Link>.
                </p>
                <div className="bg-white p-6 border-3 border-black rounded-lg">
                  <h4 className="font-bold font-space-grotesk mb-3">Pasos para ganar creditos compartiendo:</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Genera una foto</strong> con el maniqui IA de VintDress</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700">En la <strong>pagina de resultados</strong>, haz clic en "Compartir en Galeria"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Anade un titulo descriptivo</strong> para tu foto (ejemplo: "Chaqueta de cuero vintage")</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Confirma el compartir</strong> y recibe inmediatamente <strong>+1 credito gratis</strong></span>
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3 flex items-center gap-2">
                  <Star className="w-6 h-6 text-vinted" />
                  Reglas y Limites del Compartir
                </h3>
                <div className="bg-white p-6 border-3 border-black rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Maximo 2 compartidos por cuenta</strong> - puedes ganar hasta 2 creditos gratis compartiendo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Las fotos deben ser de calidad</strong> - imagenes borrosas o inapropiadas pueden ser eliminadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Titulo obligatorio</strong> - ayuda a otros usuarios a descubrir tu foto en la galeria</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Credito instantaneo</strong> - el credito gratis se anade automaticamente a tu cuenta</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-6 border-3 border-black rounded-lg">
                <p className="font-bold font-space-grotesk mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Consejo Pro
                </p>
                <p className="text-gray-700">
                  Comparte tus <strong>mejores generaciones</strong> - las fotos de alta calidad son mas visibles en la galeria y ayudan a inspirar a la comunidad. Usa el compartir para tus resultados mas impresionantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabla de Comparacion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-space-grotesk mb-6">
            Resumen: Comparacion de Metodos Gratis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <thead className="bg-vinted text-white">
                <tr>
                  <th className="p-4 text-left font-space-grotesk border-b-4 border-black">Metodo</th>
                  <th className="p-4 text-left font-space-grotesk border-b-4 border-black">Creditos por Accion</th>
                  <th className="p-4 text-left font-space-grotesk border-b-4 border-black">Limite</th>
                  <th className="p-4 text-left font-space-grotesk border-b-4 border-black">Dificultad</th>
                </tr>
              </thead>
              <tbody className="font-inter">
                <tr className="border-b-2 border-black">
                  <td className="p-4 font-semibold">Programa de Referidos</td>
                  <td className="p-4">+1 credito (tu) + +1 credito (invitado)</td>
                  <td className="p-4 text-green-600 font-bold">Ilimitado</td>
                  <td className="p-4">Media</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Compartir en Galeria</td>
                  <td className="p-4">+1 credito por foto compartida</td>
                  <td className="p-4 text-orange-600 font-bold">Max 2 compartidos</td>
                  <td className="p-4">Muy Facil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Combinar los Metodos */}
        <section className="mb-12 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold font-space-grotesk mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-vinted" />
            Estrategia Optima: Combinar los 2 Metodos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Para <strong>maximizar tus creditos gratis</strong>, combina los dos metodos:
          </p>
          <ol className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-space-grotesk border-2 border-black">1</span>
              <span className="text-gray-700 mt-1"><strong>Comienza compartiendo 2 fotos en la galeria</strong> - ganas +2 creditos instantaneamente</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-space-grotesk border-2 border-black">2</span>
              <span className="text-gray-700 mt-1"><strong>Comparte tu enlace de referido</strong> en redes sociales y con amigos vendedores Vinted</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-space-grotesk border-2 border-black">3</span>
              <span className="text-gray-700 mt-1"><strong>Usa tus primeros creditos gratis</strong> para generar fotos increibles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-vinted text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-space-grotesk border-2 border-black">4</span>
              <span className="text-gray-700 mt-1"><strong>Muestra tus resultados</strong> para convencer a mas personas a usar tu enlace de referido</span>
            </li>
          </ol>
          <div className="bg-mint p-6 border-3 border-black rounded-lg">
            <p className="font-bold font-space-grotesk mb-2">Resultado Potencial:</p>
            <p className="text-gray-700">
              Con esta estrategia, puedes facilmente obtener <strong>5-10+ creditos gratis</strong> en tu primer mes sin gastar nada. Si compartes activamente tu enlace de referido, algunos usuarios obtienen 20+ creditos por mes.
            </p>
          </div>
        </section>

        {/* Creditos Gratis vs Pago */}
        <section className="mb-12 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold font-space-grotesk mb-4 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-vinted" />
            Cuando Pasar a un Plan de Pago?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los <strong>creditos gratis</strong> son perfectos para probar VintDress y generar tus primeras fotos IA. Pero si vendes regularmente en Vinted, un plan de pago ofrece mejor relacion calidad-precio:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-grain p-6 border-3 border-black rounded-lg">
              <h3 className="font-bold font-space-grotesk mb-3 text-lg">Queda con Creditos Gratis si:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Vendes ocasionalmente (menos de 10 articulos/mes)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Tienes una red activa para compartir referidos
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Usas VintDress solo para articulos especiales
                </li>
              </ul>
            </div>
            <div className="bg-grain p-6 border-3 border-black rounded-lg">
              <h3 className="font-bold font-space-grotesk mb-3 text-lg">Pasa a Plan de Pago si:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  Vendes regularmente (10+ articulos/mes)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  Quieres fotos IA para todos tus articulos
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-vinted flex-shrink-0 mt-0.5" />
                  Necesitas previsibilidad de costos mensuales
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Para mas detalles, consulta nuestra <Link to="/es/articles/ia-foto-vinted-gratis-vs-pago" className="text-vinted hover:underline font-semibold">comparacion completa gratis vs pago</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-space-grotesk mb-6">
            Preguntas Frecuentes sobre Creditos Gratis
          </h2>
          <div className="space-y-4">
            <details className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group">
              <summary className="font-bold font-space-grotesk text-lg list-none flex items-center justify-between">
                Los creditos gratis caducan?
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                No, los <strong>creditos gratis obtenidos via referidos o compartir en galeria nunca caducan</strong>. Puedes acumularlos y usarlos cuando quieras. Sin embargo, los creditos de packs comprados tienen validez de 12 meses, y los creditos de suscripcion mensual se reinician cada mes.
              </p>
            </details>

            <details className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group">
              <summary className="font-bold font-space-grotesk text-lg list-none flex items-center justify-between">
                Puedo combinar creditos gratis con creditos comprados?
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Si, absolutamente. Todos tus creditos (gratis, comprados, mensuales) se <strong>acumulan en tu contador total</strong>. Cuando generas una foto, el sistema usa automaticamente los creditos mas antiguos primero.
              </p>
            </details>

            <details className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group">
              <summary className="font-bold font-space-grotesk text-lg list-none flex items-center justify-between">
                Hay limite de referidos por mes?
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                No hay limite. Puedes invitar <strong>tantas personas como quieras</strong> y ganar +1 credito por cada referido exitoso (persona que se registra y hace su primera compra). Algunos usuarios power generan 20+ creditos por mes compartiendo activamente.
              </p>
            </details>

            <details className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group">
              <summary className="font-bold font-space-grotesk text-lg list-none flex items-center justify-between">
                Por que solo 2 compartidos en galeria?
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                El limite de 2 compartidos evita el spam en la galeria y asegura que <strong>solo las mejores fotos sean compartidas</strong>. Para creditos ilimitados, usa el programa de referidos que recompensa el compartir VintDress con tu red.
              </p>
            </details>

            <details className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group">
              <summary className="font-bold font-space-grotesk text-lg list-none flex items-center justify-between">
                Cuando recibo mis creditos de referido?
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Los creditos de referido se aclaran <strong>inmediatamente cuando tu invitado hace su primera compra</strong> (pack de creditos o suscripcion mensual). Recibes una notificacion y tu contador de creditos se actualiza automaticamente.
              </p>
            </details>

            <details className="bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group">
              <summary className="font-bold font-space-grotesk text-lg list-none flex items-center justify-between">
                Los creditos gratis tienen las mismas funcionalidades que los pagados?
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Si, exactamente las mismas. Un credito = una generacion IA completa con <strong>FLUX Kontext Pro</strong>, sea gratis o pagado. Tienes acceso a todas las opciones de configuracion (genero, carnacion, morfologia, pose, decorado) sin diferencia.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-vinted p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="text-3xl font-bold font-space-grotesk text-white mb-4">
              Listo para Obtener tus Creditos Gratis?
            </h2>
            <p className="text-white text-lg mb-6 font-inter">
              Empieza compartiendo 2 fotos en la galeria (+2 creditos) y luego invita amigos para creditos ilimitados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/galerie"
                className="bg-white text-black px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold font-space-grotesk hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all inline-flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Ver Galeria Publica
              </Link>
              <Link
                to="/tarifs"
                className="bg-mint text-black px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold font-space-grotesk hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all inline-flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Explorar Ofertas
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold font-space-grotesk mb-4">
            Conclusion: Usa VintDress Gratis Inteligentemente
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            VintDress ofrece <strong>multiples maneras de obtener creditos gratis</strong> para usar nuestro <strong>maniqui IA de Vinted</strong> sin pagar. Ya sea compartiendo en la galeria para creditos rapidos o invitando amigos para creditos ilimitados, tienes todas las herramientas para generar fotos IA profesionales gratuitamente.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La clave es <strong>combinar los dos metodos</strong>: usa tus 2 compartidos de galeria para comenzar, luego construye un flujo constante de creditos via referidos. Con una estrategia inteligente, puedes usar VintDress regularmente sin gastar nada.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Y cuando tus ventas Vinted despeguen, siempre puedes <Link to="/tarifs" className="text-vinted hover:underline font-semibold">pasar a un plan de pago</Link> para generaciones ilimitadas. Pero para empezar, los creditos gratis son mas que suficientes para descubrir el poder de la IA para Vinted.
          </p>
        </section>

        {/* Article Navigation */}
        <ArticleNavigation language="es" />
      </article>
    </div>
  );
}
