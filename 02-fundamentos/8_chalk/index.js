/**
 * ---------------------------------------------------
 * UTILIZANDO O CHALK
 *  PERMITE ESTILIZAR AS MENSAGENS
 * ---------------------------------------------------
 * OBS.: INSTALAR A VERSÃO 4. SE USAR A 5 VAI TER
 *       PROBLEMAS.
 *       PARA INSTALAR A VERSÃO-4:
 *          npm uninstall chalk
 *          OU deleta a pasta node_modules
 *          npm install chalk@2.4.1
 * ---------------------------------------------------
 */

console.clear;

// Incluindo o chalk no projeto.
const chalk = require("chalk");
console.log(chalk);

var texto1 = 'Texto 1...';
var texto2 = 'Texto 2...';
var texto3 = 'Texto 3...';
var texto4 = 'Texto 4...';

// Alguns exemplos:

// Mudando a cor da fonte para verde:
console.log(texto1);
console.log(chalk.green(texto1));

// Mudando a cor da fonte para verde e negrito:
console.log(texto2);
console.log(chalk.green.bold(texto2));

// Mudando a cor da fonte para branco, negrito e
// com fundo vermelho:
console.log(texto3);
console.log(chalk.white.bold.bgRed(texto3));

// Fonte: azul e negrito;
// Fundo: branco.
console.log(texto4);
console.log(chalk.blue.bold.bgWhite(texto4));
