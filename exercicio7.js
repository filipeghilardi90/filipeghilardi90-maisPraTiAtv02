// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: "produto1", preco: 60, desconto: 0 },
    { nome: "produto2", preco: 70, desconto: 0 },
    { nome: "produto3", preco: 30, desconto: 0 },
    { nome: "produto4", preco: 10, desconto: 0 },
];


produtos.forEach(produto => {
    produto.desconto = 0.10;
    produto.precoComDesconto = produto.preco * (1 - produto.desconto);
    console.log(`Nome: ${produto.nome}, Preço com desconto: R$ ${produto.precoComDesconto.toFixed(2)}`);
});

