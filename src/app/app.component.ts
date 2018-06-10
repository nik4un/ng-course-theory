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
  }

