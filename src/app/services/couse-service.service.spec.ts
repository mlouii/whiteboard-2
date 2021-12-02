import { TestBed } from '@angular/core/testing';

import { CouseServiceService } from './couse-service.service';

describe('CouseServiceService', () => {
  let service: CouseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
