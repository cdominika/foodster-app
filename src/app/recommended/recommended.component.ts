import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }
  dishes;
  categoryNames = [];

  ngOnInit() {
    let categories = JSON.parse(localStorage.getItem('nav'));
    console.log(categories);
    for (let category of categories.categories) {
      this.categoryNames = [...this.categoryNames, category.strCategory]
    }
    console.log(this.categoryNames);
    this.fetchRecommended();
  }

fetchRecommended() {
  for (let i = 0; i < 3; i++)
  this.recipesService.fetchCategories(this.categoryNames[i].toLowerCase())
  .subscribe((dishes) => {
    console.warn(dishes);
    this.dishes = dishes;
    localStorage.setItem(`recommended ${this.categoryNames[i]}`, JSON.stringify(this.dishes));
  });
}
}
