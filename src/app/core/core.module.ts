import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory, InitFactory } from './factories';
import { Languages } from './enums';


const depModules = [
  CommonModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    defaultLanguage: Languages.Spanish
  })
];

const exportedModules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

const providers = [
  {
    provide: APP_INITIALIZER,
    useFactory: InitFactory,
    deps: [TranslateService],
    multi: true,
  }
]

@NgModule({
  imports: [
    ...depModules,
    ...exportedModules,
  ],
  providers: [
    ...providers,
  ],
  exports: [
    ...exportedModules
  ]
})
export class CoreModule { }
