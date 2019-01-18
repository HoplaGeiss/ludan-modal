import { Component, OnDestroy } from '@angular/core';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withReadme } from 'storybook-readme';

import { ModalModule } from './modal.module';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Modal</h1>
      <ludan-modal></ludan-modal>
    </div>
  `
})
class MockComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

storiesOf('Greeter', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withReadme(readme, () => ({
      moduleMetadata: {
        imports: [ModalModule],
        declarations: [MockComponent]
      },
      props: {},
      template: `
      <ludan-story></ludan-story>
    `
    }))
  );
