const inputPrompt = require("../models/input-prompt")
const openAIConfiguration = require("../openai")

module.exports = {
  async sendText(req, res){
    const openaiAPI = openAIConfiguration.configuration()
    const inputModel = new inputPrompt(req.body)

    try {
      const response = await openaiAPI.createCompletion(
        openAIConfiguration.textCompletion(inputModel)
      )

      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text
      })
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response ? error.response : "there was an inssue on the server"
      })
    }
  }
}