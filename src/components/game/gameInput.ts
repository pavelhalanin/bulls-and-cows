import { isValidGuess } from "../../logic/isValidGuess";
import {
  gameStateGetBase,
  gameStateGetLength,
  gameStateGetValue,
  gameStateSetValue,
} from "../../state/gameState";
import { getBaseName } from "../../utils/getBaseName";
import { checkCowsAndBulls } from "./checkCowsAndBulls";

export const gameInput = () => {
  const div = document.createElement("div");
  div.classList.add("gameForm");

  const base = gameStateGetBase();
  const baseName = getBaseName(base);
  const length = gameStateGetLength();
  div.append(`Введите число [${baseName}] размером ${length}:`);

  const input = document.createElement("input");
  const myValue = gameStateGetValue().slice(0, +length);
  input.classList.add("game_form__input");
  input.setAttribute("id", "myvalue");
  input.setAttribute("type", "text");
  input.setAttribute("maxlength", length);
  input.setAttribute("value", myValue);

  if (isValidGuess(myValue, +length, base)) {
    input.classList.add("game_form__input--valid");
    input.classList.remove("game_form__input--error");
  } else {
    input.classList.add("game_form__input--error");
    input.classList.remove("game_form__input--valid");
  }

  input.oninput = () => {
    const input = document.querySelector<HTMLInputElement>("#myvalue");
    const value = input?.value ?? "";
    gameStateSetValue(value);
    const newValue = gameStateGetValue();
    if (input) {
      input.value = newValue;
      if (isValidGuess(newValue, +length, base)) {
        input.classList.add("game_form__input--valid");
        input.classList.remove("game_form__input--error");
      } else {
        input.classList.add("game_form__input--error");
        input.classList.remove("game_form__input--valid");
      }
    }
  };

  const button = document.createElement("button");
  button.classList.add("game_form__button");
  button.textContent = "Send";
  button.onclick = () => checkCowsAndBulls();

  div.appendChild(input);
  div.appendChild(button);

  return div;
};
