var cantidad1 = 0
var cantidad2 = 0
var cantidad3 = 0
var cantidad4 = 0
var cantidad5 = 0
var cantidad6 = 0
var cantidad7 = 0
var cantidad8 = 0
var cantidad9 = 0
var cantidad10 = 0
var cantidad11 = 0
var cantidad12 = 0
var cantidad13 = 0
var cantidad14 = 0
var cantidad15 = 0
var cantidad16 = 0


function Agregar(id){
    switch(id){
        case "prod1":
            cantidad1++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad1 +"</p>"
            break
        case "prod2":
            cantidad2++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad2 +"</p>"
            break
        case "prod3":
            cantidad3++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad3 +"</p>"
            break
        case "prod4":
            cantidad4++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad4 +"</p>"
            break
        case "prod5":
            cantidad5++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad5 +"</p>"
            
            break
        case "prod6":
            cantidad6++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad6 +"</p>"
            
            break
        case "prod7":
            cantidad7++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad7 +"</p>"
            break
        case "prod8":
            cantidad8++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad8 +"</p>"
            break
        case "prod9":
            cantidad9++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad9 +"</p>"
            break
        case "prod10":
            cantidad10++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad10 +"</p>"
            break
        case "prod11":
            cantidad11++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad11 +"</p>"
            break
        case "prod12":
            cantidad12++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad12 +"</p>"
            break
        case "prod13":
            cantidad13++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad13 +"</p>"
            break
        case "prod14":
            cantidad14++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad14 +"</p>"
            break
        case "prod15":
            cantidad15++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad15 +"</p>"
            break
        case "prod16":
            cantidad16++
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad16 +"</p>"
            break
    }
}

function Mostrar(){
    if(document.getElementById("login").style.display=="flex"){
        document.getElementById("login").style.display="none"
    }else document.getElementById("login").style.display="flex"
}