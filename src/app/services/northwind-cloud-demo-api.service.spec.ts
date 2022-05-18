import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindCloudDemoAPIService } from './northwind-cloud-demo-api.service';

describe('NorthwindCloudDemoAPIService', () => {
  let service: NorthwindCloudDemoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindCloudDemoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
