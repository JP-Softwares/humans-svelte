import { json } from "@sveltejs/kit";

export function gerarErro(error:unknown, status:number) {
    const erro: any = error;
    const { message } = erro;
    const mensagemFinal = message || "";
    console.log("Erro: " + mensagemFinal);
    return json({success: false, message: mensagemFinal, data: {}}, {status: status});;
}