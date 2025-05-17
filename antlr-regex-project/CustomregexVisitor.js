import { Parser } from "antlr4";
import regexVisitor from "./generated/regexVisitor.js";
import regexParser from "./generated/regexParser.js";

// Importar la gramática generada por ANTLR
export class CustomregexVisitor extends regexVisitor {
    constructor() {
        super();
    }

    visitRegex(ctx) {
        const termResult = this.visit(ctx.term());
    if (ctx.regex()) {  // Si hay parte derecha después del '|'
        return termResult + '|' + this.visit(ctx.regex());
    }
    return termResult;

    }

    visitTerm(ctx) {
        let result = "";
        for (let i = 0; i < ctx.factor().length; i++) {
            result += this.visit(ctx.factor(i));
        }
        return result;
    }

    visitFactor(ctx) {
        const base = this.visit(ctx.base());
        if (ctx.quantifier()) {
            const quantifier = this.visit(ctx.quantifier());
            return base + quantifier;
        }
        return base;
    }

    visitBase(ctx) {
        if (ctx.CHAR()) {
            return ctx.CHAR().getText();
        } else if (ctx.group()) {
            return this.visit(ctx.group());
        } else if (ctx.class_()) {
            return this.visit(ctx.class_());
        }
        return "";
    }

    visitGroup(ctx) {
        return "(" + this.visit(ctx.regex()) + ")";
    }

    visitClass_(ctx) {
        let result = "[";
        if (ctx.CARET()) {
            result += "^";
        }
        for (let i = 0; i < ctx.classElem().length; i++) {
            result += this.visit(ctx.classElem(i));
        }
        result += "]";
        return result;
    }

    visitClassElem(ctx) {
        if (ctx.range()) {
            return this.visit(ctx.range());
        } else if (ctx.CHAR()) {
            return ctx.CHAR().getText();
        }
        return "";
    }

    visitRange(ctx) {
    if (ctx.CHAR(0) && ctx.CHAR(1)) {
        return ctx.CHAR(0).getText() + "-" + ctx.CHAR(1).getText();
    } else if (ctx.NUMBER(0) && ctx.NUMBER(1)) {
        return ctx.NUMBER(0).getText() + "-" + ctx.NUMBER(1).getText();
    }
    return ""; // Por si acaso
}


    visitQuantifier(ctx) {
        if (ctx.STAR()) {
            return "*";
        } else if (ctx.PLUS()) {
            return "+";
        } else if (ctx.QUESTION()) {
            return "?";
        } else if (ctx.LBRACE()) {
            const min = ctx.NUMBER(0).getText();
            if (ctx.COMMA()) {
                if (ctx.NUMBER(1)) {
                    const max = ctx.NUMBER(1).getText();
                    return `{${min},${max}}`;
                } else {
                    return `{${min},}`;
                }
            } else {
                return `{${min}}`;
            }
        }
        return "";
    }
    
}
export default CustomregexVisitor;