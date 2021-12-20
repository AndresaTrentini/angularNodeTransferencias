import { TestBed } from '@angular/core/testing';

import { TranferenciasService } from './tranferencias.service';

describe('TranferenciasService', () => {
  let service: TranferenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranferenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
