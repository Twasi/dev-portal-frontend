import { TestBed } from '@angular/core/testing';

import { PlSetupDependenciesService } from './pl-setup-dependencies.service';

describe('plSetupDependenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlSetupDependenciesService = TestBed.get(PlSetupDependenciesService);
    expect(service).toBeTruthy();
  });
});
