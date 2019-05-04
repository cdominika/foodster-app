import { Component, OnInit } from '@angular/core';
import {CategoryListingComponent} from '../category-listing.component';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes = {};

  constructor() { }

  ngOnInit() {
    this.fetchRecipe();
  }
  fetchRecipe() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`)
      .then(res => res.json())
      .then(resJSON => {
        this.recipes = resJSON;
        console.log(this.recipes);
      });
  }

}
