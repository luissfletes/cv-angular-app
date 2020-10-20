import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Event, EventsJsonData } from '@shared/models';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsContainerComponent {

  @Input()
  eventsData: EventsJsonData;

  get workExperienceEvents(): Event[] {
    return this.eventsData?.workExperienceEvents || [];
  }

  get educationEvents(): Event[] {
    return this.eventsData?.educationEvents || [];
  }

}
