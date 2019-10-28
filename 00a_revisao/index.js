// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

console.log("olar");

const body = document.querySelector('body');
console.log(body);



body.style.backgroundColor = 'purple'
const botao = document.getElementById('trocaCor');

botao.addEventListener('click',clicouBotao);

function clicouBotao() {
    const n = Math.random();
    const n1 = n * 255;
    const r = parseInt(n1);

    const nr = Math.random();
    const n2 = nr * 255;
    const g = parseInt(n2);

    const nn = Math.random();
    const n3 = nn * 255;
    const b = parseInt(n3);

    console.log('entrei na função');

    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b+')'
    console.log(r,g,b);
  
    
}

um jeito de fazer:

function geraInteiro() {
    const n = parseInt(Math.random()*255);
    console.log(n);
    return n;
    
}
function clicouBotao() {
    const r = geraInteiro ();
    const g = geraInteiro();
    const b = geraInteiro();
   
    body.style.backgroundColor = "rgb("+r+ "," +g+ "," +b+")";
}


// outro jeito de fazer:

// const botao = document.getElementById("trocaCor");
// console.log(botao);
// botao.addEventListener("click", clicouBotao);

// function clicouBotao() {
//     const r = parseInt(Math.random () * 255);
//     const g = parseInt(Math.random () * 255);
//     const b = parseInt(Math.random () * 255);
   
//     body.style.backgroundColor = "rgb("+r+ "," +g+ "," +b+")";
// }











