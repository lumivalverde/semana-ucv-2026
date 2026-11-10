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
      time: '10:00 a.m.',
      title: 'El mundo profesional actual: retos, oportunidades y aprendizajes',
      speaker: 'Sergio Mejía',
      location: 'Auditorio Los Caynas',
      type: 'Conferencia'
    },
    {
      id: 'd1-2',
      time: '10:30 a.m.',
      title: 'Periodismo político y actualidad: retos y desafíos de la información en el Perú',
      speaker: 'Jorge Calmet',
      location: 'Aula 205 Pabellón A',
      type: 'Conferencia'
    },
    {
      id: 'd1-3',
      time: '02:00 p.m.',
      title: 'Marketing y gestión de proyectos: estrategias e innovación',
      speaker: 'David Gallardo',
      location: 'Aula 205 Pabellón A',
      type: 'Conferencia'
    },
    {
      id: 'd1-4',
      time: '03:00 p.m.',
      title: 'Periodismo contemporáneo: tendencias, desafíos y nuevas narrativas',
      speaker: 'Jorge Ballón',
      location: 'Google Lab',
      type: 'Conferencia'
    },
    {
      id: 'd1-5',
      time: '06:30 p.m.',
      title: 'Periodismo digital: narrativas, innovación y transformación de la comunicación',
      speaker: 'Leah Sacín',
      location: 'Aula 205 Pabellón A',
      type: 'Conferencia'
    },
    {
      id: 'd1-6',
      time: '07:00 p.m.',
      title: 'Postproducción creativa: del montaje a la magia audiovisual',
      speaker: 'Juanchi XD',
      location: 'Lab MACS - Pabellón B',
      type: 'Conferencia'
    }
  ],
  2: [
    {
      id: 'd2-1',
      time: 'Por confirmar',
      title: 'Actividades y Ponencias de la jornada',
      speaker: 'Por confirmar',
      location: 'Por confirmar',
      type: 'Por confirmar'
    }
  ],
  3: [
    {
      id: 'd3-1',
      time: '08:00 a.m.',
      title: 'Detrás de cámaras: el fascinante mundo de la producción televisiva',
      speaker: 'Anibal Narro',
      location: 'CPA Centro de Producción Audiovisual',
      type: 'Taller'
    },
    {
      id: 'd3-2',
      time: '10:00 a.m.',
      title: 'Creadores digitales: secretos, estrategias y el poder de los algoritmos',
      speaker: 'Joseph Ovalle',
      location: 'Aula 205 Pabellón A',
      type: 'Charla'
    },
    {
      id: 'd3-3',
      time: '03:00 p.m.',
      title: 'De la idea a la pantalla: vive la experiencia de la producción audiovisual',
      speaker: 'Andrés Manco',
      location: 'CPA Centro de Producción Audiovisual',
      type: 'Taller'
    },
    {
      id: 'd3-4',
      time: '05:00 p.m.',
      title: 'Marcas que impactan: el arte de crear spots publicitarios',
      speaker: 'Kevin Rodriguez',
      location: 'Explanada UCV',
      type: 'Ponencia'
    },
    {
      id: 'd3-5',
      time: '07:00 p.m.',
      title: 'Periodismo en las calles: historias, desafíos y realidades',
      speaker: 'Samuel Cortéz',
      location: 'Salón - Pabellón E',
      type: 'Ponencia'
    },
    {
      id: 'd3-6',
      time: '08:00 p.m.',
      title: 'Conquista el mundo digital: tendencias y oportunidades del marketing en redes sociales',
      speaker: 'Milagros Maclla',
      location: 'Salón - Pabellón E',
      type: 'Ponencia'
    },
    {
      id: 'd3-7',
      time: '08:00 p.m.',
      title: 'De emprendedor a empresario: claves para convertir una idea en negocio',
      speaker: 'Pedro Jacinto & Juan Carlos Cam',
      location: 'Aula 205 Pabellón A',
      type: 'Charla'
    },
    {
      id: 'd3-8',
      time: '09:00 p.m.',
      title: 'Contenido que conecta: estrategias para conquistar las audiencias digitales',
      speaker: 'Yesael Vargas & Jesús León',
      location: 'Salón - Pabellón E',
      type: 'Charla'
    }
  ],
  4: [
    {
      id: 'd4-1',
      time: '09:00 a.m.',
      title: 'De la radio al podcast: evolución, historia y nuevas formas de conectar con las audiencias',
      speaker: 'Jorge Mario Pérez',
      location: 'Salón 205 - Pabellón A',
      type: 'Ponencia'
    },
    {
      id: 'd4-2',
      time: '10:30 a.m.',
      title: 'Periodismo en las calles: historias, desafíos y realidades detrás de cada noticia',
      speaker: 'Miriam Cahuana',
      location: 'Google Lab',
      type: 'Ponencia'
    },
    {
      id: 'd4-3',
      time: '12:00 p.m.',
      title: 'En primera línea: el desafío de cubrir grandes acontecimientos y eventos de interés público',
      speaker: 'César Santillan',
      location: 'Google Lab',
      type: 'Ponencia'
    },
    {
      id: 'd4-4',
      time: '02:00 p.m.',
      title: 'Más allá de las pantallas: narrativas transmedia y el futuro de los medios públicos',
      speaker: 'Sergio Alvarado',
      location: 'Salón 205 - Pabellón A',
      type: 'Ponencia'
    },
    {
      id: 'd4-5',
      time: '03:00 p.m.',
      title: 'La locución y el poder de tu voz',
      speaker: 'Jesús Portuguez',
      location: 'CPA Centro de Producción Audiovisual',
      type: 'Ponencia'
    },
    {
      id: 'd4-6',
      time: '04:00 p.m.',
      title: 'Ficción a fondo: el arte de construir historias que conectan e impactan',
      speaker: 'Pablo Vásquez',
      location: 'Laboratorio Mac\'s',
      type: 'Taller'
    },
    {
      id: 'd4-7',
      time: '06:00 p.m.',
      title: 'Periodismo en la era de la inteligencia artificial: nuevos desafíos y oportunidades para informar',
      speaker: 'Armando Ávalos',
      location: 'Salón 205 - Pabellón A',
      type: 'Ponencia'
    },
    {
      id: 'd4-8',
      time: '07:00 p.m.',
      title: 'El Arte de Comunicar y Representar: Relaciones Públicas y Protocolo en la Universidad Pública',
      speaker: 'Ever Montero',
      location: 'Google Lab',
      type: 'Master class'
    },
    {
      id: 'd4-9',
      time: '08:00 p.m.',
      title: 'Producción audiovisual en acción: estrategias y experiencias en la industria musical',
      speaker: 'José Guerrero',
      location: 'Auditorio Los Caynas',
      type: 'Ponencia'
    }
  ],
  5: [
    {
      id: 'd5-1',
      time: '09:00 a.m.',
      title: 'Periodismo en la Era Digital',
      speaker: 'Raquel Arrunátegui',
      location: 'Salón 205 - Pabellón A',
      type: 'Ponencia'
    },
    {
      id: 'd5-2',
      time: '09:30 a.m.',
      title: 'La comunicación y multimedia: del periodismo tradicional a las plataformas digitales',
      speaker: 'Giaan Simón Laveriano',
      location: 'Por confirmar',
      type: 'Ponencia'
    },
    {
      id: 'd5-3',
      time: 'Por confirmar',
      title: 'Growth Marketing y estrategias digitales para el posicionamiento de marcas en la era digital',
      speaker: 'Pedro Salazar',
      location: 'Laboratorio Mac\'s',
      type: 'Ponencia'
    },
    {
      id: 'd5-4',
      time: 'Por confirmar',
      title: 'Detrás del Filtro: Descubre tu perfil de comunicación y estrategias de una reclutadora para comunicadores del futuro',
      speaker: 'Nicole Carrizales',
      location: 'Laboratorio Mac\'s',
      type: 'Taller'
    },
    {
      id: 'd5-5',
      time: 'Por confirmar',
      title: 'El poder de la voz en los medios de comunicación',
      speaker: 'Angelo Talavera',
      location: 'Por confirmar',
      type: 'Master class'
    }
  ],
  6: [
    {
      id: 'd6-1',
      time: '08:00 a.m.',
      title: 'Campeonato deportivo de fútbol y vóley',
      speaker: 'COM360',
      location: 'UCV (Campo San Andrés)',
      type: 'Actividad'
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
