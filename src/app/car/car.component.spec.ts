import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarComponent } from './car.component';
import { CarService } from './car.service';

describe('CarComponent', () => {
  let carService: CarService;
  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let nativeElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    carService = fixture.debugElement.injector.get(CarService);
    component = fixture.debugElement.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create the component «car»', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 tag with title «header»', () => {
    fixture.detectChanges();
    const h1 = nativeElement.querySelector('h1').textContent;
    expect(h1).toEqual('My car header');
  });

  it('should inject CarService', () => {
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  it(`should display car if is visible`, () => {
    carService.showCar();
    fixture.detectChanges();
    const text = nativeElement.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  it(`should display car if isn't visible`, () => {
    carService.hideCar();
    fixture.detectChanges();
    const text = nativeElement.querySelector('span').textContent;
    expect(text).toEqual('Nothing to show');
  });

  // тест асинхронных данных
  it(`should get car name «Ford»`, async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.carName).toEqual('Ford');
    });
  }));
});

