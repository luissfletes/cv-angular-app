import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainComponent } from './pages';


const pageComponents = [
  MainComponent
];

const components = [
  ...pageComponents,
];

const depModules = [
  CommonModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...depModules
  ],
  exports: [
    ...components
  ]
})
export class MainModule { }
