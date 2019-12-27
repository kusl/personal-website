import { TestBed } from '@angular/core/testing';

import { SubprojectService } from './subproject.service';

describe('SubprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubprojectService = TestBed.get(SubprojectService);
    expect(service).toBeTruthy();
  });
});
