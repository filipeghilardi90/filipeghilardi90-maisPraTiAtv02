
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: "chevrolet",
    modelo: "corsa",
    ano: 1995,
    cor: "vermelho"

};

for(let propriedades in carro){
    console.log(`${propriedades}: ${carro[propriedades]}`);
}