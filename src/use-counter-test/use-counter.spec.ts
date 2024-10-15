import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./use-counter";

describe("useCounter", () => {
  it("initializes correctly", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it("increments by 2", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it("randomizes the counter", () => {
    const { result } = renderHook(() => useCounter(0));
    
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
    act(() => result.current.randomize());
    
    expect(result.current.count).toBe(0.5);
  });
});
