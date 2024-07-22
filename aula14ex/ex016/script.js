function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ``

    if (fim.value.length == 0 || inicio.value.length  == 0 || passo.value.length == 0) {
        window.alert('Verifique os dados e tente novamente seu burro')
    } else {
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if (p <= 0) {
            window.alert('Erro')
            p = 1
        }
        if (i < f) {
            if (p >= f) {
            window.alert('Verifique os dados e tente novamente seu burro')
            return;
            }
            while (i <= f) {
                res.innerHTML += `${i} 👉`
                i += p
            }
        } else if (i > f) {
            if (p >= i) {
                window.alert('Verifique os dados e tente novamente seu burro')
                return;
            }
            while (i > f) {
                res.innerHTML += `${i} 👉`
                i -= p
            }
        }
        res.innerHTML += `🏁`
    }
}