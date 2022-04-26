/*
MODULES: Bloco de códigos reaproveitáveis, ou seja, arquivos de rotinas
         que podem ser utilizados ao longo da aplicação.
Módulo interno: Contém as 4 operações básicas - adição, subtração,
multiplicação e divisão.
*/

module.exports = {
    // Função "soma": Faz a soma de 2 números.
    soma(a, b) {
        console.log(a + b);
    },

    subtrai(a, b) {
        console.log(a - b);
    },

    multiplica(a, b) {
        console.log(a * b);
    },

    divide(a, b) {
        console.log(a / b);
    },
};

