import { Skill } from './skill';
import { Event } from './event';

export interface SkillsJsonData {
  proAbilities: Skill[];
  devTechs: Skill[];
  frameworksLibraries: Skill[];
}

export interface EventsJsonData {
  workExperienceEvents: Event[];
  educationEvents: Event[];
}
