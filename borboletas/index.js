function escolheborboleta(){
    var h2 = document.getElementsByTagName("h2")[0]
    h2.innerText = "hmm"

    var img1 = document.getElementById("img1")
    img1.setAttribute ("src", "https://th.bing.com/th/id/OIP.wGPju8s8lgBKwF27tyR7TAHaGV?pid=ImgDet&rs=1") 
}

function addbrabuleta(){
    var foto = document.createElement("div")
    foto.setAttribute("id", "div5")

    var newbrabuleta=document.createElement("img")
    newbrabuleta.setAttribute("src", "https://th.bing.com/th/id/OIP.pICHznoPTtfJMO8SgsJm0gAAAA?pid=ImgDet&rs=1" )

    foto.appendChild(newbrabuleta)

    var secao = document.getElementsByTagName("section")[0]
    secao.appendChild(foto)

}