import { SPRING_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

//import type { Actions } from './$types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ request, params, cookies }) {

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
        const erro: any = error;
        const { message } = await erro.json();
        console.log("Erro: " + message);
        return json({sucess: false, message: message}, {status: 500});;
    }
}