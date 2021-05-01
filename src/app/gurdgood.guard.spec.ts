import { TestBed } from '@angular/core/testing';

import { GurdgoodGuard } from './gurdgood.guard';

describe('GurdgoodGuard', () => {
  let guard: GurdgoodGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GurdgoodGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
