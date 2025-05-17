# README

Este es un archivo README para el repositorio. A continuación, se describe el propósito del proyecto, cómo instalarlo y cómo utilizarlo.

# Descripción
Este proyecto permite analizar expresiones regulares simples utilizando ANTLR4 y JavaScript, por medio de una gramática personalizada que reconoce expresiones como:

- `a|b`
- `ab*c`
- `(a|b)+`

# Requisitos Previos
1. *Node.js*: Asegúrate de tener Node.js instalado en tu sistema.
2. *ANTLR4*: Debes tener ANTLR4 instalado y correctamente configurado.
3. *Visual Studio Code (opcional)*: Se recomienda para editar y ejecutar el código de forma cómoda.

# Instalación
Clona este repositorio: git clone https://github.com/piacts/51947.git

# Consideración importante al abrir el proyecto
Al descargar o clonar este repositorio, se generará una carpeta principal llamada `51947`. No se recomienda abrir directamente esta carpeta en Visual Studio Code, ya que no contiene los archivos fuente del proyecto en su raíz.

En su lugar, se debe acceder a la carpeta `51947` y luego seleccionar la subcarpeta `antlr-regex-project`, que es donde se encuentra el proyecto propiamente dicho.

# Ejecución 
1. **Archivo de Entrada**: Escribí una expresión regular válida o inválida dentro del archivo `input.txt`.
Ejemplos:  
- `(a|b)c*` (válida)  
- `[a-z-0-9]` (inválida)

2. **Ejecutar la Aplicación**: Es aconsejable esperar unos segundos para que el programa se inicialice. Luego, ejecuta el programa utilizando Node.js con el siguiente comando: `node index`. Para que se genere y visualice el árbol de derivación, es necesario iniciar el modo de depuración. Esto puede hacerse presionando F5 o manualmente desde Visual Studio Code, haciendo clic en el botón "Depurar". Es recomendable seleccionar el archivo con la gramática primero.

3. **Ejemplo de salida**: El programa mostrará:

- Una tabla con los tokens y lexemas generados por el lexer.
- Una verificación de si la expresión es válida según la gramática.
- Un árbol de derivación que representa la estructura sintáctica de la expresión.

## &nbsp;
**✓ > En el caso de un input correcto**:

*Tabla de tokens y lexemas:*

<img width="718" alt="image" src="https://github.com/user-attachments/assets/e37f3804-7170-45aa-90d7-9805a2432fd3" />


*Árbol de derivación:*

<img width="553" alt="image" src="https://github.com/user-attachments/assets/a7e9fc00-5cd5-43c4-a745-ce0fe4dfb820" />


## &nbsp;
**✗ > En el caso de un input incorrecto**:

*Tabla de tokens y lexemas:*

<img width="412" alt="image" src="https://github.com/user-attachments/assets/2037dafe-03bd-4b1a-af3d-7e78c54016fd" />


*Árbol de derivación:*

<img width="515" alt="image" src="https://github.com/user-attachments/assets/cd41f012-41ab-44ec-bf94-95aa386dc37a" />


## &nbsp;
4. **Archivos de Ejemplo**:

Para probar el programa, se pueden utilizar los ejemplos que se encuentran en los archivos de texto:
- `input_correcto_1.txt`
- `input_correcto_2.txt`
- `input_incorrecto_1.txt`
- `input_incorrecto_2.txt`

Estos archivos contienen expresiones regulares válidas e inválidas respectivamente, y sirven para verificar el funcionamiento del analizador. Se debe copiar el contenido de uno de ellos en `input.txt` antes de ejecutar el programa.

# Notas Adicionales
1. Si el archivo `input.txt` no existe o está vacío, el programa solicitará la expresión regular desde teclado.
3. No se permite el uso de secuencias de escape como `\d`, `\w`, etc., en esta versión básica.

