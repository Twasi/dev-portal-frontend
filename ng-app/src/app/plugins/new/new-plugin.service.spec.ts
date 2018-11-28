import { TestBed } from '@angular/core/testing';

import { NewPluginService } from './new-plugin.service';

describe('NewPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewPluginService = TestBed.get(NewPluginService);
    expect(service).toBeTruthy();
  });
});
