// IMPORTANDO ARQUIVO DE FUNÇÕES:
import meu_modulo, { soma, subtrai, multiplica, divide } from "./meu_modulo.mjs";

// UTILIZANDO AS FUNÇÕES - Jeito 1:
meu_modulo.subtrai(7,3);
meu_modulo.multiplica(6,8);
meu_modulo.divide(9,3);

console.log("--------");

// UTILIZANDO AS FUNÇÕES - Jeito 2:
soma(1,1);
subtrai(7,3);
multiplica(6,8);
divide(9,3);
