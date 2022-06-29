import { lista } from "./lista.ts"

export function body(colores: string[]): string{
    let content;
    if(colores.length > 0){
        content = lista(colores);
    }else{
        content = '';
    }
    return `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <form action="/api/colores" method="post">
                            <p>Ingrese color en inglés</p>
                            <input type="text" name="color" id="color" placeholder="Color">
                            <input type="submit" value="Ingresar">
                        </form>
                        <ul>${content}</ul>
                    </body>
                </html>`
}