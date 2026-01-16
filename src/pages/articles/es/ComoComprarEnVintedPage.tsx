import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Link } from 'react-router-dom';
import {
  Search,
  Eye,
  UserCheck,
  MessageSquare,
  ShoppingCart,
  MapPin,
  Package,
  Shield,
  AlertTriangle,
  CheckCircle,
  Star,
  CreditCard,
  Clock,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';

export default function ComoComprarEnVintedPage() {
  useSEO({
    title: 'Cómo Comprar en Vinted: Guía Completa del Comprador 2026',
    description: 'Guía completa para comprar en Vinted: encontrar ofertas, hacer ofertas, pago seguro y protección del comprador.',
    keywords: 'comprar vinted, compra vinted, como comprar vinted, oferta vinted, comprador vinted, ofertas vinted',
    canonicalUrl: 'https://vintdress.com/es/articles/como-comprar-en-vinted',
    ogImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
  });

  return (
    <div className="min-h-screen bg-grain">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vinted text-white px-4 py-2 font-display font-bold text-sm border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              GUÍA
            </span>
            <span className="text-gray-600 font-medium">9 min de lectura</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6 leading-tight">
            Cómo Comprar en Vinted: Guía Completa del Comprador 2026
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            ¿Quieres encontrar ofertas en Vinted pero no sabes por dónde empezar?
            Esta guía te muestra cómo encontrar las mejores piezas, negociar inteligentemente
            y comprar con seguridad.
          </p>

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop"
            alt="Compras en Vinted"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </header>

        {/* Table of contents */}
        <nav className="bg-white border-4 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-xl mb-4">En este artículo</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#encontrar" className="hover:text-vinted transition-colors">1. Encontrar el artículo correcto</a></li>
            <li><a href="#analizar" className="hover:text-vinted transition-colors">2. Analizar un anuncio</a></li>
            <li><a href="#verificar" className="hover:text-vinted transition-colors">3. Verificar al vendedor</a></li>
            <li><a href="#oferta" className="hover:text-vinted transition-colors">4. Hacer una oferta</a></li>
            <li><a href="#proceso" className="hover:text-vinted transition-colors">5. Proceso de compra</a></li>
            <li><a href="#mano" className="hover:text-vinted transition-colors">6. Compra en mano</a></li>
            <li><a href="#recepcion" className="hover:text-vinted transition-colors">7. Recepción y validación</a></li>
            <li><a href="#proteccion" className="hover:text-vinted transition-colors">8. Protección del comprador</a></li>
            <li><a href="#problemas" className="hover:text-vinted transition-colors">9. Problemas comunes</a></li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-display font-bold text-2xl mb-4">¿Por qué comprar en Vinted?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Ahorra hasta un 90%</strong> sobre precios de tienda</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Moda sostenible</strong>: da una segunda vida a la ropa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Piezas únicas</strong>: vintage, ediciones limitadas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Protección al comprador</strong>: reembolso garantizado</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 1 */}
        <section id="encontrar" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">1. Encontrar el artículo correcto</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Con millones de artículos en Vinted, saber buscar eficientemente es esencial.
              Así es cómo encontrar exactamente lo que buscas.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Usa los filtros eficientemente</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Categoría:</strong> Mujer, Hombre, Niños, Hogar...</li>
                <li><strong>Talla:</strong> Sé preciso con tu talla habitual</li>
                <li><strong>Marca:</strong> Busca por marca específica</li>
                <li><strong>Estado:</strong> Nuevo, Muy bueno, Bueno, Satisfactorio</li>
                <li><strong>Precio:</strong> Define un presupuesto mín/máx</li>
                <li><strong>Color:</strong> Filtra por color deseado</li>
                <li><strong>Ubicación:</strong> Para entregas en mano</li>
              </ul>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Consejos de búsqueda pro</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Guarda tus búsquedas:</strong> Activa las notificaciones</li>
                <li><strong>Sigue a vendedores:</strong> Sigue a los que tienen buen estilo</li>
                <li><strong>Palabras clave precisas:</strong> "Zara blazer negro talla M"</li>
                <li><strong>Variaciones ortográficas:</strong> Busca también errores comunes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="analizar" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">2. Analizar un anuncio</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Antes de comprar, tómate el tiempo para examinar el anuncio en detalle.
              Un buen análisis te evita sorpresas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Verificar las fotos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Fotos claras y bien iluminadas</li>
                  <li>Múltiples ángulos (frente, espalda, detalles)</li>
                  <li>Fotos de los defectos mencionados</li>
                  <li>Etiqueta visible (talla, composición)</li>
                  <li>Fotos reales (no de stock)</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Leer la descripción</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Estado real detallado</li>
                  <li>Medidas precisas (si disponibles)</li>
                  <li>Razón de la venta</li>
                  <li>Defectos honestamente mencionados</li>
                  <li>Material y cuidados</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">¡No dudes en preguntar!</h4>
                  <p className="text-gray-700">
                    Si falta información, contacta al vendedor. Pide fotos adicionales,
                    medidas exactas o el estado de ciertos detalles. Un buen vendedor responderá rápido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="verificar" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">3. Verificar al vendedor</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              El perfil del vendedor dice mucho sobre la fiabilidad de la transacción.
              Estos son los indicadores a verificar.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Indicadores de confianza</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span><strong>Valoraciones:</strong> Nota media (busca 4.5+)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-vinted" />
                  <span><strong>Ventas:</strong> Número de transacciones exitosas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span><strong>Antigüedad:</strong> Tiempo en Vinted</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span><strong>Reactividad:</strong> Tiempo de respuesta medio</span>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Señales de alarma</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Cuenta nueva sin valoraciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Muchas valoraciones negativas recientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>No responde a los mensajes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Precios demasiado buenos para ser verdad (falsificaciones)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Pide pago fuera de Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="oferta" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">4. Hacer una oferta</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              ¡Negociar es parte de Vinted! Pero hay reglas que seguir
              para una negociación exitosa.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Cuándo negociar</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Artículo publicado hace tiempo</li>
                  <li>Precio por encima del mercado</li>
                  <li>Pequeño defecto mencionado</li>
                  <li>Compra de varios artículos</li>
                </ul>
              </div>

              <div className="bg-pink-pastel border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Cuándo comprar directo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Precio ya muy atractivo</li>
                  <li>Artículo muy demandado</li>
                  <li>Muchos "favoritos"</li>
                  <li>"Precio fijo" en el anuncio</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Reglas de oro de la negociación</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Sé educado:</strong> "Hola, ¿sería posible hacer X€?"</li>
                <li><strong>2. Sé razonable:</strong> 10-20% de descuento máximo</li>
                <li><strong>3. Justifica tu oferta:</strong> "He visto un artículo similar a este precio"</li>
                <li><strong>4. Propón un pack:</strong> "Me llevo los 2 si haces un precio"</li>
                <li><strong>5. Acepta el rechazo:</strong> No negocies eternamente</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="proceso" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">5. Proceso de compra</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">1</span>
                  <h3 className="font-display font-bold text-xl">Haz clic en "Comprar"</h3>
                </div>
                <p className="text-gray-700">
                  Haz clic en el botón "Comprar" en el anuncio. También puedes aceptar una oferta
                  del vendedor o hacer una contraoferta.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">2</span>
                  <h3 className="font-display font-bold text-xl">Elige el envío</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Selecciona tu método de envío preferido:
                </p>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>Punto de recogida</li>
                  <li>Entrega a domicilio</li>
                  <li>Envío express</li>
                  <li>Entrega en mano</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">3</span>
                  <h3 className="font-display font-bold text-xl">Pago seguro</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Paga con tu método de pago preferido:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Tarjeta</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">PayPal</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Apple Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Google Pay</span>
                  <span className="bg-gray-100 px-3 py-1 rounded border-2 border-black text-sm">Saldo Vinted</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-vinted text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-black">4</span>
                  <h3 className="font-display font-bold text-xl">Seguimiento del pedido</h3>
                </div>
                <p className="text-gray-700">
                  Sigue el envío en la app. Recibirás notificaciones en cada etapa:
                  enviado, en tránsito, entregado. El vendedor tiene 5 días para enviar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="mano" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">6. Compra en mano</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              La entrega en mano evita los gastos de envío, pero requiere algunas precauciones.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Ventajas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Sin gastos de envío</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Ver el artículo antes de comprar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Transacción inmediata</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Probártelo si es posible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">Precauciones de seguridad</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Lugar público y concurrido</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>De día preferentemente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Avisa a alguien</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Verifica el artículo in situ</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Lugares recomendados</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Estación</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Centro comercial</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Cafetería</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Metro/Bus</span>
                <span className="bg-mint px-4 py-2 rounded border-2 border-black">Plaza pública</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="recepcion" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">7. Recepción y validación</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Al recibir el paquete</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Verifica el embalaje:</strong> ¿Paquete dañado? Anótalo antes de abrir</li>
                <li><strong>2. Graba la apertura:</strong> En caso de disputa, es una prueba</li>
                <li><strong>3. Compara con el anuncio:</strong> ¿Estado, color, talla como se describía?</li>
                <li><strong>4. Prueba el artículo:</strong> Verifica talla y defectos</li>
              </ol>
            </div>

            <div className="bg-pink-pastel border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold mb-2">Tienes 2 días para validar</h4>
                  <p className="text-gray-700">
                    Después de recibir, tienes 2 días para validar el pedido o reportar un problema.
                    Pasado este plazo, el pedido se valida automáticamente y el vendedor recibe el dinero.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mint border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Dejar una valoración</h3>
              <p className="text-gray-700 mb-3">
                Después de validar, deja una valoración honesta. ¡Ayuda a otros compradores!
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-2 text-gray-700">= Transacción perfecta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="proteccion" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">8. Protección del comprador</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Vinted ofrece protección al comprador que cubre la mayoría de problemas.
              Cuesta el 5% del precio + una tarifa fija por transacción.
            </p>

            <div className="bg-white border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Qué está cubierto</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Artículo no recibido</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Artículo muy diferente a la descripción</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Artículo dañado durante el envío</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Falsificación confirmada</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-4 border-black p-6 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4">Cómo abrir una disputa</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Ve a "Mis compras" y selecciona el pedido</li>
                <li><strong>2.</strong> Haz clic en "Tengo un problema"</li>
                <li><strong>3.</strong> Selecciona el tipo de problema</li>
                <li><strong>4.</strong> Añade fotos/pruebas</li>
                <li><strong>5.</strong> Describe el problema con precisión</li>
                <li><strong>6.</strong> Espera la respuesta del soporte (48-72h)</li>
              </ol>
            </div>

            <div className="bg-red-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display font-bold text-xl mb-4 text-red-700">Qué NO está cubierto</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Ya no te gusta el artículo (cambio de opinión)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>La talla no te queda (si estaba bien indicada)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Defectos mencionados en el anuncio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">&#x2717;</span>
                  <span>Entrega en mano sin pago por Vinted</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section id="problemas" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-vinted p-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold">9. Problemas comunes</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"No puedo comprar"</h3>
                <p className="text-gray-700 mb-3">Posibles soluciones:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Verifica tu conexión a internet</li>
                  <li>Actualiza la app de Vinted</li>
                  <li>Verifica que tu método de pago sea válido</li>
                  <li>Asegúrate de que el artículo siga disponible</li>
                  <li>Prueba desde otro dispositivo</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"Mi pago fue rechazado"</h3>
                <p className="text-gray-700 mb-3">Posibles causas:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Fondos insuficientes</li>
                  <li>Tarjeta caducada o bloqueada</li>
                  <li>Límite de pago alcanzado</li>
                  <li>3D Secure no activado</li>
                  <li>Prueba otro método de pago</li>
                </ul>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-xl mb-4">"El artículo no coincide"</h3>
                <p className="text-gray-700 mb-3">Qué hacer:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>No valides el pedido</li>
                  <li>Toma fotos del problema</li>
                  <li>Abre una disputa en 2 días</li>
                  <li>Contacta al vendedor para encontrar solución</li>
                  <li>El soporte de Vinted decidirá si es necesario</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Checklist del comprador inteligente
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>¿Fotos claras y detalladas?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>¿Descripción completa?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>¿Vendedor bien valorado (4.5+)?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>¿Precio coherente con el mercado?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>¿Preguntas hechas si hay duda?</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 border-2 border-white bg-white/20 rounded"></div>
                <span>¿Pago solo por Vinted?</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">Artículos relacionados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/es/articles/pago-vinted-guia"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Pago Vinted</h3>
                  <p className="text-gray-600 text-sm">Todo sobre pagos y retiros</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
            <Link
              to="/es/articles/como-vender-en-vinted"
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-vinted" />
                <div>
                  <h3 className="font-display font-bold">Cómo vender en Vinted</h3>
                  <p className="text-gray-600 text-sm">Guía completa del vendedor</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" />
              </div>
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-mint border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-display font-bold mb-4">¿Listo para encontrar gangas?</h2>
            <p className="text-gray-700 mb-6">
              Con estos consejos, tienes todas las claves para comprar inteligentemente en Vinted.
              Tómate tu tiempo, verifica bien los anuncios y no dudes en hacer preguntas
              a los vendedores. ¡Buena caza!
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl">🛍️</span>
              <span className="font-display font-bold text-lg">¡Felices compras!</span>
            </div>
          </div>
        </section>

        <ArticleNavigation />
      </article>
    </div>
  );
}
