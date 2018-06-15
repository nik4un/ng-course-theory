import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page.component';
import { CarsService } from '../cars.service';
import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CarsPageComponent,
    CarPageComponent
  ],
  imports: [
    CommonModule,
    // при создании нового модуля нужно не забыть создать routing module
    // и зарегистрировать его здесь
    CarsRoutingModule,
    SharedModule
  ],
  providers: [CarsService],
})
export class CarsModule {}
// при создании нового модуля нужно не забыть создать routing module
// и общий модуль
