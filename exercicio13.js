// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = { 
    itens: [
    {nome:"arror",quantidade: 5, precoUnitario: 10.00},
    {nome:"feijão",quantidade: 3, precoUnitario:8.00},
    {nome:"massa",quantidade: 6, precoUnitario: 10.00},
    {nome:"azeite",quantidade: 8, precoUnitario: 6.49},
    {nome:"açucar",quantidade: 7, precoUnitario: 4.99},
    {nome:"farinha",quantidade: 10,precoUnitario: 5.98},
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {

    valorTotal += item.quantidade * item.precoUnitario;
    
});

console.log(`O valor tota do carrinho é: R$ ${valorTotal.toFixed(2)}`);