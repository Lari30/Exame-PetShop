const db = require('../db');

exports.getAll = (req, res) => {
  db.query("SELECT * FROM filhotes", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.create = (req, res) => {
  const { especie, raca } = req.body;
  if (!especie || !raca) return res.status(400).send("Campos obrigatórios!");

  db.query("INSERT INTO filhotes (especie, raca) VALUES (?, ?)", [especie, raca], (err) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("Filhote cadastrado!");
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { especie, raca } = req.body;

  if (!especie || !raca) return res.status(400).send("Campos obrigatórios!");

  db.query("UPDATE filhotes SET especie = ?, raca = ? WHERE id = ?", [especie, raca, id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send("Filhote não encontrado.");
    res.send("Filhote atualizado!");
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM filhotes WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send("Filhote não encontrado.");
    res.send("Filhote removido!");
  });
};
