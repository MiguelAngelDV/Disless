function getAll(){
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);            
            
            respuesta.exercises.forEach((exercise)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+exercise.exerciseName+"</h3><br>Author:"+exercise.author;
                exercise.questions.forEach((ques)=>{
                    console.log(ques);
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    ques.options.forEach((opt)=>{
                        document.getElementById("contenedor").innerHTML+="<li>"+opt+"</li><br>";
                    })
                });
                
            });
        }
    }
    http.open("GET","user//getAllExercises",true);    
    http.send();
};

function getLecturaPalabras(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    ques.options.forEach((opt)=>{
                        document.getElementById("contenedor").innerHTML+="<li>"+opt+"</li><br>";
                    })
                });
            })                             
        }
    }
    http.open("GET","user/getExercisesByCategory/Lectura de palabras",true);    
    http.send();
}

function getPalabrasInventadas(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    
                });
            })                             
        }
    }
    http.open("GET","user/getExercisesByCategory/Palabras inventadas",true);    
    http.send();
}
function getSepararOraciones(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                                 
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    
                });
            })                             
        }
    }
    http.open("GET","user/getExercisesByCategory/Separar oraciones",true);    
    http.send();
}


function getContarSilabas(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    
                });
            })                             
        }
    }
    http.open("GET","user/getExercisesByCategory/Cuenta las sílabas",true);    
    http.send();
}
function getLectura(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    
                });
            })                             
        }
    }
    http.open("GET","user/getExercisesByCategory/Lecturas",true);    
    http.send();
}

function getLetrasParecidas(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    
                });
            })                             
        }
    }
    http.open("GET","user/getExercisesByCategory/Letras parecidas",true);    
    http.send();
}
function getCompletaPalabras(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";
                    
                });
            })                             
        }
    }
    http.open("GET","/user/getExercisesByCategory/Completa palabras",true);    
    http.send();
}

function getOrdenaPalabras(){
    document.getElementById("contenedor").innerHTML ="";
    var	http = new XMLHttpRequest();    
    http.onreadystatechange = function (){        
		if (http.readyState == 4 && http.status == 200) {                                    
            var respuesta = JSON.parse(this.responseText);                        
            respuesta.forEach((ejercicio)=>{
                document.getElementById("contenedor").innerHTML+="<h3>"+ejercicio.exerciseName+"</h3><br>";
                ejercicio.questions.forEach((ques)=>{                    
                    document.getElementById("contenedor").innerHTML+="<li>"+ques.question+"</li><br>";                    
                });
            })                             
        }
    }
    http.open("GET","/user/getExercisesByCategory/Ordena las palabras",true);    
    http.send();
}