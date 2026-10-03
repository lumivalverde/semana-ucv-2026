import { Speaker, AgendaItem, Workshop } from './types';

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'Dra. Sofía Alarcón',
    role: 'Directora de Innovación Digital',
    company: 'MediaTech Global',
    country: 'España',
    flagEmoji: '🇪🇸',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    topic: 'Inteligencia Artificial Generativa en salas de redacción',
    time: 'Lunes 19 Oct | 10:00 AM',
    bio: 'Especialista en transformación digital periodística con más de 15 años liderando proyectos de innovación en medios europeos e hispanoamericanos. Doctora en Periodismo por la Universidad Complutense de Madrid.'
  },
  {
    id: 2,
    name: 'Mg. Mateo Benítez',
    role: 'VP de Estrategia de Marca',
    company: 'Publicis Latam',
    country: 'México',
    flagEmoji: '🇲🇽',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    topic: 'Storytelling Transmedia e Hiper-Segmentación Audiovisual',
    time: 'Martes 20 Oct | 11:30 AM',
    bio: 'Asesor de branding de grandes marcas internacionales. Experto en narrativas multiplataforma y captación de audiencias Gen Z con proyectos premiados en Cannes Lions y El Ojo de Iberoamérica.'
  },
  {
    id: 3,
    name: 'Lic. Camila Ríos',
    role: 'Documentalista & Productora Cine',
    company: 'Streaming Original Series',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    topic: 'Producción Cinematográfica Independiente y Distribución Digital',
    time: 'Miércoles 21 Oct | 04:00 PM',
    bio: 'Galardonada realizadora audiovisual peruana reconocida en festivales internacionales de cine por sus documentales de impacto social y preservación de patrimonio cultural andino.'
  },
  {
    id: 4,
    name: 'Dr. Carlos Eduardo Paiva',
    role: 'Investigador en Comunicación Crisis',
    company: 'Universidad de São Paulo',
    country: 'Brasil',
    flagEmoji: '🇧🇷',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    topic: 'Gestión de Reputación Corporativa en la era de los Deepfakes',
    time: 'Jueves 22 Oct | 09:00 AM',
    bio: 'Autor de diversos libros sobre comunicación corporativa, relaciones públicas y mitigación de desinformación masiva en entornos institucionales y gubernamentales.'
  },
  {
    id: 5,
    name: 'Mg. Lucía Thorne',
    role: 'Chief Content Officer',
    company: 'Digital Trends Perú',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
    topic: 'Estrategias de Podcast y Periodismo Sonoro 360°',
    time: 'Viernes 23 Oct | 03:00 PM',
    bio: 'Pionera en el desarrollo de podcasts nativos digitales con millones de reproducciones en Spotify y Apple Podcasts en América Latina. Docente y consultora en medios sonoros inmersivos.'
  }
];

