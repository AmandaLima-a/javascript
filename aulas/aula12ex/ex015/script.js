function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // FullYear - vai pegar 4 digitos (ano)
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto') // img com id = foto 
    if (fano.value.length == 0 || Number(fano.value) > ano){ // (se o comprimento do valor dele é igual a 0) ou (se o valor é acima de ano)
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // fsex[0] - primeiro radsex(masc) fsex[1] - segundo radsex
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) { // se tiver marcado masculino
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // criança
                img.setAttribute('src', 'bebe-menino.png.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-menino.png.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem-adulto.png.png')
            } else {
                // idoso 
                img.setAttribute('src', 'idoso.png.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute('src', 'bebe-menina.png.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-menina.png.png')
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'mulher-adulta.png.png')
            } else {
                // idosa 
                img.setAttribute('src', 'idosa.png.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // adicionar um elemento em baixo 
    }
}