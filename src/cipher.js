window.cipher = {
  // ...
  //Ejemplo de sintaxis
  //encode: function(offset,string)

	//Inicia función para codificar
	encode : (offset,string) =>{

		//String vacio donde se guardara el texto codificado
		let codedPhrase = "";	
		//Me aseguro de convertir el dato obtenido en OFFSET en número y la guardo en una variable
		const key = parseInt(offset);

		//Bucle que se ejecuta un número de veces igual a la longitud del texto introducido por el usuario
		for(let i=0; i< string.length; i++){	

			//Obtiene el código ASCII de cada caracter del texto
			let asciiOriginal = string.charCodeAt(i);	

			//Condicional que detecta si el caracter procesado estaba en MAYÚSCULAS	
			if(asciiOriginal >= 65 && asciiOriginal <= 90){		

				//Esta sentencia obtiene el nuevo código ASCII basado en el código de el caracter original y la clave a usar
				let newAscii = (asciiOriginal - 65 + key) % 26 + 65;
				//Convierte los nuevos códigos y los guarda en la variable a mostrar
				codedPhrase += String.fromCharCode(newAscii);

			//Condicional que detecta si el caracter procesado estaba en MINÚSCULAS	
			}else if(asciiOriginal >= 97 && asciiOriginal <= 122){

				//Esta sentencia obtiene el nuevo código ASCII basado en el código de el caracter original y la clave a usar
				let newAscii = (asciiOriginal - 97 + key) % 26 + 97
				//Convierte los nuevos códigos y los guarda en la variable a mostrar
				codedPhrase += String.fromCharCode(newAscii);

			//Condicional que detecta si el caracter procesado es un ESPACIO EN BLANCO (ASCII 32), o algún carácter especial			
			}else if (asciiOriginal === 32  || asciiOriginal === 95 || (asciiOriginal>=33 || asciiOriginal<=64)){

				//Si detecta que se cumple la condición del ELSE IF no le hace nada al código, solo lo vuelve a transformar en letra
				codedPhrase += String.fromCharCode(asciiOriginal);

			}//Cierra último ELSE IF

		}//Cierra FOR

		//Aquí va a el return
		return codedPhrase;

	},//Cierra FUNCIÓN encode

	//Inicia función para decodificar
	decode : (offset,string) =>{

		//String vacio donde se guardara el texto decodificado
		let decodedPhrase = "";	
		//Me aseguro de convertir el dato obtenido en OFFSET en número y la guardo en una variable
		const key = parseInt(offset);

		//Bucle que se ejecuta un número de veces igual a la longitud del texto introducido por el usuario
		for(let i=0; i< string.length; i++){	

			//Obtiene el código ASCII de cada caracter del texto
			let asciiOriginal = string.charCodeAt(i);	
			//Condicional que detecta si el caracter procesado estaba en MAYÚSCULAS	
			if((asciiOriginal >=65 && asciiOriginal <= 90) || (asciiOriginal >= 91 && asciiOriginal <= 96)){		

				//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar	
				let newAscii = (asciiOriginal-90-key)%26+90;	
				//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
				decodedPhrase += String.fromCharCode(newAscii); 


			//Condicional que detecta si el caracter procesado estaba en MINÚSCULAS	
			}else if((asciiOriginal >= 97 && asciiOriginal <= 122) || (asciiOriginal >= 123 && asciiOriginal<= 126)){

				//Esta sentencia el nuevo código ASCII basado en el código de el caracter original y la clave a usar
				let newAscii = (asciiOriginal-122-key)%26+122;
				//Crea el nuevo texto usando el operador de asignación de adición, convirtiendo el código ASCII a la nueva letra y convirtiendola en mayúscula
				decodedPhrase += String.fromCharCode(newAscii); 

			//Condicional que detecta si el caracter procesado es un ESPACIO EN BLANCO (ASCII 32), o algún carácter especial			
			}else if(asciiOriginal === 32 || (asciiOriginal>=33 || asciiOriginal<=64) || (asciiOriginal>=91 || asciiOriginal<=96) || (asciiOriginal>=123 || asciiOriginal<=126)){

				//Agrega el espacio en blanco o caracter especial al texto volviendo a convertir el código ASCII a letra		
				decodedPhrase += String.fromCharCode(asciiOriginal);

			}//Cierra último ELSE IF
		
		}//Cierra FOR

		//Aquí va el return
		return decodedPhrase;

	},//Cierra FUNCIÓN decode


	createCipherWithOffset: () =>{}
};