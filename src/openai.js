import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const YOUR_API_KEY = process.env.OPENAI_API_KEY;

const messages = [
  {
    role: "system",
    content: "You are an artificial intelligence assistant and you need to engage in a helpful, detailed, polite conversation with a user.",
  },
  {
    role: "user",
    content: "How many stars are in the universe?",
  },
];

const configuration = new Configuration({
  apiKey: YOUR_API_KEY,
  basePath: "https://api.perplexity.ai",
});

const client = new OpenAIApi(configuration);

async function chatCompletion() {
  // Chat completion without streaming
  const response = await client.createChatCompletion({
    model: "llama-3.1-sonar-large-128k-online",
    messages: messages,
  });
  console.log(response.data);

  // Chat completion with streaming
  const responseStream = await client.createChatCompletion({
    model: "llama-3.1-sonar-large-128k-online",
    messages: messages,
    stream: true,
  });
  for await (const response of responseStream) {
    console.log(response);
  }
}

chatCompletion();

export { configuration, client };
