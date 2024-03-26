let btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
    let inputUsuario = document.querySelector("#input-texto")
    if(inputUsuario.value !== ""){
        if(document.querySelector(".qr-code").childElementCount === 0){
            gerador(inputUsuario)
        } else{
            document.querySelector(".qr-code").innerHTML = ""
            gerador(inputUsuario)
        }
    } else{
        document.querySelector(".qr-code").style = "display: none"
        console.log("Input inválido!")
    }
})

function gerador(inputUsuario){
    document.querySelector(".qr-code").style = ""
    let qrCode = new QRCode(document.querySelector(".qr-code"), {
        text: `${inputUsuario.value}`,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    })
    let download = document.createElement("button")
    document.querySelector(".qr-code").appendChild(download)
    let downloadLink = document.createElement("a")
    downloadLink.setAttribute("download", "qrCodeLink.png")
    downloadLink.innerText = "Download"
    download.appendChild(downloadLink)
    if(document.querySelector(".qr-code img").getAttribute("src") === null){
        setTimeout(() =>{
            downloadLink.setAttribute(
                "href",
                `${document.querySelector("canvas").toDataURL}`
            )
        }, 300)
    } else{
        setTimeout(() =>{
            downloadLink.setAttribute(
                "href",
                `${document.querySelector(".qr-code img").getAttribute("src")}`
            )
        }, 300)
    }
}