export const getBaseName = (base: number): string => {
  switch (base) {
    case 2:
      return "bin";

    case 8:
      return "oct";

    case 10:
      return "dec";

    case 16:
      return "hex";

    default:
      return "";
  }
};
