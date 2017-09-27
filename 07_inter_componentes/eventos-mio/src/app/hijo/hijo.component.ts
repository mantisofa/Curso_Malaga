import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public nameHijo: string;

  @Output()
  public outEvent = new EventEmitter<boolean>();
  // public outEvent: EventEmitter<boolean>;

  constructor() {
    // this.outEvent = new EventEmitter<boolean>(); como la recomendación de angular es dejar vacio el
    // constructor mejor crearlo en la declaracion
  }

  ngOnInit() {
   // this.outEvent = new EventEmitter<boolean>(); si se pone aqui la inicialización del evento no furula,
   // supongo que será xq la creación del evento tiene que ser anterior a la inicialización del componente hijo
  }

  btnClickMe(event) {
    console.log(event);
    this.outEvent.emit(true);
  }
}
