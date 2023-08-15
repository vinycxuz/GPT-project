import { configurationOpeaiAI, textCompletion } from "./src/openai"

export async function sendText(req, res){
  const openaiAPI = configurationOpeaiAI()

  try {
    const response = await openaiAPI.createCompletion(
      textCompletion("Eu gosto de vc")
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