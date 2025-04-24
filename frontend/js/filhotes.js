const form = document.getElementById("formFilhote");
const lista = document.getElementById("listaFilhotes");
const especieInput = document.getElementById("especie");
const racaInput = document.getElementById("raca");
const btnCadastrar = document.getElementById("btnCadastrar");

let editandoId = null;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const especie = especieInput.value.trim();
  const raca = racaInput.value.trim();

  if (!especie || !raca) {
    alert("Preencha todos os campos!");
    return;
  }

  const payload = { especie, raca };

  let res;
  if (editandoId === null) {
    // Novo cadastro
    res = await fetch("http://localhost:3000/filhotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } else {
    // Alteração
    res = await fetch(`http://localhost:3000/filhotes/${editandoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  if (res.ok) {
    alert(editandoId === null ? "Filhote cadastrado com sucesso!" : "Filhote alterado com sucesso!");
    form.reset();
    btnCadastrar.textContent = "Cadastrar Filhote";
    editandoId = null;
    carregarFilhotes();
  } else {
    const error = await res.text();
    alert("Erro ao salvar: " + error);
  }
});

async function carregarFilhotes() {
  const res = await fetch("http://localhost:3000/filhotes");
  const dados = await res.json();
  lista.innerHTML = "";
  dados.forEach(f => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${f.especie} - ${f.raca}
      <div>
        <button class="btn btn-sm btn-warning me-2" onclick="editarFilhote(${f.id}, '${f.especie}', '${f.raca}')">Alterar</button>
        <button class="btn btn-sm btn-danger" onclick="removerFilhote(${f.id})">Excluir</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

window.editarFilhote = function (id, especie, raca) {
  especieInput.value = especie;
  racaInput.value = raca;
  editandoId = id;
  btnCadastrar.textContent = "Gravar Alteração";
};

async function removerFilhote(id) {
  if (!confirm("Tem certeza que deseja excluir este filhote?")) return;

  const res = await fetch(`http://localhost:3000/filhotes/${id}`, {
    method: "DELETE"
  });

  if (res.ok) {
    alert("Filhote excluído com sucesso!");
    limparFormulario();
    carregarFilhotes();
  } else {
    alert("Erro ao excluir o filhote.");
  }
}

function limparFormulario() {
    document.getElementById("formFilhote").reset();
    document.getElementById("especie").focus();
    editandoId = null;
    document.getElementById("btnSalvar").textContent = "Cadastrar";
  }

document.getElementById("btnLimpar").addEventListener("click", limparFormulario);


  

carregarFilhotes();
