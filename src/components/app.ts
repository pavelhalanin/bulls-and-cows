import { isGameStarted } from "../state/gameStatus/isGameStarted";
import { gamePage } from "./game/gamePage";
import { header } from "./header/header";
import { newGamePage } from "./newGame/newGamePage";
import { gameWinnersPage } from "./winners/gameWinnersPage";

export const app = (page: string = "newGame") => {
  const SELECTOR = "#app";
  const ROOT = document.querySelector(SELECTOR);
  if (!ROOT) {
    throw new Error(`Node is not found: ${SELECTOR}`);
  }

  const DIV = document.createElement("div");
  DIV.setAttribute("id", "content");

  ROOT.replaceChildren();
  ROOT.appendChild(header());
  ROOT.appendChild(DIV);

  if (page !== "game") {
    if (isGameStarted()) {
      alert("Игра еще не закончена");
      gamePage();
      return;
    }
  }

  switch (page) {
    case "newGame":
      newGamePage();
      return;

    case "game":
      gamePage();
      return;

    case "winners":
      gameWinnersPage();
      return;
  }
};
