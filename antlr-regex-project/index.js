import regexLexer from "./generated/regexLexer.js";
import regexParser from "./generated/regexParser.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';
import MyErrorListener from "./MyErrorListener.js";  

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new regexLexer(inputStream);

    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = regexLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Vuelvo a procesar la entrada 
    inputStream = CharStreams.fromString(input);
    lexer = new regexLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new regexParser(tokenStream);

    // Agrego el listener personalizado 
    const errorListener = new MyErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    let tree = parser.regex();

    // Uso la bandera y la lista de errores de MyErrorListener
    if (errorListener.huboErrores) {
        console.error("\nSe encontraron errores de sintaxis:");
        for (const err of errorListener.listaErrores) {
            console.error("  " + err);
        }
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);
    }
}

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
