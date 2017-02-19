/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeuLogService } from './meu-log.service';

describe('MeuLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuLogService]
    });
  });

  it('should ...', inject([MeuLogService], (service: MeuLogService) => {
    expect(service).toBeTruthy();
  }));
});
