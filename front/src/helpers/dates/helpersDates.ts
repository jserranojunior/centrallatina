export function dateUStoJs(value: string): Date | undefined {
  if (value) {
    const date: Date = new Date(value);
    return date;
  }
}

export function datePtBrToUs(data: string): string {
  if (data) {
    const dia = data.split("/")[0];
    const mes = data.split("/")[1];
    const ano = data.split("/")[2];

    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  } else {
    return data;
  }
}
export function dateUsToPtBr(data: string): string {
  if (data) {
    const dia = data.split("-")[2];
    const mes = data.split("-")[1];
    const ano = data.split("-")[0];

    return ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
  } else {
    return data;
  }
}
