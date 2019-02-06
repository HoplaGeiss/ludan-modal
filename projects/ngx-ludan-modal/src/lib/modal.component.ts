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
          <img src="assets/icons/clear.svg" alt="clear" (click)="close(true)" />
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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
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