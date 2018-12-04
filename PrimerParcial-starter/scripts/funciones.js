
//LO HAGO CON MODALS
// function mostrarFormulario() {

    
//     //contructor de objeto Personaje
//     // console.log("estoy en mostrar formulario");
//     // document.getElementById("divOculto2").style.display = "block";

    
// }

  

// function transicionSpinner() {
    
       
//     document.getElementById("spinner").style.display = "none";


//     // $(".divoculto").hide();
// }


function transicion() {
    
    document.getElementById("spinner").style.visibility = "visible";
    if (xml.readyState ==4) {
        if (xml.status==200) {
             alert("Satisfactorio.");
            document.getElementById("loginWindow").style.visibility ="hidden";
            location.reload();
            
            
        } else{document.getElementById("spinner").style.visibility = "hidden";}
        
    }
}
