// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.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,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // Downgraded to GPT-3.5 due to high traffic. Sorry for the inconvenience.
    // If you have access to GPT-4, simply change the model to "gpt-4"
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "You are a helpful assistant." }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })

}