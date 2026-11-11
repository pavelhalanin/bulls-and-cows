import { getGameHistory } from "../../state/history/getGameHistory";
import { getFormatedDate } from "../../utils/getFormatedDate";
import { gameHistoryTableHead } from "./gameHistoryTableHead";

export const gameHistory = () => {
  const history = getGameHistory();
  const div = document.createElement("div");
  if (history.length == 0) {
    return div;
  }

  const table = document.createElement("table");
  table.classList.add("game__history_table");
  table.appendChild(gameHistoryTableHead());
  const tbody = document.createElement("tbody");

  history.reverse().forEach((e) => {
    const tr = document.createElement("tr");

    const td0 = document.createElement("td");
    td0.textContent = getFormatedDate(e.datetime);

    const td1 = document.createElement("td");
    td1.textContent = String(e.value);

    const td2 = document.createElement("td");
    td2.textContent = String(e.bulls === 0 ? "-" : e.bulls);

    const td3 = document.createElement("td");
    td3.textContent = String(e.cows === 0 ? "-" : e.cows);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  div.appendChild(table);

  return div;
};
