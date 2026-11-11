export type Base = 2 | 8 | 10 | 16;

export const createDigitValidator =
  (base: Base) =>
  (char: string): boolean => {
    if (char.length !== 1) {
      return false;
    }

    const index = "0123456789abcdef".indexOf(char.toLowerCase());
    return index >= 0 && index < base;
  };
