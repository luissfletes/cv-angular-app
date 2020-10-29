import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SideSkillsJsonData, Skill } from '@shared/models';


@Component({
  selector: 'app-side-skills-container',
  templateUrl: './side-skills-container.component.html',
  styleUrls: ['./side-skills-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideSkillsContainerComponent {

  @Input()
  sideSkillsData: SideSkillsJsonData;

  get softSkills(): Skill[] {
    return this.sideSkillsData?.softSkills;
  }

  get languages(): Skill[] {
    return this.sideSkillsData?.languages;
  }

}
