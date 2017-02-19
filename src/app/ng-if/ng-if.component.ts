import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  mostraTag: boolean;
  cursos: string [] = [];

  constructor() { }

  ngOnInit() {
  }

  mostrar(): void {
    this.mostraTag = !this.mostraTag;
  }

  getValor(): boolean {
    return this.mostraTag;
  }

  addArray() {
    this.cursos.push('Angular 2');
  }

}
