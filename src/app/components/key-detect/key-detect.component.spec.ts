import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDetectComponent } from './key-detect.component';

describe('KeyDetectComponent', () => {
  let component: KeyDetectComponent;
  let fixture: ComponentFixture<KeyDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
