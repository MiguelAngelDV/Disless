function menuButton(){
    var lista = document.getElementById("list");
    lista.style.display = lista.style.display === 'none' ? 'flex' : 'none';    
}

function test(){
    alert("si jala");
}

function startDiagnosis(){
    var instrucciones = document.getElementById("cat");
    var instrucciones2 = document.getElementById("cat2");
    instrucciones.style.display="none";
    instrucciones2.style.display="none";

    var subtitulo = document.getElementById("subTitle");
    subtitulo.style.display="initial";
}