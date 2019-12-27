import { TestBed } from '@angular/core/testing';

import { ProjectTypeServiceService } from './project-type-service.service';

describe('ProjectTypeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectTypeServiceService = TestBed.get(ProjectTypeServiceService);
    expect(service).toBeTruthy();
  });
});
