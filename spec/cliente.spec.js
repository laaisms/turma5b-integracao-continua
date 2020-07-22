const Cliente = require('../models/cliente');

test('Testando se o objeto cliente tem a propriedade nome', () => {
    let cliente = new Cliente()
    cliente.nome = "Erick"
    expect(cliente.nome).not.toBeUndefined();
});

test('Testando validação de CPF, válido', () => {
    let cliente = new Cliente()
    cliente.cpf = "418.825.350-90"
    expect(cliente.validarCPF()).toBe(true);
});

test('Testando validação de CPF, inválido', () => {
    let cliente = new Cliente()
    cliente.cpf = "418.825.350-10"
    expect(cliente.validarCPF()).toBe(false);
});

test('Testando cpf undefined', () => {
    let cliente = new Cliente()
    cliente.cpf = undefined
    expect(cliente.validarCPF()).toBe(false);
});

test('Testando se existe CPF', () => {
    let cliente = new Cliente()
    cliente.cpf = "419.312.478-97"
    expect(cliente.cpf()).not.toBeUndefined();
});