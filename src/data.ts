import { Speaker, AgendaItem, Workshop } from './types';
import jorgeMarioPerezImg from './assets/images/speakers/jorge_mario_perez.png';
import miriamCahuanaImg from './assets/images/speakers/miriam_cahuana.png';
import cesarSantillanImg from './assets/images/speakers/cesar_santillan.png';
import sergioAlvaradoImg from './assets/images/speakers/sergio_alvarado.png';
import jesusPortuguezImg from './assets/images/speakers/jesus_portuguez.jpg';
import pabloVasquezImg from './assets/images/speakers/pablo_vasquez.jpg';
import armandoAvalosImg from './assets/images/speakers/armando_avalos.png';
import everMonteroImg from './assets/images/speakers/ever_montero.png';
import joseChemoGuerreroImg from './assets/images/speakers/jose_chemo_guerrero.jpg';
import sergioMejiaImg from './assets/images/speakers/sergio_mejia.webp';
import jorgeCalmetImg from './assets/images/speakers/jorge_calmet.webp';
import davidGallardoImg from './assets/images/speakers/david_gallardo.webp';
import jorgeBallonImg from './assets/images/speakers/jorge_ballon.webp';
import leahSacinImg from './assets/images/speakers/leah_sacin.webp';
import juanchiValenciaImg from './assets/images/speakers/juanchi_valencia.webp';
import danielMontoyaImg from './assets/images/speakers/daniel_montoya.webp';
import samanthaSipanImg from './assets/images/speakers/samantha_sipan.webp';
import karinaDaviranImg from './assets/images/speakers/karina_daviran.webp';
import jhonCanoImg from './assets/images/speakers/jhon_cano.webp';
import julianDuqueImg from './assets/images/speakers/julian_duque.webp';
import yeseniaCiezaImg from './assets/images/speakers/yesenia_cieza.webp';
import quebuenardoImg from './assets/images/speakers/quebuenardo.webp';
import josephOvalleImg from './assets/images/speakers/joseph_ovalle.webp';
import anibalNarroImg from './assets/images/speakers/anibal_narro.webp';
import kevinRodriguezImg from './assets/images/speakers/kevin_rodriguez.webp';
import samuelCortezImg from './assets/images/speakers/samuel_cortez.webp';
import milagrosMacchaImg from './assets/images/speakers/milagros_maccha.webp';
import pedroJacintoImg from './assets/images/speakers/pedro_jacinto.webp';
import juanCarloCamImg from './assets/images/speakers/juan_carlo_cam.webp';
import yesaelVargasImg from './assets/images/speakers/yesael_vargas.webp';
import jesusLeonImg from './assets/images/speakers/jesus_leon.webp';
import pedroSalazarImg from './assets/images/speakers/pedro_salazar.webp';
import giaanSimonImg from './assets/images/speakers/giaan_simon_laveriano.webp';
import nicoleCarrizalesImg from './assets/images/speakers/nicole_carrizales.webp';
import raquelArrunateguiImg from './assets/images/speakers/raquel_arrunategui.webp';

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'Jorge Mario Pérez',
    role: 'Productor de UNIMINUTO',
    company: 'Radio Colombia',
    country: 'Colombia',
    flagEmoji: '🇨🇴',
    photo: jorgeMarioPerezImg,
    topic: 'De la radio al podcast: evolución, historia y nuevas formas de conectar con las audiencias',
    time: 'Jueves 03 Dic - 09:00 a.m.',
    bio: 'Productor de UNIMINUTO Radio Colombia, comunicador social y periodista con 15 años de experiencia en medios comunitarios, comerciales y universitarios; especializado en producción audiovisual, marketing digital y estrategia de contenidos.'
  },
  {
    id: 2,
    name: 'Miriam Cahuana',
    role: 'Periodista',
    company: 'Panamericana',
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
    company: 'TV Perú',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: cesarSantillanImg,
    topic: 'En primera línea: el desafío de cubrir grandes acontecimientos y eventos de interés público',
    time: 'Jueves 03 Dic - 12:00 p.m.',
    bio: 'Periodista de TV Perú e IRTP, con 13 años de experiencia en cobertura periodística política y policial, producción de programas informativos y comunicación social. Bachiller en Periodismo y egresado de la maestría en Comunicación y Marketing.'
  },
  {
    id: 4,
    name: 'Sergio Alvarado',
    role: 'Docente e investigador senior',
    company: 'Corporación Universitaria Minuto de Dios - Colombia',
    country: 'Colombia',
    flagEmoji: '🇨🇴',
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
  },
  {
    id: 6,
    name: 'Pablo Vásquez',
    role: 'Comunicador Audiovisual',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: pabloVasquezImg,
    topic: 'El arte de construir historias que conectan e impactan',
    time: 'Jueves 03 Dic – 04:00 p.m.',
    bio: 'Guionista, escritor y docente de cine y televisión con más de 30 años de trayectoria. Ha escrito éxitos como Travesuras del corazón, Nacida para triunfar y Cumbia Pop. Ha creado contenido juvenil coproducido con Nickelodeon, disponible en Amazon Prime Video.'
  },
  {
    id: 7,
    name: 'Armando Ávalos',
    role: 'Periodista',
    company: 'Comunicación Corporativa del Poder Judicial del Perú',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: armandoAvalosImg,
    topic: 'Periodismo en la era de la inteligencia artificial: nuevos desafíos y oportunidades para informar',
    time: 'Jueves 03 Dic – 06:00 p.m.',
    bio: 'Periodista de investigación, productor de televisión, docente universitario y autor editorial, con más de tres décadas de trayectoria en Latina Televisión, y actualmente se desempeña como Subgerente de Información en Comunicación Corporativa del Poder Judicial del Perú.'
  },
  {
    id: 8,
    name: 'Ever Montero',
    role: 'Comunicador',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: everMonteroImg,
    topic: 'El Arte de Comunicar y Representar: Relaciones Públicas y Protocolo en la Universidad Pública',
    time: 'Jueves 03 Dic – 07:00 p.m.',
    bio: 'Licenciado colegiado en Ciencias de la Comunicación por la UCV y estudiante de Maestría en Gestión Pública en la UNMSM, especializado en publicidad, marketing, audiovisuales y gestión pública.'
  },
  {
    id: 9,
    name: 'José “Chemo” Guerrero',
    role: 'Coordinador audiovisual de Make Music',
    company: 'Make Music',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: joseChemoGuerreroImg,
    topic: 'Producción audiovisual en acción: estrategias y experiencias en la industria musical',
    time: 'Jueves 03 Dic – 08:00 p.m.',
    bio: 'Coordinador del equipo audiovisual de Make Music, vinculado a la industria musical y especializado en producción audiovisual, creación de contenidos musicales y desarrollo de proyectos para plataformas digitales.'
  },
  {
    id: 10,
    name: 'Sergio Mejía',
    role: 'Periodista',
    company: 'La República',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: sergioMejiaImg,
    topic: 'El mundo profesional actual: retos, oportunidades y aprendizajes',
    time: 'Lunes 30 Nov – 10:00 a.m.',
    bio: 'Periodista y licenciado en Ciencias de la Comunicación por la Universidad de San Martín de Porres (USMP). Actualmente, se desempeña como editor general de contenidos del diario La República, donde cuenta con experiencia en gestión de contenidos periodísticos, producción digital, posicionamiento SEO y desarrollo de estrategias para plataformas digitales.'
  },
  {
    id: 11,
    name: 'Jorge Calmet',
    role: 'Creador de contenido digital',
    company: 'Fundador de Friler',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: jorgeCalmetImg,
    topic: 'Periodismo político, retos y desafíos de la información en el Perú',
    time: 'Lunes 30 Nov – 10:30 a.m.',
    bio: 'Bachiller en Ingeniería Industrial, especializado en Finanzas y estudiante de Data Science en la UPC. Cuenta con más de 10 años de experiencia en el sector financiero y empresarial. Es fundador de Friler y creador de contenido digital con casi 800 mil seguidores, donde aborda temas de actualidad, economía, educación y política, acercando asuntos de interés público a nuevas audiencias mediante un lenguaje claro y dinámico.'
  },
  {
    id: 12,
    name: 'David Gallardo',
    role: 'Comunicador Social',
    company: 'Comunicación e Imagen Institucional de la Dirección de Investigación de Cibercrimen',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: davidGallardoImg,
    topic: 'Marketing y gestión de proyectos: estrategias e innovación',
    time: 'Lunes 30 Nov – 02:00 p.m.',
    bio: 'Comunicador social por la Universidad Nacional de San Cristóbal de Huamanga, con estudios de maestría en Gerencia de Marketing y Gestión Comercial. Cuenta con experiencia en comunicación, marketing y gestión de proyectos, además de acreditación del Project Management Institute (PMI). Actualmente, es especialista en Comunicación e Imagen Institucional de la Dirección de Investigación de Cibercrimen de la PNP.'
  },
  {
    id: 13,
    name: 'Jorge Ballón',
    role: 'Periodista',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: jorgeBallonImg,
    topic: 'Periodismo contemporáneo: tendencias, desafíos y nuevas narrativas',
    time: 'Lunes 30 Nov – 03:00 p.m.',
    bio: 'Licenciado en Ciencias de la Comunicación por la USMP, con estudios de maestría en Periodismo. Cuenta con amplia trayectoria como reportero y presentador en medios como RPP, América Televisión, Canal N y TV Perú. Actualmente, lidera Insurrectos Comunicaciones y dirige Políticamente Insurrectos. Además, fue ganador del Concurso Nacional “Cuidemos el Agua, Cuidemos la Vida”.'
  },
  {
    id: 14,
    name: 'Leah Sacín',
    role: 'Periodista',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: leahSacinImg,
    topic: 'Periodismo digital: narrativas, innovación y transformación de la comunicación',
    time: 'Lunes 30 Nov – 06:30 p.m.',
    bio: 'Licenciada en Comunicación y Periodismo por la UPC, con experiencia en medios como Panamericana Televisión, ATV, Latina y RPP. Actualmente, se desempeña como consultora en comunicaciones, periodista de Políticamente Insurrectos y socia fundadora de Voceras, iniciativa que impulsa las habilidades comunicativas de mujeres profesionales y líderes.'
  },
  {
    id: 15,
    name: 'Juanchi Valencia',
    role: 'Director y postproductor',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: juanchiValenciaImg,
    topic: 'Postproducción creativa: del montaje a la magia audiovisual',
    time: 'Lunes 30 Nov – 07:00 p.m.',
    bio: 'Director creativo y profesional audiovisual, formado en el Instituto Charles Chaplin y EPIC. Cuenta con experiencia en dirección, producción y edición de contenidos publicitarios para marcas como Wong, POND’S, Peugeot y Axe. También se desempeñó como director y postproductor de Jorge Luna, participando en el desarrollo de contenidos digitales y proyectos audiovisuales.'
  },
  {
    id: 16,
    name: 'Daniel Montoya',
    role: 'Comunicación Digital',
    company: '“Daniel en la Historia”',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: danielMontoyaImg,
    topic: 'La historia también se comunica: contando el pasado en la era digital',
    time: 'Martes 01 Dic. – 11:00 a.m.',
    bio: 'Creador de contenido de «Daniel en la Historia». Mantiene una estrecha colaboración con el Comité Peruano Memoria del Mundo de la UNESCO, vinculando la comunicación digital con la difusión de la historia y la memoria documental.'
  },
  {
    id: 17,
    name: 'Samantha Sipán',
    role: 'Comunicación Audiovisual',
    company: '“Viajando con Samantha”',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: samanthaSipanImg,
    topic: 'Frente a cámaras: el arte de comunicar y conectar con la audiencia',
    time: 'Martes 01 Dic. – 11:15 a.m.',
    bio: 'Conductora de televisión y presentadora de «Viajando con Samantha» y «Sami Magazine». Su trabajo se desarrolla en la conducción y presentación de contenidos audiovisuales para distintas audiencias.'
  },
  {
    id: 18,
    name: 'Karina Daviran',
    role: 'Publicidad',
    company: 'Canal Diamante TV',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: karinaDaviranImg,
    topic: 'Detrás de la pantalla: cómo la publicidad conecta marcas y audiencias',
    time: 'Martes 01 Dic. – 02:10 p.m.',
    bio: 'Directora comercial de Canal Diamante TV. Se desempeña en el ámbito comercial de los medios televisivos, vinculando los espacios y contenidos del canal con las necesidades de marcas y anunciantes.'
  },
  {
    id: 19,
    name: 'Jhon Cano',
    role: 'Periodista',
    company: 'Premium Comunicaciones',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: jhonCanoImg,
    topic: 'Más allá de las noticias: el poder de las relaciones públicas',
    time: 'Martes 01 Dic. – 03:10 p.m.',
    bio: 'Periodista y propietario de Premium Comunicaciones, agencia de relaciones públicas. Su trayectoria reúne el ejercicio periodístico y la gestión de comunicación y relaciones públicas desde el ámbito de agencia.'
  },
  {
    id: 20,
    name: 'Julián Duque Rojas',
    role: 'Comunicación Estratégica',
    company: '',
    country: 'Colombia',
    flagEmoji: '🇨🇴',
    photo: julianDuqueImg,
    topic: 'Comunicar sin fronteras: nuevos retos de la comunicación global',
    time: 'Martes 01 Dic. – 03:10 p.m.',
    bio: 'Comunicador social de la Universidad Católica Luis Amigó, sede Manizales. Su participación aborda la comunicación desde una perspectiva estratégica e internacional, según la información compartida por la organización.'
  },
  {
    id: 21,
    name: 'Yesenia Cieza',
    role: 'Publicidad',
    company: 'ACTIVA BTL',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: yeseniaCiezaImg,
    topic: 'De creadora a marca: cómo el contenido digital abre oportunidades en la industria publicitaria',
    time: 'Martes 01 Dic. – 07:00 p.m.',
    bio: 'Influencer, creadora de contenido UGC, jefa de Operaciones Lima de ACTIVA BTL y representante de marca de Brava Producciones. Su experiencia integra creación de contenido, trabajo con marcas y activaciones BTL.'
  },
  {
    id: 22,
    name: 'QUEBUENARDO',
    role: 'Comunicación Digital',
    company: 'YouTube',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: quebuenardoImg,
    topic: 'De un video a una comunidad: el mundo de la creación digital',
    time: 'Martes 01 Dic. – 08:00 p.m.',
    bio: 'Influencer y creador de contenido en YouTube, con una comunidad de aproximadamente 192 mil suscriptores, según la información proporcionada por la organización. Su experiencia se vincula con la creación de contenidos y el desarrollo de audiencias digitales.'
  },
  {
    id: 23,
    name: 'Joseph Ovalle',
    role: 'Creador de contenido',
    company: 'TikTok',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: josephOvalleImg,
    topic: 'Creadores digitales: secretos, estrategias y el poder de los algoritmos',
    time: 'Miércoles 02 Dic. – 10:00 a.m.',
    bio: 'Artista, promotor cultural, creador de contenido, embajador de Marca Perú y comunicador de profesión. Cuenta con más de 2 millones de seguidores en TikTok.'
  },
  {
    id: 24,
    name: 'Anibal Narro',
    role: 'Camarógrafo',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: anibalNarroImg,
    topic: 'Detrás de cámaras: el fascinante mundo de la producción televisiva',
    time: 'Miércoles 02 Dic. – 08:00 a.m.',
    bio: 'Camarógrafo profesional con más de 20 años de experiencia en televisión, comunicación audiovisual y estratégica.'
  },
  {
    id: 25,
    name: 'Kevin Rodriguez',
    role: 'Comunicador audiovisual',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: kevinRodriguezImg,
    topic: 'Marcas que impactan: el arte de crear spots publicitarios',
    time: 'Miércoles 02 Dic. – 05:00 p.m.',
    bio: 'Comunicador audiovisual con 10 años de experiencia. Ha trabajado con marcas como Nike, Maui and Sons, Kids made here, Kayrós inmobiliaria, Nauta inmobiliaria, Pinturas Anypsa, Revanesse, UPN, entre otras.'
  },
  {
    id: 26,
    name: 'Samuel Cortéz',
    role: 'Periodista',
    company: 'Latina Televisión',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: samuelCortezImg,
    topic: 'Periodismo en las calles: historias, desafíos y realidades',
    time: 'Miércoles 02 Dic. – 07:00 p.m.',
    bio: 'Periodista con experiencia en televisión, radio, medios digitales y producción de contenidos. Forma parte de Latina Televisión, consolidándose como reportero de Reporte Semanal y Latina Espectáculos.'
  },
  {
    id: 27,
    name: 'Milagros Maccha',
    role: 'Periodista',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: milagrosMacchaImg,
    topic: 'Conquista el mundo digital: tendencias y oportunidades del marketing en redes sociales',
    time: 'Miércoles 02 Dic. – 08:00 p.m.',
    bio: 'Periodista con 5 años de experiencia en estrategia, planificación y analítica de contenidos multimedia para medios como La República, Latina Televisión y Bethel Radio.'
  },
  {
    id: 28,
    name: 'Pedro Jacinto',
    role: 'Ejecutivo de comunicaciones',
    company: 'CEO de CEMTA',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: pedroJacintoImg,
    topic: 'De emprendedor a empresario: claves para convertir una idea en negocio',
    time: 'Miércoles 02 Dic. – 08:00 p.m.',
    bio: 'Empresario y ejecutivo de los sectores educativo y de comunicaciones con cerca de 20 años de experiencia. Fundador y CEO de CEMTA; cofundador de Corporación Juventud Científica e Inmobiliaria Gamboa.'
  },
  {
    id: 29,
    name: 'Juan Carlo Cam',
    role: 'Comunicador Audiovisual',
    company: 'CEMTA',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: juanCarloCamImg,
    topic: 'De emprendedor a empresario: claves para convertir una idea en negocio',
    time: 'Miércoles 02 Dic. – 08:00 p.m.',
    bio: 'Comunicador Audiovisual de Medios Digitales, ha trabajado en organizaciones como la UNMSM, Vonex, Grupo Ciencias, Aula 20, CEMTA y QF. Fundador de la agencia de marketing digital Camrode.'
  },
  {
    id: 30,
    name: 'Yesael Vargas',
    role: 'Creadora de contenido',
    company: 'Redes sociales',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: yesaelVargasImg,
    topic: 'Contenido que conecta: estrategias para conquistar las audiencias digitales',
    time: 'Miércoles 02 Dic. – 09:00 p.m.',
    bio: 'Creadora de contenido educativo desde 2021 (cuenta con +90k seguidores en Instagram y +80k en TikTok), enfocada en tips de estudio, organización y consejos para el ingreso a universidades públicas.'
  },
  {
    id: 31,
    name: 'Jesús León',
    role: 'Creador de contenido',
    company: 'Redes sociales',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: jesusLeonImg,
    topic: 'Contenido que conecta: estrategias para conquistar las audiencias digitales',
    time: 'Miércoles 02 Dic. – 09:00 p.m.',
    bio: 'Creador de contenido peruano, cuenta con más de 587 mil seguidores en TikTok. Ha incursionado en la música urbana con canciones como YAPEKREDITO, TUBOO, #TANVO y NO TIO NO.'
  },
  {
    id: 32,
    name: 'Pedro Salazar',
    role: 'Marketing',
    company: 'Redes sociales',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: pedroSalazarImg,
    topic: 'Growth Marketing y estrategias digitales para el posicionamiento de marcas en la era digital.',
    time: 'Viernes 04 Dic. – Por confirmar',
    bio: 'Cuenta con más de 8 años liderando estrategias de marketing 360° en entornos B2B y B2C. Especialista en Meta Ads, TikTok Ads, Google Ads, y Growth Marketing, con experiencia en telecomunicaciones, educación, salud, retail y tecnología.'
  },
  {
    id: 33,
    name: 'Giann Simón Laveriano',
    role: 'Marketing',
    company: 'Redes sociales',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: giaanSimonImg,
    topic: 'La comunicación y multimedia: del periodismo tradicional a las plataformas digitales.',
    time: 'Viernes 04 Dic. – 09:30 a.m.',
    bio: 'Con experiencia en Radio y Televisión a nivel regional y nacional. Se desempeña como Asistente y Jefe de Prensa de Unión Huaral, Community Manager en empresas digitales y Diseñador Gráfico.'
  },
  {
    id: 34,
    name: 'Nicole Carrizales',
    role: '',
    company: '',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: nicoleCarrizalesImg,
    topic: 'Detrás del Filtro: Descubre tu perfil de comunicación y estrategias de una reclutadora para comunicadores del futuro.',
    time: 'Viernes 04 Dic. – Por confirmar',
    bio: 'Reclutadora especializada en selección de talento y empleabilidad. Posee experiencia en procesos de reclutamiento, evaluación de perfiles y desarrollo profesional para jóvenes comunicadores.'
  },
  {
    id: 35,
    name: 'Raquel Arrunátegui',
    role: 'Periodista',
    company: 'Asociación Nacional de Periodistas del Perú',
    country: 'Perú',
    flagEmoji: '🇵🇪',
    photo: raquelArrunateguiImg,
    topic: 'Periodismo en la Era Digital',
    time: 'Viernes 04 Dic. – 09:00 a.m.',
    bio: 'Directora de la Asociación Nacional de Periodistas (ANP). Profesional con amplia trayectoria en el ámbito periodístico y defensa de la libertad de prensa.'
  }
];

