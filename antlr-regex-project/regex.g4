grammar regex;

regex: term ('|' regex)?;  //Regla de inicio
term: factor+;  //Un término es uno o más factores
factor: base quantifier?;  //Un factor es una base opcionalmente seguido de un cuantificador
base: CHAR | group | class_;  //Una base puede ser un carácter, un grupo o una clase
group: '(' regex ')';  
class_: '[' ('^')? classElem+ ']';  //Clase de caracteres, que puede iniciar con un (^)
classElem: range | CHAR;  //Los elementos de una clase pueden ser un rango o caracteres
range: CHAR '-' CHAR | NUMBER '-' NUMBER;  //Un rango es un par de caracteres separados por un guion
quantifier: '*' | '+' | '?' | '{' NUMBER (COMMA NUMBER?)? '}';

//tokens
NUMBER: [0-9]+;
COMMA: ','; 
CHAR: [a-zA-Z0-9_~@#$%&=<>!;:,./];  //Caracteres válidos

PIPE: '|';
DASH: '-';
CARET: '^';
STAR: '*';
PLUS: '+';
QUESTION: '?';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';

WS: [ \t\r\n]+ -> skip; 

