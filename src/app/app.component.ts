import { Component } from '@angular/core';
import { CarsService } from './cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [];
  carName = '';
  carColor = '';
  colors = [
    'pink',
    'yellow',
    'orange',
    'violet',
    'brown',
    'lime',
    'aqua'
  ];

  constructor(private carsService: CarsService) {}

  loadCars() {
      this.carsService
        .get(' http://localhost:3000/cars')
        .subscribe((response) => {
          this.cars = response;
        });
    }

  addCar() {
    const car = {
      name: this.carName,
      color: this.carColor,
    };
    this.carsService.
      addCar(' http://localhost:3000/cars', car)
      .subscribe((json) => {
        this.cars.push(json);
      });
    this.carName = '';
    this.carColor = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car) {
    this.carsService
      .changeColor(' http://localhost:3000/cars', car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car) {
    this.carsService
      .deleteCar(' http://localhost:3000/cars', car)
      .subscribe((data) => {
        this.cars = this.cars.filter(elem => elem.id !== car.id);
      });
  }
  }

