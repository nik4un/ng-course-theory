import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Для реактивного подхода вместо FormsModule нужен ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
