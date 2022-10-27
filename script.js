
let dados = {name:''};


function AdicionarNomeUsuario(){

    const nomeUsuario = prompt('Qual o seu nome?');

    let dados = {
    name:`${nomeUsuario}`
    };

    const requisiçao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', dados);

    requisiçao.then(DeuCerto);
    requisiçao.catch(DeuErrado);
}

function DeuErrado (resposta){
    console.log(resposta.response);
    alert('Já existe um usuário com este nome! Escolha outro.');

    AdicionarNomeUsuario();
}

function DeuCerto (resposta){
    console.log(resposta);
    alert('Você entrou!');
}

AdicionarNomeUsuario();
BuscarMensagens();

function BuscarMensagens(){

    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promessa.then(resposta => {renderizarMensagens(resposta.data)});
} 


// function Buscou (resposta){
//     console.log(resposta);
//     alert('Buscou mensagens!');

// dados = resposta.data;
// renderizarMensagens();
// console.log(dados);

// }

function renderizarMensagens(msg){
    console.log(msg.length);

    const ListaMensagens = document.querySelector('.conversas');
    ListaMensagens.innerHTML = '';
    console.log(msg);


    for (let i = 0; i < msg.length; i++) {
    
        // let mensagens = msg[i];
    console.log(msg[i]);
    
        ListaMensagens.innerHTML += `
            <li>                
            (${msg[i].time})     
            ${msg[i].from} para 
                ${msg[i].to}: 
                ${msg[i].text}
            </li>
        `;
     }
    }
    
    

