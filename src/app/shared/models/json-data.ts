import { Skill } from './skill';
import { Event } from './event';

export interface SkillsJsonData {
  proSkills: Skill[];
  devTechs: Skill[];
  frameworksLibraries: Skill[];
}

export interface EventsJsonData {
  workExperienceEvents: Event[];
  educationEvents: Event[];
}

export interface SideSkillsJsonData {
  softSkills: Skill[];
  languages: Skill[];
}

export interface ContactJsonData {
  phone: string;
  email: string;
}
