import { TestBed } from '@angular/core/testing';

import { CenterschoolService } from './centerschool.service';

describe('CenterschoolService', () => {
  let service: CenterschoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterschoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
