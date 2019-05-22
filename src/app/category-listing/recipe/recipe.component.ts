import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes$;

  // @Input() dishes: object = CategoryListingComponent;
  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    // console.log();
  }
}



