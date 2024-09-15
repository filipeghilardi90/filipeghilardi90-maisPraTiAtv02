// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


let estoque = [
    {produto:"arror",quantidade: 5, minimo: 10},
    {produto:"feijão",quantidade: 3, minimo:8},
    {produto:"massa",quantidade: 6, minimo: 10},
    {produto:"azeite",quantidade: 8, minimo: 6},
    {produto:"açucar",quantidade: 7, minimo: 4},
    {produto:"farinha",quantidade: 10, minimo: 5},
];

estoque.forEach(item => {
    if(item.quantidade < item.minimo){
        item.quantidade *= 2;
    }
    
});

console.log(estoque);