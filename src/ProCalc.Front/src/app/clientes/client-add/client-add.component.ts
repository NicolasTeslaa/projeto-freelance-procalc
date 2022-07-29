import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/models/cliente-model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  cliente: ClienteModel;

  constructor() {

    this.cliente = new ClienteModel()

  }

  ngOnInit(): void {

  }


  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      // event.preventDefault();
      // event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    alert(JSON.stringify(this.cliente))
  }



}
