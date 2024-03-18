var intervalo;
var festaAtiva = false;
var musica = document.getElementById("reproduzirMusica");

function iniciarFesta() {
    if (!festaAtiva) {
        intervalo = setInterval(alterarFundoAutomaticamente, 100); // Mudar a cada 0.1 segundos
        festaAtiva = true;
        reproduzirMusica();
    } else {
        pararFesta();
        festaAtiva = false;
    }
}

function pararFesta() {
    clearInterval(intervalo); // Parar de mudar as cores automaticamente
}

function alterarFundoAutomaticamente() {
    var cores = ["#ff5733", "#ffbb33", "#33ff57", "#3388ff", "#d933ff", "#33ffd9", "#e0ff33"];
    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

function reproduzirMusica() {
    musica.currentTime = 26; // Define o ponto de partida para 26 segundos
    musica.volume = 0.2; // Define o volume para 20% do volume máximo
    musica.play(); // Inicia a reprodução da música
}
