import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class ShareHelperService {

  constructor(
    private translate: TranslateService,
  ) {}

  executeShare(): void {
    this.translate.get('ProfileValues.ShareText').pipe(
      map(text => ({
        title: document.title,
        text,
        url: window.location.href
      })),
      tap(({ title, text, url }) => navigator.share({ title, text, url })),
      take(1)
    )
    .subscribe();
  }
}
