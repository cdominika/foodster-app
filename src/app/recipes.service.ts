import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Meal {
  meal: any;
}

export interface Recipes {
  meals: any;
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  categoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  allCategoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
  constructor(private http: HttpClient) {}
    fetchRecipes(meal: any) {
    return this.http.get(this.recipeURL + meal);
    }
    fetchCategories(category: string) {
    return this.http.get(this.categoryURL + category);
    }
  fetchRandom() {
    return this.http.get(this.randomURL);
  }
  fetchAllCategories() {
    return this.http.get(this.allCategoriesURL);
  }
  fetchArea(area: string) {
    return this.http.get(this.areaURL + area);
  }
}
