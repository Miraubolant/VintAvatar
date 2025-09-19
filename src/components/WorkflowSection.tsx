import React from 'react';
import { Upload, Settings, Wand2, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Import',
    description: 'Copiez un lien Vinted ou uploadez votre photo',
    details: ['Lien URL Vinted', 'Upload direct', 'Formats: JPG, PNG']
  },
  {
    icon: Settings,
    title: 'Personnalisation',
    description: 'Ajustez la morphologie et les paramètres',
    details: ['Taille corporelle', 'Posture', 'Style vestimentaire']
  },
  {
    icon: Wand2,
    title: 'Génération IA',
    description: 'Notre IA crée votre avatar anonyme',
    details: ['Masquage automatique', 'Rendu réaliste', 'Anonymat garanti']
  },
  {
    icon: Download,
    title: 'Export',
    description: 'Téléchargez votre avatar haute qualité',
    details: ['Format HD', 'Optimisé Vinted', 'Utilisation immédiate']
  }
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour créer vos avatars parfaits
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-purple-200 to-teal-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="text-center group">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-purple-500 text-white font-bold text-lg rounded-full mb-4 group- ">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg ">
                    <Icon className="w-6 h-6 text-teal-600 />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1 text-sm text-gray-500">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-teal-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform  200">
            Essayer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};