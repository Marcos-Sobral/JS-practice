function primeiro() {
    const dados = "Asset/Json/dados.json";
    fetch(dados)
        //transformando em json
        .then(function(response){
            return response.json();
        })
        
        //exibir dados na tela
        .then(function(dados){
            let info = `<p>Nome: ${dados.nome}</p>
                        <p>Idade: ${dados.idade}</p>
                        <p>Habilidades: ${dados.habilidades.join(', ')}</p>`;
            document.getElementById("resultado").innerHTML = info;
        })
        
        //tratando erros
        .catch(function(error){
            console.error("Erro ao carregar o JSON")
            document.getElementById('resultado').innerHTML = '<p>Erro ao carregar os dados.</p>';
        })
}

function segundo(){
    const url = "https://dummyjson.com/products";
    fetch(url)
    .then(res => res.json())
    .then(function (url) {
        let div = "<p> "
      });
}

