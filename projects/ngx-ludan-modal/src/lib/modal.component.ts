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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            (click)="close(true)"
            class="close"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
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
