import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Skill } from '@shared/models';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillSetComponent {

  @Input()
  skills: Skill[] = [];

  @Input()
  columns = 3;

  @Input()
  itemGap = 10;

  get itemGapPx(): string {
    return `${this.itemGap}px`
  }

  get columnSize(): string {
    return `calc(${100 / this.columns}% - ${this.itemGapPx})`;
  }

  getSkilli18nTittle(skill: Skill): string {
    return `SkillNames.${skill.i18nTitle}`;
  }

}
