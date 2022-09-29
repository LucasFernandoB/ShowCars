
function salvarId1(numer)
{
    var salvar;
    salvar='teste';
   
    var textToSave ="[item]"+'|'+numer+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();

}

function validar(){
      var senha=document.getElementById("senha").value;
      var logar=123;
      if(logar!=senha){
        alert('voce nao tem autorizacao!!!');
        return false;
      }
      else
        alert('seje bem vindo!!!');
    }

function ajuda(){
    alert('Carro adicionado ao carrinho!\nReserva de apenas um carro por pessoa.');
    document.getElementById('setaQtd').innerHTML = '1';

}
window.onload= function setarTabela() {

    var auxiliar=0;

    if(auxiliar==1){
    //alert('carro do botao 1 escolhido');
    document.getElementById('setarModelo').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;AUDI A3';
    document.getElementById("fotoInterrogacao").src = "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8vf/2019.png?wid=291";
    document.getElementById('setarAno').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;2019';
    document.getElementById('setarPreco').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;R$125.990,00';
    document.getElementById("textoCarrinhovazio").innerHTML= 'AUDI A3';
    }
    else if (auxiliar==0) {
        var lucas;
    }
    else if(auxiliar==2){
 //   alert('carro do botao 2 escolhido');
    document.getElementById('setarModelo').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;AUDI A4';
    document.getElementById("fotoInterrogacao").src = "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8w2/2019.png?wid=291";
    document.getElementById('setarAno').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;2019';
    document.getElementById('setarPreco').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;R$173.990,00';
    document.getElementById("textoCarrinhovazio").innerHTML= 'AUDI A4';

    }
    


 }
 function finalizar(){
    alert('SEU CARRO FOI RESERVADO COM SUCESSO!\n Mas atenção! Seu modelo ficara reservado por apenas 15 dias\n apartir da data de hoje.');
    document.getElementById('divTeste').innerHTML = 'Carro reservado por apenas 15 dias.';
    document.getElementById("finalizar").style.display="none";

 }


t = setInterval("pisca('piscar')",500)
function formatar(mascara, documento)
{
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
                  
        if (texto.substring(0,1) != saida)
        {
            documento.value += texto.substring(0,1);
        }
                      
}
 function validateForm(){
         var x=document.forms["cad"]["nome"].value
         var atpos=x.indexOf(" ");// compara a posicao
         var dotpos=x.lastIndexOf(" ");//ultima ocorrencia do espaco
         if (atpos<1 || dotpos+1>=x.length) {
            alert("Nome invalido, ou espaco no inicio ou fim do seu nome");
            return false;
         }
}
$('.carousel').carousel({
  interval: 2000
})

function pisca(item){

var ob = document.getElementById(item);

if (ob.style.color=="red"){

ob.style.color="#0101DF";

}else{

ob.style.color="red";
}
}

function displaymessage(){
      alert("Hello World!"); //mostra mensagem alerta
    }


