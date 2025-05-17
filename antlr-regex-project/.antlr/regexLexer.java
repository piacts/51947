// Generated from c:/Users/Asus/antlr-regex-project/antlr-regex-project/regex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class regexLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NUMBER=1, COMMA=2, CHAR=3, PIPE=4, DASH=5, CARET=6, STAR=7, PLUS=8, QUESTION=9, 
		LPAREN=10, RPAREN=11, LBRACK=12, RBRACK=13, LBRACE=14, RBRACE=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NUMBER", "COMMA", "CHAR", "PIPE", "DASH", "CARET", "STAR", "PLUS", "QUESTION", 
			"LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "','", null, "'|'", "'-'", "'^'", "'*'", "'+'", "'?'", "'('", 
			"')'", "'['", "']'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NUMBER", "COMMA", "CHAR", "PIPE", "DASH", "CARET", "STAR", "PLUS", 
			"QUESTION", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public regexLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "regex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0010I\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0004\u0000#\b\u0000\u000b\u0000\f\u0000"+
		"$\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0004\u000fD\b\u000f\u000b\u000f\f\u000fE\u0001"+
		"\u000f\u0001\u000f\u0000\u0000\u0010\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001\u0000"+
		"\u0003\u0001\u000009\b\u0000!!#&,,.>@Z__az~~\u0003\u0000\t\n\r\r  J\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0001\"\u0001"+
		"\u0000\u0000\u0000\u0003&\u0001\u0000\u0000\u0000\u0005(\u0001\u0000\u0000"+
		"\u0000\u0007*\u0001\u0000\u0000\u0000\t,\u0001\u0000\u0000\u0000\u000b"+
		".\u0001\u0000\u0000\u0000\r0\u0001\u0000\u0000\u0000\u000f2\u0001\u0000"+
		"\u0000\u0000\u00114\u0001\u0000\u0000\u0000\u00136\u0001\u0000\u0000\u0000"+
		"\u00158\u0001\u0000\u0000\u0000\u0017:\u0001\u0000\u0000\u0000\u0019<"+
		"\u0001\u0000\u0000\u0000\u001b>\u0001\u0000\u0000\u0000\u001d@\u0001\u0000"+
		"\u0000\u0000\u001fC\u0001\u0000\u0000\u0000!#\u0007\u0000\u0000\u0000"+
		"\"!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000"+
		"\u0000$%\u0001\u0000\u0000\u0000%\u0002\u0001\u0000\u0000\u0000&\'\u0005"+
		",\u0000\u0000\'\u0004\u0001\u0000\u0000\u0000()\u0007\u0001\u0000\u0000"+
		")\u0006\u0001\u0000\u0000\u0000*+\u0005|\u0000\u0000+\b\u0001\u0000\u0000"+
		"\u0000,-\u0005-\u0000\u0000-\n\u0001\u0000\u0000\u0000./\u0005^\u0000"+
		"\u0000/\f\u0001\u0000\u0000\u000001\u0005*\u0000\u00001\u000e\u0001\u0000"+
		"\u0000\u000023\u0005+\u0000\u00003\u0010\u0001\u0000\u0000\u000045\u0005"+
		"?\u0000\u00005\u0012\u0001\u0000\u0000\u000067\u0005(\u0000\u00007\u0014"+
		"\u0001\u0000\u0000\u000089\u0005)\u0000\u00009\u0016\u0001\u0000\u0000"+
		"\u0000:;\u0005[\u0000\u0000;\u0018\u0001\u0000\u0000\u0000<=\u0005]\u0000"+
		"\u0000=\u001a\u0001\u0000\u0000\u0000>?\u0005{\u0000\u0000?\u001c\u0001"+
		"\u0000\u0000\u0000@A\u0005}\u0000\u0000A\u001e\u0001\u0000\u0000\u0000"+
		"BD\u0007\u0002\u0000\u0000CB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000"+
		"\u0000EC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FG\u0001\u0000"+
		"\u0000\u0000GH\u0006\u000f\u0000\u0000H \u0001\u0000\u0000\u0000\u0003"+
		"\u0000$E\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}