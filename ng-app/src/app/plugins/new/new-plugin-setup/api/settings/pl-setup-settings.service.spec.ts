import { TestBed } from '@angular/core/testing';

import { PlSetupSettingsService } from './pl-setup-settings.service';

describe('PlSetupSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlSetupSettingsService = TestBed.get(PlSetupSettingsService);
    expect(service).toBeTruthy();
  });
});
