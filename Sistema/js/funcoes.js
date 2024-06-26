//INSERIR LIVRO

function enviaForm() {
    let form = document.getElementById("formLivro");
    let cod = document.getElementById("cod");
    let nome = document.getElementById("nome");
    let autor = document.getElementById("autor");
    let editora = document.getElementById("editora");
    let qtd = document.getElementById("qtd");
    let img = document.getElementById("imagemUsuario");
    let isbn = document.getElementById("isbn");
    //campo do nome do arquivo
    let imgUpload = "../Imagens/" + cod.value + "." + img.value.split('.').pop();

    var resposta = document.getElementById("respGeral");
    resposta.style.display = "none";

    erro1 = validaCodigo(cod);
    erro2 = validaIsbn(isbn);
    erro3 = validaNome(nome);
    erro4 = validaAutor(autor);
    erro5 = validaEditora(editora);
    erro6 = validaQtd(qtd);
    erro7 = validaUploadImagem();

    erroForm = erro1+erro2+erro3+erro4+erro5+erro6+erro7;


    if (erroForm == 0) {
        let formData = new FormData(form);
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector('input[name=cod]').value = "";
                var respcod  = document.getElementById("respCod");
                respcod.style.display = "none";
                document.querySelector('input[name=isbn]').value = "";
                var respisbn = document.getElementById("respIsbn");
                respisbn.style.display = "none";
                document.querySelector('input[name=nome]').value = "";
                var respnome = document.getElementById("respNome");
                respnome.style.display = "none";
                document.querySelector('input[name=autor]').value = "";
                var respAutor = document.getElementById("respAutor");
                respAutor.style.display = "none";
                document.querySelector('input[name=editora]').value = "";
                var respEditora = document.getElementById("respEditora");
                respEditora.style.display = "none";
                document.querySelector('input[name=qtd]').value = "";
                var respQtd = document.getElementById("respQtd");
                respQtd.style.display = "none";
                document.querySelector('input[name=imagemUsuario]').value = "";
                var respfile = document.getElementById("respFile");
                respfile.style.display = "none";
                var respGeral = document.getElementById("respGeral");
                respGeral.style.display = "block";
                document.getElementById("respGeral").innerText = this.responseText;
            }

        }
        xmlhttp.open("POST", "http://localhost/5TFC_2024.1/php/INSERIR_LIVRO.php",true);
        xmlhttp.send(formData);

    }else{
        if(erro1){
            var respcod = document.getElementById("respCod");
            respcod.style.display = "block";
            respcod.innerHTML = "Codigo inválido!"
        }else{
            var respcod  = document.getElementById("respCod");
            respcod.style.display = "none";
        }
        if(erro2){
            var respisbn = document.getElementById("respIsbn");
            respisbn.style.display = "block";
            respisbn.innerHTML = "Isbn inválido!"
        }else{
            var respisbn = document.getElementById("respIsbn");
            respisbn.style.display = "none";
        }
        if(erro3){
            var respnome = document.getElementById("respNome");
            respnome.style.display = "block";
            respnome.innerHTML = "Nome inválido!"
        }else{
            var respnome = document.getElementById("respNome");
            respnome.style.display = "none";
        }
        if(erro4){
            var respAutor = document.getElementById("respAutor");
            respAutor.style.display = "block";
            respAutor.innerHTML = "Autor inválido!"
        }else{
            var respAutor = document.getElementById("respAutor");
            respAutor.style.display = "none";
        }
        if(erro5){
            console.log("aqui1");
            var respEditora = document.getElementById("respEditora");
            respEditora.style.display = "block";
            respEditora.innerHTML = "Editora inválida!"
        }else{
            console.log("aqui2");
            var respEditora = document.getElementById("respEditora");
            respEditora.style.display = "none";
        }
        if(erro6){
            var respQtd = document.getElementById("respQtd");
            respQtd.style.display = "block";
            respQtd.innerHTML = "Quantidade inválida!"
        }else{
            var respQtd = document.getElementById("respQtd");
            respQtd.style.display = "none";
        }
        if(erro7){
            var respfile = document.getElementById("respFile");
            respfile.style.display = "block";
            respfile.innerHTML = "Imagem inválida!";
        }else{
            var respfile = document.getElementById("respFile");
            respfile.style.display = "none";
        }
    }
}

function completalink2()
{

    if(document.getElementById('mat').value.length != 13){

        document.getElementById("resposta").innerHTML = "Matrícula Inválida!";
    }else{
        document.getElementById("resposta").innerHTML = "";
        document.querySelector('input[name= img]').value= "";
        document.querySelector('input[name= img]').value+= "../imagens/" + document.getElementById("mat").value +".jpg";
    }
}

function completalink()
{

    if(document.getElementById('cod').value.length > 5){
        document.getElementById("resposta").innerHTML = "Código Inválido!";
    }else{
        document.getElementById("resposta").innerHTML = "";
        document.querySelector('input[name= img]').value= "";
        document.querySelector('input[name= img]').value+= "../imagens/" + document.getElementById("cod").value +".jpg";
    }
}

//função valida ISBN
function validaIsbn (isbn){
    let erroIsbn = 0

    if(isbn.value.length != 13){
        erroIsbn = 1;
        console.log(isbn);
    }

    if(!isNumber(isbn.value)){
        erroIsbn=1;
        console.log("aqui2");
    }

    return erroIsbn;
}

//função que verifica se a string só tem numeros
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//função valida codigo
function validaCodigo(cod)
{
    let erroCod = 0;
    if(cod.value.length !=5) {
        erroCod = 1;
    }
    return(erroCod);
}

//função valida nome
function validaNome(nome)
{
    let erroNome = 0;
    if(nome.value == "")
    {
        console.log("Nome vazio");
        erroNome = 1;
        //document.getElementById("resposta").innerHTML+= "Nome inválido!<br>";
    }
    return(erroNome);
}

//função valida senha

function validaSenha(senha)
{
    let erroSenha = 0;
    if(senha.value == "")
    {
        console.log("Senha vazia    ");
        erroSenha = 1;
    }
    return(erroSenha);
}

//função valida autor
function validaAutor(autor)
{
    let erroAutor = 0;
    if(autor.value == "")
    {
        erroAutor = 1;
    }
    return(erroAutor);
}

//função valida editora
function validaEditora(Editora)
{
    let erroEditora = 0;
    if(editora.value == "")
    {
        erroEditora = 1;
    }
    return(erroEditora);
}

//função valida quantidade
function validaQtd(qtd)
{
    let erroQtd = 0;
    if(qtd.value == "") {
        erroQtd = 1;
    }
    return(erroQtd);
}

//função valida link de imagem
function validaLink(img)
{
    let erroLink = 0;
    if(img.value == "")
    {
        erroLink = 1;
        document.getElementById("resposta").innerHTML+= "Link inválido!<br>";
    }
    return(erroLink);
}

//função valida campo de upload de imagem
function validaImagem(imagemUsuario)
{
    let erroLink = 0;
    if(!imagemUsuario)
    {
        erroLink = 1;
    }
    return(erroLink);
}

//função valida campo de upload da imagem
function validaUploadImagem() {
    var input = document.getElementById('imagemUsuario');
    if (input.files.length > 0) {
        return 0;
    } else {
        return 1;
    }
}


