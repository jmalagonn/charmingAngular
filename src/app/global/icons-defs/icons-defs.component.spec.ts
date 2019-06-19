import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDefsComponent } from './icons-defs.component';

describe('IconsDefsComponent', () => {
  let component: IconsDefsComponent;
  let fixture: ComponentFixture<IconsDefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsDefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
