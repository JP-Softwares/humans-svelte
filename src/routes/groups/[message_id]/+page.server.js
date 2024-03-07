import { SPRING_URL } from '$env/static/private';

//import type { Actions } from './$types';

var groupidAtual = 0;

export const actions = {

    enviarMensagem: async ({request, cookies}) => {
        //console.log(SPRING_URL);

        const data = await request.formData();
        try {
            let request = {nomeUsuario: "teste", conteudo: data.get("chat_message"), dataHora: new Date().toISOString(), groupid: groupidAtual};
            console.log(JSON.stringify(request));

            let message = await (await fetch(`${SPRING_URL}/Chat`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            })).text();
    
            //console.log(message);
    
            return "Você digitou: " + data.get('chat_message') + ". Valor de SPRING_URL: " + SPRING_URL + ". Retorno da API: " + message;

        }catch (error) {
            console.log(error);
            return null;
        }
    }
}

export function load({params}) {
    groupidAtual = parseInt(params.message_id);
    return {
        groupid: groupidAtual
    };
}