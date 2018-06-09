import { Component } from '@angular/core'; // Способ 1
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  submitForm(form: NgForm) {
    console.log(`Submitted!`, form);
  }
}
