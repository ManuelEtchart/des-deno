import { Router } from "../../deps.tsx";
import { saveAndShow, inicio} from "../handlers/colores.handlers.tsx"

export const colores = new Router()
.post('/api/colores', saveAndShow)
.get('/', inicio)


