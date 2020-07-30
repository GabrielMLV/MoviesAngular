import { TestBed } from '@angular/core/testing';

import { ApimovieService } from './apimovie.service';

describe('ApimovieService', () => {
  let service: ApimovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
