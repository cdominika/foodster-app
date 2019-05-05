import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'; // przykład
  constructor(private http: HttpClient) {}
    fetchRecipes(): Observable<object> {
      return this.http.get(this.apiURL);
    }
}
