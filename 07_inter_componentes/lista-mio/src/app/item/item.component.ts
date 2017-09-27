import { Component, OnInit } from '@angular/core';

export interface Item {
  name: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Item;

  constructor() { }

  ngOnInit() {
  //  this.item = {name: ''};
  }

}
