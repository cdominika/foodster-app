import { Component, OnInit } from '@angular/core';
import {Recipes, RecipesService} from '../recipes.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private recipesService: RecipesService,
              private app: AppComponent) { }
    favs;
    favourites = [];

  ngOnInit() {
    this.app.setTitle('Cookbook. All your favourite recipes in one place | Foodster');
    this.favs = localStorage.getItem('favourites');
    this.favs = JSON.parse(this.favs);
    console.warn(this.favs);
    this.showFavs();
  }

  showFavs() {
    for (const fave of this.favs) {
      console.log(fave);
      this.recipesService.fetchRecipes(fave)
        .subscribe((data: Recipes) => {
          console.log(data.meals[0]);
          this.favourites = [...this.favourites, data.meals[0]];
        });
    }
  }
  removeWhitespace(str) {
    return str.replace(/\s+/g, '-');
  }

  removeFromFavourites(index) {
    this.favourites.splice(index, 1);
    console.warn(this.favourites[index]);
  }
}
