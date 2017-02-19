import { Component, OnInit } from '@angular/core';
import { NomesTecService } from './nomes-tec.service';
import { MeuLogService } from './meu-log.service';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NomesTecService, MeuLogService]
})
export class DiComponent implements OnInit {

  tecnologias: string [] = [];
  //meuService: NomesTecService;
  //meuLog: MeuLogService;

  /*constructor() {
    this.meuLog = new MeuLogService;
    this.meuService = new NomesTecService(this.meuLog);
    this.tecnologias = this.meuService.getNomesTec();
  }*/

  constructor(private meuService: NomesTecService, private meuAlerta: AlertaService) {
    this.tecnologias = meuService.getNomesTec();
    this.meuAlerta.msgAlerta();
  }

  ngOnInit() {
  }
}
