import { Context } from "../../deps.tsx";
import { body } from "../middlewares/body.ts";
// import React from "https://dev.jspm.io/react/index.js"
// import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js"

const colores: string[] = [];

const saveAndShow = async (ctx: Context) => {
    try {
        const colorIngresado = await (await ctx.request.body({type: 'form'}).value).values()
        
        for(const color of colorIngresado){
            colores.push(color)
        }
       
        ctx.response.redirect('/')
    } catch (error) {
        console.error('Ha ocurrido un error', error)
    }
}

const inicio =  (ctx: Context) => {
    try {
        ctx.response.body = body(colores)
    } catch (error) {
        console.error('Ha ocurrido un error', error)
    }
}

export {saveAndShow, inicio}

