window.onload = function(){
    let horas = 00
    let minutos = 00
    let segundos = 00
    let decimos = 00
    let anexaDecimos = document.getElementById("decimos")
    let anexaSegundos = document.getElementById("segundos")
    let anexaMinutos = document.getElementById("minutos")
    let anexaHoras = document.getElementById("horas")
    let btnIniciar = document.getElementById("btn-iniciar")
    let btnParar = document.getElementById("btn-parar")
    let btnReiniciar = document.getElementById("btn-reiniciar")
    let Intervalo

    btnIniciar.onclick = function(){
        clearInterval(Intervalo)
        Intervalo = setInterval(iniciaTimer, 10)
    }

    btnParar.onclick = function(){
        clearInterval(Intervalo)
    }

    btnReiniciar.onclick = function(){
        clearInterval(Intervalo)
        decimos = "00"
        segundos = "00"
        minutos = "00"
        horas = "00"
        anexaDecimos.innerHTML = decimos
        anexaSegundos.innerHTML = segundos
        anexaMinutos.innerHTML = minutos
        anexaHoras.innerHTML = horas
    }

    function iniciaTimer(){
        decimos++
        
        if(decimos <= 9){
            anexaDecimos.innerHTML = "0" + decimos
        }
        
        if(decimos > 9){
            anexaDecimos.innerHTML = decimos
        }

        if(decimos > 99){
            segundos++
            anexaSegundos.innerHTML = "0" + segundos
            decimos = 0
            anexaDecimos.innerHTML = "0" + 0
        }

        if(segundos > 9){
            anexaSegundos.innerHTML = segundos
        }

        if(segundos > 59){
            minutos++
            anexaMinutos.innerHTML = "0" + minutos
            segundos = 0
            anexaSegundos.innerHTML = "0" + segundos
        }

        if(minutos > 9){
            anexaMinutos.innerHTML = minutos
        }

        if(minutos > 59){
            horas++
            anexaHoras.innerHTML = "0" + horas
            minutos = 0
            anexaMinutos.innerHTML = "0" + minutos
        }

        if(horas > 9){
            anexaHoras.innerHTML = horas
        }
    }
}