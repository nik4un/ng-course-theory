import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  carId: string;
  carName: string;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    // получение параметров из адресной строки статически:
    this.carId = this.route.snapshot.params['carId']; // можно записать «params.id», но чтобы избежать
    // хотя бы даже ничтожной вероятности потери id при минификации пишем «params['id']»
    this.carName = this.route.snapshot.params['carName'];

    // получение параметров из адресной строки динамически (подписываемся на стрим):
    this.route.params.subscribe((data: Params) => {
      this.carId = data['carId'];
      this.carName = data['carName'];
    });
  }

}
