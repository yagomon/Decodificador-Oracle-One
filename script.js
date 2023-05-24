// Pegar botões e seus eventos de clique
const btnCode= document.querySelector('.btn-code');
const btnDecode= document.querySelector('.btn-decode');

btnCode.addEventListener('click', function(){
  encode()
});

btnDecode.addEventListener('click', function(){
  decode()
});


// Lista dos codigos
const codes = [ 
  ["e", "enter"], 
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

// Pegar input do usuário
function getInput(){
  const textArea = document.querySelector('.user-text').value;
  getAsideBar(textArea);
  return (textArea)
}

// Codificar mensagem e enviar para a sidebar
function encode (){
  let str = getInput();
  
  for(var i = 0; i < codes.length; i++) {
    if(str.includes(codes[i][0])) {
        str = str.replaceAll(codes[i][0], codes[i][1]);
      }
  } 
  console.log(str);
  
  sendSideBar(str);
} 

// Decodificar mensagem e enviar para a sidebar
function decode (){
  let str = getInput();
  for(var i = 0; i < codes.length; i++) {
    if(str.includes(codes[i][1])) {
        str = str.replaceAll(codes[i][1], codes[i][0]);
        
    }
  } 
  console.log(str);
  sendSideBar(str);
}

// Seleionar barra lateral Correta
function getAsideBar(textArea){
  let aside= document.querySelector('.aside');

  if(textArea===""){
    aside.innerHTML=
      `
      <div class="aside-container col">
        <object
          class="img"
          data="./assets/images/High quality products 1 1.svg"
        ></object>

        <p class="no-message">Nenhuma mensagem encontrada</p>
        
        <p class="no-message-sub">Digite um texto que você deseja criptografar ou descriptografar.</p>
      </div>
    `
  } 
  else {
    aside.innerHTML= `
    <div class="screen-copy aside-container col">

      <textarea class="text-result" readonly>
      </textarea>

      <button onclick= "copy()" type="button" class="btn btn-copy">Copiar</button>
  </div>
    `
  }
}

// Enviar menssagem para barra lateral
function sendSideBar(str){
  let textResult= document.querySelector('.text-result');
  textResult.innerText= str;
}

//Copiar menssagem da barra lateral
function copy(){
  const textCopy= document.querySelector('.text-result')
  textCopy.select()
  document.execCommand('copy')
}
