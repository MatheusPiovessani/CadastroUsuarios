function listarUsuarios() {
    fetch("http://localhost:8080/usuarios")
        .then(response => response.json())
        .then(dados => {
            const tabela = document.getElementById("tabelaUsuarios");
            tabela.innerHTML = '<tr><th>Nome</th><th>Email</th><th>CPF</th></tr>'; //Craicao da tabela 
            dados.forEach(element => {
                tabela.innerHTML += `<tr><td>${element.nome}</td><td>${element.email}</td><td>${element.cpf}</td><td><button onclick="deletar(${element.id})">Deletar</button></td></tr>`; //Isercao dos dados na tabela
            });
        })
        .catch(error => {
            console.error('Erro ao listar usuários:', error);
            alert('Erro ao carregar usuários!');
        });
}

function cadastrar() { //Salva os valores passado pelo usuario em variaveis
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if (!nome || !email || !cpf) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome, email: email, cpf: cpf }) //Salva os valores salvos em variaveis e envia para o banco via json
    })
        .then(async response => {
            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }
            return response.json();
        })
        .then(() => {
            alert("Usuário cadastrado com sucesso!"); //Limpa os campos dos dados após o cadastro
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("cpf").value = "";
            listarUsuarios();
        })
        .catch(error => {
            alert("Erro ao cadastrar: " + error.message);
        });
}

function deletar(id) {
    fetch("http://localhost:8080/usuarios/" + id, {
        method: "DELETE"
    })
        .then(() => {
            listarUsuarios();
        })
}

window.onload = function () {
    listarUsuarios();
};
