var xml = new XMLHttpRequest();

//Creo un Héroe Global para manejar datos
var PersonajeGlobal = { "id":"","nombre":"","apellido":"","apellido":"","alias":"","edad":"","lado":"", "active":"", "created_dttm":"" }


function mostrarFormulario() {
    //contructor de objeto Personaje
    // console.log("estoy en mostrar formulario");
    // document.getElementById("divOculto2").style.display = "block";

    
}

    $("#btnAgregarConfirm").click(function() { 
        agregarPersona();
        
    });

function transicionSpinner() {
    
       
    document.getElementById("spinner").style.display = "none";


    // $(".divoculto").hide();
}