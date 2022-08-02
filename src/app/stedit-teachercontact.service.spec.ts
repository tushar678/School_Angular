import { TestBed } from '@angular/core/testing';

import { SteditTeachercontactService } from './stedit-teachercontact.service';

describe('SteditTeachercontactService', () => {
  let service: SteditTeachercontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteditTeachercontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
