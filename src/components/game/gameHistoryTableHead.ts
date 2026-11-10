export const gameHistoryTableHead = () => {
  const thead = document.createElement("thead");
  const theadTr = document.createElement("tr");

  const th0 = document.createElement("th");
  th0.textContent = "Дата и время";

  const th1 = document.createElement("th");
  th1.textContent = "Число";

  const th2 = document.createElement("th");
  th2.textContent = "Быки";

  const th3 = document.createElement("th");
  th3.textContent = "Коровы";

  theadTr.appendChild(th0);
  theadTr.appendChild(th1);
  theadTr.appendChild(th2);
  theadTr.appendChild(th3);

  thead.appendChild(theadTr);

  return thead;
};
