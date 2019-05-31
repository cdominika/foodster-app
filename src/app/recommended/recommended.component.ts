import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../recipes.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }
  dishes;
  categoryNames = [];
  recommended;

  ngOnInit() {
    let categories = JSON.parse(localStorage.getItem('nav'));
    for (let category of categories.categories) {
      this.categoryNames = [...this.categoryNames, category]
    }
    this.recommended = this.categoryNames[Math.floor(Math.random()*this.categoryNames.length)];
    this.fetchRecommended(this.recommended.strCategory);
    console.log(this.recommended);
  }

fetchRecommended(category) {
  this.recipesService.fetchCategories(category.toLowerCase())
  .subscribe((dishes: Recipes) => {
    if (dishes.meals) {
    this.dishes = dishes.meals.splice(0,3);
    console.warn(this.dishes);
    localStorage.setItem(`recommended ${category}`, JSON.stringify(this.dishes));
    }
  });
}

removeWhitespace(str) {
  return str.replace(/\s+/g, '-');
}
}
