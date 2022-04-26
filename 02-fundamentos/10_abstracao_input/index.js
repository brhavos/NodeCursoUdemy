

const inquirer = require('inquirer');

inquirer.prompt([
    // PERGUNTAS:
    // Array de parâmetros.
    // No caso serão e elementos (duas notas).
    {
        name: 'pergunta1',
        message: 'Informa a primeira nota: ',
    },
    {
        name: 'pergunta2',
        message: 'Informa a segunda nota: ',
    },
])
// RESPOSTAS:
.then((answers) => {
    // Mostrando as respostas:
    console.log(answers);
    console.log('Nota 1 = ' + answers.pergunta1);
    console.log('Nota 2 = ' + answers.pergunta2);
    var mediaDasNotas = (parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2;
    console.log(`A média das notas é ${mediaDasNotas}`);
}).catch(err => console.log(err));

// FIM.