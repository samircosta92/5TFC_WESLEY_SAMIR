<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $matricula = $_GET["matricula"];
    $matrculaValida = 0;

    //verificando se não está vazio ou se tem caractere
    if ($matricula != "" and ctype_digit($matricula)) {
        $matrculaValida = 1;
    }

    //credenciais do banco
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $nomeBanco = "biblioteca";

    if($matrculaValida){
        $conn = new mysqli($servidor, $usuario, $senha, $nomeBanco);
        if ($conn->connect_error)
        {
            die("Não foi possível estabelecer uma conexão!" . $conn->connect_error);
        }

        $sqlVerificaAluno = "SELECT * FROM `alunos` WHERE `matricula` = '$matricula'";
        $resultAluno = $conn->query($sqlVerificaAluno);
        if($resultAluno->num_rows == 0){
            echo "Livro não encontrado";
        }
        $aluno = $resultAluno->fetch_assoc();

        if($aluno['situacao']==1){
            $result = "Aluno com empréstimo pendente! Impossível excluir.";
        }else{
            $sql = "UPDATE `alunos` set `ativo` = 0 where `matricula`= '$matricula'";
            $result = $conn->query($sql);
        }
        
    }
    
    echo($result);
    }

?>