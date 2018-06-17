import { animate, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // 'void => *  -->  ':enter'
   transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
  // '* => void' --> ':leave'
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);
// * здесь - это любое состояние;
// void => * - переход из void в любое состояние;
// * => void - переход из любого состояния в void

export const changeWithTrigger = trigger('changeWith', [
  transition('* => *', [
    animate(1000, style({
      width: '10px'
    })),
    animate(1000, style({
      width: '*' // * обозначает изначальную ширину или высоту
    }))
  ])
]);
