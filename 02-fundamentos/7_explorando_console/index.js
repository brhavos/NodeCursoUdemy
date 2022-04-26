/**
 * EXPLORANDO MAIS FUNCIONALIDADES DO "CONSOLE"
*/

// Limpando o console:
console.clear();

// Publicando mais de um valor:
const x = 10;
const y = "Algum texto";
const z = [1, 2, 3, 4, 5];

console.log(x,y,z);
//---------------------------

// Publicando a contagem de impressões:
console.count(`o valor de x = ${x}`);
console.count(`teste...`);
console.count(`o valor de x = ${x}`);
console.count(`o valor de x = ${x}`);
console.count(`teste...`);
console.count(`teste...`);
console.count(`teste...`);
//---------------------------

// Publicando variável entre uma string - modo-1:
console.log('Variável entre string - Modo-1')
console.log(`o valor de x = ${x}`);
console.log(`o valor de y é ${y} e o valor de z é ${z}`);

// Publicando variável entre uma string - modo-2:
console.log('Variável entre string - Modo-2')
console.log(`o valor de x é %s`,x);
console.log("o valor de y é %s e o valor de z é %s",y,z);
//---------------------------

// Limpando o console depois de 2 segundos:
const xtempo = 4000;
console.log(`O console será apagado depois de ${xtempo/1000} segundos...`);
setTimeout(() => {
    console.clear();
}, xtempo);
//---------------------------


