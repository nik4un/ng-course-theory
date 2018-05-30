import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 2018;
  @Output()  addNewCar = new EventEmitter<{ name: string, year: number }>();

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.addNewCar.emit({
      name: this.carName,
      year: this.carYear,
    });

    this.carName = '';
    this.carYear = 2018;
  }

}
