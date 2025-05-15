// Generated from regex.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link regexParser}.
 */
public interface regexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link regexParser#regex}.
	 * @param ctx the parse tree
	 */
	void enterRegex(regexParser.RegexContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#regex}.
	 * @param ctx the parse tree
	 */
	void exitRegex(regexParser.RegexContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(regexParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(regexParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(regexParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(regexParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterBase(regexParser.BaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitBase(regexParser.BaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#group}.
	 * @param ctx the parse tree
	 */
	void enterGroup(regexParser.GroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#group}.
	 * @param ctx the parse tree
	 */
	void exitGroup(regexParser.GroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#class_}.
	 * @param ctx the parse tree
	 */
	void enterClass_(regexParser.Class_Context ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#class_}.
	 * @param ctx the parse tree
	 */
	void exitClass_(regexParser.Class_Context ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#classElem}.
	 * @param ctx the parse tree
	 */
	void enterClassElem(regexParser.ClassElemContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#classElem}.
	 * @param ctx the parse tree
	 */
	void exitClassElem(regexParser.ClassElemContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#range}.
	 * @param ctx the parse tree
	 */
	void enterRange(regexParser.RangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#range}.
	 * @param ctx the parse tree
	 */
	void exitRange(regexParser.RangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link regexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void enterQuantifier(regexParser.QuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link regexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void exitQuantifier(regexParser.QuantifierContext ctx);
}