import { Component, Input, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  data;
  id;
  ingredients = [];
  shopping = [];

  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute, private router: Router,
    private app: AppComponent,
    private sanitizer: DomSanitizer) { }

  showRecipes() {
    this.recipesService.fetchRecipes(this.id)
      .subscribe((data: Recipes) => {
        this.data = data.meals[0];
        this.app.setTitle(`${data.meals[0].strMeal} Recipe | Foodster `);
        localStorage.setItem(this.id, JSON.stringify(this.data));
        this.listIngredients();
        localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['dish.idMeal'];
    });
    const cachedRecipe = JSON.parse(localStorage.getItem(this.id));
    const ingredientsFromCache = JSON.parse(localStorage.getItem('ingredients'));
    if (cachedRecipe !== null && ingredientsFromCache !== null) {
      this.data = cachedRecipe;
      this.ingredients = ingredientsFromCache;
    } else {
      this.showRecipes();
    }
  }

  listIngredients() {
    for (let i = 1; i < 21; i++) {
      let ingredient;
      if (this.data[`strMeasure${i}`] !== null
        && this.data[`strMeasure${i}`] !== undefined
        && this.data[`strIngredient${i}`] !== undefined
        && this.data[`strIngredient${i}`] !== null) {
        ingredient = `${this.data[`strMeasure${i}`]} ${this.data[`strIngredient${i}`]}`;
        this.ingredients = [...this.ingredients, ingredient];
      }
    }
  }

  addToList(index) {
    if (this.shopping.includes(this.ingredients[index]) === false) {
      this.shopping = [...this.shopping, this.ingredients[index]];
      localStorage.setItem('shopping list', JSON.stringify(this.shopping));
    }
  }

  saveRecipe(i) {
    this.recipesService.saveRecipe(i);
  }

  getVideoURL() {
    if (this.data !== null && this.data !== undefined) {
      let splitUrl = this.data.strYoutube.split('=');
      let id = splitUrl[1];
      let url = `https://www.youtube.com/embed/${id}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}



