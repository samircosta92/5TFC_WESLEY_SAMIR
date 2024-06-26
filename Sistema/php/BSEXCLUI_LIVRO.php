<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $codigo = $_GET["cod"];
    $CodigoValido = 0;

    if ($codigo != "" and ctype_digit($codigo)) {
        $CodigoValido = 1;
    }


    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $nomeBanco = "biblioteca";

    if ($CodigoValido)
    {
        $conn = new mysqli($servidor, $usuario, $senha, $nomeBanco);

        if ($conn->connect_error)
        {
            die("Não foi possível estabelecer uma conexão!" . $conn->connect_error);
        }
        $sqlLivro = "SELECT * FROM `livros` WHERE `cod` = '$codigo'";
        $resultLivro = $conn->query($sqlLivro);
        if($resultLivro->num_rows == 0){
            echo "Livro não encontrado";
        }

        $livro = $resultLivro->fetch_assoc();

        if($livro['emprestados']==1){
            $result = "O livro está emprestado! Impossível excluir";
        }else{
            $sql = "UPDATE `livros` set `ativo` = 0 where `cod`= '$codigo'";
            $result = $conn->query($sql);
        }

        
    }
    echo($result);
}
?>