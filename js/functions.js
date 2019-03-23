
document.getElementById("button-cat-1").addEventListener("click", function(){
    var cardContent = document.getElementById("cat-2"),
    cardFonetic = document.getElementById("card-lecto"),
    button = document.getElementById("button-cat-1");
    button2 = document.getElementById("button-back-1");
    cardFonetic.classList.remove("flex-column");
    cardFonetic.classList.add("hide");
    var opciones = [
        "Lectura de palabras.",
        "Palabras inventadas.",
        "Separar oraciones.",
        "Contar Sílabas",
        "Lectura Cronometrada"
    ]
    var ejercicios = [
        "lecturaPalabras.html",
        "palabrasInventadas.html",
        "separaOraciones.html",
        "contarSilabas.html",
        "lecturaCronometrada.html",
    ]
    //Creacion del Div
    var opcionesCard = document.createElement("div"),
        id = document.createAttribute("id");
    opcionesCard.classList.add("options-card");
    opcionesCard.classList.add("flex-column");
    id.value = "options-1";
    opcionesCard.setAttributeNode(id);
    
    for(x = 0; x<5; x++){
        var option= document.createElement("a"),
        y =document.createTextNode(opciones[x]),
        z = document.createElement("p"),
        idOp = document.createAttribute("id");
        idOp.value = "op-fono-"+(x+1);
        z.appendChild(y);
        option.appendChild(z);
        option.classList.add("center")
        option.classList.add("option");
        option.setAttributeNode(idOp);
        option.href ="ejercicios-fono/"+ejercicios[x];
        opcionesCard.appendChild(option);
    }
    cardContent.appendChild(opcionesCard);
    button.classList.add("hide");
    button2.classList.remove("hide");
});

//Regresar 1
document.getElementById("button-back-1").addEventListener("click", function () {
    var cardContent = document.getElementById("cat-2"),
        opcionesCard = document.getElementById("options-1"),
        cardFonetic = document.getElementById("card-lecto"),
        button = document.getElementById("button-cat-1"),
        button2 = document.getElementById("button-back-1");

    cardContent.removeChild(opcionesCard);

    cardFonetic.classList.remove("hide");
    cardFonetic.classList.add("flex-column");
    button.classList.remove("hide");
    button2.classList.add("hide");
});

// Div 2
document.getElementById("button-cat-2").addEventListener("click", function () {
    var cardContent = document.getElementById("cat-1"),
        cardFonetic = document.getElementById("card-fono"),
        button = document.getElementById("button-cat-2"),
        button2 = document.getElementById("button-back-2");

    cardFonetic.classList.remove("flex-column");
    cardFonetic.classList.add("hide");

    var opciones = [
        "Distinguir entre letras parecidas",
        "¿Con que letra va?",
        "Completa la palabra",
        "Ordena la oración",
        "Encuentra la palabra."
    ]
    var ejercicios = [
        "distinguirletras.html",
        "cualLetra.html",
        "completaLaPalabra.html",
        "ordeneLaOracion.html",
        "encuentraLaPalabra.html",
    ]
    //Creacion del Div
    var opcionesCard = document.createElement("div");
        id = document.createAttribute("id");
    opcionesCard.classList.add("options-card");
    opcionesCard.classList.add("flex-column");
    id.value = "options-2";
    opcionesCard.setAttributeNode(id);

    for (x = 0; x < 5; x++) {
        var option = document.createElement("a"),
            y = document.createTextNode(opciones[x]),
            z = document.createElement("p"),
            idOp = document.createAttribute("id");
            idOp.value = "op-lecto-" + (x + 1);
        z.appendChild(y);
        option.appendChild(z);
        option.classList.add("center")
        option.classList.add("option");
        option.setAttributeNode(idOp);
        option.href = "ejercicios-lecto/" + ejercicios[x];
        opcionesCard.appendChild(option);
    }

    cardContent.appendChild(opcionesCard);
    button.classList.add("hide");
    button2.classList.remove("hide");
});

//Regresar 2
document.getElementById("button-back-2").addEventListener("click", function () {
    var cardContent = document.getElementById("cat-1"),
        opcionesCard = document.getElementById("options-2"),
        cardLecto = document.getElementById("card-fono"),
        button = document.getElementById("button-cat-2"),
        button2 = document.getElementById("button-back-2");

    cardContent.removeChild(opcionesCard);
    cardLecto.classList.remove("hide");
    cardLecto.classList.add("flex-column");
    button.classList.remove("hide");
    button2.classList.add("hide");
});

// //Modales para los ejercicios
// if (document.getElementById("options-1")) {
//     document.getElementById("op-fono-1").addEventListener("click", function(){
//         var container = document.getElementById("container"),
//             containerCards = document.getElementById("container-cards");
//         container.removeChild(containerCards);
//     })

// }