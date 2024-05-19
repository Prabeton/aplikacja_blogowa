// handler ownapi
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let previousQuestion = null;

const perform_AI_completion = async (content, role) => {
  try {
    const messages = [];
    if (role === "system" && previousQuestion) {
      messages.push({ role: "user", content: previousQuestion });
    }
    messages.push({ role: role, content: content });

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      temperature: 1,
      max_tokens: 4000,
      top_p: 1,
    });

    return completion.choices[0].message.content;
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

      const systemReply = await perform_AI_completion(question, "system");
      previousQuestion = question;

      res.status(200).json({ reply: systemReply });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
