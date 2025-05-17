// Generated from c:/Users/Asus/antlr-regex-project/antlr-regex-project/regex.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import regexListener from './regexListener.js';
import regexVisitor from './regexVisitor.js';

const serializedATN = [4,1,16,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,3,0,22,8,0,1,1,4,1,25,8,1,11,
1,12,1,26,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,3,3,36,8,3,1,4,1,4,1,4,1,4,1,5,
1,5,3,5,44,8,5,1,5,4,5,47,8,5,11,5,12,5,48,1,5,1,5,1,6,1,6,3,6,55,8,6,1,
7,1,7,1,7,1,7,1,7,1,7,3,7,63,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,72,8,8,
3,8,74,8,8,1,8,3,8,77,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,83,0,18,1,
0,0,0,2,24,1,0,0,0,4,28,1,0,0,0,6,35,1,0,0,0,8,37,1,0,0,0,10,41,1,0,0,0,
12,54,1,0,0,0,14,62,1,0,0,0,16,76,1,0,0,0,18,21,3,2,1,0,19,20,5,4,0,0,20,
22,3,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,25,3,4,2,0,24,23,
1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,3,1,0,0,0,28,30,3,6,
3,0,29,31,3,16,8,0,30,29,1,0,0,0,30,31,1,0,0,0,31,5,1,0,0,0,32,36,5,3,0,
0,33,36,3,8,4,0,34,36,3,10,5,0,35,32,1,0,0,0,35,33,1,0,0,0,35,34,1,0,0,0,
36,7,1,0,0,0,37,38,5,10,0,0,38,39,3,0,0,0,39,40,5,11,0,0,40,9,1,0,0,0,41,
43,5,12,0,0,42,44,5,6,0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,47,
3,12,6,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,
0,0,0,50,51,5,13,0,0,51,11,1,0,0,0,52,55,3,14,7,0,53,55,5,3,0,0,54,52,1,
0,0,0,54,53,1,0,0,0,55,13,1,0,0,0,56,57,5,3,0,0,57,58,5,5,0,0,58,63,5,3,
0,0,59,60,5,1,0,0,60,61,5,5,0,0,61,63,5,1,0,0,62,56,1,0,0,0,62,59,1,0,0,
0,63,15,1,0,0,0,64,77,5,7,0,0,65,77,5,8,0,0,66,77,5,9,0,0,67,68,5,14,0,0,
68,73,5,1,0,0,69,71,5,2,0,0,70,72,5,1,0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,
74,1,0,0,0,73,69,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,77,5,15,0,0,76,64,
1,0,0,0,76,65,1,0,0,0,76,66,1,0,0,0,76,67,1,0,0,0,77,17,1,0,0,0,11,21,26,
30,35,43,48,54,62,71,73,76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class regexParser extends antlr4.Parser {

    static grammarFileName = "regex.g4";
    static literalNames = [ null, null, "','", null, "'|'", "'-'", "'^'", 
                            "'*'", "'+'", "'?'", "'('", "')'", "'['", "']'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, "NUMBER", "COMMA", "CHAR", "PIPE", "DASH", 
                             "CARET", "STAR", "PLUS", "QUESTION", "LPAREN", 
                             "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", 
                             "WS" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "class_", 
                         "classElem", "range", "quantifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = regexParser.ruleNames;
        this.literalNames = regexParser.literalNames;
        this.symbolicNames = regexParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, regexParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.term();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 19;
	            this.match(regexParser.PIPE);
	            this.state = 20;
	            this.regex();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, regexParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 23;
	            this.factor();
	            this.state = 26; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5128) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, regexParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.base();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 17280) !== 0)) {
	            this.state = 29;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, regexParser.RULE_base);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.match(regexParser.CHAR);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.group();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.class_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, regexParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(regexParser.LPAREN);
	        this.state = 38;
	        this.regex();
	        this.state = 39;
	        this.match(regexParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new Class_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, regexParser.RULE_class_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(regexParser.LBRACK);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 42;
	            this.match(regexParser.CARET);
	        }

	        this.state = 46; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            this.classElem();
	            this.state = 48; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===3);
	        this.state = 50;
	        this.match(regexParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classElem() {
	    let localctx = new ClassElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, regexParser.RULE_classElem);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.range();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.match(regexParser.CHAR);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, regexParser.RULE_range);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.match(regexParser.CHAR);
	            this.state = 57;
	            this.match(regexParser.DASH);
	            this.state = 58;
	            this.match(regexParser.CHAR);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(regexParser.NUMBER);
	            this.state = 60;
	            this.match(regexParser.DASH);
	            this.state = 61;
	            this.match(regexParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, regexParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(regexParser.STAR);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(regexParser.PLUS);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(regexParser.QUESTION);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 67;
	            this.match(regexParser.LBRACE);
	            this.state = 68;
	            this.match(regexParser.NUMBER);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 69;
	                this.match(regexParser.COMMA);
	                this.state = 71;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===1) {
	                    this.state = 70;
	                    this.match(regexParser.NUMBER);
	                }

	            }

	            this.state = 75;
	            this.match(regexParser.RBRACE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

regexParser.EOF = antlr4.Token.EOF;
regexParser.NUMBER = 1;
regexParser.COMMA = 2;
regexParser.CHAR = 3;
regexParser.PIPE = 4;
regexParser.DASH = 5;
regexParser.CARET = 6;
regexParser.STAR = 7;
regexParser.PLUS = 8;
regexParser.QUESTION = 9;
regexParser.LPAREN = 10;
regexParser.RPAREN = 11;
regexParser.LBRACK = 12;
regexParser.RBRACK = 13;
regexParser.LBRACE = 14;
regexParser.RBRACE = 15;
regexParser.WS = 16;

regexParser.RULE_regex = 0;
regexParser.RULE_term = 1;
regexParser.RULE_factor = 2;
regexParser.RULE_base = 3;
regexParser.RULE_group = 4;
regexParser.RULE_class_ = 5;
regexParser.RULE_classElem = 6;
regexParser.RULE_range = 7;
regexParser.RULE_quantifier = 8;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_regex;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	PIPE() {
	    return this.getToken(regexParser.PIPE, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_base;
    }

	CHAR() {
	    return this.getToken(regexParser.CHAR, 0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	class_() {
	    return this.getTypedRuleContext(Class_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_group;
    }

	LPAREN() {
	    return this.getToken(regexParser.LPAREN, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	RPAREN() {
	    return this.getToken(regexParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Class_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_class_;
    }

	LBRACK() {
	    return this.getToken(regexParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(regexParser.RBRACK, 0);
	};

	CARET() {
	    return this.getToken(regexParser.CARET, 0);
	};

	classElem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassElemContext);
	    } else {
	        return this.getTypedRuleContext(ClassElemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterClass_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitClass_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitClass_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_classElem;
    }

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	CHAR() {
	    return this.getToken(regexParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterClassElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitClassElem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitClassElem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_range;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(regexParser.CHAR);
	    } else {
	        return this.getToken(regexParser.CHAR, i);
	    }
	};


	DASH() {
	    return this.getToken(regexParser.DASH, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(regexParser.NUMBER);
	    } else {
	        return this.getToken(regexParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = regexParser.RULE_quantifier;
    }

	STAR() {
	    return this.getToken(regexParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(regexParser.PLUS, 0);
	};

	QUESTION() {
	    return this.getToken(regexParser.QUESTION, 0);
	};

	LBRACE() {
	    return this.getToken(regexParser.LBRACE, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(regexParser.NUMBER);
	    } else {
	        return this.getToken(regexParser.NUMBER, i);
	    }
	};


	RBRACE() {
	    return this.getToken(regexParser.RBRACE, 0);
	};

	COMMA() {
	    return this.getToken(regexParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof regexListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof regexVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




regexParser.RegexContext = RegexContext; 
regexParser.TermContext = TermContext; 
regexParser.FactorContext = FactorContext; 
regexParser.BaseContext = BaseContext; 
regexParser.GroupContext = GroupContext; 
regexParser.Class_Context = Class_Context; 
regexParser.ClassElemContext = ClassElemContext; 
regexParser.RangeContext = RangeContext; 
regexParser.QuantifierContext = QuantifierContext; 
