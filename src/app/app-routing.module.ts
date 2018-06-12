// всё, что косаетя роутера выносим в отдельный корневовй модуль
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // for routing
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
