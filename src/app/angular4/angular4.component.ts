import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html',
  styleUrls: ['./angular4.component.css']
})
export class Angular4Component implements OnInit {

  troca: boolean = true;
  tecnologias: string [] = ['Angular 2', 'Angular 4', 'javaScript', 'html', 'CSS'];


  constructor() { }

  ngOnInit() {
  }

  mudar() {
    this.troca = !this.troca;
  }

}
