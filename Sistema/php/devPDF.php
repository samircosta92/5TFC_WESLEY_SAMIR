<?php 
    $codEmp = $_GET["codEmp"];
    $mat = $_GET["matricula"];
    $codLivro = $_GET["codLivro"];
    $dataEMP = $_GET["dataEmp"];
    $dataDEV = $_GET["dataDev"];
    $multa = $_GET["multa"]; 

    // Formatar as datas
    $data1 = new DateTime($dataEMP);
    $data2 = new DateTime($dataDEV);

    $data1Str = $data1->format('d/m/y');
    $data2Str = $data2->format('d/m/y');

    require_once "../dompdf/autoload.inc.php";
    use Dompdf\Dompdf;
    $pdf = new Dompdf();

    $html = "
    <html>
    <head>
        <title>Recibo de devolução</title>
        <style>
            .borda {
                margin: 30px;
                border: 5px solid black;
                width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            .topo {
                border-bottom: 5px solid black;
                height: 110px;
                margin: 5px;
                margin-left: auto;
                margin-right: auto;
            }
            .dados {
                border-collapse: collapse;
                width: 570px;
                margin: 15px;
            }
            tr {
                border: 2px solid #000000;
            }
            .observacoes {
                border: 5px solid #FFFFFF;
                height: 100px;
                margin: 15px;
            }
        </style>
    </head>
    <body>
        <div class='borda'>
            <div class='topo'>
                <figure>
                    <figcaption style='text-align: center'>Biblioteca Universitária</figcaption>
                    <p style='text-align: center'>Recibo de empréstimo</p>
                    <p style='text-align: center'>Data de emissão: $data1Str</p>
                </figure>   
            </div>
            <table class='dados'>
                <tr>
                    <th>Código do Empréstimo:</th>
                    <th>$codEmp</th>
                </tr>
                <tr>
                    <th>Matrícula do Aluno:</th>
                    <th>$mat</th>
                </tr>
                <tr>
                    <th>Código do Livro:</th>
                    <th>$codLivro</th>
                </tr>
                <tr>
                    <th>Data de Empréstimo:</th>
                    <th>$data1Str</th>
                </tr>
                <tr>
                    <th>Data limite para Devolução:</th>
                    <th>$data2Str</th>
                </tr>
                <tr>
                    <th>Valor da Multa:</th>
                    <th>R$$multa,00</th>
                </tr>           
            </table>
            <div class='observacoes'>
                <p>Obs: Caso a devolução seja feita além do prazo, o aluno fica ciente de que estará sujeito a multas!</p>
            </div>
        </div>
    </body>
    </html>";

    ob_end_clean();

    // Para depuração: imprimir o HTML gerado
    //echo $html;

    $pdf->loadHtml($html);
    //$pdf->setPaper('A4', 'landscape');
    $pdf->render();
    $pdf->stream("Devolução.pdf", array("Attachment" => false));
?>
