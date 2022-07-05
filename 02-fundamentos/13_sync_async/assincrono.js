/**
 * Este exemplo mostra como usar PROCESSAMENTO
 * ASSÍNCRONO, ou seja, um comando posterior
 * é executado antes do término do comando anterior.
 * 
 * Neste exemplo o programa vai terminar e o arquivo
 * poderá estar sendo escrito.
 * 
 * Obs.: Para executar esse teste certifique-se que
 * NÃO existe o arquivo "arquivo.txt". Se existir,
 * pode apagar antes deexecutar esse programa.
 */


// Lib para criar arquivos.
const fs = require("fs");

console.log("Início da gravação...");

// Criando o arquivo 'arquivo.txt' depois de 5 segundos.
fs.writeFile('arquivo.txt','olá!!', function (err) {
    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 5000);
});

console.log("Fim");
