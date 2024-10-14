import { divideWithRemainder } from "./division-with-remainder";

describe('divideWithRemainder', () => {
  it('divides 10 / 3 with result 3', () => {
    const { result } = divideWithRemainder(10, 3);
    expect(result).toBe(3);
  });
  
  it('divides 10 / 3 with remainder 1', () => {
    const { remainder } = divideWithRemainder(10, 3);
    expect(remainder).toBe(1);
  });
  
  it('throws an error on division by zero', () => {
    expect(() => divideWithRemainder(10, 0)).toThrow();
  });
})