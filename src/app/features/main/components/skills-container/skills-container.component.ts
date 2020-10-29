import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill, SkillsJsonData } from '@shared/models';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsContainerComponent {

  @Input()
  skillsData: SkillsJsonData;

  get proSkills(): Skill[] {
    return this.skillsData?.proSkills || [];
  }

  get devTechs(): Skill[] {
    return this.skillsData?.devTechs || [];
  }

  get dbs(): Skill[] {
    return this.skillsData?.dbs || [];
  }

  get frameworksLibraries(): Skill[] {
    return this.skillsData?.frameworksLibraries || [];
  }

}
