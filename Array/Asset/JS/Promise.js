/* primeira versão que fiz 
function login(user, password){
    let loginPromise = new Promise(function (loginResolve, loginReject) {  
        if (user == "admin" && password == "1234") {
            loginResolve("Login bem-sucedido!");
            console.log("deu certo");
        }else{
            loginReject("Credenciais incorretas");
            console.log("deu errado");
        }
    });
    //console.log(loginPromise);
    return loginPromise;
}

console.log(login("admin", "1234")
    .then()
    .catch()
);

explicação para resolver de forma certa

- O .then((mensagem) => { ... }), passamos uma função que recebe mensagem como argumento. Esse mensagem será o valor passado pelo loginResolve, que é "Login bem-sucedido!"

- No .catch((erro) => { ... }), passamos uma função que recebe erro como argumento. Esse erro será o valor passado pelo loginReject, que é "Credenciais incorretas".
*/

//Sistema de login
function login(user, password){
    let loginPromise = new Promise(function (loginResolve, loginReject) {  
        if (user == "admin" && password == "1234") {
            loginResolve("Login bem-sucedido!");
            console.log("deu certo");
        }else{
            loginReject("Credenciais incorretas");
            console.log("deu errado");
        }
    });
    //console.log(loginPromise);
    return loginPromise;
}

login("admin", "1234")
    .then((message) =>{
        console.log(message);
    })
    .catch((message)=> {
        console.log(message);
    });
