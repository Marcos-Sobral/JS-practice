function exibir(resultado) {
    console.log("Estamos dentro do Callback:", resultado);
}

function soma(a,b,cb) { 
    let resultado = a + b;
    cb(resultado);
}

function multiplicacao(a,b,cb) { 
    let resultado = a * b;
    cb(resultado);
}

soma(1,2, exibir);
multiplicacao(5,2, exibir);