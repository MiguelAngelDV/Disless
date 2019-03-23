document.getElementById("button-cat-1").addEventListener("click", function(){
    var cardContent = document.getElementById("cat-2"),
    cardFonetic = document.getElementById("card-lecto");
    cardFonetic.classList.remove("flex-column");
    cardFonetic.classList.add("hide");
    var opciones = [
        "Lectura de palabras.",
        "Palabras inventadas.",
        "Separar oraciones.",
        "Contar Sílabas",
        "Lectura Cronometrada"
    ]
    //Creacion del Div
    var opcionesCard = document.createElement("div");
    opcionesCard.classList.add("options-card");
    opcionesCard.classList.add("flex-column");
    
    for(x = 0; x<5; x++){
        var option= document.createElement("div"),
        y =document.createTextNode(opciones[x]),
        z = document.createElement("p");
        z.appendChild(y);
        option.appendChild(z);
        option.classList.add("center")
        option.classList.add("option");
        opcionesCard.appendChild(option);
    }

    cardContent.appendChild(opcionesCard);
});

// Div 2