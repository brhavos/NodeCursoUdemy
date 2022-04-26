// CRIANDO AS FUNÇÕES:
export function foo() { console.log('foo') };
export function bar() { console.log('bar') };
export function soma(a,b) {console.log(a+b)};
export function subtrai(a,b) {console.log(a-b)};
export function multiplica(a,b) {console.log(a*b)};
export function divide(a,b) {console.log(a/b)};

// EXPORTANDO AS FUNÇÕES:
export default {foo, bar, soma, subtrai, multiplica, divide};