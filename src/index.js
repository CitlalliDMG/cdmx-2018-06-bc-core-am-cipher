//String vacio donde se guardara el texto codificado
let codedPhrase = "";	

//String vacio donde se guardara el texto decodificado
let decodedPhrase = "";	

//Sirve para desplegar el resultado
let result = document.getElementById("result");

//Sirve para después mandar llamar el texto que ingresa el usuario
let strOrigin = document.getElementById("originalPhrase");

//Sirve para después mandar llamar la clave que ingresa el usuario
let keyOrigin = document.getElementById("key");

//Inicia función para codificar
const encode = () =>{
	//Obtiene la CADENA a cifrar y la guarda en una variable
	const strCode = strOrigin.value;
	//Obtiene el OFFSET (clave), me aseguro de convertirla en número y la guardo en una variable
	const key = parseInt(keyOrigin.value);

	//Bucle que se ejecuta un número de veces igual a la longitud del texto introducido por el usuario
	for(let i=0; i< strCode.length; i++){	

		//Obtiene el código ASCII de cada caracter del texto
		let a = strCode.charCodeAt(i);	

		//Condicional que detecta si el caracter procesado estaba en MAYÚSCULAS	
		if(a >= 65 && a <= 90){		

			//Esta sentencia obtiene el nuevo código ASCII basado en el código de el caracter original y la clave a usar
			let b = (a - 65 + key) % 26 + 65;
			//Convierte los nuevos códigos y los guarda en la variable a mostrar
			codedPhrase += String.fromCharCode(b);

		//Condicional que detecta si el caracter procesado estaba en MINÚSCULAS	
		}else if(a >= 97 && a <= 122){

			//Esta sentencia obtiene el nuevo código ASCII basado en el código de el caracter original y la clave a usar
			let b = (a - 97 + key) % 26 + 97
			//Convierte los nuevos códigos y los guarda en la variable a mostrar
			codedPhrase += String.fromCharCode(b);

		//Condicional que detecta si el caracter procesado es un ESPACIO EN BLANCO (ASCII 32), o algún carácter especial			
		}else if (a === 32  || (a>=33 || a<=64) || (a>=91 || a<=96) || (a>=123 || a<=126)) {

			//Si detecta que se cumple la condición del ELSE IF no le hace nada al código, solo lo vuelve a transformar en letra
			codedPhrase += String.fromCharCode(a);

		}//Cierra último ELSE IF

	}//Cierra FOR

	//Aquí va a el return
	return result.innerHTML = "Esta es tu texto codificado: <br>" + codedPhrase;

}//Cierra FUNCIÓN encodet

//Invoca a la función con los argumentos guardados en los parametros str (texto a codificar) y key (clave para cifrar)
encode(strOrigin,keyOrigin); 

//Inicia función para decodificar
const decode = () =>{

	//Obtiene la CADENA a decifrar y la guarda en una variable
	const strCode = strOrigin.value;
	//Obtiene el OFFSET (clave), me aseguro de convertirla en número y la guardo en una variable
	const key = parseInt(keyOrigin.value);

	//Bucle que se ejecuta un número de veces igual a la longitud del texto introducido por el usuario
	for(let i=0; i< strCode.length; i++){	

		//Obtiene el código ASCII de cada caracter del texto
		let a = strCode.charCodeAt(i);	
		//Condicional que detecta si el caracter procesado estaba en MAYÚSCULAS	
		if((a >=65 && a <= 90) || (a >= 91 && a <= 96)){		

			//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar	
			let b = (a-90-key)%26+90;	
			//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
			decodedPhrase += String.fromCharCode(b); 


		//Condicional que detecta si el caracter procesado estaba en MINÚSCULAS	
		}else if((a >= 97 && a <= 122) || (a >= 123 && a<= 126)){

			//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar
			let b = (a-122-key)%26+122;
			//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
			decodedPhrase += String.fromCharCode(b); 

		//Condicional que detecta si el caracter procesado es un ESPACIO EN BLANCO (ASCII 32), o algún carácter especial			
		}else if(a === 32 || (a>=33 || a<=64) || (a>=91 || a<=96) || (a>=123 || a<=126)){

			//Asigna el nuevo valor como igual a su valor anterior
			let b = a;
			//Agrega el espacio en blanco o caracter especial al texto volviendo a convertir el código ASCII a letra		
			decodedPhrase += String.fromCharCode(b);

		}//Cierra último ELSE IF
	
	}//Cierra FOR

	//Aquí va el return
	return result.innerHTML = "Esta es tu texto codificado: <br>" + decodedPhrase;

}//Cierra FUNCIÓN encodet

//Invoca a la función con los argumentos guardados en los parametros str (texto a decodificar) y key (clave para decifrar)
decode(strOrigin,keyOrigin); 