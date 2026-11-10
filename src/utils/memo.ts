export const memo = <Args extends unknown[], Result>(
  fn: (...args: Args) => Result
): ((...args: Args) => Result) => {
  const memoValues = new Map<string, Result>();

  return (...args: Args): Result => {
    const memoKey = JSON.stringify(args);

    if (memoValues.has(memoKey)) {
      return memoValues.get(memoKey) as Result;
    }

    const result = fn(...args);
    memoValues.set(memoKey, result);

    return result;
  };
};
