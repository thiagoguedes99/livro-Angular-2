import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

  constructor() { }

  msgAlerta(): void {
    alert('Livro Angular 2');
  }

}
