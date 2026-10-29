import React from 'react';
import Link from 'next/link';
import { PawPrint, Smartphone } from 'lucide-react';
import { APP_CONFIG } from '@/constants/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D3142] text-white py-12 border-t border-[#1E202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F6A800] flex items-center justify-center text-white">
            <PawPrint className="w-5 h-5" />
          </div>
          <div>
            <span className="font-black text-base">{APP_CONFIG.name}</span>
            <p className="text-xs text-[#C5CBD3]">
              Adoção solidária, comunidade pet e mapa da sua cidade.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#C5CBD3]">
          <a href="#inicio" className="hover:text-[#F9C74F] transition-colors">
            Início
          </a>
          <a href="#como-funciona" className="hover:text-[#F9C74F] transition-colors">
            Funcionalidades
          </a>
          <Link href="/login" className="hover:text-[#F9C74F] transition-colors">
            Entrar como Parceiro
          </Link>
          <a
            href={APP_CONFIG.downloadUrl}
            download
            className="inline-flex items-center gap-1.5 text-[#F9C74F] hover:underline"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Baixar no Celular</span>
          </a>
        </div>
      </div>
    </footer>
  );
};