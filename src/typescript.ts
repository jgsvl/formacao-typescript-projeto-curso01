//tipos primitivos

let valor: number = 3000.0;
let nome: string = "joao";
let isPago: boolean = true;
let qualquerCoisa: any = "opa";
qualquerCoisa = 45;

// Arrays

const listaAny = [];
listaAny.push("joão", "Gabriel", 30, true, []);

const listaNumeros: number[] = [];
listaNumeros.push(9.45, 65, 30, .001, -4.4);

//Tipos personalizados (Type Alias)

type Transacao = {
    tipoTransacao: TipoTransacao,
    data: Date,
    valor: number
}

// Enum

enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}

console.log(novaTransacao);