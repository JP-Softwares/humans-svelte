export function getCookie(documento: Document, cookie: string, replacer: () => string) {
    let cookies = documento.cookie.split('; ');

    let objetoCookie = {};

    for (let LineCookie of cookies) {
        objetoCookie['' + LineCookie.split('=')[0]] = LineCookie.split('=')[1];
    }

    let valor = objetoCookie['' + cookie];

    if (typeof valor === "undefined") {

        valor = replacer();

        documento.cookie += cookie + "=" + valor + ";";
    }

    return valor;
}