import { memo } from "../utils/memo";

export const countPossibleFoo = (length: number, base: number): number => {
  if (length === 0) {
    return 1;
  }

  if (length > base || length < 0 || base < 0) {
    return 0;
  }

  return base * countPossibleSecrets(length - 1, base - 1);
};

export const countPossibleSecrets = memo(countPossibleFoo);
