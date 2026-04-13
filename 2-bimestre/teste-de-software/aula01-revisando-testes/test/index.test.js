const subtrair = require("../src/index")

describe("Função subtrair", () => {

  test("Deve retornar 3 quando subtrair 5 por 2", () => {

    const resultado = subtrair(5, 2)

    expect(resultado).toBe(3)

  })

})