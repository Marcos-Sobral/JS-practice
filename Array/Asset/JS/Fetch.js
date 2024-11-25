function fetch_simples() {
    //O FETCH é uma promise
    const url = 'https://dummyjson.com/products';
    fetch(url)
        //obs: independente do nome da variavel é passado a conversão e dados entre os .then
        .then(mensagem => mensagem.json())//converte para json
        .then(data => { //exibir os dados convertidos 
            console.log(data);
        })
        .catch(mensagem => { //erro
            console.log(mensagem);
        })
}

function fetch_simples2(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(erro => {
            console.log(erro);
        });
}

async function fetch_status(){
    try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

       let data = await resposta.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetch_post(){
    const url = "https://jsonplaceholder.typicode.com/users";
    const novoUsuario = {
        name: "Marcos Silva",
        username: "marcos123",
        email: "marcos.silva@example.com"
    };
    try {
        let response  = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoUsuario)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetch_put(){
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const atualizarUsuario = {
        name: "Marcos Silva Atualizado",
        email: "marcos.atualizado@example.com"
    };
    try {
        //let response = await fetch(url);
        let response  = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(atualizarUsuario)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Usuário atualizado:", data);
    } catch (error) {
        console.error("Ocorreu um erro ao atualizar o usuário:", error);
    }
}

async function fetch_delete(){
    const url = "https://jsonplaceholder.typicode.com/users/1";

    try {
        //let response = await fetch(url);
        let response  = await fetch(url, {
            method: "delete"
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        console.log("Usuário deletado");
    } catch (error) {
        console.error("Ocorreu um erro ao deletar o usuário:", error);
    }
}

fetch_delete();