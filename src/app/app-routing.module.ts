import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cars', loadChildren: './cars-page/cars.module#CarsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  // для предзагрузки LasyLoading сразу же после загрузки оновного компонета
  // добавляем в forRoot вторым параметром объект с preloadingStrategy: PreloadAllModules
  exports: [RouterModule]
})

export class AppRoutingModule {}