//REMOVER LIVRO(Verificações de campo)
function enviaForm2() {
    let objLivro = document.getElementById("formLivro");
    let cod = document.getElementById("cod");

    var resposta = document.getElementById("resposta2");
    resposta.style.display = "none";

    erro = validaCodigo(cod);


    if (erro == 0) {
        console.log("1-Codigo valido");
        var tabela = document.getElementById('table');
            if(tabela.rows.length > 1){
                tabela.deleteRow(1);
            }
        var resp = document.getElementById('resposta');
        resp.style.display = 'none';
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {


                if(JSON.parse(this.responseText) != "Não existe livro com o código correspondente!" &&
                JSON.parse(this.responseText) != "Livro excluído anteriormente!")
                {
                    console.log("2-Codigo Válido e existente");
                    let result = JSON.parse(this.responseText);
                    result[8] = trataCampoAtivo(result[8]);

                    var table = document.getElementById("table");

                    document.getElementById('resposta').innerHTML="";

                    var linha = document.createElement("tr");
                    var campo_cod = document.createElement("td");
                    var campo_isbn = document.createElement("td");
                    var campo_nome = document.createElement("td");
                    var campo_aut = document.createElement("td");
                    var campo_edit = document.createElement("td");
                    var campo_qtd = document.createElement("td");
                    var campo_ativo = document.createElement("td");
                    var campo_emprestados = document.createElement("td");
                    linha.classList.add("text-truncate");


                    var texto_cod = document.createTextNode(result[0]);
                    var texto_isbn = document.createTextNode(result[1]);
                    var texto_nome = document.createTextNode(result[2]);
                    var texto_aut = document.createTextNode(result[3]);
                    var texto_edit = document.createTextNode(result[4]);
                    var texto_qtd = document.createTextNode(result[5]);
                    var texto_emprestados = document.createTextNode(result[7]);
                    var texto_ativo = document.createTextNode(result[8]);

                    campo_cod.appendChild(texto_cod);
                    campo_isbn.appendChild(texto_isbn);
                    campo_nome.appendChild(texto_nome);
                    campo_aut.appendChild(texto_aut);
                    campo_edit.appendChild(texto_edit);
                    campo_qtd.appendChild(texto_qtd);
                    campo_emprestados.appendChild(texto_emprestados);
                    campo_ativo.appendChild(texto_ativo);

                    linha.appendChild(campo_cod);
                    linha.appendChild(campo_isbn);
                    linha.appendChild(campo_nome);
                    linha.appendChild(campo_aut);
                    linha.appendChild(campo_edit);
                    linha.appendChild(campo_qtd);
                    linha.appendChild(campo_emprestados);
                    linha.appendChild(campo_ativo);


                    table.appendChild(linha);

                    var form = document.getElementById("formLivro");    
                    var botao = document.getElementById("exclui");
                    botao.disabled = false;

                }
                else
                if(JSON.parse(this.responseText) == "Livro excluído anteriormente!")
                {
                    console.log("teste");
                    document.getElementById("resposta").innerHTML= JSON.parse(this.responseText);
                    var resp = document.getElementById("resposta");
                    resp.style.display = 'block';
                    resp.innerHTML = JSON.parse(this.responseText);
                    botao = document.getElementById("exclui");
                    botao.classList.add('disabled');
                    botao.disabled = true;
                }
                else
                {
                    console.log("3-Codigo valido e não correspondente");
                    document.getElementById("resposta").innerHTML= JSON.parse(this.responseText);
                    var resp = document.getElementById("resposta");
                    resp.style.display = 'block';
                    resp.innerHTML = JSON.parse(this.responseText);
                    botao = document.getElementById("exclui");
                    botao.classList.add('disabled');
                    botao.disabled = true;
                }


            }

        }


        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_LIVROS.php?codigo=" + objLivro.cod.value, true);
        xmlhttp.send();
    }else{
        console.log("4-Código invalido");
        var tabela = document.getElementById('table');
            if(tabela.rows.length > 1){
                tabela.deleteRow(1);
            }
        var botao = document.getElementById("exclui");
        botao.classList.add('disabled');
        botao.disabled = true;

        var resp = document.getElementById("resposta");
        resp.style.display = 'block';
        resp.innerHTML ="Código Inválido";
    }

    function validaCodigo(cod)
    {
        let erroCod = 0;
        if(cod.value.length !=5) {
            document.getElementById("resposta").innerHTML = "Código Invalido!<br>";
            erroCod = 1;
        }
        return(erroCod);
    }

}

function trataCampoAtivo(ativo){
    if(ativo == 1){
        return "Sim";
    }else{
        return "Não";
    }
}

//FUNÇÃO PARA EXCLUIR LIVRO
function excluiLivro(){
    var cod = document.getElementById("cod").value;
    console.log(cod);

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText != "O livro está emprestado! Impossível excluir" ){
                console.log(this.responseText);
                console.log("1-Livro Removido com sucesso");
                var resp = document.getElementById("resposta2");
                    resp.style.display = 'block';
                    resp.innerHTML = "Livro excluído com Sucesso";
                    botao = document.getElementById("exclui");
                    botao.classList.add('disabled');
                    botao.disabled = true;
            }else{
                var resp = document.getElementById("resposta");
                    resp.style.display = 'block';
                    resp.innerHTML = "Não foi possovel concluir a exclusão! Tente novamente!";
                    resp.innerHTML= this.responseText;
            }
        }
    }
    xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BSEXCLUI_LIVRO.php?cod=" + cod, true);
    xmlhttp.send();
}

//ALTERAR LIVRO

function buscadados() {
    let objLivro = document.getElementById("formLivro");
    let cod = document.getElementById("cod1");

    var resp2 = document.getElementById("resposta2");
    resp2.style.display = "none";

    erro = validaCodigo(cod);

    if (erro == 0) {
        console.log("Campo válido");
        let xmlhttp = new XMLHttpRequest();
        console.log(this.readyState);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                if (JSON.parse(this.responseText) != "Não existe livro com o código correspondente!" &&
                JSON.parse(this.responseText) != "Livro excluído anteriormente!")
                {

                    console.log("Livro encontrado com sucesso");
                    var resp = document.getElementById("resposta");
                    resp.style.display = "none";

                    let result = JSON.parse(this.responseText);


                    document.querySelector('input[name=cod]').value = result[0];
                    document.querySelector('input[name=isbn]').value = result[1];
                    document.querySelector('input[name=nome]').value = result[2];
                    document.querySelector('input[name=autor]').value = result[3];
                    document.querySelector('input[name=editora]').value = result[4];
                    document.querySelector('input[name=qtd]').value = result[5];
                    //document.querySelector('input[name=img]').value = result[6];
                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.className = ''; // Remove todas as classes
                    botaoAlterar.classList.add('btn', 'btn-lg', 'btn-danger', 'btn-block'); // Adiciona novamente apenas as classes necessárias
                    botaoAlterar.disabled = false;

                }
                else
                if (JSON.parse(this.responseText) == "Livro excluído anteriormente!")
                {
                    console.log("teste");
                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.classList.add('disabled'); // Adiciona novamente apenas as classes necessárias
                    document.querySelector('input[name=cod]').value = "";
                    document.querySelector('input[name=isbn]').value = "";
                    document.querySelector('input[name=nome]').value = "";
                    document.querySelector('input[name=autor]').value = "";
                    document.querySelector('input[name=editora]').value = "";
                    document.querySelector('input[name=qtd]').value = "";
                    //document.querySelector('input[name=img]').value = "";
                    var resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                }
                else
                {
                    console.log("Livro não encontrado com esse codigo");
                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.classList.add('disabled'); // Adiciona novamente apenas as classes necessárias
                    document.querySelector('input[name=cod]').value = "";
                    document.querySelector('input[name=isbn]').value = "";
                    document.querySelector('input[name=nome]').value = "";
                    document.querySelector('input[name=autor]').value = "";
                    document.querySelector('input[name=editora]').value = "";
                    document.querySelector('input[name=qtd]').value = "";
                    //document.querySelector('input[name=img]').value = "";
                    var resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                }
            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_LIVROS.php?codigo=" + objLivro.cod1.value, true);
        xmlhttp.send();
    }else{
        console.log("Campos inválidos");
        document.querySelector('input[name=cod]').value = "";
        document.querySelector('input[name=isbn]').value = "";
        document.querySelector('input[name=nome]').value = "";
        document.querySelector('input[name=autor]').value = "";
        document.querySelector('input[name=editora]').value = "";
        document.querySelector('input[name=qtd]').value = "";
        var resp = document.getElementById("resposta");
        resp.style.display = "block";
        resp.innerHTML = "Código inválido";
    }

}

