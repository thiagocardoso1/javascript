function Tabela() {
    let num = document.getElementById('usun')
    let t = document.getElementById('tabu')
    t.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        n = Number(num.value)
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            t.appendChild(item)
        }
    }
}