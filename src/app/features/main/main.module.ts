import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './pages';
import { EventsContainerComponent, SkillsContainerComponent } from './components';



const pageComponents = [
  MainComponent
];

const components = [
  ...pageComponents,
  SkillsContainerComponent,
  EventsContainerComponent,
];

const depModules = [
  CommonModule,
  TranslateModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatCardModule,

  SharedModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...depModules,
  ],
  exports: [
    ...components,
  ]
})
export class MainModule { }
