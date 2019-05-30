import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }
  dishes = [];

  ngOnInit() {
    let categories = JSON.parse(localStorage.getItem('nav'));
    console.log(categories);

  }

}
