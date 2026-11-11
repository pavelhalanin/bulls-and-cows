import { describe, expect, it } from "vitest";
import { createDigitValidator } from "./createDigitValidator";

describe("createDigitValidator", () => {
  it("isDigitBase2", () => {
    const isDigitBase2 = createDigitValidator(2);

    expect(isDigitBase2("-1")).toBe(false);
    expect(isDigitBase2("0")).toBe(true);

    expect(isDigitBase2("1")).toBe(true);
    expect(isDigitBase2("2")).toBe(false);

    expect(isDigitBase2("")).toBe(false);
    expect(isDigitBase2("-")).toBe(false);
  });

  it("isDigitBase8", () => {
    const isDigitBase8 = createDigitValidator(8);

    expect(isDigitBase8("-1")).toBe(false);

    expect(isDigitBase8("0")).toBe(true);
    expect(isDigitBase8("3")).toBe(true);
    expect(isDigitBase8("7")).toBe(true);

    expect(isDigitBase8("8")).toBe(false);
    expect(isDigitBase8("")).toBe(false);
    expect(isDigitBase8("-")).toBe(false);
  });

  it("isDigitBase10", () => {
    const isDigitBase10 = createDigitValidator(10);

    expect(isDigitBase10("-1")).toBe(false);

    expect(isDigitBase10("0")).toBe(true);
    expect(isDigitBase10("4")).toBe(true);
    expect(isDigitBase10("9")).toBe(true);

    expect(isDigitBase10("a")).toBe(false);
    expect(isDigitBase10("")).toBe(false);
    expect(isDigitBase10("-")).toBe(false);
  });

  it("isDigitBase16", () => {
    const isDigitBase16 = createDigitValidator(16);

    expect(isDigitBase16("-1")).toBe(false);

    expect(isDigitBase16("0")).toBe(true);
    expect(isDigitBase16("7")).toBe(true);
    expect(isDigitBase16("f")).toBe(true);

    expect(isDigitBase16("g")).toBe(false);
    expect(isDigitBase16("")).toBe(false);
    expect(isDigitBase16("-")).toBe(false);
  });
});
