//handler ownapi
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const perform_AI_completion = async (question) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Odpowiedz krótko na zadane pytanie.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 1,
      max_tokens: 4000,
      top_p: 1,
    });

    return completion.data.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello from API!" });
  } else if (req.method === "POST") {
    try {
      const { question } = req.body; // Pytanie z ciała zapytania POST
      if (!question) {
        res
          .status(400)
          .json({ error: "No question provided in the request body" });
        return;
      }

      const AI_completion_result = await perform_AI_completion(question);

      res.status(200).json({ reply: AI_completion_result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
