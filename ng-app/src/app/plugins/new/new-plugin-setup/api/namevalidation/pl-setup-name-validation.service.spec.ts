import { TestBed } from '@angular/core/testing';

import { PlSetupNameValidationService } from './pl-setup-name-validation.service';

describe('plSetupNameValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlSetupNameValidationService = TestBed.get(PlSetupNameValidationService);
    expect(service).toBeTruthy();
  });
});
