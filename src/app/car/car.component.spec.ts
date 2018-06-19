import { TestBed } from '@angular/core/testing';
import { CarComponent } from './car.component';

describe('CarComponent', () => {

  // 1. Регистрация комрпонента внутри тестов, как-бы эмулируем обычную регистрацию компонента
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
  });

  it('should create the component «car»', () => {
    // 2. Создание компонента внутри теста
    const fixture = TestBed.createComponent(CarComponent);
    // 3. Получаем экземпляр компонента
    const car = fixture.debugElement.componentInstance;
    // 4. Ожидаем получить
    expect(car).toBeTruthy();
  });

  it('should render tag with title «header»', () => {
    const fixture = TestBed.createComponent(CarComponent);
    // для того, чтобы angular применил изменеия, проишедшие в компонете в шаблоне
    fixture.detectChanges();
    const car = fixture.debugElement.nativeElement;
    const h1 = car.querySelector('h1').textContent;
    expect(h1).toEqual('My car header');
  });
});
