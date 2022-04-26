/**
 * Core Modulo
 * Permite usar uma função de um módulo do core do
 * JavaScript.
 * -
 * No exemplo vamos usar a função "extname", contida
 * no core modulo chamadoi "path".
 * Essa função retorna a extensão de um arquivo.
 */

// Requerendo a utilização do módulo "path".
const path = require('path');

// Extraindo a extenção de um arquivo e armazenando
// numa variável.

var minha_extensao = path.extname('arquivo.php');
console.log(minha_extensao);

var minha_extensao = path.extname('arquivo.pdf');
console.log(minha_extensao);

var minha_extensao = path.extname('arquivo.txt');
console.log(minha_extensao);

// ----------------------------------------------