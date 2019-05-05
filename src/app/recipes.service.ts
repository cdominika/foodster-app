import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  constructor(private httpClient: HttpClient) { }
}
