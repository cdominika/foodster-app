import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  dishes = [];
  category;
  favourites = [];
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private app: AppComponent,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.warn(params['category.strCategory']);
      this.category = params['category.strCategory'];
      this.app.setTitle(`Quick and Tasty ${this.category.charAt(0).toUpperCase() + this.category.slice(1)} Recipes | Foodster`);
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
        if (data.meals !== null) {
          this.dishes = data.meals;
          localStorage.setItem(this.category, JSON.stringify(this.dishes));
        } else {
          this.recipesService.fetchArea(category)
            .subscribe((area: Recipes) => {
              console.warn(area.meals);
              this.dishes = area.meals;
              localStorage.setItem(this.category, JSON.stringify(this.dishes));
            });
        }
      });
  }
  removeWhitespace(str) {
    return str.replace(/\s+/g, '-');
  }

  saveRecipe(i) {
    console.warn(i);
    if (this.favourites.includes(i) === false) {
      this.favourites = [...this.favourites, i];
      console.log(this.favourites);
      localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
    }
  }
}
