# README

Este es un archivo README para el repositorio. A continuación se describe el propósito del proyecto, cómo instalarlo y cómo utilizarlo.

# Descripción
Este proyecto permite analizar expresiones regulares simples utilizando ANTLR4 y JavaScript, por medio de una gramática personalizada que reconoce expresiones como:

- `a|b`
- `ab*c`
- `(a|b)+`

# Requisitos Previos
1. *Node.js*: Asegurate de tener Node.js instalado en tu sistema.
2. *ANTLR4*: Debés tener ANTLR4 instalado y correctamente configurado.
3. *Visual Studio Code (opcional)*: Se recomienda para editar y ejecutar el código de forma cómoda.

# Instalación
Clona este repositorio: git clone https://github.com/piacts/51947

# Ejecución 
1. **Archivo de Entrada**: Escribí una expresión regular válida o inválida dentro del archivo `input.txt`.
Por ejemplo: (a|b|c)*d+(ef|gh)?i{2,4} (válida) o [a-z-0-9] (inválida)
2. **Ejecutar la Aplicación**: Corré el programa utilizando Node.js con el siguiente comando: node index
Para que se genere y visualice el árbol de derivación, es necesario iniciar el modo de depuración. Esto puede hacerse presionando F5 o manualmente desde Visual Studio Code, haciendo clic en el botón "Depurar".
3. **Ejemplo de salida**: El programa mostrará:

- Una tabla con los tokens y lexemas generados por el lexer.
- Una verificación de si la expresión es válida según la gramática.
- Un árbol de derivación que representa la estructura sintáctica de la expresión.

**En el caso de un input correcto**:

*Tabla de tokens y lexemas:*

<img width="298" alt="image" src="https://github.com/user-attachments/assets/667457a2-703b-4475-a693-0b355536e918" />

*Árbol de derivación:*

<img width="637" alt="image" src="https://github.com/user-attachments/assets/baa9ac52-6c1f-4613-ac0a-38210a8d9cd8" />

## &nbsp;
**En el caso de un input incorrecto**:

*Tabla de tokens y lexemas:*

<img width="365" alt="image" src="https://github.com/user-attachments/assets/661aae22-9063-4928-8c02-6c0e25fc530e" />

*Árbol de derivación:*

<img width="478" alt="image" src="https://github.com/user-attachments/assets/dd2f3185-c1f2-41a5-a79f-f284cd31da14" />

## &nbsp;
4. **Archivos de Ejemplo**:

Para probar el programa, se pueden utilizar los ejemplos que se encuentran en los archivos de texto:
- `input_correcto_1.txt`
- `input_correcto_2.txt`
- `input_incorrecto_1.txt`
- `input_incorrecto_2.txt`

Estos archivos contienen expresiones regulares válidas e inválidas respectivamente, y sirven para verificar el funcionamiento del analizador. Solo copiá el contenido de uno de ellos en input.txt antes de ejecutar el programa.

# Notas Adicionales
1. Si el archivo `input.txt` no existe o está vacío, el programa solicitará la expresión regular desde teclado.
2. La gramática acepta:
- Caracteres alfanuméricos y algunos símbolos (`_~@#$%&=<>!;:,./`)
- Operadores estándar de expresiones regulares: `*`, `+`, `?`, `{n}`, `i{n,m}`, `|`
- Agrupamientos con paréntesis: `( )`
- Clases de caracteres: `[a-z]`, `[0-9]`
3. No se permite el uso de secuencias de escape como `\d`, `\w`, etc., en esta versión básica.
