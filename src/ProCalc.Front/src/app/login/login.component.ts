import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/models/login-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario = new LoginModel
  constructor(private loginService: LoginService, private router: Router) {

  }


  ngOnInit(): void {
  }

  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }

    this.loginService.FazLogin();
    this.router.navigate(['/dashboard']);
  }

}
