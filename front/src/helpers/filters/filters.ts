export const money = (value: number): string => {
  if (!value) {
    return "0,00";
  } else {
    const val: string = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const limitarTexto = (value: string, tamanho: number): string => {
  if (!value) return "";
  value = value.toString();
  return value.substring(0, tamanho) + " ...";
};
