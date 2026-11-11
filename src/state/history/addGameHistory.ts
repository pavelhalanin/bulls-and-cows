import { getGameHistory } from "./getGameHistory";
import type { HistoryDto } from "./HistoryDto";

export const addGameHistory = (entry: HistoryDto): void => {
  const history = getGameHistory();

  const value = String(entry.value).toLowerCase();
  for (let n = 0; n < history.length; n += 1) {
    const current = history[n];
    const valueN = String(current.value).toLowerCase();
    if (value === valueN) {
      alert(
        `Вы уже проверяли эту ситуацию и получили ${current.bulls} быков, ${current.cows} коров`
      );
      return;
    }
  }
  entry.value = value;

  const newArray = [...history, entry];
  localStorage.setItem("history", JSON.stringify(newArray));
};
