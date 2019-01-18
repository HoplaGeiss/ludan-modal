import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  providers: [ModalService],
  exports: [ModalComponent]
})
export class ModalModule {}
