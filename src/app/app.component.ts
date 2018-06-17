import { Component } from '@angular/core';
import { divTrigger, changeWithTrigger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger, changeWithTrigger]
})
export class AppComponent {
  isVisible = false;
}
