import React from 'react';
import Link from 'next/link';
import { PawPrint, Smartphone, Store } from 'lucide-react';
import { APP_CONFIG } from '@/constants/landingData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#F6A800]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Identidade Amigo Pet */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F6A800] to-[#C26710] flex items-center justify-center text-white shadow-md shadow-[#F6A800]/25 group-hover:scale-105 transition-transform">
            <PawPrint className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-[#2D3142]">
              {APP_CONFIG.name}
            </span>
            <span className="block text-xs font-bold text-[#C26710]">
              Adoção, Comunidade & Mapa Pet
            </span>
          </div>
        </Link>

        {/* Navegação Rápida */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#2D3142]/80">
          <a href="#inicio" className="hover:text-[#C26710] transition-colors">
            Conheça o App
          </a>
          <a href="#como-funciona" className="hover:text-[#C26710] transition-colors">
            O que tem no Amigo Pet
          </a>
          <a href="#parceiros" className="hover:text-[#C26710] transition-colors">
            Para ONGs e Pet Shops
          </a>
        </nav>

        {/* Botões sem sigla técnica */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#2A9D8F] bg-[#2A9D8F]/10 hover:bg-[#2A9D8F] hover:text-white transition-all"
          >
            <Store className="w-4 h-4" />
            <span>Área de Parceiros</span>
          </Link>

          <a
            href={APP_CONFIG.downloadUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold bg-[#F6A800] text-white hover:bg-[#C26710] shadow-md shadow-[#F6A800]/25 transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>Baixar Aplicativo</span>
          </a>
        </div>
      </div>
    </header>
  );
};