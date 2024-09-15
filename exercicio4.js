    // 4. Iterando Sobre Arrays de Objetos
    // ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
    // uma pessoa com nome, idade, e cidade. Use for of para exibir as
    // informações de cada pessoa no console.

    let pessoas = [
        {nome: "Filipe", idade: 34, cidade:"Canoas"},
        {nome: "Paulo", idade: 50, cidade:"Esteio"},
        {nome: "Roberto", idade: 45, cidade:"Sapucaia"},
        {nome: "Maria", idade: 24, cidade:"São Leopoldo"}

    ];

    for (let pessoa of pessoas){
        console.log(`Nome: ${pessoa.nome} , Idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`);
    };
    //