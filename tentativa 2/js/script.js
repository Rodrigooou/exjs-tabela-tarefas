// Obtém o elemento do botão e a tabela pelo ID
const botao = document.getElementById("Botao");
const tabela = document.getElementById("tabela");

// Adiciona um ouvinte de evento para o botão de clique
botao.addEventListener("click", (evento) => {
    evento.preventDefault(); // Impede o comportamento padrão do formulário

    // Obtém os valores dos campos do formulário
    const inpTarefa = document.getElementById("IDtarefa");
    const inpAutor = document.getElementById("IDautor");
    const inpDepartamento = document.getElementById("IDdepartamento");
    const inpImportancia = document.getElementById("importancia");

    // Cria elementos de tabela para a nova linha
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    // Preenche as células da tabela com os valores dos campos do formulário
    td1.textContent = inpTarefa.value;
    td2.textContent = inpDepartamento.value;
    td3.textContent = inpAutor.value;
    td4.textContent = inpImportancia.value;

    // Cria um botão para remover a linha
    let botaoDeExcluir = document.createElement("button");
    botaoDeExcluir.textContent = " X ";

    // Adiciona o botão à célula de remoção
    td5.appendChild(botaoDeExcluir);

    // Adiciona as células à linha da tabela
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    // Adiciona a linha à tabela
    tabela.querySelector("table").appendChild(tr);

    // Adiciona um ouvinte de evento para o botão de remoção
    botaoDeExcluir.addEventListener("click", (evento) => {
        evento.preventDefault();
        // Remove a linha da tabela ao clicar no botão de remoção
        tr.remove(); 
    });

    // Limpa os campos do formulário após adicionar a tarefa
    inpTarefa.value = "";
    inpDepartamento.value = "";
    inpAutor.value = "";
});