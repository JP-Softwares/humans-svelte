import { SPRING_URL } from '$env/static/private';

//import type { Actions } from './$types';

export const actions = {

    grupos: async () => {
        try {

            let message = await (await fetch(`${SPRING_URL}/Grupo`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })).json();

            console.log(JSON.stringify(message));
    
            return message;

        }catch (error) {
            console.log(error);
            return null;
        }
    }
}

export function load({ params }) {
	return {
		spring_base_url: SPRING_URL,
        getGrupos: actions.grupos()
	};
}