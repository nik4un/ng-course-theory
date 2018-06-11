import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CarsService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public addCar(url: string, car: object) {
    return this.httpClient.post(url, car);
  }

  public changeColor(url:string, car: any, color: string) {
    car.color = color;
    return this.httpClient.put(`${url}/${car.id}`, car);
  }

  public deleteCar(url:string, car: any) {
    return this.httpClient.delete(`${url}/${car.id}`);
  }
}
