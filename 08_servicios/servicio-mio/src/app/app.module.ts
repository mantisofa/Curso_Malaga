import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modulos propios
// import { ServicesModule } from './services/services.module';
import { AppComponent } from './app.component';
import { BuscarLibrosComponent } from './buscar-libros/buscar-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarLibrosComponent
  ],
  imports: [
    BrowserModule,
   // ServicesModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
