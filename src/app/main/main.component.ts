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
  measures = [];

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private app: AppComponent) {
    const randomFromCache = JSON.parse(localStorage.getItem('random'));
    if (randomFromCache !== null || randomFromCache !== {}) {
      this.random = randomFromCache;
      console.warn(randomFromCache);
    }
  }

  ngOnInit() {
    if (this.random === null) {
      this.fetchRandomRecipe();
    }
    this.app.setTitle(`Tasty Recipes and Food Inspirations | Foodster`);
    this.listIngredients();
  }

    fetchRandomRecipe() {
      this.recipesService.fetchRandom()
        .subscribe((data: Recipes) => {
          console.log(data);
          this.random = data.meals[0];
          localStorage.setItem('random', JSON.stringify(data.meals[0]));
        });
    }

    listIngredients() {
    for (let i = 0; i < 21; i++) {
      console.log(this.random[`strIngredient${i}`]);
      this.ingredients = [...this.ingredients, this.random[`strIngredient${i}`]];
      this.measures = [...this.measures, this.random[`strMeasure${i}`]];
    }
    console.warn(this.ingredients);
    }
  }
