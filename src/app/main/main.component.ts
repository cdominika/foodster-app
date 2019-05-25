import { Component, OnInit } from '@angular/core';
import {Recipes, RecipesService} from '../recipes.service';
import {ActivatedRoute} from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  random = {};
  ingredients = [];

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private app: AppComponent) {
    const randomFromCache = JSON.parse(localStorage.getItem('random'));
    const ingredientsFromCache = JSON.parse(localStorage.getItem('ingredients'));
    if (randomFromCache !== null || randomFromCache !== {}) {
      this.random = randomFromCache;
      this.ingredients = ingredientsFromCache;
      console.warn(randomFromCache);
    }
  }

  ngOnInit() {
    if (this.random === null ) {
      this.fetchRandomRecipe();
    }
    this.app.setTitle(`Tasty Recipes and Food Inspirations | Foodser`);
  }

    fetchRandomRecipe() {
      this.recipesService.fetchRandom()
        .subscribe((data: Recipes) => {
          console.log(data);
          this.random = data.meals[0];
          localStorage.setItem('random', JSON.stringify(data.meals[0]));
          this.listIngredients();
          localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
        });
    }

    listIngredients() {
    this.ingredients = [];
    for (let i = 1; i < 21; i++) {
      console.log(this.random[`strIngredient${i}`]);
      let ingredient;
      if (this.random[`strMeasure${i}`] !== null
        && this.random[`strMeasure${i}`] !== undefined
        && this.random[`strIngredient${i}`] !== undefined
        && this.random[`strIngredient${i}`] !== null) {
        ingredient = `${this.random[`strMeasure${i}`]} ${this.random[`strIngredient${i}`]}`;
        this.ingredients = [...this.ingredients, ingredient];
      }
    }
    console.warn(this.ingredients);
    }
  }
