import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = {};

  constructor(private recipesService: RecipesService) {
    const navCached = JSON.parse(localStorage.getItem('nav'));
    if (navCached !== null || navCached !== {}) {
      this.categories = navCached;
    }
  }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    if (this.categories !== null) {
      return;
    }

    this.recipesService.fetchAllCategories()
      .subscribe((categories) => {
        this.categories = categories;
        localStorage.setItem('nav', JSON.stringify(this.categories));
      });
  }


}
