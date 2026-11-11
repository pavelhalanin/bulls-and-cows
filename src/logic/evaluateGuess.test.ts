import { describe, expect, it } from "vitest";
import { evaluateGuess } from "./evaluateGuess";

describe("evaluateGuess", () => {
  it("sum cows", () => {
    expect(evaluateGuess("1234", "4321")).toEqual({ bulls: 0, cows: 4 });
    expect(evaluateGuess("1234", "4567")).toEqual({ bulls: 0, cows: 1 });
  });

  it("sum bulls", () => {
    expect(evaluateGuess("1234", "1234")).toEqual({ bulls: 4, cows: 0 });
    expect(evaluateGuess("1234", "1567")).toEqual({ bulls: 1, cows: 0 });
  });

  it("sum cows and bulls", () => {
    expect(evaluateGuess("1234", "1243")).toEqual({ bulls: 2, cows: 2 });
    expect(evaluateGuess("1234", "1423")).toEqual({ bulls: 1, cows: 3 });
    expect(evaluateGuess("1234", "5678")).toEqual({ bulls: 0, cows: 0 });
  });

  it("ignore upper case", () => {
    expect(evaluateGuess("12ab", "12AB")).toEqual({ bulls: 4, cows: 0 });
    expect(evaluateGuess("12ab", "ba21")).toEqual({ bulls: 0, cows: 4 });
    expect(evaluateGuess("12ab", "12ba")).toEqual({ bulls: 2, cows: 2 });
    expect(evaluateGuess("12ab", "cd34")).toEqual({ bulls: 0, cows: 0 });
  });
});
