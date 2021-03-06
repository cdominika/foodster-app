import { Component, OnInit } from '@angular/core';
import { Recipes, RecipesService } from '../recipes.service';
import { AppComponent } from '../app.component';

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
    this.showFavs();
  }

  showFavs() {
    if (this.favs !== null) {
      for (const fave of this.favs) {
        this.recipesService.fetchRecipes(fave)
          .subscribe((data: Recipes) => {
            this.favourites = [...this.favourites, data.meals[0]];
          });
      }
    }
  }
  removeWhitespace(str) {
    return str.replace(/\s+/g, '-');
  }

  removeFromFavourites(index) {
    this.favourites.splice(index, 1);
    this.favs.splice(index, 1);
    localStorage.setItem('favourites', JSON.stringify(this.favs));
  }
}
