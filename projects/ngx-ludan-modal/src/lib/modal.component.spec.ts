import { ModalService } from './modal.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ModalModule } from './modal.module';

describe('ModalComponent', () => {
  let fixture: ComponentFixture<ModalComponent>;
  let comp: ModalComponent;

  let modalService: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule],
      providers: [ModalService]
    });

    fixture = TestBed.createComponent(ModalComponent);
    comp = fixture.debugElement.componentInstance;
    modalService = TestBed.get(ModalService);
  });

  it('creates', () => {
    fixture.detectChanges();
    expect(comp).toBeTruthy();
  });

  it('OnInit register the component in the modalService', () => {
    const registerSpy = spyOn(modalService, 'registerModal');
    fixture.detectChanges();
    expect(registerSpy).toHaveBeenCalledWith(comp);
  });

  it('close => calls the modalService to close the modal', () => {
    const closeSpy = spyOn(modalService, 'close');
    comp.modalId = 'modalId';
    fixture.detectChanges();
    comp.close(true);
    expect(closeSpy).toHaveBeenCalledWith('modalId', true);
  });
});
