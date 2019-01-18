import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'ludan-modal',
  styleUrls: ['./modal.component.scss'],
  template: `
    <div [ngClass]="{ closed: !isOpen }">
      <div class="modal-overlay" (click)="close(true)"></div>

      <div class="modal">
        <div class="title" *ngIf="modalTitle">
          <span class="text">{{ modalTitle }}</span>
          <span class="right-align" (click)="close(true)"><img src="assets/icons/clear2.svg" alt="clear"/></span>
        </div>

        <ng-content select=".header"></ng-content>
        <ng-content select=".body"></ng-content>
        <ng-content select=".footer"></ng-content>
      </div>
    </div>
  `
})
export class ModalComponent implements OnInit {
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking = false;
  isOpen = false;

  @HostListener('keyup') onMouseEnter(event) {
    this.keyup(event);
  }

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  close(checkBlocking = false): void {
    this.modalService.close(this.modalId, checkBlocking);
  }

  private keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }
}
