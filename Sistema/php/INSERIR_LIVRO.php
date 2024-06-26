<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    if (isset($_FILES['imagemUsuario']) && $_FILES['imagemUsuario']['error'] == 0) {
        $arquivoTmp = $_FILES['imagemUsuario']['tmp_name'];
        $nomeArquivo = $_FILES['imagemUsuario']['name'];
        $tamanhoArquivo = $_FILES['imagemUsuario']['size'];
        $tipoArquivo = $_FILES['imagemUsuario']['type'];
    
        // Caminho onde o arquivo será salvo
        $pastaUpload = "../Imagens/";

        // Cria um nome baseado no código do livro para evitar sobreposição
        $novoNomeArquivo = $pastaUpload . $_POST['cod'] . '.' . pathinfo($nomeArquivo, PATHINFO_EXTENSION);
    
        // Move o arquivo temporário para o diretório final
        if (move_uploaded_file($arquivoTmp, $novoNomeArquivo)) {
            
        } else {
            echo "Erro ao enviar arquivo.";
        }
    } else {
        echo "Erro no upload do arquivo.";
    }

    $codigo = $_POST["cod"];
    $isbn = $_POST["isbn"];
    $nome = $_POST["nome"];
    $autor = $_POST["autor"];
    $editora = $_POST["editora"];
    $quantidade = $_POST["qtd"];

    $codigoValido = 0;
    $isbnValido = 0;
    $nomeValido = 0;
    $autorValido = 0;
    $editoraValido = 0;
    $quantidadeValido = 0;

    if ($codigo != "" and ctype_digit($codigo))
    {
        $codigoValido = 1;
    }

    if (strlen("$isbn") == 13 and ctype_digit($isbn))
    {
        $isbnValido = 1;
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

        $sql = "SELECT * FROM `livros` WHERE `cod`='$codigo'";
        $result = $conn->query($sql);

        if ($result->num_rows == 0) {
            $sql = "INSERT INTO `livros`(`cod`, `isbn`, `nome`, `autor`, `editora`, `qtdestoque`, `link`)
            VALUES ('$codigo','$isbn','$nome','$autor','$editora','$quantidade','$novoNomeArquivo')";



            if ($conn->query($sql) === TRUE) {
                echo "Livro,$nome, inserido com sucesso!";

            } else {

                echo "Erro ao inserir livro!";
            }
        } else {
            echo "Livro já existente!";
        }

    }
    else
    {
        echo "Preencha os dados corretamente!";
        echo "<br>";

    }
}
?>