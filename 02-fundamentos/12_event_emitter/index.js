/**
 * EventEmitter
 * Objetivo: A proposta do EventEmitter é criar eventos
 * customizados.
 * Obs.: Eventos são ações executadas no navegador
 *  Ex.: Click (esse evento é nativo).
 * No exemplo, vamos criar um evento chamado "start".
 * Esse evento apenas mostra uma mensagem.
 */

// Declarando a classe.
const EventEmitter = require('events');
// Instanciando um objeto para usarmos.
const eventEmitter = new EventEmitter();

// Definição do evento "start".
eventEmitter.on('start', () => {
    // Função que o evento vai executar.
    console.log("Executando a função do evento 'start'... 123, testando...");
});

console.log("Antes de executar o evento 'start'.");

// Ativando o evento ("emitindo"...)
eventEmitter.emit('start');

console.log("Depois da execução do evento 'start'.");
