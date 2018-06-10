import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  ];

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email:  new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),
      }),
      country:  new FormControl('by'),
      answer: new FormControl('no'),
    });
  }

  onSubmit() {
    console.log(`Submitted!`, this.form);
  }

}
