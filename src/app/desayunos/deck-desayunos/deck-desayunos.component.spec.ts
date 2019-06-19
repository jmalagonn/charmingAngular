import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckDesayunosComponent } from './deck-desayunos.component';

describe('DeckDesayunosComponent', () => {
  let component: DeckDesayunosComponent;
  let fixture: ComponentFixture<DeckDesayunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckDesayunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckDesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
