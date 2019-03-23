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

    var subtitulo = document.getElementById("container2");
    subtitulo.style.display="flex";
}

function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
  }
  

  document.getElementById("musica").addEventListener('play',function(){
      document.getElementById("musica").load(),15000
  });