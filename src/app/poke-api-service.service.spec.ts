import { TestBed } from '@angular/core/testing';

import { PokeApiServiceService } from './poke-api-service.service';

describe('PokeApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeApiServiceService = TestBed.get(PokeApiServiceService);
    expect(service).toBeTruthy();
  });
});
