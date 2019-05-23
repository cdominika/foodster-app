import { Component, Input, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  data: Recipes;
  id;
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute, private router: Router,
              private app: AppComponent) {}
              showRecipes() {
    this.recipesService.fetchRecipes(this.id)
      .subscribe((data: Recipes) => {
        console.log(data.meals[0]);
        this.data = data.meals[0];
        this.app.setTitle(`${data.meals[0].strMeal} Recipe | Foodster `);
        localStorage.setItem(this.id, JSON.stringify(this.data));
      });
              }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params:' + params['dish.idMeal']);
      this.id = params['dish.idMeal'];
    });
    const cachedRecipe = JSON.parse(localStorage.getItem(this.id));
    if (cachedRecipe !== null) {
      this.data = cachedRecipe;
      console.warn(cachedRecipe);
    } else {
      this.showRecipes();
    }
  }
}



