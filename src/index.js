//String vacio donde se guardara el texto codificado
let codedPhrase = "";	

//String vacio donde se guardara el texto decodificado
let decodedPhrase = "";	

//Sirve para desplegar el resultado
let result = document.getElementById("result");

//Sirve para después mandar llamar el texto que ingresa el usuario
let strCodeOrigin = document.getElementById("originalPhrase");

//Sirve para después mandar llamar la clave que ingresa el usuario
let keyOrigin = document.getElementById("key");

const encode = () =>{
	const strCode = strCodeOrigin.value;
	const key = keyOrigin.value;

	//Bucle que se ejecuta un número de veces igual a la longitud del texto introducido por el usuario
	for(let i=0; i< strCode.length; i++){	

		//Obtiene el código ASCII de cada caracter del texto
		let a = strCode.charCodeAt(i);	
		//Condicional que detecta si el caracter procesado estaba en MAYÚSCULAS	
		if(65 <= a && a <= 90){		

			//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar	
			let b = (a-65+key)%26+65;	
			//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
			codedPhrase += String.fromCharCode(b)/*.toUpperCase()*/; 
			//Guarda/despliega el nuevo texto codificado	 
			//console.log(codedPhrase);

		//Condicional que detecta si el caracter procesado estaba en MINÚSCULAS	
		}else if(97 <= a && a <= 122){

			//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar
			let b = (a-97+key)%26+97;
			//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
			codedPhrase += String.fromCharCode(b)/*.toLowerCase()*/; 
			//Guarda/despliega el nuevo texto codificado
			//console.log(codedPhrase);

		//Condicional que detecta si el caracter procesado es un ESPACIO EN BLANCO (ASCII 32)			
		}else if(a === 32){

			//Asigna el nuevo valor como igual a su valor anterior
			let b = a;
			//Agrega el espacio en blanco al texto volviendo a convertir el código ASCII a letra		
			codedPhrase += String.fromCharCode(b);
			//Guarda/despliega el nuevo texto codificado
			//console.log(b);

		}//Cierra último ELSE IF
	
	}//Cierra FOR

	//Aquí va a ir el return
	return result.innerHTML = codedPhrase;

}//Cierra FUNCIÓN encodet

//Invoca a la función con los argumentos guardados en los parametros str (texto a codificar) y key (clave para cifrar)
encode(strCodeOrigin,keyOrigin); 

const decode = () =>{
	const strCode = strCodeOrigin.value;
	const key = keyOrigin.value;


	//initialPhrase = strCode;
	//Bucle que se ejecuta un número de veces igual a la longitud del texto introducido por el usuario
	for(let i=0; i< strCode.length; i++){	

		//Obtiene el código ASCII de cada caracter del texto
		let a = strCode.charCodeAt(i);	
		//Condicional que detecta si el caracter procesado estaba en MAYÚSCULAS	
		if(65 <= a && a <= 90){		

			//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar	
			let b = (a-65-key)%26+65;	
			//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
			decodedPhrase += String.fromCharCode(b)/*.toUpperCase()*/; 
			//Guarda/despliega el nuevo texto codificado	 
			//console.log(codedPhrase);

		//Condicional que detecta si el caracter procesado estaba en MINÚSCULAS	
		}else if(97 <= a && a <= 122){

			//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar
			let b = (a-97-key)%26+97;
			//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
			decodedPhrase += String.fromCharCode(b)/*.toLowerCase()*/; 
			//Guarda/despliega el nuevo texto codificado
			//console.log(codedPhrase);

		//Condicional que detecta si el caracter procesado es un ESPACIO EN BLANCO (ASCII 32)			
		}else if(a === 32){

			//Asigna el nuevo valor como igual a su valor anterior
			let b = a;
			//Agrega el espacio en blanco al texto volviendo a convertir el código ASCII a letra		
			decodedPhrase += String.fromCharCode(b);
			//Guarda/despliega el nuevo texto codificado
			//console.log(b);

		}//Cierra último ELSE IF
	
	}//Cierra FOR

	//Aquí va a ir el return
	return result.innerHTML = decodedPhrase;

}//Cierra FUNCIÓN encodet

//Invoca a la función con los argumentos guardados en los parametros str (texto a codificar) y key (clave para cifrar)
decode(strCodeOrigin,keyOrigin); 