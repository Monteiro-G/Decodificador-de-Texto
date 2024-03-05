function ocultarImagemTexto(){
  document.getElementById('imagemTextoInicial').style.display ='none';
}

function exibirImagemTexto(){
    document.getElementById('imagemTextoInicial').style.display ='';
  }
function criptTexto() {
    let mensagemDigitada = document.getElementById('mensagemRecebida').value;
    let textoCriptografado = '';

    textoCriptografado = mensagemDigitada.replace(/e/g,'enter')
                                         .replace(/i/g,'imes')
                                         .replace(/a/g,'ai')
                                         .replace(/o/g,'ober')
                                         .replace(/u/g,'ufat');
  return document.getElementById('resultadoCripDescrip').innerText = textoCriptografado;
} 
criptTexto();

function descriptTexto() {
    let mensagemCript = document.getElementById('mensagemRecebida').value;
    let textDescript = '';

    textDescript = mensagemCript.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
  return document.getElementById('resultadoCripDescrip').innerText = textDescript;
}
descriptTexto();
function ctrlC() {
    let textoCopiado = document.getElementById('resultadoCripDescrip').innerText;
    navigator.clipboard.writeText(textoCopiado);
    alert('Texto copiado com sucesso!');
}
