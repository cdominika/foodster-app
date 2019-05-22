import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  dishes = [];
  category;
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute, private router: Router) {}
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
  removeWhitespace(str) {
    return str.replace(/\s+/g, '-');
  }
  // handleClick(i) {
  //   if (this.active === i) {
  //     this.active = null;
  //   } else {
  //     this.active = i;
  //   }
  // }
}
