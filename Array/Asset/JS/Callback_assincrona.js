//setTimeOut ->Espera tempo determinado (2s) para iniciar a função

setTimeout(() => {
    console.log("Estamos no setTimeout depois de 2s");
}, 2000);

// setInterval -> A cada dois segundo é repetida a função

setInterval(() => {
    console.log("Estamos no setInterval");
}, 100000);


//EXEMPLO PRATICO - A função só é executada depois de 2s

const user = {
    "login":[
        {
            "email":"marcossobraldev@gmail.com",
            "senha":"marcos20"
        },
        {
            "email":"sobraldev@gmail.com",
            "senha":"marcos16"
        }
    ]
}

function verificacao_login(email){
    console.log("Seja bem vindo:",email);
}

function login(email, senha, callback) {
    let user_encontrado = false;
    
    for (let i = 0; i < user.login.length; i++) {
        const dados_login = user.login[i];
        console.log("---Autenticando dados----");

        setTimeout(() => {
            if (user_encontrado) return;
                if (dados_login.email === email && dados_login.senha === senha) {
                    callback(email);
                    user_encontrado = true;
                } else if(dados_login.email == email && dados_login.senha != senha) {
                    console.log("Senha incorreta");
                    user_encontrado = true;
                }  else {
                    console.log("Os dados estão incorretos");
                } 
            }, 2000);

            if (resultado) break;
    };

}

//login("marcossobraldev@gmail.com","marcos20", verificacao_login);