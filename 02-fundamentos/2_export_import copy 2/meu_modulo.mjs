// FUNÇÕES DESTE MÓDULO:

// FUNÇÃO SOMA:
function adicao(a, b) {
    let resultado = (a+b);
    return resultado;
};

// FUNÇÃO SUBTRAI:
function subtracao(a,b) {
    let resultado = (a-b);
    return resultado;
};

// FUNÇÃO MULTIPLICAÇÃO:
function multiplicacao(a,b) {
    let resultado = (a*b);
    return resultado;
};

// FUNÇÃO DIVISÃO:
function divisao(a,b) {
    let resultado = (a/b);
    return resultado;
};

// TORNANDO AS FUNÇÕES DESTE MÓDULO EXPORTÁVEIS:
// PORTANTO, REUTILIZÁVEIS EM QUALQUER PROGRAMA.
export {adicao, subtracao, multiplicacao, divisao};