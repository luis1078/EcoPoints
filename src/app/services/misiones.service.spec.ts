import { TestBed } from '@angular/core/testing';

import { MisionesService } from './misiones.service';

describe('MisionesService', () => {
  let service: MisionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
