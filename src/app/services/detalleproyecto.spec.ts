import { TestBed } from '@angular/core/testing';

import { DetalleProyectoService } from './detalleproyecto';

describe('Detalleproyecto', () => {
  let service: DetalleProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
