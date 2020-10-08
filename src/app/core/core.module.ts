import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './factories/http-loader-factory';


const depModules = [
  CommonModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    defaultLanguage: 'es'
  })
];

const exportedModules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  imports: [
    ...depModules,
    ...exportedModules,
  ],
  exports: [...exportedModules]
})
export class CoreModule { }