function enviaForm3() {
    let objLivro = document.getElementById("formLivro");
    let cod = document.getElementById("cod");
    let isbn = document.getElementById("isbn");
    let nome = document.getElementById("nome");
    let autor = document.getElementById("autor");
    let editora = document.getElementById("editora");
    let qtd = document.getElementById("qtd");

    var resp2 = document.getElementById("resposta2");
    resp2.style.display = "none";

    let erro2 = validaNome(nome);
    let erro3 = validaAutor(autor);
    let erro4= validaEditora(editora);
    let erro5 = validaQtd(qtd);

    let erroForm = erro2+erro3+erro4+erro5;

    if (erroForm == 0) {
        console.log("campos validos");
        var respnome = document.getElementById("respnome");
        respnome.style.display = "none";
        var respautor = document.getElementById("respautor");
        respautor.style.display = "none";
        var respeditora = document.getElementById("respeditora");
        respeditora.style.display = "none";
        var respqtd = document.getElementById("respqtd");
        respqtd.style.display = "none";

        let xmlhttp = new XMLHttpRequest();
        console.log(this.readyState);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText!= "Erro ao alterar livro!"){
                    console.log(this.responseText);
                    var resp2 = document.getElementById("resposta2");
                    resp2.style.display = "block";
                    resp2.innerText = "Alteração feita com sucesso!";

                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.classList.add('disabled');
                }else{
                    console.log(this.responseText);
                    var resp2 = document.getElementById("resposta2");
                    resp2.style.display = "block";
                    resp2.innerText = "Erro ao alterar livro!   ";
                }
                
            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/CONFIRMA_ALTERAÇÃO.php?codigo="+ objLivro.cod.value 
        + "&nome=" + objLivro.nome.value 
        + "&autor=" + objLivro.autor.value 
        + "&editora=" + objLivro.editora.value 
        + "&quantidade=" + objLivro.qtd.value 
        + "&isbn=" + objLivro.isbn.value ,true);
        xmlhttp.send();

    }else{
        console.log("Campos inválidos");
        if(erro2){
            var respnome = document.getElementById("respnome");
            respnome.style.display = "block";
            respnome.innerHTML = "Nome inválido"
        }else{
            var respnome = document.getElementById("respnome");
            respnome.style.display = "none";
        }
        if(erro3){
            var respautor = document.getElementById("respautor");
            respautor.style.display = "block";
            respautor.innerHTML = "Autor inválido"
        }else{
            var respautor = document.getElementById("respautor");
            respautor.style.display = "none";
        }
        if(erro4){
            var respeditora = document.getElementById("respeditora");
            respeditora.style.display = "block";
            respeditora.innerHTML = "Editora inválida";
        }else{
            var respeditora = document.getElementById("respeditora");
            respeditora.style.display = "none";
        }
        if(erro5){
            var respqtd = document.getElementById("respqtd");
            respqtd.style.display = "block";
            respqtd.innerHTML = "Quantidade inválida"
        }else{
            var respqtd = document.getElementById("respqtd");
            respqtd.style.display = "none";
        }
    }
}

//BUSCAR LIVRO

function enviaForm4() {
    let objLivro = document.getElementById("formLivro");
    let cod = document.getElementById("cod");

    erro = validaCodigo(cod);

    if (erro == 0) {

        var tabela = document.getElementById("table");
        var linhas = tabela.getElementsByTagName('tr');

        // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
        if (linhas.length > 1) {
            // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
            linhas[1].remove();
        } else {
            console.log("Não há linhas de dados para remover.");
        }

        console.log("campos validos");
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                if (JSON.parse(this.responseText) != "Não existe livro com o código correspondente!" &&
                    JSON.parse(this.responseText) != "Livro excluído anteriormente!") {
                    console.log("campos validos e livro achado");
                    let resp = document.getElementById("resposta");
                    resp.style.display = 'none';

                    let result = JSON.parse(this.responseText);
                    result[8] = trataCampoAtivo(result[8]);
                    var table = document.getElementById("table")
                    var a = document.createElement('a');
                    var linkname = document.createTextNode(result[2]);
                    a.appendChild(linkname);
                    a.href = "https://www.google.com/search?q=" + result[2] + " " + result[3] ;
                    document.body.appendChild(a);

                    var linha = document.createElement("tr");
                    var campo_cod = document.createElement("td");
                    linha.setAttribute('id','linhaTable');
                    var campo_isbn = document.createElement("td");
                    var campo_nome = document.createElement("td");
                    var campo_aut = document.createElement("td");
                    var campo_edit = document.createElement("td");
                    var campo_qtd = document.createElement("td");
                    var campo_link = document.createElement("td");
                    var campo_ativo = document.createElement("td");
                    linha.classList.add("text-truncate");

                    var texto_cod = document.createTextNode(result[0]);
                    var texto_isbn = document.createTextNode(result[1]);
                    var texto_nome = document.createTextNode(result[2]);
                    var texto_aut = document.createTextNode(result[3]);
                    var texto_edit = document.createTextNode(result[4]);
                    var texto_qtd = document.createTextNode(result[5]);
                    var texto_ativo = document.createTextNode(result[8]);

                    campo_cod.appendChild(texto_cod);
                    campo_isbn.appendChild(texto_isbn);
                    campo_nome.appendChild(texto_nome);
                    campo_aut.appendChild(texto_aut);
                    campo_edit.appendChild(texto_edit);
                    campo_qtd.appendChild(texto_qtd);
                    campo_ativo.appendChild(texto_ativo);

                    linha.appendChild(campo_cod);
                    linha.appendChild(campo_isbn);
                    linha.appendChild(a)
                    linha.appendChild(campo_aut);
                    linha.appendChild(campo_edit);
                    linha.appendChild(campo_qtd);
                    linha.appendChild(campo_ativo);


                    table.appendChild(linha);

                    
                    var fig = document.getElementById("fig");
                    var img = document.getElementById("img");

                    img.src= result[6];
                    fig.appendChild(img);
                    fig.style.textAlign = 'center';
                    img.width = 150;
                    img.height = 250;


                }
                else
                if(JSON.parse(this.responseText) != "Livro excluído anteriormente!")
                {
                    console.log("teste");
                    let resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                    var tabela = document.getElementById("table");
                    var linhas = tabela.getElementsByTagName('tr');

                    // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
                    if (linhas.length > 1) {
                        // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
                        linhas[1].remove();
                    } else {
                        console.log("Não há linhas de dados para remover.");
                    }
                    let img = document.getElementById("img");
                    img.width = 0;
                    img.height=   0;
                }
                else
                {
                    console.log("campos validos mas livro não encontrado");
                    let resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                    var tabela = document.getElementById("table");
                    var linhas = tabela.getElementsByTagName('tr');

                    // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
                    if (linhas.length > 1) {
                        // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
                        linhas[1].remove();
                    } else {
                        console.log("Não há linhas de dados para remover.");
                    }
                    let img = document.getElementById("img");
                    img.width = 0;
                    img.height=   0;
                }


            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_LIVROS.php?codigo=" + objLivro.cod.value, true);
        xmlhttp.send();
    }else{
        console.log("campos invalidos");
        let resp = document.getElementById("resposta");
        resp.style.display = "block";
        resp.innerHTML = "Código Inválido!"
        var tabela = document.getElementById('table');
        tabela.deleteRow(1);
        let img = document.getElementById("img");
        img.width = 0;
        img.height=   0;
    }
}

//INSERIR ALUNO

