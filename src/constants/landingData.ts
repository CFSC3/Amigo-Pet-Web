export interface AppScreenSlide {
  id: 'feed' | 'eventos' | 'mapa' | 'doacoes' | 'perfil';
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  screenshotUrl?: string; 
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
  logoUrl: '/imagens/logo.png', // Aponte para a logo oficial!
  heroBadge: 'Sua comunidade pet local',
  heroTitle: 'Mais que um aplicativo, uma rede de proteção e carinho',
  heroSubtitle:
    'Criamos um lugar livre de julgamentos para ajudar tutores, facilitar a adoção de animais em situação de rua e potencializar ONGs e pet shops no mapa da sua cidade.',
  primaryCta: 'Baixar Aplicativo no Celular',
  secondaryCta: 'Cadastrar ONG ou Pet Shop',
};

export const APP_SCREENS: AppScreenSlide[] = [
  {
    id: 'feed',
    tabLabel: 'Feed',
    badge: 'Aba 1 • Sem Julgamentos',
    title: 'Gente que entende a rotina de ter pet',
    description:
      'Um feed acolhedor para compartilhar momentos do seu pet, comentar, curtir com patinhas e tirar dúvidas com outros tutores.',
  },
  {
    id: 'eventos',
    tabLabel: 'Eventos',
    badge: 'Aba 2 • Movimento Local',
    title: 'Acompanhe os eventos da causa animal',
    description:
      'Fique por dentro de feiras de adoção, campanhas de vacinação e encontros pet realizados pelas instituições da sua cidade.',
  },
  {
    id: 'mapa',
    tabLabel: 'Mapa',
    badge: 'Aba 3 • Tudo Perto de Você',
    title: 'Encontre ajuda no mapa do seu bairro',
    description:
      'Localize rapidamente casas de adoção, ONGs, clínicas veterinárias e pet shops próximos de você.',
  },
  {
    id: 'doacoes',
    tabLabel: 'Doações',
    badge: 'Aba 4 • Solidariedade na Prática',
    title: 'De um saco de ração a um lar definitivo',
    description:
      'Ajude animais a encontrarem um lar ou publique doações de medicamentos, ração e produtos para tutores que precisam de apoio.',
  },
  {
    id: 'perfil',
    tabLabel: 'Perfil',
    badge: 'Aba 5 • Sua Família Pet',
    title: 'Organize sua família de quatro patas',
    description:
      'Cadastre todos os seus pets, acompanhe seu histórico de postagens e doações em um perfil personalizado.',
  },
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'adocao-doacao',
    tag: 'Solidariedade na prática',
    title: 'De um saco de ração a um lar definitivo',
    description:
      'Sabe aquele remédio que sobrou, uma caminha parada ou um filhote precisando de família? Conecte quem pode ajudar a quem mais precisa.',
    accentColor: '#F6A800',
    bgTint: '#FFF9DB',
    iconName: 'heart',
  },
  {
    id: 'mapa-interativo',
    tag: 'Tudo perto de você',
    title: 'Encontre ajuda no mapa do seu bairro',
    description:
      'Nada de ficar perdido procurando abrigo. Abra o mapa e veja na hora os Pet Shops, Clínicas Veterinárias e ONGs ao seu redor.',
    accentColor: '#2A9D8F',
    bgTint: '#E6F6F4',
    iconName: 'map',
  },
  {
    id: 'comunidade-interacao',
    tag: 'Sem julgamentos',
    title: 'Gente que entende a rotina de ter pet',
    description:
      'Está com dúvida sobre criação? No nosso Feed você conversa com tutores reais que passam pelas mesmas alegrias e desafios.',
    accentColor: '#9C4DCC',
    bgTint: '#F6ECFB',
    iconName: 'sparkles',
  },
  {
    id: 'eventos-cidade',
    tag: 'Movimento local',
    title: 'Acompanhe os eventos da causa animal',
    description:
      'Feirinhas de adoção, campanhas de vacinação e encontros pet divulgados diretamente pelas instituições da sua cidade.',
    accentColor: '#E67E22',
    bgTint: '#FFF0E0',
    iconName: 'calendar',
  },
];

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: 'ongs-abrigos',
    badge: 'Causa Animal Livre',
    title: 'ONGs, Abrigos e Casas de Adoção',
    subtitle: 'Instituições não governamentais e protetores independentes.',
    priceTag: '100% Gratuito',
    isFree: true,
    highlightText: 'Vocês cuidam dos bichinhos, nós damos a visibilidade sem cobrar nada.',
    benefits: [
      'Pino especial de coração vermelho no Mapa do aplicativo',
      'Divulgação gratuita de feiras de adoção e rifas na aba Eventos',
      'Maior alcance para receber doações de ração e remédios',
      'Painel simplificado pelo computador para atualizar endereço',
    ],
    ctaText: 'Cadastrar Minha ONG Grátis',
  },
  {
    id: 'comercio-veterinarios',
    badge: 'Parceiro Oficial',
    title: 'Pet Shops e Clínicas Veterinárias',
    subtitle: 'Estabelecimentos comerciais e profissionais de saúde pet.',
    priceTag: 'Taxa Simbólica de Parceiro',
    isFree: false,
    highlightText: 'Apareça exatamente quando o tutor estiver procurando serviços locais.',
    benefits: [
      'Destaque na aba de filtros do Mapa para tutores da sua cidade',
      'Ficha do estabelecimento com nome, endereço e logotipo',
      'Divulgação de eventos e inaugurações no Feed do aplicativo',
      'Gestão completa do estabelecimento direto pelo navegador',
    ],
    ctaText: 'Colocar Meu Negócio no Mapa',
  },
];