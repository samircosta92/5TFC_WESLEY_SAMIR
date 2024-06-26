<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $codigo = $_GET["codigo"];
    $CodigoValido = 0;

    if ($codigo != "" and ctype_digit($codigo)) {
        $codigoValido = 1;
    }

    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $nomeBanco = "biblioteca";

    if ($codigoValido == 1)
    {
        $conn = new mysqli($servidor, $usuario, $senha, $nomeBanco);

        if ($conn->connect_error) {
            die("Não foi possível estabelecer uma conexão!" . $conn->connect_error);
        }
        $sql = "SELECT * FROM `alunos` WHERE `matricula`='$codigo'";
        $result = $conn->query($sql);

        if ($result->num_rows == 0)
        {
            echo json_encode("Não existe aluno com a matrícula correspondente!");
        }
        else{
            $linha = $result->fetch_assoc();

            $dados = array();

            $dados[0] = $linha["nome"];
            $dados[1] = $linha["matricula"];
            $dados[2] = $linha["email"];
            $dados[3] = $linha["telefone"];
            $dados[4] = $linha["curso"];

            $dados[5] = $linha["datanasc"];
            $data = new DateTime($dados[5]);
            //$dados[5] = $data->format('d/m/y');

            $dados[6] = $linha["link"];
            $dados[7] = $linha["ativo"];
            $dados[8] = $linha["situacao"];

            if($dados[7] == 1)
            {
                echo json_encode($dados);
            }
            else
            {
                echo json_encode("Aluno excluído anteriormente!");
            }

        }

    } else {
        echo "Digite uma matricula válida!";
    }

}
?>



