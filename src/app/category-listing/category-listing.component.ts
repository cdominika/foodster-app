import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  dishes = {};
  constructor() {
    const cachedDishes = JSON.parse(localStorage.getItem('dishes'));
    if (cachedDishes !== null || cachedDishes !== {}) {
      this.dishes = cachedDishes;
      console.warn(cachedDishes);
    }
  }

  ngOnInit() {
    this.fetchDishes();
  }

  fetchDishes() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`)
      .then(response => response.json())
      .then(responseJson => {
        this.dishes = responseJson;
        console.log(this.dishes);
        localStorage.setItem('dishes', JSON.stringify(this.dishes));
      });
  }

}
