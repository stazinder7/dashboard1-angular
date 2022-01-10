import { TestBed } from '@angular/core/testing';

import { JSONBuilderService } from './jsonbuilder.service';

describe('JSONBuilderService', () => {
  let service: JSONBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
