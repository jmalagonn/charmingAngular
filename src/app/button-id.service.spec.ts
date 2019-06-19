import { TestBed } from '@angular/core/testing';

import { ButtonIdService } from './button-id.service';

describe('ButtonIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonIdService = TestBed.get(ButtonIdService);
    expect(service).toBeTruthy();
  });
});
