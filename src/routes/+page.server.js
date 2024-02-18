import { SPRING_URL } from '$env/static/private';

//import type { Actions } from './$types';

export const actions = {

    enviarMensagem: async (event) => {
        //console.log(SPRING_URL);

        return SPRING_URL;
    }
}