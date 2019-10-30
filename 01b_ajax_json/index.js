// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach


//instanciando XMLHttpRequest()
const request = new XMLHttpRequest();

request.onreadystatechange = mostraImagem;


// function mostraImagem() {

//     if (request.readyState === 4) {
//         if (request.status === 200) {
//             const response = request.response;
//             const json = JSON.parse(response);
//             const data = json.data;
//             const div = document.querySelector('#root');
//             for (let i=0; i<data.length;i++) {
//                 const element = data [i];
//                 const img = '<img src=${element.imagem}>';
//                 img.innerHTML += img
                
//             }


//         }

//     }


   

// }


//outra forma de fazer
function criarImagens(array) {
     //colocando o elemento no Body
            const div = document.querySelector('#root');
            const body = document.body;
            div.innerHTML += `
                <img src=${array[0].imagem} >
                <img src=${array[1].imagem} >
                <img src=${array[2].imagem} >
            `          

}