function enviaForm5() {
    let form = document.getElementById("formAluno");
    let nome = document.getElementById("nome");
    let mat = document.getElementById("mat");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let curso = document.getElementById("curso");
    let datanasc = document.getElementById("datanasc");
    let img = document.getElementById("imagemUsuario");
    //campo do nome do arquivo
    let imgUpload = "../" + img.value.split('\\').pop();

    var resposta = document.getElementById("respostaOp");
    resposta.style.display = "none";
    

    console.log(imgUpload);
    erro1 = validaNome(nome);
    erro2 = validaMat(mat);
    erro3 = validaEmail(email);
    erro4= validaTel(tel);
    erro5 = validaCurso(curso);
    erro6 = validaData(datanasc);
    erro7 = validaUploadImagem();

    erroForm = erro1+erro2+erro3+erro4+erro5+erro6+erro7;

    if (erroForm == 0) {
        let formData = new FormData(form);
        let xmlhttp = new XMLHttpRequest();
        console.log("Campos validos");
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == "Aluno inserido com sucesso!"){
                
                console.log("1-Formulário valido e aluno inserido com sucesso");
                document.getElementById("nome").value = "";
                document.getElementById("respNome").style.display = "none";
                document.getElementById("mat").value = "";
                document.getElementById("respMat").style.display = "none";
                document.getElementById("email").value = "";
                document.getElementById("respEmail").style.display = "none";
                document.getElementById("tel").value = "";
                document.getElementById("respTel").style.display = "none";
                document.getElementById("curso").value = "";
                document.getElementById("respCurso").style.display = "none";
                document.getElementById("datanasc").value = "";
                document.getElementById("respDat").style.display = "none";
                document.getElementById("imagemUsuario").value = "";
                document.getElementById("respFile").style.display = "none";
                document.getElementById("respostaOp").style.display = "block";
                document.getElementById("respostaOp").innerText = this.responseText;

                }else{
                    document.getElementById("respostaOp").style.display = "block";
                    document.getElementById("respostaOp").innerText = this.responseText;
                }
                
                
            }

        }
        xmlhttp.open("POST", "http://localhost/5TFC_2024.1/php/INSERIR_ALUNO.php",true);
        xmlhttp.send(formData); 

    }else{
        if(erro1){
            var respnome = document.getElementById("respNome");
            respnome.style.display = "block";
            respnome.innerHTML = "Nome inválido!"
        }else{
            var respnome = document.getElementById("respNome");
            respnome.style.display = "none";
        }
        if(erro2){
            var respmat = document.getElementById("respMat");
            respmat.style.display = "block";
            respmat.innerHTML = "Matrícula inválida!"
        }else{
            var respmat = document.getElementById("respMat");
            respmat.style.display = "none";
        }
        if(erro3){
            var respemail = document.getElementById("respEmail");
            respemail.style.display = "block";
            respemail.innerHTML = "Email inválido!"
        }else{
            var respemail = document.getElementById("respEmail");
            respemail.style.display = "none";
        }
        if(erro4){
            var resptel = document.getElementById("respTel");
            resptel.style.display = "block";
            resptel.innerHTML = "Telefone inválido!"
        }else{
            var resptel = document.getElementById("respTel");
            resptel.style.display = "none";
        }
        if(erro5){
            var respcurso = document.getElementById("respCurso");
            respcurso.style.display = "block";
            respcurso.innerHTML = "Curso inválido!"
        }else{
            console.log("chegou!");
            var respcurso = document.getElementById("respCurso");
            respcurso.style.display = "none";
        }
        if(erro6){
            var respdat = document.getElementById("respDat");
            respdat.style.display = "block";
            respdat.innerHTML = "Data inválida!"
        }else{
            var respdat = document.getElementById("respDat");
            respdat.style.display = "none";
        }
        if(erro7){
            var respfile = document.getElementById("respFile");
            respfile.style.display = "block";
            respfile.innerHTML = "Imagem inválida!"
        }else{
            var respfile = document.getElementById("respFile");
            respfile.style.display = "none";
        }

    }
}

function validaMat(mat)
{
    let erroMat = 0;
    if(mat.value.length !=13)
    {
        erroMat = 1;
        document.getElementById("mat").value = "";
        //document.getElementById("resposta").innerHTML= "Matrícula inválida!<br>";
    }
    return(erroMat);
}

function validaMatExc(mat)
{
    let erroMat = 0;
    if(mat.value.length !=13)
    {
        erroMat = 1;
        resp = document.getElementById("resposta");
        resp.style.display = 'block';
        resp.innerHTML= "Matrícula inválida!<br>";
        var tabela = document.getElementById('table');

        // Obter todas as linhas da tabela
        var linhas = tabela.querySelectorAll('tr');

        // Loop para remover cada linha que não é parte do cabeçalho
        for (var i = linhas.length - 1; i > 0; i--) {  // Começa de trás para frente para evitar problemas de índice
            if (!linhas[i].parentNode.classList.contains('thead-dark')) {  // Assegura que não está removendo o cabeçalho
                linhas[i].parentNode.removeChild(linhas[i]);
            }
        }
    }
    return(erroMat);
}



function validaEmail(email)
{
    let erroEmail = 0;
    if(email.value == "")
    {
        erroEmail = 1;
        //document.getElementById("resposta").innerHTML+= "Email inválido!<br>";
    }
    return(erroEmail);
}

function validaTel(tel){
    let erroTel = 0;
    if(tel.value == ""){
        erroTel = 1;
        //document.getElementById("resposta").innerHTML+= "Telefone inválido!<br>";
    }
    return(erroTel);
}

function validaCurso(curso){
    let erroCurso = 0;
    if(curso.value == ""){
        erroCurso = 1;
        //document.getElementById("resposta").innerHTML+= "Curso inválido!<br>";
    }
    return(erroCurso);
}

function validaData(data){
    let erroData = 0;
    if(data.value == ""){
        erroData = 1;
        //document.getElementById("resposta").innerHTML+= "Data inválida!<br>";
    }
    return(erroData);
}

function avisoTel(){
   let aviso =  document.getElementById('aviso');
    aviso.style.marginTop= '0px';
    aviso.style.fontSize = '10px';
    aviso.style.color = "red";
    aviso.innerHTML="Digite apenas numeros!<br><br>";
}

//EXCLUIR ALUNO
function enviaForm6() {
    let objAluno = document.getElementById("formAluno");
    let cod = document.getElementById("mat");

    var erro = validaMatExc(cod);
    console.log(erro);

    var resposta = document.getElementById("resposta2");
    resposta.style.display = "none";


    if (erro == 0) {
        var tabela = document.getElementById('table');
        console.log("matricula válida");
            if(tabela.rows.length > 1){
                tabela.deleteRow(1);
            }
        var resp = document.getElementById('resposta');
        resp.style.display = 'none';
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {


                if (JSON.parse(this.responseText) != "Não existe aluno com a matrícula correspondente!" &&
                    JSON.parse(this.responseText) != "Aluno excluído anteriormente!") {
                    console.log("matricula valida e existente");
                    let result = JSON.parse(this.responseText);
                    result[7] = trataCampoAtivo(result[7]);
                    var table = document.getElementById("table");
                    console.log("chegou2!");

                    document.getElementById('resposta').innerHTML = "";

                    var linha = document.createElement("tr");
                    var campo_cod = document.createElement("td");
                    var campo_nome = document.createElement("td");
                    var campo_aut = document.createElement("td");
                    var campo_edit = document.createElement("td");
                    var campo_qtd = document.createElement("td");
                    var campo_link = document.createElement("td");
                    var campo_ativo = document.createElement("td");
                    linha.classList.add("text-truncate");


                    var texto_cod = document.createTextNode(result[1]);
                    var texto_nome = document.createTextNode(result[0]);
                    var texto_aut = document.createTextNode(result[2]);
                    var texto_edit = document.createTextNode(result[3]);
                    var texto_qtd = document.createTextNode(result[4]);
                    var texto_link = document.createTextNode(result[5]);
                    var texto_ativo = document.createTextNode(result[7]);

                    campo_cod.appendChild(texto_cod);
                    campo_nome.appendChild(texto_nome);
                    campo_aut.appendChild(texto_aut);
                    campo_edit.appendChild(texto_edit);
                    campo_qtd.appendChild(texto_qtd);
                    campo_link.appendChild(texto_link);
                    campo_ativo.appendChild(texto_ativo);

                    linha.appendChild(campo_cod);
                    linha.appendChild(campo_nome)
                    linha.appendChild(campo_aut)
                    linha.appendChild(campo_edit);
                    linha.appendChild(campo_qtd)
                    linha.appendChild(campo_link);
                    linha.appendChild(campo_ativo);

                    table.appendChild(linha);

                    resp = document.getElementById("resposta");
                    

                    var form = document.getElementById("formAluno");
                    console.log("tornando visivel o excluir")
                    var botao = document.getElementById("exclui");
                    //botao.classList.remove('disabled');
                    botao.disabled = false;

                    /*var button = document.createElement('button');
                    button.className ='btn btn-lg btn-primary btn-block';
                    button.setAttribute('type', 'submit');
                    button.setAttribute('id', 'nome');
                    button.appendChild(document.createTextNode('Confirme a Exclusão'));
                    form.appendChild(button);
                    table.after(button); */


                } else
                if(JSON.parse(this.responseText) == "Aluno excluído anteriormente!")
                {
                    console.log("matricula valida mas inexistente");
                    var tabela = document.getElementById('table');

                    // Obter todas as linhas da tabela
                    var linhas = tabela.querySelectorAll('tr');

                    // Loop para remover cada linha que não é parte do cabeçalho
                    for (var i = linhas.length - 1; i > 0; i--) {  // Começa de trás para frente para evitar problemas de índice
                        if (!linhas[i].parentNode.classList.contains('thead-dark')) {  // Assegura que não está removendo o cabeçalho
                            linhas[i].parentNode.removeChild(linhas[i]);
                        }
                    }
                    var resp = document.getElementById("resposta");
                    resp.style.display = 'block';
                    resp.innerHTML = JSON.parse(this.responseText);
                    botao = document.getElementById("exclui");
                    botao.classList.add('disabled');
                    botao.disabled = true;
                }
                else
                {
                    console.log("matricula valida mas inexistente");
                    var tabela = document.getElementById('table');

                    // Obter todas as linhas da tabela
                    var linhas = tabela.querySelectorAll('tr');

                    // Loop para remover cada linha que não é parte do cabeçalho
                    for (var i = linhas.length - 1; i > 0; i--) {  // Começa de trás para frente para evitar problemas de índice
                        if (!linhas[i].parentNode.classList.contains('thead-dark')) {  // Assegura que não está removendo o cabeçalho
                            linhas[i].parentNode.removeChild(linhas[i]);
                        }
                    }
                    var resp = document.getElementById("resposta");
                    resp.style.display = 'block';
                    resp.innerHTML = JSON.parse(this.responseText);
                    botao = document.getElementById("exclui");
                    botao.classList.add('disabled');
                    botao.disabled = true;
                }


            }


        }
        console.log(objAluno.cod.value);
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_ALUNOS.php?codigo=" + objAluno.cod.value, true);
        xmlhttp.send();
    }else{
        console.log("Matricula invalida")
        botao = document.getElementById("exclui");
        botao.classList.add('disabled');
        botao.disabled = true;
    }
}

