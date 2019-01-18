import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <button (click)="openModal()">open</button>

    <ludan-modal [modalId]="'modalId'" [modalTitle]="'Title'">
      <div class="body">
        <div>Let's give an example with a button</div>
        <button>Confirm</button>
      </div>
      <div class="footer">Custom footer</div>
    </ludan-modal>
  `
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  openModal = () => {
    this.modalService.open('modalId');
  };
}
