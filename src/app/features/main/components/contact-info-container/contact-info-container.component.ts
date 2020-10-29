import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactJsonData } from '@shared/models';

@Component({
  selector: 'app-contact-info-container',
  templateUrl: './contact-info-container.component.html',
  styleUrls: ['./contact-info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoContainerComponent {

  @Input()
  contactData: ContactJsonData;

  get phone(): string {
    return this.contactData?.phone;
  }

  get email(): string {
    return this.contactData?.email;
  }
}
