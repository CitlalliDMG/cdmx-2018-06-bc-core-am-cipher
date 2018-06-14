//Sirve para después mandar llamar el texto que ingresa el usuario
let getString = document.getElementById("originalPhrase");

//Sirve para después mandar llamar la clave que ingresa el usuario
let getOffset = document.getElementById("key");

//Sirve para después poder ocultar los botones
let buttons = document.getElementById("buttons");


//Sirven para desplegar el resultado
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let messageResult = document.getElementById("messageResult");
let offsetResult = document.getElementById("offsetResult");

const getDataEncode = () =>{
		let string = getString.value;
		console.log(string);
		let offset = getOffset.value;
		console.log(offset);

		if (string == "") {

	        alert("No se registro tu texto, intenta de nuevo");

	    } else if (offset == "" || offset == " " || offset%1 !== 0) {

			alert("Error: No se registro tu clave o no es un número entero");

		}else{

		   stringContainer.style.display = "none";
		   offsetContainer.style.display = "none";
		   buttons.style.display = "none";
	       answer.style.display = "block";
		   messageResult.innerHTML = `Este es tu texto codificado:`;
		   result.innerHTML = cipher.encode(offset,string);
		   offsetResult.innerHTML = `No olvides avisar que la clave para decodificar tu mensaje es: <br><br><strong>${offset}</strong>`;
		   }

};

const getDataDecode = () =>{
		let string = getString.value;
		console.log(string);
		let offset = getOffset.value;
		console.log(offset);

		if (string == "") {

	        alert("No se registro tu texto, intenta de nuevo");

	    } else {
	 
		   if (offset == "" || offset == " " || offset%1 != 0) {

			alert("Error: No se registro tu clave o no es un número entero");

		   }else{

		   stringContainer.style.display = "none";
		   offsetContainer.style.display = "none";
		   buttons.style.display = "none";
	       answer.style.display = "block";
		   messageResult.innerHTML = `Este es tu texto decodificado:`;
		   }

	    };

		result.innerHTML = cipher.decode(offset,string);
};