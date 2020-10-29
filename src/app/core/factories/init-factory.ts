import { Languages } from '@core/enums';
import { TranslateService } from '@ngx-translate/core';

export function InitFactory(translate: TranslateService) {
  return () => {
    const language = navigator.language.split('-')[0];
    switch (language) {
      case Languages.Spanish:
        return;
      case Languages.English:
      default:
        translate.setDefaultLang(Languages.English);
        translate.use(Languages.English);
        return;
    }
  }
}
