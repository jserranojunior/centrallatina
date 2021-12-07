import {money} from "./filters"

test("Se o valor for zero retorno em REAL", () => {
  expect(money(0)).toBe("0,00");
});

test("Se o valor for 1 retorno em REAL", () => {
  expect(money(1)).toBe("1,00");
});
