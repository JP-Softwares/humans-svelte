import { SPRING_URL } from '$env/static/private';
import { gerarErro } from '$lib/server/default_error';
import { gerarRespostaPadrao } from '$lib/server/resposta';
import { json } from '@sveltejs/kit';

//import type { Actions } from './$types';

/** @type {import('./$types').RequestHandler} */
export async function GET(RequestEvent) {

    try {
        let message = await (await fetch(`${SPRING_URL}/Grupo`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })).json();

        return json(message, {status: 200});

    }
    /**
         * @param {any} error
         */
    catch (error) {
        return gerarErro(error, 500);
    }
}

/** @type {import('./$types').RequestHandler} */
export async function POST(RequestEvent) {

    try {
        //const { params } = RequestEvent;
        const { request } = RequestEvent;

        let requestJson = await request.json();

        let message = await (await fetch(`${SPRING_URL}/Grupo`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(requestJson)
        })).json();

        return gerarRespostaPadrao(message);
    }
    /**
         * @param {any} error
         */
    catch (error) {
        return gerarErro(error, 500);
    }
}