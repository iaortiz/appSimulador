import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorSJFComponent } from './simulador-sjf.component';

describe('SimuladorSJFComponent', () => {
  let component: SimuladorSJFComponent;
  let fixture: ComponentFixture<SimuladorSJFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorSJFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorSJFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
