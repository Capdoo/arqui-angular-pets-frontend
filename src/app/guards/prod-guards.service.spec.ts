import { TestBed } from '@angular/core/testing';

import { ProdGuardsService } from './prod-guards.service';

describe('ProdGuardsService', () => {
  let service: ProdGuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdGuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
