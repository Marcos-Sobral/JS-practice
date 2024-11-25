async function buscarDados(){
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ocorreu um erro inesperado:", error);
    }
}

buscarDados();