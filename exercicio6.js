// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.


let funcionarios = [
    { nome: "funcionaro1", cargo: "gerente", salario: 5.000 },
    { nome: "funcionario2", cargo: "diretor", salario: 15.000 },
    { nome: "funcionario3", cargo: "operador", salario: 3.300 },
    { nome: "funcionario4", cargo: "porteiro", salario: 1.800 },
];




for (let funcionario of funcionarios) {
    
    let salario = funcionario.salario
    if( salario >= 5.000){

    console.log(`O funcionario: ${funcionario.nome} no cargo de ${funcionario.cargo} ganha: ${salario} por mês`);
    }
}