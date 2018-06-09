import { Component } from '@angular/core'; // Способ 1
import { NgForm } from '@angular/forms';
// import { ViewChild } from '@angular/core'; // Способ 2


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  // Способ 2
  // @ViewChild('formId') form: NgForm;

  answers = [
    {
      type: 'yes',
      text: 'Да',
    },
    {
      type: 'no',
      text: 'Нет',
    }
  ];

  // Способ 1
  submitForm(form: NgForm) {
    console.log(`Submitted!`, form);
  }
  // Способ 2
  // submitForm() {
  //   console.log(`Submitted!`, this.form);
  // }
}
