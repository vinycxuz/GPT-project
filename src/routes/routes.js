import { Router } from "express"
import { sendText } from "../controllers/prompt-controller"
const routes = Router()

routes.post('/api/prompt', sendText)

export default routes