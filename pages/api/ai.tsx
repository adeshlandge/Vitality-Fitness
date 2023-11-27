import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt, // Text prompt to generate continuation from, passed in as a request body parameter
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 2500, // Maximum number of tokens to generate in the output text
    });

    // Send a response with a status code of 200 and the generated text as the response body
    console.log(completion.data);
    res.status(200).json({ result: completion.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
