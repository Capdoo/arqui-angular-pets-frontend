import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsGuard } from './user-details.guard';

describe('UserDetailsGuard', () => {
  let guard: UserDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(UserDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
