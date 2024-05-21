import { SPRING_URL } from '$env/static/private';

//import type { Actions } from './$types';

var groupidAtual = 0;
var localhost = '';

export const actions = {

    enviarMensagem: async ({request, params, cookies}) => {
        console.log(localhost);

        const data = await request.formData();
        try {
            let request = {nomeUsuario: data.get("nome_usuario"), conteudo: data.get("chat_message")};
            console.log(JSON.stringify(request));

            let message = await (await fetch(`${localhost}/api/_/groups/${groupidAtual}/messages`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            })).text();
            
            ws.send(JSON.stringify(request));
    
            //console.log(message);
    
            return "Você digitou: " + data.get('chat_message') + ". Valor de SPRING_URL: " + SPRING_URL + ". Retorno da API: " + message;

        }catch (error) {
            console.log(error);
            return null;
        }
    }
}

export async function load({url, params}) {

    localhost = url.href.replace(url.pathname, "");

    let mensagens = await (await fetch(`${localhost}/api/_/groups/${params.group_id}/messages`)).json();

    groupidAtual = parseInt(params.group_id);

    return {
        url_localhost: localhost,
        groupid: groupidAtual,
        mensagens: mensagens
    };
}