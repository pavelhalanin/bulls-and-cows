import { headerNewGameButton } from "./headerNewGameButton";
import "./header.css";

export const header = () => {
  const DIV = document.createElement("div");
  DIV.classList.add("header");

  DIV.appendChild(headerNewGameButton());
  return DIV;
};
