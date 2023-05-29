import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
  organization: REACT_APP_ORGANIZATION,
  apiKey: REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

// openai
//   .createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Hello" }],
//   })
//   .then((res) => {
//     console.log(res.data.choices[0].message.content);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
});