function excluiAluno(){
    var matricula = document.getElementById('mat').value;
    console.log(matricula);

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("resposta:",this.responseText);
            if(this.responseText != "Aluno com empréstimo pendente! Impossível excluir."){
                console.log("chegou1");
                var resp = document.getElementById("resposta2");
                    resp.style.display = 'block';
                    resp.innerHTML = "Aluno excluído com Sucesso";
                    botao = document.getElementById("exclui");
                    botao.classList.add('disabled');
                    botao.disabled = true;
            }else{
                var resp = document.getElementById("resposta");
                resp.style.display = 'block';
                resp.innerHTML = this.responseText;
            }
        }
    }
    xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BSEXCLUI_ALUNO.php?matricula=" + matricula, true);
    xmlhttp.send();
}






//BUSCAR ALUNO
function enviaForm7() {
    let objAluno = document.getElementById("formAluno");
    let cod = document.getElementById("cod");

    erro = validaMatExc(cod);


    if (erro == 0) {
        console.log("campos validos");
        var tabela = document.getElementById("table");
        var linhas = tabela.getElementsByTagName('tr');

        // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
        if (linhas.length > 1) {
            // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
            linhas[1].remove();
        } else {
            console.log("Não há linhas de dados para remover.");
        }
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {


                if (JSON.parse(this.responseText) != "Não existe aluno com a matrícula correspondente!" &&
                    JSON.parse(this.responseText) != "Aluno excluído anteriormente!")
                {
                    console.log("campos validos e aluno achado");
                    let resp = document.getElementById("resposta");
                    resp.style.display = 'none';

                    let result = JSON.parse(this.responseText);

                    result[7] = trataCampoAtivo(result[7]);
                    var table = document.getElementById("table")


                    var linha = document.createElement("tr");
                    var campo_mat = document.createElement("td");
                    var campo_nome = document.createElement("td");
                    var campo_email = document.createElement("td");
                    var campo_tel = document.createElement("td");
                    var campo_curso = document.createElement("td");
                    var campo_datanasc = document.createElement("td");
                    var campo_ativo = document.createElement("td");
                    linha.classList.add("text-truncate");

                    var texto_mat = document.createTextNode(result[1]);
                    var texto_nome = document.createTextNode(result[0]);
                    var texto_email = document.createTextNode(result[2]);
                    var texto_tel = document.createTextNode(result[3]);
                    var texto_curso = document.createTextNode(result[4]);
                    var texto_datanasc= document.createTextNode(result[5]);
                    var texto_ativo = document.createTextNode(result[7]);


                    campo_mat.appendChild(texto_mat);
                    campo_nome.appendChild(texto_nome);
                    campo_email.appendChild(texto_email);
                    campo_tel.appendChild(texto_tel);
                    campo_curso.appendChild(texto_curso);
                    campo_datanasc.appendChild(texto_datanasc);
                    campo_ativo.appendChild(texto_ativo);

                    linha.appendChild(campo_mat);
                    linha.appendChild(campo_nome);
                    linha.appendChild(campo_email);
                    linha.appendChild(campo_tel);
                    linha.appendChild(campo_curso);
                    linha.appendChild(campo_datanasc);
                    linha.appendChild(campo_ativo);

                    table.appendChild(linha);

                    var fig = document.getElementById("fig");
                    var img = document.getElementById("img");

                    img.width = "150";
                    img.height = "250";
                    img.src= result[6];
                    fig.appendChild(img);
                    fig.style.textAlign = 'center';



                }
                else
                if(JSON.parse(this.responseText) == "Não existe aluno com a matrícula correspondente!")
                {
                    console.log("campos validos mas aluno não encontrado");
                    let resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                    var tabela = document.getElementById("table");
                    var linhas = tabela.getElementsByTagName('tr');

                    // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
                    if (linhas.length > 1) {
                        // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
                        linhas[1].remove();
                    } else {
                        console.log("Não há linhas de dados para remover.");
                    }
                    let img = document.getElementById("img");
                    img.width = 0;
                    img.height=   0;
                }
                else
                {
                    console.log("campos validos mas aluno não encontrado");
                    let resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                    var tabela = document.getElementById("table");
                    var linhas = tabela.getElementsByTagName('tr');

                    // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
                    if (linhas.length > 1) {
                        // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
                        linhas[1].remove();
                    } else {
                        console.log("Não há linhas de dados para remover.");
                    }
                    let img = document.getElementById("img");
                    img.width = 0;
                    img.height=   0;
                }


            }

        }


        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_ALUNOS.php?codigo=" + objAluno.cod.value, true);
        xmlhttp.send();

    }else{
        console.log("campos invalidos");
        let resp = document.getElementById("resposta");
        resp.style.display = "block";
        resp.innerHTML = "Matrícula Inválida!"
        var tabela = document.getElementById("table");
        var linhas = tabela.getElementsByTagName('tr');

        // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
        if (linhas.length > 1) {
            // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
            linhas[1].remove();
        } else {
            console.log("Não há linhas de dados para remover.");
        }

        let img = document.getElementById("img");
        img.width = 0;
        img.height=   0;
    }
}


//ALTERAR ALUNO

