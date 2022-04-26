/**
 * ----------------------------------------------
 * Proposta: Interagir módulo externo com interno.
 * Neste exemplo o cenário é o seguinte:
 *      Módulo externo: "minilist", representado pela
 *                      função "args".
 *      Módulo interno: Representado pelo módulo
 *                      'soma.js' e pela função "soma".
 * 
 * Para testar:
 *      node index.js --a=5 --b=10
 * ----------------------------------------------
 */

// Declarando o módulo externo.
const minilist = require("minimist");

// Declarando módulo interno:
const soma = require('./soma.js').soma;

// Usando o módulo externo.
const args = minilist(process.argv.slice(2));
var a = args['a']; // Pegando o primeiro argumento.
var b = args['b']; // Pegando o segundo argumento.
//console.log(a);
//console.log(b);
// Convertendo de string para inteiro...
const x = parseInt(a);
const y = parseInt(b);
console.log('Primeiro argumento = ' + x);
console.log('Segundoo argumento = ' + y);

// Usando o módulo interno (função "soma").
var adicao = soma(x,y);
console.log('A soma dos argumentos é ' + adicao);
