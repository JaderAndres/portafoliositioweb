import { TestBed } from '@angular/core/testing';

import { ProyectoService } from './proyecto';

describe('Proyecto', () => {
  let service: ProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = {} as ProyectoService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