export const AGENDA_DATA: Record<number, AgendaItem[]> = {
  1: [
    {
      id: 'd1-1',
      time: '09:00 AM',
      title: 'Ceremonia Inaugural de la Semana de Comunicadores 2026',
      speaker: 'Autoridades UCV y Decanato de Humanidades',
      location: 'Auditorio Magna UCV',
      type: 'ceremonia'
    },
    {
      id: 'd1-2',
      time: '10:00 AM',
      title: 'Conferencia Magistral: Inteligencia Artificial Generativa en Salas de Redacción',
      speaker: 'Dra. Sofía Alarcón (España)',
      location: 'Auditorio Magna / Streaming Live HD',
      type: 'conferencia'
    },
    {
      id: 'd1-3',
      time: '03:00 PM',
      title: 'Panel Académico: Ética Periodística en Tiempos de Algoritmos',
      speaker: 'Mesa de Investigadores UCV & Medios Invitados',
      location: 'Sala de Usos Múltiples 1',
      type: 'panel'
    }
  ],
  2: [
    {
      id: 'd2-1',
      time: '09:30 AM',
      title: 'Workshop: Creación y Viralización de Contenido Audiovisual',
      speaker: 'Equipo Creativo Media Lab UCV',
      location: 'Laboratorio Audiovisual A',
      type: 'taller'
    },
    {
      id: 'd2-2',
      time: '11:30 AM',
      title: 'Conferencia: Storytelling Transmedia e Hiper-Segmentación',
      speaker: 'Mg. Mateo Benítez (México)',
      location: 'Auditorio Magna',
      type: 'conferencia'
    },
    {
      id: 'd2-3',
      time: '04:00 PM',
      title: 'Networking & Muestra Audiovisual Estudiantil',
      speaker: 'Estudiantes UCV y Jurado Evaluador',
      location: 'Plaza Central de Integración',
      type: 'panel'
    }
  ],
  3: [
    {
      id: 'd3-1',
      time: '10:00 AM',
      title: 'Mesa Redonda: El Futuro de la Radio y el Audio Digital en Streaming',
      speaker: 'Especialistas y Directores de Radio Nacional',
      location: 'Auditorio de Comunicaciones B',
      type: 'panel'
    },
    {
      id: 'd3-2',
      time: '04:00 PM',
      title: 'Conferencia: Producción Cinematográfica Independiente y Distribución Digital',
      speaker: 'Lic. Camila Ríos (Perú)',
      location: 'Auditorio Magna',
      type: 'conferencia'
    }
  ],
  4: [
    {
      id: 'd4-1',
      time: '09:00 AM',
      title: 'Conferencia: Gestión de Reputación Corporativa en la era de los Deepfakes',
      speaker: 'Dr. Carlos Eduardo Paiva (Brasil)',
      location: 'Auditorio Magna',
      type: 'conferencia'
    },
    {
      id: 'd4-2',
      time: '02:30 PM',
      title: 'Taller Práctico: Fact-Checking y Herramientas OSINT contra la Desinformación',
      speaker: 'Docentes Investigadores UCV',
      location: 'Laboratorio de Cómputo Digital 3',
      type: 'taller'
    }
  ],
  5: [
    {
      id: 'd5-1',
      time: '10:00 AM',
      title: 'Panel Internacional: Tendencias en Comunicación y Tecnologías 2027-2030',
      speaker: 'Panelistas Internacionales Invitados',
      location: 'Auditorio Magna',
      type: 'panel'
    },
    {
      id: 'd5-2',
      time: '03:00 PM',
      title: 'Conferencia Magistral: Estrategias de Podcast y Periodismo Sonoro 360°',
      speaker: 'Mg. Lucía Thorne (Perú)',
      location: 'Auditorio Magna',
      type: 'conferencia'
    },
    {
      id: 'd5-3',
      time: '06:00 PM',
      title: 'Ceremonia de Clausura, Premiación y Noche de Gala Vallejiana',
      speaker: 'Comité Organizador & Elenco Cultural UCV',
      location: 'Plaza Principal Campus UCV - Los Olivos',
      type: 'ceremonia'
    }
  ]
};

export const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    category: 'LABORATORIO AUDIOVISUAL',
    vacancies: '20 VACANTES',
    title: 'Edición Multicámara & Color Grading en DaVinci Resolve',
    description: 'Aprende los flujos de trabajo profesionales para cine y televisión digital, corrección de color en curvas Log y mezcla multicámara sincronizada por audio.',
    duration: '3 Horas',
    room: 'Aula Lab 04',
    instructor: 'Prof. Gabriel Montes'
  },
  {
    id: 2,
    category: 'MARKETING & DATA',
    vacancies: '15 VACANTES',
    title: 'Estrategias de Growth Marketing e Inteligencia Artificial',
    description: 'Uso de modelos generativos y automatizaciones de analítica para creación de contenidos hiper-personalizados y optimización de conversión de audiencias.',
    duration: '2.5 Horas',
    room: 'Aula Magna Digital',
    instructor: 'Mg. Mateo Benítez'
  },
  {
    id: 3,
    category: 'PERIODISMO DIGITAL',
    vacancies: '25 VACANTES',
    title: 'Fact-Checking y Verificación de Datos en Tiempo Real',
    description: 'Metodologías y herramientas de inteligencia de fuentes abiertas (OSINT), geolocalización de fotos y verificación de autenticidad en material sensible de redes.',
    duration: '3 Horas',
    room: 'Sala Digital 02',
    instructor: 'Dra. Sofía Alarcón'
  }
];

export const SPONSORS = [
  { name: 'GLOBAL TV', icon: 'tv', type: 'Medio Televisivo' },
  { name: 'DIARIO PRENSA', icon: 'newspaper', type: 'Prensa Escrita' },
  { name: 'RADIO ONDA', icon: 'radio', type: 'Cadena Radial' },
  { name: 'CINEMA LAB', icon: 'film', type: 'Productora Fílmica' },
  { name: 'AGENCIA IMPACTO', icon: 'megaphone', type: 'Agencia de Publicidad' },
  { name: 'MEDIA HUB', icon: 'globe', type: 'Red Digital' }
];
