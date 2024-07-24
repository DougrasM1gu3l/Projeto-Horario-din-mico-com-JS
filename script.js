
function carregar(){
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('foto')
        var h = new Date()
        var hora = h.getHours()

    msg.innerHTML = (`Agora são ${hora} Horas.`)
    if (hora >=5 && hora <12){
    //Bom dia!
    img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite!
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#515154'
    }
}