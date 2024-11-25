async function login(usuario, senha){
    if (usuario === "admin" && senha === "1234") {
        return "Login bem-sucedido!"
    } else {
        throw new Error("Credenciais incorretas");
    }
}

async function testarLogin(){
    try {
        const mensagem = await login("admin","1234");
        console.log(mensagem);
    } catch (error) {
        console.log(error);
    }
}

testarLogin();