function saveTextAsFile()
{
    var salvar;
    salvar='teste';
    contador+=1;
    var textToSave ="[item]"+'|'+ document.getElementById("inputTextToSave").value+'|'+document.getElementById
    ("modelo").value+'|'+document.getElementById("cor").value+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
    alert('PEDIDO REALIZADO COM SUCESSO')
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function saveTextAsFileCadastro()
{
    var contador=1;
    var salvar;
    salvar='teste';
    contador+=1;
    var textToSave ='[cadastro]'+'|'+contador+'|'+ document.getElementById("nome").value+'|'+document.getElementById("email").value
    +'|'+document.getElementById("cpf").value+'|'+document.getElementById("telefone").value+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function saveTextAsFileContato()
{
    alert('MENSAGEM ENVIADA COM SUCESSO.')
    var cont;
    var salvar;
    salvar='teste';
    cont=cont+1;
    var textToSave ='[item]'+'|'+ document.getElementById("assunto").value+'|'+document.getElementById("email").value
    +'|'+document.getElementById("mensagem").value+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText2()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
 $("teste1").submit(function() {
        if($("nome").val()== null || $("nome").val() ==""){
           alert('campo vazio');      
           return false;
      }   
    }); 
 
function loadFileAsText()
{
   var fileToLoad = document.getElementById("fileToLoad").files[0];
   var fileReader = new FileReader();
   fileReader.onload = function(fileLoadedEvent) 
   {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      var texto = textFromFileLoaded;
      listar(texto);
   };
   fileReader.readAsText(fileToLoad, "UTF-8");
}

function listar(texto){
   var quantidade = document.getElementById("lista").rows.length;
   if (quantidade>1){
      for(var cont=1;cont<=quantidade;cont++){
         document.getElementById("lista").deleteRow(cont);
      }
   }
   var itens = texto.split('[item]');
   for(var i=1;i<itens.length;i++){
      var valores = itens[i].split("|");
      document.getElementById("lista").innerHTML +='<tr><td>'+valores[1]+'</td><td>'+valores[2]+'</td><td>'+valores[3]+'</td></tr>';
   }
}

function contagem()
{
  alert(document.getElementById("lista").rows.length-1);
}

function limpar()
{
  var quantidade = document.getElementById("lista").rows.length;
  for(var cont=quantidade;cont<=1;cont++){
     document.getElementById("lista").deleteRow(cont);
  }
  window.location.reload();
}

function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText2()
{
    var fileToLoad = document.getElementById("fileToLoad2").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}var auxiliar;
function salvarId1(numer)
{
    var salvar;
    salvar='teste';
   
    var textToSave ="[item]"+'|'+numer+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();

}
function loadFileAsText1()
{
   var fileToLoad = document.getElementById("fileToLoad").files[0];
   var fileReader = new FileReader();
   fileReader.onload = function(fileLoadedEvent) 
   {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      var texto = textFromFileLoaded;
      listar(texto);
   };
   fileReader.readAsText(fileToLoad, "UTF-8");
}

function listar1(texto){
   var quantidade = document.getElementById("lista").rows.length;
   if (quantidade>1){
      for(var cont=1;cont<=quantidade;cont++){
         document.getElementById("lista").deleteRow(cont);
      }
   }
   var itens = texto.split('[item]');
   for(var i=1;i<itens.length;i++){
      var valores = itens[i].split("|");
      document.getElementById("lista").innerHTML +='<tr><td>'+valores[1];
   }
}

function validar(){
      var senha=document.getElementById("senha").value;
      var logar=123;
      if(logar!=senha){
        alert('voce nao tem autorizacao!!!');
        return false;
      }
      else
        alert('seje bem vindo!!!');
    }

function ajuda(numero){
    alert('Carro adicionado ao carrinho!\nReserva de apenas um carro por pessoa.');
    document.getElementById('setaQtd').innerHTML = '1';
    //auxiliar=numero;
    salvarId1(numero);


}
//window.onload= 
function setarTabela() {
    alert('lucas');
    loadFileAsText1();
    auxiliar=1;
    alert('lucas');

    if(auxiliar==1){
    //alert('carro do botao 1 escolhido');
    document.getElementById('setarModelo').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;AUDI A3';
    document.getElementById("fotoInterrogacao").src = "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8vf/2019.png?wid=291";
    document.getElementById('setarAno').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;2019';
    document.getElementById('setarPreco').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;R$125.990,00';
    document.getElementById("textoCarrinhovazio").innerHTML= 'AUDI A3';
    }
    else if (auxiliar==0) {
        var lucas;
    }
    else if(auxiliar==2){
 //   alert('carro do botao 2 escolhido');
    document.getElementById('setarModelo').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;AUDI A4';
    document.getElementById("fotoInterrogacao").src = "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8w2/2019.png?wid=291";
    document.getElementById('setarAno').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;2019';
    document.getElementById('setarPreco').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;R$173.990,00';
    document.getElementById("textoCarrinhovazio").innerHTML= 'AUDI A4';

    }
    


 }

 function finalizar(){
    alert('SEU CARRO FOI RESERVADO COM SUCESSO!\n Mas atenção! Seu modelo ficara reservado por apenas 15 dias\n apartir da data de hoje.');
    document.getElementById('divTeste').innerHTML = 'Carro reservado por apenas 15 dias.';
    document.getElementById("finalizar").style.display="none";

 }


t = setInterval("pisca('piscar')",500)
function formatar(mascara, documento)
{
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
                  
        if (texto.substring(0,1) != saida)
        {
            documento.value += texto.substring(0,1);
        }
                      
}
 function validateForm(){
         var x=document.forms["cad"]["nome"].value
         var atpos=x.indexOf(" ");// compara a posicao
         var dotpos=x.lastIndexOf(" ");//ultima ocorrencia do espaco
         if (atpos<1 || dotpos+1>=x.length) {
            alert("Nome invalido, ou espaco no inicio ou fim do seu nome");
            return false;
         }
}
$('.carousel').carousel({
  interval: 2000
})

function pisca(item){

var ob = document.getElementById(item);

if (ob.style.color=="red"){

ob.style.color="#0101DF";

}else{

ob.style.color="red";
}
}

function displaymessage(){
      alert("Hello World!"); //mostra mensagem alerta
    }


function saveTextAsFile()
{
    var salvar;
    salvar='teste';
    contador+=1;
    var textToSave ="[item]"+'|'+ document.getElementById("inputTextToSave").value+'|'+document.getElementById
    ("modelo").value+'|'+document.getElementById("cor").value+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
    alert('PEDIDO REALIZADO COM SUCESSO')
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function saveTextAsFileCadastro()
{
    var contador=1;
    var salvar;
    salvar='teste';
    contador+=1;
    var textToSave ='[cadastro]'+'|'+contador+'|'+ document.getElementById("nome").value+'|'+document.getElementById("email").value
    +'|'+document.getElementById("cpf").value+'|'+document.getElementById("telefone").value+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function saveTextAsFileContato()
{
    alert('MENSAGEM ENVIADA COM SUCESSO.')
    var cont;
    var salvar;
    salvar='teste';
    cont=cont+1;
    var textToSave ='[item]'+'|'+ document.getElementById("assunto").value+'|'+document.getElementById("email").value
    +'|'+document.getElementById("mensagem").value+'|';
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
 
function loadFileAsText2()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
 $("teste1").submit(function() {
        if($("nome").val()== null || $("nome").val() ==""){
           alert('campo vazio');      
           return false;
      }   
    }); 
 
