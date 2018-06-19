import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarComponent } from './car.component';
import { CarService } from './car.service';

describe('CarComponent', () => {
  // хоршо бы вынести повторяющийся код типа:
  // const fixture = TestBed.createComponent(CarComponent);
  // для этого задаем переменную типа ComponentFixture, у которой в свою очередь тип CarComponent
  let fixture: ComponentFixture<CarComponent>;
  // и другую повторяющуюся переменную с соответствующим типом
  let component: CarComponent;

  // 1. Регистрация комрпонента внутри тестов, как-бы эмулируем обычную регистрацию компонента
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    // и определяем их в beforeEach
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component «car»', () => {
      // 2. Создание компонента внутри теста
    // const fixture = TestBed.createComponent(CarComponent);
      // 3. Получаем экземпляр компонента
    // const component = fixture.debugElement.componentInstance;
      // 4. Ожидаем получить
    expect(component).toBeTruthy();
  });

  it('should render h1 tag with title «header»', () => {
    // const fixture = TestBed.createComponent(CarComponent);
    // для того, чтобы angular применил изменеия, проишедшие в компонете в шаблоне
    // fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const h1 = nativeElement.querySelector('h1').textContent;
    expect(h1).toEqual('My car header');
  });

  it('should inject CarService', () => {
    // const fixture = TestBed.createComponent(CarComponent);
    // const component = fixture.debugElement.componentInstance;
      // инжектим сервис в тест, операция похожая на инжект сервиса в конструктор
      // constructor(private carService: CarService) { }
    const carService = fixture.debugElement.injector.get(CarService);
    // fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });
});
