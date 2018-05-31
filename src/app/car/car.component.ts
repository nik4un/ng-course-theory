import { Component, AfterViewInit, Input, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit {

  @Input() carItem: {name: string, year: number};
  @ContentChild('carHeading') carHeading: ElementRef;

  ngAfterViewInit() {
    console.log(this.carHeading);
  }
}
