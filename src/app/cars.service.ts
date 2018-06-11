import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CarsService {
  constructor(private httpClient: HttpClient) {}

  public getCar(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.httpClient.get(url, {
      headers: headers
    });
  }

  public addCar(url: string, car: object) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.httpClient.post(url, car, {
      headers // когда одинаковые строки у кдлюча и значения, можно писять одно поле
    });
  }

  public changeColor(url: string, car: any, color: string) {
    car.color = color;
    return this.httpClient.put(`${url}/${car.id}`, car);
  }

  public deleteCar(url: string, car: any) {
    return this.httpClient.delete(`${url}/${car.id}`);
  }
}
