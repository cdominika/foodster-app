import { Component, Input, OnInit } from '@angular/core';
import {CategoryListingComponent} from '../category-listing.component';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes$;
  // @Input() dishes: object = CategoryListingComponent;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.fetchRecipe();
    // console.log();
  }
  fetchRecipe() {
    this.recipes$ = this.recipesService.fetchRecipes();
    console.log(this.recipes$);
  }

}
