//Modulos de angular utilizados
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SharedModule } from './shared/shared.module';

//Componentes incluidos en el módulo
import { AppComponent } from './app.component';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { PieComponent } from './shared/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    BrowserModule
    /*,
    SharedModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
