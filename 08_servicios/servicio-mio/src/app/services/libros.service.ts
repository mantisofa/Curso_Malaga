import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  listaLibros: Array<string>;

  constructor() { }

  getLibros(libro) {
    this.listaLibros = [
      'libro1',
      'libro2',
      'libro3'
    ];
    return this.listaLibros;
  }

}
