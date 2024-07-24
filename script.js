let body = document.querySelector('body')
document.body.appendChild
console.dir(body)

let section = document.querySelector('.login')
let grid = document.querySelector('#display')
console.log(grid)
for (let columna = 1; columna <= 9; columna++) {
    for (let fila = 1; fila <= 9; fila++) {
        let casilla = document.createElement('div')
        casilla.style.gridColumn = `${columna}`
        casilla.style.gridRow = `${fila}`
        casilla.style.backgroundColor = "white"
        casilla.style.width = "40px"
        casilla.style.height = "40px"
        casilla.id = `grid-${fila}-${columna}`
        grid.append(casilla);
    }
}
let coordenadasCasilla = [5, 5]
let coordenadasCoin = [2, 3]
let casillaCoin = setCasilla(coordenadasCoin)
casillaCoin.style.backgroundColor = 'green'
let displayCoin = document.querySelector(`#Coin`)
console.log(displayCoin)
function setCasilla(coordenadas) {
    return document.querySelector(`#grid-${coordenadas[0]}-${coordenadas[1]}`)
}
function pintarNegro(casilla) {
    casilla.style.backgroundColor = "black"
    return casilla
}

let casillaNegro = setCasilla(coordenadasCasilla)
casillaNegro = pintarNegro(casillaNegro)

function moverArriba(casillaNegro) {
    casillaNegro.style.backgroundColor = "white";
    coordenadasCasilla[0] -= 1
    casillaNegro = pintarNegro(setCasilla(coordenadasCasilla))
    return casillaNegro
}
function moverAbajo(casillaNegro) {
    casillaNegro.style.backgroundColor = "white";
    coordenadasCasilla[0] += 1
    casillaNegro = pintarNegro(setCasilla(coordenadasCasilla))
    return casillaNegro
}
function moverIzquierda(casillaNegro) {
    casillaNegro.style.backgroundColor = "white";
    coordenadasCasilla[1] -= 1
    casillaNegro = pintarNegro(setCasilla(coordenadasCasilla))
    return casillaNegro
}
function moverDerecha(casillaNegro) {
    casillaNegro.style.backgroundColor = "white";
    coordenadasCasilla[1] += 1
    casillaNegro = pintarNegro(setCasilla(coordenadasCasilla))
    return casillaNegro
}
function mover(direccion, casillaNegro) {
    casillaNegro.style.backgroundColor = "white";
    switch (direccion) {
        case 'arriba':
            if (coordenadasCasilla[0] > 1) {
                coordenadasCasilla[0] -= 1
            }
            break
        case 'abajo':
            if (coordenadasCasilla[0] < 9) {
                coordenadasCasilla[0] += 1
            }
            break
        case 'izquierda':
            if (coordenadasCasilla[1] > 1) {
                coordenadasCasilla[1] -= 1
            }
            break
        case 'derecha':
            if (coordenadasCasilla[1] < 9) {
                coordenadasCasilla[1] += 1
            }
            break
    }
    casillaNegro = pintarNegro(setCasilla(coordenadasCasilla))
    return casillaNegro
}

let buttonUp = document.querySelector('#buttonUp')
let buttonDown = document.querySelector('#buttonDown')
let buttonLeft = document.querySelector('#buttonLeft')
let buttonRight = document.querySelector('#buttonRight')

function checkCoin(coordenadasCasilla, coordenadasCoin) {
    if (coordenadasCasilla[0] == coordenadasCoin[0] && coordenadasCasilla[1] == coordenadasCoin[1]){
        displayCoin.style.display = 'block'
        console.log('xd')
    }
}
buttonUp.addEventListener("mousedown", () => {
    casillaNegro = mover('arriba', casillaNegro)
    checkCoin(coordenadasCasilla, coordenadasCoin)
})
buttonDown.addEventListener("mousedown", () => {
    casillaNegro = mover('abajo', casillaNegro)
    checkCoin(coordenadasCasilla, coordenadasCoin)
})
buttonLeft.addEventListener("mousedown", () => {
    casillaNegro = mover('izquierda', casillaNegro)
    checkCoin(coordenadasCasilla, coordenadasCoin)
})
buttonRight.addEventListener("mousedown", () => {
    casillaNegro = mover('derecha', casillaNegro)
    checkCoin(coordenadasCasilla, coordenadasCoin)
})