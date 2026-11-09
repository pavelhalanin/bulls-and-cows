import { describe, expect, it } from "vitest";
import { generateSecret } from "./generateSecret";

describe("generateSecret", () => {
  it("throws when length greater than the base", () => {
    const MAX_LENGTH = 5;
    const DIGIT_BASE = 2;
    const ERROR =
      "The length of the unique digit string cannot be greater than the base";
    expect(() => generateSecret(MAX_LENGTH, DIGIT_BASE)).toThrow(ERROR);
  });

  it("select unique random value", () => {
    expect(generateSecret(2, 2, () => 0.5)).toEqual("10");
    expect(generateSecret(3, 8, () => 0.5)).toEqual("435");
    expect(generateSecret(3, 10, () => 0.5)).toEqual("546");
    expect(generateSecret(3, 16, () => 0.5)).toEqual("879");
  });
});
