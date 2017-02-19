import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao: boolean = false;
  valores: string [] = [];
  idade: number = 0;

  constructor() { }

  ngOnInit() {
  }

  meuClick(): void {
    console.log('evento meuClick do botão');
  }

  digitou($event): void {
    console.log($event);
  }

  digitouVarTemplate(valor: string): void {
    console.log(valor);
  }

  validaSenha(valor: string): void {
    console.log(valor);
    if(valor.length >= 5){
      this.habilitarBotao = true;
    }
    else{
      this.habilitarBotao = false;
    }
  }

  gravarSenha(senha: string): void {
    alert('senha gravada com sucesso sua senha é: ' + senha);
  }

  adicionar(conteudo: string): void {
    this.valores.push(conteudo);
  }

  verIdade(valor): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - valor;
  }
}
