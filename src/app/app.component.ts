import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <button (click)="openModal()">Open the modal</button>

    <ludan-modal [modalId]="'modalId'" [modalTitle]="'Title'">
      <div class="body">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque, ratione hic facere quasi facilis qui unde
          odio quo ut fugiat, voluptatem dolor, minima, ea perferendis expedita maxime ipsum atque.
        </div>
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
