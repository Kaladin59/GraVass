import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasamientosComponent } from './casamientos.component';

describe('CasamientosComponent', () => {
  let component: CasamientosComponent;
  let fixture: ComponentFixture<CasamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
