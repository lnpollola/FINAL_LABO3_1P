var lista;
const server_url = "http://localhost:3000/";
var xhr;
var jqueryObj = $;
var xml = new XMLHttpRequest();

//Creo un Héroe Global para manejar datos
var heroeGlobal = { "id":"","nombre":"","apellido":"","alias":"","edad":"","lado":"", "active":"", "created_dttm":"" }



window.onload = asignarEventos;

function asignarEventos() {

    // var btnAlta = document.getElementById("btnAlta");

    // btnAlta.onclick = function () {
    //     ejecutarTransaccion("Mostrar");
    // }

    ejecutarTransaccion("actualizarLista");

    $("#btnAgregarConfirm").click(function() { 
        ejecutarTransaccion("Alta");
    });

   

}

function Personaje(id, nombre, apellido, alias, edad, lado) {
    //contructor de objeto Personaje
    this.id= id;
    this.nombre= nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.lado = lado;
}

function traerIdHeroe(e) {

    //Este manejador de evento se ejecutra cuando se hace click en la grilla dinamica.
    //Propuesta: 1)Busco en el DOM el id del personaje a eliminar

    //2)Me traigo el heroe de la lista, haciendo una funcion de buscar, como por ejemplo:
    //var heroe = lista[buscarHeroe(lista, id)];
    //3)llamo a ejecutarTransaccion
    ejecutarTransaccion("MostrarHeroe", heroe);

}

function altaPersonaje() {
//genero un nuevo "Personaje", y lo inserto

    var flag = true;

    var idHeroe         =document.getElementById("idHeroe").value;
    var nombreHeroe     =document.getElementById("nombreHeroe").value;
    var apellidoHeroe   =document.getElementById("apellidoHeroe").value;
    var aliasHeroe      =document.getElementById("aliasHeroe").value;
    var edadHeroe       =document.getElementById("edadHeroe").value;
    var ladoHeroe       =document.getElementById("ladoHeroe").value;


    nuevoPersonaje = new Personaje (
      idHeroe      ,
      nombreHeroe  ,
      apellidoHeroe,
      aliasHeroe   ,
      edadHeroe    ,
      ladoHeroe    
    )

    // VALIDO QUE AMBOS CAMPOS TENGAN MAS DE 3 CARACTERES
    if (nombreHeroe.length < 3 || apellidoHeroe.length < 3) {
        alert("El campo debe tener mas de 3 c. ");
        flag= false;
    }
    
    if(flag== true && confirm("Confirma agregar persona?"))
    {

        ejecutarTransaccion("Insertar", nuevoPersonaje);
     
    }
    else 
    {
        $('#modalERROR').modal('show');

    }


}


function eliminarPersonaje() {
    //Propuesta: 1)Busco en el DOM el id del personaje a eliminar

    //2)Me traigo el heroe de la lista, haciendo una funcion de buscar, como por ejemplo:
    //var heroe = lista[buscarHeroe(lista, id)];
    //3)llamo a ejecutarTransaccion
    ejecutarTransaccion("Eliminar", heroe);

    //Aca va alguna animacion para cerrar el formulario

}

function modificarPersonaje() {
    //agregar codigo que crea necesario

    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado);
    ejecutarTransaccion("Modificar", personajeModificado);
    //animacion para cerrar formulario

}


function traerListaHeroes(callback) {
    //ESTA FUNCION RECIBE COMO PARAMETRO UN CALLBACK, POR SI SE QUIERE USAR 
     //PARA REFRESCAR LA TABLA A LA VUELTA DE LA PETICION AL SERVIDOR

     jqueryObj.get("http://localhost:3000/traer?collection=heroes",function (data, status) {

        var personajesCompleto = data.data;
        var tBodyTable = $('#tBodyTable')[0];
         
        var seccionPersonajes = "";
            

        for(var i=0; i< personajesCompleto.length; i++)
        {
        
            seccionPersonajes += "<tr><td>"+ personajesCompleto[i].id       + "</td>" +
                                        "<td>" +      personajesCompleto[i].nombre   + "</td>" +
                                        "<td>" +      personajesCompleto[i].apellido + "</td>" +
                                        "<td>" +      personajesCompleto[i].alias    + "</td>" +
                                        "<td>" +      personajesCompleto[i].edad    + "</td>"+
                                        "<td>" +      personajesCompleto[i].lado    + "</td>"+
                                "</tr>" ;
        
            tBodyTable.innerHTML = seccionPersonajes;
        }

        transicionSpinner();
        //CARGA DE TABLA INICIAL
        document.getElementById("divTable").style.display='block';

    } )//fin $.get
    
    //VER EN CONTROLADOR.JS LA FUNCION ejecutarTransaccion PARA case "actualizarLista"

}

function insertarHeroe(heroe) {

    // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
    var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    //AGREGAR CODIGO PARA INSERTAR EL HEROE
    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";

    xml.open("POST","http://localhost:3000/agregar");
    xml.setRequestHeader('Content-Type', 'application/json');

   
    xml.send(JSON.stringify(data));

    xml.onreadystatechange = transicion();
   
}

function eliminarHeroe(heroe) {
    var data = {
        "collection":"heroes",
        "id": heroe.id
    }
    //AGREGAR CODIGO PARA ELIMINAR EL HEROE
}

function modificarHeroe(heroe) {

      // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
      var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    //AGREGAR CODIGO PARA MODIFICAR EL HEROE
}


function transicionSpinner() {
    
       
    document.getElementById("spinner").style.display = "none";


    // $(".divoculto").hide();
}


function transicion() {
    
    document.getElementById("spinner").style.display = "block";
    if (xml.readyState ==4) {
        if (xml.status==200) {
             alert("Satisfactorio.");
            // document.getElementById("modal-body").style.visibility ="hidden";
            $('#exampleModalCenter').modal('hide'); 
            location.reload();
            
            
        } else{document.getElementById("spinner").style.display = "none";}
        
    }
}
