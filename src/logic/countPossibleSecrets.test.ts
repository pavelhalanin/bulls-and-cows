import { describe, expect, it } from "vitest";
import { countPossibleSecrets } from "./countPossibleSecrets";

describe("countPossibleSecrets", () => {
  it("should return zero when length greater that the base", () => {
    const MAX_LENGTH = 5;
    const DIGIT_BASE = 2;
    expect(countPossibleSecrets(MAX_LENGTH, DIGIT_BASE)).toEqual(0);
  });

  it("should return zero when length less than zero", () => {
    const MAX_LENGTH = -10;
    const DIGIT_BASE = 2;
    expect(countPossibleSecrets(MAX_LENGTH, DIGIT_BASE)).toEqual(0);
  });

  it("should return zero when base less than zero", () => {
    const MAX_LENGTH = 5;
    const DIGIT_BASE = -10;
    expect(countPossibleSecrets(MAX_LENGTH, DIGIT_BASE)).toEqual(0);
  });

  it("should return one when length equals zero", () => {
    const MAX_LENGTH = 0;
    const DIGIT_BASE = 6;
    expect(countPossibleSecrets(MAX_LENGTH, DIGIT_BASE)).toEqual(1);
  });

  it("count unique combinations in probability theory [count = b! / (b - l)!]", () => {
    const MAX_LENGTH = 2;
    const DIGIT_BASE = 8;
    expect(countPossibleSecrets(MAX_LENGTH, DIGIT_BASE)).toEqual(56);
  });
});
