tempo = setInterval(carregar,1000)
function carregar(){
    var msg = document.getElementById('msg')
    var bomdia = document.getElementById('bomdia')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horaB = data.getHours()
    var hora = data.toLocaleTimeString()
     
    
    
    msg.innerHTML = `Agora São ${hora} horas.`
    
    if (horaB >= 5 && horaB < 12){
        //Bom dia
        img.src = 'manha.png'
        bomdia.innerHTML = 'Tenha um Bom dia!'
        document.body.style.background ='#e2cd9f'
    } else if(horaB >= 0 && horaB < 5){
        //madrugada
        img.src = 'madrugada.png'
        bomdia.innerHTML = 'Tenha uma Boa Madrugada!'
    }else if (horaB >= 12 && horaB < 18){
        //boa tarde
        img.src = 'tarde.png'
        bomdia.innerHTML = 'Tenha uma Boa Tarde!'
        document.body.style.background ='#b9846f'
    }else{
        //boa noite
        img.src = 'noite.png'
        bomdia.innerHTML = 'Tenha uma Boa Noite!'
        document.body.style.background ='#515154'
    }
    
    
        




}


