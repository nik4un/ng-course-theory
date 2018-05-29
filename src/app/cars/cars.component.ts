import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'LADA', 'BENTLY'];

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
    setTimeout(() => this.addCarStatus = false, 1100);
  }

  setBigCarText(car: string) {
    return car.length > 4;
  }

}
