const express = require("express")
const promptController = require("../controllers/prompt-controller")

export const routes = express.Router()

routes.post('api/prompt', promptController.sendText)