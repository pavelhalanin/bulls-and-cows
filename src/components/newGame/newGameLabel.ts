export const newGameLabel = (textContent: string, id: string) => {
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = textContent;
  return label;
};
