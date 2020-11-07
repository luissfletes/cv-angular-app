import { Title } from '@angular/platform-browser';
import { combineLatest } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


export function TitleInitFactory(
  title: Title,
  translate: TranslateService,
) {
  return () => {
    combineLatest([
      translate.get('ProfileValues.Name'),
      translate.get('ProfileValues.Role'),
    ]).pipe(
      tap(([name, role]) => title.setTitle(`${name} - ${role} CV`)),
      take(1)
    ).subscribe();
  }
}
