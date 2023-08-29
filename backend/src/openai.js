const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

module.exports = class openAIConfiguration {
  static configuration() { 
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    })
    return new OpenAIApi(configuration);
  }

  static textCompletion({prompt}) {
    return{
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      }
  }
}