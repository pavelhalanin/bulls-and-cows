import { gameStateGetBase, gameStateSetBase } from "../../state/gameState";
import { getBaseName } from "../../utils/getBaseName";
import { app } from "../app";
import { newGameInputRadio } from "./newGameInputRadio";
import { newGameLabel } from "./newGameLabel";

export const newGameBaseRadio = () => {
  const div = document.createElement("div");
  div.classList.add("newGame__radio");

  const base = gameStateGetBase();

  const span = document.createElement("span");
  span.textContent = "Система счисления:";
  div.appendChild(span);

  [2, 8, 10, 16].forEach((currentBase) => {
    const strBase = String(currentBase);
    const inputId = `base_${currentBase}`;
    const input = newGameInputRadio(
      strBase,
      inputId,
      "base",
      currentBase === base
    );
    input.onchange = () => {
      gameStateSetBase(input.getAttribute("value"));
      app();
    };
    input.style.display = "none";
    div.appendChild(input);

    const baseName = getBaseName(currentBase);
    const labelText = `${currentBase} (${baseName})`;
    div.appendChild(newGameLabel(labelText, inputId));
  });

  return div;
};
