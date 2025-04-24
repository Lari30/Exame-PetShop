CREATE DATABASE petshop;

USE petshop;

CREATE TABLE interessados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cpf VARCHAR(14),
  nome VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(100)
);

CREATE TABLE filhotes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  especie VARCHAR(50),
  raca VARCHAR(50)
);
