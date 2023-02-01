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

var arrCantidades = []

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
    
    arrCantidades = [cantidad1,cantidad2,cantidad3,cantidad4,cantidad5,cantidad6,cantidad7,cantidad9,cantidad9,cantidad10,cantidad11,cantidad12,cantidad13,cantidad14,cantidad15,cantidad16]
    document.cookie = "cantidades="+ JSON.stringify(arrCantidades);

}
function Quitar(id){
    switch(id){
        case "prod1":
            if(cantidad1>0)cantidad1--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad1 +"</p>"
            break
        case "prod2":
            if(cantidad2>0)cantidad2--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad2 +"</p>"
            break
        case "prod3":
            if(cantidad3>0)cantidad3--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad3 +"</p>"
            break
        case "prod4":
            if(cantidad4>0)cantidad4--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad4 +"</p>"
            break
        case "prod5":
            if(cantidad5>0)cantidad5--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad5 +"</p>"
            break
        case "prod6":
            if(cantidad6>0)cantidad6--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad6 +"</p>"
            break
        case "prod7":
            if(cantidad7>0)cantidad7--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad7 +"</p>"
            break
        case "prod8":
            if(cantidad8>0)cantidad8--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad8 +"</p>"
            break
        case "prod9":
            if(cantidad9>0)cantidad9--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad9 +"</p>"
            break
        case "prod10":
            if(cantidad10>0)cantidad10--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad10 +"</p>"
            break
        case "prod11":
            if(cantidad11>0)cantidad11--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad11 +"</p>"
            break
        case "prod12":
            if(cantidad12>0)cantidad12--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad12 +"</p>"
            break
        case "prod13":
            if(cantidad13>0)cantidad13--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad13 +"</p>"
            break
        case "prod14":
            if(cantidad14>0)cantidad14--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad14 +"</p>"
            break
        case "prod15":
            if(cantidad15>0)cantidad15--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad15 +"</p>"
            break
        case "prod16":
            if(cantidad16>0)cantidad16--
            document.getElementById(id).childNodes[1].childNodes[0].innerHTML = "<p> x" + cantidad16 +"</p>"
            break
    }
    arrCantidades = [cantidad1,cantidad2,cantidad3,cantidad4,cantidad5,cantidad6,cantidad7,cantidad9,cantidad9,cantidad10,cantidad11,cantidad12,cantidad13,cantidad14,cantidad15,cantidad16]

}

function Mostrar(){
    if(document.getElementById("login").style.display=="flex"){
        document.getElementById("login").style.display="none"
    }else document.getElementById("login").style.display="flex"
}


function Register(i){
    if(i == 0)document.getElementById("form").action = "register.php"
    else document.getElementById("form").action = "login.php"
    
}
