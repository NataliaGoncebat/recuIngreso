function mostrar()/* Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, 
teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) */ 
{
	
	let nombre;
	let cant;
	let contF = 0;
	let contA = 0;
	let contI = 0;
	let acumF = 0;
	let acumA = 0;
	let acumI = 0;
	let promF = 0;
	let promA = 0;
	let promI = 0;
	let marca;
	let desc10;
	let desc5;
	let totalDesc;
	let marcaMayorVentas;
	let precioUn;
	let total;
	let precioFinal;
	let totalVentas = 0;
	let	seguir = "s";

	do {

		nombre = prompt("Ingrese el nombre del cliente").toLowerCase();
		cant = parseInt(prompt("Ingrese la cantidad de lamparas:"));
		while (isNaN(cant) || cant <= 0) {
			cant = parseInt(prompt("Error. Ingrese la cantidad de lamparas:"));
		}
		marca = prompt("Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis") {
			marca = prompt("Error. Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
		}
		precioUn = parseInt(prompt("Ingrese el precio por unidad"));
		while (isNaN(precioUn) || precioUn <= 0) {
			precioUn = parseInt(prompt("Error. Ingrese el precio por unidad"));
		}
//a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.

		total = precioUn * cant;
		totalVentas += total
//b) Cuanto "perdio" la empresa en concepto de descuentos.
		if (marca == "felipelamparas" && cant > 5) {
			desc10 = total * 10 / 100
			precioFinal = total - desc10
			totalDesc += desc10
		}
		else if (marca == "argentinaluz" && cant >= 3) {
			desc5 = total * 5 / 100
			precioFinal = total - desc5
			totalDesc += desc5
		}


		if (marca == "felipelamparas") {
			acumF += cant
			contF++
		} else if (marca == "argentinaluz") {
			acumA += cant
			contA++
		} else {
			acumI += cant
			contI++
		}

		if (contF > contA && contF > contI) {
			marcaMayorVentas = "FelipeLamparas"
		} else if (contA >= contF && contA > contI) {
			marcaMayorVentas = "ArgetinaLuz"
		} else {
			marcaMayorVentas = "Illuminatis"
		}


//-------------------------------------------------------------------------------------
		seguir = prompt("Desea seguir?:  s/n")


	} while (seguir == "s");

	if (contF != 0) {
		promF = acumF / contF
	}
	if (contA != 0) {
		promA = acumA / contA
	}
	if (contI != 0){
		promI = acumI / contI
	}


	console.log("a. La empresa recaudo $" + totalVentas);

	if (totalDesc != 0) {
	console.log("b.La empresa perdio $" + totalDesc + " por descuentos");
	}
	console.log("c.El promedio de la marca FelipeLamparas es de " + promF+ "ArgentinaLuz" + promA + "Illuminatis"  + promI);
	
	console.log("d.La marca que mas vendio es " + marcaMayorVentas);









}
