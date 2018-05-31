import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'], encapsulation: ViewEncapsulation.None
  // None - Отменяет локальное поведение стилей
  // Native - ЗадаЁт область видимости стилей (излированную от других) только этим компонентом и вложенными в него
})
export class CarsComponent {

  cars =
  [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2018
  }];

  constructor() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }

}