function buscaAluno(str) {
    let objAluno = document.getElementById("formAluno");
    let cod = document.getElementById("mat1");

    var resp = document.getElementById("resposta2");
    resp.style.display = "none";

    erro = validaMat(cod);

    if (erro == 0) {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                if (JSON.parse(this.responseText) != "Não existe aluno com a matrícula correspondente!" &&
                    JSON.parse(this.responseText) != "Aluno excluído anteriormente!") {
                    var resp = document.getElementById("resposta");
                    resp.style.display = "none";


                    let result = JSON.parse(this.responseText);
                    console.log(result);//teste

                    document.querySelector('input[name=nome]').value = result[0];
                    document.querySelector('input[name=mat]').value = result[1];
                    document.querySelector('input[name=email]').value = result[2];
                    document.querySelector('input[name=telefone]').value = result[3];
                    document.querySelector('input[name=curso]').value = result[4];
                    document.querySelector('input[name=datanasc]').value = result[5];
                    //document.querySelector('input[name=link]').value = result[6];
                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.className = ''; // Remove todas as classes
                    botaoAlterar.classList.add('btn', 'btn-lg', 'btn-danger', 'btn-block'); // Adiciona novamente apenas as classes necessárias
                    botaoAlterar.disabled = false;

                }
                else
                if(JSON.parse(this.responseText) != "Aluno excluído anteriormente!")
                {
                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.classList.add('disabled'); // Adiciona novamente apenas as classes necessárias
                    document.querySelector('input[name=nome]').value = "";
                    document.querySelector('input[name=mat]').value = "";
                    document.querySelector('input[name=email]').value = "";
                    document.querySelector('input[name=telefone]').value = "";
                    document.querySelector('input[name=curso]').value = "";
                    document.querySelector('input[name=datanasc]').value = "";
                    var resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                }
                else
                {
                    var botaoAlterar = document.getElementById("botaoAlterar");
                    botaoAlterar.classList.add('disabled'); // Adiciona novamente apenas as classes necessárias
                    document.querySelector('input[name=nome]').value = "";
                    document.querySelector('input[name=mat]').value = "";
                    document.querySelector('input[name=email]').value = "";
                    document.querySelector('input[name=telefone]').value = "";
                    document.querySelector('input[name=curso]').value = "";
                    document.querySelector('input[name=datanasc]').value = "";
                    var resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                }
            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_ALUNOS.PHP?codigo=" + objAluno.mat1.value, true);
        xmlhttp.send();
    }else{
        var botaoAlterar = document.getElementById("botaoAlterar");
        botaoAlterar.classList.add('disabled');
        console.log("Matricula Inválida");
        document.querySelector('input[name=nome]').value = "";
        document.querySelector('input[name=mat]').value = "";
        document.querySelector('input[name=email]').value = "";
        document.querySelector('input[name=telefone]').value = "";
        document.querySelector('input[name=curso]').value = "";
        document.querySelector('input[name=datanasc]').value = "";
        let resp =  document.getElementById("resposta");
        resp.style.display = "block";
        resp.innerHTML = "Matrícula Inválida";
    }

}

function enviaForm8() {
    let objAluno = document.getElementById("formAluno");
    let mat = document.getElementById("mat");
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let curso = document.getElementById("curso");
    let data = document.getElementById("datanasc");

    erro1 = validaNome(nome);
    erro2 = validaMat(mat);
    erro3 = validaEmail(email);
    erro4= validaTel(telefone);
    erro5 = validaCurso(curso);
    erro6 = validaData(data);

    erroForm = erro1+erro2+erro3+erro4+erro5+erro6;

    if (erroForm == 0) {
        console.log("Campos válidos!");
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            console.log("pronto" + this.readyState );
            console.log("status"+this.status == 200);
            if (this.readyState == 4 && this.status == 200) {
                console.log(xmlhttp.responseText);
                document.querySelector('input[name=mat]').value = "";
                document.querySelector('input[name=nome]').value = "";
                document.querySelector('input[name=email]').value = "";
                document.querySelector('input[name=telefone]').value = "";
                document.querySelector('input[name=curso]').value = "";
                document.querySelector('input[name=datanasc]').value = "";

                var resp = document.getElementById("resposta2");
                resp.style.display = "block";
                resp.innerHTML = xmlhttp.responseText;
            }else{
                console.log("conexão falhou");
            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/CONFIRMA_ALTERAÇÃO_ALUNO.php?mat="+ objAluno.mat.value +
            "&nome=" + objAluno.nome.value + "&email=" + objAluno.email.value + "&telefone=" +
            objAluno.telefone.value + "&curso=" + objAluno.curso.value + "&data=" + objAluno.datanasc.value,true);
        xmlhttp.send();

    }else{
        console.log("Campos inválidos!");
        document.querySelector('input[name=mat]').value = "";
        document.querySelector('input[name=nome]').value = "";
        document.querySelector('input[name=email]').value = "";
        document.querySelector('input[name=telefone]').value = "";
        document.querySelector('input[name=curso]').value = "";
        document.querySelector('input[name=datanasc]').value = "";
        var resp = document.getElementById("resposta");
        resp.style.display = "block";
        resp.innerHTML = "Matrícula Inválida";
    }
}

function buscaAluno2() {
    let objAluno = document.getElementById("formAluno");
    let mat = document.getElementById("mat");

    erro = validaMat(mat);

    if (erro == 0) {
        console.log("Matricula Válida!");
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (JSON.parse(this.responseText) != "Não existe aluno com a matricula correspondente!") {
                    var resp = document.getElementById("resposta1");
                    resp.innerHTML = "";
                    resp.style.display = "none";

                    let result = JSON.parse(this.responseText);
                    console.log(result); //teste

                    document.querySelector('input[name=nomealuno]').value = result[0];
                    document.querySelector('input[name=curso]').value = result[1];
                    document.querySelector('input[name=sitaluno]').value = result[2];

                    var img = document.getElementById("img1");
                    if (img) {
                        img.width = 120;
                        img.height = 200;
                        img.src = result[3];
                    } else {
                        console.error('Elemento com ID img1 não encontrado');
                    }

                } else {
                    console.log("Matricula Válida mas não existente!");
                    var resp = document.getElementById("resposta1");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);
                    document.querySelector('input[name=nomealuno]').value = "";
                    document.querySelector('input[name=curso]').value = "";
                    document.querySelector('input[name=sitaluno]').value = "";
                    var img = document.getElementById('img1');
                    if (img) {
                        img.src = '';
                    } else {
                        console.error('Elemento com ID img1 não encontrado');
                    }
                }
            }
        };
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_ALUNOS_EMP.PHP?matricula=" + objAluno.mat.value, true);
        xmlhttp.send();
    } else {
        console.log("Matricula Inválida!");
        let resp = document.getElementById("resposta1");
        resp.style.display = "block";
        resp.innerHTML = "Matrícula Inválida!";
        document.querySelector('input[name=nomealuno]').value = "";
        document.querySelector('input[name=curso]').value = "";
        document.querySelector('input[name=sitaluno]').value = "";
        var img = document.getElementById('img1');
        if (img) {
            img.src = '';
        } else {
            console.error('Elemento com ID img1 não encontrado');
        }
    }
}


/*Busca dados do livro*/
function buscadados2(str){
    let objLivro = document.getElementById("formLivro");
    let cod = document.getElementById("cod");

    erro = validaCodigo(cod);

    if (erro == 0) {
        console.log("Codigo valido!");
        let xmlhttp = new XMLHttpRequest();
        console.log(this.readyState);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                if (JSON.parse(this.responseText) != "Não existe livro com o código correspondente!") {
                    var resp = document.getElementById("resposta2");
                    resp.innerHTML = "";
                    resp.style.display = "none";

                    let result = JSON.parse(this.responseText);
                    console.log(result);//teste

                    document.querySelector('input[name=nome]').value = result[0];
                    document.querySelector('input[name=autor]').value = result[1];
                    document.querySelector('input[name=sitautor]').value = result[2];

                    var fig = document.getElementById("fig2");
                    var img = document.getElementById("img2");


                    img.width = "120";
                    img.height = "200";
                    img.src= result[4];
                    fig.appendChild(img);

                } else {
                    console.log("Codigo valido mas não existente!");
                    var resp = document.getElementById("resposta2");
                    resp.style.display = "block";
                    resp.innerHTML = JSON.parse(this.responseText);

                    document.querySelector('input[name=nome]').value = "";
                    document.querySelector('input[name=autor]').value = "";
                    document.querySelector('input[name=sitautor]').value = "";
                    var img = document.getElementById('img2');
                    if (img) {
                        img.src = '';
                    } else {
                        console.error('Elemento com ID img1 não encontrado');
                    }
                }
            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/BUSCA_LIVROS_EMP.php?codigo=" + objLivro.cod.value, true);
        xmlhttp.send();
    }else{
        console.log("Codigo invalido!");
        let resp = document.getElementById("resposta2");
        resp.style.display = "block";
        resp.innerHTML = "Código Inválido!";
        document.querySelector('input[name=nome]').value = "";
        document.querySelector('input[name=autor]').value = "";
        document.querySelector('input[name=sitautor]').value = "";
        var img = document.getElementById('img2');
        if (img) {
            img.src = '';
        } else {
            console.error('Elemento com ID img1 não encontrado');
        }
    }
}

