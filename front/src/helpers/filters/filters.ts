export const money = (value: number):string => {
  if (!value) {
    return "0,00";
  } else {
    const val:string = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};
