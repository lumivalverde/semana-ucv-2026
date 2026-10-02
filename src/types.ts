export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  flagEmoji?: string;
  photo: string;
  topic: string;
  time: string;
  bio: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker: string;
  location: string;
  type?: 'conferencia' | 'taller' | 'panel' | 'ceremonia';
}

export interface Workshop {
  id: number;
  category: string;
  title: string;
  description: string;
  vacancies: string;
  duration: string;
  room: string;
  instructor?: string;
}

export interface RegistrationFormData {
  names: string;
  surnames: string;
  email: string;
  dniOrCode: string;
  campusOrAffiliation: string;
  cycle: string;
}
