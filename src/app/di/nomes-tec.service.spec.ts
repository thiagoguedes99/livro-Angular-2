/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NomesTecService } from './nomes-tec.service';

describe('NomesTecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomesTecService]
    });
  });

  it('should ...', inject([NomesTecService], (service: NomesTecService) => {
    expect(service).toBeTruthy();
  }));
});
