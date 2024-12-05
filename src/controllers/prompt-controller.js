import inputPrompt from "../models/input-prompt";
import { client } from "../openai";

export async function sendText(req, res) {
  const inputModel = new inputPrompt(req.body);

  try {
    const response = await client.createChatCompletion({
      model: "llama-3.1-sonar-large-128k-online",
      messages: [
        {
          role: "user",
          content: inputModel.prompt,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: response.data.choices[0].message.content,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response ? error.response.data : "there was an issue on the server",
    });
  }
}