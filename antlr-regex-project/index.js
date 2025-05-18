import regexLexer from "./generated/regexLexer.js";
import regexParser from "./generated/regexParser.js";
import CustomregexVisitor from "./CustomregexVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';
import MyErrorListener from "./MyErrorListener.js";  

async function main() {
    let input;
    // Intento leer el archivo de entrada
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no se puede leer el archivo, pido la entrada por consola
        input = await leerCadena();
        console.log(input);
    }
    // Verifico si la entrada está vacía
    let inputStream = CharStreams.fromString(input);
    let lexer = new regexLexer(inputStream);

    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Se debe verificar la entrada y la gramática.");
        return;
    }

// Mostrar la tabla de tokens y lexemas
    console.log("\n> A continuación se muestra la tabla de Tokens y Lexemas:");
    console.log("..................................................");
    console.log("┃ LEXEMA         ┃ TOKEN                         ┃");
    console.log("..................................................");

    for (let token of tokens) {
        const tokenType = regexLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`┃ ${lexema.padEnd(14)} ┃ ${tokenType.padEnd(30)}┃`);
    }
    console.log("..................................................");

    // Vuelvo a procesar la entrada 
    inputStream = CharStreams.fromString(input);
    lexer = new regexLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new regexParser(tokenStream);

    // Agrego el listener personalizado MyErrorListener
    const errorListener = new MyErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    let tree = parser.regex();

    // Uso MyErrorListener
    if (errorListener.huboErrores) {
        console.error("\n✘ > Entrada inválida: se han encontrado errores de sintaxis.");
        console.log("══════════════════════════════════════════════════════════════")
        for (const err of errorListener.listaErrores) {
            console.log (`Errores detectados:`);
            console.error(`>`+ "  " + err);
        }
    } else {
        console.log("\n✔ > Entrada válida: análisis exitoso.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log("═══════════════════════════════════════")
        console.log(`Árbol de derivación:`);
        console.log(`${cadena_tree}`)

        // Utilizar un visitor para visitar los nodos que me interesan del árbol 

        const visitor = new CustomregexVisitor();
        const result = visitor.visit(tree);
        console.log("\n> Expresión reconstruida:", result);
        try {
            console.log("> Representación en JavaScript como objeto RegExp:")
            const regexJs = new RegExp(result); 
            console.log("const regex =", regexJs +";");
        } catch (e) {
            console.error("✘ > No se pudo crear un RegExp en JavaScript:", e.message);
}

    }
}

    // Función para leer una cadena desde la consola
function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
