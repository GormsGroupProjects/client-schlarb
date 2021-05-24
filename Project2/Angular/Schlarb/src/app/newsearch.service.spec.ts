import { TestBed } from '@angular/core/testing';

import { NewsearchService } from './newsearch.service';

describe('NewsearchService', () => {
  let service: NewsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
