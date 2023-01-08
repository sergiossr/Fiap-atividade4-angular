import { TestBed } from '@angular/core/testing';

import { ClienteCadastroService } from './cliente-cadastro.service';

describe('ClienteCadastroService', () => {
  let service: ClienteCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
