import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu: string;
  @Output() nomeClidado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarNome(value){
    this.nomeClidado.emit(value);    
  }
}
