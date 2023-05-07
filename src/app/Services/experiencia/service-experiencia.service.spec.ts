import { TestBed } from '@angular/core/testing';

import { ServiceExperienciaService } from './service-experiencia.service';

describe('ServiceExperienciaService', () => {
  let service: ServiceExperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
