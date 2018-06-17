import { animate, group, keyframes, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // 'void => *  -->  ':enter'
   transition(':enter', [
     style({
       width: '*',
       height: '*'
     }),
     group([
       animate(3000, style({
         width: '200px',
         height: '200px'
       })),
       animate(6000, keyframes([
         style({ backgroundColor: 'blue' }),
         style({ backgroundColor: 'yellow' }),
         style({ backgroundColor: 'pink' })
       ]))
     ]),
     animate(1000)
  ]),
  // '* => void' --> ':leave'
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);
