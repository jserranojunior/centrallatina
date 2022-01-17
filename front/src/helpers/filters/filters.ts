export const money = (value: number): string => {
  if (!value) {
    return "0,00";
  } else {
    const val: string = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const convertIntToFloatWithoutZero = (value:string):string => {
const valueCents = value.slice(-2)
const valueWithoutCents = value.slice(0, -2)
const valorWithDot = `${valueWithoutCents}.${valueCents}`
return valorWithDot;
}

export const intToMoney = (value: any): any => {
  if (!value) {
    const formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
      return  parseFloat("0").toLocaleString('pt-BR', formato)
  } else {
    const valString = value.toString()
    const resultMoney = convertIntToFloatWithoutZero(valString)
    const formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    return  parseFloat(resultMoney).toLocaleString('pt-BR', formato)
;
  }
};

export const limitarTexto = (value: string, tamanho: number): string => {
  if (!value) return "";
  value = value.toString();
  return value.substring(0, tamanho) + " ...";
};
