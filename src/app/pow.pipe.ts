import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow'
})

export class PowPipe implements  PipeTransform {
  transform(value: any, powNumber: number = 1, symb: string = '') {
    return symb + value ** powNumber;
  }
}
// в консоле сгенерировать pipe:
// > ng g p name-pipe
// > ng g p my-test --spec=false

