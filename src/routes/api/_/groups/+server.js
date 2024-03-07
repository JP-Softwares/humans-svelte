import { SPRING_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

//import type { Actions } from './$types';

/** @type {import('@sveltejs/kit').REquestHandler} */
export async function GET({ params, cookies }) {

    try {

        let message = await (await fetch(`${SPRING_URL}/Grupo`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })).json();

        return new Response(JSON.stringify(message), {status: 200});

    }catch (error) {
        console.log(error);
        return new Response(null);
    }
}