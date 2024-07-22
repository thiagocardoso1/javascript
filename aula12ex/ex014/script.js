function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    

    if (hora < 5 && hora >= 0) {
        foto.src = 'foto-noite.jpg'
        document.body.style.background = 'rgb(1, 0, 68)'
        msg.innerHTML = `Boa madrugada, agora são ${hora} horas`
    } else if (hora < 12 && hora >= 5) {
        foto.src = 'foto-manha.jpg'
        document.body.style.background = 'rgb(67, 128, 240)'
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
    } else if (hora >= 12 && hora <= 17) {
        foto.src = 'foto-tarde.jpg'
        document.body.style.background = 'rgb(179, 150, 24)'
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
    } else {
        foto.src = 'foto-noite.jpg'
        document.body.style.background = 'rgb(1, 0, 68)'
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
    }
}

