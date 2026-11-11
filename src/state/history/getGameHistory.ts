import type { HistoryDto } from "./HistoryDto";

export const getGameHistory = (): Array<HistoryDto> => {
  let str = localStorage.getItem("history");
  let arr: Array<HistoryDto> = [];
  if (!str) {
    str = "[]";
    localStorage.setItem("history", str);
  }

  try {
    const obj: Array<HistoryDto> = JSON.parse(str);
    if (!Array.isArray(obj)) {
      str = "[]";
      localStorage.setItem("history", str);
    } else {
      arr = obj;
    }
  } catch (_exception) {
    str = "[]";
    localStorage.setItem("history", str);
  }

  return arr;
};
