import { getGameHistory } from "./getGameHistory";
import type { HistoryDto } from "./HistoryDto";

export const addGameHistory = (entry: HistoryDto): void => {
  const history = getGameHistory();
  const newArray = [...history, entry];
  localStorage.setItem("history", JSON.stringify(newArray));
};
