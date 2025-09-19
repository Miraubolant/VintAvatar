import React, { useState, useEffect } from 'react';
import { User, Shirt, Camera } from 'lucide-react';

export const AnimatedAvatar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { icon: Camera, label: 'Import photo', color: 'bg-blue-500' },
    { icon: User, label: 'Génération avatar', color: 'bg-purple-500' },
    { icon: Shirt, label: 'Application vêtement', color: 'bg-teal-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-md mx-auto">
      {/* Phone mockup */}
      <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
        <div className="bg-white rounded-2xl p-6 aspect-[9/16]">
          {/* Status bar */}
          <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
            <span>9:41</span>
            <span>●●●</span>
          </div>

          {/* App header */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">AvatarVint</h3>
            <p className="text-sm text-gray-500">Générateur d'avatar</p>
          </div>

          {/* Avatar preview area */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-square mb-6 flex items-center justify-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-400/20 "></div>
            
            {/* Avatar silhouette */}
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full flex items-center justify-center ">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 ">
              <Shirt className="w-6 h-6 text-teal-500" />
            </div>
            <div className="absolute bottom-4 left-4 " style={{ animationDelay: '1s' }}>
              <Camera className="w-6 h-6 text-purple-500" />
            </div>
          </div>

          {/* Steps indicator */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    isActive 
                      ? 'bg-gradient-to-r from-teal-100 to-purple-100 scale-105' 
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.color} ${isActive ? '' : ''}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-sm font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.label}
                  </span>
                  {isActive && (
                    <div className="flex-1 text-right">
                      <div className="inline-block w-2 h-2 bg-teal-500 rounded-full "></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium ">
        Gratuit
      </div>
      <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium " style={{ animationDelay: '1s' }}>
        2 min
      </div>
    </div>
  );
};