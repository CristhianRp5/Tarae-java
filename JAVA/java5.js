    Promedio=prompt("Ingrese el promedio de el estudiante");
    m=1000000

    if(Promedio<3){
        alert("La matricula del estduiante es de 1.000.000")
    }else if(Promedio >=3 && Promedio<=4){
        alert("Su descuento es de " +m *0.05);
    }else if(Promedio>4 && Promedio<=5){
        alert("Su descuento es del "+m*0.5);

    }