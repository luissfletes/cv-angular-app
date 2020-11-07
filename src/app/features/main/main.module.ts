import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './pages';
import {
  EventsContainerComponent,
  SkillsContainerComponent,
  SideSkillsContainerComponent,
  ProfileContainerComponent,
  ContactInfoContainerComponent,
  ToolbarContainerComponent,
} from './components';


const pageComponents = [
  MainComponent
];

const components = [
  ...pageComponents,
  SkillsContainerComponent,
  EventsContainerComponent,
  SideSkillsContainerComponent,
  ProfileContainerComponent,
  ContactInfoContainerComponent,
  ToolbarContainerComponent,
];

const depModules = [
  CommonModule,
  TranslateModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,

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
