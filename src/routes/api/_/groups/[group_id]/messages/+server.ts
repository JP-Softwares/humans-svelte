import { SPRING_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

//import type { Actions } from './$types';

export async function GET(RequestEvent) {
    try {
        const { params } = RequestEvent;

        let message = await (await fetch(`${SPRING_URL}/Chat/grupo/${params.group_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })).json();

        return json(message, {status: 200});
    }catch (error) {
        const erro: any = error;
        const { message } = erro;
        console.log("Erro: " + message);
        return json({sucess: false, message: message}, {status: 500});;
    }
}

export async function POST(RequestEvent) {
    try {

        const { request, params } = RequestEvent;

        const { nomeUsuario, conteudo } = await request.json();
        let requestAPI = {nomeUsuario: nomeUsuario, conteudo: conteudo, dataHora: new Date().toISOString(), groupid: parseInt(params.group_id)};

        let message = await (await fetch(`${SPRING_URL}/Chat`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestAPI)
        })).json();

        return json(message, {status: 200});

    }catch (error) {
        const erro: any = error;
        const { message } = erro;
        console.log("Erro: " + message);
        return json({sucess: false, message: message}, {status: 500});;
    }
}