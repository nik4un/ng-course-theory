import { Component } from '@angular/core';
import { divTrigger } from './app.animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger]
})
export class AppComponent {
  isVisible = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('Start: ', event);
  }

  onAnimationDane(event: AnimationEvent) {
    console.log('Done: ', event);
  }
}
