import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Event } from '@shared/models';

@Component({
  selector: 'app-event-set',
  templateUrl: './event-set.component.html',
  styleUrls: ['./event-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventSetComponent {

  @Input()
  events: Event[];

  getEventDateFormat(event: Event): string {
    return event.duration.dateFormat || 'MMM, y';
  }

  getEventi18nTittle(event: Event): string {
    return `EventNames.${event.i18nTitle}`;
  }

}
