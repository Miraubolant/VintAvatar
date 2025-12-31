import React from 'react';
import { useSEO } from '../../../hooks/useSEO';
import { ArticleNavigation } from '../../../components/ArticleNavigation';
import { Palette, Image, FileText, Users, TrendingUp, Calendar, Lightbulb, Award, CheckCircle, X, Star } from 'lucide-react';

export default function IdentidadVisualVintedPage() {
  useSEO({
    title: "Crear una Identidad Visual que Triunfe en Vinted | Guía Completa",
    description: "Aprende a crear una identidad visual fuerte en Vinted para destacarte. Fotos coherentes, descripciones, branding. Guía completa.",
    keywords: "identidad visual vinted, branding vinted, tienda vinted profesional, destacar en vinted, fotos coherentes vinted",
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Image Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 h-[400px] overflow-hidden border-b-4 border-black">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop"
          alt="Crear una Identidad Visual en Vinted"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
              Crear una Identidad Visual que Triunfe
            </h1>
            <p className="font-display text-xl md:text-2xl text-white">
              Guía Completa Vinted
            </p>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ArticleNavigation />

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-display font-semibold">
            <span className="bg-vinted border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
              Estrategia
            </span>
            <span className="text-black">1 de diciembre de 2025</span>
            <span className="text-black">•</span>
            <span className="text-black">8 min de lectura</span>
            <span className="text-black">•</span>
            <span className="text-black">Por Julie Renard</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Identidad Visual', 'Branding', 'Vinted', 'Marketing', 'Estrategia'].map((tag) => (
              <span
                key={tag}
                className="bg-mint border-2 border-black px-3 py-1 text-sm font-display font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg leading-relaxed mb-6">
            En Vinted, miles de vendedores ofrecen artículos similares. ¿Cómo destacar?
            La respuesta: una identidad visual fuerte y coherente que transforme tu perfil en una verdadera marca.
          </p>

          <div className="bg-vinted border-3 border-black p-6 mb-6">
            <h2 className="font-display font-bold text-2xl text-white mb-4">Por Qué la Identidad Visual lo Cambia Todo</h2>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-3">Impacto medido:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Perfiles coherentes', value: '+180% de seguidores' },
                  { label: 'Confianza del comprador', value: '+65%' },
                  { label: 'Precios aceptados más altos', value: '+25%' },
                  { label: 'Tasa de retorno del cliente', value: 'x3' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-cream border-2 border-black p-3">
                    <span className="font-semibold">{stat.label}</span>
                    <span className="text-vinted font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-pink-pastel/30 border-3 border-black p-6 italic">
            <p className="font-semibold text-lg">
              "Prefiero comprar a alguien que tiene fotos profesionales, inspira confianza"
            </p>
            <p className="text-sm mt-2">— Estudio comportamiento Vinted 2024</p>
          </div>
        </div>

        {/* Los 3 Pilares */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Los Pilares de una Identidad Visual Fuerte</h2>

          {/* Pilier 1 : Cohérence Photographique */}
          <div className="bg-vinted/10 border-3 border-black p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-vinted border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl">1. Coherencia Fotográfica</h3>
            </div>

            <p className="mb-4">
              <strong>El secreto de los mejores vendedores:</strong> Todas sus fotos tienen el mismo "aspecto".
            </p>

            <div className="bg-white border-2 border-black p-6">
              <h4 className="font-semibold mb-3">Solución simple con nuestra IA:</h4>
              <ul className="space-y-2">
                {[
                  'Mismo estilo de maniquí para todos tus artículos',
                  'Iluminación idéntica (nuestra IA garantiza la coherencia)',
                  'Poses similares y profesionales',
                  'Fondos uniformes'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-mint border-2 border-black p-4 mt-4">
                <p className="font-semibold">
                  Resultado: Una cuadrícula de artículos visualmente armoniosa que invita a navegar.
                </p>
              </div>
            </div>
          </div>

          {/* Pilier 2 : Palette de Couleurs */}
          <div className="bg-pink-pastel/30 border-3 border-black p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-pastel border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl">2. Paleta de Colores</h3>
            </div>

            <p className="mb-4"><strong>Elige 2-3 colores máximo:</strong></p>
            <ul className="space-y-1 ml-4 mb-6">
              <li>• Un color principal (tu "firma")</li>
              <li>• Un color secundario (complemento)</li>
              <li>• Un color neutro (blanco, beige, gris)</li>
            </ul>

            <h4 className="font-semibold mb-3">Ejemplos de paletas que funcionan:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { name: 'Minimalista', colors: 'Blanco, negro, gris claro' },
                { name: 'Bohemio', colors: 'Beige, terracota, crema' },
                { name: 'Moderno', colors: 'Blanco, rosa pastel, dorado' },
                { name: 'Atrevido', colors: 'Negro, plata, burdeos' }
              ].map((palette) => (
                <div key={palette.name} className="bg-white border-2 border-black p-3">
                  <p className="font-semibold">{palette.name}</p>
                  <p className="text-sm text-gray-600">{palette.colors}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pilier 3 : Style d'Écriture */}
          <div className="bg-mint/50 border-3 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-mint border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl">3. Estilo de Escritura</h3>
            </div>

            <p className="mb-3"><strong>Adopta un tono reconocible:</strong></p>
            <div className="grid md:grid-cols-2 gap-2 mb-4">
              <span>• Formal y experto</span>
              <span>• Desenfadado y amigable</span>
              <span>• Entusiasta y descriptivo</span>
              <span>• Minimalista y factual</span>
            </div>

            <div className="bg-white border-2 border-black p-4">
              <p className="font-semibold">Mantén la coherencia en todos tus anuncios.</p>
            </div>
          </div>
        </div>

        {/* Guide Pratique */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-vinted border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl">Guía Práctica: Crear tu Marca Vinted</h2>
          </div>

          <div className="space-y-6">
            {/* Étape 1 */}
            <div className="bg-vinted/10 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">1</span>
                <h3 className="font-display font-bold text-xl">Define tu Posicionamiento</h3>
              </div>

              <p className="font-semibold mb-3">Preguntas que hacerte:</p>
              <ul className="space-y-1 ml-4 mb-4">
                <li>• ¿Qué tipo de ropa vendo principalmente?</li>
                <li>• ¿Cuál es mi público objetivo (edad, estilo, presupuesto)?</li>
                <li>• ¿Qué me diferencia?</li>
                <li>• ¿Qué ambiente quiero transmitir?</li>
              </ul>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-semibold mb-2">Ejemplos de posicionamientos:</p>
                <ul className="space-y-1 text-sm">
                  <li>• "La tienda preppy chic para estudiantes"</li>
                  <li>• "Vintage de calidad para treintañeros"</li>
                  <li>• "Moda responsable y accesible"</li>
                  <li>• "Lujo de segunda mano autentificado"</li>
                </ul>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">2</span>
                <h3 className="font-display font-bold text-xl">Crea tu Plantilla de Foto</h3>
              </div>

              <p className="font-semibold mb-3">Usa nuestra IA para:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Definir un estilo de maniquí coherente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Elegir una pose característica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Seleccionar tu tipo de fondo</span>
                </li>
              </ul>

              <div className="bg-mint border-2 border-black p-4">
                <p className="font-semibold">Consejo profesional:</p>
                <p className="text-sm">Genera varias fotos de prueba y elige las que mejor representen tu estilo.</p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-mint/50 border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">3</span>
                <h3 className="font-display font-bold text-xl">Uniformiza tus Descripciones</h3>
              </div>

              <p className="font-semibold mb-3">Crea una plantilla fija:</p>
              <div className="bg-white border-2 border-black p-4 font-mono text-sm">
                <p>[Emoji característico] [TÍTULO LLAMATIVO]</p>
                <p className="mt-2">[Descripción entusiasta 2 líneas]</p>
                <p className="mt-2">Características:</p>
                <p>[Formato de lista siempre idéntico]</p>
                <p className="mt-2">[Frase de cierre característica]</p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="bg-cream border-3 border-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-vinted text-white font-display font-bold w-10 h-10 flex items-center justify-center border-2 border-black text-xl">4</span>
                <h3 className="font-display font-bold text-xl">Cuida tu Perfil</h3>
              </div>

              <p className="font-semibold mb-3">Elementos clave:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Foto de perfil profesional</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Biografía corta pero impactante</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 mr-2 text-vinted flex-shrink-0 mt-0.5" />
                  <span>Destacar tu especialidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreurs à Éviter */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl mb-6">Errores a Evitar</h2>

          <div className="space-y-4 mb-6">
            {[
              { error: 'Mezclar estilos de foto', desc: 'Algunas en percha, otras puestas, algunas planas' },
              { error: 'Descripciones incoherentes', desc: 'A veces formales, a veces familiares' },
              { error: 'Fotos de calidad variable', desc: 'Excelentes y luego mediocres' },
              { error: 'Fondos diferentes', desc: 'Blanco, parquet, azulejos...' }
            ].map((item, idx) => (
              <div key={idx} className="bg-pink-pastel/30 border-3 border-black p-4">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{item.error}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <p className="font-semibold mb-2">Problema:</p>
              <p className="mb-3">Fotos incoherentes</p>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold text-sm">Solución:</p>
                <p className="text-sm">Usa nuestra IA para regenerar todas tus fotos con el mismo estilo</p>
              </div>
            </div>

            <div className="bg-mint/50 border-3 border-black p-6">
              <p className="font-semibold mb-2">Problema:</p>
              <p className="mb-3">Sin plantilla de descripción</p>
              <div className="bg-white border-2 border-black p-3">
                <p className="font-semibold text-sm">Solución:</p>
                <p className="text-sm">Crea una y copia la estructura</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cas Concrets de Réussite */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-mint border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Casos Concretos de Éxito</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cas 1 */}
            <div className="bg-vinted/10 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-4">Perfil "La Moda Parisina"</h3>

              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Antes:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Fotos variadas, calidad desigual</li>
                    <li>• Descripciones aleatorias</li>
                    <li>• 50 ventas/mes</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Después:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Fotos IA maniquí elegante</li>
                    <li>• Plantilla "chic parisino"</li>
                    <li>• Paleta negro/blanco/rosa empolvado</li>
                  </ul>
                </div>

                <div className="bg-mint border-2 border-black p-3 text-center">
                  <p className="font-display font-bold text-lg">180 ventas/mes</p>
                  <p className="text-sm">Precios medios +30%</p>
                </div>
              </div>
            </div>

            {/* Cas 2 */}
            <div className="bg-pink-pastel/30 border-3 border-black p-6">
              <h3 className="font-display font-bold text-xl mb-4">Perfil "Vintage Corner"</h3>

              <div className="space-y-3">
                <div className="bg-white border-2 border-black p-3">
                  <p className="font-semibold text-sm mb-1">Estrategia:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Fotos IA maniquí estilo retro</li>
                    <li>• Descripciones "storytelling"</li>
                    <li>• Paleta beige/marrón/crema</li>
                  </ul>
                </div>

                <div className="bg-mint border-2 border-black p-3 text-center">
                  <p className="font-display font-bold text-lg">2000 seguidores fieles</p>
                  <p className="text-sm">Comunidad comprometida</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan d'Action 7 Jours */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-pastel border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-3xl">Plan de Acción en 7 Días</h2>
          </div>

          <div className="space-y-3">
            {[
              { jours: 'Día 1-2', action: 'Define tu posicionamiento y tu público objetivo' },
              { jours: 'Día 3', action: 'Elige tu paleta y tu estilo' },
              { jours: 'Día 4-5', action: 'Crea tus plantillas (foto IA + descripción)' },
              { jours: 'Día 6', action: 'Actualiza tu perfil' },
              { jours: 'Día 7', action: 'Empieza a aplicarlo en tus artículos' }
            ].map((etape, idx) => (
              <div key={idx} className="bg-cream border-3 border-black p-4 flex items-center gap-4">
                <span className="bg-vinted text-white font-display font-bold px-4 py-2 border-2 border-black">
                  {etape.jours}
                </span>
                <p className="font-semibold">{etape.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-vinted border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="font-display font-bold text-3xl text-white mb-6">Conclusión</h2>
          <p className="text-white text-lg mb-6">
            Una identidad visual fuerte en Vinted es:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Fotos coherentes gracias a nuestra IA',
              'Descripciones con plantilla',
              'Paleta de colores definida',
              'Tono de comunicación constante',
              'Perfil optimizado'
            ].map((point, idx) => (
              <div key={idx} className="bg-white border-3 border-black p-4 flex items-start gap-3">
                <span className="bg-vinted text-white font-display font-bold w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black">
                  {idx + 1}
                </span>
                <p className="font-semibold pt-1">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-3 border-black p-6 mb-6">
            <p className="font-display font-bold text-2xl text-center">
              Más confianza, más seguidores, más ventas, mejores precios.
            </p>
          </div>

          <a
            href="/es"
            className="inline-block bg-mint border-4 border-black px-8 py-4 font-display font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Crear Mi Identidad Con VintDress
          </a>
        </div>

        {/* Articles Liés */}
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display font-bold text-2xl mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/es/articles/estrategia-venta-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Estrategia de Venta 2025 →</p>
            </a>
            <a
              href="/es/articles/guia-completa-fotos-vinted-2025"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Guía de Fotos 2025 →</p>
            </a>
            <a
              href="/es/articles/vender-vintage-vinted-guia"
              className="bg-cream border-3 border-black p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <p className="font-display font-bold">Vender Vintage →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
