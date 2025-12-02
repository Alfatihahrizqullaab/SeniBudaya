import { TestBed } from '@angular/core/testing';

import { BudayaService } from './budaya';

describe('Budaya', () => {
  let service: BudayaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudayaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
