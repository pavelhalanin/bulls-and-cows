import type { Base } from "./createDigitValidator";

export const generateSecret = (
  length: number,
  base: Base,
  random: () => number = Math.random
) => {
  if (length > base) {
    throw new Error(
      "The length of the unique digit string cannot be greater than the base"
    );
  }

  const DIGITS = "0123456789abcdef";
  let digitsForBase = DIGITS.slice(0, base).split("");

  const RESULT = [];
  let i = length;
  while (i > 0) {
    const max = digitsForBase.length - 1;
    const min = 0;
    const randomIndex = Math.floor(random() * (max - min + 1) + min);

    RESULT.push(digitsForBase[randomIndex]);

    digitsForBase = digitsForBase.filter((_e, index) => index !== randomIndex);

    i -= 1;
  }

  return RESULT.join("");
};
