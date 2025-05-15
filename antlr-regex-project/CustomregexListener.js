import regexListener from "./generated/regexListener.js";

export class CustomRegexListener extends regexListener {

    enterRegex(ctx) {
        console.log("Entrando a una expresión regex completa");
    }

    enterTerm(ctx) {
        console.log("Entrando a un término");
    }

    enterFactor(ctx) {
        console.log("Entrando a un factor");
    }

    enterBase(ctx) {
        console.log("Entrando a una base");
    }

    enterGroup(ctx) {
        console.log("Entrando a un grupo ( )");
    }

    enterClass_(ctx) {
        console.log("Entrando a una clase de caracteres [ ]");
    }

    enterRange(ctx) {
        const from = ctx.CHAR(0).getText();
        const to = ctx.CHAR(1).getText();
        console.log(`Entrando a un rango: ${from}-${to}`);
    }

    enterQuantifier(ctx) {
        console.log("Entrando a un cuantificador");
    }
}
