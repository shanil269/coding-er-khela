import { TestBed } from '@angular/core/testing';

import { UsernameCheckService } from './username-check.service';

describe('UsernameCheckService', () => {
  let service: UsernameCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
