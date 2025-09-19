import React from 'react';
import { Shield, Zap, Camera, Download, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Anonymat Total',
    description: 'Votre visage est automatiquement masqué ou coupé pour préserver votre vie privée.',
    color: 'text-green-500'
  },
  {
    icon: Zap,
    title: 'Génération Ultra-Rapide',
    description: 'Obtenez votre avatar en moins de 2 minutes grâce à notre IA avancée.',
    color: 'text-yellow-500'
  },
  {
    icon: Camera,
    title: 'Import Flexible',
    description: 'Importez depuis un lien Vinted ou uploadez directement votre photo.',
    color: 'text-blue-500'
  },
  {
    icon: Sparkles,
    title: 'Personnalisation Avancée',
    description: 'Ajustez la morphologie et les détails pour un rendu parfait.',
    color: 'text-purple-500'
  },
  {
    icon: Download,
    title: 'Export Haute Qualité',
    description: 'Téléchargez vos avatars en HD prêts pour Vinted.',
    color: 'text-teal-500'
  },
  {
    icon: Clock,
    title: 'Sans Inscription',
    description: 'Commencez immédiatement, aucun compte requis pour la première génération.',
    color: 'text-orange-500'
  }
];

export const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              AvatarVint
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La solution la plus simple et rapide pour créer des avatars professionnels 
            qui boostent vos ventes sur Vinted.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg 300"
              >
                <div className={`w-12 h-12 ${feature.color} bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group- `}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};