import { SPRING_URL } from '$env/static/private';

//import type { Actions } from './$types';

var localhost = '';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {
    localhost = url.href;

    let grupos = await(await fetch(localhost + "api/_/groups")).json();

	return {
		spring_base_url: SPRING_URL,
        grupos: grupos
	};
}