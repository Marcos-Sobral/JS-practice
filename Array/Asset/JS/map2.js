function map() {
    const numeros = [2,4,6,8];
    console.log(numeros.map(arrayNovo => arrayNovo ** 2));
}

function filter(){
    const produtos = [
        { nome: 'Lápis', preco: 2 },
        { nome: 'Caderno', preco: 15 },
        { nome: 'Caneta', preco: 8 },
        { nome: 'Livro', preco: 25 }
    ];

    let array_produtos = produtos.filter(arrayNovo => arrayNovo.preco > 20);
    console.log(array_produtos);
}

function reduce(){
    const notas = [7, 8, 9, 10];
    let array_notas = notas.reduce((acumulador, valorAtual) => (acumulador+ valorAtual+0));
    let media = array_notas/notas.length;
    console.log(media);
}

map();
filter();
reduce();