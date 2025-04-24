const form = document.getElementById("formInteressado");
const lista = document.getElementById("listaInteressados");
const btnSalvar = document.getElementById("btnSalvar");

let editandoId = null;

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    cpf: document.getElementById("cpf").value,
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value
  };

  let response;

  if (editandoId === null) {
    response = await fetch("http://localhost:3000/interessados", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } else {
    response = await fetch(`http://localhost:3000/interessados/${editandoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  if (response.ok) {
    alert(editandoId === null ? "Interessado cadastrado!" : "Interessado alterado!");
    form.reset();
    btnSalvar.textContent = "Cadastrar";
    editandoId = null;
    carregarInteressados();
  } else {
    alert("Erro ao salvar interessado.");
  }
});

async function carregarInteressados() {
  const res = await fetch("http://localhost:3000/interessados");
  const dados = await res.json();
  lista.innerHTML = "";

  dados.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.nome} - ${item.cpf}
      <div>
        <button class="btn btn-sm btn-warning me-2" onclick="editarInteressado(${item.id}, '${item.nome}', '${item.cpf}', '${item.telefone}', '${item.email}')">Alterar</button>
        <button class="btn btn-sm btn-danger" onclick="excluirInteressado(${item.id})">Excluir</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

window.editarInteressado = function (id, nome, cpf, telefone, email) {
  document.getElementById("nome").value = nome;
  document.getElementById("cpf").value = cpf;
  document.getElementById("telefone").value = telefone;
  document.getElementById("email").value = email;

  editandoId = id;
  btnSalvar.textContent = "Gravar";
};

window.excluirInteressado = async function (id) {
  if (!confirm("Deseja excluir este interessado?")) return;

  const res = await fetch(`http://localhost:3000/interessados/${id}`, {
    method: "DELETE"
  });

  if (res.ok) {
    alert("Interessado removido!");
    limparFormulario();
    carregarInteressados();
  } else {
    alert("Erro ao excluir.");
  }
};

function limparFormulario() {
    document.getElementById("formInteressado").reset();
    document.getElementById("cpf").focus();
    editandoId = null;
    document.getElementById("btnSalvar").textContent = "Cadastrar";
  }

document.getElementById("btnLimpar").addEventListener("click", limparFormulario);




carregarInteressados();
