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
  constructor(private http: HttpClient) {}
    fetchRecipes(meal: any) {
    return this.http.get(this.recipeURL + meal);
    }
    fetchCategories(category: string) {
    return this.http.get(this.categoryURL + category);
    }
}
