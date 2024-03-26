const SenhaEl = document.getElementById("senha")
const copiaEl = document.getElementById("copia")
const tamEl = document.getElementById("tam")
const maiusculaEl = document.getElementById("maiuscula")
const minusculaEl = document.getElementById("minuscula")
const simboloEl = document.getElementById("simbolo")
const geradorEl = document.getElementById("gerador")
const numeroEl = document.getElementById("numero")
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "~!@#$%^&*()_+=|-"

function pegaMinusculas(){
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]
}

function pegaMaiusculas(){
    return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)]
}

function pegaNumero(){
    return numeros[Math.floor(Math.random() * numeros.length)]
}

function pegaSimbolo(){
    return simbolos[Math.floor(Math.random() * simbolos.length)]
}

function geraSenha(){
    const tam = tamEl.value
    let senha = ""
    
    for(let i = 0; i < tam; i++){
        const x = geraX()
        senha += x
    }

    SenhaEl.innerText = senha
}

function geraX(){
    const xs = []
    
    if(maiusculaEl.checked){
        xs.push(pegaMaiusculas())
    }

    if(minusculaEl.checked){
        xs.push(pegaMinusculas())
    }

    if(numeroEl.checked){
        xs.push(pegaNumero())
    }

    if(simboloEl.checked){
        xs.push(pegaSimbolo())
    }

    if(xs.length === 0){
        return ""
    }

    return xs[Math.floor(Math.random() * xs.length)]
}

geradorEl.addEventListener("click", geraSenha)
copiaEl.addEventListener("click", () =>{
    const textarea = document.createElement("textarea")
    const senha = SenhaEl.innerText

    if(!senha){
        return
    }

    textarea.value = senha
    document.body.appendChild(textarea)

    textarea.select()
    document.execCommand("copy")

    textarea.remove()
    alert("Senha copiada para a área de transferência")
})