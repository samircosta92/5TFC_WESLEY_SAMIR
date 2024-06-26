<?php
    $mat = $_GET["mat"];

    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $nomeBanco = "biblioteca";

    $conn = new mysqli($servidor, $usuario, $senha, $nomeBanco);

    if ($conn->connect_error) {
        die("Não foi possível estabelecer uma conexão!" . $conn->connect_error);
    }

    $sql = "SELECT * FROM `emprestimo` WHERE `matAluno`='$mat' AND `Situacao`=0";
    $result = $conn->query($sql);
    $linha = $result->fetch_assoc();

    if (!$linha) {
        die("Nenhum empréstimo encontrado para a matrícula fornecida.");
    }

    $codLivro = $linha["codLivro"];
    $codEmp = $linha["idEmp"];
    $mat = $linha["matAluno"];
    $dataEmp = $linha["dataEmp"];
    $dataDev = $linha["dataDev"];


    //calculando se tem multa
    $data1 = new DateTime($linha["dataEmp"]);
    $data2 = new DateTime();
    $data3 = new DateTime($linha["dataDev"]);

    $intervalo = $data1->diff($data2);

    //mudando para formato string
    $data1Str = $data1->format('d/m/y');
    $data2Str = $data2->format('d/m/y');
    $data3Str = $data3->format('d/m/y');

    $interv = (int)$intervalo->format('%a');
    $mult = 0;

    if ($interv > 7) {
        $mult = $interv - 7;
    }

    $multa = $mult * 2;

    //buscando numero de emprestimos feitos nesse livro
    $sql = "SELECT * FROM `livros` WHERE `cod`='$codLivro'";
    $result = $conn->query($sql);
    $linha = $result->fetch_assoc();

    if (!$linha) {
        die("Livro não encontrado.");
    }

    $qtd = $linha["emprestados"];
    //diminuindo 1
    $qtd = $qtd - 1;

    //Updates
    $sql = "UPDATE `livros` SET `emprestados`='$qtd' WHERE `cod`='$codLivro'";
    if ($conn->query($sql) === FALSE) {
        die("Erro ao atualizar livro: " . $conn->error);
    }

    $sql = "UPDATE `alunos` SET `situacao`='0' WHERE `matricula`='$mat'";
    if ($conn->query($sql) === FALSE) {
        die("Erro ao atualizar aluno: " . $conn->error);
    }

    $sql = "UPDATE `emprestimo` SET `Situacao`='1' WHERE `idEmp`='$codEmp'";
    if ($conn->query($sql) === FALSE) {
        die("Erro ao atualizar empréstimo: " . $conn->error);
    }

    $array = array();
    $array["codEmp"] = $codEmp;
    $array["codLivro"] = $codLivro;
    $array["matricula"] = $mat;
    $array["dataEmp"] = $dataEmp;
    $array["dataDev"] = $dataDev;
    $array["multa"] = $multa;

    echo json_encode($array);
?>
