// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.


let transacoes = [
    {tipo:"entrada",valor: 100.0},
    {tipo:"saida",valor: 10.0},
    {tipo:"entrada",valor: 500.0},
    {tipo:"saida",valor: 200.0},
    {tipo:"entrada",valor: 100.0},
]

let saldoFinal = 0.0;

transacoes.forEach(transacao => {

    if(transacao.tipo === "entrada"){

        saldoFinal += transacao.valor;

    }else if(transacao.tipo ==="saida"){

        saldoFinal -= transacao.valor;

    }
  
       
});

console.log(`Saldo final é: R$ ${saldoFinal}`)

//