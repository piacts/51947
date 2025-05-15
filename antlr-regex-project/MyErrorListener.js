
// MyErrorListener.js
import antlr4 from "antlr4";

class MyErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.huboErrores = false;
        this.listaErrores = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        this.huboErrores = true;
        const error = `Línea ${line}, columna ${column}: ${msg}`;
        this.listaErrores.push(error);
        
    }
}

export default MyErrorListener;
