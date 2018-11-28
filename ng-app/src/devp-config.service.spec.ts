import { TestBed } from '@angular/core/testing';

import { DevpConfigService } from './devp-config.service';

describe('DevpConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevpConfigService = TestBed.get(DevpConfigService);
    expect(service).toBeTruthy();
  });
});
