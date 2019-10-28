// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string
const body = document.body;
const botao = document.getElementById("trocaCor");


botao.addEventListener("click", function () {
    const r = parseInt(Math.random () * 255);
    const g = parseInt(Math.random () * 255);
    const b = parseInt(Math.random () * 255);
   
    body.style.backgroundColor = 'rgb('+r+ ',' +g+ ',' +b+')'
    
});

function geraInteiro() {
    const n = parseInt(Math.random() * 255);
    console.log(n);
    return n;
}



