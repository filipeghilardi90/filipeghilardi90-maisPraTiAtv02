// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "A arte da Guerra",
    autor: "Sun Tzu",
    anoPublicacao: 80,
    genero: "ação"


};

for (let propriedade in livro) {
    if (livro[propriedade] === "editora") {
        console.log(`${propriedade}: ${livro[propriedade]}`);
    } else {
        livro.editora = " Grupo Editorial Record."

    }
  

}
console.log(livro);
