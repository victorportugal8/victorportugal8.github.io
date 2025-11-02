Perfeito! Essa refatoração (separar HTML, CSS e JS) é uma excelente prática profissional.

Você está certo, o README.md precisa refletir isso. Aqui está a versão atualizada, especificamente nas seções "Tecnologias Utilizadas" e "Como Usar".

README.md (Atualizado)

Markdown

# Gerador de Sorteios e Calendários 🏆

Este é um projeto web simples, de página única, criado para ajudar na organização de campeonatos e sorteios. A aplicação roda 100% no navegador, não exigindo *back-end* ou instalação.

O projeto possui um tema escuro (dark mode) e uma interface limpa dividida em duas ferramentas principais.

---

## ✨ Funcionalidades

O sistema é dividido em duas abas principais:

### 1. Gerador de Calendário (Pontos Corridos)

Esta ferramenta é ideal para criar a tabela de jogos de uma liga ou fase de grupos.

* **Entrada:** Recebe uma lista de times (um por linha).
* **Saída:** Gera um calendário completo de jogos no formato "todos contra todos" (algoritmo Round-Robin).
* **Recursos:**
    * Cria automaticamente os jogos de **Ida e Volta**.
    * Agrupa os jogos por **Rodada** (ex: Rodada 1, Rodada 2...).
    * Lida corretamente com um número ímpar de times (adicionando um "BYE" ou "FOLGA" automático nos cálculos para que um time descanse por rodada).

### 2. Sorteio Simples (Ordenamento Randômico)

Esta ferramenta serve para embaralhar qualquer lista de forma justa.

* **Entrada:** Recebe uma lista de qualquer tipo de item (nomes de pessoas, times, números, etc.).
* **Saída:** Exibe a mesma lista em uma nova ordem completamente aleatória e numerada.
* **Algoritmo:** Utiliza o algoritmo **Fisher-Yates Shuffle**, que é a forma estatisticamente mais correta de garantir que cada permutação possível tenha a mesma probabilidade de ocorrer.

---

## 🚀 Tecnologias Utilizadas (Stack)

Este projeto é 100% **Front-End** e foi construído utilizando apenas as tecnologias-base da web, sem a necessidade de *frameworks* ou bibliotecas externas.

* **HTML5:**
    * Utilizado para a estrutura semântica da página. O arquivo `index.html` centraliza a aplicação e faz a ligação com os arquivos de estilo e script.

* **CSS3 (Externo):**
    * O código de estilo está modularizado em um arquivo externo (`css/styles.css`).
    * **Tema Escuro (Dark Mode):** Toda a paleta de cores foi pensada para o conforto visual.
    * **CSS Grid Layout:** Utilizado especificamente para garantir o alinhamento centralizado perfeito dos confrontos (`Time A` **vs** `Time B`).
    * **Flexbox:** Utilizado para a estruturação geral do layout e do container.

* **JavaScript (Vanilla JS - Puro e Externo):**
    * O código de lógica está modularizado em um arquivo externo (`js/script.js`).
    * **Manipulação do DOM:** Usado para alternar entre as abas e exibir os resultados (listas e tabelas) de forma dinâmica.
    * **Lógica de Algoritmos:**
        1.  **Round-Robin:** Implementação do algoritmo para gerar os confrontos de "todos contra todos".
        2.  **Fisher-Yates Shuffle:** Implementação do algoritmo para o "ordenamento randômico" (sorteio).

---

## ⚙️ Como Usar

Como este é um projeto puramente front-end, não há necessidade de instalação ou *build*. Para executá-lo localmente, basta manter a estrutura de arquivos do projeto:

```
seu-projeto/
│
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    └── script.js
```


1.  Faça o download dos arquivos mantendo a estrutura de pastas acima.
2.  Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Firefox, Microsoft Edge, etc.).
3.  A aplicação estará pronta para uso.