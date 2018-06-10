import { Component } from '@angular/core';
import { CarsService } from './cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [];

  constructor(private carsService: CarsService) {}

    loadCars() {
      this.carsService
        .get(' http://localhost:3000/cars')
        .subscribe((response) => {
          this.cars = response;
        });
    }
  }

