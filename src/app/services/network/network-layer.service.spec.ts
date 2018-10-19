import { TestBed, inject } from '@angular/core/testing';

import { NetworkLayerService } from './network-layer.service';

describe('NetworkLayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkLayerService]
    });
  });

  it('should be created', inject([NetworkLayerService], (service: NetworkLayerService) => {
    expect(service).toBeTruthy();
  }));
});
