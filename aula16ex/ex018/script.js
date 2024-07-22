let num = document.getElementById('num')
let val = document.getElementById('val')
let res = document.getElementById('res')
let dado = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, dado)) {
        dado.push(Number(num.value))
        let resultado = document.createElement('option')
        resultado.text = `O numero foi ${num.value} adicionado`
        val.appendChild(resultado)
    } else {
        window.alert('Dados inválidos ou já encontrados na lista!')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function penis() {
    let tot = dado.length
    let soma = 0
    let media = 0
    dado.sort()

    for (let pos in dado) {
        soma += dado[pos]
    }

    media = soma / tot

    res.innerHTML += `Ao todo foram adicionados ${tot} números<br>`
    res.innerHTML += `o menor número mostrado é o ${dado[0]}<br>`
    res.innerHTML += `o maior número mostrado é o ${dado[tot-1]}<br>`
    res.innerHTML += `A soma dos números é igual a ${soma}<br>`
    res.innerHTML += `A média dos valores é ${media.toFixed(2)}<br>`
}