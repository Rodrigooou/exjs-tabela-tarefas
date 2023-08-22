// Obtém o elemento do botão e a tabela
const botao = document.getElementById("Botao");
const tabela = document.getElementById("tabela");
const botaoImportancia = document.getElementById("BotaoImportancia");


// Adiciona um evento para o botão de clique
botao.addEventListener("click", (evento) => {
    evento.preventDefault(); // Impede o comportamento padrão do formulário
    
    // Obtém os valores dos campos do formulário
    const inpTarefa = document.getElementById("IDtarefa");
    const inpAutor = document.getElementById("IDautor");
    const inpDepartamento = document.getElementById("IDdepartamento");
    const inpImportancia = document.getElementById("importancia");
    
    // Cria elementos de tabela para a nova linha
    const trLinha = document.createElement("tr");
    const tdColuna1 = document.createElement("td");
    const tdColuna2 = document.createElement("td");
    const tdColuna3 = document.createElement("td");
    const tdColuna4 = document.createElement("td");
    const tdColuna5 = document.createElement("td");
    
    // Preenche as células da tabela com os valores dos campos do formulário
    tdColuna1.textContent = inpTarefa.value;
    tdColuna2.textContent = inpAutor.value;
    tdColuna3.textContent = inpDepartamento.value;
    tdColuna4.textContent = inpImportancia.value;

    // Cria um botão para remover a linha
    let botaoDeExcluir = document.createElement("button");
    botaoDeExcluir.textContent = " X ";

    // Adiciona o botão para o X
    tdColuna5.appendChild(botaoDeExcluir);

    // Adiciona as células à linha da tabela
    trLinha.appendChild(tdColuna1);
    trLinha.appendChild(tdColuna2);
    trLinha.appendChild(tdColuna3);
    trLinha.appendChild(tdColuna4);
    trLinha.appendChild(tdColuna5);

    // Adiciona a linha à tabela
    tabela.querySelector("table").appendChild(trLinha);

    // Adiciona um evento para o botão de remover
    botaoDeExcluir.addEventListener("click", (evento) => {
        evento.preventDefault();
        // Remove a linha da tabela ao clicar no botão X
        trLinha.remove(); 
    });
    
    // Limpa os campos do formulário após adicionar a tarefa
    inpTarefa.value = "";
    inpDepartamento.value = "";
    inpAutor.value = "";
    
});

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    
});
