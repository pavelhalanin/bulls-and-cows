export interface evaluateGuessResult {
  bulls: number;
  cows: number;
}

export const evaluateGuess = (
  secret: string,
  guess: string
): evaluateGuessResult => {
  const DEFAULT_OBJ: evaluateGuessResult = {
    bulls: 0,
    cows: 0,
  };

  const STR_1 = secret.toLowerCase();
  const STR_2 = guess.toLowerCase();

  return STR_1.split("").reduce((obj, char, index) => {
    let bulls = obj.bulls;
    let cows = obj.cows;

    if (char === STR_2[index]) {
      bulls += 1;
      return { bulls, cows };
    }

    if (STR_2.indexOf(char) !== -1) {
      cows += 1;
      return { bulls, cows };
    }

    return { bulls, cows };
  }, DEFAULT_OBJ);
};
