import { TestBed, inject } from '@angular/core/testing';

import { DataBaseConnectorService } from './data-base-connector.service';

describe('DataBaseConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBaseConnectorService]
    });
  });

  it('should be created', inject([DataBaseConnectorService], (service: DataBaseConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
