import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public ideas: Array<string>;
  newIdea: string;
  provinciaSeleccionada: {id: number, name: string};
  provincias: Array<{id: number, name: string}>;


  constructor() { }

  ngOnInit() {
    this.ideas = [];
    this.provincias = [];
  }

  addIdea() {
    this.ideas.push(this.newIdea);
    this.newIdea = '';
  }
}
