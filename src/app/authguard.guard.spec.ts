import { TestBed } from '@angular/core/testing';

import { AuthguardGuard } from './authguard.guard';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule]});
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
