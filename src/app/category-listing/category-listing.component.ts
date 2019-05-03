import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  dishes = {};
  constructor() { }

  ngOnInit() {
    this.fetchDishes();
  }

  fetchDishes() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`)
      .then(response => response.json())
      .then(responseJson => {
        this.dishes = responseJson;
        console.log(this.dishes);
      });
  }

}
