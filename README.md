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
3. *Java (JDK)*: Es necesario tener Java (JDK) instalado en su computadora.
4. *GIT*: Requiere tener instalado Git para poder clonar el repositorio.
5. *Visual Studio Code*: Se recomienda para editar y ejecutar el código de forma cómoda.

# Instalación
Clone este repositorio utilizando el siguiente comando desde una terminal compatible con Git: git clone https://github.com/piacts/51947.git

# Consideración importante al abrir el proyecto
Al descargar o clonar este repositorio, se generará una carpeta principal llamada `51947`. No se recomienda abrir directamente esta carpeta en Visual Studio Code, ya que no contiene los archivos fuente del proyecto en su raíz.

En su lugar, se debe acceder a la carpeta `51947` y luego seleccionar la subcarpeta `antlr-regex-project`, que es donde se encuentra el proyecto propiamente dicho.

# Ejecución 
1. **Archivo de Entrada**: Escribí una expresión regular válida o inválida dentro del archivo `input.txt`.
Ejemplos:  
- `(a|b)c*` (válida)  
- `[a-z-0-9]` (inválida)

2. **Ejecutar la Aplicación**: Es aconsejable esperar unos segundos para que el programa se inicialice. Luego, ejecuta el programa utilizando Node.js con el siguiente comando: `node index`. Para que se genere y visualice el árbol de derivación, es necesario iniciar el modo de depuración. Esto puede hacerse presionando F5 o manualmente desde Visual Studio Code, haciendo clic en el botón "Depurar". Es recomendable seleccionar el archivo con la gramática (`regex.g4`) primero.

3. **Ejemplo de salida**: El programa mostrará:

- Una tabla con los tokens y lexemas generados por el lexer.
- Una verificación de si la expresión es válida según la gramática.
- Un árbol de derivación que representa la estructura sintáctica de la expresión.

## &nbsp;
**`✓` En el caso de un input correcto**:

*Tabla de tokens y lexemas:*

<img width="718" alt="image" src="https://github.com/user-attachments/assets/e37f3804-7170-45aa-90d7-9805a2432fd3" />


*Árbol de derivación:*

<img width="553" alt="image" src="https://github.com/user-attachments/assets/a7e9fc00-5cd5-43c4-a745-ce0fe4dfb820" />


## &nbsp;
**`✗` En el caso de un input incorrecto**:

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

# Acerca de la Gramática
En el archivo titulado "Gramática" se encuentra tanto la gramática original en EBNF (al final del archivo) como su correspondiente traducción al formato compatible con ANTLR. Durante este proceso de adaptación, se realizaron los siguientes ajustes:

- **Definición de CHAR:** En lugar de usar una negación general para excluir metacaracteres (como permite EBNF), se definió explícitamente un conjunto de caracteres válidos en el token CHAR, incluyendo letras, dígitos y símbolos seleccionados: [a-zA-Z0-9_~@?#%&=<>!;,/].
- **Separación de tokens especiales:** Los símbolos utilizados como operadores o delimitadores en la gramática (por ejemplo, '|', '-', '^', '*') se definieron como tokens independientes para facilitar el análisis y evitar ambigüedades.
- **Prioridad del token COMMA:** Se declaró el token COMMA antes de CHAR, ya que el carácter coma también es parte del conjunto definido en CHAR. Esto evita conflictos en el análisis léxico y garantiza que , sea reconocido correctamente como separador dentro de las cuantificaciones.
- **Uso de class_ en lugar de class:** Debido a que class es una palabra reservada en algunos lenguajes (incluido Java), se utilizó el nombre class_ para evitar conflictos en el código generado.
- **Reescritura de operadores opcionales y repetitivos:** En ANTLR, los operadores de EBNF como [] (opcional) y {} (repetición) se tradujeron a ? y +, respectivamente, respetando la sintaxis propia del parser.
- **Eliminación de ambigüedad en range:** Se permitió definir rangos tanto con caracteres (CHAR '-' CHAR) como con números (NUMBER '-' NUMBER) para mayor flexibilidad.

Estos cambios aseguran que la gramática sea interpretada correctamente por ANTLR y que el lexer pueda identificar los tokens de forma precisa.

# Notas Adicionales
1. Si el archivo `input.txt` no existe o está vacío, el programa solicitará la expresión regular desde teclado.
2. Bibliografía importante: [Guía de Estudio Construcción de Analizador con ANTLR4 + JavaScript.pdf](https://github.com/user-attachments/files/20275587/Guia.de.Estudio.Construccion.de.Analizador.con.ANTLR4.%2B.JavaScript.pdf)
3. Caracteres válidos: letras (a–z, A–Z), dígitos (0–9) y los siguientes símbolos: _ ~ @ ? # % & = < > ! ; , /
4. Si desea probar el análisis léxico, puede ingresar un carácter inválido, como por ejemplo el símbolo "$".
5. No se permite el uso de secuencias de escape como `\d`, `\w`, etc., en esta versión básica.

# Autor
**Nombre y Apellido:** Pía Cortes

**Legajo:** 51947

**Año:** 2025
