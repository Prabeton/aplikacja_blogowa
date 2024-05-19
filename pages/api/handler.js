import axios from "axios";
import OpenAI from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAI(configuration);

const getToken = async () => {
  try {
    const response = await axios.post("https://tasks.aidevs.pl/token/ownapi", {
      apikey: "19117213-d4ba-45ee-aefc-0b21b3d1b666",
    });
    console.log("(function) response.data:", response.data);
    return response.data.token;
  } catch (error) {
    console.error("(function) Błąd pobierania tokenu:", error);
    throw error;
  }
};

const getTask = async (token) => {
  try {
    const response = await axios.get(`https://tasks.aidevs.pl/task/${token}`);
    console.log("(function) task:", response.data);
    return response.data;
  } catch (error) {
    console.error("(function) Błąd pobierania zadania:", error);
    throw error;
  }
};

const perform_AI_completion = async (question) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Treść polecania dla API openai",
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

  return completion.choices[0].message.content;
};

const postAnswer = async (token, textAnswer) => {
  try {
    const response = await axios.post(
      `https://tasks.aidevs.pl/answer/${token}`,
      {
        answer: textAnswer,
      }
    );
    return response.data;
  } catch (error) {
    console.error("(function) Błąd wysyłania odpowiedzi:", error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello from API!" });
  } else if (req.method === "POST") {
    try {
      const token = await getToken();
      console.log("(main) getToken:", token);

      const task = await getTask(token);
      console.log("(main) getTask:", task);

      // const AI_completion_result = await perform_AI_completion(task);
      // console.log("(main) AI_completion_result:", AI_completion_result);

      // const resultTask = await postAnswer(token, AI_completion_result);
      // console.log(resultTask);

      res.status(200).json({ result: resultTask });
    } catch (error) {
      console.error("(main) Wystąpił błąd:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
