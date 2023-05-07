import { TestBed } from '@angular/core/testing';

import { ServiceEstudiosService } from './service-estudios.service';

describe('ServiceEstudiosService', () => {
  let service: ServiceEstudiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEstudiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
