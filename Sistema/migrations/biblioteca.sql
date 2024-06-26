-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Jun-2024 às 18:19
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alunos`
--

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `matricula` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `telefone` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `curso` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `datanasc` date NOT NULL,
  `situacao` tinyint(1) NOT NULL,
  `link` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `alunos`
--

INSERT INTO `alunos` (`id`, `nome`, `matricula`, `email`, `telefone`, `curso`, `datanasc`, `situacao`, `link`, `ativo`) VALUES
(14, 'jailson silva santos', '1920478300010', 'jailsonsantos@gmail.com', '(21)99196-6443', 'Analise e desenvolvimento', '2024-04-03', 0, '../a_AlocacaoDeProfessor.jpg', 1),
(17, 'Kevin Lemos', '1920478300050', 'KevinL@gmail.com', '(21)12121-2121', 'Medicina Veterinária', '2024-04-04', 0, '../Imagens/1920478300050.jpg', 0),
(18, 'Cebolinha feliz da vida', '1920478300060', 'cebolinha@gmail.com', '(22)22222-2222', 'Turma da mônica avançado', '2023-07-05', 1, '../Imagens/1920478300060.jpg', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `autor`
--

CREATE TABLE `autor` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `editora`
--

CREATE TABLE `editora` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `emprestimo`
--

CREATE TABLE `emprestimo` (
  `idEmp` int(11) NOT NULL,
  `matAluno` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `codLivro` int(11) NOT NULL,
  `dataEmp` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `dataDev` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `Situacao` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `emprestimo`
--

INSERT INTO `emprestimo` (`idEmp`, `matAluno`, `codLivro`, `dataEmp`, `dataDev`, `Situacao`) VALUES
(22, '1920478300008', 11111, '22-06-20', '22-06-27', 1),
(23, '1920478300028', 12222, '22-06-10', '22-06-17', 1),
(24, '1920478300008', 34567, '22-06-20', '22-06-27', 1),
(25, '1920478300060', 34567, '24-05-25', '24-06-01', 1),
(26, '1920478300050', 34567, '24-06-01', '24-06-08', 1),
(27, '1920478300010', 22345, '24-06-01', '24-06-08', 1),
(28, '1920478300011', 11111, '24-06-01', '24-06-08', 1),
(29, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(30, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(31, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(32, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(33, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(34, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(35, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(36, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(37, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(38, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(39, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(40, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(41, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(42, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(43, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(44, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(45, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(46, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(47, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(48, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(49, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(50, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(51, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(52, '1920478300050', 34567, '24-06-02', '24-06-09', 1),
(53, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(54, '1920478300060', 34567, '24-06-02', '24-06-09', 1),
(55, '1920478300060', 22345, '24-06-22', '24-06-29', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

CREATE TABLE `livros` (
  `id` int(11) NOT NULL,
  `cod` int(11) NOT NULL,
  `isbn` varchar(13) COLLATE latin1_general_ci NOT NULL,
  `nome` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `autor` varchar(200) COLLATE latin1_general_ci NOT NULL,
  `editora` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `qtdestoque` int(255) NOT NULL,
  `link` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `emprestados` int(255) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`id`, `cod`, `isbn`, `nome`, `autor`, `editora`, `qtdestoque`, `link`, `emprestados`, `ativo`) VALUES
(6, 34567, '1234567890121', 'O homem que calculava', 'Malba Tahan', 'Records', 1, '../imagens/34567.jpg', 0, 0),
(8, 22345, '1234567890123', 'A divina comédia', 'Dante Alighieri', 'Record', 6, '../imagens/22345.jpg', 1, 1),
(9, 22346, '1234567890124', 'Hamlet', 'William Shakespeare', 'Record', 8, '../imagens/22346.jpg', 0, 1),
(10, 22347, '1234567890125', 'Dom Quixote', 'Miguel de Cervantes', 'Record', 10, '../imagens/22347.jpg', 0, 1),
(13, 22222, '2222222222222', 'O noviço', 'Martins Pena', 'Folhas', 8, '../Imagens/22222.jpg', 0, 0),
(16, 33333, '0009788580579', 'Como mentir com estatística', 'Darrell Huff', 'Irving Geis', 1, '../Imagens/33333.png', 0, 1),
(17, 33344, '1128791273412', 'WESLEY TESTE', 'Darrell Huff', 'Irving Geis', 1, '../Imagens/33344.jpg', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `usuario` int(11) NOT NULL,
  `nome` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `senha` varchar(30) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`usuario`, `nome`, `email`, `senha`) VALUES
(1, 'Wesley nathan xavier da silva', 'Wesleynathan18855@gmail.com', '1234567'),
(2, 'wesleynathan', 'wesleynathan185@gmail.com', '1234567'),
(3, 'Wesley99', 'wesley99@gmail.com', '12345'),
(4, 'samir70', 'samito70@gmail.com', '12345'),
(5, 'Gerson2000', 'gersin2000@gmail.com', '12345'),
(6, 'admin', 'admin@admin.com', '12345'),
(7, 'fredo', 'fredo@gmail.com', '12345');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `editora`
--
ALTER TABLE `editora`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD PRIMARY KEY (`idEmp`);

--
-- Índices para tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `autor`
--
ALTER TABLE `autor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `editora`
--
ALTER TABLE `editora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  MODIFY `idEmp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
