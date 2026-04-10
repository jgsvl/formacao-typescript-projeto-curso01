"use strict";
//tipos primitivos
let valor = 3000.0;
let nome = "joao";
let isPago = true;
let qualquerCoisa = "opa";
qualquerCoisa = 45;
// Arrays
const listaAny = [];
listaAny.push("joão", "Gabriel", 30, true, []);
const listaNumeros = [];
listaNumeros.push(9.45, 65, 30, .001, -4.4);
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
