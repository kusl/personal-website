import { TestBed } from '@angular/core/testing';

import { LookupStateServiceService } from './lookup-state-service.service';

describe('LookupStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupStateServiceService = TestBed.get(LookupStateServiceService);
    expect(service).toBeTruthy();
  });
});
