export const clearGameHistory = (): void => {
  localStorage.setItem("history", "[]");
};
