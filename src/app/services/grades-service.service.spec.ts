import { TestBed } from '@angular/core/testing';

import { GradesServiceService } from './grades-service.service';

describe('GradesServiceService', () => {
  let service: GradesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
