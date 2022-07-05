/**
 * Este exemplo mostra como usar PROCESSAMENTO
 * SÍNCRONO, ou seja, um comando é executado após
 * o término do comando anterior.
 */


// Lib para criar arquivos.
const fs = require("fs");

console.log("Início da gravação...");

// Criando o arquivo 'arquivo.txt';
// cujo conteúdo é: "oi - escrevi no arquivo."
fs.writeFileSync('arquivo.txt','oi - escrevi no arquivo - teste 123.');

console.log("Fim da gravação.");
