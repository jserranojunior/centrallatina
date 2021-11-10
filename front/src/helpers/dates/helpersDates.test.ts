import {dateUStoJs} from "./helpersDates"
const actualDate = new Date("2021-03-15")
test("Se o valor for zero retorno em REAL", () => {
  expect(dateUStoJs("2021-03-15")).toStrictEqual(actualDate);
});