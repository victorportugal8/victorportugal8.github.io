/**
 * Função 1: O Algoritmo Round-Robin para gerar os jogos.
*/
function algoritmoRoundRobin(nomesTimes) {
    let times = [...nomesTimes];
    let calendario = []; // Array para todos os jogos
            
    // Se o número de times for ímpar, adiciona um "BYE" (Folga)
    if (times.length % 2 !== 0) {
        times.push("FOLGA");
    }

    const numTimes = times.length;
    const numRodadas = numTimes - 1;
    const metadeTimes = numTimes / 2;
    
    // Cria arrays para os times da "casa" e "visitantes"
    let casa = times.slice(0, metadeTimes);
    let fora = times.slice(metadeTimes).reverse();
    
    // --- GERAÇÃO DO TURNO 1 (IDA) ---
    for (let i = 0; i < numRodadas; i++) {
        let rodada = [];
        for (let j = 0; j < casa.length; j++) {
            // Adiciona o jogo se não for contra a "FOLGA"
            if (casa[j] !== "FOLGA" && fora[j] !== "FOLGA") {
                rodada.push({
                    rodadaNum: i + 1,
                    timeCasa: casa[j],
                    timeFora: fora[j]
                });
            }
        }
        calendario.push(...rodada);

        // Rotaciona os times para a próxima rodada
        // O time [0] (primeiro da lista 'casa') fica fixo
        // 1. Tira o último time de 'fora' e o primeiro (não-fixo) de 'casa'
        let ultimoFora = fora.pop();
        let primeiroCasa = casa.splice(1, 1)[0]; 

        // 2. Adiciona eles nas listas opostas
        casa.splice(1, 0, ultimoFora); // ultimoFora vira o segundo da lista 'casa'
        fora.unshift(primeiroCasa); // primeiroCasa vira o primeiro da lista 'fora'
    }
    
    // --- GERAÇÃO DO TURNO 2 (VOLTA) ---
    const jogosTurno1 = [...calendario];
    const offsetRodadas = numRodadas; // O número de rodadas do 1º turno

    for (const jogo of jogosTurno1) {
        calendario.push({
            rodadaNum: jogo.rodadaNum + offsetRodadas,
            timeCasa: jogo.timeFora, // Inverte o mando
            timeFora: jogo.timeCasa  // Inverte o mando
        });
    }

    return calendario; // Retorna um array com TODOS os objetos de jogo
}

/**
 * Função 2: Função principal chamada pelo botão.
 */
function gerarCalendarioCompleto() {
    const inputText = document.getElementById('listaTimes').value;
    
    // Limpa os dados
    let nomes = inputText.split('\n')
                            .map(name => name.trim()) 
                            .filter(name => name.length > 0); 
    
    if (nomes.length < 2) {
        alert("Por favor, insira pelo menos 2 times.");
        return;
    }

    // Chama o algoritmo
    const jogos = algoritmoRoundRobin(nomes);
    
    // Exibe os resultados
    exibirCalendario(jogos);
}

/**
 * Função 3: Renderiza o calendário no HTML.
 */
function exibirCalendario(jogos) {
    const outputDiv = document.getElementById('calendarioGerado');
    outputDiv.innerHTML = ''; // Limpa resultados anteriores
    
    if (jogos.length === 0) return;

    // Agrupa os jogos por rodada
    const jogosPorRodada = new Map();
    for (const jogo of jogos) {
        if (!jogosPorRodada.has(jogo.rodadaNum)) {
            jogosPorRodada.set(jogo.rodadaNum, []);
        }
        jogosPorRodada.get(jogo.rodadaNum).push(jogo);
    }
    
    let htmlFinal = '';
    
    // Ordena as rodadas (Map pode não ser ordenado)
    const rodadasOrdenadas = [...jogosPorRodada.keys()].sort((a, b) => a - b);

    // Monta o HTML
    for (const numRodada of rodadasOrdenadas) {
        htmlFinal += `<div class="rodada">`;
        htmlFinal += `<h3>Rodada ${numRodada}</h3>`;
        
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