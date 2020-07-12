import { TestBed } from '@angular/core/testing';

import { RemoteaccessService } from './remoteaccess.service';

describe('RemoteaccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteaccessService = TestBed.get(RemoteaccessService);
    expect(service).toBeTruthy();
  });
});
