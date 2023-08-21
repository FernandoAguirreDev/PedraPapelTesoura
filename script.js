const result = document.querySelector('.result')
const pontuacaoUsuario = document.querySelector('#pontuacaoUsuario')
const pontuacaoPC = document.querySelector('#pontuacaoPC')

let numeroPontuacaoUsuario = 0
let numeroPontuacaoPC = 0

const jogadaUsuario = document.querySelector('.jogadaUsuario')
const jogadaPC = document.querySelector('.jogadaPC')

const playUsuario = (escolhaUsuario) => {

    jogo(escolhaUsuario, playPC())
}

const playPC = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return opcoes[randomNumber]
}

const jogo = (usuario, pc) => {

    if (usuario === 'papel' && pc === 'papel') {
        jogadaUsuario.setAttribute('src', './papel.png')
        jogadaPC.setAttribute('src', './papel.png')
        result.innerHTML = "Deu empate"
    } else if (usuario === 'pedra' && pc === 'pedra') {
        jogadaUsuario.setAttribute('src', './pedra.png')
        jogadaPC.setAttribute('src', './pedra.png')
        result.innerHTML = "Deu empate"
    } else if (usuario === 'tesoura' && pc === 'tesoura') {
        jogadaUsuario.setAttribute('src', './tesoura.png')
        jogadaPC.setAttribute('src', './tesoura.png')
        result.innerHTML = "Deu empate"
    } else if (usuario === 'tesoura' && pc === 'papel') {
        jogadaUsuario.setAttribute('src', './tesoura.png')
        jogadaPC.setAttribute('src', './papel.png')
        numeroPontuacaoUsuario++
        pontuacaoUsuario.innerHTML = numeroPontuacaoUsuario
        result.innerHTML = "Voce Ganhou"
    } else if (usuario === 'papel' && pc === 'pedra') {
        jogadaUsuario.setAttribute('src', './papel.png')
        jogadaPC.setAttribute('src', './pedra.png')
        numeroPontuacaoUsuario++
        pontuacaoUsuario.innerHTML = numeroPontuacaoUsuario
        result.innerHTML = "Voce Ganhou"
    } else if (usuario === 'pedra' && pc === 'tesoura') {
        jogadaUsuario.setAttribute('src', './pedra.png')
        jogadaPC.setAttribute('src', './tesoura.png')
        numeroPontuacaoUsuario++
        pontuacaoUsuario.innerHTML = numeroPontuacaoUsuario
        result.innerHTML = "Voce Ganhou"
    } else if (usuario === 'tesoura' && pc === 'pedra') {
        jogadaUsuario.setAttribute('src', './tesoura.png')
        jogadaPC.setAttribute('src', './pedra.png')
        numeroPontuacaoPC++
        pontuacaoPC.innerHTML = numeroPontuacaoPC
        result.innerHTML = "Voce Perdeu"
    } else if (usuario === 'pedra' && pc === 'papel') {
        jogadaUsuario.setAttribute('src', './pedra.png')
        jogadaPC.setAttribute('src', './papel.png')
        numeroPontuacaoPC++
        pontuacaoPC.innerHTML = numeroPontuacaoPC
        result.innerHTML = "Voce Perdeu"
    } else if (usuario === 'papel' && pc === 'tesoura') {
        jogadaUsuario.setAttribute('src', './papel.png')
        jogadaPC.setAttribute('src', './tesoura.png')
        numeroPontuacaoPC++
        pontuacaoPC.innerHTML = numeroPontuacaoPC
        result.innerHTML = "Voce Perdeu"
    }
    //     console.log('Usuario: ' + usuario + ' PC: ' + pc)
    //     if (usuario === pc) {
    //         result.innerHTML = "Deu empate"
    //     } else if (usuario === 'papel' && pc === 'pedra' ||
    //         usuario === 'pedra' && pc === 'tesoura' ||
    //         usuario === 'tesoura' && pc === 'papel') {
    //         numeroPontuacaoUsuario++
    //         pontuacaoUsuario.innerHTML = numeroPontuacaoUsuario
    //         result.innerHTML = "Voce Ganhou"
    // } else {
    //     numeroPontuacaoPC++
    //         pontuacaoPC.innerHTML = numeroPontuacaoPC
    // result.innerHTML = "Voce Perdeu"

    //     }
}