// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.


let clientes =  [
    {nome:"Filipe", idade: 34, cidade: "Canoas"},
    {nome:"Paulo", idade: 29, cidade: "Porto Alegre"},
    {nome:"Mario", idade: 27, cidade: "Sapucaia"},
    {nome:"João", idade: 50, cidade: "Esteio"},
];

let cont = 0;

clientes.forEach(cliente => {
   
    if(cliente.idade > 30){
         cont++;
    }
    
    
});
console.log(`O numero de clientes com idade mais que 30 é: ${cont}`);
    