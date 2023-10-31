// Carregar e chamar o módulo prompt-sync para usar a função no Node.js
let prompt = require('prompt-sync')();

// Declarando as variáveis
let nome;
let xp;
let nivel;

// Laço de Repetição "do while" e Prompt para as entradas
do {
    nome = prompt('Digite um nome para seu herói: ');
    xp = Math.floor(Math.random() * 20000) + 1;
} while (xp <= 0 || xp > 20000);

// Estrutura de Decisão (switch case) para escolher nível
switch (true) {
    case xp >= 1 && xp <= 1000:
        nivel = "Ferro";
        break;

    case xp >= 1001 && xp <= 3000:
        nivel = "Bronze";
        break;

    case xp >= 3001 && xp <= 6000:
        nivel = "Prata";
        break;

    case xp >= 6001 && xp <= 7000:
        nivel = "Ouro";
        break;

    case xp >= 7001 && xp <= 8000:
        nivel = "Platina";
        break;

    case xp >= 8001 && xp <= 9000:
        nivel = "Ascendente";
        break;

    case xp >= 9001 && xp <= 10000:
        nivel = "Imortal";
        break;

    case xp >= 10001 && xp <= 20000:
        nivel = "Radiante";
        break;
}

// Mostrando a saída do programa
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
