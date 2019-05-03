import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  random = {};

  constructor() {
    const randomFromCache = JSON.parse(localStorage.getItem('random'));
    if (randomFromCache !== null || randomFromCache !== {}) {
      this.random = randomFromCache;
      console.warn(randomFromCache);
    }
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
          localStorage.setItem('random', JSON.stringify(this.random));
        }
      );
  }

}
