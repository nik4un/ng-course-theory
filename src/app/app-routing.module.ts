import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cars', loadChildren: './cars-page/cars.module#CarsModule' } // *
  // для реализации LasyLoading для компанента cars мы:
  // - исключаем импорт cars.module из app.module
  // - добасляем cars.module в роутинг (см. *) с записью, как строка
  // - в cars-routing.module из path убираем дублирующийся cars
  // - если усть гуарды, после объявления loadChildren записываем canLoad: []
  //   массив с гуардами
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
