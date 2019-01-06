import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardViewComponent } from './keyboard-view.component';

describe('KeyboardViewComponent', () => {
  let component: KeyboardViewComponent;
  let fixture: ComponentFixture<KeyboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
