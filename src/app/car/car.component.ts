import { Component, Input} from '@angular/core';
import { ConsoleService } from '../console.service'; // 1. Импортируется сщзданный сервис

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [ConsoleService] // 2. Объявляется
})
export class CarComponent {

 @Input() car;

 constructor(private consoleService: ConsoleService) {} // 3. Инжектится

 getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true,
    };
 }

 onAction(type: string) {
   this.car.isSold = type === 'buy';
   this.consoleService.log(`${this.car.name} status = ${type}`); // 4. Используется
 }

}
