// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.


const pedidos = [
    { cliente: 'Filipe', produto: 'Camiseta', quantidade: 2 },
    { cliente: 'João', produto: 'Calça', quantidade: 3 },
    { cliente: 'Paulo', produto: 'Tênis', quantidade: 1 },
    { cliente: 'Filipe', produto: 'Jaqueta', quantidade: 1 },
    { cliente: 'João', produto: 'Tênis', quantidade: 2 },
    { cliente: 'Paulo', produto: 'Camiseta', quantidade: 5 }
];

const totalPorCliente = {};

pedidos.forEach(pedido => {
    const { cliente, quantidade } = pedido;
    
   
    if (!totalPorCliente[cliente]) {
        totalPorCliente[cliente] = 0;
    }
    
    totalPorCliente[cliente] += quantidade;
});


console.log(totalPorCliente);
//