import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.scss']
})
export class ToolbarContainerComponent {

  @Output()
  menuToggle = new EventEmitter<void>();

  @Output()
  share = new EventEmitter<void>();

}
