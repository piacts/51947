import { Parser } from "antlr4";
import RegexVisitor from "./generated/RegexVisitor.js";
import RegexParser from "./generated/RegexParser.js";

export class CustomRegexVisitor extends RegexVisitor {

    constructor() {
        super();
    }

    visitRegex(ctx) {
        
        const terms = ctx.term().map(term => this.visit(term));
        return terms.join('|');
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
        return ctx.CHAR(0).getText() + "-" + ctx.CHAR(1).getText();
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
