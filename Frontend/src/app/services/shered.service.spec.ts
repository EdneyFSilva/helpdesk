import { TestBed } from '@angular/core/testing';

import { SheredService } from './shered.service';

describe('SheredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheredService = TestBed.get(SheredService);
    expect(service).toBeTruthy();
  });
});
