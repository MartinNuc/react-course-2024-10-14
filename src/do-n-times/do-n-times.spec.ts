import { doNTimes } from "./do-n-times";

describe("doNTimes", () => {
  it("calls the function three times", () => {
    // arrange
    const fn = jest.fn();

    // act
    doNTimes(fn, 3);

    // assert
    expect(fn).toBeCalledTimes(3);
  });
});
