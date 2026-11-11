export const gameWinnersTableHead = () => {
  const thead = document.createElement("thead");
  const theadTr = document.createElement("tr");

  const th0 = document.createElement("th");
  th0.textContent = "Дата и время";

  const th1 = document.createElement("th");
  th1.textContent = "Разница времени";

  const th2 = document.createElement("th");
  th2.textContent = "Кол-во попыток";

  const th3 = document.createElement("th");
  th3.textContent = "Система счисления";

  const th4 = document.createElement("th");
  th4.textContent = "Длина числа";

  theadTr.appendChild(th0);
  theadTr.appendChild(th1);
  theadTr.appendChild(th2);
  theadTr.appendChild(th3);
  theadTr.appendChild(th4);

  thead.appendChild(theadTr);

  return thead;
};
