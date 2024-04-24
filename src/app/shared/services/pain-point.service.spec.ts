import { TestBed } from '@angular/core/testing';

import { PainPointService } from './pain-point.service';

describe('PainPointService', () => {
  let service: PainPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
