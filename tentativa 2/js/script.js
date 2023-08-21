// Obtém o elemento do botão e a tabela
const botao = document.getElementById("Botao");
const tabela = document.getElementById("tabela");


// Adiciona um evento para o botão de clique
botao.addEventListener("click", (evento) => {
    evento.preventDefault(); // Impede o comportamento padrão do formulário
    
    // Obtém os valores dos campos do formulário
    const inpTarefa = document.getElementById("IDtarefa");
    const inpAutor = document.getElementById("IDautor");
    const inpDepartamento = document.getElementById("IDdepartamento");
    const inpImportancia = document.getElementById("importancia");
    
    // Cria elementos de tabela para a nova linha
    const tr = document.createElement("tr");
    const tdLinha1 = document.createElement("td");
    const tdLinha2 = document.createElement("td");
    const tdLinha3 = document.createElement("td");
    const tdLinha4 = document.createElement("td");
    const tdLinha5 = document.createElement("td");
    
    // Preenche as células da tabela com os valores dos campos do formulário
    tdLinha1.textContent = inpTarefa.value;
    tdLinha2.textContent = inpDepartamento.value;
    tdLinha3.textContent = inpAutor.value;
    tdLinha4.textContent = inpImportancia.value;

    // Cria um botão para remover a linha
    let botaoDeExcluir = document.createElement("button");
    botaoDeExcluir.textContent = " X ";

    // Adiciona o botão para o X
    tdLinha5.appendChild(botaoDeExcluir);

    // Adiciona as células à linha da tabela
    tr.appendChild(tdLinha1);
    tr.appendChild(tdLinha2);
    tr.appendChild(tdLinha3);
    tr.appendChild(tdLinha4);
    tr.appendChild(tdLinha5);

    // Adiciona a linha à tabela
    tabela.querySelector("table").appendChild(tr);

    // Adiciona um evento para o botão de remover
    botaoDeExcluir.addEventListener("click", (evento) => {
        evento.preventDefault();
        // Remove a linha da tabela ao clicar no botão X
        tr.remove(); 
    });

    // Limpa os campos do formulário após adicionar a tarefa
    inpTarefa.value = "";
    inpDepartamento.value = "";
    inpAutor.value = "";
});
