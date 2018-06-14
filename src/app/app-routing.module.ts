// всё, что косаетя роутера выносим в отдельный корневовй модуль
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // for routing
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { NewPageComponent } from './new-page/new-page.component';

const appRoutes: Routes = [
  { path: 'cars',
    component: CarsPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':carId/:carName', component: CarPageComponent }
    ] },
  { path: '', component: HomePageComponent },
  { path: 'new-page', component: NewPageComponent },
  { path: 'not-found', component: NotFoundComponent },
  // path: '**' - путь для перехода на компнент, при невозможности перехода по некому адресу
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
