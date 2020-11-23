import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactJsonData } from '@shared/models';

@Component({
  selector: 'app-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent {

  @Input()
  contactData: ContactJsonData;

  @Output()
  menuToggle = new EventEmitter<void>();

  @Output()
  share = new EventEmitter<void>();

}
