import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Heart, Store } from 'lucide-react';
import { PARTNER_TIERS } from '@/constants/landingData';

export const B2BSection: React.FC = () => {
  return (
    <section
      id="parceiros"
      className="py-16 lg:py-24 bg-gradient-to-b from-[#FDFBF7] to-[#FFF5D6]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#F6A800]/20 text-xs font-extrabold uppercase tracking-wider text-[#C26710]">
            Portal Web Integrado ao App
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D3142]">
            Sua ONG, Clínica ou Pet Shop direto no Mapa do Aplicativo
          </h2>
          <p className="text-base text-[#2D3142]/75 font-medium">
            Não precisa mexer pelo celular: crie sua conta aqui pelo site, cadastre seu endereço e publique seus eventos. Tudo aparece automaticamente no aplicativo para os tutores da sua cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PARTNER_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 border-2 flex flex-col justify-between bg-white shadow-xl transition-all ${
                tier.isFree ? 'border-[#2A9D8F]' : 'border-[#F6A800]'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${
                      tier.isFree
                        ? 'bg-red-50 text-red-600'
                        : 'bg-[#FFF176]/60 text-[#C26710]'
                    }`}
                  >
                    {tier.isFree ? <Heart className="w-3.5 h-3.5 fill-current" /> : <Store className="w-3.5 h-3.5" />}
                    {tier.badge}
                  </span>

                  <span
                    className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      tier.isFree
                        ? 'bg-[#2A9D8F] text-white'
                        : 'bg-[#F6A800] text-white'
                    }`}
                  >
                    {tier.priceTag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#2D3142]">{tier.title}</h3>
                  <p className="text-sm text-[#2D3142]/75 mt-1">{tier.subtitle}</p>
                </div>

                <div
                  className={`p-3.5 rounded-2xl text-xs font-bold ${
                    tier.isFree
                      ? 'bg-[#2A9D8F]/10 text-[#2A9D8F]'
                      : 'bg-[#F9C74F]/25 text-[#C26710]'
                  }`}
                >
                  {tier.highlightText}
                </div>

                <ul className="space-y-3 pt-1">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm font-medium text-[#2D3142]">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          tier.isFree ? 'text-[#2A9D8F]' : 'text-[#F6A800]'
                        }`}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href={`/cadastro?tipo=${tier.isFree ? 'ONG' : 'VET'}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-black transition-all shadow-md ${
                    tier.isFree
                      ? 'bg-[#2A9D8F] text-white hover:opacity-95'
                      : 'bg-[#F6A800] text-white hover:bg-[#C26710]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};