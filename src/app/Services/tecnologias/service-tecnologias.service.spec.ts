import { TestBed } from '@angular/core/testing';

import { ServiceTecnologiasService } from './service-tecnologias.service';

describe('ServiceTecnologiasService', () => {
  let service: ServiceTecnologiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTecnologiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
