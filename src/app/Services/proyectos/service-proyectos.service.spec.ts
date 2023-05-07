import { TestBed } from '@angular/core/testing';

import { ServiceProyectosService } from './service-proyectos.service';

describe('ServiceProyectosService', () => {
  let service: ServiceProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
