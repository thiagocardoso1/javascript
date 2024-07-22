function carregar() {
    var img = window.document.getElementById('img')
    var nas = window.document.getElementById('nas')
    var res = window.document.getElementById('res')
    nascimento = Number(nas.value)

    var id = new Date()
    var ano = id.getFullYear()

    if (nascimento > ano || nascimento <= 0) {
        res.innerHTML = '[ERRO] Dados inválidos tente novamente'
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - nascimento
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <= 50) {
                img.setAttribute('src', 'homem.jpg')
            } else if (idade <= 120) {
                img.setAttribute('src', 'idoso.jpg')
            } else {
                res.innerHTML = '[ERRO] Dados inválidos tente novamente'
                return;
            }
        } else if (fsex[1].checked) {
                genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <= 50) {
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade <= 120) {
                img.setAttribute('src', 'idosa.jpg')
            } else {
                res.innerHTML = '[ERRO] Dados inválidos tente novamente'
                return;
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }

}
