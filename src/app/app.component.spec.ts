import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    fixture.detectChanges();
    expect(comp).toBeTruthy();
  });
});
