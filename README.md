# Cifrado César

## Sobre el proyecto

### Introducción

El primer proyecto a realizar es el desarrollo de una aplicación web que resuelva la necesidad planteada en el siguiente escenario:

>Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
>fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
>con amigos y familiares.

>Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
>(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
>y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
>crear una aplicación que te permita enviar mensajes cifrados y que las demás
>personas (partícipes de la fiesta) puedan tener una interfaz para
>descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

### ¿Cuál es el problema a resolver?

Mi flacx puede leer mis mensajes de Whatsapp y enterarse accidentalmente de la fiesta sorpresa que le estoy organizando.

### ¿Cómo se plantea resolver el problema?

Creando una plataforma digital (cipher) donde todxs lxs participantes de la fiesta cifren y descifren los mensajes enviados dentro del grupo para que mi flacx no pueda leerlos. 

## Sobre el usuario

### ¿Quién es el usuario y cómo lo definimos?

Partiendo de la información dada en la introducción al proyecto, se determina que el usuario serán aquellxs amigxs y familiares que irán a la fiesta de cumpleaños, y están poniéndose de acuerdo conmigo a través de un grupo de Whatsapp.

### ¿Qué se puede hacer para conocer al usuario?

Para el desarrollo de este proyecto, se parte del conocimiento que tengo sobre mis amigxs y familiares por el trato que he tenido con ellxs a lo largo del tiempo y los problemas que les he visto enfrentar al momento de ocupar sus celulares o páginas de Internet. 

Con base en esta información se elaboran dos proto-personas (elaboración basada en los articulos de [Kari McMahon](https://medium.com/@karimcmahon/proto-personas-vs-persona-s-db8873a2d2e4) y [Andrew Jacobs](https://uxdesign.cc/ux-creating-proto-personas-76a1738401a2)) que engloban estos supuestos que se tienen sobre las características del usuario meta, que es lo que esperan poder realizar en la plataforma, que los motiva y cuales se esperan que sean los puntos de dolor a evitar al momento de utilizar la interfaz.

* Proto-persona 1

<img src="https://image.ibb.co/fwFLKd/35534057_1847545481968948_2281224896623149056_n.jpg" width="50%" height="50%" alt="Proto-persona 1">

* Proto-persona 2

<img src="https://image.ibb.co/fhN0Kd/35492766_1847545285302301_6638919026045091840_n.jpg" width="50%" height="50%" alt="Proto-persona 2">

## Sobre la interfaz

### ¿Por qué hacer un Cipher y no usar una de las opciones disponibles en línea?

Para entender cuál va a ser el valor que tiene que aportar el cipher a desarrollar y el porqué no se hace uso de alguno ya existente en Internet se analizaron tres ejemplos disponibles en línea:

| REFERENTE | PROS | CONTRAS |
| --- | --- | --- |
| https://www.dcode.fr/caesar-cipher | Ofrece muchas opciones para el uso de diferentes caracteres  | Tiene demasiada información (texto) que genera ruido y hace difícil entender cómo usar el cipher, además de que el resultado del cifrado/descifrado aparece en un lugar donde no es fácilmente detectable por el usuario y no resalta entre todo el texto. |
| http://crypto.interactive-maths.com/caesar-shift-cipher.html | Una vez detectado el cipher es evidente gracias a los colores y tamaños de letra donde hay que ingresar los datos | Es necesario hacer scroll en la página para encontrar donde se hace el cifrado, además existen elementos innecesarios y mal alineados que distraen la atención del usuario. Existen funciones extras que pueden ocasionar problemas a la hora de cifrar, por último, convierte todo a mayusculas. |
| https://brianur.info/cifrado-caesar/ | Es visualmente atractiva, todos los elementos parecen ordenados, te muestra al momento el texto cifrado y descifrado, y permite hacer uso de caracteres especiales, espacios y mayúsculas/minúsculas. | Al principio puede ser un poco difícil entender cómo opera la página y por dónde empezar a utilizarla.|

### ¿Cuáles son los requerimientos básicos para el desarrollo de la interfaz?

Tomando como base la información recabada en las proto-personas y los puntos débiles de los cipher existentes en línea se plantean los siguientes requerimientos básicos para que el usuario pueda usar exitosamente la interfaz:

#### UI

La interfaz debe:

*	Permitir al usuario ingresar un mensaje
*	Permitir al usuario ingresar la clave (número) para cifrar o descifrar el mensaje
*	Permitir al usuario decidir entre cifrar o descifrar el mensaje que ingreso
*	Mostrar el resultado del cifrado o descifrado del mensaje

#### UX

La interfaz debe:

*	Recordar al usuario porque es necesario cifrar/descifrar los mensajes,
*	Ser muy clara en cuanto a los pasos a seguir para cifrar/descifrar un mensaje.
*	Hacer evidente que se produjo una operación de cifrado/descifrado para que el usuario sepa que tuvo éxito
*	Reducir al mínimo la interferencia de elementos que produzcan ruido como texto  o imágenes innecesarias. 
*	Tomar en consideración un esquema de colores que remita a seguridad, calma y confianza al usuario, a la vez que se debe cuidar el contraste de colores

## Sobre el desarrollo de la aplicación

### ¿Cuáles fueron los pasos que se siguieron para el desarrollo de la aplicación?

Para el programación del Cipher, primero fue necesario determinar cuál sería la *lógica* que seguiría el programa, para ello se desarrolló un *pseudocódigo* que analizará los pasos necesarios a desarrollar para después reflejarlos en un *diagrama de flujo* que permitiera entender cuál era la secuencia de pasos que iba a realizar el usuario y que se esperaba obtener en cada uno de ellos.

Posteriormente, se analizó de qué manera se podían *traducir* esas *acciones* del diagrama de flujo a *código* y se realizó una lista de *temas a estudiar* y otra de *tareas a realizar*, las cuales se iban completando y actualizando para desarrollar el producto final.

De manera paralela, se realizó el *análisis del usuario*, el cual permitió establecer los *requerimientos básicos de la interfaz*, y trazar un plan sobre los elementos gráficos y estructurales necesarios para complementar la lógica y hacer la *experiencia* del usuario al usar el cipher lo más sencilla y agradable posible. 

Igualmente, con todos estos análisis, se fueron realizando varios *bocetos* de como se vería el producto final, los cuales sirvieron como guía a la hora de programar y ordenar los elementos en la interfaz.

Finalmente, el código se fue desarrollando por niveles partiendo de una versión con los elementos y funcionalidades básicas, terminando con una versión que ya incluyera todos los elementos gráficos y puntos de interacción que permitieran al usuario completar las tareas requeridas.

Conforme se iba modificando la interfaz, se hacían pruebas con compañeras para obtener retroalimentación y mejorar la funcionalidad.

### ¿Cómo se organizo el tiempo y la realización de las tareas?

Mediante la elaboración de dos sprint planning con el squad donde se delimito cuál era el producto a entregar, las tareas a realizar para llegar a ese producto y los tiempos estimados para realizar las tareas.

Estos sprint planning se veían reflejados en dos tableros en trello (uno personal y otro grupal) para poder llevar un registro continuo de las tareas realizadas y pendientes. 