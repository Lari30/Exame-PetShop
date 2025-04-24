const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/interessados', require('./routes/interessados'));
app.use('/filhotes', require('./routes/filhotes'));

// Start do servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
