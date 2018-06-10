import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ifTrue } from 'codelyzer/util/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  answers = [
    {
      type: 'yes',
      text: 'Да',
    },
    {
      type: 'no',
      text: 'Нет',
    }
    ]

  charsCount = 5;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email:  new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [
          Validators.required,
          this.checkForLength.bind(this)  // с помощью метода bind передаём контекст, с которым нужно вызвать данную функцию
        ]),
      }),
      country:  new FormControl('by'),
      answer: new FormControl('no'),
    });
  }

  onSubmit() {
    console.log(`Submitted!`, this.form);
  }

  // Валидатор проверки длины введенного значения
  // валидатор должен возвращатть либо объект, либо ничего
  // { 'errorCod': true } либо null ('undefined')
  checkForLength(control: FormControl) {
    if (control.value.length < this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

}
