export interface AppScreenSlide {
  id: 'feed' | 'eventos' | 'mapa' | 'doacoes' | 'perfil';
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  screenshotUrl?: string; // Opcional: se colocar print real em public/telas/
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  accentColor: string;
  bgTint: string;
  iconName: 'heart' | 'map' | 'sparkles' | 'calendar';
}

export interface PartnerTier {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  priceTag: string;
  isFree: boolean;
  highlightText: string;
  benefits: string[];
  ctaText: string;
}

export const APP_CONFIG = {
  name: 'Amigo Pet',
  downloadUrl: '/apk/amigo-pet.apk',
  heroBadge: 'Feito para quem ama e protege os animais',
  heroTitle: 'O ponto de encontro de quem tem bicho em casa e amor de sobra.',
  heroSubtitle:
    'Compartilhe as pérolas do seu pet no feed, encontre um novo melhor amigo para adotar, doe ração ou remédios para quem precisa e descubra ONGs, clínicas e pet shops pertinho de você.',
  primaryCta: 'Baixar Aplicativo no Celular',
  secondaryCta: 'Cadastrar ONG ou Pet Shop',
};

export const APP_SCREENS: AppScreenSlide[] = [
  {
    id: 'feed',
    tabLabel: 'Feed',
    badge: 'Aba 1 • Comunidade Viva',
    title: 'Feed de Momentos e Dúvidas',
    description:
      'Poste fotos do seu bichinho, troque dicas com outros tutores, curta com patinhas e comente nas histórias da comunidade.',
  },
  {
    id: 'eventos',
    tabLabel: 'Eventos',
    badge: 'Aba 2 • Agenda da Cidade',
    title: 'Eventos e Feiras Pet',
    description:
      'Fique por dentro de feiras de adoção, campanhas de vacinação e encontros de animais que estão rolando na sua região.',
  },
  {
    id: 'mapa',
    tabLabel: 'Mapa',
    badge: 'Aba 3 • Na Sua Vizinhança',
    title: 'Mapa com Filtros Inteligentes',
    description:
      'Filtre com um toque entre Pet Shops & Vets (pino azul/laranja) e Casas de Adoção & ONGs (pino de coração vermelho) perto de você.',
  },
  {
    id: 'doacoes',
    tabLabel: 'Doações',
    badge: 'Aba 4 • Rede Solidária',
    title: 'Adoções & Doações por Bairro',
    description:
      'Filtre por estado, data e categoria (Animais, Alimentação, Remédios e Brinquedos) para adotar ou ajudar quem passa aperto.',
  },
  {
    id: 'perfil',
    tabLabel: 'Perfil',
    badge: 'Aba 5 • Sua Família Pet',
    title: 'Seu Perfil e Carrossel de Pets',
    description:
      'Monte seu espaço com capa personalizada, cadastre todos os seus bichinhos e organize suas postagens e doações em um só lugar.',
  },
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'adocao-doacao',
    tag: 'Solidariedade na prática',
    title: 'De um saco de ração a um lar definitivo',
    description:
      'Sabe aquele remédio que sobrou do tratamento, uma caminha parada ou um filhote precisando de família? Na aba de Doações você conecta quem pode ajudar a quem mais precisa.',
    accentColor: '#F6A800',
    bgTint: '#FFF9DB',
    iconName: 'heart',
  },
  {
    id: 'mapa-interativo',
    tag: 'Tudo perto de você',
    title: 'Encontre ajuda no mapa do seu bairro',
    description:
      'Nada de ficar perdido procurando atendimento ou abrigo. Abra o mapa e veja na hora os Pet Shops, Clínicas Veterinárias e ONGs ao seu redor.',
    accentColor: '#2A9D8F',
    bgTint: '#E6F6F4',
    iconName: 'map',
  },
  {
    id: 'comunidade-interacao',
    tag: 'Sem julgamentos, só acolhimento',
    title: 'Gente que entende a rotina de ter pet',
    description:
      'Seu gato aprontou? Está com dúvida sobre cuidado ou criação? No nosso Feed você conversa com tutores reais que passam pelas mesmas alegrias e desafios.',
    accentColor: '#9C4DCC',
    bgTint: '#F6ECFB',
    iconName: 'sparkles',
  },
  {
    id: 'eventos-cidade',
    tag: 'Movimento local',
    title: 'Acompanhe os eventos da causa animal',
    description:
      'Feirinhas de adoção no fim de semana, mutirões de castração, vacinação e encontros pet divulgados diretamente pelas instituições da sua cidade.',
    accentColor: '#E67E22',
    bgTint: '#FFF0E0',
    iconName: 'calendar',
  },
];

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: 'ongs-abrigos',
    badge: 'Causa Animal • Acesso Livre',
    title: 'ONGs, Abrigos e Casas de Adoção',
    subtitle: 'Para instituições e protetores que salvam vidas todos os dias.',
    priceTag: '100% Gratuito Sempre',
    isFree: true,
    highlightText: 'Vocês cuidam dos bichinhos, nós damos a visibilidade sem cobrar nada.',
    benefits: [
      'Pino especial de coração vermelho na aba Mapa para facilitar doações e visitas',
      'Publicação gratuita de feiras de adoção, rifas e campanhas na aba Eventos',
      'Mais alcance para encontrar adotantes responsáveis e receber ração/remédios',
      'Painel pelo computador super simples para atualizar endereço e agendas',
    ],
    ctaText: 'Cadastrar Minha ONG Grátis',
  },
  {
    id: 'comercio-veterinarios',
    badge: 'Parceiro Oficial • Negócios Locais',
    title: 'Pet Shops e Clínicas Veterinárias',
    subtitle: 'Para comércios e veterinários que querem ser encontrados pelos tutores da região.',
    priceTag: 'Taxa simbólica mensal',
    isFree: false,
    highlightText: 'Apareça exatamente quando o tutor estiver procurando serviços perto de casa.',
    benefits: [
      'Destaque na aba "🐾 Pet Shops & Vets" do Mapa para todos os usuários da sua cidade',
      'Ficha do estabelecimento com nome, endereço completo e localização no GPS',
      'Divulgação de eventos, inaugurações e campanhas de saúde na aba Eventos',
      'Conta integrada: gerencie tudo rapidamente aqui pelo site sem complicação',
    ],
    ctaText: 'Colocar Meu Negócio no Mapa',
  },
];