let x = 0;

let timeout = setTimeout(() => {
    console.log("O valor do X é 0");
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(timeout);
    console.log("Passou de 0");
}

//----------------------------------------------
let Interval = setInterval(() => {
    console.log("intervalo");
}, 2000);

setTimeout(() => {
    console.log("intervalo acabou");
    clearInterval(Interval);
}, 2500);
