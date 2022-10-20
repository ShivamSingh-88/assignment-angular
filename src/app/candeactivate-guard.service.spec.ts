import { TestBed } from '@angular/core/testing';

import { CandeactivateGuardService } from './candeactivate-guard.service';

describe('CandeactivateGuardService', () => {
  let service: CandeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
