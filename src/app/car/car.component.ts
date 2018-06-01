import {
  Component,
  Input,
  ElementRef,
  ContentChild,
  OnInit,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() carItem: {name: string, year: number};
  @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() { // 1-й цикл компоненты, (callback, который вызывается когда компонент проинициализирован)
    console.log('constructor');
  }

  ngOnChanges(change) { // 2-й цикл компоненты
    console.log('ngOnChanges', change);
  }

  ngOnInit() { // 3-й цикл компоненты
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy () { // например можно использовать для удаления слушителей после ликвидации узла
    console.log('ngOnDestroy ');
  }
}
