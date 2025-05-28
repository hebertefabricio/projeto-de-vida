const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.lenght;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;i++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-07-012T00:00:00");
const tempoObjetivo2 = new Date("2025-07-025T00:00:00");
const tempoObjetivo3 = new Date("2025-08-07T00:00:00");
const tempoObjetivo4 = new Date("2026-04-07T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);


function calculaTempo(tempoObjetivo1){
    let tempoAtua1 = new Date();
    let tempoFina1 = tempoObjetivo - tempoAtua1;
    let segundos = Math.floor(tempoFina1/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60)
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60; 
    horas %= 24; 
    if(tempoFinal > 0) {
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    }else{ 
        return [0,0,0,0];
    }
}

function atualiaCronometro(){
    for (let i=0; i < contadores.length;i++) {
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("minutos"+i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[3];
      console.log("seg"+i);
    }
}

function comecaCronometro() {
    atualiaCronometro();
    setInterval(atualiaCronometro, 1000);
}

comecaCronometro();