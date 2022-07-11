/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParentServiceService } from './parent-service.service';

describe('Service: ParentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentServiceService]
    });
  });

  it('should ...', inject([ParentServiceService], (service: ParentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
