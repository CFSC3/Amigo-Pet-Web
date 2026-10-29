import React from 'react';
import { Heart, Map, Sparkles, Calendar } from 'lucide-react';
import { FEATURES_LIST, FeatureItem } from '@/constants/landingData';

const renderIcon = (iconName: FeatureItem['iconName'], color: string) => {
  switch (iconName) {
    case 'heart':
      return <Heart className="w-6 h-6" style={{ color }} />;
    case 'map':
      return ;
    case 'sparkles':
      return <Sparkles className="w-6 h-6" style={{ color }} />;
    case 'calendar':
      return <Calendar className="w-6 h-6" style={{ color }} />;
  }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white border-y border-[#C5CBD3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#2A9D8F]/10 text-xs font-extrabold uppercase tracking-wider text-[#2A9D8F]">
            Por que instalar o Amigo Pet?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D3142]">
            Mais que um aplicativo, uma rede de proteção e carinho
          </h2>
          <p className="text-base text-[#2D3142]/75 font-medium">
            Criamos um lugar leve e fácil de usar para que nenhum tutor se sinta sozinho na hora de cuidar do seu companheiro e nenhum bichinho fique sem apoio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES_LIST.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl p-7 border border-[#C5CBD3]/60 hover:border-[#F6A800] transition-all bg-[#FDFBF7] flex flex-col sm:flex-row gap-5 items-start shadow-xs hover:shadow-md"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundColor: feature.bgTint }}
              >
                {renderIcon(feature.iconName, feature.accentColor)}
              </div>
              <div className="space-y-2">
                <span
                  className="text-xs font-extrabold uppercase tracking-wider"
                  style={{ color: feature.accentColor }}
                >
                  {feature.tag}
                </span>
                <h3 className="text-xl font-black text-[#2D3142]">{feature.title}</h3>
                <p className="text-sm text-[#2D3142]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};