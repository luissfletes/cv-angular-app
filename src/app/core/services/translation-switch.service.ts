import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '@core/enums/languages';


@Injectable({
  providedIn: 'root'
})
export class TranslationSwitchService {

  private get currentLanguage(): string {
    return this.translate.currentLang;
  };

  constructor(
    private translate: TranslateService,
  ) { }

  private setLanguage(language: Languages) {
    this.translate.use(language);
  }

  switch(): void {
    const language = this.currentLanguage === Languages.Spanish ? Languages.English : Languages.Spanish;
    this.setLanguage(language);
  }
}
