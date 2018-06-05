import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <h6>{{ name }}</h6>
      <h6>{{ name | lowercase }}</h6>
      <h6>{{ name | uppercase }}</h6>
      <h6>{{ name | slice:6:10 }}</h6>
      <h6>{{ name | slice:6:10 | uppercase }}</h6>
      <hr>
      <h6>{{ pi }}</h6>
      <h6>{{ pi | number }}</h6>
      <h6>{{ pi | number:'1.3-4' }}</h6>
      <h6>{{ pi | number:'2.2-2' }}</h6>
      <hr>
      <h6>{{ money | currency:'USD' }}</h6>
      <h6>{{ money | currency:'EUR':false }}</h6>
      <hr>
      <h6>{{ date }}</h6>
    </div>
  `
})
export class AppComponent {
  name = 'Hello Word!';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
}
