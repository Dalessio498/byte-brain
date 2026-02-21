let contador = 0;

const point = new Audio("/resources/audio/point-basket.mp3")
const error = new Audio("/resources/audio/error_CDOxCYm.mp3")

function verificarResposta(idClicado, eCorreta) {
    const botao = document.getElementById(idClicado)

    const todasOpcoes = document.querySelectorAll(".opcs button")
    contador++

    if (eCorreta) {
        botao.style.backgroundColor = "#2ecc71"
        botao.style.color = "white"
        point.play()

    }
    else {
        botao.style.backgroundColor = "red"
        botao.style.color = "white"
        error.play()

    }

    if (contador >= 2 || eCorreta == true) {
        bloquearTudo(todasOpcoes)
    }


}

function bloquearTudo(botoes) {
    botoes.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.style.opacity = "0.6";
    });
}
