// Cria um array para armazenar as tarefas
const tarefas = [];

// Obtém os elementos do formulário, da tabela e dos botões
const botao = document.getElementById("Botao");
const tabela = document.querySelector(".tabela-tarefas");
const botaoImportancia = document.getElementById("BotaoImportancia");

// Função para adicionar uma tarefa ao array e à tabela
const adicionarTarefa = () => {
    const inpTarefa = document.getElementById("IDtarefa");
    const inpAutor = document.getElementById("IDautor");
    const inpDepartamento = document.getElementById("IDdepartamento");
    const inpImportancia = document.getElementById("importancia");
    const inpValor = document.getElementById("IDvalor");
    const inpDuracao = document.getElementById("IDduracao");

    // Adiciona a tarefa ao array
    tarefas.push({
        tarefa: inpTarefa.value,
        autor: inpAutor.value,
        departamento: inpDepartamento.value,
        importancia: inpImportancia.value,
        valor: inpValor.value,
        duracao: inpDuracao.value
    });

    // Limpa os campos do formulário após adicionar a tarefa
    inpTarefa.value = "";
    inpDepartamento.value = "";
    inpAutor.value = "";
    inpValor.value = "";
    inpDuracao.value = "";

    // Recria a tabela com base nas tarefas do array
    criarTabela();
};

// Função para criar a tabela com base nas tarefas do array
function criarTabela() {
    const Bodytabela = tabela.querySelector("tbody");
    Bodytabela.innerHTML = ""; // Limpa o conteúdo atual da tabela

    // Percorre o array de tarefas e cria as linhas da tabela
    tarefas.forEach((tarefa, index) => {
        const linha = document.createElement("tr");
        const tdTarefa = document.createElement("td");
        const tdAutor = document.createElement("td");
        const tdDepartamento = document.createElement("td");
        const tdValor = document.createElement("td");
        const tdDuracao = document.createElement("td");
        const tdImportancia = document.createElement("td");
        const tdExcluir = document.createElement("td");
        const botaoDeExcluir = document.createElement("button");

        // Preenche as células da linha com os valores da tarefa
        tdTarefa.textContent = tarefa.tarefa;
        tdAutor.textContent = tarefa.autor;
        tdDepartamento.textContent = tarefa.departamento;
        tdImportancia.textContent = tarefa.importancia;
        tdValor.textContent = tarefa.valor;
        tdDuracao.textContent = tarefa.duracao;

        // Configura o botão de remoção
        botaoDeExcluir.textContent = " X ";
        botaoDeExcluir.addEventListener("click", () => {
            tarefas.splice(index, 1); // Remove a tarefa do array
            criarTabela(); // Recria a tabela
        });

        // Adiciona as células à linha da tabela
        tdExcluir.appendChild(botaoDeExcluir);
        linha.appendChild(tdTarefa);
        linha.appendChild(tdAutor);
        linha.appendChild(tdDepartamento);
        linha.appendChild(tdImportancia);
        linha.appendChild(tdValor);
        linha.appendChild(tdDuracao);
        linha.appendChild(tdExcluir);
        Bodytabela.appendChild(linha);
    });
};

// Adiciona um evento de clique para o botão "Adicionar"
botao.addEventListener("click", adicionarTarefa);

// Adiciona um evento de clique para o botão "Ordenar por Importância"
botaoImportancia.addEventListener("click", () => {
    // Ordena o array de tarefas com base na importância
    tarefas.sort((a, b) => {
        const importanceOrder = {
            "muito-importante": 1,
            "relevante": 2,
            "pouco-importante": 3
        };
        return importanceOrder[a.importancia] - importanceOrder[b.importancia];
    });

    // Recria a tabela com base no array de tarefas ordenado
    criarTabela();
});
