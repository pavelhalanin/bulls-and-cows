export interface evaluateGuessResult {
  bulls: number;
  cows: number;
}

export const evaluateGuess = (
  _secret: string,
  _guess: string
): evaluateGuessResult => {
  return {
    bulls: 0,
    cows: 0,
  };
};
