import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../recipes.service';
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
    this.route.params.subscribe(params => {
      console.warn(params['category.strCategory']);
      this.category = params['category.strCategory'];
      const cachedDishes = JSON.parse(localStorage.getItem(this.category));
      if (cachedDishes !== null) {
        this.dishes = cachedDishes;
        console.warn(cachedDishes);
      } else {
        this.fetchCategoryDishes(this.category);
      }
    });
  }

  fetchCategoryDishes(category) {
    this.recipesService.fetchCategories(category)
      .subscribe((data: Recipes) => {
        console.log(data.meals);
        this.dishes = data.meals;
        localStorage.setItem(this.category, JSON.stringify(this.dishes));
      });
  }
  removeWhitespace(str) {
    return str.replace(/\s+/g, '-');
  }
}
