import { Component, OnInit } from '@angular/core';
import { MedicoModel } from 'src/models/medico-model';

@Component({
  selector: 'app-cadastromedicos',
  templateUrl: './cadastromedicos.component.html',
  styleUrls: ['./cadastromedicos.component.css']
})
export class CadastromedicosComponent implements OnInit {

  medico: MedicoModel;

  constructor() {

    this.medico = new MedicoModel()

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

    alert(JSON.stringify(this.medico))
  }

  
}
