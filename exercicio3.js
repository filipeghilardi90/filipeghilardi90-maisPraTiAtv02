// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
    nome: "bicicleta",
    categoria: "esporte",
    tamanho: 1.5,
    preco: 890.00,
    aro: 26
    

}

function filtrarPropriedades(produto, valor) {
    const novoObjeto = {};

    for (const chave in produto) {
        if (produto[chave] > valor) {
            novoObjeto[chave] = produto[chave];
        }
    }

    return novoObjeto;
}

// Usando a função para filtrar propriedades com valor maior que 10
let resultado = filtrarPropriedades(produto, 10);
console.log(resultado);