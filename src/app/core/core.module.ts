import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory, LanguageInitFactory, TitleInitFactory } from './factories';
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
    useFactory: LanguageInitFactory,
    deps: [TranslateService],
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: TitleInitFactory,
    deps: [Title, TranslateService],
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
