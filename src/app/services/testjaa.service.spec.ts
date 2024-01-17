import { TestBed } from '@angular/core/testing';

import { TestjaaService } from './testjaa.service';

describe('TestjaaService', () => {
  let service: TestjaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestjaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
