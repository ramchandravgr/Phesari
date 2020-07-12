import { TestBed } from '@angular/core/testing';

import { DetailsUploaderService } from './details-uploader.service';

describe('DetailsUploaderService', () => {
  let service: DetailsUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
