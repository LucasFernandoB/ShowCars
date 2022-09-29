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
}