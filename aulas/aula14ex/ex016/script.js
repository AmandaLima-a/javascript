function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br> '
        var i = Number(ini.value) // pegar o valor que esta dentro de ini e converter para numero
        var f = Number(fim.value)
        var p = Number(passo.value) 
        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1.")
            p = 1 
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F600} ` // \u{} - cod para emoji
            }
        } else if (i > f) {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F643} `
            }
        }
    }
}