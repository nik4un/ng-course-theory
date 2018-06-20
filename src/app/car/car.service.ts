export class CarService {
  private isVisible = true;

  showCar() {
    this.isVisible = true;
  }

  hideCar() {
    this.isVisible = false;
  }

  getVisibility() {
    return this.isVisible;
  }

  getCarName() {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve('Ford');
      }, 2000);
    }));
  }
}
