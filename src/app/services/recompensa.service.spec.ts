import { TestBed } from '@angular/core/testing';

import { RecompensaService } from './recompensa.service';

describe('RecompensaService', () => {
  let service: RecompensaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecompensaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
