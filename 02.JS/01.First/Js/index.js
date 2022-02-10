function capturarNombre(){
    let txtNombre = document.getElementById('nombre');
    //document.write(`Hola ${txtNombre.value}`);
    alert(`Hola ${txtNombre.value}`);
}

function calcularEdad(){
    const fecha = new Date();
    let añoActual = fecha.getFullYear();
    let edad;
    let fechaNac = Number(document.getElementById("fecha").value.slice(0,4));

    if(añoActual < fechaNac){
        alert("Cálmate Benjamin Button!");
    }
    else{
        edad = añoActual - fechaNac;//obtener edad con meses
        document.getElementById("edad").innerHTML = `Este año tendrás ${edad} años.`;

    }
}

function cambiarColor(){
    if(document.getElementById("cuerpo").style.backgroundColor == "#add8e6"){        
        document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb";
        console.log(document.getElementById("cuerpo").style.backgroundColor);
}
    else{
        document.getElementById("cuerpo").style.backgroundColor = "#add8e6";
        console.log(document.getElementById("cuerpo").style.backgroundColor);
}

    // if(document.getElementById("cuerpo").style.backgroundColor = "#20b2aa" == "#20b2aa"){        
    //     document.getElementById("cuerpo").style.backgroundColor = "#20b2aa";
    //     console.log(document.getElementById("cuerpo").style.backgroundColor = "#20b2aa");
    // }
    // else{
    //     document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb";
    //     console.log(document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb");
    // }

}


document.getElementById("calcular").addEventListener("click", calcularEdad);