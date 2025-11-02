// --- NOVO: Função para trocar de Abas ---
function mostrarSecao(idSecao, elementoBotao) {
    // 1. Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(secao => {
        secao.style.display = 'none';
    });
    
    // 2. Remove a classe 'active' de todos os botões
    document.querySelectorAll('.tab-button').forEach(botao => {
        botao.classList.remove('active');
    });
    
    // 3. Mostra a aba clicada
    document.getElementById(idSecao).style.display = 'block';
    
    // 4. Adiciona a classe 'active' no botão clicado
    elementoBotao.classList.add('active');
}

// --- LÓGICA DA ABA 1: GERADOR DE CALENDÁRIO ---

function gerarCalendarioCompleto() {
    const inputText = document.getElementById('listaTimes').value;
    let nomes = inputText.split('\n')
                            .map(name => name.trim()) 
                            .filter(name => name.length > 0); 
    
    if (nomes.length < 2) {
        alert("Por favor, insira pelo menos 2 times.");
        return;
    }
    const jogos = algoritmoRoundRobin(nomes);
    exibirCalendario(jogos);
}

function algoritmoRoundRobin(nomesTimes) {
    let times = [...nomesTimes];
    let calendario = [];
    if (times.length % 2 !== 0) {
        times.push("FOLGA");
    }
    const numTimes = times.length;
    const numRodadas = numTimes - 1;
    const metadeTimes = numTimes / 2;
    let casa = times.slice(0, metadeTimes);
    let fora = times.slice(metadeTimes).reverse();

    for (let i = 0; i < numRodadas; i++) {
        let rodada = [];
        for (let j = 0; j < casa.length; j++) {
            if (casa[j] !== "FOLGA" && fora[j] !== "FOLGA") {
                rodada.push({ rodadaNum: i + 1, timeCasa: casa[j], timeFora: fora[j] });
            }
        }
        calendario.push(...rodada);
        let ultimoFora = fora.pop();
        let primeiroCasa = casa.splice(1, 1)[0]; 
        casa.splice(1, 0, ultimoFora);
        fora.unshift(primeiroCasa);
    }
    
    const jogosTurno1 = [...calendario];
    const offsetRodadas = numRodadas;
    for (const jogo of jogosTurno1) {
        calendario.push({
            rodadaNum: jogo.rodadaNum + offsetRodadas,
            timeCasa: jogo.timeFora,
            timeFora: jogo.timeCasa
        });
    }
    return calendario;
}

function exibirCalendario(jogos) {
    const outputDiv = document.getElementById('calendarioGerado');
    outputDiv.innerHTML = '';
    if (jogos.length === 0) return;

    const jogosPorRodada = new Map();
    for (const jogo of jogos) {
        if (!jogosPorRodada.has(jogo.rodadaNum)) {
            jogosPorRodada.set(jogo.rodadaNum, []);
        }
        jogosPorRodada.get(jogo.rodadaNum).push(jogo);
    }
    
    let htmlFinal = '';
    const rodadasOrdenadas = [...jogosPorRodada.keys()].sort((a, b) => a - b);
    for (const numRodada of rodadasOrdenadas) {
        htmlFinal += `<div class="rodada"><h3>Rodada ${numRodada}</h3>`;
        const jogosDaRodada = jogosPorRodada.get(numRodada);
        for (const jogo of jogosDaRodada) {
            htmlFinal += `
                <div class="jogo">
                    <span class="time">${jogo.timeCasa}</span>
                    <span class="vs">vs</span>
                    <span class="time">${jogo.timeFora}</span>
                </div>
            `;
        }
        htmlFinal += `</div>`;
    }
    outputDiv.innerHTML = htmlFinal;
}

// --- NOVO: LÓGICA DA ABA 2: SORTEIO SIMPLES ---

/**
 * Função principal do Sorteio (chamada pelo novo botão)
 */
function sortearLista() {
    const inputText = document.getElementById('listaSorteio').value;
    
    // 1. Limpa os dados
    let nomes = inputText.split('\n')
                            .map(name => name.trim()) 
                            .filter(name => name.length > 0);
    
    if (nomes.length === 0) {
        alert("Por favor, insira pelo menos um item para sortear.");
        return;
    }

    // 2. Chama o algoritmo de embaralhamento
    let nomesEmbaralhados = shuffleArray(nomes);

    // 3. Exibe o resultado
    exibirSorteio(nomesEmbaralhados);
}

/**
 * O "Ordenamento Randômico" (Algoritmo Fisher-Yates Shuffle)
 */
function shuffleArray(array) {
    // Percorre o array de trás para frente
    for (let i = array.length - 1; i > 0; i--) {
        // Sorteia um índice aleatório (j) entre 0 e i (incluindo i)
        const j = Math.floor(Math.random() * (i + 1));
        
        // Troca o elemento atual (i) pelo elemento sorteado (j)
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Renderiza a lista ordenada no HTML
 */
function exibirSorteio(listaOrdenada) {
    const outputDiv = document.getElementById('resultadoSorteio');
    
    // Monta uma lista ordenada (<ol>)
    let htmlFinal = '<h2>Resultado do Sorteio</h2><ol>';
    for (const nome of listaOrdenada) {
        htmlFinal += `<li>${nome}</li>`;
    }
    htmlFinal += '</ol>';
    
    outputDiv.innerHTML = htmlFinal;
}