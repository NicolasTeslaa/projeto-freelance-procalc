import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

FazLogin(){

  
  sessionStorage.setItem("estadoUsuarioLogado","true")


}

FazLogOff(){
  sessionStorage.removeItem("estadoUsuarioLogado")
}

usuarioEstaLogado(){


  let estadoLogin = sessionStorage.getItem("estadoUsuarioLogado") ;

  return (estadoLogin !== null)

}
}
