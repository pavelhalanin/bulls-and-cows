import {
  gameStateGetBase,
  gameStateGetLength,
  gameStateSetLength,
} from "../../state/gameState";
import { app } from "../app";
import { newGameInputRadio } from "./newGameInputRadio";
import { newGameLabel } from "./newGameLabel";

export const newGameLengthRadio = () => {
  const div = document.createElement("div");
  div.classList.add("newGame__radio");

  const length = gameStateGetLength();
  const base = gameStateGetBase();

  const span = document.createElement("span");
  span.textContent = "Длина числа:";
  div.appendChild(span);

  [2, 3, 4, 5, 6].forEach((e) => {
    const strLength = String(e);
    const inputId = `length_${e}`;
    const input = newGameInputRadio(
      strLength,
      inputId,
      "length",
      strLength === length
    );
    input.onchange = () => {
      gameStateSetLength(input.getAttribute("value"));
      app();
    };
    input.style.display = "none";
    div.appendChild(input);

    const label = newGameLabel(strLength, inputId);

    if (e > Number(base)) {
      label.classList.add("disabled");
    }

    div.appendChild(label);
  });

  return div;
};
