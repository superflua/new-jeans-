var show = 0

function menuShow() {
    let menu = document.getElementById('menu')
    if (show == 0) {
        menu.style.transition = '1s'
        menu.style.opacity = '1'
        menu.style.height = '50px'
        show++
    } else {
        let menu = document.getElementById('menu')
        menu.style.transition = '1s'
        menu.style.opacity = '0'
        menu.style.height = '0'
        show--
    }
}

var pergunta_lista = ['Qual foi a musica de debut do NEW JEANS?', 'Qual é a integrante mais nova?', 'Qual a integrante mais velha?', 'Em que ano o grupo dubutou?', 'Com qual desses jogos o NEW JEANS já fez parceria? ', 'Qual o nome do fandom do NEW JEANS?', 'Quantos álbuns o NEW JEANS tem?', 'Quantos membros o NEW JEANS tem?', 'O NEW JEANS foi nomeado como embaixador global de qual das seguintes marcas?', 'Qual é a musica mais conhecida do grupo?']
var resposta_lista = ['Super Shy', 'Attention', 'Hyein', 'Haerin', 'Minji', 'Hanni', '2021', '2022', 'PUBG', 'LOL', 'Jeans', 'Bunnies', '2', '3', '5', '4', 'PEPSI', 'COCA-COLA', 'OMG', 'HYPE BOY']
var contador = 0
var contador_resposta = -2
var acertos = 0

function reiniciar() {
    contador = 0
    contador_resposta = -2
    acertos = 0
    document.getElementById('butone').remove()
    criar_corpo()
}

function criar() {
    document.getElementById('info').remove()
    criar_corpo()
}

function criar_corpo() {
    var corpo = document.getElementById('corpo')
    corpo.style.background = 'linear-gradient(90deg, rgba(255, 221, 236, 0.51) 0%, rgba(210, 230, 255, 0.392) 100%)';
    corpo.style.color = 'white'
    corpo.style.width = '600px'
    corpo.style.height = '420px'
    corpo.style.borderRadius = '8px'
    corpo.style.margin = 'auto'
    criar_índice()
    criar_pergunta()
    criar_resposta()
    iniciar()
}

function criar_índice() {
    var índice = document.getElementById('índice')
    for(cont = 1; cont <= 10; cont++) {
        var item_índice = document.createElement("button")
        item_índice.innerHTML = `${cont}`
        item_índice.setAttribute('id', `índice${cont}`)
        item_índice.style.backgroundColor = '#D2E6FF'
        item_índice.style.width = '30px'
        item_índice.style.height = '30px'
        item_índice.style.color = '#56325f'
        item_índice.style.cursor = 'pointer'
        item_índice.style.borderRadius = '30px'
        item_índice.style.borderWidth = '0'
        item_índice.style.fontWeight = 'bold'
        item_índice.style.margin = '15px'
        item_índice.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.432)'
        item_índice.style.outline = '0'
        índice.appendChild(item_índice)
    }
}

function criar_pergunta() {
    var pergunta = document.getElementById('pergunta')
    var item_pergunta = document.createElement('p')
    item_pergunta.setAttribute('id', 'item_pergunta')
    item_pergunta.style.fontSize = '20px'
    item_pergunta.style.textAlign = 'center'
    item_pergunta.style.color = '#56325f'
    pergunta.style.padding = '50px'
    pergunta.appendChild(item_pergunta)
}

function criar_resposta() {
    var resposta = document.getElementById('resposta')
    for(cont = 1; cont <= 2; cont++) {
        var item_resposta = document.createElement('button')
        item_resposta.setAttribute('id', `but${cont}`)   
        item_resposta.setAttribute('onmouseenter', `corentrar('but${cont}')`)  
        item_resposta.setAttribute('onmouseout', `corsair('but${cont}')`)
        item_resposta.style.backgroundColor = '#daafe5'
        item_resposta.style.width = '130px'
        item_resposta.style.height = '30px'
        item_resposta.style.color = '#56325f'
        item_resposta.style.cursor = 'pointer'
        item_resposta.style.borderRadius = '50px'
        item_resposta.style.borderWidth = '0'
        item_resposta.style.fontWeight = 'bold'
        item_resposta.style.margin = '15px'
        item_resposta.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.2)'
        resposta.style.padding = '50px'
        resposta.style.textAlign = 'center'
        resposta.appendChild(item_resposta)

    }
}

