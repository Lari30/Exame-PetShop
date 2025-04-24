
# Exame PetShop - Sistema de Cadastro de Filhotes e Interessados

Este projeto foi desenvolvido como parte de um exame prático para a disciplina de Projeto e Programação de Interfaces (PPI). O sistema tem como finalidade permitir o cadastro e gerenciamento de filhotes e pessoas interessadas em adotá-los, funcionando como uma aplicação web full stack.

## Estrutura do Projeto

```
Exame-PetShop/
├── backend/              # Serviço backend em Node.js + Express
│   ├── controllers/      # Lógica dos controladores para filhotes e interessados
│   ├── db.js             # Conexão com banco de dados MySQL
│   ├── routes/           # Definição das rotas da API REST
│   └── server.js         # Arquivo principal do servidor
├── frontend/             # Interface do usuário com HTML, CSS e JavaScript
│   ├── filhotes.html     # Tela de cadastro e visualização de filhotes
│   ├── interessados.html # Tela de cadastro e visualização de interessados
│   └── js/               # Scripts JavaScript do frontend
├── banco-petshop/        # Pasta reservada para artefatos do banco
├── bancodedados.sql      # Script SQL de criação e popular o banco
├── package.json          # Dependências e configurações do projeto Node.js
├── package-lock.json     # Lockfile do npm
└── video-explicativo/    # Pasta com o vídeo demonstrativo do projeto
```

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MySQL

### Frontend
- HTML5
- CSS3 / Bootstrap
- JavaScript 

## Funcionalidades
- Cadastro de filhotes (nome, raça, idade, etc.)
- Cadastro de interessados (nome, CPF, email, telefone)
- Visualização em listas
- Exclusão de registros
- Integração frontend-backend via requisições HTTP

## Como Executar

### Requisitos
- Node.js instalado
- MySQL instalado e rodando

### Passos
1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone <repo-url>
   cd Exame-PetShop
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o banco de dados:
   - Acesse o MySQL e execute o script `bancodedados.sql`

4. Configure as credenciais no arquivo `backend/db.js`

5. Inicie o servidor backend:
   ```bash
   node backend/server.js
   ```

6. Abra os arquivos HTML diretamente no navegador (ex: `frontend/filhotes.html`)

## Observações
- Certifique-se de que o backend está escutando na porta correta (geralmente 3000).
- O projeto está estruturado de forma simples para fins didáticos.

---

Projeto desenvolvido por Larissa Maria da Silva Santos 

---
