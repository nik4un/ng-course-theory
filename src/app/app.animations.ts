import { animate, state, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  state('show', style({
    opacity: 1 // это свойство можно не указывать, т.к. у всех элементов по-умолчонию оно 1
  })),
  transition('void => show', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
  transition('show => void', animate(500, style({
    opacity: 0
  })))
]);
