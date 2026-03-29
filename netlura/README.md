# Imersão Front-End com IA - Alura

Este é um projeto de clone da interface da Netflix, desenvolvido durante a Imersão Front-End com IA da Alura. O objetivo é criar uma aplicação web responsiva que simula a experiência de navegação em um catálogo de filmes e séries, utilizando tecnologias modernas de front-end e integração com IA.

## 📋 Descrição

O projeto consiste em duas páginas principais:
- **Página de Seleção de Perfis**: Uma tela inicial onde o usuário pode escolher entre diferentes perfis temáticos (Batman, Doctor Doom, Goku, etc.).
- **Página do Catálogo**: Uma interface de navegação com carrosséis de filmes e séries organizados por categorias, incluindo funcionalidades como badges, progresso de visualização e links para trailers no YouTube.

## 🚀 Funcionalidades

- Seleção de perfis com avatares personalizados
- Navegação responsiva com menu fixo
- Carrosséis horizontais para categorias de conteúdo
- Badges indicando novidades, top 10, etc.
- Links diretos para trailers no YouTube
- Design inspirado na Netflix
- Integração com armazenamento local para perfis ativos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização responsiva e animações
- **JavaScript (ES6+)**: Lógica de interação e manipulação do DOM
- **Módulos JavaScript**: Organização do código em componentes reutilizáveis

## 📁 Estrutura do Projeto

```
imersao-front-end-ia-alura/
├── index.html                 # Página de seleção de perfis
├── style.css                  # Estilos da página inicial
├── js/
│   └── script.js              # Script da página inicial
├── catalogo/
│   ├── catalogo.html          # Página do catálogo
│   ├── catalogo.css           # Estilos do catálogo
│   └── js/
│       ├── main.js            # Script principal do catálogo
│       ├── data.js            # Dados das categorias e itens
│       ├── utils.js           # Utilitários
│       └── components/
│           ├── Card.js        # Componente de cartão de filme/série
│           └── Carousel.js    # Componente de carrossel
├── assets/
│   └── img/
│       └── avatars/           # Imagens dos avatares dos perfis
└── README.md                  # Este arquivo
```

## 🏃‍♂️ Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/imersao-front-end-ia-alura.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd imersao-front-end-ia-alura
   ```

3. Abra o arquivo `index.html` em seu navegador web preferido.

   **Nota**: Como este é um projeto front-end puro, não há necessidade de servidor local. Basta abrir os arquivos HTML diretamente no navegador.

## 🎨 Personalização

- **Perfis**: Adicione novos perfis editando o `index.html` e adicionando imagens na pasta `assets/img/avatars/`.
- **Conteúdo**: Modifique as categorias e itens no arquivo `catalogo/js/data.js`.
- **Estilos**: Personalize a aparência editando os arquivos CSS correspondentes.

---

**Nota**: Este projeto é uma simulação educacional e não está afiliado à Netflix ou à Alura de forma oficial.