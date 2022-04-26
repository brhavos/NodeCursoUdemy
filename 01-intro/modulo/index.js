/**
 * Importação de módulo
 */

// Vamos importar o módulo "FS" - File System.
// Esse módulo permite ler um arquivo. No caso vai ler o arquivo "teste.txt", 
// através do método "readFile" e mostrá-lo no terminal.

/*
Conteúdo do arquivo que será lido (teste.txt):

Oĺa!
Este é o arquivo "teste.txt".
Ele será lido pelo Node.JS, através da importação do módulo "file system",
conforme codificação do arquivo "index.js".
- - - - -
*/

const fs = require("fs");

fs.readFile("teste.txt", "utf-8", (err, data) => {

    // Verificando se deu erro. Se sim, mostra o erro e encerra o processamento.
    if (err) {
        console.log(err);
        return; // Finaliza o processamento.
    }

    // Exibição do arquivo no console.
    console.log(data);

});