function iniciar() {
    function acertar() {
        acertos++
        if (contador < 10) {
            var índice_trocar = document.getElementById(`índice${contador}`)
            índice_trocar.style.backgroundColor = 'lightgreen'
        }
        contagem() 
    }
    
    function errar() {
        if (contador < 10) {
            var índice_trocar = document.getElementById(`índice${contador}`)
            índice_trocar.style.backgroundColor = '#fa4350'
        }
        contagem()
    }
    
    function contagem() {
        var item_pergunta = document.getElementById('item_pergunta')
        var but1 = document.getElementById('but1')
        var but2 = document.getElementById('but2')
        if (contador < 10) {
            contador_resposta += 2
            item_pergunta.innerHTML = pergunta_lista[contador]
            but1.innerHTML = `${resposta_lista[contador_resposta]}`
            but2.innerHTML = `${resposta_lista[contador_resposta+1]}`
            switch (contador+1) {
                case 1:
                    but1.addEventListener('click', errar)
                    but2.addEventListener('click', acertar)
                    break
                case 2:
                    but1.removeEventListener('click', errar)
                    but2.removeEventListener('click', acertar)
                    but1.addEventListener('click', acertar)
                    but2.addEventListener('click', errar)
                    break
                case 4:
                    but1.removeEventListener('click', acertar)
                    but2.removeEventListener('click', errar)
                    but1.addEventListener('click', errar)
                    but2.addEventListener('click', acertar)
                    break
                case 7:
                    but1.removeEventListener('click', errar)
                    but2.removeEventListener('click', acertar)
                    but1.addEventListener('click', acertar)
                    but2.addEventListener('click', errar)
                    break
                case 9:
                    but1.removeEventListener('click', acertar)
                    but2.removeEventListener('click', errar)
                    but1.addEventListener('click', errar)
                    but2.addEventListener('click', acertar)
                    break
                case 10:
                    but1.removeEventListener('click', errar)
                    but2.removeEventListener('click', acertar)
                    but1.addEventListener('click', acertar)
                    but2.addEventListener('click', errar)
                    break
            }
        } else {
            índice.innerHTML = ''
            item_pergunta.innerHTML = `Você finalizou o quiz com ${acertos} acertos! &#x1f407`
            resposta.innerHTML = ''
            var recarregar = document.getElementById('recarregar')
            var item_recarregar = document.createElement('button')
            item_recarregar.setAttribute('id', `butone`)
            item_recarregar.setAttribute('onmouseenter', `corentrar('butone')`)  
            item_recarregar.setAttribute('onmouseout', `corsair('butone')`)
            item_recarregar.innerHTML = 'Reiniciar'
            item_recarregar.style.backgroundColor = '#daafe5'
            item_recarregar.style.width = '130px'
            item_recarregar.style.height = '30px'
            item_recarregar.style.color = '#56325f'
            item_recarregar.style.cursor = 'pointer'
            item_recarregar.style.borderRadius = '50px'
            item_recarregar.style.borderWidth = '0'
            item_recarregar.style.fontWeight = 'bold'
            item_recarregar.style.outline = '0'
            item_recarregar.style.margin = 'auto'
            recarregar.appendChild(item_recarregar)
            document.getElementById('butone').addEventListener('click', reiniciar)
        }
        contador++
    }
    contagem()
}

function mudarBody(cor) {
    document.getElementById('body').style.backgroundColor = cor
}