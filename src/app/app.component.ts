import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('formId') form: NgForm;

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
  defaultAnswer = 'no';
  defaultCountry = 'ua';

  formData = {};
  isSubmitted = false;

  addRandEmail()  {
    const randEmail = 'nato@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail,
    //   },
    //   country: '',
    //   answer: '',
    // });
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }

  submitForm() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.resetForm(); // очистка формы
  }
}
