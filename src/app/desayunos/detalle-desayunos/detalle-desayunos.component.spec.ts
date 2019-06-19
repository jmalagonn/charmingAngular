import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDesayunosComponent } from './detalle-desayunos.component';

describe('DetalleDesayunosComponent', () => {
  let component: DetalleDesayunosComponent;
  let fixture: ComponentFixture<DetalleDesayunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDesayunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
