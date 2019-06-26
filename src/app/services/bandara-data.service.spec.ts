import { TestBed } from '@angular/core/testing';

import { BandaraDataService } from './bandara-data.service';

describe('BandaraDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandaraDataService = TestBed.get(BandaraDataService);
    expect(service).toBeTruthy();
  });
});
