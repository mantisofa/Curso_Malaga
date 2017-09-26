import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PieModuloComponent } from './pie-modulo/pie-modulo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
 // declarations: [PieModuloComponent],
  //es importante que el módulo exporte lo que se quiere utilizar fuera del módulo
  //exports : [PieModuloComponent]
})
export class SharedModule { }
