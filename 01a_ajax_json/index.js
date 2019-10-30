// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response
const div = document.querySelector('#root');
const img = document.createElement('img');
const request = new XMLHttpRequest();

request.onreadystatechange = algumaFuncao;


function algumaFuncao(params) {
    //fazer algo com a resposta
    console.log('olar');
    const response = request.response;
    const json = JSON.parse(request.response);
    console.log(json.data[0].imagem);
    
    
    
    img.src = json.data[0].imagem;
    div.appendChild(img)
}

const url = './data/dados.json'
request.open('GET',url);
request.send();