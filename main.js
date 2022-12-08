let preciobase = parseFloat(prompt("Ingrese el precio del videojuego"))

if (preciobase != 0 || preciobase !== null) {

    let opcion = prompt("¿De qué plataforma es el videojuego que desea comprar? \n1 - Steam \n2 - Origin \n3 - Epic Games \nX - Finalizar");
    while(opcion != "X" && opcion != "x"){
    switch (opcion) {
        case "1":
        let steam = preciobase * 1.74
        alert("El precio final de tu videojuego es $" + steam + "\nLos impuestos aplicados fueron los siguientes:\n45% percepción de ganancias y bienes personales\n8% impuesto PAIS\n21% IVA servicios digitales")
        break;

        case "2":
        let origin = preciobase * 1.75
        alert("El precio final de tu videojuego es $" + origin + "\nLos impuestos aplicados fueron los siguientes:\n45% percepción de ganancias y bienes personales\n8% impuesto PAIS\n21% IVA servicios digitales\n 1% impuesto al sello")
        break;

        case "3":
        let epic = preciobase * 1.77
        alert("El precio final de tu videojuego es $" + epic + "\nLos impuestos aplicados fueron los siguientes:\n45% percepción de ganancias y bienes personales\n8% impuesto PAIS\n21% IVA servicios digitales\n 1% impuesto al sello\n2% percepción de IIBB")
        break;


        default:
        alert("La opción ingresada no existe. Intente nuevamente")
        break;
        }

        opcion = prompt("¿De qué plataforma es el videojuego que desea comprar? \n1 - Steam \n2 - Origin \n3 - Epic Games \nX - Finalizar");

    }


}else{
    
}

