# 1️⃣ Desafio Classificador de Nível de Herói

## 💻 Desafio de Projeto

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão

## Objetivo

🔑 Criamos uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:

> Se XP for menor do que 1.000 = Ferro<br>
> Se XP for entre 1.001 e 3.000 = Bronze<br>
> Se XP for entre 3.001 e 6.000 = Prata<br>
> Se XP for entre 6.001 e 7.000 = Ouro<br>
> Se XP for entre 7.001 e 8.000 = Platina<br>
> Se XP for entre 8.001 e 9.000 = Ascendente<br>
> Se XP for entre 9.001 e 10.000 = Imortal<br>
> Se XP for entre 10.001 e 20000 = Radiante<br>

✂️ Fizemos uma adaptação na pontuação para evitar resultado "indefined", entre Bronze e Prata,<br>
fizemos também uma adaptação no nível **Radiante**, onde incluímos um limite de **20.000**, porque não poderia<br>
deixar o XP ao infinito, isso poderia quebrar o código.<br>

## Saída

Ao final devemos exibir uma ***mensagem:***<br>

> "O Herói de nome **{nome}** está no nível de **{nivel}**"

## Informações de resolução do código

<p>📚 Precisamos instalar uma biblioteca, o pacote “prompt-sync” no Node.js, utilizando o npm "Node Package Manager".<br>No ambiente Node.js, que é JavaScript do lado do servidor, o prompt não está disponível nativamente, como no navegador.<br>Para obter entrada do usuário no Node.js, precisamos usar módulos de leitura de entrada ou instalar bibliotecas de terceiros, que facilitam a interação do usuário no console.<br>

> Prompt - https://www.npmjs.com/package/prompt-sync <br>

📂 Temos dois arquivos javascript no repositório, o principal **"index.js"** com a entrada do "nome" via prompt e o "xp" randômico. E um arquivo alternativo com as duas entradas via prompt, **"index_02.js"**.<br>

#### 📋 Usamos o Javascript com o Node.js.

### JavaScript
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### NodeJS
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)