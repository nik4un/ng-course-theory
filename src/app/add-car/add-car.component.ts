import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output()  addNewCar = new EventEmitter<{ name: string, year: number }>(); //  декаратор @Output()
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement) {

    this.addNewCar.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value, // + чтобы строку перевести в число
    });

    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2018;
  }

}
