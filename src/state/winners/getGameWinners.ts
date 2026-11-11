import type { WinnerDto } from "./WinnerDto";

export const getGameWinners = (): Array<WinnerDto> => {
  let str = localStorage.getItem("win");
  let arr: Array<WinnerDto> = [];
  if (!str) {
    str = "[]";
    localStorage.setItem("history", str);
  }

  try {
    const obj: Array<WinnerDto> = JSON.parse(str);
    if (!Array.isArray(obj)) {
      str = "[]";
      localStorage.setItem("win", str);
    } else {
      arr = obj;
    }
  } catch (_exception) {
    str = "[]";
    localStorage.setItem("win", str);
  }

  return arr;
};
