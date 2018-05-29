import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';
  inputText1 = '';
  inputText2 = '';
  inputText3 = '';

  constructor() {

  }

  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }

  onKeyUp1(event: Event) {
    this.inputText1 = (<HTMLInputElement>event.target).value;
  }
  onKeyUp2(value) {
    this.inputText2 = value;
  }
  onKeyUp3(event) {
      this.inputText3 = event.target.value;

  }
}
