import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrdenarComponent } from './form-ordenar.component';

describe('FormOrdenarComponent', () => {
  let component: FormOrdenarComponent;
  let fixture: ComponentFixture<FormOrdenarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrdenarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrdenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
