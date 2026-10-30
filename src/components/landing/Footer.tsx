import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Mail } from 'lucide-react';
import { APP_CONFIG } from '@/constants/landingData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3142] text-white pt-16 pb-8 border-t border-[#1E202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: Logo, Missão e Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          
          {/* Coluna 1: A Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative bg-white/10 rounded-xl p-1">
                 <Image src={APP_CONFIG.logoUrl} alt="Logo Amigo Pet" fill className="object-contain" />
              </div>
              <span className="font-black text-xl">{APP_CONFIG.name}</span>
            </div>
            <p className="text-sm text-[#C5CBD3] leading-relaxed pr-4">
              Mais que um aplicativo, uma rede de proteção e carinho. Conectamos tutores a adoções solidárias e profissionais do mundo pet.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col space-y-3">
            <span className="font-extrabold text-[#F9C74F] text-xs uppercase tracking-wider mb-2">Acesso Rápido</span>
            <a href="#inicio" className="text-sm text-[#C5CBD3] hover:text-white transition-colors">Início</a>
            <a href="#como-funciona" className="text-sm text-[#C5CBD3] hover:text-white transition-colors">Funcionalidades do App</a>
            <Link href="/login" className="text-sm text-[#C5CBD3] hover:text-white transition-colors">Portal para Empresas e ONGs</Link>
            <a href={APP_CONFIG.downloadUrl} download className="inline-flex items-center gap-1.5 text-sm text-[#F6A800] font-bold hover:underline mt-1">
              <Smartphone className="w-4 h-4" /> Baixar no Celular
            </a>
          </div>

          {/* Coluna 3: Institucional e Contato */}
          <div className="flex flex-col space-y-3">
            <span className="font-extrabold text-[#F9C74F] text-xs uppercase tracking-wider mb-2">Institucional</span>
            <Link href="/privacidade" className="text-sm text-[#C5CBD3] hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="text-sm text-[#C5CBD3] hover:text-white transition-colors">Termos de Uso</Link>
            
            <div className="pt-3 space-y-2 mt-2 border-t border-white/10">
              <a href="mailto:contato@amigopet.com.br" className="inline-flex items-center gap-2 text-sm text-[#C5CBD3] hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> contato@amigopet.com
              </a>
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Direitos Autorais */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-[#C5CBD3]/60 gap-4">
          <p>© {currentYear} {APP_CONFIG.name}. Todos os direitos reservados.</p>
          <p>Manaus, AM - Brasil</p>
        </div>

      </div>
    </footer>
  );
};