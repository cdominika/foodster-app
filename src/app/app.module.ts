import { BrowserModule, Title } from '@angular/platform-browser';
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
import { RecipesService } from './recipes.service';
import { ErrorComponent } from './error/error.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'category/:category.strCategory',
    component: CategoryListingComponent
  },
  {
    path: 'category/:category.strCategory/:dish.strMeal/:dish.idMeal',
    component: RecipeComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'favourite-recipes',
    component: FavouritesComponent
  },
  // {
  //   path: '404',
  //   component: ErrorComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/404'
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    CategoriesComponent,
    CategoryListingComponent,
    RecipeComponent,
    ErrorComponent,
    RecommendedComponent,
    FavouritesComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    RecipesService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
