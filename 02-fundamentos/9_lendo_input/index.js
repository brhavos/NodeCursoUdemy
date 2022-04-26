/**
 * Capturando dados do console.
 * 
 * readline
 * 
 */

// Configurações para receber/enviar dados:
const readline = require('readline').createInterface({
    input: process.stdin,   // Entrada.
    output: process.stdout, // Saída.
});

readline.question('Informe a cidade: ', (meu_input) => {
    console.log(`A cidade informada foi: ${meu_input}`);
    readline.close();
});
