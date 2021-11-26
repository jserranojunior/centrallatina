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
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function dateJstoUs(value: string | number | Date) {
  const d = new Date(value);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getJsHour(value: Date) {
  const hour = value.getHours();
  const minute = value.getMinutes();
  return `${hour}:${minute}`;
}
