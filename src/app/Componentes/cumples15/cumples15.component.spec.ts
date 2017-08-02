import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cumples15Component } from './cumples15.component';

describe('Cumples15Component', () => {
  let component: Cumples15Component;
  let fixture: ComponentFixture<Cumples15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cumples15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cumples15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
