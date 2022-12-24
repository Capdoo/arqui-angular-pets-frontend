import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeServicesService } from './home-services.service';

describe('HomeServicesService', () => {
  let service: HomeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(HomeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