/*Registra o emprestimo*/
function enviaEmp() {
    let objLivro = document.getElementById("formLivro");
    let objAluno = document.getElementById("formAluno");

    let cod = document.getElementById("cod");
    let nome = document.getElementById("nome");

    let nomeA = document.getElementById("nomealuno");
    let mat = document.getElementById("mat");

    document.getElementById("resposta3").innerText = "";

    sitAluno = document.getElementById("sitaluno").value;
    sitLivro = document.getElementById("sitautor").value;

    if (sitAluno!="OK" || sitLivro!="Disponível"){
        let resp = document.getElementById("resposta3");
        resp.style.display = "block";
        resp.innerText = "Impossível realizar empréstimo!";
        console.log(sitAluno);
        console.log(sitLivro);
    }else{
        erro1 = validaCodigo(cod);
        erro2 = validaNome(nome);
        erro3 = validaMatExc(mat);
        erro4 = validaNome(nomeA);
        erroForm = erro1 + erro2 + erro3 + erro4;

        if (document.getElementById("sitaluno").value=="OK" &&
            document.getElementById("sitautor").value=="Disponível") {

            if (erroForm == 0) {
                let xmlhttp = new XMLHttpRequest();
                console.log(this.readyState);
                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        document.querySelector('input[name=cod]').value = "";
                        document.querySelector('input[name=nome]').value = "";
                        document.querySelector('input[name=autor]').value = "";
                        document.querySelector('input[name=sitautor]').value = "";
                        var img1 = document.getElementById("img1");

                        img1.width = "0";
                        img1.height = "0";
                        img1.src= "0";

                        document.querySelector('input[name=mat]').value = "";
                        document.querySelector('input[name=nomealuno]').value = "";
                        document.querySelector('input[name=curso]').value = "";
                        document.querySelector('input[name=sitaluno]').value = "";

                        var img2 = document.getElementById("img2");

                        img2.width = "0";
                        img2.height = "0";
                        img2.src= "0";

                        var resposta = document.getElementById('resposta3');
                        resposta.innerHTML="Empréstimo realizado com sucesso!";
                        
                        console.log(this.responseText);

                        let result = JSON.parse(this.responseText);
                        window.location.href = "http://localhost/5TFC_2024.1/php/empPDF.php?matricula=" + result[0] +
                            "&codigo=" + result[1] + "&dataEMP=" + result[2] + "&dataDev=" + result[3] +
                            "&idEMP=" + result[4];

                    }else{
                        var resposta = document.getElementById('resposta3');
                        resposta.style.display="block";
                        resposta.innerHTML="Erro ao realizar empréstimo";
                    }

                }
                xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/CONFIRMA_EMP.php?codigo=" + cod.value +
                    "&nome=" + nome.value + "&mat=" + mat.value + "&nomealuno=" +
                    nomeA.value, true);
                xmlhttp.send();
            }
        }
        else{
            document.getElementById("resposta3").innerText = "Não é possível realizar o empréstimo";
        }
    }


}




//FUNÇÕES PARA GERAR RELATÓRIO
function gerarRelatorios(relatorio){

    let xmlhttp = new XMLHttpRequest();
    console.log(this.readyState);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("resposta").innerText = this.responseText;
        }

    }
    xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/GERA_PDF.php?relatorio=" + relatorio, true);
    xmlhttp.send();

}


//FUNÇÃO PARA BUSCAR INFORMAÇÕES DO EMPRESTIMO (NA DEVOLUÇÃO)
function buscaEmpr(){
    let objForm = document.getElementById("formDev");
    let mat = document.getElementById("mat");

    console.log(mat.value);

    var erro = validaMat(mat);
    console.log(erro);
    var botaoExcluir = document.getElementById('nome');
    

    if(botaoExcluir){
        botaoExcluir.remove();
    }

    if(erro==1){
        resp = document.getElementById("resposta");
        resp.style.display = 'block';
        resp.innerText = "Matricula Inválida!";
        var btnDevolucao = document.getElementById("devolucao");
        btnDevolucao.style.display = "none";        
        var tabela = document.getElementById("table");
        var linhas = tabela.getElementsByTagName('tr');

        // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
        if (linhas.length > 1) {
            // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
            linhas[1].remove();
        } else {
            console.log("Não há linhas de dados para remover.");
        }
    }else{
        console.log("Matricula Válida!");
        var tabela = document.getElementById("table");
        var linhas = tabela.getElementsByTagName('tr');

        // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
        if (linhas.length > 1) {
            // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
            linhas[1].remove();
        } else {
            console.log("Não há linhas de dados para remover.");
        }
        let xmlhttp = new XMLHttpRequest();
        console.log(this.readyState);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                let result = JSON.parse(this.responseText);
                console.log(result.innerText);
                if(result== "Não existe empréstimo pendente para esse aluno!"){  
                    resp = document.getElementById("resposta");
                    resp.style.display = 'block';          
                    resp.innerText = "Não existe empréstimo pendente para esse aluno!";
                    var tabela = document.getElementById("table");
                    var linhas = tabela.getElementsByTagName('tr');

                    // Verifica se existem mais de uma linha (considerando que a primeira é o cabeçalho)
                    if (linhas.length > 1) {
                        // Remove a primeira linha de dados (índice 1, pois índice 0 é o cabeçalho)
                        linhas[1].remove();
                    } else {
                        console.log("Não há linhas de dados para remover.");
                    }
                }else{
                    console.log(result.innerText);//teste
                    resposta.style.display = 'none';
                    var table = document.getElementById("table");
                    /*tabela.id = 'table';
                    tabela.className = 'table table-bordered table-responsive'; */

                    var linha = document.createElement("tr");
                    var thead = document.createElement("thead");
                    thead.className = 'thead-dark';
                    var campo_id = document.createElement("td");
                    var campo_mat = document.createElement("td");
                    var campo_cod = document.createElement("td");
                    var campo_dataemp = document.createElement("td");
                    var campo_dev = document.createElement("td");
                    var campo_situ = document.createElement("td");

                    var texto_id = document.createTextNode(result[0]);
                    var texto_mat = document.createTextNode(result[1]);
                    var texto_cod = document.createTextNode(result[2]);
                    var texto_dataemp = document.createTextNode(result[3]);
                    var texto_dev = document.createTextNode(result[4]);
                    var texto_situ = document.createTextNode(result[5]);

                    campo_id.appendChild(texto_id);
                    campo_mat.appendChild(texto_mat);
                    campo_cod.appendChild(texto_cod);
                    campo_dataemp.appendChild(texto_dataemp);
                    campo_dev.appendChild(texto_dev);
                    campo_situ.appendChild(texto_situ);

                    linha.appendChild(campo_id);
                    linha.appendChild(campo_mat);
                    linha.appendChild(campo_cod);
                    linha.appendChild(campo_dataemp);
                    linha.appendChild(campo_dev);
                    linha.appendChild(campo_situ);

                    table.appendChild(thead);
                    table.appendChild(linha);

                    var btnDevolucao = document.getElementById("devolucao");
                    btnDevolucao.style.display = "block";
                }


            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/DADOS_EMP.php?matricula=" + objForm.mat.value, true);
        xmlhttp.send();
    }

}

