import { TestBed } from '@angular/core/testing';

import { LoginauthenticationService } from './loginauthentication.service';

describe('LoginauthenticationService', () => {
  let service: LoginauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
