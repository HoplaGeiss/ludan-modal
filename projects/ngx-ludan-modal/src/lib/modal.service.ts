import { Injectable } from '@angular/core';

import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  private modals: ModalComponent[] = [];

  registerModal(newModal: ModalComponent): ModalComponent[] {
    const modal = this.findModal(newModal.modalId);

    // Delete existing to replace the modal
    if (modal) this.modals.splice(this.modals.indexOf(modal));

    this.modals.push(newModal);
    return this.modals;
  }

  open(modalId: string): ModalComponent {
    const modal = this.findModal(modalId);

    if (modal) modal.isOpen = true;
    return modal;
  }

  close(modalId: string, checkBlocking = false): ModalComponent {
    const modal = this.findModal(modalId);

    if (modal && (!checkBlocking || (checkBlocking && !modal.blocking))) modal.isOpen = false;

    return modal;
  }

  private findModal(modalId: string): ModalComponent {
    for (const modal of this.modals) {
      if (modal.modalId === modalId) return modal;
    }
    return null;
  }
}
