import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withReadme } from 'storybook-readme';

import { ModalModule } from './modal.module';
import { ModalService } from './modal.service';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Modal</h1>
      <!-- prettier-ignore -->
      <ludan-modal [modalId]='"exampleModal"' [modalTitle]="title ? 'Modal title' : null
      ">
        <div class="header" *ngIf='header'>Custom header</div>
        <div class="body" *ngIf='body'>Custom body</div>
        <div class="footer" *ngIf='footer'>Custom footer</div>
      </ludan-modal>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  @Input() header: boolean;
  @Input() body: boolean;
  @Input() footer: boolean;
  @Input() title: boolean;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    setTimeout(() => this.modalService.open('exampleModal'));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withReadme(readme, () => ({
      moduleMetadata: {
        imports: [ModalModule],
        declarations: [MockComponent]
      },
      props: {
        header: boolean('header', false),
        body: boolean('body', true),
        footer: boolean('footer', false),
        title: boolean('title', true)
      },
      template: `
        <ludan-story [header]='header' [body]='body' [footer]='footer' [title]='title'></ludan-story>
      `
    }))
  );
