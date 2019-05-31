import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private app: AppComponent) { }
  list;

  ngOnInit() {
    this.app.setTitle('Add your groceries to shopping list | Foodster');
    this.list = localStorage.getItem('shopping list');
    this.list = JSON.parse(this.list);
    console.log(this.list);
  }

  removeFromList(index) {
    this.list.splice(index, 1);
    localStorage.setItem('shopping list', JSON.stringify(this.list));
  }

}