function tryRedirect(baseUrl, params, timeout = 5000) {
    let redirected = false;

    // Constrói a URL com os parâmetros
    const url = new URL(baseUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    // Tentativa de redirecionamento
    try {
        window.location.href = url.toString();
        redirected = true;
    } catch (error) {
        console.error("Erro ao tentar redirecionar:", error);
        alert("Ocorreu um erro ao tentar redirecionar. Por favor, tente novamente.");
    }

    // Verificar se o redirecionamento ocorreu após um período
    setTimeout(() => {
        if (!redirected) {
            alert("Redirecionamento falhou. Por favor, verifique a URL e tente novamente.");
        }
    }, timeout);
}


//FUNÇÃO PARA CONFIRMAR DEVOLUÇÃO
function confirmarDevolucao(){
    var mat = document.getElementById("mat");
    console.log(mat.value);     
    
    var erro = validaMat(mat);   
    console.log(erro); 

    if(erro == 0){
        console.log("Matricula Valida");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            console.log(this.status);
            console.log(this.readyState);
            if(this.readyState == 4 && this.status == 200){
                console.log(JSON.parse(this.responseText));
                var resp = document.getElementById("resposta2");
                resp.style.display = "block";
                resp.innerHTML = "DEVOLUÇÃO CONCLUIDA";
                var btnDevolucao = document.getElementById("devolucao");
                btnDevolucao.style.display = "none";
                var dadosDev = JSON.parse(this.responseText);
                window.location.href = "http://localhost/5TFC_2024.1/php/devPDF.php?codEmp=" + dadosDev["codEmp"] +
                        "&codLivro=" + dadosDev["codLivro"] +
                        "&matricula=" + dadosDev["matricula"] + 
                        "&dataDev=" + dadosDev["dataDev"] +
                        "&dataEmp=" + dadosDev["dataEmp"]+
                        "&multa=" + dadosDev["multa"]; 
            }else{
                console.log("Erro ao conectar ao servidor");
            }
        }

        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/CONFIRMA_DEV.php?mat=" + mat.value, true);
        xmlhttp.send();         
    }else{
        console.log("Matricula invalida");
        var btnDevolucao = document.getElementById("devolucao");
        var resp = document.getElementById("resposta");
        btnDevolucao.style.display = "none";
        resp.style.display = "block";
        resp.innerHTML = "Matricula invalida";
    }
}

function validaConfEmail(email,confemail){
    var validaemail = 0;
    if((confemail.value == "") || (email.value != confemail.value)){
        validaemail = 1;
        console.log("confemail vazio");
    }
    return validaemail;
}

function validaConfSenha(senha, confsenha){
    var validasenha = 0;
    if((confsenha.value == "") || (confsenha.value != senha.value)){
        validasenha = 1;
        console.log("confsenha Vazio");
    }
    return validasenha;
}

//Função para cadastrar usuario
function enviaCadastro(){
    let objUsuario = document.getElementById("formUsuario");

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var confemail = document.getElementById("confemail");
    var confsenha = document.getElementById("confsenha");

    var resp = document.getElementById("resposta");
    resp.style.display = "none";
    resp.innerText = " ";
    erro1 = validaNome(nome);
    erro2 = validaEmail(email);
    erro3 = validaSenha(senha);
    erro4 = validaConfEmail(email,confemail);
    erro5 = validaConfSenha(senha,confsenha);

    erroForm = erro1+erro2+erro3+erro4+erro5;


    
    if (erroForm==0){
        console.log("campos validos mas sem confirmação dos confs");
        erro6 = email.value != confemail.value ? 1 : 0;
        erro7 = senha.value != confsenha.value ? 1 : 0;

        if(erro6){
            var respConfEmail = document.getElementById("respConfEmail");
            respConfEmail.style.display = "block";
            respConfEmail.innerHTML = "Email Não Confere";
            console.log("Campos validos e Email não confere");
        }
        if(erro7){
            var respConfSenha = document.getElementById("respConfSenha");
            respConfSenha.style.display = "block";
            respConfSenha.innerHTML = "Senha Não Confere";
            console.log("Campos validos e Senha não confere");
        }

        if(erro6 == 0 && erro7 == 0){
            var respUsuario = document.getElementById("respUsuario");
            respUsuario.style.display = "none";
            var respEmail = document.getElementById("respEmail");
            respEmail.style.display = "none";
            var respSenha = document.getElementById("respSenha");
            respSenha.style.display = "none";
            var respConfEmail = document.getElementById("respConfEmail");
            respConfEmail.style.display = "none";
            var respConfSenha = document.getElementById("respConfSenha");
            respConfSenha.style.display = "none";
            console.log("Campos validos e conferidos");

            let xmlhttp = new XMLHttpRequest();
            console.log(this.readyState);
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("nome").value = "";
                    document.getElementById("senha").value = "";
                    document.getElementById("confsenha").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("confemail").value = "";
                    var resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerText = this.responseText;

                }
            }
            xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/INSERIR_USUÁRIO.php?nome="+ objUsuario.nome.value +
            "&senha=" + objUsuario.senha.value + "&email=" + objUsuario.email.value,true);
            xmlhttp.send();

        }

        
    }else{
        console.log("Campos invalidos");
        if(erro1){
            var respUsuario = document.getElementById("respUsuario");
            respUsuario.style.display = "block";
            respUsuario.innerHTML = "Usuario inválido";
        }else{
            var respUsuario = document.getElementById("respUsuario");
            respUsuario.style.display = "none";
        }
        if(erro2){
            var respEmail = document.getElementById("respEmail");
            respEmail.style.display = "block";
            respEmail.innerHTML = "Email Inválido";
        }else{
            var respEmail = document.getElementById("respEmail");
            respEmail.style.display = "none";
        }
        if(erro3){
            var respSenha = document.getElementById("respSenha");
            respSenha.style.display = "block";
            respSenha.innerHTML = "Senha Inválida";
        }else{
            var respSenha = document.getElementById("respSenha");
            respSenha.style.display = "none";
        }
        if(erro5){
            var respConfSenha = document.getElementById("respConfSenha");
            respConfSenha.style.display = "block";
            respConfSenha.innerHTML = "Senha Não Confere";
        }else{
            var respConfSenha = document.getElementById("respConfSenha");
            respConfSenha.style.display = "none";
        }
        if(erro4){
            var respConfEmail = document.getElementById("respConfEmail");
            respConfEmail.style.display = "block";
            respConfEmail.innerHTML = "Email Não Confere";
        }else{  
            var respConfEmail = document.getElementById("respConfEmail");
            respConfEmail.style.display = "none";
        }
        /*if(document.getElementById("confsenha").value != document.getElementById("senha").value){
            var respConfSenha = document.getElementById("respConfSenha");
            respConfSenha.style.display = "block";
            respConfSenha.innerHTML = "Senha Não Confere";
        }else{
            var respConfSenha = document.getElementById("respConfSenha");
            respConfSenha.style.display = "none";
        }
        if(document.getElementById("confEmail").value != document.getElementById("email").value){
            var respConfEmail = document.getElementById("respConfEmail");
            respConfEmail.style.display = "block";
            respConfEmail.innerHTML = "Email Não Confere";
        }else{
            var respConfEmail = document.getElementById("respConfEmail");
            respConfEmail.style.display = "none";
        } */
    }

}

//Função para login
function enviaLogin(){
    let objLogin = document.getElementById("formLogin");

    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");

    var resp = document.getElementById("resposta");
    resp.style.display = "none";  

    document.getElementById("resposta").innerText = " ";
    erro1 = validaNome(nome);
    erro2 = validaSenha(senha);

    console.log(erro1);
    console.log(erro2);

    erroForm = erro1+erro2;


    if (erroForm==0){
        console.log("Campos validos");
        var respNome = document.getElementById("respNome");
        respNome.style.display = "none";
        var respSenha = document.getElementById("respSenha");
        respSenha.style.display = "none";

        let xmlhttp = new XMLHttpRequest();
        console.log(this.readyState);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("Campos validos e login efetuado");
                document.getElementById("nome").value = "";
                document.getElementById("senha").value = "";

                if(JSON.parse(this.responseText) == "Ok" )
                {
                    window.location.href = "http://localhost/5TFC_2024.1/html/BSMENU.html"
                }
                else
                {
                    var resp = document.getElementById("resposta");
                    resp.style.display = "block";
                    resp.innerText = JSON.parse(this.responseText);

                }


            }

        }
        xmlhttp.open("GET", "http://localhost/5TFC_2024.1/php/LOGIN.php?nome="+ objLogin.nome.value +
            "&senha=" + objLogin.senha.value,true);
        xmlhttp.send();

    }else{
        console.log("Campos invalidos");
        if(erro1){
            var respNome = document.getElementById("respNome");
            respNome.style.display = "block";
            respNome.innerHTML = "Usuário Inválido!";
            var resp = document.getElementById("resposta");
            resp.style.display = "none";  
        }else{
            var respNome = document.getElementById("respNome");
            respNome.style.display = "none";
        }
        if(erro2){
            var respSenha = document.getElementById("respSenha");
            respSenha.style.display = "block";
            respSenha.innerHTML = "Senha Inválida!";
            var resp = document.getElementById("resposta");
            resp.style.display = "none";  
        }else{
            var respSenha = document.getElementById("respNome");
            respSenha.style.display = "none";
        }
    }

}







