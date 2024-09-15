// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.


let filmes = [
    { titulo: 'A Origem', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'O Senhor dos Anéis: A Sociedade do Anel', diretor: 'Peter Jackson', anoLancamento: 2001 },
    { titulo: 'O Silêncio dos Inocentes', diretor: 'Jonathan Demme', anoLancamento: 1991 },
    { titulo: 'Matrix', diretor: 'Lana e Lilly Wachowski', anoLancamento: 1999 },
    { titulo: 'Cidadão Kane', diretor: 'Orson Welles', anoLancamento: 1941 }

];

const titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);