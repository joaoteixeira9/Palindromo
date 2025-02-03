const isPalindromo = require("./palindromo");

test("A função deve retornar true", () => {
    expect(isPalindromo('arara')).toBe(true)
})

test("A função deve retornar true", () => {
    expect(isPalindromo('subi no onibus')).toBe(true)
})

test("A função deve retornar false", () => {
    expect(isPalindromo('Marrocos')).toBe(false)
})