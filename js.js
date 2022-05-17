const estilo = "style='background-color: black'"
const xsvg = '<svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M172.637 2.13914C173.315 2.81551 173.853 3.619 174.22 4.5036C174.587 5.3882 174.776 6.33653 174.776 7.29427C174.776 8.252 174.587 9.20033 174.22 10.0849C173.853 10.9695 173.315 11.773 172.637 12.4494L12.4494 172.637C11.0822 174.004 9.22784 174.772 7.29429 174.772C5.36075 174.772 3.50639 174.004 2.13917 172.637C0.771942 171.27 0.00384521 169.415 0.00384521 167.482C0.00384521 165.548 0.771942 163.694 2.13917 162.327L162.327 2.13914C163.003 1.46106 163.807 0.923084 164.691 0.556015C165.576 0.188946 166.524 0 167.482 0C168.44 0 169.388 0.188946 170.272 0.556015C171.157 0.923084 171.961 1.46106 172.637 2.13914V2.13914Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.13914 2.13914C1.46106 2.81551 0.923084 3.619 0.556015 4.5036C0.188946 5.3882 0 6.33653 0 7.29427C0 8.252 0.188946 9.20033 0.556015 10.0849C0.923084 10.9695 1.46106 11.773 2.13914 12.4494L162.327 172.637C163.694 174.004 165.548 174.772 167.482 174.772C169.415 174.772 171.27 174.004 172.637 172.637C174.004 171.27 174.772 169.415 174.772 167.482C174.772 165.548 174.004 163.694 172.637 162.327L12.4494 2.13914C11.773 1.46106 10.9695 0.923084 10.0849 0.556015C9.20033 0.188946 8.252 0 7.29427 0C6.33653 0 5.3882 0.188946 4.5036 0.556015C3.619 0.923084 2.81551 1.46106 2.13914 2.13914V2.13914Z" fill="black"/></svg>'
const osvg = '<svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="87.5" cy="87.5" r="80" stroke="black" stroke-width="15"/></svg>'
let fim = false
let jogador = 0
let cont = 0, contX = 0, contO = 0
let jogadasX = []
let jogadasO = []

function reset() {
    fim = false
    jogador = cont = contX = contO = 0
    jogadasX = []
    jogadasO = []
    document.querySelector('#table').innerHTML = ''
    document.querySelector('h3').innerHTML = ''
    document.querySelector('.button').innerHTML = ''
    for (let index = 0; index < 9; index++) {
        document.querySelector('#table').innerHTML += '<div class="cell" id="cell_' + index + '" onclick="jogada(' + index + ')">'
    }
}

function jogada(posicao) {
    if (fim == false) {
        if (document.querySelector('#cell_' + posicao).innerHTML == '') {
            if (jogador == 0) {
                document.querySelector('#cell_' + posicao).innerHTML = xsvg        
                jogador = 1
                jogadasX[contX] = posicao
                contX++
            } else {
                document.querySelector('#cell_' + posicao).innerHTML = osvg
                jogador = 0
                jogadasO[contO] = posicao
                contO++
            }
            cont++
        }
    }
    jogadasO.sort()
    jogadasX.sort()
    console.log(jogadasX)
    if (verificacao(jogadasX)) {
        fim = true
        document.querySelector('h3').innerText = 'O jogador 1 ganhou!!!'
        document.querySelector('.button').innerHTML = '<button onclick="reset()">Jogar novamente</button>'
    }
    if (verificacao(jogadasO)) {
        fim = true
        document.querySelector('h3').innerText = 'O jogador 2 ganhou!!!'
        document.querySelector('.button').innerHTML = '<button onclick="reset()">Jogar novamente</button>'
    }
    if (cont == 9 && fim == false) {
        document.querySelector('h3').innerText = 'Deu velha!'
        document.querySelector('.button').innerHTML = '<button onclick="reset()">Jogar novamente</button>'
    }
}

// essa função verifica se o jogador 1 ou 2 venceu, em cada posição do tabuleiro
function verificacao(jogador) {
    // horizontais
    if (jogador.includes(0) && jogador.includes(1) && jogador.includes(2)) {
        return true
    }
    if (jogador.includes(3) && jogador.includes(4) && jogador.includes(5)) {
        return true
    }
    if (jogador.includes(6) && jogador.includes(7) && jogador.includes(8)) {
        return true
    }
    // verticais
    if (jogador.includes(0) && jogador.includes(3) && jogador.includes(6)) {
        return true
    }
    if (jogador.includes(1) && jogador.includes(4) && jogador.includes(7)) {
        return true
    }
    if (jogador.includes(2) && jogador.includes(5) && jogador.includes(8)) {
        return true
    }
    // diagonais
    if (jogador.includes(0) && jogador.includes(4) && jogador.includes(8)) {
        return true
    }
    if (jogador.includes(2) && jogador.includes(4) && jogador.includes(6)) {
        return true
    }
}

for (let index = 0; index < 9; index++) {
    document.querySelector('#table').innerHTML += '<div class="cell" id="cell_' + index + '" onclick="jogada(' + index + ')">'
}