import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <button (click)="openModal()">Open a modal</button>
    <ludan-modal [modalId]="'exampleModal'" [modalTitle]="'Title'">
      <div class="body">
        <div>Let's give an example with a button</div>
        <button>Confirm</button>
      </div>
    </ludan-modal>
  `
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  openModal = () => {
    this.modalService.open('exampleModal');
  };
}
