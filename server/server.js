import { config } from "dotenv";
import OpenAI from "openai";
import readline from "readline";

config();

const openai = new OpenAI({
  api_key: "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", 
  // you need to find a free api key. this is not valid 
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: input },
    ],
  });

  console.log(response.data.choices[0].message.content);
  userInterface.prompt();
});
