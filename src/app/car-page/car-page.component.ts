import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  carId: string;
  carName: string;
  carYear: string;
  carColor: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    // получение параметров из адресной строки статически:
    this.carId = this.route.snapshot.params['carId']; // можно записать «params.id», но чтобы избежать
    // хотя бы даже ничтожной вероятности потери id при минификации пишем «params['id']»
    this.carName = this.route.snapshot.params['carName'];
    // // получение параметров запроса из адресной строки статически:
    this.carColor = this.route.snapshot.queryParams['color'];
    this.carYear = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    // получение параметров из адресной строки динамически (подписываемся на стрим):
    this.route.params.subscribe((data: Params) => {
      this.carId = data['carId'];
      this.carName = data['carName'];
    });

    // получение параметров запроса из адресной строки динамически
    // (если в записи пропустить метод snapshot, то подписываемся на стрим):
    this.route.queryParams.subscribe((data: Params) => {
      this.carColor = data['color'];
      this.carYear = data['year'];
    });

    // получение хеша динамически
    this.route.fragment.subscribe((data: string) => {
      this.hash = data;
    });
  }

  // для рефлизации метода подключаем router: Router
  openMazdaPage() {
    this.router.navigate(['./cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 1998
      },
      fragment: 'pic-mazda'
    }).catch(err => {
      console.log(err.massage);
    });
  }

}