export const AGENDA_DATA: Record<number, AgendaItem[]> = {
  1: [
    {
      id: 'd1-1',
      time: '10:00 a.m.',
      title: 'El mundo profesional actual: retos, oportunidades y aprendizajes',
      speaker: 'Sergio Mejía',
      location: 'Sala de audiencias de la EP Derecho',
      type: 'Conferencia'
    },
    {
      id: 'd1-2',
      time: '10:30 a.m.',
      title: 'Periodismo político y actualidad: retos y desafíos de la información en el Perú',
      speaker: 'Jorge Calmet',
      location: 'Salón 205 Pabellón A',
      type: 'Conferencia'
    },
    {
      id: 'd1-3',
      time: '02:00 p.m.',
      title: 'Marketing y gestión de proyectos: estrategias e innovación',
      speaker: 'David Gallardo',
      location: 'Salón 205 Pabellón A',
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
      location: 'Salón 205 Pabellón A',
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
      time: '10:15 a.m.',
      title: 'La historia también se comunica: contando el pasado en la era digital',
      speaker: 'Daniel Montoya',
      location: 'Sala de audiencias de la EP Derecho',
      type: 'Ponencia'
    },
    {
      id: 'd2-2',
      time: '11:15 a.m.',
      title: 'Frente a cámaras: el arte de comunicar y conectar con la audiencia',
      speaker: 'Samantha Sipán',
      location: 'Google Lab',
      type: 'Ponencia'
    },
    {
      id: 'd2-3',
      time: '02:10 p.m.',
      title: 'Detrás de la pantalla: cómo la publicidad conecta marcas y audiencias',
      speaker: 'Karina Daviran',
      location: 'CPA - Centro de Producción Audiovisual',
      type: 'Ponencia'
    },
    {
      id: 'd2-4',
      time: '03:10 p.m.',
      title: 'Más allá de las noticias: el poder de las relaciones públicas',
      speaker: 'Jhon Cano',
      location: 'Google Lab',
      type: 'Ponencia'
    },
    {
      id: 'd2-5',
      time: '04:15 p.m.',
      title: 'Comunicar sin fronteras: nuevos retos de la comunicación global',
      speaker: 'Julián Duque Rojas',
      location: 'Salón 205 Pabellón A',
      type: 'Ponencia'
    },
    {
      id: 'd2-6',
      time: '07:00 p.m.',
      title: 'De creadora a marca: cómo el contenido digital abre oportunidades en la industria publicitaria',
      speaker: 'Yesenia Cieza',
      location: 'Google Lab',
      type: 'Ponencia'
    },
    {
      id: 'd2-7',
      time: '08:00 p.m.',
      title: 'De un video a una comunidad: el mundo de la creación digital',
      speaker: 'QUEBUENARDO',
      location: 'CPA - Centro de Producción Audiovisual',
      type: 'Ponencia'
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
      time: '05:00 p.m.',
      title: 'Marcas que impactan: el arte de crear spots publicitarios',
      speaker: 'Kevin Rodriguez',
      location: 'Explanada UCV',
      type: 'Ponencia'
    },
    {
      id: 'd3-4',
      time: '07:00 p.m.',
      title: 'Periodismo en las calles: historias, desafíos y realidades',
      speaker: 'Samuel Cortéz',
      location: 'Salón - Pabellón E',
      type: 'Ponencia'
    },
    {
      id: 'd3-5',
      time: '08:00 p.m.',
      title: 'Conquista el mundo digital: tendencias y oportunidades del marketing en redes sociales',
      speaker: 'Milagros Maclla',
      location: 'Salón - Pabellón E',
      type: 'Ponencia'
    },
    {
      id: 'd3-6',
      time: '08:00 p.m.',
      title: 'De emprendedor a empresario: claves para convertir una idea en negocio',
      speaker: 'Pedro Jacinto & Juan Carlos Cam',
      location: 'Aula 205 Pabellón A',
      type: 'Charla'
    },
    {
      id: 'd3-7',
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
    }
  ],
  6: [
    {
      id: 'd6-1',
      time: 'Por confirmar',
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
