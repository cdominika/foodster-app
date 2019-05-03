import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  random = {};

  constructor() {
  }

  ngOnInit() {
    this.fetchRandomRecipe();
  }

  fetchRandomRecipe() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(res => res.json())
      .then(resJson => {
          this.random = resJson.meals[0];
          console.log(this.random);
        }
      );
  }

}
