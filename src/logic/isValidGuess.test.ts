import { describe, expect, it } from "vitest";
import { isValidGuess } from "./isValidGuess";

describe("isValidGuess", () => {
  it("string has unique digits?", () => {
    const MAX_LENGTH = 3;
    const DIGIT_BASE = 10;
    expect(isValidGuess("111", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("123", MAX_LENGTH, DIGIT_BASE)).toBe(true);
  });

  it("string digits has max length", () => {
    const MAX_LENGTH = 3;
    const DIGIT_BASE = 10;
    expect(isValidGuess("1", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("12", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("123", MAX_LENGTH, DIGIT_BASE)).toBe(true);
  });

  it("is valid base 2", () => {
    const MAX_LENGTH = 2;
    const DIGIT_BASE = 2;

    expect(isValidGuess("0 ", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess(" 1", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("01", MAX_LENGTH, DIGIT_BASE)).toBe(true);
  });

  it("is valid base 8", () => {
    const MAX_LENGTH = 3;
    const DIGIT_BASE = 8;

    expect(isValidGuess("17 ", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess(" 73", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("173", MAX_LENGTH, DIGIT_BASE)).toBe(true);
  });

  it("isDigitBase10", () => {
    const MAX_LENGTH = 3;
    const DIGIT_BASE = 10;

    expect(isValidGuess("19 ", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess(" 93", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("193", MAX_LENGTH, DIGIT_BASE)).toBe(true);
  });

  it("isDigitBase16", () => {
    const MAX_LENGTH = 3;
    const DIGIT_BASE = 16;

    expect(isValidGuess("1f ", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess(" fa", MAX_LENGTH, DIGIT_BASE)).toBe(false);
    expect(isValidGuess("1fa", MAX_LENGTH, DIGIT_BASE)).toBe(true);
  });
});
