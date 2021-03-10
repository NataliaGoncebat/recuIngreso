/* Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 */
function mostrar()
 {
		let nombre;
		let edad;
		let sexo;
		let puesto;
		let sueldo;
		let seguir = "si";
		let flagprogram=1;
		let contprogram=0;
		let acumprogram=0;
		let flaganalis=1;
		let acumanalis=0;
		let contanalis=0;
		let flagQa=1;
		let contQa=0;
		let acumQa=0;
		let promprogram=0;
		let promanalis=0;
		let promQa=0;
		let flagsueldofem=1;
		let mayorsueldofem;
		let mayorsueldof;
		let nombrefmayorsueldo;
		let flagsueldomasc=1;
		let mayorsueldonb;
		let flagnobin=1;
		let flagsueldomayor20000=1;




	  
		do {
		  nombre = prompt("Ingrese su nombre");
	  
		  edad = parseInt(prompt("Ingrese su edad: "));
		  while (isNaN(edad) || edad <= 17 ) {
			edad = parseInt(prompt("Error. Reingrese su edad: "));
		  }
	  
		  sexo = prompt("Ingrese sexo femenino/masculino/no binario:");
		  while (sexo != "mfemenino" && sexo != "fmasculino") {
			sexo = prompt("Error. Reingrese sexo femenino/masculino/no binario:");
		  }
	  
		  puesto = prompt("Ingrese su puesto: ");
		  while (puesto != "programador" && puesto != "analista" && puesto != "Qa") {
			puesto = prompt("Error. Reingrese puesto: ");
		  }
	  
		  sueldo = parseInt(prompt("Ingrese sueldo entre 15000 y 70000: "));
		  while (isNaN(sueldo) || sueldo < 15000 || sueldo > 70000) {
			sueldo = parseInt(prompt("Error. Reingrese sueldo entre 15000 a 70000: "));
		  }
	 //a) promedio de sueldos para cada puesto
		  //programador - analista - Qa
		  if(flagprogram || puesto == "programador"){
			contprogram++;
			acumprogram += sueldo;
			flagprogram = 0;
		}else if(flaganalis || puesto == "analista"){
			contanalis++;
			acumanalis += sueldo;
			flaganalis = 0;
		}else if(flagQa || puesto == "Qa"){
			contQa++;
			acumQa += sueldo;
			flagQa = 0;
		}
	
	
	//b) el sexo del que percibe el mayor sueldo
	
if(sexo == "femenino" &&  (flagsueldofem || sueldo > mayorsueldofem){
		mayorsueldof += sueldo;
		nombrefmayorsueldo=nombre;
	flagsueldofem = 0;

}else if(sexo == "masculino" &&  (flagsueldomasc || sueldo > mayorsueldomasc){
	mayorsueldom += sueldo;
		flagsueldomasc = 0;
}else{
	mayorsueldonb += sueldo;
	
	flagsueldonb = 0;
}

if(flagnobin || (sexo == "n" && sueldo>=20000 && sueldo<=55000 && puesto == "programador")){
	contnobin++;

}
//c) el nombre del empleado femenino con mas sueldo
//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 

if(puesto == "programador" && (flagsueldomayor20000 || sueldo > 20000 && sueldo > 55000){//"programador" && puesto != "analista" && puesto != "Qa"
	acumprogmay20000 =+ sueldo;
	contprogmayo20000++;
	flagsueldomayor20000=0;
} 



//---------------------------------------------------------------
seguir = prompt("Desea ingresar mas empleados? ");
} while (seguir == "si");
	
if (mayorsueldof > mayorsueldom && mayorsueldof>mayorsueldonb){
	mayorsueldo == "femenino";
}else if ( mayorsueldom >= mayorsueldof && mayorsueldom > mayorsueldonb){
	mayorsueldo == "masculino";
}else{
	mayorsueldo == "no binario";
}

 if(contA != 0){
		promprogram = acumprogram / contprogram;
	}
	if(contI != 0){
		promanalis = acumanalis / contanalis;
	}
	if(contQa != 0){
		promQa= acumQa / contQa;
	} 


}



console.log(`a) promedio de sueldos para cada puesto es PROGRAMADOR ${promprogram}, ANALISTA ${promanalis} QA ${promanalis}`);


console.log(`b) el sexo del que percibe el mayor sueldo ES ${mayorsueldo}`);

console.log(`c) el nombre del empleado femenino con mas sueldo${mayorsueldof}`);

console.log(`d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 ${contprogmayo20000}`);

