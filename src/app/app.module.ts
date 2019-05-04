import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'beef-recipes',
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
