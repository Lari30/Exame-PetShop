const db = require('../db');

// GET - Lista todos os interessados
exports.getAll = (req, res) => {
  db.query("SELECT * FROM interessados", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

// POST - Cadastra um novo interessado
exports.create = (req, res) => {
  const { cpf, nome, telefone, email } = req.body;
  db.query(
    "INSERT INTO interessados (cpf, nome, telefone, email) VALUES (?, ?, ?, ?)",
    [cpf, nome, telefone, email],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send("Cadastrado com sucesso!");
    }
  );
};

// PUT - Atualiza um interessado existente
exports.update = (req, res) => {
  const { id } = req.params;
  const { cpf, nome, telefone, email } = req.body;

  if (!cpf || !nome || !telefone || !email) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  db.query(
    "UPDATE interessados SET cpf = ?, nome = ?, telefone = ?, email = ? WHERE id = ?",
    [cpf, nome, telefone, email, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) return res.status(404).send("Interessado não encontrado.");
      res.send("Atualizado com sucesso!");
    }
  );
};

// DELETE - Remove um interessado
exports.delete = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM interessados WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send("Interessado não encontrado.");
    res.send("Removido com sucesso!");
  });
};
