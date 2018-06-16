import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px',
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px',
      })),
      state('active', style({
        backgroundColor: 'orange',
        width: '170px',
        height: '170px',
      })),
      transition('start <=> end', animate('800ms ease-in')),
      transition('start => active', animate(400)),
      transition('active => end', animate(400))
    ]),
    trigger('multi', [
      state('start', style({
        width: '170px',
        height: '170px',
        border: '10px solid blue',
        backgroundColor: 'green'
      })),
      state('end', style({
        width: '150px',
        height: '150px',
        border: '10px solid blue',
        backgroundColor: 'green',
        transform: 'rotate(45deg)',
        borderRadius: '50%'
      })),
      transition('start <=> end', [
        style({
          backgroundColor: 'red'
        }),
        animate(500, style({
          backgroundColor: 'yellow'
        })),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  // cklickedDivState = 'start';
  multiState = 'start';

  // changeDivState() {
  //   this.cklickedDivState = 'end';
  //   setTimeout(() => {
  //     this.cklickedDivState = 'start';
  //   }, 2000);
  // }
}
