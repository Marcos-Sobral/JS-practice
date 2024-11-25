let respotaUser = prompt('Deseja realizar consulta ?');
while (respotaUser == "sim") {
    let idadeUser = prompt('Qual é sua idade ?');
    if(idadeUser >= 18){
        alert('Você deve votar !');
    }else if(idadeUser == 16 || idadeUser == 17){
        alert("Seu voto é opcional");
    }else{
        alert('Você não tem idade para votar');
    }
    respotaUser = prompt('Deseja realizar consulta ?');
}