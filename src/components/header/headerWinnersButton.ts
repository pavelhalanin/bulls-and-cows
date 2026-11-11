import { app } from "../app";

export const headerWinnersButton = () => {
  const BUTTON = document.createElement("button");
  BUTTON.textContent = "Победители";
  BUTTON.onclick = () => app("winners");
  return BUTTON;
};
