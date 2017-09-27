import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public name: string;
  constructor() { }

  ngOnInit() {
  }

  handleEvent(event) {
    console.log(event);
    this.name = '';
  }
}
