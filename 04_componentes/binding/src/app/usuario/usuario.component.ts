import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public user: { name: string,
          surname: string;
        };
  public hobbies: Array<string>;

  constructor() { }

  ngOnInit() {
    this.hobbies = ['Leer', 'Escribir'];
    this.user = {name: 'Patricio',
                surname: 'Estrella'};
  }

  btnBorrar() {
    this.user.name = '';
    this.user.surname = '';
  }

  btnHola() {
    console.log(this.user.name + '' + this.user.surname);
  }
}
