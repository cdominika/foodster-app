import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  dishes = [];
  category;
  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute,
    private app: AppComponent) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category.strCategory'];
      this.app.setTitle(`Quick and Tasty ${this.category.charAt(0).toUpperCase() + this.category.slice(1)} Recipes | Foodster`);
      const cachedDishes = JSON.parse(localStorage.getItem(this.category));
      if (cachedDishes !== null) {
        this.dishes = cachedDishes;
      } else {
        this.fetchCategoryDishes(this.category);
      }
    });
  }

  fetchCategoryDishes(category) {
    this.recipesService.fetchCategories(category)
      .subscribe((data: Recipes) => {
        if (data.meals !== null) {
          this.dishes = data.meals;
          localStorage.setItem(this.category, JSON.stringify(this.dishes));
        } else {
          this.recipesService.fetchArea(category)
            .subscribe((area: Recipes) => {
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
    this.recipesService.saveRecipe(i);
  }
}
