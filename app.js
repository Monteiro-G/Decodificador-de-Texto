let resultado = '';
function ocultarImagemTexto(){
  document.querySelector('.areaExibirResultado').style.backgroundImage ='none';
  let ocultarMensag = document.querySelector('.textoInicial');
  ocultarMensag.style.display = 'none';
}

function exibirImagemTexto(){
  const areaExibirResultado = document.querySelector('.areaExibirResultado').style.backgroundImage = 'url(/imgs/menu_1x.png)';
  let mostrarMensag = document.querySelector('.textoInicial');
  mostrarMensag.style.display = 'block';
}

function criptTexto() {
    let mensagemDigitada = document.querySelector('.mensagemRecebida').value;
    limpar();
    let textoCriptografado = '';

    textoCriptografado = mensagemDigitada.replace(/e/g,'enter')
                                         .replace(/i/g,'imes')
                                         .replace(/a/g,'ai')
                                         .replace(/o/g,'ober')
                                         .replace(/u/g,'ufat');
  return resultado = document.querySelector('.areaExibirResultado').innerText = textoCriptografado;
}
criptTexto();

function descriptTexto() {
    let mensagemCript = document.querySelector('.mensagemRecebida').value;
    limpar();
    let textDescript = '';
    textDescript = mensagemCript.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
  return resultado = document.querySelector('.areaExibirResultado').innerText = textDescript;
  
}
descriptTexto();
function ctrlC() {
  let textoCopiado = document.querySelector('.areaExibirResultado').value;
    navigator.clipboard.writeText(textoCopiado).innerText;
    alert('Texto copiado com sucesso!');
}
function limpar() {
  let limpatexto = document.querySelector('.mensagemRecebida');
  limpatexto.value ='';
}

function ocultarResultado(){
  resultado = document.querySelector('.areaExibirResultado');
  resultado.innerText = '';
  
}