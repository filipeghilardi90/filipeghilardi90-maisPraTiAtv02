// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.


let alunos = [
    { nome: "aluno1", nota1: 6, nota2: 4 },
    { nome: "aluno2", nota1: 7, nota2: 1 },
    { nome: "aluno3", nota1: 3, nota2: 3 },
    { nome: "aluno4", nota1: 1, nota2: 1 },
];

function calculaNota(n1, n2) {


    return (n1 + n2) / 2;


}



for (let aluno of alunos) {
    let media = calculaNota(aluno.nota1, aluno.nota2);
    console.log(`O aluno: ${aluno.nome} ficou com a media final: ${media}`);
}