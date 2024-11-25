// criando a logica do buscar
/*
const dados_user = [
    {nome:"Alice", idade: 25}
]
 dados_user.forEach(user => {
    user.nome.includes("");
 });
 console.log(resultado);
 */

//O PRIMEIRO
/*const dados_user = [
    {nome:"Alice", idade: 25}
];

async function buscarDados(nome) {
    dados_user.forEach(user => {
        setTimeout(() => {
            if (user.nome.includes(nome)) {
                console.log(user.nome.includes(nome));
                return console.log("Usuário",nome,"encontrado!");
            } else {
               throw new Error("Valor Nulo ou indefinido informado, tente novamente");
            }
        }, 2000);
     });
}

async function buscando(){
    try {
        const mensagem = await buscarDados("Alice");
        console.log(mensagem);
    } catch (error) {
        console.log(error);
    }
}

buscando();
*/

//VERSÃO CORRIGIDA
const dados_user = [
    {nome:"Alice", idade: 25}
];

async function buscarDados(nome) {
        setTimeout(() => {
            let user = dados_user.find(user_array => user_array.nome === nome);
            if (user) {
                console.log(user);
                return console.log(`Usuário ${user.nome} encontrado!`);
            } else {
               throw new Error("Valor Nulo ou indefinido informado, tente novamente");
            }
        }, 2000);
}

async function buscando(){
    try {
        const mensagem = await buscarDados("Alice");
        console.log(mensagem);
    } catch (error) {
        console.log(error);
    }
}

buscando();