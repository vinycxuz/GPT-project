const { Configuration, OpenAIApi } = require("openai");

export const configurationOpeaiAI = () => { 
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  return new OpenAIApi(configuration);
};

export const textCompletion = ({prompt}) => {
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
