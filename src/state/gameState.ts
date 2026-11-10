import type { Base } from "../logic/createDigitValidator";

export const gameStateGetSecret = () => {
  return localStorage.getItem("secret") || "";
};

export const gameStateSetSecret = (value: string) => {
  localStorage.setItem("secret", value);
};

export const gameStateGetValue = () => {
  return localStorage.getItem("value") || "";
};

export const gameStateSetValue = (value: string) => {
  const arr = value.split("");
  const set = new Set(arr);
  const uniqueArray = Array.from(set);
  const newValue = uniqueArray.join("");
  localStorage.setItem("value", newValue);
};

export const gameStateGetLength = () => {
  const length = localStorage.getItem("length");
  switch (length) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
      return length;

    default:
      return "2";
  }
};

export const gameStateSetLength = (value: string | null) => {
  localStorage.setItem("length", value || "");
};

export const gameStateGetBase = (): Base => {
  const base = localStorage.getItem("base");
  switch (base) {
    case "2":
      return 2;

    case "8":
      return 8;

    case "10":
      return 10;

    case "16":
      return 16;

    default:
      return 2;
  }
};

export const gameStateSetBase = (value: string | null) => {
  localStorage.setItem("base", value || "");
  const base = +gameStateGetBase();
  const length = +gameStateGetLength();
  const newLength = String(Math.min(length, base));
  gameStateSetLength(newLength);
};
