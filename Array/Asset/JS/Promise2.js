//Sistema de cadastro de usuário

/* --- pegando primeiro a lógica----

const data_user = [
    { nome_user: "", email_user: "", senha_user: "" }
];


data_user.push({ nome: "marcos", email: "sobral@gmail.com", senha: "marcos16" });
data_user.push({ nome: "vini", email: "vini@gmail.com", senha: "vini16" });
data_user.push({ nome: "marcos", email: "sobral@gmail.com", senha: "marcos16" });

console.log(data_user);*/

// Primeira versão e tá correta

const data_user = [
    { nome_user: "", email_user: "", senha_user: "" }
];

function cadastro(nome,email,senha) {
    let Cadastro_promise = new Promise(function (resolve, reject){
        if ((nome && nome.length >= 3) && (email && email.includes("@") == true) && (senha && senha.length >= 6)) {
            data_user.push({ nome_user: nome, email_user: email, senha_user: senha });
            resolve("Cadastro realizado com sucesso!");
        }else{
            reject("Erro no cadastro: dados inválidos");
        }
    });
    return Cadastro_promise;
}

cadastro("João", "joao@example.com", "123456")
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((mensagem) => {
        console.log(mensagem);
    });
cadastro("Jo", "joaoexample.com", "123")
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((mensagem) => {
        console.log(mensagem);
    });