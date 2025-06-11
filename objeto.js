//1 - Criando um objeto, que é um tipo de dado
let pessoa = {
    nome: 'Ana',
    cpf: '99966655512',
    genero: 'F',
    idade: 25,
    altura: 1.65,
    dataNacimento: '25/12/1998',
    //endereco: 'Rua 01, Casa 02, Messejana, Fortaleza, Ceará',
    endereco: {
        logradouro: 'Rua 01',
        numero: 'Casa 02',
        bairro: 'Messejana',
        cidade: 'Fortaleza',
        estado: 'Ceará',
    },
    adicionar: function () {
        console.log('Adicionando...')
    },
    remover: function () {
        console.log('Removendo...')
    },
    /* telefone: '999952233',
    email: 'ana@ig.com.br', */
    tamanhos: ['G', 'GG'],
    estrangeiro: false,
    contato: {
        telefone: '999952233',
        email: 'ana@ig.com.br',
    }
}

//Imprimindo no console
console.log(pessoa)

// 2 - Acessando os dados do objeto
console.log(pessoa.dataNacimento);
console.log(pessoa.endereco)
console.log(pessoa.contato.email)
console.log(pessoa.endereco.estado)