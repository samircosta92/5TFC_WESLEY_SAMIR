<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $codigo = $_GET["codigo"];
    $isbn = $_GET["isbn"];
    $nome = $_GET["nome"];
    $autor = $_GET["autor"];
    $editora = $_GET["editora"];
    $quantidade = $_GET["quantidade"];

    $codigoValido = 0;
    $nomeValido = 0;
    $autorValido = 0;
    $editoraValido = 0;
    $quantidadeValido = 0;
    $isbnValido = 0;


    if (strlen($isbn) == 13 and ctype_digit($isbn))
    {
        $isbnValido = 1;
    }

    if ($codigo != "" and ctype_digit($codigo))
    {
        $codigoValido = 1;
    }

    if ($nome != "" and mb_check_encoding($nome, 'UTF-8'))
    {
        $nomeValido = 1;
    }

    if ($autor != "" and mb_check_encoding($autor, 'UTF-8'))
    {
        $autorValido = 1;
    }

    if ($editora != "" and mb_check_encoding($editora, 'UTF-8'))
    {
        $editoraValido = 1;
    }

    if ($quantidade != "" and ctype_digit($quantidade))
    {
        $quantidadeValido = 1;
    }


    if ($codigoValido==1 and $isbnValido==1 and $nomeValido==1 and $autorValido==1 and $editoraValido==1 and
        $quantidadeValido==1) {
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $nomeBanco = "biblioteca";

        $conn = new mysqli($servidor, $usuario, $senha, $nomeBanco);

        if ($conn->connect_error) {
            die("Não foi possível estabelecer uma conexão!" . $conn->connect_error);
        }


        $sql = "UPDATE `livros` SET `nome`='$nome',`autor`='$autor',
                       `editora`='$editora',`qtdestoque`='$quantidade' WHERE  `cod`='$codigo'";


        if ($conn->query($sql) === TRUE) {
            echo "Alteração feita com sucesso!";

        } else {

            echo "Erro ao alterar livro!";
        }


    }
    else
    {
        echo "Preencha os dados corretamente!";
        echo "<br>";

    }


}

?>





