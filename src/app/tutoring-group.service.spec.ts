import { TestBed } from '@angular/core/testing';

import { TutoringGroupService } from './tutoring-group.service';

describe('TutoringGroupService', () => {
  let service: TutoringGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoringGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
