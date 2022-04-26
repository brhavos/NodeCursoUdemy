/**
 * ----------------------------------------------
 * Módulos Externos
 * 
 * No exemplo usaremos um módulo EXTERNO do NPM 
 * chamado "minilist".
 * Esse módulo permite resgatar parâmetros passados
 * na linha de comando.
 * 
 * Para isso a sintaxe da chamada deve ser:
 * node index.js --argumento1=valor1 --...
 * 
 * Exemplo:
 * node index.js --nome=Carlos --idade=57 --nascimento=25/10/1963
 * 
 * Para resgatar o valor é assim:
 *  args['nome_do_argumento']
 * 
 *  Exemplo: args['nome']
 * ----------------------------------------------
 */


// Exibindo argumentos, independente da minilist.
console.log('Argumentos: '+process.argv.slice(2));

// ----------------

// Solicitando a biblioteca "minilist"
const minilist = require("minimist");

// Pegando o array de argumentos:
const args = minilist(process.argv.slice(2));
console.log(args);

// Utilizando minilist para pegar o argumento.
const nome = args['nome'];
console.log(nome);

// Utilizando minilist para pegar o argumento.
const idade = args['idade'];
console.log(idade);

// Utilizando minilist para pegar o argumento.
const nascimento = args['nascimento'];
console.log(nascimento);

// Compondo uma string:
console.log(`
DADOS DO FUNCIONÁRIO:
Nome..............: ${nome} 
Idade.............: ${idade} anos
Data de Nascimento: ${nascimento}
`);
