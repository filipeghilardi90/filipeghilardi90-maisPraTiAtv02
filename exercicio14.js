// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.



let empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: [
          { nome: 'Ana', cargo: 'Gerente de RH' },
          { nome: 'João', cargo: 'Analista de RH' }
        ]
      },
      {
        nome: 'Tecnologia',
        funcionarios: [
          { nome: 'Carlos', cargo: 'Desenvolvedor' },
          { nome: 'Maria', cargo: 'Analista de Sistemas' }
        ]
      },
      {
        nome: 'Financeiro',
        funcionarios: [
          { nome: 'Fernanda', cargo: 'Contadora' },
          { nome: 'Pedro', cargo: 'Analista Financeiro' }
        ]
      }
    ]
  };
  
  for (let departamento in empresa.departamentos) {
   
    let depto = empresa.departamentos[departamento];
    console.log(`Departamento: ${depto.nome}\n`);
    
  
    for (let funcionario of depto.funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}\n`);
    }
  }