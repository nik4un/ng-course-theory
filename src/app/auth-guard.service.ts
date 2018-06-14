import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
// суфикс Service для гуардов обычно не добавляют
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuth().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        return isLoggedIn;
      }
    });
  }

}
// Регулировка доступа к компоненту с помощью гуарда:
// - имплементируем класс от CanActivate;
// - в методе canActivate получать route, чтобы можно было воспользоваться
// - возвращать: Observable<boolean> | Promise<boolean> | boolean
// в роутах добавляем canActivate с сылкой на данный гуард
