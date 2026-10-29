import React from 'react';
import Link from 'next/link';
import { Smartphone, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '@/constants/landingData';
import { AppShowcaseCarousel } from './AppShowcaseCarousel';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-[#FFF5D6]/60 via-[#FDFBF7] to-[#FDFBF7]"
    >
      {/* Brilhos suaves de fundo com as cores do app */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Mensagem Acolhedora e Humana */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6A800]/15 border border-[#F6A800]/30 text-[#C26710] text-xs font-extrabold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>{APP_CONFIG.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-[#2D3142] leading-[1.12] tracking-tight">
              O ponto de encontro de quem tem{' '}
              <span className="text-[#F6A800] underline decoration-[#F9C74F] decoration-wavy decoration-2 underline-offset-8">
                bicho em casa
              </span>{' '}
              e amor de sobra.
            </h1>

            <p className="text-base sm:text-lg text-[#2D3142]/80 leading-relaxed max-w-2xl font-medium">
              {APP_CONFIG.heroSubtitle}
            </p>

            {/* Destaques Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2D3142]">
                <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                <span>Adote pets ou doe ração e medicamentos</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2D3142]">
                <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                <span>Localize ONGs, clínicas e pet shops no Mapa</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2D3142]">
                <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                <span>Feed interativo para postar seus pets</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2D3142]">
                <CheckCircle2 className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                <span>100% gratuito para ONGs e protetores</span>
              </div>
            </div>

            {/* Botões de Ação Diretos */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={APP_CONFIG.downloadUrl}
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-black bg-[#F6A800] text-white hover:bg-[#C26710] shadow-xl shadow-[#F6A800]/30 transition-all"
              >
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <span className="block leading-none">{APP_CONFIG.primaryCta}</span>
                  <span className="text-[11px] font-semibold opacity-90">
                    Download gratuito para Android
                  </span>
                </div>
              </a>

              <Link
                href="#parceiros"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-extrabold bg-white text-[#2D3142] border-2 border-[#C5CBD3] hover:border-[#2A9D8F] hover:text-[#2A9D8F] shadow-xs transition-all"
              >
                <HeartHandshake className="w-5 h-5 text-[#2A9D8F]" />
                <span>{APP_CONFIG.secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Carrossel Realista de Todas as Abas do App */}
          <div className="lg:col-span-5 flex justify-center">
            <AppShowcaseCarousel />
          </div>

        </div>
      </div>
    </section>
  );
};