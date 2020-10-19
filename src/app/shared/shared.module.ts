import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import {
  SkillSetComponent,
  EventSetComponent,
} from './components';


const components = [
  SkillSetComponent,
  EventSetComponent,
];

const depModules = [
  CommonModule,
  FlexLayoutModule,
  TranslateModule,
  MatListModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...depModules
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
