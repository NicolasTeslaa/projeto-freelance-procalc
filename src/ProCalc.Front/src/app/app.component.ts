import { DOCUMENT } from '@angular/common';
import { LiteralPrimitive } from '@angular/compiler';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { LoginService } from './login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'ProCalc';

  usuarioEstaLogado = false; 

  constructor(private loginService: LoginService,private el: ElementRef, @Inject(DOCUMENT) private document: Document){
    this.usuarioEstaLogado = loginService.usuarioEstaLogado()
  }

  toogleMenu() { 
  
    let myTag = this.el.nativeElement.querySelector("#sidebarToggle"); 
    myTag.classList.toggle('sidenav-toggled');  
    document.body.classList.toggle('sidenav-toggled');
  }

  ngOnInit(): void {

  }
  


  SaiDoSistema(){
    this.loginService.FazLogOff()
  }
}
