// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.


let vendas = [
    {produto: "notbook", quant: 3, valor: 1000.0},
    {produto: "smartphone", quant: 2, valor: 800.0},
    {produto: "geladeira", quant: 5, valor: 3000.0},
    {produto: "fogão", quant: 6, valor: 700.0},
    {produto: "bicicleta", quant: 10, valor: 300.0},
];
let totalVendas= 0.0;
vendas.forEach(venda => {
   totalVendas  +=  venda.quant * venda.valor;

    
});

console.log(`Valor total das vendas: R$ ${totalVendas.toFixed(2)}`);
