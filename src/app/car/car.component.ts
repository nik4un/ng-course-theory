import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {

  isCarVisible: boolean;
  title = 'My car header';
  carName;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.isCarVisible = this.carService.getVisibility();
    this.carService.getCarName().then(data => {
      this.carName  = data;
    });
    }

}
