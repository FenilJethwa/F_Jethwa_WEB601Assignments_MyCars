import { TestBed } from '@angular/core/testing';

import { MyCarsService } from './my-cars.service';

describe('MyCarsService', () => {
  let service: MyCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
