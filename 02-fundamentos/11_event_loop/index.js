/**
 * Event_loop
 * Objetivo: Demonstrar que o Node.JS executa os
 * códigos de cima para baixo e da esquerda para
 * a direita, conforme a nossa escrita.
 */

console.clear();

function a() {
    console.log("Executando a função 'a()'...");
}

function b() {
    console.log("Executando a função 'b()'...");
}

function c() {
    console.log("Executando a função 'c()'...");
}

function d() {
    console.log("Executando a função 'd()'...");
    a();
    b();
    c();
}

a();
b();
c();
console.log("---------------------");
d();