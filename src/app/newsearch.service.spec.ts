import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import { NewsearchService } from './newsearch.service';

describe('NewsearchService', () => {
  let service: NewsearchService;
  let httpMock: HttpTestingController; //is a mock verison of Http client

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsearchService]
    });
    service = TestBed.inject(NewsearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
