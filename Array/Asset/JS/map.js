
const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Carol', idade: 22 }
];

const nomes = pessoas.map(pessoas => pessoas.nome);

function exibir(nomes) {
    let conteudo = document.getElementById("resultado");
    let lista = ""; // String para armazenar os itens da lista 
    
    nomes.forEach(
        nome => { lista += `<h1>${nome}</h1>`; 
    });

    conteudo.innerHTML = lista;
}
console.log(nomes);

exibir(nomes);

