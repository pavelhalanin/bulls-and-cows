import { getGameWinners } from "../../state/winners/getGameWinners";
import { getFormatedDate } from "../../utils/getFormatedDate";
import { gameWinnersTableHead } from "./gameWinnersTableHead";

export const gameWinners = () => {
  const winners = getGameWinners();
  const div = document.createElement("div");
  if (winners.length == 0) {
    div.textContent = "Список пуст, так как ни одна игра ни сыграна";
    return div;
  }

  const table = document.createElement("table");
  table.classList.add("game__winner_table");
  table.appendChild(gameWinnersTableHead());
  const tbody = document.createElement("tbody");

  winners.reverse().forEach((e) => {
    const tr = document.createElement("tr");

    const td0 = document.createElement("td");
    td0.textContent = getFormatedDate(e.datetime);

    const td1 = document.createElement("td");
    td1.textContent = String(e.diffDateTime / 1000);

    const td2 = document.createElement("td");
    td2.textContent = String(e.attempts);

    const td3 = document.createElement("td");
    td3.textContent = String(e.base);

    const td4 = document.createElement("td");
    td4.textContent = String(e.length);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  div.appendChild(table);

  return div;
};
