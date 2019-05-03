import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = {};

  constructor() { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {

    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then(response => response.json())
      .then(responseJson => {
        this.categories = responseJson.meals;
      });
  }


}
