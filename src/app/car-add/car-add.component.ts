import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  @Output() carAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.carAdd.emit(this.carName);
    this.carName = '';
  }

}
