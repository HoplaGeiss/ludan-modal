import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <button (click)="openModal()">Open a modal</button>
    <ludan-modal [modalId]="'exampleModal'"> hello </ludan-modal>
  `
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  openModal = () => {
    this.modalService.open('exampleModal');
  };
}
