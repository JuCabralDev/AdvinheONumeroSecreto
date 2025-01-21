const chuteEntrada = document.getElementById("chuteEntrada")
const adivinheButao = document.getElementById("adivinheButao")
const menssagem = document.getElementById("menssagem")
const reiniciarBotao = document.getElementById("reiniciarBotao")

let numeroSecreto
let tentativas

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1
}

function inicioJogo() {
    numeroSecreto = gerarNumeroSecreto()
    tentativas = 0
    menssagem.textContent = ""
    chuteEntrada.value = ""
    reiniciarBotao.style.display = "none"
    chuteEntrada.disabled = false
    adivinheButao.disabled = false
}

function verificarChute() {
    const userGuess = Number.parseInt(chuteEntrada.value)
    tentativas++

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        menssagem.textContent = "Por favor, insira um número válido entre 1 e 100."
        return
    }

    if (userGuess === numeroSecreto) {
        menssagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`
        reiniciarBotao.style.display = "inline-block"
        chuteEntrada.disabled = true
        adivinheButao.disabled = true
    } else if (userGuess < numeroSecreto) {
        menssagem.textContent = "O número é maior. Tente novamente!"
    } else {
        menssagem.textContent = "O número é menor. Tente novamente!"
    }
}

adivinheButao.addEventListener("click", verificarChute)
reiniciarBotao.addEventListener("click", inicioJogo)
chuteEntrada.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        verificarChute()
    }
})

inicioJogo()


