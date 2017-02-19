import { Injectable } from '@angular/core';

@Injectable()
export class MeuLogService {

  constructor() { }

  setLog(msg:string){
    console.log(msg);
  }
}