import { SPRING_URL } from '$env/static/private';

//import type { Actions } from './$types';

export const actions = {

    enviarMensagem: async ({request, cookies}) => {
        //console.log(SPRING_URL);

        const data = await request.formData();

        return "Você digitou: " + data.get('chat_message') + ". Valor de SPRING_URL: " + SPRING_URL;
    }
}