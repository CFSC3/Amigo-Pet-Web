'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  MessageCircle,
  Heart,
  MessageSquare,
  Plus,
  Home,
  Newspaper,
  MapPin,
  PawPrint,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  Compass,
} from 'lucide-react';
import { APP_SCREENS } from '@/constants/landingData';

export const AppShowcaseCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % APP_SCREENS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentScreen = APP_SCREENS[activeIndex];

  const handleSelectTab = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + APP_SCREENS.length) % APP_SCREENS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % APP_SCREENS.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Seletor rápido de telas acima do celular */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4 bg-white/90 p-1.5 rounded-2xl border border-[#C5CBD3]/60 shadow-sm">
        {APP_SCREENS.map((screen, idx) => (
          <button
            key={screen.id}
            onClick={() => handleSelectTab(idx)}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeIndex === idx
                ? 'bg-[#F6A800] text-white shadow-sm'
                : 'text-[#2D3142]/70 hover:text-[#2D3142] hover:bg-[#FDFBF7]'
            }`}
          >
            {screen.tabLabel}
          </button>
        ))}
      </div>

      {/* Área do Celular + Botões Laterais */}
      <div className="relative flex items-center justify-center">
        {/* Seta Esquerda */}
        <button
          onClick={handlePrev}
          aria-label="Tela anterior"
          className="hidden sm:flex absolute -left-12 z-20 w-10 h-10 rounded-full bg-white border border-[#C5CBD3] items-center justify-center text-[#2D3142] shadow-md hover:bg-[#F6A800] hover:text-white hover:border-[#F6A800] transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Moldura Realista do Smartphone */}
        <div className="w-[310px] sm:w-[330px] h-[630px] bg-[#1E202B] rounded-[2.8rem] p-2.5 shadow-[0_25px_60px_-15px_rgba(30,32,43,0.35)] border-4 border-[#2D3142] relative flex flex-col">
          {/* Câmera Frontal (Notch) */}
          <div className="w-24 h-4 bg-[#1E202B] rounded-b-xl mx-auto absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div className="w-8 h-1 bg-[#2D3142] rounded-full" />
          </div>

          {/* Tela Interna do App */}
          <div className="w-full h-full bg-[#FDFBF7] rounded-[2.2rem] overflow-hidden flex flex-col justify-between relative border border-[#C5CBD3]/40">
            
            {/* CONTEÚDO DINÂMICO DE CADA ABA REAL DO APP */}
            <div className="flex-1 flex flex-col overflow-hidden">
              
              {/* ABA 1: FEED REAL */}
              {currentScreen.id === 'feed' && (
                <div className="flex-1 flex flex-col bg-[#FDFBF7]">
                  {/* Topbar Branca do Feed */}
                  <div className="bg-white pt-6 pb-3 px-4 flex items-center justify-between border-b border-[#C5CBD3]/40">
                    <div className="w-10" />
                    <span className="font-extrabold text-base text-[#5D4037]">Amigo Pet</span>
                    <div className="flex items-center gap-2.5 text-[#2D3142]">
                      <Search className="w-4 h-4" />
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  {/* Lista de Postagens Reais */}
                  <div className="p-3 space-y-3 overflow-y-auto flex-1">
                    {/* Post 1: Gabriel Araújo */}
                    <div className="bg-white rounded-2xl p-3 border border-[#C5CBD3]/50 shadow-xs space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2D3142] to-[#2A9D8F] text-white flex items-center justify-center font-bold text-xs">
                          GA
                        </div>
                        <div className="leading-tight">
                          <p className="text-xs font-extrabold text-[#2D3142]">Gabriel</p>
                          <p className="text-[10px] text-[#2D3142]/60">@Mas_gabri54</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#2D3142] leading-snug">
                        adoro essa recepção quando chego em casa, ele chega quase me derrubando as vezes
                      </p>
                      <div className="h-36 rounded-xl bg-gradient-to-b from-stone-700 to-stone-900 flex flex-col items-center justify-center text-white p-3 relative overflow-hidden">
                        <span className="text-4xl">🐕‍🦺</span>
                        <span className="text-[10px] text-white/80 mt-1 font-medium">
                          Recepção calorosa no portão
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FDFBF7] border border-[#C5CBD3]/60 text-[10px] font-bold text-[#2D3142]">
                          <Heart className="w-3 h-3 text-[#F6A800] fill-[#F6A800]" /> 2
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FDFBF7] border border-[#C5CBD3]/60 text-[10px] font-bold text-[#2D3142]">
                          <MessageSquare className="w-3 h-3 text-[#2D3142]" /> 1
                        </span>
                      </div>
                    </div>

                    {/* Post 2: Higor Ink (Gato Mucura) */}
                    <div className="bg-white rounded-2xl p-3 border border-[#C5CBD3]/50 shadow-xs space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#F6A800]/20 text-[#C26710] flex items-center justify-center font-bold text-xs">
                          VI
                        </div>
                        <div className="leading-tight">
                          <p className="text-xs font-extrabold text-[#2D3142]">Vitor</p>
                          <p className="text-[10px] text-[#2D3142]/60">@vitors123</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#2D3142] leading-snug">
                        olha o tamanho desse gato, nome dele é Mucura, não sei que espécie ele é mas é gigante 😹. Ele é meio besta na verdade e bem carinhoso
                      </p>
                      <div className="h-20 rounded-xl bg-amber-100/70 flex items-center justify-center text-2xl">
                        🐈
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA 2: EVENTOS REAL */}
              {currentScreen.id === 'eventos' && (
                <div className="flex-1 flex flex-col bg-[#FDFBF7]">
                  <div className="bg-white pt-6 pb-3 px-4 text-center border-b border-[#C5CBD3]/40">
                    <span className="font-extrabold text-base text-[#5D4037]">Amigo Pet</span>
                  </div>

                  <div className="p-3.5 space-y-3 flex-1">
                    {/* Card Agro Fest idêntico ao vídeo */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-[#C5CBD3]/60 shadow-sm">
                      <div className="h-36 bg-gradient-to-tr from-amber-800/80 via-amber-600/70 to-emerald-800/70 flex flex-col items-center justify-center text-white relative">
                        <span className="text-5xl">🐎</span>
                        <span className="mt-1 text-[10px] uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full font-bold">
                          Evento na Cidade
                        </span>
                      </div>
                      <div className="p-3.5">
                        <h4 className="font-extrabold text-sm text-[#2D3142]">Agro Fest</h4>
                        <p className="text-xs text-[#2D3142]/70 mt-0.5">Um evento sobre cavalos</p>
                      </div>
                    </div>

                    {/* Segundo Card de Exemplo de Feira de Adoção */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-[#C5CBD3]/60 shadow-sm">
                      <div className="h-28 bg-gradient-to-r from-[#2A9D8F] to-emerald-600 flex flex-col items-center justify-center text-white">
                        <span className="text-4xl">🐶🐱</span>
                      </div>
                      <div className="p-3.5">
                        <h4 className="font-extrabold text-sm text-[#2D3142]">
                          Feira de Adoção & Vacinação
                        </h4>
                        <p className="text-xs text-[#2D3142]/70 mt-0.5">
                          Neste fim de semana • Entrada Gratuita
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA 3: MAPA REAL */}
              {currentScreen.id === 'mapa' && (
                <div className="flex-1 flex flex-col bg-[#FDFBF7]">
                  <div className="bg-white pt-6 pb-3 px-4 text-center border-b border-[#C5CBD3]/40">
                    <span className="font-extrabold text-base text-[#5D4037]">Amigo Pet</span>
                  </div>

                  {/* Chips de Filtro idênticos ao app */}
                  <div className="px-2.5 py-2.5 flex items-center gap-1.5 overflow-x-auto bg-[#FDFBF7]">
                    <span className="px-3 py-1.5 rounded-full bg-[#FFF176] text-[#C26710] font-extrabold text-[10px] shrink-0 shadow-2xs">
                      Todos
                    </span>
                    <span className="px-2.5 py-1.5 rounded-full bg-white border border-[#C5CBD3]/60 text-[#2D3142] font-bold text-[10px] shrink-0 flex items-center gap-1">
                      <span className="text-sky-500">🐾</span> Pet Shops & Vets
                    </span>
                    <span className="px-2.5 py-1.5 rounded-full bg-white border border-[#C5CBD3]/60 text-[#2D3142] font-bold text-[10px] shrink-0 flex items-center gap-1">
                      <span className="text-red-500">❤️</span> Adoção & ONG
                    </span>
                  </div>

                  {/* Mapa simulando as ruas do bairro Alvorada como no vídeo */}
                  <div className="flex-1 relative bg-[#E8ECEF] overflow-hidden">
                    {/* Traçado de ruas estilizado */}
                    <div className="absolute inset-0 opacity-60">
                      <div className="w-full h-3 bg-white absolute top-12 rotate-3" />
                      <div className="w-full h-2 bg-white absolute top-28 -rotate-2" />
                      <div className="w-full h-3 bg-amber-100 border-y border-amber-300 absolute top-44 rotate-6" />
                      <div className="w-full h-2 bg-white absolute bottom-24" />
                      <div className="h-full w-3 bg-white absolute left-16 rotate-6" />
                      <div className="h-full w-2.5 bg-white absolute right-20 -rotate-3" />
                    </div>

                    {/* Botão GPS canto superior direito */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center text-[#2D3142]">
                      <Compass className="w-4 h-4" />
                    </div>

                    {/* Nome do Bairro Centralizado */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                      <span className="text-xs font-black tracking-widest text-slate-600/80 block">
                        ALVORADA
                      </span>
                    </div>

                    {/* Pinos Interativos no Mapa */}
                    <div className="absolute top-16 left-8 bg-white px-2.5 py-1.5 rounded-xl shadow-md border border-red-200 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px]">
                        ❤️
                      </span>
                      <div className="leading-none">
                        <p className="text-[10px] font-extrabold text-[#2D3142]">Casa de Adoção</p>
                        <p className="text-[8px] text-emerald-700 font-bold">ONG • Gratuito</p>
                      </div>
                    </div>

                    <div className="absolute bottom-24 right-6 bg-white px-2.5 py-1.5 rounded-xl shadow-md border border-amber-300 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#F6A800] text-white flex items-center justify-center text-[10px]">
                        🐾
                      </span>
                      <div className="leading-none">
                        <p className="text-[10px] font-extrabold text-[#2D3142]">Clínica & Pet Shop</p>
                        <p className="text-[8px] text-[#C26710] font-bold">Parceiro Verificado</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA 4: ADOÇÕES & DOAÇÕES REAL */}
              {currentScreen.id === 'doacoes' && (
                <div className="flex-1 flex flex-col bg-[#FDFBF7]">
                  {/* Topbar Laranja-Ouro idêntica ao vídeo */}
                  <div className="bg-[#F6A800] pt-6 pb-3 px-4 text-center text-white shadow-xs">
                    <span className="font-extrabold text-base">Adoções & Doações</span>
                  </div>

                  <div className="p-3 space-y-3 flex-1">
                    {/* Caixas de Seleção Estado / Data */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white border border-[#C5CBD3] rounded-xl px-2.5 py-1.5 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] text-[#2D3142]/60 block leading-none">
                            Estado
                          </span>
                          <span className="text-xs font-bold text-[#2D3142]">Amazonas</span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-[#2D3142]/60" />
                      </div>
                      <div className="bg-white border border-[#C5CBD3] rounded-xl px-2.5 py-1.5 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] text-[#2D3142]/60 block leading-none">
                            Data
                          </span>
                          <span className="text-xs font-bold text-[#2D3142]">Recentes</span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-[#2D3142]/60" />
                      </div>
                    </div>

                    {/* Chips de Categorias */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      <span className="px-3 py-1 rounded-full bg-[#FFF176] text-[#C26710] font-extrabold text-[10px] shrink-0">
                        Todas as Categorias
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-stone-200/70 text-[#2D3142]/80 font-bold text-[10px] shrink-0">
                        Alimentação
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-stone-200/70 text-[#2D3142]/80 font-bold text-[10px] shrink-0">
                        Animais
                      </span>
                    </div>

                    {/* Card "Doação de gatinha" idêntico ao vídeo */}
                    <div className="bg-white rounded-2xl p-2.5 border border-[#C5CBD3]/70 shadow-xs flex gap-3 items-center">
                      <div className="w-16 h-16 rounded-xl bg-stone-200 flex items-center justify-center text-3xl shrink-0">
                        🐱
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-xs text-[#2D3142] truncate">
                          Doação de gatinha
                        </h4>
                        <p className="text-[11px] text-[#2D3142]/70">Alvorada</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[9px] text-[#2D3142]/50 font-semibold">
                            Recente
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#FFF176] text-[#C26710] font-extrabold text-[9px]">
                            Animais
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card extra de Ração/Medicamentos */}
                    <div className="bg-white rounded-2xl p-2.5 border border-[#C5CBD3]/70 shadow-xs flex gap-3 items-center">
                      <div className="w-16 h-16 rounded-xl bg-amber-50 flex items-center justify-center text-3xl shrink-0">
                        🦴
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-xs text-[#2D3142] truncate">
                          Doação de Ração Filhotes
                        </h4>
                        <p className="text-[11px] text-[#2D3142]/70">Manaus</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[9px] text-[#2D3142]/50 font-semibold">
                            Disponível
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[9px]">
                            Alimentação
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA 5: MEU PERFIL REAL */}
              {currentScreen.id === 'perfil' && (
                <div className="flex-1 flex flex-col bg-[#FDFBF7]">
                  {/* Topbar Laranja Meu Perfil */}
                  <div className="bg-[#F6A800] pt-6 pb-2.5 px-4 flex items-center justify-between text-white">
                    <span className="font-extrabold text-sm">Meu Perfil</span>
                    <div className="flex items-center gap-2">
                      <PawPrint className="w-4 h-4" />
                      <Menu className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Capa Ilustrada + Avatar Sobreposto */}
                  <div className="relative">
                    <div className="h-20 bg-gradient-to-r from-purple-900 via-fuchsia-700 to-amber-500" />
                    <div className="w-16 h-16 rounded-full bg-[#2D3142] border-4 border-white shadow-md mx-auto -mt-8 flex items-center justify-center text-2xl">
                      🐾
                    </div>
                  </div>

                  {/* Dados do Tutor e Botões */}
                  <div className="px-3 pt-1.5 text-center space-y-2">
                    <div>
                      <h4 className="font-extrabold text-sm text-[#2D3142]">Tutor Amigo Pet</h4>
                      <p className="text-[10px] text-[#2D3142]/75">
                        Apaixonado pela minha linda e fofinha gatinha Zoe ❣️😻
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-[#F6A800] text-white font-extrabold text-[10px] shadow-xs">
                        Editar Perfil
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-[#F6A800] text-white font-extrabold text-[10px] shadow-xs">
                        Adicionar Pet
                      </span>
                    </div>

                    {/* Carrossel Meus Pets (Zoe) */}
                    <div className="text-left pt-1">
                      <p className="text-[11px] font-extrabold text-[#2D3142] mb-1">Meus Pets</p>
                      <div className="inline-flex flex-col items-center">
                        <div className="w-11 h-11 rounded-full bg-stone-900 border-2 border-[#F6A800] flex items-center justify-center text-lg">
                          🐈
                        </div>
                        <span className="text-[10px] font-bold text-[#2D3142] mt-0.5">Zoe</span>
                      </div>
                    </div>

                    {/* Abas Postagens / Doações */}
                    <div className="grid grid-cols-2 border-b border-[#C5CBD3] pt-1 text-[10px] font-extrabold">
                      <div className="pb-1.5 border-b-2 border-[#F6A800] text-[#F6A800]">
                        POSTAGENS
                      </div>
                      <div className="pb-1.5 text-[#2D3142]/50">DOAÇÕES/ADOÇÕES</div>
                    </div>

                    {/* Grade de fotos inferior */}
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      <div className="h-16 rounded-lg bg-cyan-500/80 flex items-center justify-center text-xl">
                        🦦
                      </div>
                      <div className="h-16 rounded-lg bg-stone-800 flex items-center justify-center text-xl">
                        🐈‍
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Botão Flutuante (+) Laranja igual ao App */}
            {currentScreen.id !== 'mapa' && currentScreen.id !== 'perfil' && (
              <div className="absolute bottom-16 right-4 w-10 h-10 rounded-full bg-[#F6A800] text-white shadow-lg flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
            )}

            {/* BARRA INFERIOR FLUTUANTE REAL DO APP (Clicável!) */}
            <div className="p-2.5 bg-transparent">
              <div className="bg-white rounded-full px-3 py-2 shadow-md border border-[#C5CBD3]/50 flex items-center justify-around">
                {[
                  { id: 'feed', label: 'Feed', icon: Home },
                  { id: 'eventos', label: 'Eventos', icon: Newspaper },
                  { id: 'mapa', label: 'Mapa', icon: MapPin },
                  { id: 'doacoes', label: 'Doações', icon: PawPrint },
                  { id: 'perfil', label: 'Perfil', icon: User },
                ].map((tab, idx) => {
                  const IconComponent = tab.icon;
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelectTab(idx)}
                      className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
                        isActive ? 'text-[#F6A800] scale-105' : 'text-[#C26710]/60 hover:text-[#C26710]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {isActive && (
                        <span className="text-[9px] font-extrabold mt-0.5 leading-none">
                          {tab.label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Seta Direita */}
        <button
          onClick={handleNext}
          aria-label="Próxima tela"
          className="hidden sm:flex absolute -right-12 z-20 w-10 h-10 rounded-full bg-white border border-[#C5CBD3] items-center justify-center text-[#2D3142] shadow-md hover:bg-[#F6A800] hover:text-white hover:border-[#F6A800] transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Legenda Explicativa da Aba Selecionada */}
      <div className="mt-5 text-center max-w-sm bg-white px-5 py-3.5 rounded-2xl border border-[#C5CBD3]/60 shadow-xs">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2A9D8F]">
          {currentScreen.badge}
        </span>
        <h3 className="text-base font-extrabold text-[#2D3142] mt-0.5">{currentScreen.title}</h3>
        <p className="text-xs text-[#2D3142]/75 mt-1 leading-relaxed">
          {currentScreen.description}
        </p>
      </div>
    </div>
  );
};