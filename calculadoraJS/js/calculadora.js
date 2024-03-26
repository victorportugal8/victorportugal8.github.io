const tela1El = document.querySelector(".tela-1")
const tela2El = document.querySelector(".tela-2")
const resultadoTemporarioEl = document.querySelector(".resultado-temporario")
const numEl = document.querySelectorAll(".numero")
const operacaoEl = document.querySelectorAll(".operacao")
const igualEl = document.querySelector(".igual")
const limparTudoEl = document.querySelector(".limpar-tudo")
const limparUltimoEl = document.querySelector(".limpar-ultimo")

let tela1N = ""
let tela2N = ""
let resultado = null
let ultimaOperacao = ""
let temPonto = false

numEl.forEach((number) =>{
    number.addEventListener("click", (e) =>{
        if(e.target.innerText === "." && !temPonto){
            temPonto = true
        } else if(e.target.innerText === "." && temPonto){
            return
        }
        tela2N += e.target.innerText
        tela2El.innerText = tela2N
    })
})

operacaoEl.forEach((operacao) =>{
    operacao.addEventListener("click", (e) =>{
        if(!tela2N) return
        temPonto = false
        const nomeOperacao = e.target.innerText
        if(tela1N && tela2N && ultimaOperacao){
            operacaoMatematica()
        } else{
            resultado = parseFloat(tela2N)
        }
        limpaVar(nomeOperacao)
        ultimaOperacao = nomeOperacao
    })
})

function limpaVar(nome = ""){
    tela1N += tela2N + " " + nome + " "
    tela1El.innerText = tela1N
    tela2El.innerText = ""
    tela2N = ""
    resultadoTemporarioEl.innerText = resultado
}

function operacaoMatematica(){
    if(ultimaOperacao === "*"){
        resultado = parseFloat(resultado) * parseFloat(tela2N)
    } else if(ultimaOperacao === "+"){
        resultado = parseFloat(resultado) + parseFloat(tela2N)
    } else if(ultimaOperacao === "-"){
        resultado = parseFloat(resultado) - parseFloat(tela2N)
    } else if(ultimaOperacao === "/"){
        resultado = parseFloat(resultado) / parseFloat(tela2N)
    } else if(ultimaOperacao === "%"){
        resultado = parseFloat(resultado) % parseFloat(tela2N)
    }
}

igualEl.addEventListener("click", () =>{
    if(!tela2N || !tela1N) return
    temPonto = false
    operacaoMatematica()
    limpaVar()
    tela2El.innerText = resultado
    resultadoTemporarioEl.innerText = ""
    tela2N = resultado
    tela1N = ""
})

limparTudoEl.addEventListener("click", () =>{
    tela1N = ""
    tela2N = ""
    tela1El.innerText = ""
    tela2El.innerText = ""
    resultado = ""
    resultadoTemporarioEl.innerText = ""
})

limparUltimoEl.addEventListener("click", () =>{
    tela2El.innerText = ""
    tela2N = ""
})

window.addEventListener("keydown", (e) =>{
    if(e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "."){
        btnClicadoEl(e.key)
    } else if(e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*" || e.key === "%"){
        operacaoClicada(e.key)
    } else if(e.key === "Enter" || e.key === "="){
        igualClicado()
    }
})

function btnClicadoEl(key){
    numEl.forEach((btn) =>{
        if(btn.innerText === key){
            btn.click()
        }
    })
}

function operacaoClicada(key){
    operacaoEl.forEach((operacao) =>{
        if(operacao.innerText === key){
            operacao.click()
        }
    })
}

function igualClicado(){
    igualEl.click()
}