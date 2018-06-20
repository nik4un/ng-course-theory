import { PowPipe } from './pow.pipe';

describe('PowPipe', function () {
   let pipe: PowPipe;

   beforeEach(() => {
     pipe = new PowPipe();
   });

  it('should create instance', () => {
    // проверка, что pipe существует
    expect(pipe).toBeTruthy();
    // проверка, что pipe имеет метод transform
    expect(pipe.transform).toBeDefined();
  });

  it('should return 8 if called with 2 fnd 3',  () => {
    const  result = pipe.transform(2, 3);
    expect(result).toBe(8);
  });
});
