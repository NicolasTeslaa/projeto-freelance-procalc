import { Component, OnInit } from '@angular/core';
import { OlaService } from '../ola-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private olaService: OlaService) { 


    this.buscaNomeUsuario();
  }

  nomeDoUsuario: any ;
  idade: any;
  ngOnInit(): void {

   
  }

  buscaNomeUsuario(){
    this.olaService.DigaOi().subscribe(resultado=>{

      this.nomeDoUsuario = resultado.nome
      this.idade = resultado.idade

    });
  }

}
