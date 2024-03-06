function ocultarImagemTexto(){
  document.querySelector('.areaExibirResultado').style.backgroundImage ='none';

}

function exibirImagemTexto(){
  const areaExibirResultado = document.querySelector('.areaExibirResultado').style.backgroundImage = 'url(/imgs/menu_1x.png)';

}

function criptTexto() {
    let mensagemDigitada = document.querySelector('.mensagemRecebida').value;
    let textoCriptografado = '';

    textoCriptografado = mensagemDigitada.replace(/e/g,'enter')
                                         .replace(/i/g,'imes')
                                         .replace(/a/g,'ai')
                                         .replace(/o/g,'ober')
                                         .replace(/u/g,'ufat');
  return document.querySelector('.areaExibirResultado').innerText = textoCriptografado;
}
criptTexto();

function descriptTexto() {
    let mensagemCript = document.querySelector('.mensagemRecebida').value;
    let textDescript = '';
    textDescript = mensagemCript.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
  return document.querySelector('.areaExibirResultado').innerText = textDescript;
}
let resultado = descriptTexto();
function ctrlC() {
  let textoCopiado = document.querySelector('.areaExibirResultado').value;
    navigator.clipboard.writeText(textoCopiado).innerText;
    alert('Texto copiado com sucesso!');
}
function limpar() {
  let limpatexto = document.querySelector('.mensagemRecebida');
  limpatexto.value ='';
}