import { json } from "@sveltejs/kit";

const isValidJSON = (str:string) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

const msgPayloadInvalido = "Payload inválido!";

export async function gerarRespostaPadrao(response: Response) {

    const responseBodyText = await response.text(); // só pode ser executado 1 vez

    let apiTratouCerto = isValidJSON(responseBodyText);

    return json(apiTratouCerto ? JSON.parse(responseBodyText) :
        {
            success: (response.status + "")[0] === "2" ? true : false, 
            message: gerarMensagem(response, responseBodyText), 
            data: {}
        }, 
        {status: response.status}
    );;
}

function gerarMensagem(response: Response, responseBodyText: string) {
    let mensagemFinal: any;
    
    switch (response.status) {
        case 400:
            mensagemFinal = msgPayloadInvalido;
            break;
        default:
            mensagemFinal = responseBodyText;
    }

    return mensagemFinal;
}