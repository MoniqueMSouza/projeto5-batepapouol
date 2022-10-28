
let nomeUsuario = '';



function AdicionarNomeUsuario(){

 nomeUsuario = prompt('Qual o seu nome?');

    let dados = {
    name:`${nomeUsuario}`
    };

    const requisiçao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', dados);

    requisiçao.then(DeuCerto);
    requisiçao.catch(DeuErrado);

    return nomeUsuario;
    

}

function DeuErrado (resposta){
    console.log(resposta.response);
    alert('Já existe um usuário com este nome! Escolha outro.');

    AdicionarNomeUsuario();
}

function DeuCerto (resposta){
    console.log(resposta);
    alert('Você entrou!');
    setInterval(usuarioPresente, 5000);
}

function usuarioPresente(){

    let dados = {
        name:`${nomeUsuario}`
        };

     const request = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', dados);

     request.then(Certo);
     request.catch(Errado);
    }


function Errado (resposta){
    console.log(resposta.response);
    alert('bug');
   
}

function Certo (resposta){
    console.log(resposta);

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
    
    


function enviarMensagem (){
    let mensagem = document.querySelector("input")
    let dentromsg= mensagem.value
    


    const mensagemServidor = {
        from: nomeUsuario,
        to: "Todos",
        text: dentromsg,
        type: "message"
    };

    const requerimento = axios.post ('https://mock-api.driven.com.br/api/v6/uol/messages' , mensagemServidor);

    requerimento.then(Enviou);
    requerimento.catch(NaoEnviou);

}
function NaoEnviou (resposta){
    console.log(resposta.response);
    alert('Mensagem não enviada');
   
}

function Enviou (resposta){
    console.log(resposta);
    alert('Mensagem Enviada');

}