let num = [0, 8, 3, 7, 9]

num[2] = 2
num.sort()
num.push(1)
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor do primeiro vetor é ${num[0]}`)

let pos = num.indexOf(7)
if (pos == -1) {
    console.log('Erro')
} else {
    console.log(`A posição encontrada é: ${pos}`)
}
