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
  }

    fetchRandomRecipe() {
      this.recipesService.fetchRandom()
        .subscribe((data: Recipes) => {
          console.log(data);
          this.random = data.meals[0];
          localStorage.setItem('random', JSON.stringify(data.meals[0]));
        });
    }
  }
