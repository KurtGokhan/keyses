import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardElementComponent } from './keyboard-element.component';

describe('KeyboardElementComponent', () => {
  let component: KeyboardElementComponent;
  let fixture: ComponentFixture<KeyboardElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
