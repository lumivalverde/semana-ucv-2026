import { Speaker, AgendaItem, Workshop } from './types';
import jorgeMarioPerezImg from './assets/images/speakers/jorge_mario_perez.png';
import miriamCahuanaImg from './assets/images/speakers/miriam_cahuana.png';
import cesarSantillanImg from './assets/images/speakers/cesar_santillan.png';
import sergioAlvaradoImg from './assets/images/speakers/sergio_alvarado.png';
import jesusPortuguezImg from './assets/images/speakers/jesus_portuguez.jpg';

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'Jorge Mario Pérez',
    role: 'Productor de UNIMINUTO',
    company: 'Radio Colombia',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: jorgeMarioPerezImg,
    topic: 'De la radio al podcast: evolución, historia y nuevas formas de conectar con las audiencias',
    time: 'Jueves 03 Dic - 09:00 a.m.',
    bio: 'Productor de UNIMINUTO Radio Colombia, comunicador social y periodista con 15 años de experiencia en medios comunitarios, comerciales y universitarios; especializado en producción audiovisual, marketing digital y estrategia de contenidos.'
  },
  {
    id: 2,
    name: 'Miriam Cahuana',
    role: 'Periodista',
    company: 'RPP Noticias',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: miriamCahuanaImg,
    topic: 'Periodismo en las calles: historias, desafíos y realidades detrás de cada noticia',
    time: 'Jueves 03 Dic - 10:30 a.m.',
    bio: 'Periodista de campo y reportera de noticias especializada en coberturas en directo para la multiplataforma de RPP Noticias. Experiencia en periodismo judicial y político, en medios institucionales como Justicia TV.'
  },
  {
    id: 3,
    name: 'César Santillan',
    role: 'Periodista',
    company: 'TV Perú / IRTP',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: cesarSantillanImg,
    topic: 'En primera línea: el desafío de cubrir grandes acontecimientos y eventos de interés público',
    time: 'Jueves 03 Dic - 12:00 p.m.',
    bio: 'Periodista de TV Perú e IRTP, con 11 años de experiencia en cobertura periodística política y policial, producción de programas informativos y comunicación social. Bachiller en Periodismo y egresado de la maestría en Comunicación y Marketing.'
  },
  {
    id: 4,
    name: 'Sergio Alvarado',
    role: 'Docente e Investigador Senior',
    company: 'UNIMINUTO - Colombia',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: sergioAlvaradoImg,
    topic: 'Más allá de las pantallas: narrativas transmedia y el futuro de los medios públicos',
    time: 'Jueves 03 Dic – 10:00 a.m.',
    bio: 'Docente e investigador senior en la Corporación Universitaria Minuto de Dios (UNIMINUTO) en Colombia. Especializado en cibercultura, arte digital, comunicación política y el desarrollo de narrativas transmedia.'
  },
  {
    id: 5,
    name: 'Jesús Portuguez',
    role: 'Comunicador Audiovisual & Locutor',
    company: 'Voz de Metro, KFC, Pizza Hut, BCP, Pepsi',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: jesusPortuguezImg,
    topic: 'Más allá de las pantallas: narrativas transmedia y el futuro de los medios públicos',
    time: 'Jueves 03 Dic – 03:00 p.m.',
    bio: 'Comunicador Audiovisual Multimedia y locutor comercial con 5 años de trayectoria. Es la voz oficial de promociones de tv de Metro, y voz de marcas como KFC, Pizza Hut, BCP y Pepsi.'
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
