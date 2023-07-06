function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png.png'
        // codigo para cor de fundo com cod hexadecimal - 'hex'
        document.body.style.background = '#eccdbe'
    } else if (hora <= 18){
        // BOA TARDE!
        img.src = 'tarde.png.png'
        document.body.style.background = '#fdea07'
    } else {
        // BOA NOITE!
        img.src = 'noite.png.png'
        document.body.style.background = '#252a3f'
    }
}