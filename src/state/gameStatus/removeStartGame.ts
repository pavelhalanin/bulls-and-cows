export const removeStartGame = (): void => {
  localStorage.setItem("isGameStarted", "not_started");
};
