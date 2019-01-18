import { TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

describe('SudokuService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
    service = TestBed.get(ModalService);
  });

  describe('registerModal', () => {
    it('[unregistered modal] => registers it', () => {
      const modalComponent = new ModalComponent(service);
      modalComponent.modalId = 'modalId';
      const modals = service.registerModal(modalComponent);
      expect(modals[0].modalId).toBe(modalComponent.modalId);
    });

    it('[registered modal] => updates the list', () => {
      let modals: ModalComponent[];
      const modalComponent = new ModalComponent(service);
      modalComponent.modalId = 'modalId';
      modalComponent.modalTitle = 'title1';
      modals = service.registerModal(modalComponent);

      modalComponent.modalTitle = 'title2';
      modals = service.registerModal(modalComponent);
      expect(modals.length).toBe(1);
      expect(modals[0].modalTitle).toBe('title2');
    });
  });

  describe('open', () => {
    it('[unregistered modal] => does not open', () => {
      const modal = service.open('id');
      expect(modal).toBe(null);
    });

    it('[registered modal] => opens', () => {
      const modalComponent = new ModalComponent(service);
      modalComponent.modalId = 'modalId';
      service.registerModal(modalComponent);
      const modal = service.open('modalId');
      expect(modal).toEqual(modalComponent);
      expect(modalComponent.isOpen).toBe(true);
    });
  });

  describe('close', () => {
    it('[unregistered modal] => does not close', () => {
      const modal = service.close('id');
      expect(modal).toBe(null);
    });

    describe('[registered modal]', () => {
      it('[we do not check blocking] => closes', () => {
        const modalComponent = new ModalComponent(service);
        modalComponent.modalId = 'modalId';
        service.registerModal(modalComponent);
        modalComponent.isOpen = true;

        const modal = service.close('modalId');
        expect(modal).toEqual(modalComponent);
        expect(modalComponent.isOpen).toBe(false);
      });

      describe('[check blocking]', () => {
        it('[modal is not blocking] => closes', () => {
          const modalComponent = new ModalComponent(service);
          modalComponent.modalId = 'modalId';
          service.registerModal(modalComponent);
          modalComponent.isOpen = true;
          modalComponent.blocking = false;

          const modal = service.close('modalId', true);
          expect(modal).toEqual(modalComponent);
          expect(modalComponent.isOpen).toBe(false);
        });

        it('[modal blocking] => do not close', () => {
          const modalComponent = new ModalComponent(service);
          modalComponent.modalId = 'modalId';
          service.registerModal(modalComponent);
          modalComponent.isOpen = true;
          modalComponent.blocking = true;

          const modal = service.close('modalId', true);
          expect(modal).toEqual(modalComponent);
          expect(modalComponent.isOpen).toBe(true);
        });
      });
    });
  });
});
