import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'beef-recipes',
    component: CategoryListingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    CategoriesComponent,
    CategoryListingComponent
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
