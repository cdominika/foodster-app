import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { RecipeComponent } from './category-listing/recipe/recipe.component';
import {RecipesService} from './recipes.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: ':category.strCategory-recipes',
    component: CategoryListingComponent
  },
  {
    path: 'beef-recipes/:dish.strMeal',
    component: RecipeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    CategoriesComponent,
    CategoryListingComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ RecipesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
