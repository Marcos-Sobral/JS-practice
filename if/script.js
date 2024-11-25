function frete() {
    let valorCompra = 15;
    let valorDescontoFrete = 20;

    if(valorCompra >= valorDescontoFrete ){
    console.log("GANHOU FRETE GRATIS");
    }else{
    console.log("Falta R$", (valorDescontoFrete - valorCompra));
    }
}

function atividade1(){
  let turno = "dia";

  if(turno == "dia"){
    console.log("Está de dia");
  }else{
    console.log("Está de noite")
  }
}

function atividade2(){
  let temperatura = 27;
  
  if(temperatura >= 30){
    console.log("Está muito quente");
  }else{
    console.log("A temperatura está agradável");
  }
}


function atividade3(){
  let idade = 27;
  if(idade < 12){
    console.log("Criança");
  }else if(idade >= 12 || idade <= 18){
    console.log("Adolescente");
  }else if(idade >=19 || idade >=60) {
    console.log("Adulto");
  } else if(idade >=60) {
    console.log("Idoso");
  }
}

function atividade4(){
  let nota = 6;
  if(idade <= 9){
    console.log("Nota A");
  }else if(nota >= 8){
    console.log("Nota B");
  }else if(nota >= 7) {
    console.log("Nota C");
  }else if(nota >=6){
    console.log("Nota F");
  }
}

atividade2();



