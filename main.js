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
const tempoObjetivo1 = new Date("2025-04-02T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1){
    let tempoAtua1 = new Date();
    let tempoFina1 = tempoObjetivo - tempoAtua1;
    let segundos = Math.floor(tempoFina1/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    return minutos;
}


