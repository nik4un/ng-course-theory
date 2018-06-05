import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <h6>{{ num }}</h6>
      <h6>{{ num | appPow:3:'=' }}</h6>
      <h6>{{ num | appPow }}</h6>
      <h6>{{ num | appPow:4 }}</h6>
      <h6>{{ 6 | appPow:2 }}</h6>
    </div>
  `
})
export class AppComponent {
  num = 2;
}
