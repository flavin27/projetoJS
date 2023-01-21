var lista = []

function adicionar(){
    let numero = window.document.getElementById('inicio')
    let tab = window.document.getElementById('lista')
    n = Number(numero.value)
    let item = document.createElement('option')
    item.text = `Valor ${n} foi adicionado`
    tab.appendChild(item)
    n = parseInt(n)
    lista.push(n)
}

function listar() {
    tamanho  = Number(lista.length)
    maior = 0
    menor = 101
    for (valor in lista) {
        if (lista[valor] > maior) {
            maior = lista[valor]
        }
        if (lista[valor] < menor) {
            menor = lista[valor]
        }
    }
}

function operacoes() {
    s = 0
    for (i in lista) {
        s += lista[i ]
    }
    media = s / lista.length
}

function finalizar() {
    let final = window.document.getElementById('finalizado')
    listar()
    operacoes()
    final.innerHTML = ''
    final.innerHTML += `<p> Ao todo, temos ${tamanho} numerais cadastrados</p>`
    final.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
    final.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
    final.innerHTML += `<p> A soma dos valores é ${s}</p>`
    final.innerHTML += `<p> A media dos valores foi ${media}</p>`
}