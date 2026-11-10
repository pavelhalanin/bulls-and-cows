export const newGameInputRadio = (
  value: string,
  id: string,
  name: string,
  checked: boolean
) => {
  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  input.setAttribute("id", id);
  if (checked) {
    input.setAttribute("checked", "true");
  }
  return input;
};
