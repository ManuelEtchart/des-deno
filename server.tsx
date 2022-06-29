import { Application } from "./deps.tsx"
import { colores } from "./src/routes/colores.routes.tsx"
const app = new Application()

app.use(colores.routes())
app.use(colores.allowedMethods())

app.listen({port: 8080})
console.log('Escuchando puerto 8080')