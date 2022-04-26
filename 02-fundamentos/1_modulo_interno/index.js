// Importando o arquivo de rotinas com a função 'soma':
const { subtrai, multiplica, divide } = require('./meu_modulo');
const meuModulo = require('./meu_modulo');
// Opcionalmente pod ecolocar a extenção: 
//const meuModulo = require('./meu_modulo.js');

// Disponibilizando a função 'soma' para uso:
const soma = meuModulo.soma;

// Usando a função:
soma(2,3);
soma(10,34);
subtrai(10,1);
multiplica(7,9);
divide(700,2);

// Outra forma de fazer a soma, porém não recomendada porque pode tornar a 
// manutenção morosa quando altera um nome:
meuModulo.soma(100,200);