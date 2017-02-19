import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Thiago', '(99)99999-9999', 'email@email.com');

  constructor() { }

  ngOnInit() {
  }

  enviarDados() {
    alert(`seu nome é: ${this.contato.nome}`);
    alert(`seu telefone é: ${this.contato.telefone}`);
    alert(`seu email é: ${this.contato.email}`);
  }
}