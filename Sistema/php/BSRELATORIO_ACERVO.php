<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$nomeBanco = "biblioteca";
$conn = new mysqli($servidor,$usuario,$senha,$nomeBanco);

if($conn->connect_error)
{
    die("Não foi possível estabelecer uma conexão!".$conn->connect_error);
}
$sql = "SELECT * FROM `livros` WHERE 1";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="../css/styleCadastro.css">
    <script src="../js/funcoes.js"></script>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="../css/login.css" rel="stylesheet">
    <title>Relatório de Acervo</title>
</head>
<body>

    <form class="form-signin" method="post" name="relatorioLivro" id="relatorioLivro">
        
        <div class="text-center mb-4">
            <img class="mb-4" src="../imagens/relatorio.png" alt="imagem de livro" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-bold">Relatório de Acervo</h1>
        </div>

        <table id="table" class="table table-bordered table-responsive">
            <thead class="thead-dark">
            <tr class="active text-truncate">
                <th>Código</th>
                <th>Nome</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Quantidade em estoque</th>
                <th>Emprestados</th>
                <th>Ativo</th>
            </tr>
            <?php
            $linha = $result->fetch_assoc();

            do{
                if($linha['ativo']==0){
                    $linha['ativo'] = "Não";
                }else{
                    $linha['ativo'] = "Sim";
                }
                ?>

                <tr class="active text-truncate">
                    <td><?=$linha['cod']?></td>
                    <td><?=$linha['nome']?></td>
                    <td><?=$linha['autor']?></td>
                    <td><?=$linha['editora']?></td>
                    <td><?=$linha['qtdestoque']?></td>
                    <td><?=$linha['emprestados']?></td>
                    <td><?=$linha['ativo']?></td>
                </tr>
                <?php
            } while ($linha = $result->fetch_assoc())

            ?>
        </table>

        <input class="form-control input-sm" type="button" name="Acervo" value="Gerar PDF" onclick="window.location.href = './RELATÓRIO_ACERVO_PDF.php'"><br><br>
        <a href="../html/BSRELATORIOS.html"><img src="../imagens/voltar.png" width="50px" height="35px"></a>
        <hr>
        <p class="mt-5 mb-3 text-muted text-center">Samir Costa & Wesley Xavier - 5TFC - 2024.1</p>
    </form>

</body>
</html>

