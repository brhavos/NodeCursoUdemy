// IMPORTANDO AS FUNÇÕES DO ARQUIVO DE FUNÇÕES:
import {adicao, subtracao, multiplicacao, divisao} from "./meu_modulo.mjs";

// UTILIZANDO AS FUNÇÕES:

var x = 10; // Primeiro número.
var y = 2;  // Segundo número.

var r1 = adicao(x,y);
var r2 = subtracao(x,y);
var r3 = multiplicacao(x,y);
var r4 = divisao(x,y);

// Exibições:

console.log("Soma.........: " + x + " + " + y + " = " + r1);
console.log("Subtração....: " + x + " - " + y + " = " + r2);
console.log("Multiplicação: " + x + " * " + y + " = " + r3);
console.log("Divisão......: " + x + " / " + y + " = " + r4);