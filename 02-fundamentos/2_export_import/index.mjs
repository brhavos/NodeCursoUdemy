// IMPORTANDO ARQUIVO DE FUNÇÕES:
import meu_modulo, { foo, bar, soma, subtrai, multiplica, divide } from "./meu_modulo.mjs";

// UTILIZANDO AS FUNÇÕES - Jeito 1:
meu_modulo.foo();
meu_modulo.bar();
meu_modulo.subtrai(7,3);
meu_modulo.multiplica(6,8);
meu_modulo.divide(9,3);

// UTILIZANDO AS FUNÇÕES - Jeito 2:
foo();
bar();
subtrai(7,3);
multiplica(6,8);
divide(9,3);
