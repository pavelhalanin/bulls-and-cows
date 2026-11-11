import { createDigitValidator, type Base } from "./createDigitValidator";

export const isValidGuess = (
  guess: string,
  length: number,
  base: Base
): boolean => {
  const isDigit = createDigitValidator(base);
  const digits: Array<string> = guess.toLowerCase().split("");

  const countDigits: number = digits.length;
  const countUniqueDigits: number = new Set<string>(digits).size;
  if (countDigits !== countUniqueDigits) {
    return false;
  }

  if (countDigits !== length) {
    return false;
  }

  return digits.every((e) => isDigit(e));
};
