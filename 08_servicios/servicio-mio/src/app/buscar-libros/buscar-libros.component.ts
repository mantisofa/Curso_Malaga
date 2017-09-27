import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
// import {LibrosService} from '../services/libros.service';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle=';
@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css']
})
export class BuscarLibrosComponent implements OnInit {

  public claveBusqueda: string;
  public resultados: Array<any>;
  // constructor(private servicioBuscar: LibrosService) { }
  constructor(private http: Http) { }

  ngOnInit() {
    this.resultados = [];
    this.claveBusqueda = '';
  }

  lanzarBusqueda() {
   // this.resultados = this.servicioBuscar.getLibros(this.claveBusqueda);
   this.http.get(URL + this.claveBusqueda).subscribe(
     response => console.log(response)
   );
  }
}
