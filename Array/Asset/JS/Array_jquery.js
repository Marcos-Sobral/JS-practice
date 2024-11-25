$(document).ready(function () {
    $.getJSON("Asset/Json/dados.json", function (data) {
        let info = `<p>Nome: ${dados.nome}</p>
                    <p>Idade: ${dados.idade}</p>
                    <p>Habilidades: ${dados.habilidades.join(', ')}</p>`;
        $("#resultado").html(info);
        }).fail(function() {
        // Linha 5: Mostra uma mensagem de erro se o JSON não for carregado
        $('#resultado').html('<p>Erro ao carregar o arquivo JSON.</p>');
    });
});

